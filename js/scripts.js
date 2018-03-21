$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var recipientInput = $("input#recipient").val();

    $(".recipient").text(recipientInput);

    $("#letter").show();

    event.preventDefault();
  });
});
