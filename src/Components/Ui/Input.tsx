import { useEffect, useState } from "react";

type Tinput = {
  tittle: string;
  name?: string;
  type: string;
  defaultValue?: string | number;
  className?: string;
  required?:boolean;
  multiple?:boolean
};

const Input = ({ tittle, name, type, defaultValue, className,required,multiple }: Tinput) => {
  const [value, setValue] = useState({ value: null, show: false });

  useEffect(() => {
    const listnerfn = () => setValue({ ...value, show: true });
    window.addEventListener("click", listnerfn);
    return () => window.removeEventListener("click", listnerfn);
  }, []);
 
  return (
    <label htmlFor={tittle} className="text-start w-full">
      <span className="font-semibold text-lg">{tittle}</span>
      {type === "textArea" ? (
        <textarea
        
          onClick={(e) => setValue(e.target.value)}
          defaultValue={defaultValue}
          id={tittle}
          name={name}
          required={required}
          className={
            "w-full  block outline-none text-xl border py-2 pl-2 rounded-lg " +
            className
          }
        ></textarea>
      ) : (
        <input
        multiple={multiple}
          onClick={(e) => setValue(e.target.value)}
          defaultValue={defaultValue}
          id={tittle}
          type={type}
          name={name}
          required={required}
          className={
            "w-full  block outline-none text-xl border py-2 pl-2 rounded-lg " +
            className
          }
        />
      )}
      {
        // !value.value && value.show&&<span className="text-red-500 text-sm">* {tittle} is required</span>
      }
    </label>
  );
};

export default Input;
