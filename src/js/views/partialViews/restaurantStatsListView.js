export default class RestaurantStatsListView {
    _parentElement = document.querySelector('#restaurantStatsList');

    _generateMarkup() {
        return `
        <table class="table table-hover">
    <!--!-->
    <thead>
      <tr>
        <th scope="col">Restaurant</th>
        <th scope="col">Amount</th>
        <th scope="col">Total Deliveries</th>
      </tr>
    </thead>
    <tbody>
    ${this._data.state.restaurants.data
      .map(function (restaurant) {
        return `<tr class=table-primary> 
          <td>${restaurant.name}</td>
           <td>${restaurant.totalEarned.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</td>
          <td>${restaurant.totalDeliveries}</td>
          </tr>`;
      })
      .join("")}
     
    </tbody>
  </table>
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