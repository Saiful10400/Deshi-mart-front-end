 
import BrandCarosel from "../Ui/BrandCarosel";
import Tittle from "../Ui/Tittle";

 

const BrandList = () => {
   

    return (
        <div>
           <Tittle seeMoreRoute="/brands" text="Popular Brands" /> 
           <BrandCarosel/>
        </div>
    );
};

export default BrandList;