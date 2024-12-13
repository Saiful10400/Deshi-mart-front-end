import { useEffect, useState } from "react";
import { useGetAllUserAndVendorsQuery } from "../../../Redux/api/api";
import numberToNumberArray from "../../../Utils/numberToNumberArray";
import SingleUserCard from "../../Ui/SingleUserCard";

const DashboardUser = () => {
  const [page, setPage] = useState(1);
  const { data, refetch } = useGetAllUserAndVendorsQuery(page);

  const totalData = data?.data?.total;
  const steps = numberToNumberArray(Math.ceil(totalData / 10));

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 ">
        {data?.data?.result?.map((item, idx) => (
          <SingleUserCard data={item} key={idx} />
        ))}
      </div>

      <div className="flex mt-7 justify-center items-center gap-4">
        {steps?.map((item) => (
          <button
            onClick={() => {
              setPage(item);
              refetch();
            }}
            className="btn btn-primary"
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardUser;
