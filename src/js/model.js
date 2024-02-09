import { callAPI } from "./helper";
import { API_URL } from "./config";

export const state = {
  totalEarned: 0,
  totalMileage: 0,
  locations: [],
  search: {
    fromDate: "10272022",
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

  state.totalEarned = data.toFixed(2);
};

export const getTotalMileage = async function () {
  const data = await callAPI(
    `${API_URL}statistics/GetTotalMileage?fromDate=${state.search.fromDateString}&toDate=${state.search.toDateString}&location=${state.search.location}`
  );

  state.totalMileage = data;
};

export const getLocations = async function () {
  const data = await callAPI(`${API_URL}locations`);
  state.locations = data;
  console.log(1, data);
};

export const init = function () {
  const date = new Date();
  state.search.fromDate = new Date("10/27/2022");
  state.search.toDate = date;

  const month = state.search.fromDate.getMonth() + 1;
  const toMonth = state.search.toDate.getMonth() + 1;

  state.search.fromDateString = `${
    month > 9 ? month : "0" + month
  }01${state.search.fromDate.getFullYear()}`;

  state.search.toDateString = `${
    toMonth > 9 ? toMonth : "0" + toMonth
  }${state.search.toDate.getDate()}${state.search.toDate.getFullYear()}`;

  //getLocations();
};
init();
