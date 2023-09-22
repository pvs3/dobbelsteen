input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
