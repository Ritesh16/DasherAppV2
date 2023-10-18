import { callAPI } from "./helper";
import { API_URL } from "./config";

export const state = {
  totalEarned: 0,
  locations: [],
  search: {
    fromDate: "01012023",
    fromDateString: "01012023",
    toDate: "10092023",
    toDateString: "10092023",
    location: "all",
  },
};

export const getTotalEarned = async function () {
  const data = await callAPI(
    `${API_URL}statistics/GetTotalEarned?fromDate=${state.search.fromDateString}&toDate=${state.search.toDateString}&location=${state.search.location}`
  );

  state.totalEarned = data;
};

export const getLocations = async function () {
  const data = await callAPI(`${API_URL}locations`);
  console.log("locations", data);
  state.locations = data;
};

export const init = function () {
  const date = new Date();
  state.search.fromDate = new Date("01/01/2023");
  state.search.toDate = date;

  const month = state.search.fromDate.getMonth() + 1;

  state.search.fromDateString = `${
    month > 9 ? month : "0" + month
  }01${state.search.fromDate.getFullYear()}`;

  state.search.toDateString = `${
    month > 9 ? month : "0" + month
  }${state.search.toDate.getDate()}${state.search.toDate.getFullYear()}`;

  getLocations();
};
init();
