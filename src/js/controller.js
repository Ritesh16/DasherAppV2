import * as model from "./model.js";
import totalEarnedView from "./views/totalEarnedView";
import dateFilterView from "./views/dateFilterView";

const dashContainer = document.querySelector("#appArea");

const controlTotalEarned = async function () {
  await model.getTotalEarned();
  totalEarnedView.render(model.state.totalEarned);
};

const controlFilter = async function () {
  dateFilterView.render(model);
  dateFilterView.showCalendar();
};

const init = function () {
  totalEarnedView.addHandlerRender(controlTotalEarned);
  dateFilterView.addHandlerRender(controlFilter);
};

init();
