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
    .then(json => generateTable(json))
    .catch(err => console.error('error:' + err));

// Check the name of the columns that we want to include in the table

function isKeyAllowed(key) {
    return ["rank", "Country", "Continent", "TotalCases", "TotalDeaths", "TotalRecovered", "ActiveCases", "Infection_Risk"].includes(key);

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
            if (nameColumn === "rank"){
                nameColumn = "Global Rank";
            }
            else if (nameColumn === "TotalCases") {
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

    // Filter Japan only
    var japan = data.filter(country => country.Country === "Japan");
    console.log("Japan", japan);

    var list = japan;

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
    document.getElementById("covidDataJapan").appendChild(table);
}
