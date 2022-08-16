import { iDashboardModel } from '@app/interfaces/iDashboardModel';
import { iWatchlistModel } from '@app/interfaces/iWatchlistModel';
import { DashboardServiceInstance } from '@app/services/DashboardService';
import { WatchlistServiceInstance } from '@app/services/WatchlistSerivice';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useCallback, useEffect, useState } from 'react';

interface PostProps {
    height: number;
}

export const Watchlist: React.FC<PostProps> = ({ height }) => {

    const [watchlistServiceData, setWatchlistServiceData] = useState<iWatchlistModel[]>([]);
    const [loading, setLoading] = useState(true);

    const getServiceData = useCallback(() => {
        const data = WatchlistServiceInstance.getStatistics({})
        setWatchlistServiceData(data)
        setLoading(false);
    }, []);

    useEffect(() => {
        getServiceData()
    }, [getServiceData]);

    useEffect(() => {
        console.log(watchlistServiceData);
    }, [watchlistServiceData]);

    return (
        <>
            <div className="t-bg-gray-50 t-mt-6 t-rounded-lg t-pb-8 t-container t-scrollbar-thin t-scrollbar-thumb-custom t-overflow-y-scroll">
                <div className="t-flex t-px-8 t-py-4">
                    <VisibilityOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2'></VisibilityOutlinedIcon>
                    <h1 className="t-font-semibold">Watch list</h1>
                </div>
                <div className={`t-px-8 t-h-[${height}rem]`}>
                    <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-gray-400 t-border-b-2 t-text-sm">
                        <div className="t-col-span-1">
                            <p>SYMBOL</p>
                        </div>
                        <div className="t-col-span-1">
                            <p>PRICE</p>
                        </div>
                        <div className="t-col-span-1">
                            <p>BUY</p>
                        </div>
                        <div className="t-col-span-1">
                            <p>SELL</p>
                        </div>
                    </div>
                    {loading ? <p>Loading</p> :
                        watchlistServiceData.map((value, key) =>
                            <div className="t-grid t-grid-cols-4 t-text-left t-py-4 t-text-black t-border-b-2 t-font-semibold t-text-sm" key={value.id}>
                                <div className="t-col-span-1">
                                    <p>{value.symbol}</p>
                                </div>
                                <div className="t-col-span-1">
                                    <p>{value.price}</p>
                                </div>
                                <div className="t-col-span-1">
                                    <p className="t-text-[#2388E4] t-font-bold">$</p>
                                </div>
                                <div className="t-col-span-1">
                                    <p className="t-text-[#EC105F] t-font-bold">$</p>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </>
    )
}