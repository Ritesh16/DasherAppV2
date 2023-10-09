import { callAPI } from "./helper";
import { API_URL } from "./config";

export const state = {
  totalEarned: 0,
  search: {
    fromDate: "01012023",
    toDate: "10092023",
    location: "all",
  },
};

export const getTotalEarned = async function () {
  const data = await callAPI(
    `${API_URL}statistics/GetTotalEarned?fromDate=${state.search.fromDate}&toDate=${state.search.toDate}&location=${state.search.location}`
  );

  console.log("model", data);
  state.totalEarned = data;
};

export const init = function () {};
init();
