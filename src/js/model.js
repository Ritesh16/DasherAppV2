import { callAPI, callAPIWithHeaders } from "./helper";
import { API_URL } from "./config";

export const state = {
  totalEarned: 0,
  totalMileage: 0,
  locations: [],
  dashList: [],
  search: {
    fromDate: "10272022",
    toDate: "10092023",
    location: "all",
  },
  headers: {},
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
  const response = await callAPI(`${API_URL}locations`);
  const data = await response.json();
  state.locations = data;
};

export const getDashList = async function () {
  const response = await callAPI(
    `${API_URL}DailyDashes?pageNumber=1&pageSize=10&location=all&fromDate=${state.search.fromDate}&toDate=${state.search.toDate}`
  );

  const data = await response.json();
  state.dashList = data;
  state.headers = response.headers.get("Pagination");
};

export const setDates = async function () {
  let myPromise = new Promise(function (resolve) {
    const date = new Date();
    state.search.fromDate = "10-27-2022";

    // Get year, month, and day part from the date
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    var formattedDate = month + "-" + day + "-" + year;

    state.search.toDate = formattedDate;
    resolve();
  });

  return await myPromise;
};
