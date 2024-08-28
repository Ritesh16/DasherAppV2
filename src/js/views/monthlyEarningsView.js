import View from "./view";

class MonthlyEarningView extends View {
  _parentElement = document.querySelector(".dashList");

  _generateMarkup() {
    return `
    <h3>Monthly Earnings</h3>
    <div class="row">
      <div class="col-2">Choose by year</div>
            <div class="col-3">
               <select class="form-control valid"><!--!--><option value="0">
                    --ALL--
                </option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option>
                </select>
            </div>
            <div class="col-2">
             <button type="button" class="btn btn-primary" fdprocessedid="u27pif">Search</button>
            </div>
    </div>
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
