export const state = {
  totalEarned: 0,
  totalMileage: 0,
  locations: [],
  dashList: [],
  weeklyEarnings: [],
  monthlyEarnings: [],
  earnings: {
    monthlyEarnings: {
      years: [2022, 2023, 2024],
      filter: {
        year: 2024,
      },
      data: [],
    },
  },
  search: {
    fromDate: "10272022",
    toDate: "10092023",
    location: "all",
  },
  headers: {},
};

export const getWeeklyEarnings = async function (pageNumber = 1) {
  console.log("week", pageNumber);
  let promiseArray = [];
  for (let i = 1; i <= 72; i++) {
    promiseArray.push({
      id: i,
      from: "5/13/2024",
      to: "5/20/2024",
      amount: 114.03 + i + 10,
    });
  }

  state.headers = {
    currentPage: pageNumber,
    itemsPerPage: 10,
    totalItems: 72,
    totalPages: 8,
    firstPage: 1,
  };

  const resolvedPromises = await Promise.all(
    promiseArray.slice((pageNumber - 1) * 10, pageNumber * 10)
  );

  state.weeklyEarnings = resolvedPromises;
};

export const resetHeaders = function () {
  state.headers = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 0,
    firstPage: 1,
  };
};

export const getMonthlyEarnings = async function (month = 8) {
  console.log("month", month);
  const promiseArray = [
    { month: "August", year: "2024", amount: "0" },
    { month: "July", year: "2024", amount: "114.03" },
    { month: "June", year: "2024", amount: "114.03" },
    { month: "May", year: "2024", amount: "114.03" },
    { month: "April", year: "2024", amount: "114.03" },
    { month: "March", year: "2024", amount: "114.03" },
    { month: "February", year: "2024", amount: "114.03" },
    { month: "January", year: "2024", amount: "114.03" },
    { month: "December", year: "2023", amount: "114.03" },
  ];

  state.headers = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 12,
    totalPages: 2,
    firstPage: 1,
  };
  const resolvedPromises = await Promise.all(promiseArray.slice(0, 12));
  state.monthlyEarnings = resolvedPromises;
};
