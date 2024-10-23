import axios from "axios";

async function getProducts(limit=0,offest=0,ordering="price",searchQuery=""){
    return await axios.get(`https://api.velonna.co/list/product/?ordering=${ordering}&limit=${limit}&offset=${offest}`).then((res)=>{
        return res.data["results"]
    })

    
}


async function recomendProducts(){
    const data = await axios.get("https://api.velonna.co/list/product").then((res)=>{
        return res.data["results"]
    })
}


async function getProductByHsn(hsn:String){
    const data = await axios.get("https://api.velonna.co/product/"+hsn+"/details").then((res)=>{
        return res.data
    })

    return data
}

export {getProducts,getProductByHsn}