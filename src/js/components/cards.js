/**
 * Class is used to detect form HTMLelements (inputs, selects, textarea)
 * and to store their values as data-attribute to .opui-item, .opui-card and form.
 * That way we can write css to show/hide options based on value of specific option.
 * For example. show "Number of revisions" option only if "Revisions" option is enabled.
 */
export default class Cards {
    /**
     *
     * @param {String} selector
     * @param {Object} options
     * @returns
     */
    constructor(selector = '.opui-card', options = {}) {
        this.selector = selector;
        this.options = {
            ...{
                formElementsSelector: 'input, select, textarea',
                // Parent elements selectors where data-attribute will be stored
                dataAttributeSelectors: [
                    '.opui-item',
                    this.selector,
                    'form',
                ]
            },
            ...options
        }

        let cards = document.querySelectorAll(selector);

        if (cards && !cards.length) {
            return;
        }

        let instance = this;

        cards.forEach((card) => {
            ["change"].forEach((event) => {
                card.addEventListener(event, instance.eventsHandler.bind(instance), false);
            });

            // Set initial data-attributes and values
            card
                .querySelectorAll(instance.options.formElementsSelector)
                .forEach(element => {
                    element.dispatchEvent(new Event('change', { bubbles: true }));
                });
        });
    }

    /**
     * Get HTMLElement value and name attribute and store it to parent elements
     * which are defined by dataAttributeSelectors
     *
     * @param {Event} event
     * @returns
     */
    eventsHandler(event) {
        if (!event.target.matches(this.options.formElementsSelector)) {
            return;
        }

        let name = event.target.getAttribute('name');

        if (!name)
            return;

        name = name
            .replaceAll('_', '-')
            .replaceAll('[', '-')
            .replaceAll(']', '')
            .toLowerCase();

        let value = event.target.value;

        if (event.target.type === 'checkbox') {
            value = this.handleCheckboxChange(event.target);
        }

        this.options.dataAttributeSelectors.forEach(selector => {
            event.target
                .closest(selector)
                .setAttribute(`data-${name}`, value)
        })
    }

    /**
     * Problem is that input[type="checkbox"] may or may not
     * have value attribute, so we can't know for sure
     * which value to set when checkbox is checked.
     *
     * Also we can't know what is value when checkbox is not checked.
     * In that case we assume that there is input[type="hidden"] with value attribute.
     *
     * @param {HTMLElement} element
     * @return {String}
     */
    handleCheckboxChange(element) {
        let value = '0';

        if (element.checked) {
            // Try to get value attribute, fallback to "1"
            value = element.getAttribute('value') || "1";
        } else {
            // First check if there is hidden input with value, otherwise fallback to "0"
            if (element.previousElementSibling)
                value = element.previousElementSibling.hasAttribute('value') ? element.previousElementSibling.getAttribute('value') : '0';
        }

        return value;
    }
}
