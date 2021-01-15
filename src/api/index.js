import axios from "axios";

const url = "/apartments.json";

export const fetchSquareMeterPriceDevelopmentData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = data.map((dailyData) => ({
      date: dailyData.date,
      pricePerSquare: dailyData.pricePerSquare,
      // askPrice: dailyData.askPrice,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPriceDevelopmentData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = data.map((dailyData) => ({
      date: dailyData.date,
      askPrice: dailyData.askPrice,
      endPrice: dailyData.endPrice,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSummaryData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = data.map((dailyData) => ({
      pricePerSquare: dailyData.pricePerSquare,
      date: dailyData.date,
      priceDevelopment: dailyData.endPrice - dailyData.askPrice,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetch = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = data.map((dailyData) => ({
      date: dailyData.date,
      pricePerSquare: dailyData.pricePerSquare,
      // askPrice: dailyData.askPrice,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
