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
import topEarningDays from "./views/partialViews/topEarningDaysView.js";
import addDashView from "./views/addDashView.js";
import reportsView from './views/reportsView.js';
import restaurantsView from './views/restaurantsView.js';
import toast from './toastNotification.js';

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

// Load Links
const loadLinks = function () {
  const earningsLink = document.querySelector("#earnings-link");
  const dashLink = document.querySelector("#dashapp-link");
  const statisticsLink = document.querySelector("#statistics-link");
  const addDashLink = document.querySelector("#addDash-link");
  const reportsLink = document.querySelector("#reports-link");
  const restaurantsLink = document.querySelector("#restaurants-link");

  earningsLink.addEventListener("click", loadEarnings);
  dashLink.addEventListener("click", loadDashesDirectly);
  statisticsLink.addEventListener("click", loadStatistics);
  addDashLink.addEventListener("click", loadAddDash);
  reportsLink.addEventListener("click", loadReports);
  restaurantsLink.addEventListener("click", loadRestaurants);
};

const loadRestaurants = async function () {
  clearDashes();
  restaurantsView.render(modelMock);
  const cityName = document.querySelector("#location").value;
  modelMock.getRestaurantStatsByCity(cityName, 1);
  const restaurantStatsListView = await loadRestaurantStatsListView();

  restaurantStatsListView.render(modelMock);
  console.log(modelMock.state.restaurants);
  
} 

const loadReports = function () {
  clearDashes();
  reportsView.render(modelMock);
  reportsView.loadDates();
  reportsView.generateReport(controlReports);
}

const controlReports = function () {
  const form = document.querySelector(".generateReportForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(form);
    console.log(formData.get("startDate"));
    console.log(formData.get("endDate"));
  });
}

const loadStatistics = function () {
  clearDashes();
  statisticsView.render(modelMock);
  loadTopEarnings();
  loadTopDashes();
  loadTopHourlyRates();
  loadTopBusyRestaurants();
  loadTopMileage();
};

const loadAddDash = function () {
  clearDashes();
  addDashView.render(modelMock);
  addDashView.showCalendar();
  addDashView.addMoreHandler(controlAddDash);
  addDashView.addDashDetails(controlUploadDash);
};

const controlUploadDash = function () {
  const form = document.querySelector(".addDashForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
 
    let formData = new FormData(form);

    let data = {
      dashDate: formData.get("dashDate"),
      location: formData.get("location"),
      details: [],
    };

    // Collect data from dynamically added rows
    let rows = form.querySelectorAll(".row");
    let hasError = false;
    rows.forEach((row) => {
      if (
        row.querySelector('[name="dashDate"]') ||
        row.querySelector('[name="submitDash"]')
      ) {
        return;
      }

      if (!row.querySelector('[name="startTime"]').value) {
        toast.show("error", "Please enter start time");
        hasError = true;
        return;
      }

      if (!row.querySelector('[name="endTime"]').value) {
        toast.show("error", "Please enter end time");
        hasError = true;
        return;
      }

      if (!row.querySelector('[name="amount"]').value) {
        toast.show("error", "Please amount amount");
        hasError = true;
        return;
      }

      if (!row.querySelector('[name="mileage"]').value) {
        toast.show("error", "Please amount mileage");
        hasError = true;
        return;
      }

      addDashView.renderSpinner();

     
      

      data.details.push({
        startTime: row.querySelector('[name="startTime"]').value,
        endTime: row.querySelector('[name="endTime"]').value,
        amount: row.querySelector('[name="amount"]').value,
        mileage: row.querySelector('[name="mileage"]').value,
      });

      setTimeout(() => {
        console.log('This message appears after a 2-second delay.');
        loadAddDash();
      }, 2000);
    });

    if (!hasError) {
      console.log(data);
      toast.show("info", "Dash added successfully");
      form.reset();
    }

    return;
  });
};

