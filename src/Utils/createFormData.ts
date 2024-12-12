const createFormData=(data)=>{

    const keys=Object.keys(data)

    const formData=new FormData()

    keys.forEach(item=>{
        formData.append(item,data[item])
    })
    return formData


}

export default createFormData