import DashboardModel from "@app/models/DashboardModel";
import { iDashboardModel } from "@app/interfaces/iDashboardModel";

class DashboardMapper{
    constructor(){

    }

    mapMany (data : iDashboardModel[]) : Array<iDashboardModel> {
        let list : iDashboardModel[] = []
        data?.forEach( (d: iDashboardModel) => {
            list.push(new DashboardModel(d))
        });
        return list;
    }

    mapOne (data : iDashboardModel) {
        if (data) {
            return new DashboardModel(data);
        }
        return null;
    }
}

const DashboardMapperInstance = new DashboardMapper()
export { DashboardMapper, DashboardMapperInstance }