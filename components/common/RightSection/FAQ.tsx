import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import Accordion from './Accordion';

export default function FAQ(){
    const accordionData = [
        {
          id: 1,
          title: 'What is Reflection?',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore.`
        },
        {
          id: 2,
          title: 'Will I receive devidence?',
          content: `Not yet, but support for devidence is comming soon.`
        },
      ];
    return (
        <div className="t-mr-8 t-rounded-[20px] t-bg-white t-p-6 t-scrollbar-thin t-scrollbar-thumb-custom t-overflow-y-scroll">
           <div className="t-container ">
                <div className="t-flex t-justify-between">
                    <div className="t-flex">
                        <LiveHelpOutlinedIcon fontSize="medium" className='t-mt-[.2rem] t-mr-2'></LiveHelpOutlinedIcon>
                        <p className="t-text-xl t-font-semibold t-text-[#0B0C20]">FAQ</p>
                    </div>
                    <p className="t-text-md t-font-semibold t-text-[#8775E6] hover:t-cursor-pointer">See all</p>
                </div>
                <div className='t-mt-8 t-border-t-2 t-h-[9rem]'>
                    <div className="">
                        {accordionData.map(({ id, title, content }) => (
                            <Accordion title={title} content={content} key={id}/>
                        ))}
                    </div>
                </div>
           </div>
        </div>
      )
}