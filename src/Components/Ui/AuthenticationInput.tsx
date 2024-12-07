import { FC } from "react";
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { TbPhone } from "react-icons/tb";
import { CiLocationArrow1 } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
interface InputFieldProps {
  type: string; // For now, you can specify 'string' for 'type', but you can also restrict it to 'text' | 'textarea' | 'password', etc.
  placeholder: string;
  name: string;
}
const AuthenticationInput: FC<InputFieldProps> = ({ type,name, placeholder }) => {
  const iconConfig = () => {
    if (placeholder === "Password") return <CiLock />;
    if (placeholder === "E-mail") return <CiMail />;
    if (placeholder === "Phone number") return <TbPhone />;
    if (placeholder === "Address") return <CiLocationArrow1 />;
    if (placeholder === "Name") return <LuUser />;
  };

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        id={placeholder}
        className="w-full focus:outline-none focus:border-black  border border-white focus:bg-white bg-gray-200 box-border  py-2 pl-9 rounded-lg text-lg font-normal"
      />
      <span className="absolute top-2 text-gray-500 left-1 text-3xl">
        {iconConfig()}
      </span>
    </div>
  );
};

export default AuthenticationInput;
