 
import CategoryCarosel from "../Ui/CategoryCarosel";
import Tittle from "../Ui/Tittle";

 

const CategoriesList = () => {
   

    return (
        <div>
           <Tittle seeMoreRoute="/categories" text="Browse By Category" /> 
           <CategoryCarosel/>
        </div>
    );
};

export default CategoriesList;