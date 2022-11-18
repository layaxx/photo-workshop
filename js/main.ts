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
import renderColorBalanceGraph, {
  transition as colorBalanceTransition,
} from "./custom/slides/colorBalance"
import renderThirdsGraph, {
  transition as thirdsTransition,
  transitionVertical as thirdsTransitionVertical,
  transitionHorizontal as thirdsTransitionHorizontal,
} from "./custom/slides/composition"

function render() {
  if (window.location.hash.startsWith("#/aperture")) {
    console.log("Rendered: " + window.location.hash)
    apertureTransition()
  }
  if (window.location.hash.startsWith("#/focal-lengths")) {
    console.log("Rendered: " + window.location.hash)
    transition()
  }
  if (window.location.hash.startsWith("#/iso")) {
    console.log("Rendered: " + window.location.hash)
    ISOTransition()
  }
  if (window.location.hash.startsWith("#/shutter-speed")) {
    console.log("Rendered: " + window.location.hash)
    shutterSpeedTransition()
  }
  if (window.location.hash.startsWith("#/color-balance")) {
    console.log("Rendered: " + window.location.hash)
    colorBalanceTransition()
  }
  if (window.location.hash.startsWith("#/composition")) {
    console.log("Rendered: " + window.location.hash)
    thirdsTransition()
  }

  if (window.location.hash.startsWith("#/composition-img-vert")) {
    console.log("Rendered: " + window.location.hash)
    thirdsTransitionVertical()
  } else if (window.location.hash.startsWith("#/composition-img")) {
    console.log("Rendered: " + window.location.hash)
    thirdsTransitionHorizontal()
  }

  console.log("Ignored HashChange to " + window.location.hash)
}

window.addEventListener("hashchange", render)
window.addEventListener("load", render)

renderFocalLengthsGraph()
renderISOGraph()
renderApertureGraph()
renderShutterSpeedGraph()
renderColorBalanceGraph()
renderThirdsGraph()
