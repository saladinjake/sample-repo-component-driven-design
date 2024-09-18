import * as XLSX from "xlsx";

export function parseExcel(file: File, callback: Function) {
  var reader = new FileReader();

  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {
      type: "binary",
      raw: true,
    });
    workbook.SheetNames.forEach(function (sheetName, index) {
      var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        raw: false,
      });
      var json_object = JSON.stringify(XL_row_object);

      if (index === 0) {
        callback(JSON.parse(json_object));
      }
    });
  };

  reader.onerror = function (ex) {
    console.log(ex);
  };

  reader.readAsBinaryString(file);
}
