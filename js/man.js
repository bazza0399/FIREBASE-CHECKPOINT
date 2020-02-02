function MakeBold(){
    var text = document.getElementById("txt");
    text.style.fontWeight = "bold";
}
function MakeItalic(){
    var text = document.getElementById("txt");

    text.style.fontFamily="italic";
}
function MakeUnderline(){
    var text = document.getElementById("txt");

    text.style.textDecoration = "underline" ;
}
function sizeText(){
    var text = document.getElementById("txt");
    var option = document.getElementById("T").value;
    text.style.fontSize = option;
}
function StyleText(){
    var text = document.getElementById("txt");
    var option = document.getElementById("T2").value;

    text.style.fontFamily = option ;
}

$(document).ready(function(){
    $(".img").hover(function(){
        
        $(this).css('opacity','0.5');
        $(".view").toggle();
        //$(".view").css("transform","translate(-200px,50%)");
        
    
    },function(){
        
            $(this).css('opacity','1');
            $(".view").toggle();
            //$(".view").toggle();
           // $(".view").css("transform","translate(120px,50%)");
          });
          
    }); 

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFjtdZ-_anL-QiW9EliG9ZRoPB-096u3g",
    authDomain: "gmc102.firebaseapp.com",
    databaseURL: "https://gmc102.firebaseio.com",
    projectId: "gmc102",
    storageBucket: "gmc102.appspot.com",
    messagingSenderId: "786834733207",
    appId: "1:786834733207:web:f2d22757bf07313ef2d1d2",
    measurementId: "G-FTHNMNXVY2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  var messagesRef = firebase.database().ref('gmc102');
 
  function submitForm(e) {
      e.preventDefault();
      
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var phoneNumber = document.getElementById('phoneNumber').value;
      var track = document.getElementById('track').value;
      
      saveMessage(name, email,track, phoneNumber);
  
  
  }
  document.getElementById('form0').addEventListener('submit', submitForm);

function saveMessage(name, email, track, phoneNumber) {

    var newMessageRef = firebase.database().ref(name);
    newMessageRef.set({
        email: email,
        track: track,
        phoneNumber: phoneNumber
    });

}
    
