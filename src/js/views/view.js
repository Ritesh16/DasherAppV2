export default class View {
  _data;

  render(data, render = true) {
    this._data = data;
    console.log(data);
    const markup = this._generateMarkup();

    console.log(markup);
    if (!render) return markup;

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
