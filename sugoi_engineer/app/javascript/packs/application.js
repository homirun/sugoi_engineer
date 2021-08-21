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

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App />, document.getElementById("app"))
})

// turbolinksによる画面遷移時は DOMContentLoaded ではなく turbolinks:load イベントが発火する
document.addEventListener("turbolinks:load", () => {
    ReactDOM.render(<App />, document.getElementById("app"))
})