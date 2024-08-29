import React from 'react';

const InstallOption = ({ name, icon }) => {
  return (
    <div className="installCard border rounded-md flex items-center pl-4 pr-12 py-3 font-bold">
      <div className="icon mr-3" dangerouslySetInnerHTML={{ __html: icon }} />
      <div className="text text-[13px]">
        {name}
      </div>
    </div>
  );
};

export default InstallOption;
