import React, { useState } from "react";
import CenterAlign from "../../Helper/CenterAlign";
import { useAppDispatch, useAppSelector } from "../../../Redux/feathcer/hoocks";
import {
  cartIncrementwithNumber,
  deleteCart,
} from "../../../Redux/feathcer/CartSlice";
import { MdDeleteForever } from "react-icons/md";
import { others } from "@chakra-ui/react";
import Button from "../../Ui/Button";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useAppDispatch();
  const Orders = useAppSelector((state) => state.cartStore);


  const isInStock=()=>{
    const isOutOfStock=Orders?.find(item=>{
        if(item.count>item.data.quantity || item.count===0) return true
        return false
    })
    if(isOutOfStock) return true
    return false
  }

  const getTotalAmout=()=>{
    let totalamount:number=0
    Orders.forEach(item=>{
        const count=item.count
        const price=item.data.price
        totalamount=totalamount+(count*price)
    })
    return totalamount
  }
  return (
    <CenterAlign>
      <div className="min-h-[70vh] lg:py-28 lg:pt-10">
        {Orders?.length === 0 ? (
          <div className="to-center w-full h-[70vh] text-lg mt-4">
            No Order Available!
          </div>
        ) : (
          <div data-aos="fade-up">
            <h1 className="text-center text-2xl font-semibold">
              Your Cart ({Orders?.length} items)
            </h1>
            <div>
              <div className="overflow-x-auto lg:min-h-[500px] mt-5">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className=" text-xl font-semibold">
                      <th>S/N</th>
                      <th>Item</th>
                      <th>Quantity Status</th>
                      <th>Quantity</th>
                      <th>Price ($)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="lg:text-base">
                    {Orders?.map((item, idx) => {
                      return (
                        <tr data-aos="fade-down"
                          key={item._id}
                          className={` ${
                            idx % 2 !== 0 ? "bg-[#ffffff]" : "bg-[#f5f0f09c]"
                          }`}
                        >
                          <td className="font-semibold text-center">
                            {(idx += 1)}
                          </td>
                          <td className="">
                            <div className="flex items-center justify-start gap-3">
                              <div className="">
                                <div className=" rounded-lg h-[60px] w-[80px]">
                                  <img
                                    className="w-full h-full rounded-lg object-cover"
                                    src={item.data.img}
                                  />
                                </div>
                              </div>
                              <div>
                                <span className="font-bold text-xs p-1 bg-[#d6f7da] rounded-sm">
                                  {item.data.brand}
                                </span>
                                <h1 className="font-normal">
                                  {item.data.name}
                                </h1>
                              </div>
                            </div>
                          </td>
                          <td
                            className={` font-semibold text-center ${
                              item.count > item.data.quantity
                                ? "text-red-500"
                                : "text-black"
                            }`}
                          >
                            {item.count > item.data.quantity
                              ? "Out Of Stock"
                              : "In Stock"}
                          </td>
                          <td className="font-semibold text-center">
                            <div className="flex items-center gap-3 border border-black w-max rounded-lg  px-2">
                              <button
                                onClick={() =>
                                  dispatch(
                                    cartIncrementwithNumber({
                                      id: item.data?._id,
                                      method: "d",
                                    })
                                  )
                                }
                                className="text-2xl"
                              >
                                -
                              </button>
                              <h1 className="text-xl font-normal w-[50px] text-center">
                                {item.count}
                              </h1>
                              <button
                                onClick={() =>
                                  dispatch(
                                    cartIncrementwithNumber({
                                      id: item.data?._id,
                                      method: "i",
                                    })
                                  )
                                }
                                className="text-2xl"
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="font-semibold text-center">
                            $ {item.data.price * item.count}
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                dispatch(deleteCart({ id: item.data?._id }))
                              }
                              className="text-2xl p-2 bg-gray-200 rounded-full text-red-500"
                            >
                              <MdDeleteForever />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-end mt-5">
                <div className="w-[30%] bg-gray-200 p-3 rounded-lg">
                  <h1 className="border-b border-gray-400 text-2xl flex justify-between items-center">
                    Total: <span>$ {getTotalAmout()}</span>
                  </h1>
                  <Link to={"/checkout"} onClick={(e)=>isInStock()&&e.preventDefault()} className={`px-5 py-2  inline-block ${isInStock()?"bg-gray-400 text-gray-500":"bg-black text-white"}  rounded-md text-lg font-semibold mt-4`} >Check Out</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </CenterAlign>
  );
};

export default Cart;
