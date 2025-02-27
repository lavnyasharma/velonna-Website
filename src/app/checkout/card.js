import { useRef } from "react";
import { load } from "@cashfreepayments/cashfree-js";

function V3Card() {
    let cashfree, cardComponent, cvvComponent, cardHolder, cardExpiry, save;
    let paymentBtn = useRef(null),
        paymentMessage = useRef(null);

    const renderCard = async () => {
        cashfree = await load({
            mode: "sandbox",
        });

        let styleObject = {
            fonts: [{
                cssSrc: "https://fonts.googleapis.com/css2?family=Oxygen"
            }],
            base: {
                fontSize: "16px",
                fontFamily: "Oxygen",
                backgroundColor: "#ffffff",
                ":focus": {
                    border: "1px solid #3478f6",
                },
                border: "1px solid #a6a7b0",
                borderRadius: "5px",
                padding: "16px",
                color: "#2B2D42",
            },
            invalid: {
                color: "#cb2c2c",
            },
        };

        let cardOptions = {
            values: {
                placeholder: "Enter Card Number",
            },
            style: styleObject,
        };
        cardComponent = cashfree.create("cardNumber", cardOptions);
        cardComponent.mount("#cardNumber");

        let cvvOptions = {
            style: styleObject,
        };
        cvvComponent = cashfree.create("cardCvv", cvvOptions);
        cvvComponent.mount("#cardCvv");

        let cardHolderOptions = {
            values: {
                placeholder: "Enter Card Holder Name",
            },
            style: styleObject,
        };
        cardHolder = cashfree.create("cardHolder", cardHolderOptions);
        cardHolder.mount("#cardHolder");

        let cardExpiryOptions = {
            style: styleObject,
        };
        cardExpiry = cashfree.create("cardExpiry", cardExpiryOptions);
        cardExpiry.mount("#cardExpiry");

        let saveOptions = {
            values: {
                label: "Save Card for later",
            },
            style: styleObject,
        };
        save = cashfree.create("savePaymentInstrument", saveOptions);
        save.mount("#save");

        cardExpiry.on("change", function (data) {
            toggleBtn();
        });
        cardHolder.on("change", function (data) {
            toggleBtn();
        });
        cardComponent.on("change", function (data) {
            cvvComponent.update({ cvvLength: data.value.cvvLength });
            toggleBtn();
        });
        cvvComponent.on("change", function (data) {
            toggleBtn();
        });
    };

    renderCard();

    const toggleBtn = () => {
        if (
            cardExpiry.isComplete() &&
            cardHolder.isComplete() &&
            cardComponent.isComplete() &&
            cvvComponent.isComplete()
        ) {
            paymentBtn.current.disabled = false;
        } else {
            paymentBtn.current.disabled = true;
        }
    };

    const doPayment = () => {
        paymentBtn.current.disabled = true;
        cashfree.pay({
            paymentMethod: cardComponent,
            paymentSessionId: "your-payment-session-id",
            savePaymentInstrument: save,
        })
        .then(function (data) {
            if (data != null && data.error) {
                paymentMessage.current.innerHTML = data.error.message;
            }
            paymentBtn.current.disabled = false;
        });
    };

    return (
        <div id="cardLayout" style={{ width: "400px", padding: "20px", background: "#f7f9ff" }}>
            <div id="cardNumber" style={{ marginBottom: "10px" }}></div>
            <div id="cardHolder" style={{ marginBottom: "10px" }}></div>
            <div style={{ marginBottom: "10px", display: "flex" }}>
                <div id="cardExpiry" style={{ marginRight: "1rem" }}></div>
                <div id="cardCvv"></div>
            </div>
            <div id="save" style={{ marginBottom: "10px" }}></div>
            <button type="submit" id="payNow" ref={paymentBtn} onClick={doPayment}
                style={{width: "100%", height: "35px", cursor: "pointer", border: "1px solid #7a8cbc", color: "#ffffff", background: "#7a8cbc", borderRadius: "8px"}}
            >
                Pay Now
            </button>
            <p id="paymentMessage" ref={paymentMessage} style={{ color: "#df1b41" }}></p>
        </div>
    );
}

export default V3Card;