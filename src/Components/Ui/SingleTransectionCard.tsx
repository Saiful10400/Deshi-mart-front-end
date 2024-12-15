export type Torder = {
    orderId: string;
    userId: string;
    shopId: string;
    amount: number;
    paymentStatus: "Unpaid" | "Paid"; // Assuming these are the possible statuses
    transectionId: string | null;
    created: string; // ISO date string
    updated: string; // ISO date string
  };
  

const SingleTransectionCard = ({data}:{data:Torder}) => {

 
    return (
        <div className="bg-gray-100 shadow-lg rounded-xl p-3 flex flex-col gap-2">
            <h1><span className="font-semibold mr-3">Transection id: </span>{data.transectionId || "Empty"}</h1>
            <h1><span className="font-semibold mr-3">Payment status: </span>{data.paymentStatus || "Empty"}</h1>
            <h1><span className="font-semibold mr-3">Transection amount: </span>{data.amount || 0} BDT</h1>
            <h1><span className="font-semibold mr-3">Total product: </span>{data?._count?.productOrder|| 0}</h1>
        </div>
    );
};

export default SingleTransectionCard;