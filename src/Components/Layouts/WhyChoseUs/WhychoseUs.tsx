import CenterAlign from "../../Helper/CenterAlign";
import Tittle from "../../Ui/Tittle";
import getWhyChoseUs from "./demodata";

const WhychoseUs = () => {
  return (
    <>
      <CenterAlign>
        <div className="px-4 lg:px-0">
          <Tittle text="Why Choose Us?" />

          <div className="grid grid-cols-1 mt-28 gap-y-24 lg:grid-cols-4 gap-5">
            {getWhyChoseUs()?.map((item, idx) => {
              return (
                <div data-aos="fade-up"
                  key={idx}
                  className="border border-gray-200 p-6 relative rounded-br-3xl"
                >
                  <h1 className="text-xl font-semibold">{item.tittle}</h1>
                  <p className="mt-3 text-xs font-semibold">{item.details}</p>

                  <div className="absolute top-[-52px] bg-[#ff9cb4] p-4 rounded-br-3xl">
                    <img className="w-[40px] h-[40px]" src={item.icon} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CenterAlign>
    </>
  );
};

export default WhychoseUs;
