import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';

export default function RecentTrades(){
    return (
        <div className="t-mr-8 t-rounded-[20px] t-bg-white t-p-6 t-my-4 t-scrollbar-thin t-scrollbar-thumb-custom t-overflow-y-scroll">
           <div className="t-container">
                <div className="t-flex t-justify-between">
                    <div className="t-flex">
                        <InsertInvitationOutlinedIcon fontSize="medium" className='t-mt-[.2rem] t-mr-2'></InsertInvitationOutlinedIcon>
                        <p className="t-text-xl t-font-semibold t-text-[#0B0C20]">Recent Trades</p>
                    </div>
                    <p className="t-text-md t-font-semibold t-text-[#8775E6] hover:t-cursor-pointer">See all</p>
                </div>
                <div className='t-ml-1 t-m-6 t-h-[7rem]'>
                    <div className="t-mt-4 t-flex">
                        <div className="t-mt-2 t-mr-4" style={{'background': "#8775E6", "width": "10px", height: "10px", 'borderRadius': '50%'}}></div>
                        <div>
                            <p className="t-text-sm t-text-[#ABABC6]">7/27/22 at 4:30pm</p>
                            <p className="t-text-md t-font-semibold t-text-[#0B0C20]">Wallet 0xd95...34 bought 200 IBM</p>
                        </div>
                    </div>
                    <div className="t-mt-4 t-flex">
                        <div className="t-mt-2 t-mr-4" style={{'background': "#8775E6", "width": "10px", height: "10px", 'borderRadius': '50%'}}></div>
                        <div>
                            <p className="t-text-sm t-text-[#ABABC6]">7/27/22 at 4:30pm</p>
                            <p className="t-text-md t-font-semibold t-text-[#0B0C20]">Wallet 0xd95...34 bought 200 IBM</p>
                        </div>
                    </div>
                    <div className="t-mt-4 t-flex">
                        <div className="t-mt-2 t-mr-4" style={{'background': "#8775E6", "width": "10px", height: "10px", 'borderRadius': '50%'}}></div>
                        <div>
                            <p className="t-text-sm t-text-[#ABABC6]">7/27/22 at 4:30pm</p>
                            <p className="t-text-md t-font-semibold t-text-[#0B0C20]">Wallet 0xd95...34 bought 200 IBM</p>
                        </div>
                    </div>
                </div>
                
           </div>
        </div>
      )
}