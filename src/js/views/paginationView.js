import View from "./view.js";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".page-link");
      if (!btn) return;

      if (btn.dataset.goto == ">>" || btn.dataset.goto == "<<") {
        handler(btn.dataset.goto);
        return;
      }

      const goto = +btn.dataset.goto;
      handler(goto);
    });
  }

  _generateMarkup() {
    const headers = this._data.state.headers;
    const currentPage = headers.currentPage;
    const lastPage = headers.totalPages;
    let firstPage = headers.firstPage;
    let pageNumber = firstPage;

    return `
    <div>
        <ul class="pagination">
          <li class="page-item">
            <a data-goto="<<" class="page-link" href="#">&laquo;</a>
          </li>
    ${Array(10)
      .fill(0)
      .map((_, i) => {
        i = pageNumber;
        pageNumber = pageNumber + 1;
        if (pageNumber <= lastPage) {
          if (currentPage == i) {
            return `    
            <li class="page-item active">
              <button data-goto=${i} class="page-link"> <span>${i}</span></button>
            </li>          
        `;
          } else {
            return `    
            <li class="page-item">
            <button data-goto=${i} class="page-link"> <span>${i}</span></button>
            </li>          
        `;
          }
        }
      })
      .join("")}

        <li class="page-item">
            <a data-goto=">>" class="page-link" href="#">&raquo;</a>
          </li>
        </ul>
      </div>
    `;
  }
}

export default new PaginationView();
