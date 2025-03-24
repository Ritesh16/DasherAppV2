import View from "./view.js";

class ReportsView extends View {
    _parentElement = document.querySelector(".dashList");

    _generateMarkup() {
        return `
        <h2>Report</h2>
        <div class="row">
            <div class="col-2">
             <label class="form-label mt-1">Start Date</label>
            </div>
            <div class="col-2">
                <input type="date" class="form-control" id="startDate">
            </div>
            <div class="col-2">
             <label class="form-label mt-1">End Date</label>
            </div>
            <div class="col-2">
                <input type="date" class="form-control" id="endDate">
            </div>
            <div class="col-2">
                <input type="submit" class="btn btn-primary generateBtn">
            </div>
        </div>
     `;
    }
}

export default new ReportsView();
