import { callAPI } from "./helper";
import { API_URL } from "./config";

export const state = {
  totalEarned: 0,
  search: {
    fromDate: "01012023",
    fromDateString: "",
    toDate: "10092023",
    toDateString: "",
    location: "all",
  },
};

export const getTotalEarned = async function () {
  const data = await callAPI(
    `${API_URL}statistics/GetTotalEarned?fromDate=${state.search.fromDateString}&toDate=${state.search.toDateString}&location=${state.search.location}`
  );

  state.totalEarned = data;
};

export const init = function () {
  const date = new Date();
  state.search.fromDate = new Date("10/01/2023");
  state.search.toDate = date;

  state.search.fromDateString = `${
    state.search.fromDate.getMonth() + 1
  }01${state.search.fromDate.getFullYear()}`;

  state.search.toDateString = `${
    state.search.toDate.getMonth() + 1
  }${state.search.toDate.getDate()}${state.search.toDate.getFullYear()}`;

  console.log(state.search);
};
init();
