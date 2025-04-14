import { callAPI, callAPIWithHeaders } from "./helper";
import { API_URL, PAGE_SIZE } from "./config";

export const state = {
  totalEarned: 0,
  totalMileage: 0,
  highestEarningDay: {
    date: "",
    value: 0
  },
  locations: [],
  dashList: [],
  weeklyEarnings: [],
  monthlyEarnings: [],
  search: {
    fromDate: "10272022",
    toDate: "10092023",
    location: "all",
  },
  headers: {},
};

export const getWeeklyEarnings = async function () {};

export const getTotalEarned = async function () {
  const response = await callAPI(
    `${API_URL}TotalEarnings?fromDate=${state.search.fromDate}&toDate=${state.search.toDate}&location=${state.search.location}`
  );

  var output = await response.json();
  if(output.success) {
    state.totalEarned = output.data.toFixed(2);
  }
  else{
    state.totalEarned = '0';
    console.log("Error fetching total earnings:", output.message);
  }
  
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
    `${API_URL}DailyDashes?pageNumber=${state.headers.currentPage}&pageSize=${PAGE_SIZE}&location=${state.search.location}&fromDate=${state.search.fromDate}&toDate=${state.search.toDate}`
  );

  const data = await response.json();
  state.dashList = data;
  const headers = JSON.parse(response.headers.get("Pagination"));
  state.headers = headers;
};

export const getDashList1 = function () {
  fetch(
    `${API_URL}DailyDashes?pageNumber=1&pageSize=10&location=all&fromDate=${state.search.fromDate}&toDate=${state.search.toDate}`
  )
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Parse the response as JSON

      this.state.headers = JSON.parse(response.headers.get("Pagination"));
      return response.json();
    })
    .then((d) => (this.state.dashList = d));
};

export const setDates = function () {
  const date = new Date();
  state.search.fromDate = "10-27-2022";

  // Get year, month, and day part from the date
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });

  // Generate yyyy-mm-dd date string
  var formattedDate = month + "-" + day + "-" + year;

  state.search.toDate = formattedDate;
};

export const getHighestEarningDay = async function() {
  const output = await callAPI(
    `${API_URL}statistics/GetHighestEarningDays?fromDate=${state.search.fromDateString}&toDate=${state.search.toDateString}&location=${state.search.location}`
  );
  
console.log(output);
  state.highestEarningDay = output;
  state.highestEarningDayDate = data.date;
}