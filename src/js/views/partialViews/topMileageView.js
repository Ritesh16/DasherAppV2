export default class TopMileageView {
    _parentElement = document.querySelector('#highestMileage');

    addLoadMoreHandler(handler) {
        document.querySelector(".highestMileageLoadMoreLink").addEventListener("click", handler);
    }
  
    addShowLessHandler(handler) {
        document.querySelector(".highestMileageShowLessLink").addEventListener("click", handler);
    }

    _generateMarkup() {
        return `
         <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Highest Mileage</div>
                <div class="card-body">
                      <table class="table table-hover">
                        <thead>
                            <tr>
                             <th scope="col">Date</th>
                             <th scope="col">Mileage</th>
                            </tr>
                        </thead>
                        <tbody>
                        ${this._data.state.statistics.highestMileage.data
                            .map(function (dash) {
                              return `<tr class=table-active> 
                                 <td>${new Date(dash.date).toLocaleDateString()}</td>
                                <td>${dash.mileage}</td>
                                </tr>`;
                            })
                            .join("")}                      
                        </tbody>
                     </table> 
                     <div class="row" stlye="text-align:right">
                        <div class="col-4">
                          ${this._data.state.statistics.highestMileage.page > 1 ? '<a class="card-link highestMileageShowLessLink" style="text-align:right; cursor:pointer">Show Less</a>' : '' }
                        </div>
                        <div class="col-3">
                        </div>
                        <div class="col-5"> 
                          <a class="card-link highestMileageLoadMoreLink" style="text-align:right; cursor:pointer">Load More</a>
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