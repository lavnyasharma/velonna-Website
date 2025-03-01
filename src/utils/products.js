import axios from "axios";

async function getProducts(limit=0,offest=0,ordering="price",searchQuery=""){
    return await axios.get(`https://api.velonna.co/ecom/product/list/?ordering=${ordering}&limit=${limit}&offset=${offest}`).then((res)=>{
        return res.data["results"]
    })

    
}


async function recomendProducts(){
    const data = await axios.get("https://api.velonna.co/ecom/product/list/?collection=7").then((res)=>{
        return res.data["results"]
    })
}


async function getProductByHsn(hsn){
    const data = await axios.get("https://api.velonna.co/product/"+hsn+"/details").then((res)=>{
        return res.data
    })

    return data
}



const formatPrice = (price) => {
    return Number(price)?.toLocaleString('en-IN');
  };
export {getProducts,getProductByHsn,formatPrice}