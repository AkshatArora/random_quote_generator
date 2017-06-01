function onready(){
  $.ajax({
   url:"https://api.forismatic.com/api/1.0/",
    data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
    type:"GET",
    dataType:"json",
 headers:{
   "auth-key":"OGwCiu6bFAmsht98UMQhROczphNOp1yGsPkjsn1WgHQPXc29EP",
      "Content-type":"application/json"
 }
  })
  .done(function(json){
$("#random_quote").html(json.quoteText).appendTo("body")
  $("#author_name").html(json.quoteAuthor).appendTo("body")
  $("#tweet").attr("href","https://twitter.com/home/?status="+json.quoteText+"-"+json.quoteAuthor)})
  
  .fail(function(xhr, status,errorthrown){
    alert("sorry!");
    console.log("the status is:"+status);
    console.log("error:"+errorthrown);
  })
  .always(function(xhr,status){
   
  })}
$("button").click(function(){
  onready();
})