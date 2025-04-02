import View from "./view";

class RestaurantsView extends View {
    _parentElement = document.querySelector(".dashList");
    _errorMessage = "No restaurants found";
    _successMessage = "";
    
    addHandlerLoadRestaurants(handler) {
        window.addEventListener("load", handler);
    }
    
    addHandlerAddRestaurant(handler) {
        this._parentElement.addEventListener("click", function (e) {
        e.preventDefault();
        if (e.target.classList.contains("addRestaurant")) {
            handler();
        }
        });
    }
    
    _generateMarkup() {
        return `
        <h2>Restaurants</h2>
           <form class="addDashForm">
        <div class="addDashDiv">
            <div class="row">
                <div class="col-3">
                    <div class="form-group">
                        <select id= "location" name="location" class="form-select">
                            <option value="Middletown">Middletown</option>
                            <option value="Newark">Newark</option>
                        </select>
                    </div>
                </div>
                <div class="col-1">
                    <button id="addMoreBtn" type="button" class="btn btn-primary addMoreBtn" fdprocessedid="ibcyb">Search</button>
                </div>
            </div>
        </div>
        </form>

        <div class="row" id="restaurantStatsList">
            
        </div>


        `;
    }
}


export default new RestaurantsView();