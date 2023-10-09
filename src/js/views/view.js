export default class View {
  _data;

  render(data, render = true) {
    console.log("view", data);
    this._data = data;

    const markup = this._generateMarkup();
    if (!render) return markup;

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
