// script.js

// Show/hide conversion options based on selection
document.getElementById('conversion-type').addEventListener('change', function () {
    const conversionType = this.value;

    document.getElementById('length-conversion').style.display = 'none';
    document.getElementById('weight-conversion').style.display = 'none';
    document.getElementById('temperature-conversion').style.display = 'none';
    document.getElementById('area-conversion').style.display = 'none';
    document.getElementById('volume-conversion').style.display = 'none';
    document.getElementById('speed-conversion').style.display = 'none';
    document.getElementById('time-conversion').style.display = 'none';

    if (conversionType === 'length') {
        document.getElementById('length-conversion').style.display = 'block';
    } else if (conversionType === 'weight') {
        document.getElementById('weight-conversion').style.display = 'block';
    } else if (conversionType === 'temperature') {
        document.getElementById('temperature-conversion').style.display = 'block';
    } else if (conversionType === 'area') {
        document.getElementById('area-conversion').style.display = 'block';
    } else if (conversionType === 'volume') {
        document.getElementById('volume-conversion').style.display = 'block';
    } else if (conversionType === 'speed') {
        document.getElementById('speed-conversion').style.display = 'block';
    } else if (conversionType === 'time') {
        document.getElementById('time-conversion').style.display = 'block';
    }
});

// Length Conversion
function convertLength() {
    const from = document.getElementById('length-from').value;
    const to = document.getElementById('length-to').value;
    const value = parseFloat(document.getElementById('length-value').value);

    const conversions = {
        meters: { feet: 3.28084, kilometers: 0.001, miles: 0.000621371, inches: 39.3701, centimeters: 100, millimeters: 1000, yards: 1.09361 },
        feet: { meters: 0.3048, kilometers: 0.0003048, miles: 0.000189394, inches: 12, centimeters: 30.48, millimeters: 304.8, yards: 0.333333 },
        kilometers: { meters: 1000, feet: 3280.84, miles: 0.621371, inches: 39370.1, centimeters: 100000, millimeters: 1000000, yards: 1093.61 },
        miles: { meters: 1609.34, feet: 5280, kilometers: 1.60934, inches: 63360, centimeters: 160934, millimeters: 1609340, yards: 1760 },
        inches: { meters: 0.0254, feet: 0.0833333, kilometers: 0.0000254, miles: 0.0000157828, centimeters: 2.54, millimeters: 25.4, yards: 0.0277778 },
        centimeters: { meters: 0.01, feet: 0.0328084, kilometers: 0.00001, miles: 0.00000621371, inches: 0.393701, millimeters: 10, yards: 0.0109361 },
        millimeters: { meters: 0.001, feet: 0.00328084, kilometers: 0.000001, miles: 0.000000621371, inches: 0.0393701, centimeters: 0.1, yards: 0.00109361 },
        yards: { meters: 0.9144, feet: 3, kilometers: 0.0009144, miles: 0.000568182, inches: 36, centimeters: 91.44, millimeters: 914.4 }
    };

    const result = value * conversions[from][to];
    document.getElementById('length-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

// Weight Conversion
function convertWeight() {
    const from = document.getElementById('weight-from').value;
    const to = document.getElementById('weight-to').value;
    const value = parseFloat(document.getElementById('weight-value').value);

    const conversions = {
        kilograms: { grams: 1000, pounds: 2.20462, ounces: 35.274, milligrams: 1000000, tons: 0.001 },
        grams: { kilograms: 0.001, pounds: 0.00220462, ounces: 0.035274, milligrams: 1000, tons: 0.000001 },
        pounds: { kilograms: 0.453592, grams: 453.592, ounces: 16, milligrams: 453592, tons: 0.000453592 },
        ounces: { kilograms: 0.0283495, grams: 28.3495, pounds: 0.0625, milligrams: 28349.5, tons: 0.0000283495 },
        milligrams: { kilograms: 0.000001, grams: 0.001, pounds: 0.00000220462, ounces: 0.000035274, tons: 0.000000001 },
        tons: { kilograms: 1000, grams: 1000000, pounds: 2204.62, ounces: 35274, milligrams: 1000000000 }
    };

    const result = value * conversions[from][to];
    document.getElementById('weight-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

// Temperature Conversion
function convertTemperature() {
    const from = document.getElementById('temp-from').value;
    const to = document.getElementById('temp-to').value;
    const value = parseFloat(document.getElementById('temp-value').value);

    let result;
    if (from === 'celsius' && to === 'fahrenheit') {
        result = (value * 9 / 5) + 32;
    } else if (from === 'fahrenheit' && to === 'celsius') {
        result = (value - 32) * 5 / 9;
    } else if (from === 'celsius' && to === 'kelvin') {
        result = value + 273.15;
    } else if (from === 'kelvin' && to === 'celsius') {
        result = value - 273.15;
    } else if (from === 'fahrenheit' && to === 'kelvin') {
        result = ((value - 32) * 5 / 9) + 273.15;
    } else if (from === 'kelvin' && to === 'fahrenheit') {
        result = ((value - 273.15) * 9 / 5) + 32;
    } else {
        result = value; // Same unit
    }

    document.getElementById('temp-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

// Area Conversion
function convertArea() {
    const from = document.getElementById('area-from').value;
    const to = document.getElementById('area-to').value;
    const value = parseFloat(document.getElementById('area-value').value);

    const conversions = {
        square_meters: { square_feet: 10.7639, acres: 0.000247105, hectares: 0.0001, square_kilometers: 0.000001, square_miles: 0.000000386102 },
        square_feet: { square_meters: 0.092903, acres: 0.0000229568, hectares: 0.0000092903, square_kilometers: 0.000000092903, square_miles: 0.0000000358701 },
        acres: { square_meters: 4046.86, square_feet: 43560, hectares: 0.404686, square_kilometers: 0.00404686, square_miles: 0.0015625 },
        hectares: { square_meters: 10000, square_feet: 107639, acres: 2.47105, square_kilometers: 0.01, square_miles: 0.00386102 },
        square_kilometers: { square_meters: 1000000, square_feet: 10763910.4, acres: 247.105, hectares: 100, square_miles: 0.386102 },
        square_miles: { square_meters: 2589988.11, square_feet: 27878400, acres: 640, hectares: 258.999, square_kilometers: 2.58999 }
    };

    const result = value * conversions[from][to];
    document.getElementById('area-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

// Volume Conversion
function convertVolume() {
    const from = document.getElementById('volume-from').value;
    const to = document.getElementById('volume-to').value;
    const value = parseFloat(document.getElementById('volume-value').value);

    const conversions = {
        liters: { gallons: 0.264172, milliliters: 1000, cubic_meters: 0.001, cubic_feet: 0.0353147 },
        gallons: { liters: 3.78541, milliliters: 3785.41, cubic_meters: 0.00378541, cubic_feet: 0.133681 },
        milliliters: { liters: 0.001, gallons: 0.000264172, cubic_meters: 0.000001, cubic_feet: 0.0000353147 },
        cubic_meters: { liters: 1000, gallons: 264.172, milliliters: 1000000, cubic_feet: 35.3147 },
        cubic_feet: { liters: 28.3168, gallons: 7.48052, milliliters: 28316.8, cubic_meters: 0.0283168 }
    };

    const result = value * conversions[from][to];
    document.getElementById('volume-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

// Speed Conversion
function convertSpeed() {
    const from = document.getElementById('speed-from').value;
    const to = document.getElementById('speed-to').value;
    const value = parseFloat(document.getElementById('speed-value').value);

    const conversions = {
        kmh: { mph: 0.621371, ms: 0.277778 },
        mph: { kmh: 1.60934, ms: 0.44704 },
        ms: { kmh: 3.6, mph: 2.23694 }
    };

    const result = value * conversions[from][to];
    document.getElementById('speed-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

// Time Conversion
function convertTime() {
    const from = document.getElementById('time-from').value;
    const to = document.getElementById('time-to').value;
    const value = parseFloat(document.getElementById('time-value').value);

    const conversions = {
        seconds: { minutes: 0.0166667, hours: 0.000277778, days: 0.0000115741, weeks: 0.00000165344, years: 0.0000000316887 },
        minutes: { seconds: 60, hours: 0.0166667, days: 0.000694444, weeks: 0.0000992063, years: 0.00000190259 },
        hours: { seconds: 3600, minutes: 60, days: 0.0416667, weeks: 0.00595238, years: 0.000114155 },
        days: { seconds: 86400, minutes: 1440, hours: 24, weeks: 0.142857, years: 0.00273973 },
        weeks: { seconds: 604800, minutes: 10080, hours: 168, days: 7, years: 0.0191781 },
        years: { seconds: 31536000, minutes: 525600, hours: 8760, days: 365, weeks: 52.1429 }
    };

    const result = value * conversions[from][to];
    document.getElementById('time-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}