(function() {
    'use strict';

    // import
    let Form = window.Form;
    let Service = window.Service;

    /**
     * Компонента "Приложение"
     */
    class App {
        /**
        * @constructor
        * @param {Object} opts
        */
        constructor(opts) {
            this.el = opts.el;
            this.form = new Form({
                el: el.querySelector('.js-form')
            });
        }
    }

    // export
    window.App = App;
})();
