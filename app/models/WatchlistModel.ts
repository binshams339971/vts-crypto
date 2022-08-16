import { iWatchlistModel } from "@app/interfaces/iWatchlistModel";

class WatchlistModel
{
    constructor( opts: iWatchlistModel ){
        Object.assign(this, opts)
    }

}

interface WatchlistModel extends iWatchlistModel {}

export default WatchlistModel;