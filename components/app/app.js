(function() {
    'use strict';

    // import
    let Form = window.Form;
    let Queue = window.Queue;
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
                el: this.el.querySelector('.js-app-form')
            });

            this.queue = new Queue({
                el: this.el.querySelector('.js-app-queue')
            });
        }
    }

    // export
    window.App = App;
})();
