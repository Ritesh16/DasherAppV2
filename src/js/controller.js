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
  // call to load earnings
  // earningsView.render();
  // clearDashes();
  // earningsFilterView.render();
  // earningsFilterView.addHandleRender(earningsRadioButtonsClick);
  debugger;
  await modelMock.getWeeklyEarnings();
  weeklyEarningsView.render(modelMock);
  clearDashes();
  earningsFilterView.render();
  earningsFilterView.addHandleRender(earningsRadioButtonsClick);
};

const earningsRadioButtonsClick = async function (e) {
  if (e.target.value == "Weekly") {
    await modelMock.getWeeklyEarnings();
    weeklyEarningsView.render(modelMock);
    clearDashes();
    earningsFilterView.render();
    earningsFilterView.addHandleRender(earningsRadioButtonsClick);
  } else if (e.target.value == "Monthly") {
    document.querySelector(".dashList").innerHTML = "";
  } else {
  }
  console.log("target11", e.target.value);
};

const searchFilter = async function () {
  clearDashes();
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

  earningsLink.addEventListener("click", loadEarnings);
  dashLink.addEventListener("click", loadDashesDirectly);
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
init();
loadLinks();
