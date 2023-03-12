// Get all data from API
const data = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/';

const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '1f7896f7e8msh9824baff5cae594p168600jsnfa31657bb517',
    'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};

fetch(data, options)
    .then(res => res.json())
    .then(json => {
        generateTable(json);
        generateTableAsia(json);
        generateTableAfrica(json);
        generateTableEurope(json);
        generateTableNorthAmerica(json);
        generateTableOceania(json);
        generateTableSouthAmerica(json);
        
    })
    .catch(err => console.error('error:' + err));

// Check the name of the columns that we want to include in the table

function isKeyAllowed(key) {
    return ["Country","TotalCases", "TotalDeaths", "TotalRecovered", "ActiveCases", "Infection_Risk"].includes(key);

}

function generateTable(data) {
    // Create the element table 
    var table = document.createElement("table");
    // Create the header of the table
    var header = table.createTHead();
    // Create a row for the header
    var headerRow = header.insertRow();
    // Append the name of the column to the header
    for (var key in data[0]) {
        // console.log(key);
        if (isKeyAllowed(key)) {
            // Create th tag to row of header
            var headerCell = document.createElement("th");
            // Include the name of column to the cell
            // Here we can change the name of the column if we need to by replacing "key" variable
            var nameColumn = key;
            if (nameColumn === "Country"){
                nameColumn = "";
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
    // Append the rows data into the table
    console.log("All data", data);

    // Filter World data
    var world = data.filter(country => country.Country === "World");
    console.log("World", world);

    var list = world;

    for (var indexRow = 0; indexRow < list.length; indexRow++) {
        // Create each row
        var row = table.insertRow();
        for (var key in list[indexRow]) {
            if (isKeyAllowed(key)) {
                var valueCell = list[indexRow][key];
                // Create a cell
                var cell = row.insertCell();
                // Include the value in the cell for a column
                cell.innerHTML = valueCell;
                // console.log(key);
            }
        }
    }
    document.getElementById("covidDataTable").appendChild(table);

}


// Get ASIA data from API

function generateTableAsia(data) {
    // Create the element table 
    var table = document.createElement("table");
    // Create the header of the table
    var header = table.createTHead();
    // Create a row for the header
    var headerRow = header.insertRow();
    // Append the name of the column to the header
    for (var key in data[0]) {
        // console.log(key);
        if (isKeyAllowed(key)) {
            // Create th tag to row of header
            var headerCell = document.createElement("th");
            // Include the name of column to the cell
            // Here we can change the name of the column if we need to by replacing "key" variable
            var nameColumn = key;
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
    // Append the rows data into the table
    console.log("All data", data);

    // Filter Asia data
    var asia = data
        .filter(continent => continent.Continent === "Asia")
        .slice(0,5);
    console.log("Asia", asia );

    var list = asia;

    for (var indexRow = 0; indexRow < list.length; indexRow++) {
        // Create each row
        var row = table.insertRow();
        for (var key in list[indexRow]) {
            if (isKeyAllowed(key)) {
                var valueCell = list[indexRow][key];
                // Create a cell
                var cell = row.insertCell();
                // Include the value in the cell for a column
                cell.innerHTML = valueCell;
                // console.log(key);
            }
        }
    }
    document.getElementById("covidDataAsia").appendChild(table);

}


// Get AFRICA data from API

function generateTableAfrica(data) {
    // Create the element table 
    var table = document.createElement("table");
    // Create the header of the table
    var header = table.createTHead();
    // Create a row for the header
    var headerRow = header.insertRow();
    // Append the name of the column to the header
    for (var key in data[0]) {
        // console.log(key);
        if (isKeyAllowed(key)) {
            // Create th tag to row of header
            var headerCell = document.createElement("th");
            // Include the name of column to the cell
            // Here we can change the name of the column if we need to by replacing "key" variable
            var nameColumn = key;
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
    // Append the rows data into the table
    console.log("All data", data);

    // Filter Africa data
    var africa = data
        .filter(continent => continent.Continent === "Africa")
        .slice(0,5);
    console.log("Africa", africa);

    var list = africa;

    for (var indexRow = 0; indexRow < list.length; indexRow++) {
        // Create each row
        var row = table.insertRow();
        for (var key in list[indexRow]) {
            if (isKeyAllowed(key)) {
                var valueCell = list[indexRow][key];
                // Create a cell
                var cell = row.insertCell();
                // Include the value in the cell for a column
                cell.innerHTML = valueCell;
                // console.log(key);
            }
        }
    }
    document.getElementById("covidDataAfrica").appendChild(table);

}

// Get EUROPE data from API

function generateTableEurope(data) {
    // Create the element table 
    var table = document.createElement("table");
    // Create the header of the table
    var header = table.createTHead();
    // Create a row for the header
    var headerRow = header.insertRow();
    // Append the name of the column to the header
    for (var key in data[0]) {
        // console.log(key);
        if (isKeyAllowed(key)) {
            // Create th tag to row of header
            var headerCell = document.createElement("th");
            // Include the name of column to the cell
            // Here we can change the name of the column if we need to by replacing "key" variable
            var nameColumn = key;
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
    // Append the rows data into the table
    console.log("All data", data);

    // Filter Europe data
    var europe = data
        .filter(continent => continent.Continent === "Europe")
        .slice(0,5);
    console.log("Europe", europe);

    var list = europe;

    for (var indexRow = 0; indexRow < list.length; indexRow++) {
        // Create each row
        var row = table.insertRow();
        for (var key in list[indexRow]) {
            if (isKeyAllowed(key)) {
                var valueCell = list[indexRow][key];
                // Create a cell
                var cell = row.insertCell();
                // Include the value in the cell for a column
                cell.innerHTML = valueCell;
                // console.log(key);
            }
        }
    }
    document.getElementById("covidDataEurope").appendChild(table);

}


// Get NORTH AMERICA data from API

function generateTableNorthAmerica(data) {
    // Create the element table 
    var table = document.createElement("table");
    // Create the header of the table
    var header = table.createTHead();
    // Create a row for the header
    var headerRow = header.insertRow();
    // Append the name of the column to the header
    for (var key in data[0]) {
        // console.log(key);
        if (isKeyAllowed(key)) {
            // Create th tag to row of header
            var headerCell = document.createElement("th");
            // Include the name of column to the cell
            // Here we can change the name of the column if we need to by replacing "key" variable
            var nameColumn = key;
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
    // Append the rows data into the table
    console.log("All data", data);

    // Filter North America data
    var northAmerica = data
        .filter(continent => continent.Continent === "North America")
        .slice(0,5);
    console.log("North America", northAmerica);

    var list = northAmerica;

    for (var indexRow = 0; indexRow < list.length; indexRow++) {
        // Create each row
        var row = table.insertRow();
        for (var key in list[indexRow]) {
            if (isKeyAllowed(key)) {
                var valueCell = list[indexRow][key];
                // Create a cell
                var cell = row.insertCell();
                // Include the value in the cell for a column
                cell.innerHTML = valueCell;
                // console.log(key);
            }
        }
    }
    document.getElementById("covidDataEurope").appendChild(table);

}

// Get OCEANIA data from API

function generateTableOceania(data) {
    // Create the element table 
    var table = document.createElement("table");
    // Create the header of the table
    var header = table.createTHead();
    // Create a row for the header
    var headerRow = header.insertRow();
    // Append the name of the column to the header
    for (var key in data[0]) {
        // console.log(key);
        if (isKeyAllowed(key)) {
            // Create th tag to row of header
            var headerCell = document.createElement("th");
            // Include the name of column to the cell
            // Here we can change the name of the column if we need to by replacing "key" variable
            var nameColumn = key;
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
    // Append the rows data into the table
    console.log("All data", data);

    // Filter Australia/Oceania data
    var oceania = data
        .filter(continent => continent.Continent === "Australia/Oceania")
        .slice(0,5);
    console.log("Australia/Oceania", oceania);

    var list = oceania;

    for (var indexRow = 0; indexRow < list.length; indexRow++) {
        // Create each row
        var row = table.insertRow();
        for (var key in list[indexRow]) {
            if (isKeyAllowed(key)) {
                var valueCell = list[indexRow][key];
                // Create a cell
                var cell = row.insertCell();
                // Include the value in the cell for a column
                cell.innerHTML = valueCell;
                // console.log(key);
            }
        }
    }
    document.getElementById("covidDataOceania").appendChild(table);

}


// Get SOUTH AMERICA data from API

function generateTableSouthAmerica(data) {
    // Create the element table 
    var table = document.createElement("table");
    // Create the header of the table
    var header = table.createTHead();
    // Create a row for the header
    var headerRow = header.insertRow();
    // Append the name of the column to the header
    for (var key in data[0]) {
        // console.log(key);
        if (isKeyAllowed(key)) {
            // Create th tag to row of header
            var headerCell = document.createElement("th");
            // Include the name of column to the cell
            // Here we can change the name of the column if we need to by replacing "key" variable
            var nameColumn = key;
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
    // Append the rows data into the table
    console.log("All data", data);

    // Filter South America data
    var southAmerica = data
        .filter(continent => continent.Continent === "South America")
        .slice(0,5);
    console.log("South America", southAmerica);

    var list = southAmerica;

    for (var indexRow = 0; indexRow < list.length; indexRow++) {
        // Create each row
        var row = table.insertRow();
        for (var key in list[indexRow]) {
            if (isKeyAllowed(key)) {
                var valueCell = list[indexRow][key];
                // Create a cell
                var cell = row.insertCell();
                // Include the value in the cell for a column
                cell.innerHTML = valueCell;
                // console.log(key);
            }
        }
    }
    document.getElementById("covidDataSouthAmerica").appendChild(table);

}



