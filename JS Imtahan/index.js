let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
span1.onclick = function() {
    span1.classList.add("active");
    span2.classList.remove("active");
    calculate2();
}
span2.onclick = function() {
    span2.classList.add("active");
    span1.classList.remove("active");
    calculate2();
}

let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
span3.onclick = function() {
    span3.classList.add("active");
    span4.classList.remove("active");
    calculate2();
}
span4.onclick = function() {
    span4.classList.add("active");
    span3.classList.remove("active");
    calculate2();
}



let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let circle3 = document.getElementById("circle3");
let circle4 = document.getElementById("circle4");
let circle5 = document.getElementById("circle5");
let circle6 = document.getElementById("circle6");

circle1.onclick = function() {
    circle1.classList.add("active-circle");
    circle2.classList.remove("active-circle");
    circle3.classList.remove("active-circle");
    circle4.classList.remove("active-circle");
    circle5.classList.remove("active-circle");
    circle6.classList.remove("active-circle");
}
circle2.onclick = function() {
    circle2.classList.add("active-circle");
    circle1.classList.remove("active-circle");
    circle3.classList.remove("active-circle");
    circle4.classList.remove("active-circle");
    circle5.classList.remove("active-circle");
    circle6.classList.remove("active-circle");
}
circle3.onclick = function() {
    circle3.classList.add("active-circle");
    circle1.classList.remove("active-circle");
    circle2.classList.remove("active-circle");
    circle4.classList.remove("active-circle");
    circle5.classList.remove("active-circle");
    circle6.classList.remove("active-circle");
}
circle4.onclick = function() {
    circle4.classList.add("active-circle");
    circle1.classList.remove("active-circle");
    circle2.classList.remove("active-circle");
    circle3.classList.remove("active-circle");
    circle5.classList.remove("active-circle");
    circle6.classList.remove("active-circle");
}
circle5.onclick = function() {
    circle5.classList.add("active-circle");
    circle1.classList.remove("active-circle");
    circle2.classList.remove("active-circle");
    circle3.classList.remove("active-circle");
    circle4.classList.remove("active-circle");
    circle6.classList.remove("active-circle");
}
circle6.onclick = function() {
    circle6.classList.add("active-circle");
    circle1.classList.remove("active-circle");
    circle2.classList.remove("active-circle");
    circle3.classList.remove("active-circle");
    circle4.classList.remove("active-circle");
    circle5.classList.remove("active-circle");
}


let spn1 = document.getElementById("spn1");
let spn2 = document.getElementById("spn2");
let spn3 = document.getElementById("spn3");

spn1.onclick = function() {
    spn1.classList.add("active");
    spn2.classList.remove("active");
    spn3.classList.remove("active");
    calculate3();
}
spn2.onclick = function() {
    spn2.classList.add("active");
    spn1.classList.remove("active");
    spn3.classList.remove("active");
    calculate3();
}
spn3.onclick = function() {
    spn3.classList.add("active");
    spn1.classList.remove("active");
    spn2.classList.remove("active");
    calculate3();
}


let crcl1 = document.getElementById("crcl1");
let crcl2 = document.getElementById("crcl2");
let crcl3 = document.getElementById("crcl3");
let crcl4 = document.getElementById("crcl4");
let crcl5 = document.getElementById("crcl5");
let crcl6 = document.getElementById("crcl6");

