const {Mesh} = require('./mesh.js')

const Cube = () => {
    let points = [
        [-1,+1,-1],
        [+1,+1,-1],
        [-1,+1,+1],
        [+1,+1,+1],

        [-1,-1,-1],
        [+1,-1,-1],
        [-1,-1,+1],
        [+1,-1,+1],
    ]

    let links = [
        [0, 1],
        [0, 2],
        [1, 3],
        [2, 3],
        
        [4, 5],
        [4, 6],
        [5, 7],
        [6, 7],
        
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7]
    ]

    return Mesh(points, links)
}

module.exports = {
    Cube
}