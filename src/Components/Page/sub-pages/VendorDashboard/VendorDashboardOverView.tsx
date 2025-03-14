
import { DollarSign, StickyNote, User } from "lucide-react";
import LineChartComponent from "../../../Ui/GrapsAndCharts/LineChart";
import PieChartComponent from "../../../Ui/GrapsAndCharts/PieChart";


const VendorDashboardOverView = () => {



  return (
    <div className="lg:px-14 mb-8">
      {/* top cards. */}

      <section className="flex justify-between lg:flex-row flex-col items-center gap-10">
        <div className="lg:w-[400px] w-full rounded-3xl h-[200px] bg-gradient-to-tr flex items-center justify-center gap-3 from-gray-300 to-[#bdbdbd] shadow-sm">
          <DollarSign size={50} />

          <div>
            <h1 className="text-4xl ">Total Pyment</h1>
            <h1 className="text-3xl mt-3 font-semibold">
              {70350} Tk
            </h1>
          </div>
        </div>

        <div className="lg:w-[400px] w-full rounded-3xl h-[200px] bg-gradient-to-tr flex items-center justify-center gap-3 from-gray-300 to-[#bdbdbd] shadow-sm">
          <StickyNote size={50} />

          <div>
            <h1 className="text-4xl ">Total Product</h1>
            <h1 className="text-3xl mt-3 font-semibold">
              {9}
            </h1>
          </div>
        </div>

        <div className="lg:w-[400px] w-full rounded-3xl h-[200px] bg-gradient-to-tr flex items-center justify-center gap-3 from-gray-300 to-[#bdbdbd] shadow-sm">
          <User size={50} />

          <div>
            <h1 className="text-4xl ">Total Order</h1>
            <h1 className="text-3xl mt-3 font-semibold">
              {18}
            </h1>
          </div>
        </div>
      </section>

      {/* graph section. */}

      <section className=" flex mt-5 flex-col gap-3 lg:flex-row items-start lg:mt-11 min-h-40">
        {/* linechart seciton. */}

        <div className="lg:w-[70%] w-full">
          <LineChartComponent />
          {/* <BarChart
            data={
              dashboardCredentials?.barChartData as {
                deletedPost: number;
                paidPost: number;
                freePost: number;
                blockPost: number;
              }
            }
          /> */}
        </div>

        {/* piechart secion */}

        <div className="lg:w-[30%] w-full">
          <PieChartComponent data={{verifyedUser:90,unVerifyedUser:10} as { verifyedUser: number; unVerifyedUser: number; }} />
        </div>
      </section>
    </div>
  );
};

export default VendorDashboardOverView;