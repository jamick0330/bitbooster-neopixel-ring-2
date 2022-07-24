// Pressing A turns all pixels in RANGE to RED and all pixels in RANGE 2 to ORANGE
input.onButtonPressed(Button.A, function () {
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range2.showColor(neopixel.colors(NeoPixelColors.Orange))
    strip.show()
})
// Pressing B turns all pixels in RANGE to ORANGE and all pixels in RANGE 2 to RED
input.onButtonPressed(Button.B, function () {
    range.showColor(neopixel.colors(NeoPixelColors.Orange))
    range2.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
let range2: neopixel.Strip = null
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
// Always use this block to tell Micro:bit that Neopixels are connected. 10 pixels on Bit:booster + 16 pixels on pixel ring = 26 LEDs
strip = neopixel.create(DigitalPin.P2, 26, NeoPixelMode.RGB)
// Create a variable RANGE to track first half (13 of the pixels)
range = strip.range(0, 13)
// Create a variable RANGE2 to track second half (13 of the pixels)
range2 = strip.range(13, 13)
strip.setBrightness(33)
