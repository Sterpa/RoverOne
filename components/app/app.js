(function() {
    'use strict';

    // import
    let Form = window.Form;
    let Service = window.Service;

    /**
     * Компонента "Форма"
     */
    class App {
        /**
         * @param {Object} param0
         * @param {HTMLElement} param0.el
         */
        constructor({el}) {
            this.el = el;

            this.form = new Form({
                el: el.querySelector('.js-form')
            });
        }
    }

    // export
    window.App = App;
})();
