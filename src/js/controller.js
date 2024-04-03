import * as model from "./model.js";
import totalEarnedView from "./views/totalEarnedView";
import totalMileageView from "./views/totalMileageView";
import dateFilterView from "./views/dateFilterView";
import dashListView from "./views/dashListView";
import paginationView from "./views/paginationView";

// const controlTotalEarned = async function () {
//   await model.getTotalEarned();
//   totalEarnedView.render(model.state.totalEarned);
// };

// const controlTotalMileage = async function () {
//   await model.getTotalMileage();
//   totalMileageView.render(model.state.totalMileage);
// };

const controlFilter = async function () {
  //model.setDates();
  console.log("get locations");
  await model.getLocations();

  dateFilterView.render(model);
  dateFilterView.showCalendar();
};

const controlDashList = async function () {
  console.log("data.....", model);
  await model.getDashList();

  dashListView.render(model);
};

const controlPagination = function (goTo) {
  // render pagination
  console.log("before-->controlPAgination");
  //paginationView.render(model);
  console.log(goTo);
  console.log("after-->controlPAgination");
};

const init = function () {
  model.setDates();
  dateFilterView.addHandlerRender(controlFilter);
  dashListView.addHandlerRender(controlDashList);

  //model.getDashList1();

  //paginationView.render(model);
  //paginationView.addHandlerClick(controlPagination);
  console.log("after");
};

init();
