import renderFocalLengthsGraph from "./custom/slides/focalLength"
import renderApertureGraph from "./custom/slides/aperture"
import renderISOGraph from "./custom/slides/iso"
import renderShutterSpeedGraph from "./custom/slides/shutterSpeed"

function render() {
  switch (window.location.hash) {
    case "#/shutter-speed": {
      console.log("Rendered: " + window.location.hash)
      renderShutterSpeedGraph()
      break
    }
    case "#/aperture": {
      console.log("Rendered: " + window.location.hash)
      renderApertureGraph()
      break
    }
    case "#/iso": {
      console.log("Rendered: " + window.location.hash)
      renderISOGraph()
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
