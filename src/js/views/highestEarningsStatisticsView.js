import View from "./view.js";

class HighestEarningsStatisticsView extends View {
  _generateMarkup() {
    return `
    <table class="table table-hover">
                        <thead>
                            <tr>
                             <th scope="col">Date</th>
                             <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr class="table-active">
                            <th scope="row">3/10/2024</th>
                            <td>$179</td>
                        </tr>
                        <tr class="table-active">
                            <th scope="row">3/10/2024</th>
                            <td>$179</td>
                        </tr>
                         <tr class="table-active">
                            <th scope="row">3/10/2024</th>
                            <td>$179</td>
                        </tr> <tr class="table-active">
                            <th scope="row">3/10/2024</th>
                            <td>$179</td>
                        </tr>
                        </tbody>
                     </table> 
                     <div class="row" stlye="text-align:right">
                        <a class="card-link" style="text-align:right">Load More</a>
                     </div>
        `;
  }
}

export default new HighestEarningsStatisticsView();
