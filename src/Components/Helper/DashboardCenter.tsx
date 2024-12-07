import React from 'react';

const DashboardCenter = ({children}) => {
    return (
        <div className='lg:w-[1400px] border'>
            {children}
        </div>
    );
};

export default DashboardCenter;