// tests go here; this will not be compiled when this package is used as a library
input.onButtonPressed(Button.A, () => {
    motobit.invert(motor.left, false)
    motobit.invert(motor.left, false)
    motobit.setMotor(motor.left, direction.forward, 80)
    motobit.setMotor(motor.right, direction.forward, 80)
    motobit.enable(power.on)
})
input.onButtonPressed(Button.B, () => {
    motobit.invert(motor.left, false)
    motobit.invert(motor.left, false)
    motobit.setMotor(motor.left, direction.reverse, 20)
    motobit.setMotor(motor.right, direction.reverse, 20)
    motobit.enable(power.on)
})
input.onButtonPressed(Button.AB, () => {
    motobit.enable(power.off)
})