crcl1.onclick = function() {
    crcl1.classList.add("active-crcl");
    crcl2.classList.remove("active-crcl");
    crcl3.classList.remove("active-crcl");
    crcl4.classList.remove("active-crcl");
    crcl5.classList.remove("active-crcl");
    crcl6.classList.remove("active-crcl");
}
crcl2.onclick = function() {
    crcl2.classList.add("active-crcl");
    crcl1.classList.remove("active-crcl");
    crcl3.classList.remove("active-crcl");
    crcl4.classList.remove("active-crcl");
    crcl5.classList.remove("active-crcl");
    crcl6.classList.remove("active-crcl");
}
crcl3.onclick = function() {
    crcl3.classList.add("active-crcl");
    crcl1.classList.remove("active-crcl");
    crcl2.classList.remove("active-crcl");
    crcl4.classList.remove("active-crcl");
    crcl5.classList.remove("active-crcl");
    crcl6.classList.remove("active-crcl");
}
crcl4.onclick = function() {
    crcl4.classList.add("active-crcl");
    crcl1.classList.remove("active-crcl");
    crcl2.classList.remove("active-crcl");
    crcl3.classList.remove("active-crcl");
    crcl5.classList.remove("active-crcl");
    crcl6.classList.remove("active-crcl");
}
crcl5.onclick = function() {
    crcl5.classList.add("active-crcl");
    crcl1.classList.remove("active-crcl");
    crcl2.classList.remove("active-crcl");
    crcl3.classList.remove("active-crcl");
    crcl4.classList.remove("active-crcl");
    crcl6.classList.remove("active-crcl");
}
crcl6.onclick = function() {
    crcl6.classList.add("active-crcl");
    crcl1.classList.remove("active-crcl");
    crcl2.classList.remove("active-crcl");
    crcl3.classList.remove("active-crcl");
    crcl4.classList.remove("active-crcl");
    crcl5.classList.remove("active-crcl");
}


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

btn1.onclick = function() {
    btn1.classList.add("active-btn");
    btn2.classList.remove("active-btn");
    btn3.classList.remove("active-btn");
    btn4.classList.remove("active-btn");
    div1.style.display = "flex";
    div2.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
}
btn2.onclick = function() {
    btn2.classList.add("active-btn");
    btn1.classList.remove("active-btn");
    btn3.classList.remove("active-btn");
    btn4.classList.remove("active-btn");
    div2.style.display = "flex";
    div1.style.display = "none";
    div3.style.display = "none";
    div4.style.display = "none";
}
btn3.onclick = function() {
    btn3.classList.add("active-btn");
    btn1.classList.remove("active-btn");
    btn2.classList.remove("active-btn");
    btn4.classList.remove("active-btn");
    div3.style.display = "flex";
    div1.style.display = "none";
    div2.style.display = "none";
    div4.style.display = "none";
}
btn4.onclick = function() {
    btn4.classList.add("active-btn");
    btn1.classList.remove("active-btn");
    btn2.classList.remove("active-btn");    
    btn3.classList.remove("active-btn");
    div4.style.display = "flex";
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
}




let amount = document.getElementById("amount");
let month = document.getElementById("month");
let percent = document.getElementById("percent");
let qiymet = document.getElementById("qiymet");
let ay = document.getElementById("ay");
let faiz = document.getElementById("faiz");
let netice = document.getElementById("netice");

function calculate1() {
    let a = +(amount.value);
    let m = +(month.value);
    let i = +(percent.value);

    qiymet.innerText = a;
    ay.innerText = m;
    faiz.innerText = i;
    let hesab = i / 12;
    let payment = a * hesab / (1 - Math.pow(1 + hesab, -m));
    netice.innerText = payment.toFixed(2) + " ₼";
}

amount.addEventListener("input", calculate1);
month.addEventListener("input", calculate1);
percent.addEventListener("input", calculate1);

calculate1();





let amount2 = document.getElementById("amount2");
let qiymet2 = document.getElementById("qiymet2");
let result2 = document.getElementById("result2");
let gelir = document.getElementById("gelir");
let percent2 = document.getElementById("percent2");

function getSelectedMonth() {
    if (circle1.classList.contains("active-circle")) return 3;
    if (circle2.classList.contains("active-circle")) return 6;
    if (circle3.classList.contains("active-circle")) return 12;
    if (circle4.classList.contains("active-circle")) return 18;
    if (circle5.classList.contains("active-circle")) return 24;
    if (circle6.classList.contains("active-circle")) return 36;
}
function calculate2() {
    let amountValue = +amount2.value;
    let monthValue = getSelectedMonth();
    let percentValue = 8;
    let totalIncome = 0;

    if (span1.classList.contains("active")) {
        percentValue = 14;
    } else if (span2.classList.contains("active")) {
        percentValue = 12;
    }

    if (span3.classList.contains("active")) {
        totalIncome = amountValue * (percentValue / 100) * (monthValue / 12);
        result2.innerText = totalIncome.toFixed(2) + " ₼";
    } 
    else if (span4.classList.contains("active")) {
        totalIncome = amountValue * (percentValue / 100) * (monthValue / 12) * 1.7;
        result2.innerText = totalIncome.toFixed(2) + " $";
    }

    let monthly = totalIncome / monthValue;

    qiymet2.innerText = amountValue;
    gelir.innerText = monthly.toFixed(2) + " ₼";
    percent2.innerText = percentValue + " %";
}


