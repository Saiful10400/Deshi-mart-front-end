import { FC } from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void; // Function type for onClick
    disable?: boolean;   // Optional boolean type for disable
    className?: string;  // Optional string type for className
    loading?: boolean;  // Optional string type for className
  }

const Button: FC<ButtonProps> = ({text,onClick,disable,className,loading}) => {
    return (
        <button disabled={disable?true:false} onClick={onClick} className={`font-bold btn hover:bg-[#c02249] bg-[#f9275a] border-none text-white p-2 rounded-xl ${className}`}>
           {loading?<div className='to-center gap-3'>{text}<span className="loading loading-spinner loading-sm"></span></div>:text}
        </button>
    );
};

export default Button; 

// {text,onClick,disable,className}