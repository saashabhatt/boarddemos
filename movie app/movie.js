$(document).ready(function() {
    $("#btn").on("submit", function() {
        let titl = '<td>' + $('#title').val() + '</td';
        let rat = '<td>' + $('#rating').val() + '</td';
        let btndel = '<td><button class = "DelBtn">Delete</button></td>';
        let tabbody = $("tablebody");
        tabbody.append('<tr>' + titl + rat + btndel + '</tr>')
    })
});

$("DelBtn").on("click", function() {
    $(this).parent().parent().empty();
});


