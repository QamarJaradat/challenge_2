$('#selectedfile').on('change', (e) => {

    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        // console.log(e.target.result)
        $('#filetext').val(e.target.result)
    };
    reader.readAsText(file);
})

$('.submitInput').on('click', (e) => {
    var value = $('#filetext').val()

    $.ajax({
        type: "POST",
        url: "/",
        datatype: 'json',
        body: JSON.stringify({ data: value }),
        success: function (res) {
            console.log(res)
        },
        error: function (error) {
            console.error('Failed to fetch files', error);
        }
    })
    $('#filetext').val("")

})