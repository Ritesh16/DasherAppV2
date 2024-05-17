export default class View {
  _data;

  render(data, render = true) {
    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner = function () {
    this._clear();
    const markup = `
    <img src="loading.418a60b0.gif" style="height: 50px;" />
    `;
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  };

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
