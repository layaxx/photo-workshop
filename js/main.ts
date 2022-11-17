import renderFocalLengthsGraph from "./custom/slides/focalLength"
import renderApertureGraph from "./custom/slides/aperture"

function render() {
  switch (window.location.hash) {
    case "#/aperture": {
      console.log("Rendered: " + window.location.hash)
      renderApertureGraph()
      break
    }
    case "#/focal-lengths": {
      console.log("Rendered: " + window.location.hash)
      renderFocalLengthsGraph()
      break
    }
    default:
      console.log("Ignored HashChange to " + window.location.hash)
  }
}

window.addEventListener("hashchange", render)
window.addEventListener("load", render)

export {}
