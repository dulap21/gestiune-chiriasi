
const adminPassword = "admin123";

function login() {
  const pwd = document.getElementById("password").value;
  if (pwd === adminPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";
  } else {
    alert("Parolă greșită!");
  }
}

document.getElementById('excelInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    renderTable(json);
  };

  reader.readAsArrayBuffer(file);
});

function renderTable(data) {
  const table = document.getElementById('rentTable');
  table.innerHTML = "";
  data.forEach((row, i) => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement(i === 0 ? 'th' : 'td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });
}

function exportToExcel() {
  const table = document.getElementById("rentTable");
  const wb = XLSX.utils.table_to_book(table, { sheet: "Chiriasi" });
  XLSX.writeFile(wb, "chiriasi_export.xlsx");
}
