import View from "./view";

class MonthlyEarningView extends View {
  _parentElement = document.querySelector(".dashList");

  _generateMarkup() {
    return `
    <h3>Monthly Earnings</h3>
    <table class="table table-hover">
    <!--!-->
    <thead>
      <tr>
        <th scope="col">Month</th>
        <th scope="col">Year</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>
    <tbody>
    ${this._data.state.monthlyEarnings
      .map(function (dash) {
        return `<tr class=table-primary> 
          <td>${dash.month}</td>
          <td>${dash.year}</td>
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

export default new MonthlyEarningView();
