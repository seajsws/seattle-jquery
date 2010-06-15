// Examples provided associated with jQuery Meetup 

$("#button1")
  .bind("click", 
        function() {
          alert("button1 clicked");
          $("#button2")
            .bind("click", 
                  function() {
                    alert("button2 clicked / ");
                    $("#button1").unbind("click");       
                  });
        });

$("#help-cont")
  .delegate(
    "li",
    "click",
    function() {
      alert($(this).attr("title"));
    });


