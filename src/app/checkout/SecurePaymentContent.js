import { Lock, ShieldCheck, CreditCard, CheckCircle, HelpCircle } from "lucide-react";

const SecurePaymentInfo = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 ">
      <h2 className="text-[12px] font-semibold mb-4 text-gray-800 dark:text-white">
        Your Payment is Secure
      </h2>
      <div className="grid gap-4 text-[10px]">
        <div className="flex items-center gap-3">
          <ShieldCheck className="text-green-500" size={20} />
          <p className="text-gray-700 dark:text-gray-300">
            We use <strong>Cashfree</strong>, a PCI-DSS compliant payment gateway, ensuring fully secure transactions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Lock className="text-blue-500" size={20} />
          <p className="text-gray-700 dark:text-gray-300">
            Your payment details are <strong>encrypted with 256-bit SSL</strong> for maximum security.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <CreditCard className="text-yellow-500" size={20} />
          <p className="text-gray-700 dark:text-gray-300">
            We <strong>never store your card or banking details</strong>. All transactions are processed securely by Cashfree.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500" size={20} />
          <p className="text-gray-700 dark:text-gray-300">
            Every transaction is <strong>authenticated via OTP</strong>, ensuring only you can authorize payments.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <HelpCircle className="text-purple-500" size={20} />
          <p className="text-gray-700 dark:text-gray-300">
            Need help? Our support team is available <strong>24/7</strong> to assist you with payment issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecurePaymentInfo;
