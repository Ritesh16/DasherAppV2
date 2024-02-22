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
      .map(function () {
        return (
          "<tr class=table-primary> " +
          "<td>1</td>" +
          "<td>8/29/2023</td>" +
          "<td>4:50 PM</td>" +
          "<td>5:30 PM</td>" +
          "<td>$19.00</td>" +
          "<td>27</td>" +
          "<td>$28.50</td>" +
          "<td>Edit</td>" +
          "</tr>"
        );
      })
      .join("")}
     
    </tbody>
  </table>
    `;
  }
}

export default new DashListView();
