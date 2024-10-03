import View from "./view.js";

class StatisticsView extends View {
  _parentElement = document.querySelector(".dashList");

  _generateMarkup() {
    return `
    <h2>Statistics</h2>
    <div class="row">
        <div class="col-4" id="topEarningDays">
            <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Top Earning Days</div>
                <div class="card-body">
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
                </div>
                
            </div>
        </div>
        <div class="col-4" id="topHighestDashes">
            <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Top Highest Dashes</div>
                <div class="card-body">
                    <div class="card-body">
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
                </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Top Hourly Rate</div>
                <div class="card-body">
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
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-4">
            <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Top Busy Restaurants</div>
                <div class="card-body">
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
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Highest Mileage</div>
                <div class="card-body">
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
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card border-primary mb-3" style="max-width: 20rem;">
                <div class="card-header">Highest Hourly Rate</div>
                <div class="card-body">
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
                </div>
            </div>
        </div>
    </div>
    
    `;
  }
}

export default new StatisticsView();
