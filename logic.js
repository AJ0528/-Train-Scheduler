var config = {
    apiKey: "AIzaSyAzjLGOpdAe0zGS5WacZKvXfLHGhfaZ_Hg",
    authDomain: "train-scheduler-ee8b3.firebaseapp.com",
    databaseURL: "https://train-scheduler-ee8b3.firebaseio.com",
    projectId: "train-scheduler-ee8b3",
    storageBucket: "train-scheduler-ee8b3.appspot.com",
    messagingSenderId: "585548513671",
 };
  firebase.initializeApp(config);




var TrainName
var Destination
var Frequency
var FirstTrain
var MinutesAway

firebase.initialize(config);
var trainData = firebase.database();

$("#add-train-btn").on("click", function(event){
   event.preventDefault();
        
TrainName = $("#train-name-input").val().trim();
Destination= $("#destination-input").val().trim();
Frequency= $("#frequency-input").val().trim();
FirstTrain = moment($("#FirstTrain-input").val().trim(), "HH:mm").subtract(10,"years").format("x");

  
 

 console.log(name);
 console.log(role);
 console.log(rate);
 console.log(date);
 console.log(FirstTrain);
 

trainData.ref().push(newTrain);
alert("Train Added!");

$("trainName-input").val("");
$("destination-input").val("");
$("frequency-input").val("");
$("FirstTrain-input").val("");
return false;
})


trainData.ref().on("child_added", function(snapshot){
   var name = snapshot.val().name;
   var frequency = snapshot.val().frequency;
   var destination = snapshot.val().destination;
   var FirstTrain = snapshot.val().FirstTrain;

   var minutes = frequency - remainder;
   var arrival = moment().add(minutes, "m").format("hh:mm A");
   console.log(arrival);
   console.log(frequency);
})


