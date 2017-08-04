
const $nickNames = $('#nickNames');
const $aka = $('#aka');


let nickN = new NickNames();
var $overlay = $('<div id="overlay" class ="row"></div>');
var $exit = $('<buttton class="btn btn-default glyphicon glyphicon-remove"></buttton>')
var $image = $('<img class= "col-xs-12">');


$overlay.append($image);
$overlay.append($exit);

$("body").append($overlay);


//event listeners
$(".imageGallery").click(function(e){
  let url;  

  if($(this).attr('src') == null){
    url = $(this).css('background-image').match(/url\(["|']?([^"']*)["|']?\)/)[1];
  } else{
    url = $(this).attr('src');
  }

  $image.attr("src", url); 
  $overlay.fadeIn('fast');
    
});


$exit.click(e => {

  $overlay.fadeOut('fast');
});

//when the site loads the nick names can start.
$(document).ready(e =>{

  setTimeout(e =>{
    $aka.fadeIn(2000);
    $nickNames.fadeIn(3000).fadeOut(3000);
  },1000);

  setTimeout(e =>{
    
    let shutDown = setInterval(e =>{
       $nickNames.html(nickN.nickName()).fadeIn(3000).fadeOut(3000);
    },7000);

  },2000);
  
});




//object
function NickNames(){
   
   const album = [
    "Jer Bear",
    "Goofy Bear",
    "J-Bizz",
    "Storm Trooper",
    "Yak",
    "Fish boy",
    "The man, the myth, the legend",
    "Rider's on the Storm",
    "The man",
    "like a tiger",
    "Kendel",
    "Heartbreaker",
    "Lover Boy",
    "Ladies Man",
    "Amazing",
    "Playboy",
    "Stud",
    "Mi amigo",
    "El jefe",
    "Como un tigre",
    "Best Friend",
    "Big brother",
    "Unstoppable",
    "Daring",
    "Deep Water",
    "Bear",
    "Big Guy",
    "Captain",
    "Charming",
    "Chief",
    "Ladies Man",
    "Papa Bear",
    "Iron man",
    "J-roller",
    "Cat dog",
    "Oso",
    "Hermano mayor"

   ];

   function randomNic(){
      let number = Math.floor(Math.random() * album.length);
      return number;
   };

   this.nickName = function(){
      return album[randomNic()];
   }

}