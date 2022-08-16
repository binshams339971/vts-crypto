import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

interface PostProps {
    height: number;
}

export const Transactions: React.FC<PostProps> = ({height}) => {
    return(
        <>
                <div className="t-bg-gray-50 t-mt-6 t-rounded-lg t-pb-8 t-container t-scrollbar-thin t-scrollbar-thumb-custom t-overflow-y-scroll">
                    <div className="t-flex t-px-8 t-py-4">
                        <PaidOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2'></PaidOutlinedIcon>
                        <h1 className="t-font-semibold">Transactions</h1>
                    </div>
                    <div className={`t-px-8 t-h-[${height}rem]`}>
                        <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-gray-400 t-border-b-2 t-text-sm">
                            <div className="t-col-span-1">
                                <p>#</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>PRICE</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>DATE</p>
                            </div>
                            <div className="t-col-span-1">
                                <p>ACTION</p>
                            </div>
                        </div>
                        <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-black t-border-b-2 t-font-semibold t-text-sm">
                            <div className="t-col-span-1">
                                <p>1</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-font-bold">1128.32</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-font-semibold">1/12 at 3:34PM</p>
                            </div>
                            <div className="t-col-span-1">
                                <p className="t-font-semibold">...</p>
                            </div>
                        </div>                    
                    </div>
                </div>
        </>
    )
}