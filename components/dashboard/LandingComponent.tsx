import { DashboardServiceInstance } from "@app/services/DashboardService"
import React, { useState, useEffect } from 'react';
import { iDashboardModel } from "@app/interfaces/iDashboardModel"

interface PostProps {
    source: string;
}
  
export const LandingComponent: React.FC<PostProps> = ({source}) => {

    const [ dashboardServiceData, setdashboardServiceData ] = useState<iDashboardModel | null>({});

    const getServiceData = ()=>{
        const data: iDashboardModel | null =  DashboardServiceInstance.getStatistics({})
        setdashboardServiceData(data)
    }

    useEffect(() => {
      getServiceData()
    }, [])

    return (
        <div>
            <div>This is the dashboad Landing</div>
            <div>Printing source/props from component : { source }</div>
            <div>Printing service data : { dashboardServiceData?.name }</div>
        </div>
    )
  }