const formateOrderArray=(data,singleProduct)=>{
    console.log(data)

    if(!data) return
    const bigText=JSON.stringify(data)

    return bigText.includes(singleProduct)

}

export default formateOrderArray