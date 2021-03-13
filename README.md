# Arduino-web-communication

first time setup:
1. Upload the "standard firmata" protocol to you arduino (I use "standard firmata plus")
    learn more at https://www.arduino.cc/en/Reference/Firmata
    also note the PORT the arduino is connected to
2. make sure you have node.js installed
    learn more at https://nodejs.org/en/
3. open Terminal in the directory of the repository and type "npm install"
4. make sure the arduino is always connected to the right PORT when running the program

Starting the program:
1. open Terminal in the directory of the repository
2. type "node ." or "node index.js"
3. to stop, hit CRTL + C two times or type ".exit"

How to change the Arduino Port:
1. open index.js
2. change const arduinoPort = "COM5"; to fit your port
3. save, exit and restart the program

How to change the localhost port (this shouldnt be necessary):
1. open index.js
2. change const hostingPORT = 8081; to fit your desired localhost port
3. open /web/api.js and change the URIs accordingly
4. save, exit and restart the program
