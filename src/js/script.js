//default value
let suhuMin_node1 = -30;
let suhuMax_node1 = -10;
let humidityMin_node1 = 60;
let humidityMax_node1 = 80;
let wattMin_node1 = 1800;
let wattMax_node1 = 2000;

let suhuMin_node2 = -30;
let suhuMax_node2 = -10;
let humidityMin_node2 = 60;
let humidityMax_node2 = 80;
let wattMin_node2 = 1800;
let wattMax_node2 = 2000;

let suhuMin_node3 = -30;
let suhuMax_node3 = -10;
let humidityMin_node3 = 60;
let humidityMax_node3 = 80;
let wattMin_node3 = 1800;
let wattMax_node3 = 2000;

let suhuMin_node4 = -30;
let suhuMax_node4 = -10;
let humidityMin_node4 = 60;
let humidityMax_node4 = 80;
let wattMin_node4 = 1800;
let wattMax_node4 = 2000;

function updateSuhu(data) {
    // Node 1
    const warningSuhu_Node1 = document.getElementById("warningSuhu_Node1");
    if (data.node1.suhu < suhuMin_node1 || data.node1.suhu > suhuMax_node1) {
        warningSuhu_Node1.style.visibility = "visible";
    } else {
        warningSuhu_Node1.style.visibility = "hidden";
    }

    const warningHumidity_Node1 = document.getElementById("warningHumidity_Node1");
    if (data.node1.humidity < humidityMin_node1 || data.node1.humidity > humidityMax_node1) {
        warningHumidity_Node1.style.visibility = "visible";
    } else {
        warningHumidity_Node1.style.visibility = "hidden";
    }

    const warningWatt_Node1 = document.getElementById("warningWatt_Node1");
    if (data.node1.watt < wattMin_node1 || data.node1.watt > wattMax_node1) {
        warningWatt_Node1.style.visibility = "visible";
    } else {
        warningWatt_Node1.style.visibility = "hidden";
    }

    //node2
    const warningSuhu_Node2 = document.getElementById("warningSuhu_Node2");
    if (data.node2.suhu < suhuMin_node2 || data.node2.suhu > suhuMax_node2) {
        warningSuhu_Node2.style.visibility = "visible";
    } else {
        warningSuhu_Node2.style.visibility = "hidden";
    }

    const warningHumidity_Node2 = document.getElementById("warningHumidity_Node2");
    if (data.node2.humidity < humidityMin_node2 || data.node2.humidity > humidityMax_node2) {
        warningHumidity_Node2.style.visibility = "visible";
    } else {
        warningHumidity_Node2.style.visibility = "hidden";
    }

    const warningWatt_Node2 = document.getElementById("warningWatt_Node2");
    if (data.node2.watt < wattMin_node2 || data.node2.watt > wattMax_node2) {
        warningWatt_Node2.style.visibility = "visible";
    } else {
        warningWatt_Node2.style.visibility = "hidden";
    }

    //node3
    const warningSuhu_Node3 = document.getElementById("warningSuhu_Node3");
    if (data.node3.suhu < suhuMin_node3 || data.node3.suhu > suhuMax_node3) {
        warningSuhu_Node3.style.visibility = "visible";
    } else {
        warningSuhu_Node3.style.visibility = "hidden";
    }

    const warningHumidity_Node3 = document.getElementById("warningHumidity_Node3");
    if (data.node3.humidity < humidityMin_node3 || data.node3.humidity > humidityMax_node3) {
        warningHumidity_Node3.style.visibility = "visible";
    } else {
        warningHumidity_Node3.style.visibility = "hidden";
    }

    const warningWatt_Node3 = document.getElementById("warningWatt_Node3");
    if (data.node3.watt < wattMin_node3 || data.node3.watt > wattMax_node3) {
        warningWatt_Node3.style.visibility = "visible";
    } else {
        warningWatt_Node3.style.visibility = "hidden";
    }

    //node4
    const warningSuhu_Node4 = document.getElementById("warningSuhu_Node4");
    if (data.node4.suhu < suhuMin_node4 || data.node4.suhu > suhuMax_node4) {
        warningSuhu_Node4.style.visibility = "visible";
    } else {
        warningSuhu_Node4.style.visibility = "hidden";
    }

    const warningHumidity_Node4 = document.getElementById("warningHumidity_Node4");
    if (data.node4.humidity < humidityMin_node4 || data.node4.humidity > humidityMax_node4) {
        warningHumidity_Node4.style.visibility = "visible";
    } else {
        warningHumidity_Node4.style.visibility = "hidden";
    }

    const warningWatt_Node4 = document.getElementById("warningWatt_Node4");
    if (data.node4.watt < wattMin_node4 || data.node4.watt > wattMax_node4) {
        warningWatt_Node4.style.visibility = "visible";
    } else {
        warningWatt_Node4.style.visibility = "hidden";
    }
}

