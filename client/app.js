// var $ = require("jquery");
// var reader = new FileReader();
// reader.addEventListener("loadend", function () {
//     console.log(reader.result)
//     // document.getElementById('filetext').innerText = reader.result;
// });

// console.log(file)
// reader.readAsText(file);

// const reader = new FileReader();
// reader.addEventListener('load', (event) => {
//     console.log(event.target.result)
// });

// reader.readAsText(file);

var selectedFile = document.getElementById("selectedfile")
$('#selectedfile').on('change', (e) => {

    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        // console.log(e.target.result)
        $('#filetext').val(e.target.result)
    };

    reader.readAsText(file);
})
