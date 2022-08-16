import WatchlistModel from "@app/models/WatchlistModel";
import { iWatchlistModel } from "@app/interfaces/iWatchlistModel";

class WatchlistMapper{
    constructor(){}

    mapMany (data : iWatchlistModel[]) : Array<iWatchlistModel> {
        let list : iWatchlistModel[] = []
        data?.forEach( (d: iWatchlistModel) => {
            list.push(new WatchlistModel(d))
        });
        return list;
    }

    mapOne (data : iWatchlistModel) {
        if (data) {
            return new WatchlistModel(data);
        }
        return null;
    }
}

const WatchlistMapperInstance = new WatchlistMapper()
export { WatchlistMapper, WatchlistMapperInstance }