const controlAddDash = function () {
  // Create a new row
  var newRow = document.createElement("div");
  newRow.className = "row";

  // Start Time
  var startTimeCol = document.createElement("div");
  startTimeCol.className = "col-md-2";
  var startTimeGroup = document.createElement("div");
  startTimeGroup.className = "form-group";
  var startTimeLabel = document.createElement("label");
  startTimeLabel.setAttribute("for", "startTime");
  startTimeLabel.innerText = "Start Time";
  var startTimeInput = document.createElement("input");
  startTimeInput.type = "time";
  startTimeInput.className = "form-control";
  startTimeInput.id = "startTime";
  startTimeInput.name = "startTime";
  startTimeGroup.appendChild(startTimeLabel);
  startTimeGroup.appendChild(startTimeInput);
  startTimeCol.appendChild(startTimeGroup);

  // End Time
  var endTimeCol = document.createElement("div");
  endTimeCol.className = "col-md-2";
  var endTimeGroup = document.createElement("div");
  endTimeGroup.className = "form-group";
  var endTimeLabel = document.createElement("label");
  endTimeLabel.setAttribute("for", "endTime");
  endTimeLabel.innerText = "End Time";
  var endTimeInput = document.createElement("input");
  endTimeInput.type = "time";
  endTimeInput.className = "form-control";
  endTimeInput.id = "endTime";
  endTimeInput.name = "endTime";
  endTimeGroup.appendChild(endTimeLabel);
  endTimeGroup.appendChild(endTimeInput);
  endTimeCol.appendChild(endTimeGroup);

  // Amount
  var amountCol = document.createElement("div");
  amountCol.className = "col-md-2";
  var amountGroup = document.createElement("div");
  amountGroup.className = "form-group";
  var amountLabel = document.createElement("label");
  amountLabel.setAttribute("for", "amount");
  amountLabel.innerText = "Amount";
  var amountInput = document.createElement("input");
  amountInput.type = "number";
  amountInput.className = "form-control";
  amountInput.id = "amount";
  amountInput.name = "amount";
  amountGroup.appendChild(amountLabel);
  amountGroup.appendChild(amountInput);
  amountCol.appendChild(amountGroup);

  // Mileage
  var mileageCol = document.createElement("div");
  mileageCol.className = "col-md-2";
  var mileageGroup = document.createElement("div");
  mileageGroup.className = "form-group";
  var mileageLabel = document.createElement("label");
  mileageLabel.setAttribute("for", "mileage");
  mileageLabel.innerText = "Mileage";
  var mileageInput = document.createElement("input");
  mileageInput.type = "number";
  mileageInput.className = "form-control";
  mileageInput.id = "mileage";
  mileageInput.name = "mileage";
  mileageGroup.appendChild(mileageLabel);
  mileageGroup.appendChild(mileageInput);
  mileageCol.appendChild(mileageGroup);

  // Append columns to the new row
  newRow.appendChild(startTimeCol);
  newRow.appendChild(endTimeCol);
  newRow.appendChild(amountCol);
  newRow.appendChild(mileageCol);

  // Append the new row to the form
  document.querySelector(".addDashDiv").appendChild(newRow);
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

//  Partial Views Data methods
const loadTopEarnings = async function () {
  await loadTopEarningsByPageNumber(1);
};

const loadMoreTopEarnings = async function () {
  const pageNumber = modelMock.state.statistics.topEarnings.page + 1;
  await loadTopEarningsByPageNumber(pageNumber);
};

const loadTopEarningsByPageNumber = async function (pageNumber) {
  modelMock.getTopEarnings(pageNumber);
  const topEarningDaysView = await loadTopEarningDaysView();
  topEarningDaysView.render(modelMock);
  topEarningDaysView.addLoadMoreHandler(loadMoreTopEarnings);
  if (pageNumber > 1) topEarningDaysView.addShowLessHandler(loadTopEarnings);
};

const loadTopDashes = async function () {
  await loadTopDashesByPageNumber(1);
};

const loadMoreTopDashes = async function () {
  const pageNumber = modelMock.state.statistics.topDashes.page + 1;
  await loadTopDashesByPageNumber(pageNumber);
};

const loadTopDashesByPageNumber = async function (pageNumber) {
  modelMock.getTopDashes(pageNumber);
  const topDashesView = await loadTopDashesView();
  topDashesView.render(modelMock);
  topDashesView.addLoadMoreHandler(loadMoreTopDashes);
  if (pageNumber > 1) topDashesView.addShowLessHandler(loadTopDashes);
};

const loadTopHourlyRates = async function () {
  await loadTopHourlyRatesByPageNumber(1);
};

const loadMoreTopHourlyRates = async function () {
  const pageNumber = modelMock.state.statistics.topHourlyRates.page + 1;
  await loadTopHourlyRatesByPageNumber(pageNumber);
};

const loadTopHourlyRatesByPageNumber = async function (pageNumber) {
  modelMock.getTopHourlyRates(pageNumber);
  const topHourlyRatesView = await loadTopHourlyRatesView();
  topHourlyRatesView.render(modelMock);
  topHourlyRatesView.addLoadMoreHandler(loadMoreTopHourlyRates);
  if (pageNumber > 1) topHourlyRatesView.addShowLessHandler(loadTopHourlyRates);
};

const loadTopBusyRestaurants = async function () {
  await loadTopBusyRestaurantsByPageNumber(1);
};

const loadMoreTopBusyRestaurants = async function () {
  const pageNumber = modelMock.state.statistics.topBusyRestaurants.page + 1;
  await loadTopBusyRestaurantsByPageNumber(pageNumber);
};

const loadTopBusyRestaurantsByPageNumber = async function (pageNumber) {
  modelMock.getTopBusyRestaurants(pageNumber);
  const topBusyRestaurantsView = await loadTopBusyRestaurantsView();
  topBusyRestaurantsView.render(modelMock);
  topBusyRestaurantsView.addLoadMoreHandler(loadMoreTopBusyRestaurants);
  if (pageNumber > 1)
    topBusyRestaurantsView.addShowLessHandler(loadTopBusyRestaurants);
};

const loadTopMileage = async function () {
  await loadTopMileageByPageNumber(1);
};

const loadMoreTopMileage = async function () {
  const pageNumber = modelMock.state.statistics.highestMileage.page + 1;
  await loadTopMileageByPageNumber(pageNumber);
};

const loadTopMileageByPageNumber = async function (pageNumber) {
  modelMock.getHighestMileage(pageNumber);
  const topMileageView = await loadTopMileageView();
  topMileageView.render(modelMock);
  topMileageView.addLoadMoreHandler(loadMoreTopMileage);
  if (pageNumber > 1) topMileageView.addShowLessHandler(loadTopMileage);
};

//  Partial Views
const loadTopEarningDaysView = async function () {
  const module = await import("./views/partialViews/topEarningDaysView.js"); // Dynamic import
  const TopEarningDaysView = module.default; // Access default export
  const topEarningsView = new TopEarningDaysView(); // Create instance
  return topEarningsView;
};

const loadTopDashesView = async function () {
  const module = await import("./views/partialViews/topDashesView.js"); // Dynamic import
  const TopDashesView = module.default; // Access default export
  const topDashesView = new TopDashesView(); // Create instance
  return topDashesView;
};

const loadTopHourlyRatesView = async function () {
  const module = await import("./views/partialViews/topHourlyRateView.js"); // Dynamic import
  const TopHourlyRatesView = module.default; // Access default export
  const topHourlyRatesView = new TopHourlyRatesView(); // Create instance
  return topHourlyRatesView;
};

const loadTopBusyRestaurantsView = async function () {
  const module = await import("./views/partialViews/topBusyRestaurantsView.js"); // Dynamic import
  const TopBusyRestaurantsView = module.default; // Access default export
  const topBusyRestaurantsView = new TopBusyRestaurantsView(); // Create instance
  return topBusyRestaurantsView;
};

const loadTopMileageView = async function () {
  const module = await import("./views/partialViews/topMileageView.js"); // Dynamic import
  const TopMileageView = module.default; // Access default export
  const topMileageView = new TopMileageView(); // Create instance
  return topMileageView;
};

const loadRestaurantStatsListView =  async function () {
  const module = await import("./views/partialViews/restaurantStatsListView.js"); // Dynamic import
  const RestaurantStatsListView = module.default; // Access default export
  const restaurantStatsListView = new RestaurantStatsListView(); // Create instance
  return restaurantStatsListView;
};

init();
loadLinks();
