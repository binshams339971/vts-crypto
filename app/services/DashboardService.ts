import { DashboardApiInstnce } from "@app/api/DashboardApi";

class DashboardService {
    getStatistics({...params}){
        return DashboardApiInstnce.getStatistics({...params});
    }
}

const DashboardServiceInstance = new DashboardService()
export { DashboardServiceInstance, DashboardService }