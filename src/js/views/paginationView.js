import View from "./view.js";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    const currentPage = this._data.state.headers.currentPage;
    const lastPage = this._data.state.headers.totalPages;

    return `
    <div>
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link" href="#">&laquo;</a>
          </li>
    ${Array(lastPage)
      .fill(1)
      .map((_, i) => {
        return `    
          <li class="page-item active">
            <a class="page-link" href="#">${i}</a>
          </li>          
      `;
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
