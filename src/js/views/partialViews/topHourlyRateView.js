export default class TopHourlyRateView {
    _parentElement = document.querySelector('#topHourlyRate');

    addLoadMoreHandler(handler) {
      document.querySelector(".topHourlyRateLoadMoreLink").addEventListener("click", handler);
    }

    addShowLessHandler(handler) {
      document.querySelector(".topHourlyRateShowLessLink").addEventListener("click", handler);
    }

    _generateMarkup() {
        return `
         <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Top Hourly Rate</div>
                <div class="card-body">
                      <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Date</th>
                             <th scope="col">Amount</th>
                             <th scope="col">Hourly Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${this._data.state.statistics.topHourlyRates.data
                            .map(function (dash) {
                              return `<tr class=table-active> 
                                <td>${new Date(dash.date).toLocaleDateString()}</td>
                                <td>${dash.amount.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}</td>
                                 <td>${dash.hourlyRate.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}</td>
                                </tr>`;
                            })
                            .join("")}                      
                        </tbody>
                     </table> 
                     <div class="row" stlye="text-align:right">
                        <div class="col-4">
                          ${this._data.state.statistics.topHourlyRates.page > 1 ? '<a class="card-link topHourlyRateShowLessLink" style="text-align:right; cursor:pointer">Show Less</a>' : '' }
                        </div>
                        <div class="col-3">
                        </div>
                        <div class="col-5"> 
                          <a class="card-link topHourlyRateLoadMoreLink" style="text-align:right; cursor:pointer">Load More</a>
                        </div>
                     </div>
                </div>
        </div>
        `;
    }

    render(data) {
      this._data = data;
      const markup = this._generateMarkup();
  
      this._clear();
      this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }

    renderSpinner = function () {
      this._clear();
      const markup = `
      <img src="loading.gif" style="height: 50px;" />
      `;
      this._parentElement.insertAdjacentHTML("afterbegin", markup);
    };

    _clear() {
      this._parentElement.innerHTML = "";
    }
}