import * as model from "./model.js";
import totalEarnedView from "./views/totalEarnedView";
const dashContainer = document.querySelector("#appArea");

const controlTotalEarned = async function () {
  await model.getTotalEarned();
  totalEarnedView.render(model.state.totalEarned);
};

const init = function () {
  totalEarnedView.addHandlerRender(controlTotalEarned);
};

init();
