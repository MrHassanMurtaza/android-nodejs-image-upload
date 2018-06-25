# :raised_hands: Upload Image from Android to Nodejs

When I was developing my senior year project at university, I faced a problem in uploading file (image file in my case) from Android to Nodejs server. After grinding for continous hours, I was able to find full working solution.

:fire: Steps:
1. Clone this Repository. You will get both android and nodejs code.
2. Open Nodejs folder and install required dependencies
```
npm install
```
3. Run nodejs code
```
node index
```
or just
```
node

```
4. Open Android code
5. Change IP address (if required) in MainActivity.java variable named "UPLOAD_URL". Which look something like this
```
String UPLOAD_URL = "http://localhost:3000/api/image";
```
6. Run app on your Android device.
7. That's it.

Note:
My Android Studio Version is 3.0, Gradle Build v3.3, Tested on Nexus 6p on Android P. It's working perfectly on my device :100:. 


# License

Licensed Under GPL 3.0.
