input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    basic.pause(100)
    edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
})
basic.forever(function () {
    music.setVolume(edubitPotentioBit.readPotValue() / 4)
})
