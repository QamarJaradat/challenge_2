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
    console.log("i'm here")

    $.ajax({
        type: "POST",
        url: "/",
        datatype: 'json',
        data: { data: value },
        success: function (res) {
            console.log("its woek", res)

            $('.csvReport').val(res)
        },
        error: function (error) {
            console.error('Failed to fetch files', error);
        }
    })
    $('#filetext').val("")

})