import { WatchlistMapperInstance } from "@app/mappers/WatchlistMapper"

class WatchlistApi {
    getStatistics({...params}){
        //axios call and get data
        //console.log(params)
        const data = [
            { 
                id: 1,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 2,
                symbol: "MSFT",
                price: "3228.24",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 3,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 4,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 5,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 6,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 7,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 8,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 9,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 10,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 11,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 12,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 13,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 14,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 15,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 16,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 17,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 18,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 19,
                symbol: "IBM",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
            { 
                id: 20,
                symbol: "MSFT",
                price: "1128.32",
                buy: "report",
                sell: "report",  
            },
        ];
        return WatchlistMapperInstance.mapMany(data);
    }
}

const WatchlistApiInstnce = new WatchlistApi()
export { WatchlistApiInstnce , WatchlistApi }