var array = []
$('#selectedfile').on('change', (e) => {

    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        $('#filetext').val(e.target.result)
    };
    reader.readAsText(file);
})

$('form').on('submit', (e) => {
    e.preventDefault();
    var value = $('#filetext').val()
    if (value === '') {
        alert('choose a file or enter text in the text area!!')
    }
    else {
        $.ajax({
            method: "POST",
            url: "/",
            data: { data: value },
            success: function (res) {
                console.log("its work")
                $('.csvReport').text(res)
                array = $('.csvReport').text().split('\n')
            },
            error: function (error) {
                console.error('Failed to fetch files', error);
            }
        })
        //reset the choosen file and the textarea
        $('#filetext').val("")
        $('#selectedfile').val('')
        $('#buttonfilter').show()
        $('#testfilter').show()
    }

})

$('#buttonfilter').on('click', () => {
    var filtervalue = $('#testfilter').val()
    var temparray = array.slice()
    var count = 1
    for (var i = 1; i < temparray.length; i++) {
        if (temparray[i].includes(filtervalue)) {
            temparray.splice(i, 1)
            i--
        }
        else {
            temparray[i] = replaceAt(temparray[i], 0, count)
            count++
        }
    }
    $('.csvReport').text(temparray.join('\n'))
})


function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}