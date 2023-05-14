var firebaseConfig = {
    apiKey: "AIzaSyAcEpfZ3RVRefWBDhcw_jL309Maek-ALyo",
    authDomain: "kwitter-56405.firebaseapp.com",
    databaseURL: "https://kwitter-56405-default-rtdb.firebaseio.com",
    projectId: "kwitter-56405",
    storageBucket: "kwitter-56405.appspot.com",
    messagingSenderId: "354575097852",
    appId: "1:354575097852:web:74af662a4ac648b2479c79"
  };
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("userName");
document.getElementById("show_userName").innerHTML="Welcome "+username+" !";

function addRoom(){
  room_name=document.getElementById("roomName").value;
  localStorage.setItem("room_name",room_name);
  firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
  });
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name : "+Room_names);
 row = "<div class='roomname' id="+Room_names+" onclick='redirect_room_name(this.id)'>#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();
function redirect_room_name(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
}

