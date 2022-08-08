radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 135 + value * 22)
    } else if (name == "b") {
        if (value == 1) {
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
        } else if (value == 3) {
            wuKong.setMotorSpeed(wuKong.MotorList.M1, -100)
        } else if (value == 5) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 508, 476, 255, 255, 150, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        } else {
            wuKong.stopAllMotor()
        }
    } else {
    	
    }
})
basic.showIcon(IconNames.Chessboard)
radio.setGroup(1)
wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 135)
basic.showIcon(IconNames.Butterfly)
