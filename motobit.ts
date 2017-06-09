enum motor {
	//% block=Left
	left = 8448,
	//% block=Right
	right = 8192
}

enum direction {
	//% block=Forward
	forward = 0,
	//% block=Reverse
	reverse = 1
}

enum power {
	//%block=ON
	on = 28673,
	//%block=OFF
	off = 28672
}

/**
 * Functions to operate the moto:bit
 */
//% color=#f44242 icon="\uf1b9"
namespace motobit {	
	/**
	 * Sets the speed and direction of either the left motor or the right motor.
	 */
	//% blockId="setMotor" block="Set %motor_number |motor to move %path |at %speed| %|power"
	export function setMotor(motor_number: motor, path: direction, speed: number): void {		
		let pwr = 0
		
		speed = Math.abs(speed)
		if(speed > 100) {
			speed = 100
		}
		
		if(path==0) {
			pwr = pins.map(speed,0,100,0,127)
			pwr = 128 + pwr
		}
		else {
			pwr = pins.map(speed,0,100,127,0)
		}
		
		pins.i2cWriteNumber(89, (motor_number + pwr), NumberFormat.Int16BE)
	}
	
	/**
	 * Turns the motors on or off.
	 */
	//% blockId="enable" block="Turn motors %command"
	export function enable(command: power): void {
		pins.i2cWriteNumber(89, command, NumberFormat.Int16BE)
	}
	
	/**
	 * Changes the polarity of the selected motor. 
	 * i.e. Forward -> Backward and Backward -> Forward
	 */
	//% blockId="invert" block="Set %motor_number| motor invert to %invert|"
	export function invert(motor_number: motor, invert: boolean): void {
		let temp_number = 0
		if(invert) {
			temp_number = 1
		}
		if(motor_number == 8192) {
			pins.i2cWriteNumber(89, (4608 + temp_number), NumberFormat.Int16BE)
		}
		else {
			pins.i2cWriteNumber(89, (4864 + temp_number), NumberFormat.Int16BE)
		}
	}
}