import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../Utils/getToken";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apollow-assignment-5-back-end.vercel.app/api",
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
    return {
      signup: builder.mutation({
        query: (payload) => {
          return {
            url: "/auth/signup",
            method: "POST",
            body: payload,
          };
        },
      }),
      login: builder.mutation({
        query: (payload) => {
          return {
            url: "/auth/login",
            method: "POST",
            body: payload,
          };
        },
      }),

      getLoggedInUser: builder.query({
        query: () => {
          console.log("api is calling.")
          return {
            url: `/auth/getCurrentUser`,
            method: "GET",
          };
        },
      }),

      getAroom: builder.query({
        query: ({ id }) => {
          return {
            url: `/rooms/${id}`,
            method: "GET",
          };
        },
        providesTags: ["rooms"],
      }),
      getRooms: builder.query({
        query: () => {
          return {
            url: `/rooms`,
            method: "GET",
          };
        },
        providesTags: ["rooms"],
      }),

      updateRoom: builder.mutation({
        query: ({ _id, ...rest }) => {
          return {
            url: `/rooms/${_id}`,
            method: "PUT",
            body: rest,
          };
        },
        invalidatesTags: ["rooms", "slots"],
      }),

      deleteRoom: builder.mutation({
        query: ({ id }) => {
          return {
            url: `/rooms/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["rooms"],
      }),
      createARoom: builder.mutation({
        query: (payload) => {
          return {
            url: `/rooms`,
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["rooms"],
      }),

      getSlot: builder.query({
        query: () => {
          return {
            url: `/slots/availability`,
            method: "GET",
          };
        },
        providesTags: ["slots"],
      }),
      getSpecificSlot: builder.query({
        query: (url) => {
          return {
            url: url,
            method: "GET",
          };
        },
        providesTags: ["slots"],
      }),

      updateSlot: builder.mutation({
        query: ({ slotId, roomId: room, date, startTime, endTime }) => {
          return {
            url: `/slots/${slotId}`,
            method: "PUT",
            body: { room, date, startTime, endTime },
          };
        },
        invalidatesTags: ["slots"],
      }),

      deleteSlot: builder.mutation({
        query: ({ id }) => {
          return {
            url: `/slots/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["slots"],
      }),

      createAslot: builder.mutation({
        query: (payload) => {
          return {
            url: `/slots`,
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["slots"],
      }),

      createAbooking: builder.mutation({
        query: (payload) => {
          return {
            url: `/booking`,
            method: "POST",
            body: payload,
          };
        },
        invalidatesTags: ["booking"],
      }),
      getABooking: builder.query({
        query: (payload) => {
          return {
            url: `/booking/${payload.id}`,
            method: "GET",
          };
        },
      }),
      getAuserAllBookings: builder.query({
        query: (payload) => {
          return {
            url: `/booking/users-all/${payload}`,
            method: "GET",
          };
        },
      }),
      getAllBookingForAdmin: builder.query({
        query: () => {
          return {
            url: `/booking`,
            method: "GET",
          };
        },
        providesTags: ["allBookingForAdmin"],
      }),

      deleteABooking: builder.mutation({
        query: (payload) => {
          return {
            url: `/booking/${payload}`,
            method: "DELETE",
          };
        },
        invalidatesTags:["allBookingForAdmin"]
      }),
      confirmABooking: builder.mutation({
        query: (payload) => {
          return {
            url: `/booking/${payload.id}?action=${payload.action}`,
            method: "PUT",
          };
        },
        invalidatesTags:["allBookingForAdmin"]
      }),

      getPaymentUrl: builder.query({
        query: (payload) => {
          return {
            url: `/pay/${payload}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useConfirmABookingMutation,
  useDeleteABookingMutation,
  useGetAllBookingForAdminQuery,
  useLoginMutation,
  useSignupMutation,
  useGetLoggedInUserQuery,
  useGetRoomsQuery,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useGetSlotQuery,
  useDeleteSlotMutation,
  useUpdateSlotMutation,
  useCreateARoomMutation,
  useCreateAslotMutation,
  useGetAroomQuery,
  useGetSpecificSlotQuery,
  useCreateAbookingMutation,
  useGetABookingQuery,
  useGetPaymentUrlQuery,
  useGetAuserAllBookingsQuery,
} = baseApi;
