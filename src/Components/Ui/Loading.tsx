import { useAppSelector } from "../../Redux/feathcer/hoocks";
import loading from "../../../assets/loading.gif";

const Loading = () => {
  const { loadingStatus } = useAppSelector((s) => s.loadingStore);
  if (loadingStatus) {
    return (
      <div className="w-full h-screen absolute top-0 left-0 bg-[#f0efef75] flex justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-3xl bg-white flex justify-center items-center">
          <img className="w-[100px]" src={loading} alt="" />
        </div>
      </div>
    );
  }
};

export default Loading;
