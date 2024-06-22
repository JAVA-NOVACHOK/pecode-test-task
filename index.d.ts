declare namespace Cypress {
    interface Chainable<Subject> {
        /**
     *Custom command that types a string into a input field
     @param {String} selector Name of the selector
     @param {String} text Text to type into the filed
     */    typeInField(selector: string, text: string): Chainable<any>;
    /**
     *Custom command that types a string into a input field
     @param {String} selector Name of the selector
     */    isElementPresent(selector: string): Chainable<any>;
     /**
     *Custom command that types a string into a input field
     @param {String} selector Name of the selector
     @param {String} placeholder Placeholder for the element
     */ isPlaceholderCorrect(selector: string, placeholder: string): Chainable<any>;
     /**
     *Custom command that types a string into a input field
     @param {String} selector Name of the selector
     @param {String} text Text of the element
    */ elementHasText(selector: string, text: string): Chainable<any>;
    /**
     * *Custom command that validates presents of the element by selector and text
     * @param {String} selector Name of the selector
     * @param {String} text Text of the element
     * */ elementExistsBySelectorAndText(selector: string, text: string): Chainable<any>;
    }
}