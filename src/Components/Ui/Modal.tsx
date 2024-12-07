import { useEffect, useState } from "react";
import imageUpload from "../../Utils/imageUpload";
import InputField from "./Input";
import Button from "./Button";
import { useCreateProductMutation } from "../../Redux/api/api";
import swal from "sweetalert";
const Modal = () => {
  const inetialValue = {
    name: "",
    price: "",
    quantity: "",
    rating: "",
    description: "",
    brand: "",
    img: "",
  };

  const [formData, setFormData] = useState(inetialValue);


const update = (data) => {

  setFormData({ ...formData, ...data });
};

  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  // image upload handle.
  const imageUploadHandle = async (e) => {
    const reader = new FileReader();
    if(!e?.target?.files[0]){
      return
    }
    reader.onload = (event) => {
      update({ img: event.target.result });
    };
    reader.readAsDataURL(e.target.files[0]);

    // upload image.
    setIsUploading(true);
    setErrorMessage(null);
    imageUpload(e.target.files[0])
      .then((details) => details.json())
      .then((res) => {
        update({ img: res.data.display_url });
        setIsUploading(false);
      })
      .catch(() => {
        isUploading(false);
        setErrorMessage(
          <span className="font-bold text-red-400">"Upload Failed!"</span>
        );
      });
  };

  const [
    createRoom,
    { isLoading: roomLoading, data: roomData, error: roomError },
  ] = useCreateProductMutation();

  // form submit handle.


  const formSubmitHandle = (e) => {
    e.preventDefault();
    if(isUploading) return
    if (!formData.img){
      
      document.getElementById("my_modal")?.close();
      swal("Failed", "You have to upload product image.", "error");
      return
    }

    createRoom({ ...formData });
  };

  useEffect(() => {
    if (roomData?.statusCode === 200) {
      setFormData(inetialValue)
      document.getElementById("my_modal")?.close();
      swal("Success", roomData.message, "success");
    } else if (roomError) {
      document.getElementById("my_modal")?.close();
      swal("Failed", roomError?.data?.message, "error");
    }
  }, [roomData, roomError]);

  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box lg:max-w-[50vw] ">
        <form className="mb-4" method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* main content is form here. */}
        <h1 className="font-semibold text-xl mb-4">Crate A New Product.</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          <label
            className="lg:w-1/2 h-max cursor-pointer"
            htmlFor="product_image"
          >
            <div className="rounded-lg overflow-hidden w-full h-[200px] ">
              {formData?.img ? (
                <div className="relative w-full h-full">
                  {isUploading && (
                    <div className="to-center flex-col text-gray-200 rounded-lg absolute top-0 left-0 w-full h-full bg-[#3b3b3bc0]">
                      <span
                        className={
                          errorMessage
                            ? "hidden"
                            : "loading loading-spinner loading-lg"
                        }
                      ></span>
                      <h1>{errorMessage ? errorMessage : "Uploading"}</h1>
                    </div>
                  )}
                  <img
                    className="w-full h-full object-cover"
                    src={formData?.img}
                    alt=""
                  />
                </div>
              ) : (
                <div className="w-full h-full border-dashed border-2 border-black rounded-lg to-center">
                  Click To Upload
                </div>
              )}
            </div>
          </label>
          <input
            className="hidden"
             accept="image/*"
            id="product_image"
            type="file"
            onInput={imageUploadHandle}
          />
          <form onSubmit={formSubmitHandle} className="lg:w-[50%] " action="">
            <div className="grid grid-cols-1 gap-3 gap- lg:grid-cols-2">
              <InputField
                type="text"
                altimeValue={formData.name}
                valueUpdate={(e) => update({ name: e.target.value })}
                placeholder="Product Name"
              />
              <InputField
                type="text"
                altimeValue={formData.brand}
                valueUpdate={(e) => update({ brand: e.target.value })}
                placeholder="Brand Name"
              />
              <InputField
                type="number"
                altimeValue={formData.price}
                valueUpdate={(e) => update({ price: parseInt(e.target.value) })}
                placeholder="Product Price"
              />
              <InputField
                type="number"
                altimeValue={formData.quantity}
                valueUpdate={(e) => update({ quantity: parseInt(e.target.value) })}
                placeholder="Product Quantity"
              />
              <InputField
                type="number"
                altimeValue={formData.rating}
                valueUpdate={(e) => update({ rating: parseInt(e.target.value) })}
                placeholder="Product Rating"
              />
            </div>
            <InputField
              type="textarea"
              altimeValue={formData.description}
              valueUpdate={(e) => update({ description: e.target.value })}
              placeholder="Product Description"
            />
            <div className="text-end">
              <Button disable={isUploading} text={"Create"} />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
