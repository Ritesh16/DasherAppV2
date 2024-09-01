import View from "./view";

class PaginationView2 extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    if (this.clickHandler) {
      this._parentElement.removeEventListener("click", this.clickHandler);
    }

    this.clickHandler = function (e) {
      e.preventDefault();
      const btn = e.target.closest(".btn--inline");
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    };

    this._parentElement.addEventListener("click", this.clickHandler);
  }

  _generateMarkup() {
    const headers = this._data.state.headers;
    const currentPage = headers.currentPage;
    const numPages = headers.totalPages;

    // Page 1 and there are other pages
    if (currentPage == 1 && currentPage < numPages) {
      return `
        <button data-goto=${
          currentPage + 1
        } type="button" class="btn btn-link btn--inline" fdprocessedid="fni8k4">Next</button>
      `;
    }

    //Last Pgae
    if (currentPage == numPages && numPages > 1) {
      return `
              <button data-goto=${
                currentPage - 1
              } type="button" class="btn btn-link btn--inline" fdprocessedid="fni8k4">Previous</button>
      `;
    }

    // Other Page
    if (currentPage > 1 && currentPage < numPages) {
      return `
            <div style="align:left">
                          <button data-goto=${
                            currentPage - 1
                          } type="button" class="btn btn-link btn--inline" fdprocessedid="fni8k4">Previous</button>
           </div>
           <div style="align:right">
              <button data-goto=${
                currentPage + 1
              } type="button" class="btn btn-link btn--inline">Next</button>
           </div>

      `;
    }

    // Page 1 and there are no more pages
    return "";
  }
}

export default new PaginationView2();
