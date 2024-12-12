import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../Utils/getToken";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",
    prepareHeaders: (header) => {
      if (getToken()) header.set("Authorization", getToken() as string);
    },
  }),
  tagTypes: [
    "Products",
    "authentication",
    "rooms",
    "slots",
    "booking",
    "allBookingForAdmin",
  ],
  endpoints: (builder) => {
    return{

// All Post querys.


// auth

signup:builder.mutation({
  query:(payload)=>({
    url:"/auth/signup",
    method:"POST",
    body:payload
  })
}),


login:builder.mutation({
  query:(payload)=>({
    url:"/auth/login",
    method:"POST",
    body:payload
  })
}),


changePassword:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


resetPasswordGetToken:builder.mutation({
  query:(payload)=>({
    url:"/auth/reset",
    method:"POST",
    body:payload
  })
}),


resetPassword:builder.mutation({
  query:(payload)=>{
    console.log(payload)
   return {
    url:"/auth/reset-new-password",
    method:"POST",
    body:payload.data,
    headers:{authorization:payload.token}
  }}
}),

// vendor

createStore:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


manageStore:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


createCoupne:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


manageCoupne:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


createProduct:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


manageProduct:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


// Admin


createCategory:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


manageCategory:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


deleteStoreAdmin:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


// user


addRecentProduct:builder.mutation({
  query:(payload)=>({
    url:"",
    method:"POST",
    body:payload
  })
}),


// GET apis.


getRecentProduct:builder.query({
  query:()=>({
    url:"",
    method:"GET"
  })
}),


getAllUserAndVendors:builder.query({
  query:()=>({
    url:"",
    method:"GET"
  })
}),


getSingleOrAllStore:builder.query({
  query:()=>({
    url:"",
    method:"GET"
  })
}),


getAllCategory:builder.query({
  query:()=>({
    url:"",
    method:"GET"
  })
}),


getSingleOrAllProducts:builder.query({
  query:()=>({
    url:"",
    method:"GET"
  })
}),










    }
  },
});

export const {
  // Mutations
  useSignupMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useResetPasswordGetTokenMutation,
  useResetPasswordMutation,
  useCreateStoreMutation,
  useManageStoreMutation,
  useCreateCoupneMutation,
  useManageCoupneMutation,
  useCreateProductMutation,
  useManageProductMutation,
  useCreateCategoryMutation,
  useManageCategoryMutation,
  useDeleteStoreAdminMutation,
  useAddRecentProductMutation,

  // Queries
  useGetRecentProductQuery,
  useGetAllUserAndVendorsQuery,
  useGetSingleOrAllStoreQuery,
  useGetAllCategoryQuery,
  useGetSingleOrAllProductsQuery
}
 = baseApi;
