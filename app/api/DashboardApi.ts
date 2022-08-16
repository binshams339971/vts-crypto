import { DashboardMapperInstance } from "@app/mappers/DashboardMapper"

class DashboardApi {
    getStatistics({...params}){
        //axios call and get data
        //console.log(params)
        const data = { 
            name: "Report",
            address: "Dhaka",
            type: "report",  
        };
        return DashboardMapperInstance.mapOne(data)
    }
}

const DashboardApiInstnce = new DashboardApi()
export { DashboardApiInstnce , DashboardApi }