radio.onReceivedValue(function (name, value) {
    if (name == "DirLeftWheel") {
        leftwheel = value
    } else if (name == "DirRightWheel") {
        rightwheel = value
    } else if (name == "speed") {
        speedintensity = value
    } else {
        _break = value
    }
})
let checkdistance = 0
let _break = 0
let speedintensity = 0
let rightwheel = 0
let leftwheel = 0
radio.setGroup(21)
basic.forever(function () {
    checkdistance = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (checkdistance > 5) {
        if (leftwheel) {
            pins.digitalWritePin(DigitalPin.P15, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0)
        }
        if (rightwheel) {
            pins.digitalWritePin(DigitalPin.P14, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P14, 0)
        }
        if (speedintensity == 6) {
            pins.analogWritePin(AnalogPin.P0, 50)
            pins.analogWritePin(AnalogPin.P1, 50)
        } else if (speedintensity == 5) {
            pins.analogWritePin(AnalogPin.P0, 200)
            pins.analogWritePin(AnalogPin.P1, 200)
        } else if (speedintensity == 4) {
            pins.analogWritePin(AnalogPin.P0, 600)
            pins.analogWritePin(AnalogPin.P1, 600)
        } else {
            pins.analogWritePin(AnalogPin.P0, 800)
            pins.analogWritePin(AnalogPin.P1, 800)
        }
        if (_break) {
            pins.digitalWritePin(DigitalPin.P16, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
})
