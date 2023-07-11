input.onButtonPressed(Button.A, function () {
	
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "tanqueLleno") {
        medirConductividad()
        radio.sendValue("conductividad", Conductividad)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
function medirConductividad () {
    Conductividad = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(Conductividad)
}
let Conductividad = 0
radio.setGroup(1)
Conductividad = 0
let Humedad = 0
