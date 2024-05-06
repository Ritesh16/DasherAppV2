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
  await model.getLocations();

  dateFilterView.render(model);
  dateFilterView.showCalendar();
};

const controlDashList = async function () {
  model.state.headers.currentPage = 1;
  await model.getDashList();
  dashListView.render(model);

  model.state.headers.firstPage = 1;
  paginationView.render(model);
  paginationView.addHandlerClick(controlPagination);
};

const controlPagination = async function (goTo) {
  // render pagination
  if (goTo == ">>") {
    let firstPage = +document.querySelector(".pagination li:nth-child(2)")
      .innerText;

    firstPage = firstPage + 10;

    model.state.headers.currentPage = firstPage;
    model.state.headers.firstPage = firstPage;
  } else if (goTo == "<<") {
    let firstPage = +document.querySelector(".pagination li:nth-child(2)")
      .innerText;

    model.state.headers.currentPage = firstPage - 10;
    model.state.headers.firstPage = firstPage - 10;

    console.log("<<", model.state.headers.currentPage);

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

  if (model.state.headers.currentPage < model.state.headers.totalPages) {
    let firstPage = model.state.headers.firstPage;
    document.getElementById("appArea").innerHTML = "";
    await model.getDashList();
    dashListView.render(model);

    model.state.headers.firstPage = firstPage;

    document.getElementById("pageList").innerHTML = "";
    paginationView.render(model);
  }
};

const init = function () {
  model.setDates();
  dateFilterView.addHandlerRender(controlFilter);
  dashListView.addHandlerRender(controlDashList);
};

init();
