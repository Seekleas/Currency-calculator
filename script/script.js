// Calculating.


var gbp = parseFloat(document.querySelector('.cgbp').innerHTML);
var eur = parseFloat(document.querySelector('.ceur').innerHTML);
var chf = parseFloat(document.querySelector('.cchf').innerHTML);
var usd = parseFloat(document.querySelector('.cusd').innerHTML);
var pln = 1;

var calcGBP = document.querySelector('.vc_gbp');
var calcEUR = document.querySelector('.vc_eur');
var calcCHF = document.querySelector('.vc_chf');
var calcUSD = document.querySelector('.vc_usd');
var calcPLN = document.querySelector('.vc_pln');

var userCurrency = document.querySelector('.currencyOptions');
var userValue = document.querySelector('.c_value');
var calculateButton = document.querySelector('.calculateValue');

// Converting function.

function converting(e) {
   e.preventDefault();

   var selectedOption = userCurrency.value;
   var number = userValue.value;

   var resultGBP = 0;
   var resultEUR = 0;
   var resultCHF = 0;
   var resultUSD = 0;
   var resultPLN = 0;

   if (selectedOption === "GBP") {
       resultGBP = ((number * gbp) / gbp);
       resultEUR = ((number * gbp) / eur);
       resultCHF = ((number * gbp) / chf);
       resultUSD = ((number * gbp) / usd);
       resultPLN = ((number * gbp) / pln);
   } else if (selectedOption === "EUR") {
       resultGBP = ((number * eur) / gbp);
       resultEUR = ((number * eur) / eur);
       resultCHF = ((number * eur) / chf);
       resultUSD = ((number * eur) / usd);
       resultPLN = ((number * eur) / pln); 
   } else if (selectedOption === "CHF") {
       resultGBP = ((number * chf) / gbp);
       resultEUR = ((number * chf) / eur);
       resultCHF = ((number * chf) / chf);
       resultUSD = ((number * chf) / usd);
       resultPLN = ((number * chf) / pln);
   } else if (selectedOption === "USD") {
       resultGBP = ((number * usd) / gbp);
       resultEUR = ((number * usd) / eur);
       resultCHF = ((number * usd) / chf);
       resultUSD = ((number * usd) / usd);
       resultPLN = ((number * usd) / pln);
   } else if (selectedOption === "PLN") {
       resultGBP = ((number * pln) / gbp);
       resultEUR = ((number * pln) / eur);
       resultCHF = ((number * pln) / chf);
       resultUSD = ((number * pln) / usd);
       resultPLN = ((number * pln) / pln);
   }

   calcGBP.innerHTML = resultGBP.toFixed(4); 
   calcEUR.innerHTML = resultEUR.toFixed(4);
   calcCHF.innerHTML = resultCHF.toFixed(4);
   calcUSD.innerHTML = resultUSD.toFixed(4);
   calcPLN.innerHTML = resultPLN.toFixed(4);
}

document.querySelector('.calculateValue').addEventListener('click', converting); 