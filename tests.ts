// tests go here; this will not be compiled when this package is used as a library
input.onButtonPressed(Button.A, () => {
    motobit.invert(Motor.Left, false)
    motobit.invert(Motor.Left, false)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 80)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 80)
    motobit.enable(MotorPower.On)
})
input.onButtonPressed(Button.B, () => {
    motobit.invert(Motor.Left, false)
    motobit.invert(Motor.Left, false)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 20)
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 20)
    motobit.enable(MotorPower.On)
})
input.onButtonPressed(Button.AB, () => {
    motobit.enable(MotorPower.Off)
})
