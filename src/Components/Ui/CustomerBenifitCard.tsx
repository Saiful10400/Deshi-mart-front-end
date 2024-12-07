import React from 'react';

const CustomerBenifitCard = ({data}) => {
    return (
        <div  className='w-full to-center flex-col text-center bg-gradient-to-tr from-[#eeeeee] to-[#ffffff] p-3 rounded-lg shadow-lg'>
            <div style={{background:data.color}} className='w-[100px] h-[100px] rounded-full overflow-hidden to-center'>
                <img className='w-[70%] h-[70%] rounded-full' src={data.icon} alt="" />
            </div>
            <h1 className='text-lg font-bold mt-3'>{data.tittle}</h1>
            <p className='text-sm font-normal mt-3'>{data.details}</p>
        </div>
    );
};

export default CustomerBenifitCard;