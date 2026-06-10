const statusFlight = [
  { name: "Отмена", color: "rgba(219, 37, 37, 1)" },
  { name: "Регистрация", color: "rgba(0, 0, 0, 1)" },
  { name: "В полете", color: "rgba(0, 95, 203, 1)" },
  { name: "Посадка", color: "rgba(0, 95, 203, 1)" },
  { name: "Задерживается", color: "rgba(219, 37, 37, 1)" },
  { name: "Прибыл", color: "rgba(11, 140, 0, 1)" },
];

const airlineFlight = [
  { name: "Аэрофлот", img: "../img/Аэрофлот.jpg" },
  { name: "Россия", img: "../img/Россия.jpg" },
  { name: "Азимут", img: "../img/Азимут.jpg" },
  { name: "S7 Airlines", img: "../img/S7 Airlines.png" },
  { name: "Ural Airlines", img: "../img/Ural Airlines.jpg" },
  { name: "Nordwind Airlines", img: "../img/Nordwind Airlines.png" },
];

const namesTableFilds = [
  "Дата",
  "Время",
  "Направление",
  "Рейс",
  "Авиакомпания",
  "Статус",
];

class Flight {
  constructor(
    date = new Date(),
    time = "",
    direction = "",
    flight = "",
    airline = "",
    status = statusFlight[0].name,
  ) {
    this._date = date;
    this._time = time;
    this._direction = direction;
    this._flight = flight;
    this._airline = airline;
    this._status = status;
  }

  get date() {
    return this._date.toLocaleString("ru-RU", {
      day: "numeric",
      month: "short",
    });
  }

  set date(value) {
    this._date = value;
  }

  get time() {
    const [hours, minutes] = this._time.split(":");
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  }

  set time(value) {
    this._time = value;
  }

  get direction() {
    return this._direction;
  }

  set direction(value) {
    this._direction = value;
  }

  get flight() {
    return this._flight;
  }

  set flight(value) {
    this._flight = value;
  }

  get airline() {
    return this._airline;
  }

  set airline(value) {
    this._airline = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  getTabelFlight() {
    const appEl = document.querySelector("#app");

    if (!appEl) {
      console.error("Элемент #app не найден на странице!");
      return;
    }

    const fields = Object.keys(this);

    this.tabelEl = document.createElement("table");
    this.tabelEl.classList.add("tabel-flight");

    this.theadEl = document.createElement("thead");
    this.theadEl.classList.add("tabel-flight__thead");

    this.trEl = document.createElement("tr");
    this.trEl.classList.add("thead-flight__tr");

    namesTableFilds.forEach((thText, index) => {
      const thEl = document.createElement("th");
      const className = fields[index].replace("_", "");
      thEl.classList.add(`tr-flight__th-${className}`);
      thEl.textContent = thText;
      this.trEl.append(thEl);
    });

    this.tbodyEl = document.createElement("tbody");
    this.tbodyEl.classList.add("tabel-flight__tbody");

    this.trTbodyEl = document.createElement("tr");
    this.trTbodyEl.classList.add("trTbody-flight");

    namesTableFilds.forEach((thText, index) => {
      const tdEl = document.createElement("td");
      const className = fields[index].replace("_", "");
      tdEl.classList.add(`tr-flight__td-${className}`);

      const getterName = fields[index].replace("_", "");
      tdEl.textContent = this[getterName];

      this.trTbodyEl.append(tdEl);
    });

    this.theadEl.append(this.trEl);
    this.tbodyEl.append(this.trTbodyEl);
    this.tabelEl.append(this.theadEl, this.tbodyEl);
    appEl.append(this.tabelEl);
  }
}

export default Flight;
