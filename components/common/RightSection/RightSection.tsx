import FAQ from "./FAQ";
import RecentTrades from "./RecentTrades";
import WhitePaper from "./WhitePaper";

export default function RightSection(){
    return(
        <>
            <div className="t-flex t-justify-end t-my-9">
              <button className="t-mr-8 t-px-6 t-py-1 t-bg-[#8775E6] t-text-center t-text-white t-rounded-full t-font-semibold">Connect Wallet</button>
            </div>
            <RecentTrades />
            <FAQ />
            <WhitePaper />
        </>
    )
}