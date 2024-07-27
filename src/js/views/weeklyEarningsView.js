import View from "./view";

class WeeklyEarningsView extends View {
  _parentElement = document.querySelector(".dashList");

  _generateMarkup() {
    return `
    <h3>Weekly Earnings</h3>
    <table class="table table-hover">
    <!--!-->
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">From</th>
        <th scope="col">To</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>
    <tbody>
    ${this._data.state.weeklyEarnings
      .map(function (dash) {
        return `<tr class=table-primary> 
          <td>${dash.id}</td>
          <td>${new Date(dash.from).toLocaleDateString()}</td>
          <td>${new Date(dash.to).toLocaleDateString()}</td>
          <td>${dash.amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</td>
          </tr>`;
      })
      .join("")}
     
    </tbody>
  </table>
    `;
  }
}

export default new WeeklyEarningsView();
