import { NextPage } from "next";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { LandingComponent } from "@components/dashboard/LandingComponent"
import RightSection from "@components/common/RightSection/RightSection";
import Image from 'next/image'
import refl from "../assets/images/reflection.PNG";
import {Watchlist} from "@components/common/Watchlist";
import { useEffect } from "react";
import { WatchlistServiceInstance } from "@app/services/WatchlistSerivice";
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

const Dashboard: NextPage<Props> = (props) => {
    // using destructuring to get username
    const {  servername } = props;
  
    return (
      <div className="t-bg-blue-50">
        <div className="t-grid t-grid-cols-12 t-gap-8">
          <div className="t-col-span-2">
            <SideMenu />
          </div>
          <div className="t-col-span-7">
            <h1 className="t-my-8 t-text-xl t-text-[#0B0C20] t-font-semibold">Dashboard</h1>
            <div className="t-grid t-grid-cols-12">
              <div className="t-col-span-1">
                <Image src={refl} width={55} height={40} />
              </div>
              <div className="t-col-span-11">
                <h1 className="t-ml-8 t-text-5xl t-text-[#0B0C20] t-font-bold">Reflection</h1>
              </div>
            </div>
            <Watchlist height={24}/> 
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
  export default Dashboard;