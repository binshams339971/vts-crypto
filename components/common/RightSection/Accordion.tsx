import React, { useState } from 'react';

const Accordion = ({ title, content } : {title: string, content: string}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="t-border-b-2">
      <div className="t-flex t-justify-between t-py-6" onClick={() => setIsActive(!isActive)}>
        {isActive ? <div className='t-font-bold t-text-[#0B0C20]'>{title}</div> : <div className='t-text-[#ABABC6]'>{title}</div> }
        <div>{isActive ? <div className='t-font-bold t-text-[#0B0C20]'>-</div> : <div className='t-text-[#ABABC6]'>+</div>}</div>
      </div>
      {isActive && <div className="t-mb-6">{content}</div>}
    </div>
  );
};

export default Accordion;