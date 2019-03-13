var TrainName
var Destination
var Frequency
var NextArrival
var MinutesAway


$("#add-employee-btn").on("click", function(event){
   event.preventDefault();
        
TrainName = $("#train-name-input").val();
Destination= $("#destination-input").val();
 Frequency= $("#frequency-input").val();
  
 

 console.log(name);
 console.log(role);
 console.log(rate);
 console.log(date);


 database.ref().push({
        Name: name,
        Monthly: rate,
        Role: role,
        StartDay: date

      });
})


database.ref().on("child_added", function(){

   var newRow = $("<tr>").append(

       $("<td>").text(name),
       $("<td>").text(role),
       $("<td>").text(rate),
       $("<td>").text(date)
   
       );

       $("#employee-table > tbody").append(newRow);
})

