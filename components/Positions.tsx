import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

export const Postions = () =>{
    return(
        <>
            <div className="t-bg-gray-50 t-container t-mt-8 t-rounded-lg t-pb-8  ">
                <div className="t-scrollbar-thin t-scrollbar-thumb-custom t-overflow-y-scroll">
                    <div className="t-flex t-px-8 t-py-4">
                        <AccessTimeOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2'></AccessTimeOutlinedIcon>
                        <h1 className="t-font-semibold">Postions</h1>
                    </div>
                    <div className="t-px-8 t-h-[16rem]">
                        <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-gray-400 t-border-b-2 t-text-sm">
                            <div className="t-col-span-1">
                                <p>SYMBOL</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>QUANTITY</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>PRICE</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>VALUE</p>
                            </div>
                        </div>
                        <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-black t-border-b-2 t-font-semibold t-text-sm">
                            <div className="t-col-span-1">
                                <p>IBM</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>1128.32</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#2388E4] t-font-bold">$</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#EC105F] t-font-bold">$</p>
                            </div>
                        </div>
                        <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-black t-border-b-2 t-font-semibold t-text-sm">
                            <div className="t-col-span-1">
                                <p>IBM</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>1128.32</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#2388E4] t-font-bold">$</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#EC105F] t-font-bold">$</p>
                            </div>
                        </div>
                        <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-black t-border-b-2 t-font-semibold t-text-sm">
                            <div className="t-col-span-1">
                                <p>IBM</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>1128.32</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#2388E4] t-font-bold">$</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#EC105F] t-font-bold">$</p>
                            </div>
                        </div> 
                        <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-black t-border-b-2 t-font-semibold t-text-sm">
                            <div className="t-col-span-1">
                                <p>IBM</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>1128.32</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#2388E4] t-font-bold">$</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#EC105F] t-font-bold">$</p>
                            </div>
                        </div> 
                        <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-black t-border-b-2 t-font-semibold t-text-sm">
                            <div className="t-col-span-1">
                                <p>IBM</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>1128.32</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#2388E4] t-font-bold">$</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-text-[#EC105F] t-font-bold">$</p>
                            </div>
                        </div>                    
                    </div>
                </div>
                <div className="t-flex t-justify-end">
                    <p className="t-mr-8 t-text-md t-mt-4">Total values</p>
                    <h1 className="t-mr-8 t-text-3xl t-font-bold">87,838</h1>
                    <p className="t-mr-8 t-text-md t-mt-4 t-text-[#ABABC6]">TOKENS</p>
                </div>
            </div>
        </>
    )
}