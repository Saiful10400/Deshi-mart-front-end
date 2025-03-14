import React, { useState } from "react";
import { Tfield, TinputDashboardForm, Tuser } from "../../Types";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import useSendPost from "../../Utils/useSendPost";
import useShowResponse from "../../Utils/useShowResponse";
import createFormData from "../../Utils/createFormData";
import {
  useCreateBannerMutation,
  useCreateBrandMutation,
  useCreateCategoryMutation,
  useCreateProductMutation,
  useCreateStoreMutation,
  useUpdateOrDeleteShopMutation,
} from "../../Redux/api/api";
import DropDown, { TdropDownList } from "./DropDown";
import RadioInput from "./RadioInput";
import { useAppSelector } from "../../Redux/feathcer/hoocks";
import RichTextEditor from "./RichTextEditor";
import imageUpload, { imageUploadToDb } from "../../Utils/imageUploadImgBb";

const DashboardForm = ({
  data,
  defaultValue,
}: {
  data: TinputDashboardForm;
  defaultValue?: { [key: string]: string };
}) => {
  const prePareItemFromArray = (item: Tfield[]) => {
    return (
      <div className="flex items-center gap-5 ">
        {item.map((item) => {
          if (["number", "textArea", "file", "text"].includes(item.type)) {
            return (
              <Input
              multiple={item.multiple}
                defaultValue={
                  defaultValue && item?.defaultValue
                    ? defaultValue[item?.defaultValue]
                    : ""
                }
                className="!text-sm !rounded-md font-bold"
                name={item.key}
                key={item.name}
                tittle={item.name}
                type={item.type}
              />
            );
          } else if (item.type === "dropDown") {
            return (
              <DropDown
                dropDownListConfig={item.dropDownListConfig as TdropDownList}
                name={item.key}
                tittle={item.name}
              />
            );
          }
        })}
      </div>
    );
  };


  // for special case state.
  const[richTextContent,setRichTextInput]=useState("")

  const prepareInput = (item: Tfield | Tfield[]) => {
    if (Array.isArray(item)) {
      return prePareItemFromArray(item);
    } else if (item.type === "textArea") {
      return (
        <Input
        multiple={item.multiple}
          defaultValue={
            defaultValue && item?.defaultValue
              ? defaultValue[item?.defaultValue]
              : ""
          }
          className="!text-sm !rounded-md font-bold !resize-none min-h-[150px] "
          name={item.key}
          key={item.name}
          tittle={item.name}
          type={item.type}
          
        />
      );
    } 
    else if (item.type === "RichTextEditor") {
      return (
        <RichTextEditor setterFn={setRichTextInput} tittle={item.name} />
      );
    } 
    else if (item.type === "dropDown") {
      return (
        <DropDown
          dropDownListConfig={item.dropDownListConfig as TdropDownList}
          name={item.name}
          tittle={item.name}
        />
      );
    } 
    else {
      return (
        <Input
        multiple={item.multiple}
          defaultValue={
            defaultValue && item?.defaultValue
              ? defaultValue[item?.defaultValue]
              : ""
          }
          className="!text-sm !rounded-md font-bold "
          name={item.key}
          key={item.name}
          tittle={item.name}
          type={item.type}
        />
      );
    }
  };

  const manageApi = () => {
    if (data.name === "Banner") {
      return useCreateBannerMutation;
    }
    if (data.name === "Brand") {
      return useCreateBrandMutation;
    }
    if (data.name === "Product") {
      return useCreateProductMutation;
    }
    if (data.name === "My Shop") {
      return useUpdateOrDeleteShopMutation;
    }
    if (data.name === "Create Shop") {
      return useCreateStoreMutation;
    }
    if (data.name === "Category") {
      return useCreateCategoryMutation;
    }
  };

  const [send, startLoading] = useSendPost(manageApi());
  const showResponse = useShowResponse();


  // ## special case (only for product create.)
  const [flashSaleStatus, setFlashSaleStatus] = useState(false);
 const { loggedInUser }: { loggedInUser: Tuser | null } = useAppSelector(
        (s) => s.authStore
      );

  const formHandle = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target;
    const keys = data.fields.flat();
     

    const formData: { [key: string]: string | number |boolean |string[] } = {};
    keys.forEach((item: Tfield) => {
      if (!item?.image || form[item.key]?.files?.length !== 0) {
        formData[item.key] = item.image
          ? form[item.key]?.files[0]
          : form[item.key]?.value;
      }
    });

    
    // manupulate form data.
     
    // for richTextEditor.


// for product input
    if(data.name==="Product" && loggedInUser){
      formData.flashSale=flashSaleStatus
      formData.discount=Number(form?.discount?.value||0)
      formData.shopId=(loggedInUser as Tuser)?.vendor?.shopId?.shopId
      formData.description=richTextContent
    }
    if(data.name==="Create Shop" && loggedInUser){
      formData.vendorId=(loggedInUser as Tuser)?.vendor?.vendorId
    }
  
    if(data.name==="Product"){

       // cover image handler.

       try{
        startLoading()
        
        const url = await imageUpload(form?.carouselImages?.files);
        formData.carouselImages=url
        const response = await send({data: createFormData(formData)});
        showResponse(response);
        if (response.data?.statusCode === 200 && data.operation !== "update")
          form.reset();

       } catch(err){
        showResponse({data:{statusCode:400,success:false}})
       }
    


    }


     else{
    
      startLoading()
    const response = await send({
      data: createFormData(formData),
      id: data?.updateId,
    });
    showResponse(response);
    if (response.data?.statusCode === 200 && data.operation !== "update")
      form.reset();
    }
    
  };



  return (
    <div className="border bg-white rounded-lg">
      <div className="flex justify-between border-b py-4 px-5">
        <h1 className="text-base font-bold">{data.tittle}</h1>

        {data.operation === "update" ? (
          <PrimaryButton
            className="text-[14px] font-semibold rounded-md px-4 py-2"
            route={true}
            path={data.manageRoute}
            text={`${data.name}`}
          />
        ) : (
          <PrimaryButton
            className="text-[14px] font-semibold rounded-md px-4 py-2"
            route={true}
            path={data.manageRoute}
            text={`Manage ${data.name}s`}
          />
        )}
      </div>

      <form
        onSubmit={formHandle}
        className="flex flex-col px-5 py-4 gap-3 pb-10"
      >
        {data?.fields.map((item) => prepareInput(item))}

        {data.name === "Product" && (
          <div className="flex items-start min-h-[68px] gap-5">
            <RadioInput stateSetFn={setFlashSaleStatus} />
            {
              flashSaleStatus&&<Input
              className={`!text-sm !rounded-md font-bold`}
              name="discount"
              key="discount"
              tittle="Discount(%)"
              type="number"
            />
            }
          </div>
        )}

        {data.operation === "update" ? (
          <PrimaryButton
            className="w-max px-4 !rounded-md !text-sm"
            text={"Update " + data.name}
          />
        ) : (
          <PrimaryButton
            className="w-max px-4 !rounded-md !text-sm"
            text={"Create " + data.name}
          />
        )}
      </form>
    </div>
  );
};

export default DashboardForm;
