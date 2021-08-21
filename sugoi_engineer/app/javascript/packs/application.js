import Rails from "@rails/ujs"
import ReactDOM from "react-dom"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "jquery"
import "bootstrap"
import App from "components"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const renderReactDOM = () => {
    const container = document.getElementById("app")
    if (container) {
        ReactDOM.render(<App />, container)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App />, document.getElementById("app"))
})

document.addEventListener("turbolinks:load", () => {
    ReactDOM.render(<App />, document.getElementById("app"))
})