import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Image,
} from "@nextui-org/react";
import { CarFront, ChevronDown, Menu } from "lucide-react";
import { useGetAllCategoryQuery } from "../../Redux/api/api";
import { Link, useNavigate } from "react-router-dom";

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
const SecondaryNav = () => {
  const { data } = useGetAllCategoryQuery({ offset: 0, limit: 200 });
  const move = useNavigate();
  const category: Tcategory[] = data?.data?.result;

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
                if (e) move(`/category?id=${item.slug}`);
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
