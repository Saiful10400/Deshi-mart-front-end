

const ManupulateLocalStorageToken = (data:string,type:"getItem" | "setItem") => {
   if(type==="setItem"){
    localStorage.setItem("token",data)
   } else if(type==="getItem"){
    return localStorage.getItem("token")
   }
};

export default ManupulateLocalStorageToken;