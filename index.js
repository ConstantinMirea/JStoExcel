
var req = new XMLHttpRequest();
req.open("GET", "test2.xlsx", true);
req.responseType = "arraybuffer";

req.onload = function () {
    var data = new Uint8Array(req.response);
    var workbook = XLSX.read(data, { type: "array" });
    var first_sheet_name = workbook.Sheets[workbook.SheetNames[0]];
    const output = document.getElementById('result');
    output.innerHTML = XLSX.utils.sheet_to_html(first_sheet_name);
    
    let allText =  XLSX.utils.sheet_to_html(first_sheet_name)
     console.log (allText  ) 
}

req.send();




       //  let allText = "";
    //  for (let string of workbook.Strings){
    //           allText += string.t;
    //  }
    //  console.log(allText)





// if(typeof require !== 'undefined') XLSX = require('xlsx');



// var workbook = XLSX.readFile("test.xlsx");

// var first_sheet_name = workbook.SheetNames[0];

// var worksheet = workbook.Sheets[first_sheet_name];

// var cell = worksheet['A1'];

// var value = cell.v

// console.log(value)


// var data = XLSX.utils.sheet_to_json(first_sheet_name, {header:1});


// console.log(JSON.stringify(data));



// const output = document.getElementById('result')
// output.textContent = JSON.stringify(data);
/* DO SOMETHING WITH workbook HERE */
/* set up async GET request */



