const getNumberArrayFromNumber=(number:number)=>{
    const numberArray:number[]=[]
    if(!number) return numberArray
    for (let i = 1; i <= number; i++){
        numberArray.push(i)
    }
    return numberArray
}

export default getNumberArrayFromNumber