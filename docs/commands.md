# Commands

## land() → nil

Public: Initiates a landing sequence.

Returns nil

## takeoff() → nil

Public: Initiates take off sequence.

Returns nil

## hover() → nil

Public: Makes the crazyflie hover in a position.

Returns nil

## setPitch(deg) → nil

Public: Orders crazyflie to go forward or backward by the amount specified by deg.

- **deg** - The degrees which to return data

Returns nil

## setYaw(deg) → nil

Public: Orders crazyflie to turn left or right by the amount specified by deg.

- **deg** - The degrees which to return data

Returns nil

## setThrust(accelerate) → nil

Public: Orders crazyflie to accelerate.

- **accelerate** - The acceleration which to return data

Returns nil

## shutdown() → nil

Public: Shutdown the device.

Returns nil

## setParam(param, value) → (param, value)

Public: Set the parameters for crazyflie.

- **param** - params
- **value** - params

Returns (param, value)