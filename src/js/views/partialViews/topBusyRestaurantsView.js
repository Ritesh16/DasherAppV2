export default class TopBusyRestaurantsView {
    _parentElement = document.querySelector('#topBusyRestaurants');

    addLoadMoreHandler(handler) {
        document.querySelector(".topBusyRestaurantsLoadMoreLink").addEventListener("click", handler);
    }
  
    addShowLessHandler(handler) {
        document.querySelector(".topBusyRestaurantsShowLessLink").addEventListener("click", handler);
    }

    _generateMarkup() {
        return `
         <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Top Busy Restaurants</div>
                <div class="card-body">
                      <table class="table table-hover">
                        <thead>
                            <tr>
                             <th scope="col">Restaurant</th>
                             <th scope="col">Deliveries</th>
                              <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${this._data.state.statistics.topBusyRestaurants.data
                            .map(function (dash) {
                              return `<tr class=table-active> 
                                <td>${dash.name}</td>
                                <td>${dash.deliveries}</td>
                                <td>${dash.amount.toLocaleString("en-US", {
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
                          ${this._data.state.statistics.topBusyRestaurants.page > 1 ? '<a class="card-link topBusyRestaurantsShowLessLink" style="text-align:right; cursor:pointer">Show Less</a>' : '' }
                        </div>
                        <div class="col-3">
                        </div>
                        <div class="col-5"> 
                          <a class="card-link topBusyRestaurantsLoadMoreLink" style="text-align:right; cursor:pointer">Load More</a>
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
  
      _clear() {
        this._parentElement.innerHTML = "";
      }
}