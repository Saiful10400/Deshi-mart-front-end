import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  
} from "@nextui-org/react";
import {   ChevronDown, Menu } from "lucide-react";
import { useGetAllCategoryQuery } from "../../Redux/api/api";
import {  useNavigate } from "react-router-dom";

type Tcategory = {
  _count: {
    productId: number;
  };
  categoryId: string;
  logo: string;
  name: string;
  slug: string;
};
import "./css/megaMenu.css";
import SecondaryNavRoutes from "../Ui/SecondaryNavRoutes";
import { useAppDispatch } from "../../Redux/feathcer/hoocks";
import { searchByCategory } from "../../Redux/feathcer/ProductSearchingSlice";
const SecondaryNav = () => {
  const { data } = useGetAllCategoryQuery({ offset: 0, limit: 200 });
  const move = useNavigate();
  const category: Tcategory[] = data?.data?.result;
  const dispatch=useAppDispatch()

  return (
    <div className="hidden py-4 lg:flex justify-between items-center">
      <Dropdown>
        <DropdownTrigger>
          <Button className="bg-[#f97316] font-bold text-base text-white rounded-md">
            <Menu /> <span>All Categories</span> <ChevronDown />{" "}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Dropdown menu with icons"
          className=""
          variant="faded"
        >
          {category?.map((item) => (
            <DropdownItem
              key={item.categoryId}
              onPressChange={(e) => {
                if (e){
                  dispatch(searchByCategory(item.name))
                  move(`/all-product`);
                }
              }}
              shortcut={item._count.productId}
              startContent={
                <img
                  src={item.logo}
                  className="w-[30px] h-[30px] object-cover rounded-sm"
                  alt="icon"
                ></img>
              }
            >
              {item.name.length >= 10
                ? item.name.slice(0, 10) + "..."
                : item.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <SecondaryNavRoutes />
    </div>
  );
};

export default SecondaryNav;
