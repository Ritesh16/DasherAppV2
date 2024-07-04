import View from "./view.js";

class DashListView extends View {
  _parentElement = document.querySelector(".dashList");

  addHandlerRender(handler, loadDirectly = false) {
    if (loadDirectly) {
      handler();
    } else {
      window.addEventListener("load", handler);
    }
  }

  _generateMarkup() {
    return `
    <table class="table table-hover">
    <!--!-->
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date</th>
        <th scope="col">Start Time</th>
        <th scope="col">End Time</th>
        <th scope="col">Amount</th>
        <th scope="col">Mileage(miles)</th>
        <th scope="col">Hourly Rate</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    ${this._data.state.dashList
      .map(function (dash) {
        return `<tr class=table-primary> 
          <td>${dash.id}</td>
          <td>${new Date(dash.date).toLocaleDateString()}</td>
          <td>${new Date(dash.startTime).toLocaleTimeString(
            navigator.language,
            { hour: "2-digit", minute: "2-digit" }
          )}</td>
          <td>${new Date(dash.endTime).toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })}</td>
          <td>${dash.amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</td>
          <td>${dash.mileage}</td>
          <td>${dash.hourlyRate.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</td>
          <td>Edit</td>
          </tr>`;
      })
      .join("")}
     
    </tbody>
  </table>
    `;
  }
}

export default new DashListView();
