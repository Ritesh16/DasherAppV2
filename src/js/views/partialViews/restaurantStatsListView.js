export default class RestaurantStatsListView {
    _parentElement = document.querySelector('#restaurantStatsList');

    _generateMarkup() {
        return `
        <table class="table table-hover">
    <!--!-->
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Restaurant</th>
        <th scope="col">Amount</th>
        <th scope="col">Total Deliveries</th>
      </tr>
    </thead>
    <tbody>
    ${this._data.state.restaurants
      .map(function (restaurant) {
        return `<tr class=table-primary> 
          <td>${restaurant.name}</td>
           <td>${restaurant.totalEarned.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</td>
          <td>${restaurant.totalDeliveries}</td>
          <td>Edit</td>
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
  
      _clear() {
        this._parentElement.innerHTML = "";
      }
}