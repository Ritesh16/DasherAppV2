import View from "./view.js";

class DashListView extends View {
  _parentElement = document.querySelector(".dashList");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
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
          <td>${dash.date}</td>
          <td>${dash.startTime}</td>
          <td>${dash.endTime}</td>
          <td>${dash.amount}</td>
          <td>${dash.mileage}</td>
          <td>$28.50</td>
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
