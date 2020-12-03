import axios from "axios";

const url = "/apartments.json"
// const url = "https://covid19.mathdro.id/api";




export const fetchSquareMeterPriceDevelopmentData = async () => {
    try {
        const {data} = await axios.get(url);
        const modifiedData = data.map((dailyData) => ({
            date: dailyData.date,
            pricePerSquare: dailyData.pricePerSquare,
            // askPrice: dailyData.askPrice,
        }));
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

export const fetchPriceDevelopmentData = async () => {
    try {
        const {data} = await axios.get(url);
        const modifiedData = data.map((dailyData) => ({
            date: dailyData.date,
            askPrice: dailyData.askPrice,
            endPrice: dailyData.endPrice,
        }));
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

export const fetchSummaryData = async () => {
    try {
        const {data} = await axios.get(url);
        const modifiedData = data.map((dailyData) => ({
            pricePerSquare: dailyData.pricePerSquare,
            date: dailyData.date,  
            priceDevelopment: dailyData.endPrice - dailyData.askPrice,
        }));
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

export const fetch = async () => {
    try {
        const {data} = await axios.get(url);
        const modifiedData = data.map((dailyData) => ({
            date: dailyData.date,
            pricePerSquare: dailyData.pricePerSquare,
            // askPrice: dailyData.askPrice,
        }));
        return modifiedData
    } catch (error) {
        console.log(error);
    }
}

// export const fetchData = async (country) => {

//     let changeableUrl = url;

//     if (country) {
//         changeableUrl = `${url}/countries/${country}`
//     }

//     try {
//         const {data} = await axios.get(changeableUrl);
//         const modifiedData = {
//             confirmed: data.confirmed,
//             recovered: data.recovered,
//             deaths: data.deaths,
//             lastUpdate: data.lastUpdate
//         }
//         return modifiedData;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const fetchDailyData = async () => {
//     try {
//         const {data} = await axios.get(`${url}/daily`);
//         const modifiedData = data.map((dailyData) => ({
//             confirmed: dailyData.confirmed.total,
//             deaths: dailyData.deaths.total,
//             date: dailyData.reportDate,
//         }));
//         return modifiedData;
//     } catch (error) {
//         console.log(error);
//     }
// }



// export const fetchCountries = async () => {
//     try {
//         const {data: {countries}} = await axios.get(`${url}/countries`);
//         return countries.map((country) => country.name)
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const fetchDeaths = async () => {
//     try {
//         const {data: {countries}} = await axios.get(`${url}/deaths`);
//         return countries.map((country) => country.name)
//     } catch (error) {
//         console.log(error);
//     }
// }