import * as model from "./model.js";
import totalEarnedView from "./views/totalEarnedView";
import dateFilterView from "./views/dateFilterView";

const controlTotalEarned = async function () {
  await model.getTotalEarned();
  totalEarnedView.render(model.state.totalEarned);
};

const controlFilter = async function () {
  dateFilterView.render(model);
  dateFilterView.showCalendar();
};

const init = function () {
  model.getLocations();
  totalEarnedView.addHandlerRender(controlTotalEarned);
  dateFilterView.addHandlerRender(controlFilter);
};

init();
