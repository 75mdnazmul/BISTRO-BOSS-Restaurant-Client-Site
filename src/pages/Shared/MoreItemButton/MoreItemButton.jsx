import React from 'react';

const MoreItemButton = ({name}) => {
    return (
        <div className="pb-12 sm:pb-12 md:pb-20 lg:pb-20 xl:pb-20 text-center">
            <button className="shadow-2xl btn bg-transparent text-yellow-600 text-xl border-b-8 hover:bg-slate-800 hover:border-0 border-yellow-600 uppercase">{name}</button>
        </div>
    );
};

export default MoreItemButton;