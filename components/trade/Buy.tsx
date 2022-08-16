import { Dropdown } from 'primereact/dropdown';
import { useEffect, useRef, useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

export const Buy = () => {

    const [selectedCountry, setSelectedCountry] = useState<any>(null);


    const countries = [
        { name: 'IBM', code: 'AU' },
        { name: 'Microsoft', code: 'BR' },
        { name: 'Apple', code: 'CN' },
        { name: 'Google', code: 'EG' },
        { name: 'Amazon', code: 'FR' },
        { name: 'Tesla', code: 'DE' },
        { name: 'Meta', code: 'IN' },
        { name: 'Twitter', code: 'JP' },
    ];

    const onCountryChange = (e: {value: any}) => {
        setSelectedCountry(e.value);
    }

    return(
        <div>
            <div className="t-grid t-grid-cols-12 t-gap-2 t-mt-12">
                <div className="t-col-span-3 t-mt-3">
                    <p className="t-text-lg t-font-bold">Select stock or ETF</p>
                </div>

                <div className="t-col-span-6 t-mb-8">
                    <Dropdown className="t-w-full" value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name" filter showClear filterBy="name" placeholder="IBM"/>
                </div>
            </div>
            <div className="t-grid t-grid-cols-12 t-gap-2 t-border-b-2">
                <div className="t-col-span-4 t-mr-0 t-mb-8">
                    <p className="t-text-md t-font-bold">Descriptipn</p>
                    <p className="t-text-lg t-mt-4 t-mb-8">International Business Machines</p>

                    <div className="t-flex t-justify-between">
                        <p className="t-text-md t-font-bold">USDC</p>
                        <p className="t-text-md t-text-gray-400">27,738.8283</p>
                    </div>
                    <input type="text" className="t-mt-4 t-bg-gray-50 t-border t-border-gray-300 t-text-center t-text-black t-text-lg t-rounded-md focus:t-ring-blue-500 focus:t-border-blue-500 t-block t-w-full t-p-2.5" placeholder="32.5" required />
                </div>
                <div className="t-col-span-1">
                    <EastOutlinedIcon fontSize="medium" className='t-ml-8 t-text-center t-mt-[9.7rem] t-text-gray-400'></EastOutlinedIcon>  
                </div>
                <div className="t-col-span-4 t-mr-4">
                    <p className="t-text-md t-font-bold">Token Price</p>
                    <p className="t-text-3xl t-mt-2">18.88</p>
                    <div className="t-flex t-justify-between">
                        <p className="t-text-md t-font-bold t-mt-8">IBM</p>
                        <p className="t-text-md t-mt-4 t-text-gray-400">8,387.8283</p>
                    </div>
                    <input type="text" disabled className="t-mt-4 t-bg-gray-50 t-border t-border-gray-300 t-text-center t-text-black t-text-lg t-rounded-md focus:t-ring-blue-500 focus:t-border-blue-500 t-block t-w-full t-p-2.5" placeholder="32.5" required />
                </div>
            </div>

            <div className="t-grid t-grid-cols-2 t-gap-4 t-my-8 t-ml-4 t-border-b-2">
                <div className="t-col-span-1">
                    <p className="t-text-lg t-font-bold t-pb-4">Sub total</p>
                    <p className="t-text-3xl t-mt-4 t-mb-8">2,250 USDC</p>

                </div>
                <div className="t-col-span-1">
                    <p className="t-text-lg t-font-bold t-pb-4">Commision</p>
                    <p className="t-text-3xl t-mt-4 t-mb-8">1.00 USDC</p>

                </div>
            </div>
            <div className="t-grid t-grid-cols-3 t-gap-2 t-my-9">
                <div className="t-col-span-1 t-flex">
                    <p className="t-text-md t-font-bold t-pb-4 t-mt-3">Total</p>
                    <p className="t-text-4xl t-font-semibold t-ml-6 t-mb-8">2,51.00 USDC</p>
                </div>
                <div className="t-col-span-1"></div>
                <div className="t-col-span-1">
                    <button className="t-px-12 t-py-3 t-bg-[#8775E6] t-text-center t-font-semibold t-shadow-xl t-shadow-[#8775E6]/[#897ec0] t-text-white t-rounded-full">Submit Order</button>
                </div>
            </div>
        </div>
    )
}