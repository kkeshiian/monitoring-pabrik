// MQTT broker URL
const broker = "wss://broker.emqx.io:8084/mqtt";
const topicSubscribe = "/kkeshiian/pabrik/data";
const topicPublish = "/kkeshiian/toggle";

// Connect to MQTT broker
const client = mqtt.connect(broker);

// Connection callback
client.on("connect", () => {
  console.log("Connected to MQTT broker");
  client.subscribe(topicSubscribe, (err) => {
    if (!err) {
      console.log(`Subscribed to topic: ${topicSubscribe}`);
    } else {
      console.error("Subscription error: ", err);
    }
  });
});

 // Error handling
 client.on("error", (err) => {
   console.error("MQTT Error: ", err);
 });

  // Message callback
client.on("message", (topic, message) => {
    try {
        const data = JSON.parse(message.toString());
        updateSuhu(data);
        console.log("Data diterima:", data);

        document.getElementById("suhu1").innerText = data.node1.suhu;
        document.getElementById("humidity1").innerText = data.node1.humidity;
        document.getElementById("watt1").innerText = data.node1.watt;

        document.getElementById("suhu2").innerText = data.node2.suhu;
        document.getElementById("humidity2").innerText = data.node2.humidity;
        document.getElementById("watt2").innerText = data.node2.watt;

        document.getElementById("suhu3").innerText = data.node3.suhu;
        document.getElementById("humidity3").innerText = data.node3.humidity;
        document.getElementById("watt3").innerText = data.node3.watt;

        document.getElementById("suhu4").innerText = data.node4.suhu;
        document.getElementById("humidity4").innerText = data.node4.humidity;
        document.getElementById("watt4").innerText = data.node4.watt;

        document.getElementById("chartSuhu_Node1").innerText = data.node1.suhu;
        document.getElementById("chartHumidity_Node1").innerText = data.node1.humidity;
        document.getElementById("chartWatt_Node1").innerText = data.node1.watt;

        document.getElementById("chartSuhu_Node2").innerText = data.node2.suhu;
        document.getElementById("chartHumidity_Node2").innerText = data.node2.humidity;
        document.getElementById("chartWatt_Node2").innerText = data.node2.watt;
        
        document.getElementById("chartSuhu_Node3").innerText = data.node3.suhu;
        document.getElementById("chartHumidity_Node3").innerText = data.node3.humidity;
        document.getElementById("chartWatt_Node3").innerText = data.node3.watt;
        
        document.getElementById("chartSuhu_Node4").innerText = data.node4.suhu;
        document.getElementById("chartHumidity_Node4").innerText = data.node4.humidity;
        document.getElementById("chartWatt_Node4").innerText = data.node4.watt;
    } catch (err) {
       console.error("Error parsing JSON: ", err);
}
});