console.log(Mustache);


$.getJSON(
  "https://graph.facebook.com/btaylor?callback=?", 
  function(data) { 
    console.log(data); 
    var view = data; 
    var template = "<b>{{first_name}} {{last_name}} has a page at {{link}} </b>";
    var html = Mustache.to_html(template, view);

    //    var html = "<b>" + data.first_name + " " + data.last_name+   "</b>";
    $("#person").append(html);
  } 
);

