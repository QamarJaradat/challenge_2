$('#selectedfile').on('change', (e) => {

    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        // console.log(e.target.result)
        $('#filetext').val(e.target.result)
    };
    reader.readAsText(file);
})

$('form').on('submit', (e) => {
    e.preventDefault();
    var value = $('#filetext').val()
    console.log("i'm here")

    $.ajax({
        method: "POST",
        url: "/",
        data: { data: value },
        success: function (res) {
            console.log("its work")
            $('.csvReport').text(res)
        },
        error: function (error) {
            console.error('Failed to fetch files', error);
        }
    })
    //reset the choosen file and the textarea
    $('#filetext').val("")
    $('#selectedfile').val('')

})