amount2.addEventListener("input", calculate2);
circle1.onclick = function() { 
    activateCircle(circle1); }
circle2.onclick = function() { 
    activateCircle(circle2); }
circle3.onclick = function() { 
    activateCircle(circle3); }
circle4.onclick = function() { 
    activateCircle(circle4); }
circle5.onclick = function() { 
    activateCircle(circle5); }
circle6.onclick = function() { 
    activateCircle(circle6); }

function activateCircle(selected) {
    circle1.classList.remove("active-circle");
    circle2.classList.remove("active-circle");
    circle3.classList.remove("active-circle");
    circle4.classList.remove("active-circle");
    circle5.classList.remove("active-circle");
    circle6.classList.remove("active-circle");
    selected.classList.add("active-circle");
    calculate2();
}

calculate2();





let carPrice = document.getElementById("carPrice");
let initialPercent = document.getElementById("initialPercent");
let inputMonth = document.getElementById("inputMonth");
let qiymet3 = document.getElementById("qiymet3");
let faiz3 = document.getElementById("faiz3");
let ay3 = document.getElementById("ay3");
let result3 = document.getElementById("result3");
let kredit = document.getElementById("kredit");
let percent3 = document.getElementById("percent3");
let komissiya = document.getElementById("komissiya");
let odenis = document.getElementById("odenis");

function calculate3() {
    let price = +carPrice.value;
    let percentInitial = +initialPercent.value;
    let month = +inputMonth.value;
    let yearlyPercent;

    if (spn1.classList.contains("active")) {
        yearlyPercent = 14;} 
    else if (spn2.classList.contains("active")) {
        yearlyPercent = 12;} 
    else {yearlyPercent = 16;}

    qiymet3.innerText = price;
    faiz3.innerText = percentInitial;
    ay3.innerText = month;

    let downPayment = price * percentInitial / 100;
    let loanAmount = price - downPayment;
    let monthlyRate = yearlyPercent / 100 / 12;

    let monthlyPayment = loanAmount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -month));
    let commission = Math.max(loanAmount * 0.005, 20);
    let totalPayment = (monthlyPayment * month) + commission;

    result3.innerText = monthlyPayment.toFixed(2) + " ₼";
    kredit.innerText = loanAmount.toFixed(2) + " ₼";
    percent3.innerText = yearlyPercent + " %";
    komissiya.innerText = commission.toFixed(2) + " ₼";
    odenis.innerText = totalPayment.toFixed(2) + " ₼";
}
carPrice.addEventListener("input", calculate3);
initialPercent.addEventListener("input", calculate3);
inputMonth.addEventListener("input", calculate3);

calculate3();




let inputqiymet = document.getElementById("inputqiymet");
let il = document.getElementById("il");
let qiymet4 = document.getElementById("qiymet4");
let year4 = document.getElementById("year4");
let result4 = document.getElementById("result4");
let kreditmeblegi = document.getElementById("kreditmeblegi");
let percent4 = document.getElementById("percent4");

let circles = [
    document.getElementById("crcl1"),
    document.getElementById("crcl2"),
    document.getElementById("crcl3"),
    document.getElementById("crcl4"),
    document.getElementById("crcl5"),
    document.getElementById("crcl6")
];
let selectedPercent = 4; 
function calculate4() {
    let amount = +inputqiymet.value;
    let year = +il.value;

    qiymet4.innerText = amount;
    year4.innerText = year;

    let month = year * 12;
    let monthlyRate = selectedPercent / 100 / 12;
    let monthlyPayment = amount * monthlyRate /(1 - Math.pow(1 + monthlyRate, -month));

    result4.innerText = monthlyPayment.toFixed(2) + " ₼";
    kreditmeblegi.innerText = amount.toFixed(2) + " ₼";
    percent4.innerText = selectedPercent + " %";
}
circles.forEach(circle => {
    circle.addEventListener("click", function () {
        selectedPercent = parseFloat(this.innerText);
        calculate4();
    });
});

inputqiymet.addEventListener("input", calculate4);
il.addEventListener("input", calculate4);

calculate4();