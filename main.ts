basic.forever(function () {
    serial.writeValue("x", input.lightLevel())
    if (input.lightLevel() < 20) {
        basic.showIcon(IconNames.Heart)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.InBackground)
        for (let index = 0; index < 10; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(50)
            pins.digitalWritePin(DigitalPin.P0, 0)
            basic.pause(50)
        }
        basic.clearScreen()
    }
})
