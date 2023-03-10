import news from "./data/news.json" assert { type: "json" };

const stringLengthLimit = 80;

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
    var newsTitle = newsArr[i]["title"];
    if (newsTitle.length > stringLengthLimit) {
      newsBlocks[i].querySelector('a h3').textContent = newsTitle.substring(0, stringLengthLimit) + "...";
    }
    else {
      newsBlocks[i].querySelector('a h3').textContent = newsTitle + "\n";
    }
    // newsBlocks[i].querySelector('a h3').textContent = newsTitle.length > stringLengthLimit ? newsTitle.substring(0, stringLengthLimit) + "..." : newsTitle;
    newsBlocks[i].querySelector('a img').setAttribute("src", newsArr[i]["urlToImage"]);
    var newsDate = new Date(newsArr[i]["pubDate"]);
    var newsDateFormatted = newsDate.getDate() + " " + MONTHS[newsDate.getMonth()] + " " + newsDate.getFullYear();
    newsBlocks[i].querySelector('a p').textContent = newsDateFormatted;
}