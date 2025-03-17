import { useEffect, useState } from "react";

type tData = {
  image: string;
  carouselImages: string[];
};

const ProductImageCarosel = ({ data }: { data: tData }) => {
  const [currentImage, setCurrentImage] = useState<null|string>(null);
  useEffect(()=>{
setCurrentImage(data.image)
  },[data])
  return (
    <div className="w-full lg:w-1/2">
      <img
        className="w-full h-[300px] object-contain"
        src={currentImage as string}
        alt=""
      />

      {/* bottom image. */}
      
      <div className=" items-center gap-2  flex flex-wrap ">
        {data?.carouselImages?.map((item) => (
          <button  onClick={()=>setCurrentImage(item)} className="w-[80px] h-[80px] border p-1 rounded-md ">
            <img className="w-full h-full object-cover" src={item} alt="" />
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default ProductImageCarosel;
