const process = require('process')
const conutil = require('./conutil.js')
const Buffer = require('./buffer.js')
const {draw} = require('./mesh.js')
const {Cube, Icosahedron} = require('./mesh-prefabs.js')
const transforms = require('./transforms.js')
const size = require('window-size')

const terminalSize = () => {
    let s = size.get()
    return s ? 
        [s.width, s.height] :
        [80, 24]
}

conutil.apply(console)

let cubeState = {
    mesh: Icosahedron(), 
    rot: [0,0],
    vel: [90, 90],
    timeout: 1000/30
}

var buffer = new Buffer(...terminalSize())

var update = (state) => {
    state.rot[0] = (state.rot[0] + state.vel[0] * state.timeout / 1000) % 360
    state.rot[1] = (state.rot[1] + state.vel[1] * state.timeout / 1000) % 360

    console.repos()
    buffer.resize(...terminalSize())
    buffer.fill()

    let middle = [buffer.width / 2, buffer.height / 2]
    let size = Math.min(buffer.width, buffer.height) / 4
    size = [size, size/2]

    draw(buffer, state.mesh, transforms.rotation(...state.rot), transforms.ortho(middle, size))
    buffer.present()

    setTimeout(update.bind(null, state), state.timeout)
}

console.reset();
update(cubeState)