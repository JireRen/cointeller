function myFunction() {
 // document.getElementById("price").innerHTML = "Paragraph changed.";

// const http = new XMLHttpRequest()

// http.open("GET", "https://api.lyrics.ovh/v1/toto/africa")
// http.send()

//http.onload = () => console.log(http.responseText)
// document.getElementById("demo").innerHTML = http.responseText
//var obj = JSON.parse(http.responseText)

//document.getElementById("demo").innerHTML = obj.lyrics

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myObj.bpi.USD.rate + " $ ";
  }
};
xmlhttp.open("GET", "https://api.coindesk.com/v1/bpi/currentprice/USD.json", true);
xmlhttp.send();
xmlhttp.onload = () => console.log(xmlhttp.responseText)


}