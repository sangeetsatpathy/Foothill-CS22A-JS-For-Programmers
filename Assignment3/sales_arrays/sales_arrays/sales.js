"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const allRegions = [region1, region2, region3, region4, region5]

let salesByQuarter = "<h2>Sales By Quarter</h2>";
let totalSales = 0;

for(let currQuarter = 0; currQuarter < region1.length; currQuarter++)
{
    let currQuarterSale = 0;
    for(let currRegion = 0; currRegion < allRegions.length; currRegion++)
    {
        currQuarterSale += allRegions[currRegion][currQuarter]
    }
    
    let quarterString = `Q${currQuarter+1}: $${currQuarterSale}<br>`;
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
    let regionString = `Region ${currentRegion+1}: $${currentRegionSales}<br>`;
    salesByRegion += regionString;
}
document.write(salesByRegion);

let totalMessage = `<h2>Total Sales</h2>$${totalSales}`;
document.write(totalMessage);