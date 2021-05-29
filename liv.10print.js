
const RESET = '\x1b[0m'

const sw = process.stdout.columns
const char = ['⤧', '★', '♡', '▉', '≛', '☽', '▒']
const color = ['\x1b[30m', '\x1b[37m', '\x1b[33m']

let w = 0
let d = 1

function draw () {
  setTimeout(draw, 1000 / 12)
  if (w > sw - 1 || w < 0) {
    d = -d
  }
  w += d
  let output = '\x1b[45m'
  for (let i = 0; i < w; i++) {
    let r = Math.floor(Math.random() * char.length)
    let c = Math.floor(Math.random() * color.length)
    output += color[c] + char[r]
  }
  console.log(output)
}

draw()
