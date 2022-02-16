
int irSensor = 14; // D5
int buzzer = 16; //D0
#include <ESP8266Webhook.h>
#include <ESP8266WiFi.h>

#define SERVER_IP "192.168.11.71:8000"
#define _SSID "suniltamang6189_2.4"      // Your WiFi SSID
#define _PASSWORD "CLB2723319"  // Your WiFi Password
#define KEY "b765VWF1Xppm3NF_7IDMgw"        // Webhooks Key
#define EVENT "fencealert"      // Webhooks Event Name

Webhook webhook(KEY, EVENT);    // Create an object.


void setup() {
  pinMode(irSensor, INPUT);
  Serial.begin(9600);
   WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(1000);

  // Connect to WiFi
  Serial.println();
  Serial.println();
  Serial.print("Connecting to: ");
  Serial.println(_SSID);
  WiFi.begin(_SSID, _PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print("-");
  }

  Serial.println("");
  Serial.println("WiFi Connected");

  // Print the IP address
  Serial.print("Use this URL to connect: ");
  Serial.print("http://");
  Serial.print(WiFi.localIP());
  Serial.println("/");
  // put your setup code here, to run once:

}

void loop() {
  // put your main code here, to run repeatedly:
  if (digitalRead(irSensor) == HIGH){
    tone(buzzer, 1000, 200);
    delay(1000);
    noTone(buzzer);
    tone(buzzer, 1000, 200);
    delay(1000);
    noTone(buzzer);
    tone(buzzer, 1000, 200);
    delay(1000);
    noTone(buzzer);
    delay(1000);
    Serial.println("Object Deteced");
    WiFiClient client;
    HTTPClient http;

    Serial.print("[HTTP] begin...\n");
    // configure traged server and url
    http.begin(client, "http://" SERVER_IP "/fence"); //HTTP
    http.addHeader("Content-Type", "application/json");

    Serial.print("[HTTP] POST...\n");
    // start connection and send HTTP header and body
    int httpCode = http.POST(("{}"));

    // httpCode will be negative on error
    if (httpCode > 0) {
      // HTTP header has been send and Server response header has been handled
      Serial.printf("[HTTP] POST... code: %d\n", httpCode);

      // file found at server
      if (httpCode == HTTP_CODE_OK) {
        const String& payload = http.getString();
        Serial.println("received payload:\n<<");
        Serial.println(payload);
        Serial.println(">>");
      }
    } else {
      Serial.printf("[HTTP] POST... failed, error: %s\n", http.errorToString(httpCode).c_str());
    }

    http.end();

    // trigger ifttt webhook event
  int response = webhook.trigger();
  if(response == 200)
    Serial.println("OK");
  else
    Serial.println("Failed");
  } else {
    Serial.println("Object not Deteced");
  }

  noTone(buzzer);

}
