class Table {
  constructor(init) {
    this.init = init;
  }

  buatHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.map((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  isi(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.map((d) => {
      open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.buatHeader(this.init.columns) +
      this.isi(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Name", "Email"],
  data: [
    ['Khoerul Fajri', 'khoerulfajri1999@gmail.com'],
    ['Neni Maryamah', 'nenimaryamah123@gmail.com'],
    ['Putri Auliya', 'auliyaputri11@gmail.com']
  ]
});
export {table};
