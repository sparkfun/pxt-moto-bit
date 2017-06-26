# Moto:bit

![SparkFun Moto:bit](https://raw.githubusercontent.com/sparkfun/pxt-moto-bit/master/icon.png)  

The package adds support for the **moto:bit** add-on board from SparkFun.

TODO: To use this package, go to https://pxt.microbit.org, click ``Add package`` and search for **moto-bit**.

### ~ hint

Not currently integrated into pxt.  It must be manually added.  This package is still under development and subject to changes.

### ~

## Usage

The package adds support for the **moto:bit** add-on board from SparkFun.

* [moto:bit](https://www.sparkfun.com/products/14213)
* [Shadow Chasis](https://www.sparkfun.com/products/13301)
* [Hobby Gearmotor](https://www.sparkfun.com/products/13302)
* [Wheel Pair](https://www.sparkfun.com/products/13259)
* [RedBot Sensor - Line Follower](https://www.sparkfun.com/products/11769)
* [ine Follower Array](https://www.sparkfun.com/products/13582)
* [RedBot Sensor - Mechanical Bumper](https://www.sparkfun.com/products/11999)
* [Servo Extention Cable](https://www.sparkfun.com/products/13164)

### Micro:bit Pins Used 

The following micro:bit pins are used for analog and digital sensors, motor driving:  

* ``P0`` -- Analog Input 0
* ``P1`` -- Analog Input 1
* ``P2`` -- Analog Input 2
* ``P8`` -- Digital Input/Output
* ``P12`` -- Digital Input/Output 
* ``P14`` -- Digital Input/Output
* ``P15`` -- Servo Motor
* ``P16`` -- Servo Motor
* ``P19`` -- motor driver - SCL
* ``P20`` -- motor driver - SDA 

### Set Motor Speed

To set the speed and direction for a motor, place the `|set motor|` block.
The block takes three parameters: motor select, direction, and speed.

* The motor select must be either `Left` or `Right`
* Direction must be either `Forward` or `Reverse`
* Speed is an integer value between `0` and `100`

```blocks
motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
```

### Invert Motor Directon

When a motor turns opposite to the direction that was declared, the `invert` 
block may be used. The block accepts two parameters: motor select, and a 
boolean variable. When the boolean is set to `true`, the motor direction is 
inverted so that `Forward` no longer causes the motor to spin in `Reverse`, 
but rather `Forward`.

* The motor select must be either `Left` or `Right`
* Invert must be either `true` or `false`

```blocks
motobit.invert(Motor.Left, true)
```

### Enabling Motors

Regardless of the set motor speed, before the motors will turn on the switch on moto:bit
must be set to **"Run Motors"**, and the enable motors command must be set to `ON`

* Motor enable must be either `On` or `Off`.

```blocks
motobit.enable(MotorPower.On)
```

## Examples

### Example: Receiving a packet of data over wireless

The following program reads a string to control the direction of two motors.

```blocks
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    // Drive forward
    if (receivedNumber == 128) {
        led.plot(2, 0)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        motobit.enable(MotorPower.On)
    } else {
        led.unplot(2, 0)
    }
    // Turn left
    if (receivedNumber == 64) {
        led.plot(0, 2)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        motobit.enable(MotorPower.On)
    } else {
        led.unplot(0, 2)
    }
    // Turn right
    if (receivedNumber == 32) {
        led.plot(4, 2)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        motobit.enable(MotorPower.On)
    } else {
        led.unplot(4, 2)
    }
    // Drive in reverse
    if (receivedNumber == 16) {
        led.plot(2, 4)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        motobit.enable(MotorPower.On)
    } else {
        led.unplot(2, 4)
    }
    // Stop
    if (receivedNumber == 0) {
        motobit.enable(MotorPower.Off)
    }
})
radio.setGroup(13)
```

## License

MIT

## Supported targets

* for PXT/microbit

```package
motobit=github:sparkfun/pxt-moto-bit
```