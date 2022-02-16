int redLed = 5;
int greenLed = 4;
int buzzer = 16;
int smokeA0 = A0;
// Your threshold value
int sensorThres = 300;
#include <ESP8266Webhook.h>
#include <ESP8266WiFi.h>

#define SERVER_IP "192.168.11.71:8000"
#define _SSID "suniltamang6189_2.4"      // Your WiFi SSID
#define _PASSWORD "CLB2723319"  // Your WiFi Password
#define KEY "b765VWF1Xppm3NF_7IDMgw"        // Webhooks Key
#define EVENT "smokealert"      // Webhooks Event Name

Webhook webhook(KEY, EVENT);    // Create an object.


void setup() {
  pinMode(redLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  pinMode(buzzer, OUTPUT);
  pinMode(smokeA0, INPUT);
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
}

void loop() {
  int smokeValue = analogRead(smokeA0);

  Serial.print("Pin A0: ");
  Serial.println(smokeValue);
  // Checks if it has reached the threshold value
  if (smokeValue > sensorThres)
  {
    digitalWrite(redLed, HIGH);
    digitalWrite(greenLed, LOW);
    tone(buzzer, 1000, 200);
    delay(1000);
    noTone(buzzer);

    Serial.println("Smoke detected");
    Serial.println(String(smokeValue));
    WiFiClient client;
    HTTPClient http;

    Serial.print("[HTTP] begin...\n");
    // configure traged server and url
    http.begin(client, "http://" SERVER_IP "/smoke"); //HTTP
    http.addHeader("Content-Type", "application/json");

    Serial.print("[HTTP] POST...\n");
    // start connection and send HTTP header and body
    int httpCode = http.POST(("{\"threshold\": " + String(smokeValue) + "}"));

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
  int response = webhook.trigger(String(smokeValue));
  if(response == 200)
    Serial.println("OK");
  else
    Serial.println("Failed");
    
  }
  else
  {
    digitalWrite(redLed, LOW);
    digitalWrite(greenLed, HIGH);
    noTone(buzzer);
    Serial.println("nothing");
  }
  delay(1000);
}
