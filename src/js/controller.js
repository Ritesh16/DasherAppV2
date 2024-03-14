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

const controlFilter = function () {
  //model.setDates();

  dateFilterView.render(model);
  dateFilterView.showCalendar();
};

const controlDashList = function () {
  console.log("data.....", model);
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
  //await model.getDashList();
  model.getLocations();

  model.setDates();
  model.getDashList1();
  console.log(88, model.state);

  // totalEarnedView.addHandlerRender(controlTotalEarned);
  // totalMileageView.addHandlerRender(controlTotalMileage);
  dateFilterView.addHandlerRender(controlFilter);
  dashListView.addHandlerRender(controlDashList);

  console.log("before");
  console.log(1, model.state.headers);
  paginationView.render(model);
  paginationView.addHandlerClick(controlPagination);
  console.log("after");
};

init();
