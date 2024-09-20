import * as model from "./model.js";
import * as modelMock from "./modelMock.js";
import totalEarnedView from "./views/totalEarnedView";
import totalMileageView from "./views/totalMileageView";
import dateFilterView from "./views/dateFilterView";
import dashListView from "./views/dashListView";
import paginationView from "./views/paginationView";
import earningsView from "./views/earningsView";
import EarningsFilterView from "./views/earningsFilterView";
import earningsFilterView from "./views/earningsFilterView";
import weeklyEarningsView from "./views/weeklyEarningsView";
import monthlyEarningsView from "./views/monthlyEarningsView.js";
import paginationView2 from "./views/paginationView2.js";
import dailyEarningsView from "./views/dailyEarningsView.js";
import statisticsView from "./views/statisticsView.js";

// const controlTotalEarned = async function () {
//   await model.getTotalEarned();
//   totalEarnedView.render(model.state.totalEarned);
// };

// const controlTotalMileage = async function () {
//   await model.getTotalMileage();
//   totalMileageView.render(model.state.totalMileage);
// };

const controlFilter = async function () {
  await model.getLocations();
  dateFilterView.render(model);
  dateFilterView.showCalendar();
  dateFilterView.addHandlerOnSearch(searchFilter);
};

const loadEarnings = async function () {
  document.getElementById("pageList").innerHTML = "";
  await modelMock.getWeeklyEarnings();
  weeklyEarningsView.render(modelMock);
  clearDashes();
  earningsFilterView.render();
  earningsFilterView.addHandleRender(earningsRadioButtonsClick);
  paginationView2.render(modelMock);
  paginationView2.addHandlerClick(handleWeeklyEarningsPagination, 1001);
};

const handleWeeklyEarningsPagination = async function (goto) {
  await modelMock.getWeeklyEarnings(goto);
  weeklyEarningsView.render(modelMock);
  paginationView2.render(modelMock);
};

const handleMonthlyEarningsPagination = async function (goto) {
  console.log(goto);
  await modelMock.getMonthlyEarnings(goto);
  monthlyEarningsView.render(modelMock);
  paginationView2.render(modelMock);
};

const handleDailyEarningsPagination = async function (goTo) {
  console.log(goTo);
};

const searchMonthlyEarnings = async function () {
  console.log("monthly earnings search begins");
};

const searchDailyEarnings = async function () {
  console.log("daily earnings search begins");
};

const earningsRadioButtonsClick = async function (e) {
  modelMock.resetHeaders();

  if (e.target.value == "Weekly") {
    await modelMock.getWeeklyEarnings();
    weeklyEarningsView.render(modelMock);
    paginationView2.addHandlerClick(handleWeeklyEarningsPagination);
  } else if (e.target.value == "Monthly") {
    await modelMock.getMonthlyEarnings();
    document.querySelector(".dashList").innerHTML = "";
    monthlyEarningsView.render(modelMock);
    monthlyEarningsView.addHandlerOnSearch(searchMonthlyEarnings);
    paginationView2.render(modelMock);
    paginationView2.addHandlerClick(handleMonthlyEarningsPagination);
    monthlyEarningsView.setSelectedYear(
      modelMock.state.earnings.monthlyEarnings.filter.year
    );
  } else {
    await modelMock.getDailyEarnings(
      1,
      modelMock.state.earnings.dailyEarnings.filter.fromDate,
      modelMock.state.earnings.dailyEarnings.filter.toDate
    );

    dailyEarningsView.render(modelMock);
    dailyEarningsView.addHandleSearch(searchDailyEarnings);
    dailyEarningsView.showCalendar();
    paginationView2.render(modelMock);
    paginationView2.addHandlerClick(handleDailyEarningsPagination);
  }
};

const searchFilter = async function () {
  dashListView.renderSpinner();
  model.state.search.fromDate = document.querySelector(".fromDate").value;
  model.state.search.toDate = document.querySelector(".toDate").value;
  let locationElement = document.querySelector(".location");
  let location =
    locationElement.options[locationElement.selectedIndex].innerText;

  model.state.search.location = location;

  await model.getDashList();
  dashListView.render(model);

  model.state.headers.firstPage = 1;
  paginationView.render(model);
  paginationView.addHandlerClick(controlPagination);
};

const controlDashList = async function () {
  dashListView.renderSpinner();
  model.state.headers.currentPage = 1;
  await model.getDashList();
  dashListView.render(model);

  model.state.headers.firstPage = 1;
  paginationView.render(model);
  paginationView.addHandlerClick(controlPagination);
};

const controlPagination = async function (goTo) {
  // render pagination
  let firstPage = +document.querySelector(".pagination li:nth-child(2)")
    .innerText;

  if (goTo == ">>") {
    firstPage = firstPage + 10;

    model.state.headers.currentPage = firstPage;
    model.state.headers.firstPage = firstPage;
  } else if (goTo == "<<") {
    model.state.headers.currentPage = firstPage - 10;
    model.state.headers.firstPage = firstPage - 10;

    if (model.state.headers.currentPage < 0) {
      model.state.headers.currentPage = 1;
      model.state.headers.firstPage = 1;
    }
  } else {
    model.state.headers.currentPage = goTo;
    model.state.headers.firstPage = +document.querySelector(
      ".pagination li:nth-child(2)"
    ).innerText;
  }

  if (model.state.headers.currentPage <= model.state.headers.totalPages) {
    dashListView.renderSpinner();
    let firstPage = model.state.headers.firstPage;
    document.getElementById("appArea").innerHTML = "";
    await model.getDashList();
    dashListView.render(model);
    model.state.headers.firstPage = firstPage;
    paginationView.render(model);
  }
};

const loadLinks = function () {
  const earningsLink = document.querySelector("#earnings-link");
  const dashLink = document.querySelector("#dashapp-link");
  const statisticsLink = document.querySelector("#statistics-link");

  earningsLink.addEventListener("click", loadEarnings);
  dashLink.addEventListener("click", loadDashesDirectly);
  statisticsLink.addEventListener("click", loadStatistics);
};

const loadStatistics = async function () {
  clearDashes();
  statisticsView.render(modelMock);
};

const init = function () {
  loadDashes();
};

const loadDashesDirectly = function () {
  loadDashes(true);
};

const loadDashes = function (loadDirectly = false) {
  model.setDates();
  dateFilterView.addHandlerRender(controlFilter, loadDirectly);
  dashListView.addHandlerRender(controlDashList, loadDirectly);
};

const clearDashes = function () {
  document.getElementById("filter").innerHTML = "";
  document.getElementById("pageList").innerHTML = "";
};

const clearPagination = function () {
  document.getElementById("pageList").innerHTML = "";
};

init();
loadLinks();