// Load values from localStorage when the page loads
function loadValues() {
    //node1
    suhuMin_node1 = parseInt(localStorage.getItem("suhuMin_node1")) || suhuMin_node1;
    suhuMax_node1 = parseInt(localStorage.getItem("suhuMax_node1")) || suhuMax_node1;
    humidityMin_node1 = parseInt(localStorage.getItem("humidityMin_node1")) || humidityMin_node1;
    humidityMax_node1 = parseInt(localStorage.getItem("humidityMax_node1")) || humidityMax_node1;
    wattMin_node1 = parseInt(localStorage.getItem("wattMin_node1")) || wattMin_node1;
    wattMax_node1 = parseInt(localStorage.getItem("wattMax_node1")) || wattMax_node1;

    //node2
    suhuMin_node2 = parseInt(localStorage.getItem("suhuMin_node2")) || suhuMin_node2;
    suhuMax_node2 = parseInt(localStorage.getItem("suhuMax_node2")) || suhuMax_node2;
    humidityMin_node2 = parseInt(localStorage.getItem("humidityMin_node2")) || humidityMin_node2;
    humidityMax_node2 = parseInt(localStorage.getItem("humidityMax_node2")) || humidityMax_node2;
    wattMin_node2 = parseInt(localStorage.getItem("wattMin_node2")) || wattMin_node2;
    wattMax_node2 = parseInt(localStorage.getItem("wattMax_node2")) || wattMax_node2;

    //node3
    suhuMin_node3 = parseInt(localStorage.getItem("suhuMin_node3")) || suhuMin_node3;
    suhuMax_node3 = parseInt(localStorage.getItem("suhuMax_node3")) || suhuMax_node3;
    humidityMin_node3 = parseInt(localStorage.getItem("humidityMin_node3")) || humidityMin_node3;
    humidityMax_node3 = parseInt(localStorage.getItem("humidityMax_node3")) || humidityMax_node3;
    wattMin_node3 = parseInt(localStorage.getItem("wattMin_node3")) || wattMin_node3;
    wattMax_node3 = parseInt(localStorage.getItem("wattMax_node3")) || wattMax_node3;

    //node4
    suhuMin_node4 = parseInt(localStorage.getItem("suhuMin_node4")) || suhuMin_node4;
    suhuMax_node4 = parseInt(localStorage.getItem("suhuMax_node4")) || suhuMax_node4;
    humidityMin_node4 = parseInt(localStorage.getItem("humidityMin_node4")) || humidityMin_node4;
    humidityMax_node4 = parseInt(localStorage.getItem("humidityMax_node4")) || humidityMax_node4;
    wattMin_node4 = parseInt(localStorage.getItem("wattMin_node4")) || wattMin_node4;
    wattMax_node4 = parseInt(localStorage.getItem("wattMax_node4")) || wattMax_node4;

    // update value input
    //node1
    document.getElementById("inputSuhuMin_node1").value = suhuMin_node1;
    document.getElementById("inputSuhuMax_node1").value = suhuMax_node1;
    document.getElementById("inputHumidityMin_node1").value = humidityMin_node1;
    document.getElementById("inputHumidityMax_node1").value = humidityMax_node1;
    document.getElementById("inputWattMin_node1").value = wattMin_node1;
    document.getElementById("inputWattMax_node1").value = wattMax_node1;

    //node2
    document.getElementById("inputSuhuMin_node2").value = suhuMin_node2;
    document.getElementById("inputSuhuMax_node2").value = suhuMax_node2;
    document.getElementById("inputHumidityMin_node2").value = humidityMin_node2;
    document.getElementById("inputHumidityMax_node2").value = humidityMax_node2;
    document.getElementById("inputWattMin_node2").value = wattMin_node2;
    document.getElementById("inputWattMax_node2").value = wattMax_node2;

    //node3
    document.getElementById("inputSuhuMin_node3").value = suhuMin_node3;
    document.getElementById("inputSuhuMax_node3").value = suhuMax_node3;
    document.getElementById("inputHumidityMin_node3").value = humidityMin_node3;
    document.getElementById("inputHumidityMax_node3").value = humidityMax_node3;
    document.getElementById("inputWattMin_node3").value = wattMin_node3;
    document.getElementById("inputWattMax_node3").value = wattMax_node3;

    //node4
    document.getElementById("inputSuhuMin_node4").value = suhuMin_node4;
    document.getElementById("inputSuhuMax_node4").value = suhuMax_node4;
    document.getElementById("inputHumidityMin_node4").value = humidityMin_node4;
    document.getElementById("inputHumidityMax_node4").value = humidityMax_node4;
    document.getElementById("inputWattMin_node4").value = wattMin_node4;
    document.getElementById("inputWattMax_node4").value = wattMax_node4;
}

