import { TdropDownList } from "../Components/Ui/DropDown";

export type Tfield = {
  name: string;
  type: "dropDown" | "textArea" |"file"|"text"|"number"|"RichTextEditor";
  multiple?: boolean;
  key: string;
  image?: boolean;
  defaultValue?: string;
  required?:boolean;
  dropDownListConfig?:TdropDownList
};

export type TinputDashboardForm = {
  name: string;
  operation?: "update" | "create";
  tittle: string;
  manageRoute: string;
  updateId?: string;
  fields: (Tfield | Tfield[])[];
};

export interface TtableData {
  mode?: "admin" | "vendor";
  name: string;
  tittle: string;
  createRoute: string;
  keyValue: {
    [key: string]: string;
  };
}

export interface Tbrand {
  brandId: string;
  logo: string;
  name: string;
  updated: string;
}

interface Shop {
  name: string;
  logo: string;
  shopId: string;
  _count: {
    followersId: number;
    products: number;
  };
}

interface Vendor {
  email: string;
  isDeleted: boolean;
  name: string;
  photo: string;
  vendorId: string;
  shopId: Shop;
}

export interface Tuser {
  admin: string | null;
  buyer: string | null;
  email: string;
  role: string;
  vendor: Vendor;
}
