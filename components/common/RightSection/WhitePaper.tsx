import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export default function WhitePaper() {
    return (
        <div className="t-mr-8 t-rounded-[20px] t-bg-white t-p-6 t-my-4">
           <div className="t-overflow-y-auto">
                <div className="t-flex t-justify-between">
                    <div className="t-flex">
                        <InsertDriveFileOutlinedIcon fontSize="medium" className='t-mt-[.2rem] t-mr-2'></InsertDriveFileOutlinedIcon>
                        <p className="t-text-xl t-font-semibold t-text-[#0B0C20]">Whitepaper</p>
                    </div>
                    <p className="t-text-md t-font-semibold t-text-[#8775E6] hover:t-cursor-pointer">More</p>
                </div>
                <div className='t-ml-1 t-m-6 t-text-justify t-text-[#0B0C20]'>
                    <p>For each token issued, we hold a share of the associated stock in our account. We are audited by Grant Thorton who can attest that each token backed by stock on..</p>
                </div>
                
           </div>
        </div>
      )
  }