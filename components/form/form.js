(function() {
    'use strict';

    /**
     * Компонента "Форма"
     */
    class Form {
        /**
         * @constructor
         * @param {Object} opts
         */
        constructor(opts) {
            this.el = opts.el;

            this.render();
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = 'Form';
        }
    }

    // export
    window.Form = Form;
})();
