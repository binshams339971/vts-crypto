import { iDashboardModel } from "@app/interfaces/iDashboardModel";

class DashboardModel
{
    constructor( opts: iDashboardModel ){
        Object.assign(this, opts)
    }

}

interface DashboardModel extends iDashboardModel {}

export default DashboardModel;