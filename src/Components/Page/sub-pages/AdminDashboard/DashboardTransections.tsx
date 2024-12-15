import { useEffect, useState } from "react";

import { useGetAllorderbyIdQuery } from "../../../../Redux/api/api";
import SingleTransectionCard from "../../../Ui/SingleTransectionCard";
import numberToNumberArray from "../../../../Utils/numberToNumberArray";

const DashboardTransections = () => {
  const [cred, setCred] = useState({
    skip: false,
    id: "",
    role: "admin",
    page: 1,
  });

  const { data, refetch } = useGetAllorderbyIdQuery(cred, { skip: cred.skip });

  const totalData = data?.data?.count;
  const steps = numberToNumberArray(Math.ceil(totalData / 10));

  console.log(totalData, data);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {data?.data?.result?.map((item, idx) => (
          <SingleTransectionCard key={idx} data={item} />
        ))}
      </div>

      <div className="flex mt-7 justify-center items-center gap-4">
        {steps?.map((item) => (
          <button
            onClick={() => {
              setCred((prev) => ({ ...prev, page: item }));
              refetch();
            }}
            className="btn btn-primary"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
};

export default DashboardTransections;
