import { NextPage } from "next";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import RightSection from "@components/common/RightSection/RightSection";
import Image from 'next/image'
import {Watchlist} from "@components/common/Watchlist";
import { useEffect } from "react";
import {Postions} from "@components/Positions";
import { Transactions } from "@components/Transactions";
import { SideMenu } from "@components/common/SideMenu";
import {Footer} from "@components/common/Footer";

  export const getServerSideProps: GetServerSideProps = async (context) => {
    // ...
    return {
        props: { servername: "aws" }, // will be passed to the page component as props
      }
  }
  interface Props {
      servername: string,
    }

const Reflection: NextPage<Props> = (props) => {
    // using destructuring to get username
    const {  servername } = props;

    useEffect(() => {
      //WatchlistServiceInstance.getStatistics();
    }, []);
  
    return (
      <div className="t-bg-blue-50">
        <div className="t-grid t-grid-cols-12 t-gap-8 t-bg-blue-50">
          <div className="t-col-span-2">
            <SideMenu />
          </div>
          <div className="t-col-span-7">
            <div className="t-flex">
              <div className="t-mt-8 t-mr-6">
              <Image src="/assets/images/vtsLogo.png" width={80} height={70} />
              </div>
              <h1 className="t-mt-12 t-mr-8 t-text-xl t-text-[#0B0C20] t-font-bold">Reflection</h1>
              <h1 className="t-mt-12 t-text-xl t-text-[#0B0C20] t-font-semibold">Dashboard</h1>
            </div>
            <Postions /> 
            <div className="t-grid t-grid-cols-2 t-gap-4 t-mb-8">
                <div className="t-col-span-1">
                    <Watchlist height={16}/>
                </div>
                <div className="t-col-span-1">
                    <Transactions height={16}/>
                </div>
            </div>
          </div>
          <div className="t-col-span-3">
            <RightSection />
          </div>
        </div>
        <Footer/>
      </div>
    
    );
  };
  
  // export component
  export default Reflection;