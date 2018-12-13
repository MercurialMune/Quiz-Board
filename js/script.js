$(document).ready(function() {
  $(".showResults").hide();

  $("#finsendit").click(function() {
    $("#quizform").hide();
    $(".showResults").toggle();

    var options = [];
    var right = 0;

    options.push(parseInt($("input[name=1]:checked").val()));
    options.push(parseInt($("input[name=2]:checked").val()));
    options.push(parseInt($("input[name=3]:checked").val()));
    options.push(parseInt($("input[name=4]:checked").val()));
    options.push(parseInt($("input[name=5]:checked").val()));
    options.push(parseInt($("input[name=6]:checked").val()));
    options.push(parseInt($("input[name=7]:checked").val()));
    options.push(parseInt($("input[name=8]:checked").val()));
    options.push(parseInt($("input[name=9]:checked").val()));
    options.push(parseInt($("input[name=10]:checked").val()));

    for (var option in options) {
      right += options[option];
    }

    $(".showResults").show();

    $(".showResults").html("Ssup! Out of a possible 100 , your score was" + " " + right);

  });
});
