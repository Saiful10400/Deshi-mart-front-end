import { Link } from "react-router-dom";
import { useGetAllCategoryQuery } from "../../Redux/api/api";

 


const HomeAsideSorting = () => {

  const {data}=useGetAllCategoryQuery(null)




  return (


 <div className="">

<h1 className="font-semibold text-xl">Sort by price:</h1>

<div className="flex justify-center mt-5 flex-col items-center  gap-5">

<div className="flex items-center gap-5 ">
<input className="w-[100px] text-lg text-center rounded-sm" type="number" placeholder="Min" />
<span className="text-xl font-semibold">To</span>
<input className="w-[100px] text-lg text-center rounded-sm" type="number" placeholder="Max" />
</div>
<button className="btn btn-success bg-[#f27f20] hover:bg-[#f27f20] hover:border-none border-none text-white w-[70%] btn-sm">Sort</button>

</div>

<h1 className="font-semibold mt-10 text-xl">Sort by Category:</h1>


<ul className="flex items-center gap-3 mt-5 flex-wrap">
            {
                data?.data?.map(item=><Link className="font-normal text-lg bg-gray-100 shadow-lg px-3 rounded-md" key={item.categoryId} to={`/all-product?category=${item.name}`}>{item.name}</Link>)
            }
        </ul>


 </div>



  );
};

export default HomeAsideSorting;
