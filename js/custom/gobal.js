function render() {
  switch (window.location.hash) {
    case "#/focal-lengths": {
      console.log("Rendered: " + window.location.hash)
      drawFocalLengthsGraph()
      break
    }
    default:
      console.log("Ignored HashChange to " + window.location.hash)
  }
}

window.addEventListener("hashchange", render)
window.addEventListener("load", render)
