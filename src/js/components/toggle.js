export default class Toggle {
    /**
     * Constructor.
     *
     * @return {Void}
     */
    constructor() {
        let toggles = document.querySelector(".opui-toggle");

        if (!toggles) return;

        toggles.addEventListener("click", this.toggleClickEventHandler);
    }

    /**
     * opui-toggle click event handler.
     *
     * @param {Object} e
     * @return {Void}
     */
    toggleClickEventHandler(e) {
        this.classList.toggle("opui-toggle-off");
        this.classList.toggle("opui-toggle-on");

        let handle = this.querySelector(".opui-toggle-handle");
        handle.classList.toggle("opui-toggle-handle-off");
        handle.classList.toggle("opui-toggle-handle-on");

        let label = this.querySelector(".opui-toggle-label");
        let labelOn = label.getAttribute("data-label-on") || "On";
        let labelOff = label.getAttribute("data-label-off") || "Off";
        let currentText = label.innerText;

        label.innerText = currentText == labelOn ? labelOff : labelOn;

        this.parentNode
            .querySelector('[type="checkbox"]')
            .toggleAttribute("checked");
    }
}
