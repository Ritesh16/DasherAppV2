export const state = {
  totalEarned: 0,
  totalMileage: 0,
  locations: [],
  dashList: [],
  weeklyEarnings: [],
  search: {
    fromDate: "10272022",
    toDate: "10092023",
    location: "all",
  },
  headers: {},
};

export const getWeeklyEarnings = async function () {
  const promiseArray = [
    { id: 20, from: "5/13/2024", to: "5/20/2024", amount: "114.03" },
    { id: 19, from: "5/13/2024", to: "5/20/2024", amount: "114.03" },
  ];

  const resolvedPromises = await Promise.all(promiseArray);
  state.weeklyEarnings = resolvedPromises;
};
