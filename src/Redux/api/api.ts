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
    "category",
    "user",
    "shop"
  ],
  endpoints: (builder) => {
    return {
      // All Post querys.

      // auth

      signup: builder.mutation({
        query: (payload) => ({
          url: "/auth/signup",
          method: "POST",
          body: payload,
        }),
      }),

      login: builder.mutation({
        query: (payload) => ({
          url: "/auth/login",
          method: "POST",
          body: payload,
        }),
      }),

      changePassword: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      resetPasswordGetToken: builder.mutation({
        query: (payload) => ({
          url: "/auth/reset",
          method: "POST",
          body: payload,
        }),
      }),

      resetPassword: builder.mutation({
        query: (payload) => {
          console.log(payload);
          return {
            url: "/auth/reset-new-password",
            method: "POST",
            body: payload.data,
            headers: { authorization: payload.token },
          };
        },
      }),

      // vendor

      createStore: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      manageStore: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      createCoupne: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      manageCoupne: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      createProduct: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      manageProduct: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      // Admin

      createCategory: builder.mutation({
        query: (payload) => ({
          url: "/admin/create-category",
          method: "POST",
          body: payload,
        }),
        invalidatesTags:["category"]
      }),

      manageCategory: builder.mutation({
        query: (payload) => ({
          url: `/admin/manage-category/${payload.id}?delete=${payload.delete}`,
          method: "POST",
          body: {name:payload.name},
        }),
        invalidatesTags:["category"]
      }),

      manageUser: builder.mutation({
        query: (payload) => ({
          url: `/admin/manage-user/${payload.id}?delete=${payload.delete}`,
          method: "POST",
        }),
        invalidatesTags:["user"]
      }),

      deleteStoreAdmin: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      // user

      addRecentProduct: builder.mutation({
        query: (payload) => ({
          url: "",
          method: "POST",
          body: payload,
        }),
      }),

      // GET apis.

      getLoggedInUser: builder.query({
        query: (token) => ({
          url: `/auth/loggedIn-user`,
          method: "GET",
          headers: { authorization: token },
        }),
      }),

      getRecentProduct: builder.query({
        query: () => ({
          url: "",
          method: "GET",
        }),
      }),

      getAllUserAndVendors: builder.query({
        query: (page) => ({
          url: `/common/user?offset=${(page-1)*10}&limit=${10}`,
          method: "GET",
        }),
        providesTags:["user"]
      }),

      getSingleOrAllStore: builder.query({
        query: () => ({
          url: "",
          method: "GET",
        }),
      }),

      getAllCategory: builder.query({
        query: () => ({
          url: "/common/category",
          method: "GET",
        }),
        providesTags:["category"]
      }),

      getSingleOrAllProducts: builder.query({
        query: (query) => {
          let baseUrl = "/common/products?";
          const keys = Object.keys(query);

          keys.forEach(
            (item) => (baseUrl = baseUrl + item + "=" + query[item])
          );

          return {
            url: baseUrl,
            method: "GET",
          };
        },
      }),
    };
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
  useManageUserMutation,

  // Queries
  useGetRecentProductQuery,
  useGetAllUserAndVendorsQuery,
  useGetSingleOrAllStoreQuery,
  useGetAllCategoryQuery,
  useGetSingleOrAllProductsQuery,
  useGetLoggedInUserQuery,
} = baseApi;
