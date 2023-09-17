$("#enter").on("input", function() {
  if ($(this).val() === "WHAT") {
    $(this).hide()
    $("#newPass").show()
    $("#website").show()
    $("#confirm").show()
  }
});

var password
var click = true

$("#confirm").click(function() {
  $("#newPass").hide()
  $("#website").hide()
  $("#confirm").hide()
  $("#text").hide()
  password = $("#newPass").val()
  var url = $("#website").val()
  if (!url.startsWith("https://") || !url.startsWith("http://")) {
    url = "https://" + url
  }

  $("#iframe").attr("src", url)
  $("#iframe").show()
  $("#button").show()
})

$("#button").click(function() {
  if (click) {
    $("#iframe").hide()
    $("#text").show()
    $("#thingy").show()
    click = false;
  } else {
    if ($("#thingy").val() === password) {
      click = true;
      $("#iframe").show()
      $("#text").hide()
      $("#thingy").hide()
      $("#thingy").val("")
    }
  }
})
