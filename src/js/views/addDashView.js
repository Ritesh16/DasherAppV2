import View from './view.js';

class AddDashView extends View {
    _parentElement = document.querySelector('.dashList');

    addMoreHandler(handler) {
        document.querySelector(".addMoreBtn").addEventListener("click", handler);
    }

    addHandlerUpload(handler) {
        const form = document.querySelector('.addDashForm');
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var formData = new FormData(form);

           var data = {
                dashDate: formData.get('dashDate'),
                location: formData.get('location'),
                startTime: [],
                endTime: [],
                amount: [],
                mileage: []
            };

            // Collect data from dynamically added rows
            var rows = form.querySelectorAll('.row');
            rows.forEach(row => {
                console.log(row);
                if (row.querySelector('[name="startTime"]')) {
                    console.log(row.querySelector('[name="startTime"]').value);
                    data.startTime.push(row.querySelector('[name="startTime"]').value);
                }
                if (row.querySelector('[name="endTime"]')) {
                    data.endTime.push(row.querySelector('[name="endTime"]').value);
                }
                if (row.querySelector('[name="amount"]')) {
                    data.amount.push(row.querySelector('[name="amount"]').value);
                }
                if (row.querySelector('[name="mileage"]')) {
                    data.mileage.push(row.querySelector('[name="mileage"]').value);
                }
            });
          //handler(data);
        });
      }
    
    _generateMarkup() {
        return `
        <h2>Add Dash</h2>
        <form class="addDashForm">
        <div class="addDashDiv">
            <div class="row">
                <div class="col-md-4">
                    <div class="form-group">
                        <input name="dashDate" type="date" class="form-control" id="dashDate">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <select name="location" class="form-select" id="exampleSelect1">
                            <option value="Middletown">Middletown</option>
                            <option value="Newark">Newark</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="form-group">
                      <button id="addMoreBtn" type="button" class="btn btn-primary addMoreBtn" fdprocessedid="ibcyb">Add More Dash</button>
                    </div>
                </div>
            </div>
             <div class="row">
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="dashStartTime">Start Time</label>
                        <input name="startTime" type="text" class="form-control" id="startTime">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="dashEndTime">End Time</label>
                        <input name="endTime" type="text" class="form-control" id="endTime">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="amount">Amount</label>
                        <input name="amount" type="number" class="form-control" id="amount">
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="form-group">
                        <label for="mileage">Mileage</label>
                        <input name="mileage" type="number" class="form-control" id="mileage">
                    </div>
                </div>
            </div>
           
            </div>
             <div class="row">
            <div class="col-md-6">
                    <div class="form-group">
                       <input type="submit" class="btn btn-primary" value="Submit">
                    </div>
                </div>
            </div>
        </form>
        `;
    }
}

export default new AddDashView();