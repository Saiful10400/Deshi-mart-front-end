import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const PageHeaderRouteing = () => {
  let routes: string | string[] = useLocation()?.pathname;
  routes = routes.split("/")?.filter((item) => item !== "");


  return (
    <div className="pt-10 pb-8">
      <h1 className="text-4xl font-bold">Shops</h1>
      <div className="font-semibold flex items-center gap-2 mt-2">
        <Link to={"/"}>HOME</Link>
        <span>{`>`}</span>
        {routes?.map((item, idx) => (
          <>
            <Link
              key={item}
              to={`/${item}`}
              className={`${idx + 1 === routes.length ? "text-[#ff9208]" : ""}`}
            >
              {item.toUpperCase()}
            </Link>
            {routes.length !== idx + 1 ? <span>{`>`}</span> : ""}
          </>
        ))}
      </div>
    </div>
  );
};

export default PageHeaderRouteing;
