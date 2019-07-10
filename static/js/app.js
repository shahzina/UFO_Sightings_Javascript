// from data.js
//get table from data.js and append to your webpage
var tableData = data;
//console.log(tableData);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(UFOsighting) {
  console.log(UFOsighting);

  var row = tbody.append("tr");
  Object.entries(UFOsighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

//Use a date form in your HTML document and 
//write JavaScript code that will listen
// for events and search through the date/time
// column to find rows that match user input.

var filter_button = d3.select("#filter-btn");

filter_button.on("click", function(){
	d3.event.preventDefault(); //prevents refreshing

	var input = d3.select("#datetime") //selects the input cell
	var inputValue = input.property("value"); //get text entered

	console.log(tableData);
	console.log(inputValue);

	var date_data_filtered = tableData.filter(i => i.datetime === inputValue);

	console.log(date_data_filtered);

	var display = d3.select("#table-area");

	display.html("")

	//DISPLAY FILTERED DATA ON THE SCREEN

	date_data_filtered.forEach(function(output) {
  	//console.log(output);

  	var row_disp = display.append("tr");
  	Object.entries(output).forEach(function([key, value]) {
    	console.log(key, value);
	    // Append a cell to the row for each value
	    // in the weather report object
	    var cell_disp = row_disp.append("td");
	    cell_disp.text(value);
	  });
	});
	
});







