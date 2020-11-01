##ADB

###Connect over WIFI

adb tcpip 5555
adb connect <DEVICE_IP_ADDRESS>:5555
###Keystore generation
keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000