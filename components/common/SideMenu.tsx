import { useEffect, useRef, useState } from "react";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';

export const SideMenu = () => { 
    var nav = useRef<HTMLUListElement | null>(null);
    const el = useRef<HTMLUListElement | null>(null);

    function clear(){
        if(el.current){
            el.current.querySelectorAll("li a").forEach((x) => {
                x.classList.remove("active")
            })

        }
    }
    
    const addClass = () => {
        if(nav.current){
            nav.current.classList.toggle("expanded")
        }
    }

    const addActive = (e: any) => {
        clear();
        const target = el.current?.querySelector(`li:nth-child(${e}) a`) as Element;
        target.classList?.add("active");
    }
    return(
        <>
            <div className="t-fixed t-logo t-p-6 t-flex t-items-center t-mt-12">
                <svg onClick={()=>addClass()} className="t-cursor-pointer" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H18V2H0V0ZM0 6H18V8H0V6ZM11 12H0V14H11V12Z" fill="#BFC5D2" />
                </svg>
            </div>
            <nav ref={nav} className="t-w-52 t-bg-white t-fixed t-left-0 t-top-0 t-min-h-[36rem] t-rounded-r-lg t-mt-40 expanded">
                <ul className="t-flex t-flex-col t-items-center t-mt-8" ref={el}>
                    <li className="t-h-14 t-w-full" onClick={(e)=>addActive(1)}>
                        <a className="t-bg-link-hover t-w-full t-h-full t-flex t-items-center t-p-5 t-text-gray-400 t-relative active">
                            <GridViewOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2 icn'></GridViewOutlinedIcon>
                            <span className="link-label">Dashboard</span>
                        </a>
                    </li>
                    <li className="t-h-14 t-w-full" onClick={()=>addActive(2)}>
                        <a href="#" className="hover:t-bg-link-hover t-transition-colors t-duration-500 t-w-full t-h-full t-flex t-items-center t-p-5 t-text-gray-400  t-relative">
                            <PaidOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2 icn'></PaidOutlinedIcon>
                            <span className="link-label">Trade</span>
                        </a>
                    </li>
                    <li className="t-h-14 t-w-full" onClick={(e)=>addActive(3)}>
                        <a href="#" className="hover:t-bg-link-hover t-transition-colors t-duration-500 t-w-full t-h-full t-flex t-items-center t-p-5 t-text-gray-400  t-relative">
                            <AccessTimeOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2 icn'></AccessTimeOutlinedIcon>
                            <span className="link-label">Positions</span>
                        </a>
                    </li>
                    <li className="t-h-14 t-w-full" onClick={(e)=>addActive(4)}>
                    <a href="#" className="hover:t-bg-link-hover t-transition-colors t-duration-500 t-w-full t-h-full t-flex t-items-center t-p-5 t-text-gray-400  t-relative">
                        <InsertInvitationOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2 icn'></InsertInvitationOutlinedIcon>
                        <span className="link-label">Transactions</span>
                    </a>
                    </li>
                    <li className="t-h-14 t-w-full" onClick={(e)=>addActive(5)}>
                    <a href="#" className="hover:t-bg-link-hover t-transition-colors t-duration-500 t-w-full t-h-full t-flex t-items-center t-p-5 t-text-gray-400  t-relative">
                        <TrendingUpOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2 icn'></TrendingUpOutlinedIcon>    
                        <span className="link-label">Status</span>
                    </a>
                    </li>
                    <li className="t-h-14 t-w-full" onClick={(e)=>addActive(6)}>
                    <a href="#" className="hover:t-bg-link-hover t-transition-colors t-duration-500 t-w-full t-h-full t-flex t-items-center t-p-5 t-text-gray-400 t-relative">
                        <LiveHelpOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2 icn'></LiveHelpOutlinedIcon>    
                        <span className="link-label">FAQ</span>
                    </a>
                    </li>
                    <li className="t-h-14 t-w-full" onClick={(e)=>addActive(7)}>
                    <a href="#" className="hover:t-bg-link-hover t-transition-colors t-duration-500 t-w-full t-h-full t-flex t-items-center t-p-5 t-text-gray-400 t-relative">
                        <InsertDriveFileOutlinedIcon fontSize="medium" className='t-mt-[.1rem] t-mr-2 icn'></InsertDriveFileOutlinedIcon>    
                        <span className="link-label">Whitepaper</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}