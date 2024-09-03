import View from "./view";

class MonthlyEarningView extends View {
  _parentElement = document.querySelector(".dashList");

  setSelectedYear(year) {
    const select = document.getElementById("selectYear");
    for (let i = 0; i < select.options.length; i++) {
      const selectedYear = parseInt(select.options[i].value);
      if (selectedYear === year) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  addHandlerOnSearch(handler) {
    document
      .querySelector(".searchMonthlyEarningsBtn")
      .addEventListener("click", handler);
  }

  _generateMarkup() {
    return `
      <h3>Monthly Earnings</h3>
      <div class="row">
        <div class="col-2">Choose by year</div>
              <div class="col-3">
                 <select class="form-control valid" id="selectYear">
                 <option value=0>All</option>
                    ${this._data.state.earnings.monthlyEarnings.years
                      .map(function (val) {
                        return (
                          "<option value='" + val + "'>" + val + "</option>"
                        );
                      })
                      .join("")}
                  </select>
              </div>
              <div class="col-2">
               <button type="button" class="btn btn-primary searchMonthlyEarningsBtn">Search</button>
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
      ${this._data.state.earnings.monthlyEarnings.data
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
