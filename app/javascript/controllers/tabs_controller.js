import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button", "text", "url", "media"]
  connect() {
    this._showActiveTab("text")
  }
  toggle(event) {
    event.preventDefault()
    this._showActiveTab(event.target.dataset.tabId)
    if (event.target.dataset.tabId === "text") {
      this.textTarget.classList.remove("hidden")
      this.urlTarget.classList.add("hidden")
      this.mediaTarget.classList.add("hidden")
    } else if (event.target.dataset.tabId === "url") {
      this.textTarget.classList.add("hidden")
      this.urlTarget.classList.remove("hidden")
      this.mediaTarget.classList.add("hidden")
    } else if (event.target.dataset.tabId === "media") {
      this.textTarget.classList.add("hidden")
      this.urlTarget.classList.add("hidden")
      this.mediaTarget.classList.remove("hidden")
    } else {
      this.textTarget.classList.add("hidden")
      this.urlTarget.classList.add("hidden")
      this.mediaTarget.classList.add("hidden")
    }
  }

  _showActiveTab(tabId) {
    this.buttonTargets.forEach((button) => {
      if (button.dataset.tabId === tabId) {
        button.classList.add("bg-indigo-50", "text-black")
      } else {
        button.classList.remove("bg-indigo-50")
      }
    })
  }
}
