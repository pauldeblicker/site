'use strict';

let componentHandler = (function() {
    'use strict';
    
    const registeredComponents = [];
    const registeredElements = [];

    function registerComponent(config) {
        if(!registeredComponents.includes(config)) {
            registeredComponents.push(config);
        }
    }

    function registerElement(element, constructorName) {
        let instance = new window[constructorName](element);

        registeredElements.push(instance);
    }

    function upgradeDom() {
        for (let i = 0; i < registeredComponents.length; i++) {
            upgradeComponent(registeredComponents[i]);
        }
    }

    function upgradeComponent(component) {
        let domElements = document.querySelectorAll(`.${component.cssClassName}`);

        for (let i = 0; i < domElements.length; i++) {
            registerElement(domElements[i], component.constructorName);
        }
    }
    
    function upgradeComponents() {
        for (let i = 0; i < registeredComponents.length; i++) {
            upgradeComponent(registeredComponents[i]);
        }
    }

    return {
        registerComponent,
        upgradeDom,
    };
})();

window.componentHandler = componentHandler;
window['componentHandler'] = componentHandler;

window.onload = () => {
    componentHandler.upgradeDom();
};
