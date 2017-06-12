enum Motor {
    //% block="left"
    Left = 8448,
    //% block="right"
    Right = 8192
}

enum MotorDirection {
    //% block="forward"
    Forward = 0,
    //% block="reverse"
    Reverse = 1
}

enum MotorPower {
    //%block="ON"
    On = 28673,
    //%block="OFF"
    Off = 28672
}

/**
 * Functions to operate the moto:bit
 */
//% color=#f44242 icon="\uf1b9" block="moto:bit"
namespace motobit {
	/**
	 * Sets the speed and direction of either the left motor or the right motor.
     * @param motor the motor to act on
     * @param direction forward or backward
     * @param speed percent of maximum speed, eg: 50
	 */
    //% blockId="motobit_setMotor" block="move %motor_number motor|motor %path|at %speed|%"
    //% speed.min=0 speed.max=100
    //% weight=80
    export function setMotorSpeed(motor: Motor, direction: MotorDirection, speed: number): void {
        let pwr = 0
        speed = Math.abs(speed)
        if (speed > 100) {
            speed = 100
        }

        if (direction == MotorDirection.Forward) {
            pwr = pins.map(speed, 0, 100, 0, 127)
            pwr = 128 + pwr
        }
        else {
            pwr = pins.map(speed, 0, 100, 127, 0)
        }

        pins.i2cWriteNumber(89, (motor + pwr), NumberFormat.Int16BE)
    }

	/**
	 * Turns the motors on or off.
	 */
    //% weight=90
    //% blockId="motobit_enable" block="turn motors %command"
    export function enable(command: MotorPower): void {
        pins.i2cWriteNumber(89, command, NumberFormat.Int16BE)
    }

	/**
	 * Changes the polarity of the selected motor.
	 * i.e. Forward -> Backward and Backward -> Forward
	 */
    //% blockId="motobit_invert" block="set %motor_number|motor invert to %invert"
    export function invert(motor: Motor, invert: boolean): void {
        const temp_number = invert ? 1 : 0;
        if (motor == Motor.Right) {
            pins.i2cWriteNumber(89, (4608 + temp_number), NumberFormat.Int16BE)
        }
        else {
            pins.i2cWriteNumber(89, (4864 + temp_number), NumberFormat.Int16BE)
        }
    }
}