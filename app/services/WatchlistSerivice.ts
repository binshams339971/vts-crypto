import { WatchlistApiInstnce } from "@app/api/WatchlistApi";

class WatchlistService {
    getStatistics({...params}){
        return WatchlistApiInstnce.getStatistics({...params});
    }
}

const WatchlistServiceInstance = new WatchlistService()
export { WatchlistServiceInstance, WatchlistService }