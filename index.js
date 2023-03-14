// ################################
// # First container - Data table #
// ################################

// Get all COVID-19 data from API

//config.json contains the API keys and it is not in github, it need to be added to the data folder
// import config from "./data/config.json" assert { type: "json" };
// const data = config[0]["end-point"];

// const options = {
//     method: 'GET',
//     headers: {
//     'X-RapidAPI-Key': config[0]["key"],
//     'X-RapidAPI-Host': config[0]["host"]
//     }
// };

// fetch(data, options)
//     .then(res => res.json())
//     .then(json => {
//         generateTableGlobal(json);
//         generateTableAsia(json);
//         generateTableAfrica(json);
//         generateTableEurope(json);
//         generateTableNorthAmerica(json);
//         generateTableOceania(json);
//         generateTableSouthAmerica(json);
        
//     })
//     .catch(err => console.error('error:' + err));



// Get Covid data from json
import json from "./data/covid.json" assert { type: "json" };


// Check the name of the columns that we want to include in the table

function isKeyAllowed(key) {
    return ["Country","TotalCases", "TotalDeaths", "TotalRecovered", "ActiveCases", "Infection_Risk"].includes(key);

}

function generateTableGlobal(data){
    generateTable(data, "All", "covidDataTable");
}

function generateTableAsia(data){
    generateTable(data, "Asia", "covidDataAsia");
}

function generateTableAfrica(data){
    generateTable(data, "Africa", "covidDataAfrica");
}

function generateTableEurope(data){
    generateTable(data, "Europe", "covidDataEurope");
}

function generateTableNorthAmerica(data){
    generateTable(data, "North America", "covidDataNorthAmerica");
}

function generateTableOceania(data){
    generateTable(data, "Australia/Oceania", "covidDataOceania");
}

function generateTableSouthAmerica(data){
    generateTable(data, "South America", "covidDataSouthAmerica");
}

function generateTable(data, continent, id){
    // Create the element table 
    var table = document.createElement("table");
    // Create the header of the table
    var header = table.createTHead();
    // Create a row for the header
    var headerRow = header.insertRow();
    // Append the name of the column to the header
    for (var key in data[0]) {
        if (isKeyAllowed(key)) {
            // Create th tag to row of header
            var headerCell = document.createElement("th");
            // Include the name of column to the cell
            // Here we can change the name of the column if we need to by replacing "key" variable
            var nameColumn = key;
            if (continent == 'All') {
                if (nameColumn === "Country"){
                    nameColumn = "";
                }
            }
            if (nameColumn === "TotalCases"){
                nameColumn = "Total Cases";
            }
            else if (nameColumn === "TotalDeaths") {
                nameColumn = "Total Deaths";
            }
            else if (nameColumn === "TotalRecovered") {
                nameColumn = "Total Recovered";
            }
            else if (nameColumn === "ActiveCases") {
                nameColumn = "Active Cases";
            }
            else if (nameColumn === "Infection_Risk") {
                nameColumn = "Infection Risk";
            }
            headerCell.innerHTML = nameColumn;
            headerRow.appendChild(headerCell);
        }

    }

    // Filter data
    if (continent == 'All') var list = data.filter(country => country.Country === "World");
    else if (continent == 'Asia') var list = data.filter(continent => continent.Continent === "Asia").slice(0,5);
    else if (continent == 'Africa') var list = data.filter(continent => continent.Continent === "Africa").slice(0,5);
    else if (continent == 'Europe') var list = data.filter(continent => continent.Continent === "Europe").slice(0,5);
    else if (continent == 'North America') var list = data.filter(continent => continent.Continent === "North America").slice(0,5);
    else if (continent == 'Australia/Oceania') var list = data.filter(continent => continent.Continent === "Australia/Oceania").slice(0,5);
    else if (continent == 'South America') var list = data.filter(continent => continent.Continent === "South America").slice(0,5);

    for (var indexRow = 0; indexRow < list.length; indexRow++) {
        // Create each row
        var row = table.insertRow();
        for (var key in list[indexRow]) {
            if (isKeyAllowed(key)) {
                var valueCell = list[indexRow][key];
                if (key != "Country") valueCell = parseInt(valueCell).toLocaleString("en-US");
                // Create a cell
                var cell = row.insertCell();
                // Include the value in the cell for a column
                cell.innerHTML = valueCell;
            }
        }
    }
    document.getElementById(id).appendChild(table);
}


// Call functions ( this part works if we get data from json)
// If we get data from API these calls need to be commented
generateTableGlobal(json);
generateTableAsia(json);
generateTableAfrica(json);
generateTableEurope(json);
generateTableNorthAmerica(json);
generateTableOceania(json);
generateTableSouthAmerica(json);




// ###########################
// # Second container - News #
// ###########################

// Get NEWS data from JSON
import news from "./data/news.json" assert { type: "json" };

var newsArr = news["news"];
var newsBlocks = document.querySelectorAll(".news-blocks");

const MONTHS = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
for (var i=0; i<newsBlocks.length; i++){
    newsBlocks[i].querySelector('a').setAttribute("href", newsArr[i]["link"]);
    newsBlocks[i].querySelector('a h3').textContent = newsArr[i]["title"];
    newsBlocks[i].querySelector('a img').setAttribute("src", newsArr[i]["urlToImage"]);
    var newsDate = new Date(newsArr[i]["pubDate"]);
    var newsDateFormatted = newsDate.getDate() + " " + MONTHS[newsDate.getMonth()] + " " + newsDate.getFullYear();
    newsBlocks[i].querySelector('a p').textContent = newsDateFormatted;
}