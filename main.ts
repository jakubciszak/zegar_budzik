input.onPinPressed(TouchPin.P1, function () {
    basic.showString("" + Godzina_alarm + (":" + Minuta_alarm))
    Godzina_alarm += 1
})
input.onButtonPressed(Button.AB, function () {
    Minuta_alarm += 1
    basic.showString("" + Godzina_alarm + (":" + Minuta_alarm))
})
input.onButtonPressed(Button.A, function () {
    Godzina += 1
})
input.onButtonPressed(Button.B, function () {
    Minuta += 1
})
let Minuta1 = 0
let Minuta10 = 0
let Godzina1 = 0
let Godzina10 = 0
let Minuta = 0
let Godzina = 0
let Minuta_alarm = 0
let Godzina_alarm = 0
let _4digit = grove.createDisplay(DigitalPin.P8, DigitalPin.P14)
basic.forever(function () {
    basic.pause(60000)
    Minuta += 1
    if (Minuta >= 60 && !(input.buttonIsPressed(Button.B))) {
        Godzina += 1
    }
})
basic.forever(function () {
    if (Godzina == Godzina_alarm && Minuta == Minuta_alarm) {
        while (!(input.logoIsPressed()) && !(Minuta - Minuta_alarm >= 2)) {
            music.playMelody("C5 - C5 - C5 - C5 - ", 250)
            music.playMelody("C E G B C5 A F D ", 250)
        }
    }
})
basic.forever(function () {
    _4digit.bit(Godzina10, 0)
    _4digit.bit(Godzina1, 1)
    _4digit.bit(Minuta10, 2)
    _4digit.bit(Minuta1, 3)
})
basic.forever(function () {
    music.setVolume(pins.analogReadPin(AnalogPin.P2))
})
basic.forever(function () {
    if (Godzina > 9) {
        Godzina1 = Godzina % 10
        Godzina10 = (Godzina - Godzina1) / 10
    } else {
        Godzina1 = Godzina
        Godzina10 = 0
    }
})
basic.forever(function () {
    if (Godzina > 23) {
        Godzina = 0
    }
    if (Minuta >= 60) {
        Minuta = 0
    }
})
basic.forever(function () {
    if (Minuta_alarm >= 60) {
        Minuta_alarm = 0
    }
    if (Godzina_alarm > 23) {
        Godzina_alarm = 0
    }
})
basic.forever(function () {
    basic.pause(1000)
    _4digit.point(true)
    basic.pause(1000)
    _4digit.point(false)
})
basic.forever(function () {
    if (Minuta > 9) {
        Minuta1 = Minuta % 10
        Minuta10 = (Minuta - Minuta1) / 10
    } else {
        Minuta1 = Minuta
        Minuta10 = 0
    }
})