// Save values to localStorage
function setSuhu() {
    // Node 1
    const suhuMinInput_node1 = parseInt(document.getElementById("inputSuhuMin_node1").value);
    const suhuMaxInput_node1 = parseInt(document.getElementById("inputSuhuMax_node1").value);
    const humidityMinInput_node1 = parseInt(document.getElementById("inputHumidityMin_node1").value);
    const humidityMaxInput_node1 = parseInt(document.getElementById("inputHumidityMax_node1").value);
    const wattMinInput_node1 = parseInt(document.getElementById("inputWattMin_node1").value);
    const wattMaxInput_node1 = parseInt(document.getElementById("inputWattMax_node1").value);

    //node2
    const suhuMinInput_node2 = parseInt(document.getElementById("inputSuhuMin_node2").value);
    const suhuMaxInput_node2 = parseInt(document.getElementById("inputSuhuMax_node2").value);
    const humidityMinInput_node2 = parseInt(document.getElementById("inputHumidityMin_node2").value);
    const humidityMaxInput_node2 = parseInt(document.getElementById("inputHumidityMax_node2").value);
    const wattMinInput_node2 = parseInt(document.getElementById("inputWattMin_node2").value);
    const wattMaxInput_node2 = parseInt(document.getElementById("inputWattMax_node2").value);

    //node3
    const suhuMinInput_node3 = parseInt(document.getElementById("inputSuhuMin_node3").value);
    const suhuMaxInput_node3 = parseInt(document.getElementById("inputSuhuMax_node3").value);
    const humidityMinInput_node3 = parseInt(document.getElementById("inputHumidityMin_node3").value);
    const humidityMaxInput_node3 = parseInt(document.getElementById("inputHumidityMax_node3").value);
    const wattMinInput_node3 = parseInt(document.getElementById("inputWattMin_node3").value);
    const wattMaxInput_node3 = parseInt(document.getElementById("inputWattMax_node3").value);
    
    //node4
    const suhuMinInput_node4 = parseInt(document.getElementById("inputSuhuMin_node4").value);
    const suhuMaxInput_node4 = parseInt(document.getElementById("inputSuhuMax_node4").value);
    const humidityMinInput_node4 = parseInt(document.getElementById("inputHumidityMin_node4").value);
    const humidityMaxInput_node4 = parseInt(document.getElementById("inputHumidityMax_node4").value);
    const wattMinInput_node4 = parseInt(document.getElementById("inputWattMin_node4").value);
    const wattMaxInput_node4 = parseInt(document.getElementById("inputWattMax_node4").value);

    if (isNaN(suhuMinInput_node1) || isNaN(suhuMaxInput_node1) || isNaN(humidityMinInput_node1) || isNaN(humidityMaxInput_node1) || isNaN(wattMinInput_node1) || isNaN(wattMaxInput_node1)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    //update min dan maxt
    //node1
    suhuMin_node1 = suhuMinInput_node1;
    suhuMax_node1 = suhuMaxInput_node1;
    humidityMin_node1 = humidityMinInput_node1;
    humidityMax_node1 = humidityMaxInput_node1;
    wattMin_node1 = wattMinInput_node1;
    wattMax_node1 = wattMaxInput_node1;

    //node2
    suhuMin_node2 = suhuMinInput_node2;
    suhuMax_node2 = suhuMaxInput_node2;
    humidityMin_node2 = humidityMinInput_node2;
    humidityMax_node2 = humidityMaxInput_node2;
    wattMin_node2 = wattMinInput_node2;
    wattMax_node2 = wattMaxInput_node2;

    //node3
    suhuMin_node3 = suhuMinInput_node3;
    suhuMax_node3 = suhuMaxInput_node3;
    humidityMin_node3 = humidityMinInput_node3;
    humidityMax_node3 = humidityMaxInput_node3;
    wattMin_node3 = wattMinInput_node3;
    wattMax_node3 = wattMaxInput_node3;

    //node4
    suhuMin_node4 = suhuMinInput_node4;
    suhuMax_node4 = suhuMaxInput_node4;
    humidityMin_node4 = humidityMinInput_node4;
    humidityMax_node4 = humidityMaxInput_node4;
    wattMin_node4 = wattMinInput_node4;
    wattMax_node4 = wattMaxInput_node4;

    //store to local storage
    //node1
    localStorage.setItem("suhuMin_node1", suhuMin_node1);
    localStorage.setItem("suhuMax_node1", suhuMax_node1);
    localStorage.setItem("humidityMin_node1", humidityMin_node1);
    localStorage.setItem("humidityMax_node1", humidityMax_node1);
    localStorage.setItem("wattMin_node1", wattMin_node1);
    localStorage.setItem("wattMax_node1", wattMax_node1);

    //node2
    localStorage.setItem("suhuMin_node2", suhuMin_node2);
    localStorage.setItem("suhuMax_node2", suhuMax_node2);
    localStorage.setItem("humidityMin_node2", humidityMin_node2);
    localStorage.setItem("humidityMax_node2", humidityMax_node2);
    localStorage.setItem("wattMin_node2", wattMin_node2);
    localStorage.setItem("wattMax_node2", wattMax_node2);

    //node3
    localStorage.setItem("suhuMin_node3", suhuMin_node3);
    localStorage.setItem("suhuMax_node3", suhuMax_node3);
    localStorage.setItem("humidityMin_node3", humidityMin_node3);
    localStorage.setItem("humidityMax_node3", humidityMax_node3);
    localStorage.setItem("wattMin_node3", wattMin_node3);
    localStorage.setItem("wattMax_node3", wattMax_node3);

    //node4
    localStorage.setItem("suhuMin_node4", suhuMin_node4);
    localStorage.setItem("suhuMax_node4", suhuMax_node4);
    localStorage.setItem("humidityMin_node4", humidityMin_node4);
    localStorage.setItem("humidityMax_node4", humidityMax_node4);
    localStorage.setItem("wattMin_node4", wattMin_node4);
    localStorage.setItem("wattMax_node4", wattMax_node4);
}

// Call loadValues on page load
window.onload = loadValues;



function showAlert() {
    const alert = document.getElementById("alert");
    alert.classList.remove("hidden");
    setTimeout(() => {
        alert.classList.add("hidden");
    }, 1500);
}
