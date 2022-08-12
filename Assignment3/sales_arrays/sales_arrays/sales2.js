"use strict";

const region1 = [];
const region2 = [];
const allRegions = [region1, region2]

const MIN_VALUE = 1000;
const MAX_VALUE = 5000;

for(let numRegions = 0; numRegions < 2; numRegions++)
{
    for(let numQuarters = 0; numQuarters < 4; numQuarters++)
    {
        let input = null
        do{
            input = parseFloat(prompt(`Enter an input for Region ${numRegions+1}. 
The number must be between ${MIN_VALUE} and ${MAX_VALUE}.`));
        } while (input == "" || input > MAX_VALUE || input < MIN_VALUE);
        allRegions[numRegions][numQuarters] = input;
    }
}


let salesByQuarter = "<h2>Sales By Quarter</h2>";
let totalSales = 0;

for(let currQuarter = 0; currQuarter < region1.length; currQuarter++)
{
    let currQuarterSale = 0;
    for(let currRegion = 0; currRegion < allRegions.length; currRegion++)
    {
        currQuarterSale += allRegions[currRegion][currQuarter]
    }
    
    let quarterString = `Q${currQuarter+1}: $<span>${currQuarterSale}</span><br>`;
    salesByQuarter += quarterString;
}
document.write(salesByQuarter);

let salesByRegion = "<h2>Sales By Region</h2>";

for(let currentRegion = 0; currentRegion < allRegions.length; currentRegion++)
{
    let currentRegionSales = 0;
    for(let currentQuarter = 0; currentQuarter < region1.length; currentQuarter++)
    {
        currentRegionSales += allRegions[currentRegion][currentQuarter];
        totalSales += allRegions[currentRegion][currentQuarter];
    }
    let regionString = `Region ${currentRegion+1}: $<span>${currentRegionSales}</span><br>`;
    salesByRegion += regionString;
}
document.write(salesByRegion);

let totalMessage = `<h2>Total Sales</h2>$<span>${totalSales}</span>`;
document.write(totalMessage);