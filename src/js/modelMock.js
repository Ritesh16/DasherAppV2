export const getYears = function () {
  let startYear = 2022;
  const currentYear = new Date().getFullYear();

  let years = [];
  while (startYear <= currentYear) {
    years.push(startYear);
    startYear++;
  }

  return years;
};

export const state = {
  totalEarned: 0,
  totalMileage: 0,
  locations: [],
  dashList: [],
  weeklyEarnings: [],
  monthlyEarnings: [],
  earnings: {
    monthlyEarnings: {
      years: getYears(),
      filter: {
        year: new Date().getFullYear(),
      },
      data: [],
    },
    dailyEarnings: {
      filter: {
        fromDate: "",
        toDate: "",
      },
      data: [],
    },
  },
  statistics: {
    topEarnings: {
      page: 1,
      data: []
    }
  },
  search: {
    fromDate: "10272022",
    toDate: "10092023",
    location: "all",
  },
  headers: {},
};

export const getWeeklyEarnings = async function (pageNumber = 1) {
  let promiseArray = [];
  let from_date = new Date(2024, 4, 13);
  let to_date = new Date(2024, 4, 20);
  let fd = new Date(2024, 4, 13);

  for (let i = 1; i <= 72; i++) {
    promiseArray.push({
      id: i,
      fromDate: from_date,
      toDate: to_date,
      amount: 114.03 + i + 10,
    });

    fd.setDate(fd.getDate() - 7);
    from_date = fd;
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

  state.earnings.monthlyEarnings.data = resolvedPromises;
};

export const getDailyEarnings = async function (pageNumber, fromDate, toDate) {
  const promiseArray = [];

  for (let i = 0; i < 54; i++) {
    promiseArray.push({
      date: new Date(),
      amount: 100 + i,
      totalMinutes: 10 + i,
      hourlyRate: 15 + (10 * i) / 10,
    });
  }

  state.headers = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 72,
    totalPages: 8,
  };
  const resolvedPromises = await Promise.all(
    promiseArray.slice((pageNumber - 1) * 10, pageNumber * 10)
  );

  state.earnings.dailyEarnings.filter.fromDate = fromDate;
  state.earnings.dailyEarnings.filter.toDate = toDate;

  state.earnings.dailyEarnings.data = resolvedPromises;
};

export const getTopEarnings = async function(pageNumber) {
  let promiseArray = [];
  let fd = new Date(2024, 4, 13);

  for (let i = 1; i <= 5*pageNumber; i++) {
    promiseArray.push({
      date: fd,
      amount: 70 + i - 10,
    });

    fd.setDate(fd.getDate() - 1);
  }

  state.statistics.topEarnings.page = pageNumber;
  state.statistics.topEarnings.data = promiseArray;
}