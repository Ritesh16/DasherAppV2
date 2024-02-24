import * as model from "./model.js";
import totalEarnedView from "./views/totalEarnedView";
import totalMileageView from "./views/totalMileageView";
import dateFilterView from "./views/dateFilterView";
import dashListView from "./views/dashListView";

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
  await model.getDashList();
  dateFilterView.render(model);
  dateFilterView.showCalendar();
  dashListView.render(model);
};

const init = async function () {
  // totalEarnedView.addHandlerRender(controlTotalEarned);
  // totalMileageView.addHandlerRender(controlTotalMileage);
  dateFilterView.addHandlerRender(controlFilter);
  dashListView.addHandlerRender(controlFilter);
};

init();
