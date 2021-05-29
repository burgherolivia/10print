

const w = process.stdout.columns
const char = ['⤧', '★', '♡', '▉', '≛', '☽', '▒']
const color = ['\x1b[30m', '\x1b[37m', '\x1b[33m']

function draw () {
  setTimeout(draw, 1000 / 12)
  let output = '\x1b[45m'
  for (let i = 0; i < w; i++) {
    let r = Math.floor(Math.random() * char.length)
    let c = Math.floor(Math.random() * color.length)
    output += color[c] + char[r]
  }
  console.log(output)
}

draw()
