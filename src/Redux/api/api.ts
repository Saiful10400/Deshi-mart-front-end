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
  tagTypes: ["category", "user", "shop", "product","review"],
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

      checkCoupon: builder.mutation({
        query: (payload) => ({
          url: `/store/check-coupon/${payload.storeId}`,
          method: "POST",
          body: { code: payload.code },
        }),
      }),

      createPaymentLink: builder.mutation({
        query: (payload) => ({
          url: `/order/create-payment-link`,
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
          url: "/vendor/create-shop",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["user"],
      }),

      manageStoreFollow: builder.mutation({
        query: (payload) => ({
          url: "/store/manage-follow",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["shop"],
      }),

      deleteStore: builder.mutation({
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
          url: "/vendor/create-product",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["product"],
      }),

      updateOrDeleteShop: builder.mutation({
        query: (payload) => ({
          url: `/vendor/manage-shop/${payload.id}`,
          method: "POST",
          body: payload.data,
        }),
        invalidatesTags: ["user"],
      }),

      manageProduct: builder.mutation({
        query: (payload) => {
          console.log({ payload });

          return {
            url: `/vendor/manage-product/${payload.id}?delete=${payload.delete}&duplicate=${payload.duplicate}`,
            method: "POST",
            body: payload.data,
          };
        },
        invalidatesTags: ["product"],
      }),

      // Admin

      createCategory: builder.mutation({
        query: (payload) => ({
          url: "/admin/create-category",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["category"],
      }),

      manageCategory: builder.mutation({
        query: (payload) => ({
          url: `/admin/manage-category/${payload.id}?delete=${payload.delete}`,
          method: "POST",
          body: { name: payload.name },
        }),
        invalidatesTags: ["category"],
      }),

      manageUser: builder.mutation({
        query: (payload) => ({
          url: `/admin/manage-user/${payload.id}?delete=${payload.delete}`,
          method: "POST",
        }),
        invalidatesTags: ["user"],
      }),

      manageStoreAdmin: builder.mutation({
        query: ({ id, isDelete, ...payload }) => ({
          url: `/admin/manage-shop/${id}?delete=${isDelete}`,
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["shop"],
      }),

      // user

      addRecentProduct: builder.mutation({
        query: (payload) => ({
          url: "/user/add-recent",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["product"],
      }),

      postAReview: builder.mutation({
        query: (payload) => ({
          url: "/user/post-review",
          method: "POST",
          body: payload,
        }),
        invalidatesTags: ["product"],
      }),

      // GET apis.


      // get all orders.

      getAllorderbyId: builder.query({
        query: (paload) => {
          return {
            url: `/order/get-all-order-by-id?id=${paload.id}&role=${paload.role}&offset=${(paload.page-1)*10}&limit=${10}`,
            method: "GET",
          }
        },
        providesTags: ["user"],
      }),







      getLoggedInUser: builder.query({
        query: (token) => ({
          url: `/auth/loggedIn-user`,
          method: "GET",
          headers: { authorization: token },
        }),
        providesTags: ["user"],
      }),

      getAstoreAllQuery: builder.query({
        query: (payload) => ({
          url: `/user/all-review/${payload.id}`,
          method: "GET",
        }),
        providesTags: ["review"],
      }),

      getRecentProduct: builder.query({
        query: (payload) => ({
          url: `/user/get-recent/${payload.id}`,
          method: "GET",
        }),
        providesTags: ["product"],
      }),

      getAllUserAndVendors: builder.query({
        query: (page) => ({
          url: `/common/user?offset=${(page - 1) * 10}&limit=${10}`,
          method: "GET",
        }),
        providesTags: ["user"],
      }),

      getAStoreAllProduct: builder.query({
        query: (payload) => ({
          url: `/common/store-products/${payload.id}?offset=${
            (payload.page - 1) * 3
          }&limit=${3}`,
          method: "GET",
        }),
        providesTags: ["product"],
      }),




      getallFollowingProduct: builder.query({
        query: (payload) => ({
          url: `/common/product-following/${payload.id}?offset=${(payload.page - 1) * 3}&limit=${3}`,
          method: "GET",
        }),
        providesTags: ["product"],
      }),



      getAStoreAllProductNotDashboard: builder.query({
        query: (payload) => ({
          url: `/common/store-products/${payload.id}?offset=${
            (payload.page - 1) * 3
          }&limit=${payload.limit}`,
          method: "GET",
        }),
        providesTags: ["product"],
      }),

      getSingleOrAllStore: builder.query({
        query: (payload) => {
          let baseUrl;

          if (payload.id) {
            baseUrl = `/common/store?id=${payload.id}`;
          } else {
            baseUrl = "/common/store";
          }

          return {
            url: baseUrl,
            method: "GET",
          };
        },
        providesTags: ["shop"],
      }),

      getAllCategory: builder.query({
        query: () => ({
          url: "/common/category",
          method: "GET",
        }),
        providesTags: ["category"],
      }),

      getSingleOrAllProducts: builder.query({
        query: (query) => {
          let baseUrl = "/common/products?";
          if (query) {
            const keys = Object.keys(query);

            keys.forEach(
              (item) => (baseUrl = baseUrl + item + "=" + query[item]+"&")
            );
          }

          return {
            url: baseUrl,
            method: "GET",
          };
        },
        providesTags:["product"]
      }),




      getAstoreAllreveiw: builder.query({
        query: (payload) => ({
          url: `/user/all-review/${payload.id}`,
          method: "GET",
        }),
        providesTags: ["review"],
      }),


      

      giveReviewAnswer: builder.mutation({
        query: (payload) => ({
          url: `/user/answer-review/${payload.id}`,
          method: "POST",
          body: {message:payload.message},
        }),
        invalidatesTags:["review"]
      }),







    };
  },
});

export const {
  // Mutations
  useGetAstoreAllreveiwQuery,
  useSignupMutation,
  useGiveReviewAnswerMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useResetPasswordGetTokenMutation,
  useResetPasswordMutation,
  useCreateStoreMutation,
  useDeleteStoreMutation,
  useCreateCoupneMutation,
  useManageCoupneMutation,
  useCreateProductMutation,
  useManageProductMutation,
  useCreateCategoryMutation,
  useManageCategoryMutation,
  useManageStoreAdminMutation,
  useAddRecentProductMutation,
  useManageUserMutation,
  useManageStoreFollowMutation,
  useUpdateOrDeleteShopMutation,
  useCheckCouponMutation,
  useCreatePaymentLinkMutation,
  usePostAReviewMutation,
  useGetallFollowingProductQuery,

  // Queries
  useGetRecentProductQuery,
  useGetAstoreAllQueryQuery,
  useGetAllorderbyIdQuery,
  useGetAStoreAllProductNotDashboardQuery,
  useGetAllUserAndVendorsQuery,
  useGetSingleOrAllStoreQuery,
  useGetAllCategoryQuery,
  useGetSingleOrAllProductsQuery,
  useGetLoggedInUserQuery,
  useGetAStoreAllProductQuery,
} = baseApi;
