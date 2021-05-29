

const w = process.stdout.columns

function draw () {
  setTimeout(draw, 1000)
  let output = '\x1b[45m'
  for (let i = 0; i < w; i++) {
    if (Math.random() > 0.5) {
      output += '\\'
    } else {
      output += '/'
    }
  }
  console.log(output)
}

draw()
