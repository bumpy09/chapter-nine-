basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        edubitMotors.setServoPosition(ServoChannel.S1, 1)
    } else if (input.buttonIsPressed(Button.B)) {
        edubitMotors.setServoPosition(ServoChannel.S1, 180)
    } else {
        edubitMotors.setServoPosition(ServoChannel.S1, 90)
    }
})
