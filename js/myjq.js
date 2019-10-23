$(document).ready(
function(){
  
   $("header").hide().delay(1000).slideDown(2000);
      $("aside").hide().delay(1500).show(2000);
    $(".secvideos").hide().delay(1000).fadeIn(3200);
   $("#menubutt").click(
   function(){
       $("aside").fadeToggle(800);
   }
   );
}
);