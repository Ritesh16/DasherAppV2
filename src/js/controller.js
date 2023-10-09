import * as model from "./model.js";
import totalEarnedView from "./views/totalEarnedView";

const dashContainer = document.querySelector("#appArea");
console.log(dashContainer);

const controlTotalEarned = async function () {
  await model.getTotalEarned();
  console.log(11, model);
  totalEarnedView.render(model.state.totalEarned);
};

const init = function () {
  console.log(1);
  totalEarnedView.addHandlerRender(controlTotalEarned);
  console.log(2);
};

init();
