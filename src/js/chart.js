let suhu_Node1 = [], humidity_Node1 = [], watt_Node1 = [];
let suhu_Node2 = [], humidity_Node2 = [], watt_Node2 = [];
let suhu_Node3 = [], humidity_Node3 = [], watt_Node3 = [];
let suhu_Node4 = [], humidity_Node4 = [], watt_Node4 = [];
let waktuData = [];

// ambil dari local
if (localStorage.getItem("suhu_Node1")) {
    suhu_Node1 = JSON.parse(localStorage.getItem("suhu_Node1"));
}
if (localStorage.getItem("humidity_Node1")) {
    humidity_Node1 = JSON.parse(localStorage.getItem("humidity_Node1"));
}
if (localStorage.getItem("watt_Node1")) {
    watt_Node1 = JSON.parse(localStorage.getItem("watt_Node1"));
}

if (localStorage.getItem("suhu_Node2")) {
    suhu_Node2 = JSON.parse(localStorage.getItem("suhu_Node2"));
}
if (localStorage.getItem("humidity_Node2")) {
    humidity_Node2 = JSON.parse(localStorage.getItem("humidity_Node2"));
}
if (localStorage.getItem("watt_Node2")) {
    watt_Node2 = JSON.parse(localStorage.getItem("watt_Node2"));
}

if (localStorage.getItem("suhu_Node3")) {
    suhu_Node3 = JSON.parse(localStorage.getItem("suhu_Node3"));
}
if (localStorage.getItem("humidity_Node3")) {
    humidity_Node3 = JSON.parse(localStorage.getItem("humidity_Node3"));
}
if (localStorage.getItem("watt_Node3")) {
    watt_Node3 = JSON.parse(localStorage.getItem("watt_Node3"));
}

if (localStorage.getItem("suhu_Node4")) {
    suhu_Node4 = JSON.parse(localStorage.getItem("suhu_Node4"));
}
if (localStorage.getItem("humidity_Node4")) {
    humidity_Node4 = JSON.parse(localStorage.getItem("humidity_Node4"));
}
if (localStorage.getItem("watt_Node4")) {
    watt_Node4 = JSON.parse(localStorage.getItem("watt_Node4"));
}
if (localStorage.getItem("waktuData")) {
    waktuData = JSON.parse(localStorage.getItem("waktuData"));
}


client.on("message", (topic, message) => {
    if (topic === "/kkeshiian/pabrik/data") {
        try {
            let data = JSON.parse(message.toString());
            console.log("data parsing: ", data);

            if (data.node1.suhu !== undefined) {
                if (suhu_Node1.length > 30) {
                    suhu_Node1.shift(); humidity_Node1.shift(); watt_Node1.shift();
                    suhu_Node2.shift(); humidity_Node2.shift(); watt_Node2.shift();
                    suhu_Node3.shift(); humidity_Node3.shift(); watt_Node3.shift();
                    suhu_Node4.shift(); humidity_Node4.shift(); watt_Node4.shift();
                    waktuData.shift();
                }
    
                // Tambahkan data baru
                waktuData.push(new Date().toLocaleTimeString());
                suhu_Node1.push(data.node1.suhu); humidity_Node1.push(data.node1.humidity); watt_Node1.push(data.node1.watt);
                suhu_Node2.push(data.node2.suhu); humidity_Node2.push(data.node2.humidity); watt_Node2.push(data.node2.watt);
                suhu_Node3.push(data.node3.suhu); humidity_Node3.push(data.node3.humidity); watt_Node3.push(data.node3.watt);
                suhu_Node4.push(data.node4.suhu); humidity_Node4.push(data.node4.humidity); watt_Node4.push(data.node4.watt);
    
                // Simpan ke local storage
                localStorage.setItem("waktuData", JSON.stringify(waktuData));
                localStorage.setItem("suhu_Node1", JSON.stringify(suhu_Node1));
                localStorage.setItem("humidity_Node1", JSON.stringify(humidity_Node1));
                localStorage.setItem("watt_Node1", JSON.stringify(watt_Node1));
    
                localStorage.setItem("suhu_Node2", JSON.stringify(suhu_Node2));
                localStorage.setItem("humidity_Node2", JSON.stringify(humidity_Node2));
                localStorage.setItem("watt_Node2", JSON.stringify(watt_Node2));
    
                localStorage.setItem("suhu_Node3", JSON.stringify(suhu_Node3));
                localStorage.setItem("humidity_Node3", JSON.stringify(humidity_Node3));
                localStorage.setItem("watt_Node3", JSON.stringify(watt_Node3));
    
                localStorage.setItem("suhu_Node4", JSON.stringify(suhu_Node4));
                localStorage.setItem("humidity_Node4", JSON.stringify(humidity_Node4));
                localStorage.setItem("watt_Node4", JSON.stringify(watt_Node4));
    
                updateChart();
            }
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
    }
});

// Membuat chart hanya jika elemen ada
const createChart = (id, label, data) => {
    const canvas = document.getElementById(id);
    if (canvas) {
        return new Chart(canvas.getContext("2d"), {
            type: "line",
            data: { labels: waktuData,
            datasets: [{ label, data,
                borderColor: "rgb(40, 36, 37)",
                backgroundColor: "rgba(40, 36, 37, 0.1)",
                borderWidth: 3, pointRadius: 1, pointHoverRadius: 8, pointHoverBackgroundColor: "rgb(40, 36, 37)",
                tension: 0.1 }] },
            options: { 
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        ticks: {
                            color: "rgba(40, 36, 37, 0.7)",
                        },
                    }
                },
                responsive: true, 
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: "rgb(40, 36, 37)", // Mengubah warna font legenda
                            font: {
                                size: 14,
                            }
                        },
                    },
                },
            }
        });
    } else {
        console.error(`Canvas ${id} tidak ditemukan!`);
        return null;
    }
};

