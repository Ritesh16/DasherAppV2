import * as model from "./model.js";
import totalEarnedView from "./views/totalEarnedView";
import totalMileageView from "./views/totalMileageView";
import dateFilterView from "./views/dateFilterView";

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
};

const init = async function () {
  // totalEarnedView.addHandlerRender(controlTotalEarned);
  // totalMileageView.addHandlerRender(controlTotalMileage);
  dateFilterView.addHandlerRender(controlFilter);
};

init();
