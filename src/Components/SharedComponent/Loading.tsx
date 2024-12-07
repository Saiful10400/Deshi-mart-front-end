import loadingGif from "../../../public/loading.gif";
const Loading = () => {

  return (
    <div className=" min-h-[60vh]   to-center">
      <img
        className="w-[70px] h-[70px] object-contain"
        src={loadingGif}
        alt=""
      />
    </div>
  );
};

export default Loading;
