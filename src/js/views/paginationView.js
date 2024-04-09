import View from "./view.js";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".page-link");
      if (!btn) return;

      const goto = +btn.dataset.goto;
      console.log(goto);
      handler(goto);
    });
  }

  _generateMarkup() {
    const headers = JSON.parse(this._data.state.headers);
    const currentPage = headers.currentPage;
    const lastPage = headers.totalPages;
    return `
    <div>
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#">&laquo;</a>
          </li>
    ${Array(10)
      .fill(11)
      .map((_, i) => {
        if (currentPage == i + 1) {
          return `    
          <li class="page-item active">
            <button data-goto=${i + 1} class="page-link"> <span>${
            i + 1
          }</span></button>
          </li>          
      `;
        } else {
          return `    
          <li class="page-item">
          <button data-goto=${i + 1} class="page-link"> <span>${
            i + 1
          }</span></button>
          </li>          
      `;
        }
      })
      .join("")}

      <li class="page-item">
            <a class="page-link" href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    `;
  }
}

export default new PaginationView();
