$(document).ready(function() {
  $(document).ready(function() {
    // var yes = 0;
    // var no = 0;
    // var pumpkinSeeds = 0;
    // var sunflowerSeeds = 0;
    // var pepsi = 0;
    // var cocaCola = 0;
    // var apple = 0;
    // var android = 0;
    // var milkChocolate = 0;
    // var darkChocolate = 0;
    var happyCounter = 0;
    var notHappyCounter = 0;

    $("#yes").click(function() {
      happyCounter++;
    });
    $("#no").click(function() {
      notHappyCounter++;
    });
    $("#pumpkinSeeds").click(function() {
      notHappyCounter++;
    });
    $("#sunflowerSeeds").click(function() {
      happy++;
    });
    $("pepsi").click(function() {
      happy++;
    });
    $("#cocaCola").click(function() {
      notHappyCounter++;
    });
    $("#apple").click(function() {
      happy++;
    });
    $("#android").click(function() {
      notHappyCounter++;
    });
    $("#milkChocolate").click(function() {
      happy++;
    });
    $("#darkChocolate").click(function() {
      notHappyCounter++;
    });
    $("#submit").click(function() {
      if (happyCounter < notHappyCounter) {
        $("#result").text("you are happy with life");
      } else if (happyCounter > notHappyCounter) $("#result").text("you arent happy with life");
    });

    // $('button').click(function(){
    //   var Finish=$ ('Results').val();
    //
    //
    //         });
    //
    //         $('button').click(function(){
    //           if ("happy" < "not happy"){
    //             $('#preference').text('you are happy with life');
    //           } else if ("happy" > "not happy"){
    //             $('#preference').text('you arent happy with life');
    //
    //           }
    //         })
    //
    //
    //       });
    //
    //
    //     );
  });

  //write your code here!
});
