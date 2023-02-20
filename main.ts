input.onPinPressed(TouchPin.P0, function () {
    basic.showString("even geduld de ")
})
input.onButtonPressed(Button.A, function () {
    basic.pause(2000)
    pins.analogWritePin(AnalogPin.P0, input.lightLevel())
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
})
input.onPinPressed(TouchPin.P1, function () {
	
})
basic.showString("hallo!")
basic.clearScreen()
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . # .
        # . . . #
        `)
})
