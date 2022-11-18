import renderFocalLengthsGraph, {
  transition,
} from "./custom/slides/focalLength"
import renderApertureGraph, {
  transition as apertureTransition,
} from "./custom/slides/aperture"
import renderISOGraph, {
  transition as ISOTransition,
} from "./custom/slides/iso"
import renderShutterSpeedGraph, {
  transition as shutterSpeedTransition,
} from "./custom/slides/shutterSpeed"

function render() {
  switch (window.location.hash) {
    case "#/aperture": {
      console.log("Rendered: " + window.location.hash)
      apertureTransition()
      break
    }
    case "#/focal-lengths": {
      console.log("Rendered: " + window.location.hash)
      transition()
      break
    }
    case "#/iso": {
      console.log("Rendered: " + window.location.hash)
      ISOTransition()
      break
    }
    case "#/shutter-speed": {
      console.log("Rendered: " + window.location.hash)
      shutterSpeedTransition()
      break
    }
    default:
      console.log("Ignored HashChange to " + window.location.hash)
  }
}

window.addEventListener("hashchange", render)
window.addEventListener("load", render)

renderFocalLengthsGraph()
renderISOGraph()
renderApertureGraph()
renderShutterSpeedGraph()
