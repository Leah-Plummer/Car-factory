/* */

const createChassis = () => {
    const newChassisObject = { }
    
    return newChassisObject
}

let chassis = createChassis()
console.log(chassis)

let chassisObject = createChassis()

const addBody = (chassisObject) => {
    chassisObject.body = "Fever"
    
    return chassisObject
}

chassisObject = addBody(chassisObject)

let chassisWithBody = addBody(chassis)
console.log(chassisWithBody)


const addWheels = (chassisObject) => {
    chassisObject.wheels = 4

    return chassisObject
}

chassisObject = addWheels(chassisObject)

let chassisWithWheels = addWheels(chassis)
console.log(chassisWithWheels)


const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"

    return chassisObject
}

chassisObject = addEngine(chassisObject)

let chassisWithEngine = addEngine(chassis)
console.log(chassisWithEngine)

const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"

    return chassisObject
}

chassisObject = addSteeringWheel(chassisObject)

let chassisWithSteeringWheel = addSteeringWheel(chassis)
console.log(chassis)

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"

    return chassisObject
}

chassisObject = addDriveTrain(chassisObject)

let chassisWithDriveTrain = addDriveTrain(chassis)
console.log(chassis)
