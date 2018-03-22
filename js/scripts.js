var weightedScore = function(phrase, pastime, iq) {
  return (phrase * 2) + (pastime) + (iq * 4)
}

$(document).ready(function(){
  $("#survey").submit(function (event) {
    var userPhrase = parseInt($("#phrase").val());
    var userGender = parseInt($("#gender").val());
    var userPastime = parseInt($("#pastime").val());
    var userIq = parseInt($("#iq").val());
    var userScore = weightedScore(userPhrase, userPastime, userIq);

    if (userGender !== 20) {
      if (userScore <= 160) {
        $("#outputName").text("Brian");
        $("#outputImg").attr("src","img/brian.jpg");
      } else {
        $("#outputName").text("Peter");
        $("#outputImg").attr("src","img/peter.png");
      }
    } else {
      if (userScore <= 100) {
        $("#outputName").text("Stewie");
        $("#outputImg").attr("src","img/stewie.png");
      } else if (userScore >= 160){
        $("#outputName").text("Lois");
        $("#outputImg").attr("src","img/lois.png");
      } else {
        $("#outputName").text("Quagmire");
        $("#outputImg").attr("src","img/quagmire.png");
      }
    }

    event.preventDefault();
  });

  $("#submit").click(function(){
    $("#myModal").css("display", "block");
  });

  $(".close").click(function(){
    $("#myModal").css("display", "none");
    location.reload();
  });
});
