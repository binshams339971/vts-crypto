import { NextPage } from "next";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import RightSection from "@components/common/RightSection/RightSection";
import Image from 'next/image'
import ref from "../assets/images/reflection.PNG";
import {Watchlist} from "@components/common/Watchlist";
import { useEffect, useState } from "react";
import { Transactions } from "@components/Transactions";
import { SideMenu } from "@components/common/SideMenu";
import {Footer} from "@components/common/Footer";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { Buy } from "@components/trade/Buy";
import { Sell } from "@components/trade/Sell";

  interface Props {
      servername: string,
    }

const Reflection: NextPage<Props> = (props) => {  

    const [active, setActive] = useState("Buy");

    const activate = (param: string) =>{
        if(param === "Buy"){
            setActive("Buy"); 
        }else if(param === "Sell"){
            setActive("Sell");
        }
    }

    return (
      <div className="t-bg-blue-50">
        <div className="t-grid t-grid-cols-12 t-gap-8 t-bg-blue-50">
          <div className="t-col-span-2">
            <SideMenu />
          </div>
          <div className="t-col-span-8">
            <div className="t-flex">
              <div className="t-mt-8 t-mr-6">
                <Image src={ref} width={55} height={40} />
              </div>
              <h1 className="t-mt-12 t-mr-8 t-text-xl t-text-[#0B0C20] t-font-bold">Reflection</h1>
              <h1 className="t-mt-12 t-text-xl t-text-[#0B0C20] t-font-semibold">Trade</h1>
            </div>
            <div className="t-min-h-[52rem]">
                <div className="t-bg-gray-50 t-container t-mt-8 t-rounded-lg t-pb-8">
                    <div className="t-scrollbar-thin t-scrollbar-thumb-custom t-overflow-y-scroll t-mx-8">
                        <div className="t-border-b t-border-gray-200 dark:border-gray-700">
                            <ul className="-mb-px t-flex t-flex-wrap t-text-center t-text-sm t-font-medium t-text-gray-500 dark:text-gray-400">
                                <li className="t-mr-2 hover:t-cursor-pointer">
                                    <a onClick={()=>activate("Buy")} className={`t-w-32 t-group t-inline-flex t-rounded-t-lg t-border-b-4 t-p-4 ${ active === "Buy" ? "t-border-[#8775E6] t-text-black" : "t-border-transparent hover:t-border-gray-300 hover:t-text-gray-600" }`}>
                                        <PaidOutlinedIcon fontSize="medium" className={`t-mt-[.1rem] t-mr-2 ${active === "Buy" ? "t-text-black": "t-text-gray-600" }`}></PaidOutlinedIcon>
                                        <span className={`t-font-bold t-text-lg ${active === "Buy" ? "t-text-black" : "t-text-gray-600"}`}>Buy</span>
                                    </a>
                                </li>
                                <li className="t-mr-2 hover:t-cursor-pointer">
                                    <a onClick={()=>activate("Sell")} className={`t-w-32 t-group t-inline-flex t-rounded-t-lg t-border-b-4 t-p-4 ${ active === "Sell" ? "t-border-[#8775E6] t-text-black" : "t-border-transparent hover:t-border-gray-300 hover:t-text-gray-600" }`}>
                                        <PaidOutlinedIcon fontSize="medium" className={`t-mt-[.1rem] t-mr-2 ${active === "Sell" ? "t-text-black": "t-text-gray-600" }`}></PaidOutlinedIcon>
                                        <span className={`t-font-bold t-text-lg ${active === "Sell" ? "t-text-black" : "t-text-gray-600"}`}>Sell</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        { active === "Buy" ? <Buy /> : <Sell /> }
                    </div>
                </div>
            </div> 
          </div>
        </div>
        <Footer/>
      </div>
    
    );
  };
  
  // export component
  export default Reflection;