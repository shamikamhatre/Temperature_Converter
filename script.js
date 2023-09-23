const temperature=document.querySelector(".temperature input");
const result=document.querySelector(".result input");
const inputTempUnit=document.querySelector(".temperature select");
const resultTempUnit=document.querySelector(".result select");

temperature.oninput=function(){
    let inputTempUnitvalue=inputTempUnit.value;
    let resultTempUnitvalue=resultTempUnit.value;

    let celciusTokelvin=inputTempUnitvalue === "Celcius" && resultTempUnitvalue === "Kelvin";
    let celciusTofaherenheit=inputTempUnitvalue === "Celcius" && resultTempUnitvalue ==="Fahrenheit";

    let faherenheitTokelvin=inputTempUnitvalue === "Fahrenheit" && resultTempUnitvalue === "Kelvin";
    let faherenheitTocelcius=inputTempUnitvalue === "Fahrenheit" && resultTempUnitvalue ==="Celcius";

    let kelvinTofaherenheit=inputTempUnitvalue === "Kelvin" && resultTempUnitvalue === "Fahrenheit";
    let kelvinTocelcius=inputTempUnitvalue === "Kelvin" && resultTempUnitvalue ==="Celcius";

    let sameUnits =inputTempUnitvalue === resultTempUnitvalue;

    let inputTempValue=temperature.value;
    let convertTemp=0;

    if(celciusTokelvin){
        convertTemp=(inputTempValue*1)+273.15;
        result.value=convertTemp.toFixed(2);
    }
    else if(celciusTofaherenheit){
        convertTemp=(9/5 *inputTempValue*1)+32;
        result.value=convertTemp.toFixed(2);
    }
    else if(kelvinTocelcius){
        convertTemp=(inputTempValue-273.15);
        result.value=convertTemp.toFixed(2);
    }
    else if(kelvinTofaherenheit){
        convertTemp=9/5 *(inputTempValue -273.15)+32;
        result.value=convertTemp.toFixed(2);
    }
    else if(faherenheitTocelcius){
        convertTemp=5/9 *(inputTempValue-32);
        result.value=convertTemp.toFixed(2);
    }
    else if(faherenheitTokelvin){
        convertTemp=5/9 *(inputTempValue-32)+273.15;
        result.value=convertTemp.toFixed(2);
    }
    else if(sameUnits){
        result.value=inputTempValue;
    }
}