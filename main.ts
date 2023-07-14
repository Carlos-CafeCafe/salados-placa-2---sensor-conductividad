radio.onReceivedString(function (receivedString) {
    if (receivedString == "tanqueLleno") {
        medirConductividad()
        radio.sendValue("conductividad", Conductividad)
    }
})
function medirConductividad () {
    Conductividad = pins.analogReadPin(AnalogPin.P0)
    proporcionalidad = pins.map(
    Conductividad,
    0,
    1023,
    0,
    100
    )
    basic.showNumber(Math.round(proporcionalidad))
}
let proporcionalidad = 0
let Conductividad = 0
let Humedad = 0
radio.setGroup(1)
Conductividad = 0
