import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  useGetAllBrandQuery,
  useGetAllCategoryQuery,
} from "../../Redux/api/api";

export type TdropDownList = {
  key: string;
  tittle: string;
  avatar?: string;
  listOf: "category" | "brand";
};

type TdropDown = {
  tittle: string;
  name: string;
  defaultValue?: string;
  className?: string;
  required?: boolean;
  dropDownListConfig: TdropDownList;
};

const DropDown = ({
  tittle,
  name,
  defaultValue,
  className,
  required,
  dropDownListConfig,
}: TdropDown) => {
  const [listItems, setListItems] = useState([]);

  const { data: Brands } = useGetAllBrandQuery({ offset: 0, limit: 90000 });
  const { data: Category } = useGetAllCategoryQuery({
    offset: 0,
    limit: 90000,
  });

  useEffect(() => {
    if (dropDownListConfig.listOf === "brand" && Brands?.data?.result) {
      setListItems(Brands?.data?.result);
    }
    if (dropDownListConfig.listOf === "category" && Category?.data?.result) {
      setListItems(Category?.data?.result);
    }
  }, [Brands, Category, dropDownListConfig]);


  return (
    <label htmlFor={tittle} className="text-start w-full">
      <span className="font-semibold text-lg">{tittle}</span>
      <Select 
        id={tittle}
        required={true}
        defaultSelectedKeys={[defaultValue as string]}
        radius="none"
        className={
          "w-full  block outline-none text-xl border  rounded-lg overflow-hidden " +
          className
        }
        name={name}
        placeholder={"select " + tittle}
      >
        {listItems?.map((item) => {
      
          return (
            <SelectItem
              key={item[dropDownListConfig?.key]}
              startContent={
                dropDownListConfig.avatar?<Avatar
                alt="avatar img"
                className="w-6 h-6"
                src={item[dropDownListConfig?.avatar]}
              />:""
              }
            >
              {item[dropDownListConfig?.tittle]}
            </SelectItem>
          );
        })}
      </Select>
    </label>
  );
};

export default DropDown;
