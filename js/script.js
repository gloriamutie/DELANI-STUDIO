$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1500').hide('1000');
    $("#development").show('1500');
  });
  $("#development").click(function(){
    $("#development").slideUp('1500');
    $("#development-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown('1500').hide('1000');
    $("#design").show('1500');
  });
  $("#design").click(function(){
    $("#design").slideUp('1500');
    $("#design-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#work1").mouseenter(function(){
    $("#overlay1").show();
  }).mouseleave(function(){
    $("#overlay1").hide("slow");
  });
});

$(document).ready(function(){
  $("#work2").mouseenter(function(){
    $("#overlay2").show();
  }).mouseleave(function(){
    $("#overlay2").hide("slow");
  });
});

$(document).ready(function(){
  $("#work3").mouseenter(function(){
    $("#overlay3").show();
  }).mouseleave(function(){
    $("#overlay3").hide("slow");
  });
});

$(document).ready(function(){
  $("#work4").mouseenter(function(){
    $("#overlay4").show();
  }).mouseleave(function(){
    $("#overlay4").hide("slow");
  });
});

$(document).ready(function(){
  $("#work5").mouseenter(function(){
    $("#overlay5").show();
  }).mouseleave(function(){
    $("#overlay5").hide("slow");
  });

  $("#work6").mouseenter(function(){
    $("#overlay6").show();
  }).mouseleave(function(){
    $("#overlay6").hide("slow");
  });

  $("#work7").mouseenter(function(){
    $("#overlay7").show();
  }).mouseleave(function(){
    $("#overlay7").hide("slow");
  });

  $("#work8").mouseenter(function(){
    $("#overlay8").show();
  }).mouseleave(function(){
    $("#overlay8").hide("slow");
  });
});

$(document).ready(function(){
  $("form#feedback-form").submit(function(event){
   // event.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (name + ", we have received your message. Thank you for contacting us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});

   