const suhu_Node1Chart = createChart("chartSuhu_Node1", "Suhu Node 1", suhu_Node1);
const humidity_Node1Chart = createChart("chartHumidity_Node1", "Humidity Node 1", humidity_Node1);
const watt_Node1Chart = createChart("chartWatt_Node1", "Watt Node 1", watt_Node1);

const suhu_Node2Chart = createChart("chartSuhu_Node2", "Suhu Node 2", suhu_Node2);
const humidity_Node2Chart = createChart("chartHumidity_Node2", "Humidity Node 2", humidity_Node2);
const watt_Node2Chart = createChart("chartWatt_Node2", "Watt Node 2", watt_Node2);

const suhu_Node3Chart = createChart("chartSuhu_Node3", "Suhu Node 3", suhu_Node3);
const humidity_Node3Chart = createChart("chartHumidity_Node3", "Humidity Node 3", humidity_Node3);
const watt_Node3Chart = createChart("chartWatt_Node3", "Watt Node 3", watt_Node3);

const suhu_Node4Chart = createChart("chartSuhu_Node4", "Suhu Node 4", suhu_Node4);
const humidity_Node4Chart = createChart("chartHumidity_Node4", "Humidity Node 4", humidity_Node4);
const watt_Node4Chart = createChart("chartWatt_Node4", "Watt Node 4", watt_Node4);

function updateChart() {
    suhu_Node1Chart.data.labels = waktuData;
    suhu_Node1Chart.data.datasets[0].data = suhu_Node1;
    suhu_Node1Chart.update();

    humidity_Node1Chart.data.labels = waktuData;
    humidity_Node1Chart.data.datasets[0].data = humidity_Node1;
    humidity_Node1Chart.update();

    watt_Node1Chart.data.labels = waktuData;
    watt_Node1Chart.data.datasets[0].data = watt_Node1;
    watt_Node1Chart.update();

    suhu_Node2Chart.data.labels = waktuData;
    suhu_Node2Chart.data.datasets[0].data = suhu_Node2;
    suhu_Node2Chart.update();

    humidity_Node2Chart.data.labels = waktuData;
    humidity_Node2Chart.data.datasets[0].data = humidity_Node2;
    humidity_Node2Chart.update();

    watt_Node2Chart.data.labels = waktuData;
    watt_Node2Chart.data.datasets[0].data = watt_Node2;
    watt_Node2Chart.update();

    suhu_Node3Chart.data.labels = waktuData;
    suhu_Node3Chart.data.datasets[0].data = suhu_Node3;
    suhu_Node3Chart.update();

    humidity_Node3Chart.data.labels = waktuData;
    humidity_Node3Chart.data.datasets[0].data = humidity_Node3;
    humidity_Node3Chart.update();

    watt_Node3Chart.data.labels = waktuData;
    watt_Node3Chart.data.datasets[0].data = watt_Node3;
    watt_Node3Chart.update();

    suhu_Node4Chart.data.labels = waktuData;
    suhu_Node4Chart.data.datasets[0].data = suhu_Node4;
    suhu_Node4Chart.update();

    humidity_Node4Chart.data.labels = waktuData;
    humidity_Node4Chart.data.datasets[0].data = humidity_Node4;
    humidity_Node4Chart.update();

    watt_Node4Chart.data.labels = waktuData;
    watt_Node4Chart.data.datasets[0].data = watt_Node4;
    watt_Node4Chart.update();
}
