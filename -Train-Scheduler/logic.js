var config = {
   apiKey: "AIzaSyAzjLGOpdAe0zGS5WacZKvXfLHGhfaZ_Hg",
   authDomain: "train-scheduler-ee8b3.firebaseapp.com",
   databaseURL: "https://train-scheduler-ee8b3.firebaseio.com",
   projectId: "train-scheduler-ee8b3",
   storageBucket: "train-scheduler-ee8b3.appspot.com",
   messagingSenderId: "585548513671"
 };

 firebase.initializeApp(config);



var trainName
var destination
var frequency
var time


$("#add-employee-btn").on("click", function(event){
   event.preventDefault();
        
trainName = $("#train-name-input").val().trim();
destination = $("#destination-input").val().trim();
frequency = $("#frequency-input").val().trim();
time = $("#time-input").val().trim();
 

 console.log(trainName);
 console.log(destination);
 console.log(frequency);
console.log(time);


 database.ref().push({
        Name: trainName,
        destination: destination,
        Frequency: frequency,
        time: time,

      });
})


database.ref().on("child_added", function(snapshot){
   var sv = snapshot.val();

console.log(sv.name);
console.log(sv.destination);
console.log(sv.time);
console.log(sv.frequency);

      var freq = parseInt(sv.frequency)

var dConverted = moment(sv.time, 'HH:mm').subtract(1,'years'); 

   var newRow = $("<tr>").append(

       $("<td>").text(sv.trainName),
       $("<td>").text(sv.destination),
       $("<td>").text(sv.frequency),
       $("<td>").text(sv.time),
   
       );

       $("#employee-table > tbody").append(newRow);
})




