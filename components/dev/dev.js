(function() {
    'use strict';

    /**
     * Компонента "Эмитатор ровера"
     */
    class Dev {
        /**
        * @constructor
        * @param {Object} opts
        */
        constructor(opts) {
            this.el = opts.el;
            this.user = opts.user;

            this.render();
            this._initEvents();
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = devTemplate(this.user);
        }

        /**
         * Эмитируем работу ровера
         */
        run() {
            Service.getData(this.user)
            .then((resp) => this.user.dataDev.gui = resp.gui)
            .then((resp) => {
                for (let key in this.user.dataDev.gui) {
                    if (this.user.dataDev.gui.hasOwnProperty(key)) {
                        this.user.dataDev.dev[key].push(this.user.dataDev.gui[key]);
                    }
                }
            });
        }

        /**
        * Обработка события submit на dev
        * @param {Event} event
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для dev
            this.run();
        }

        /**
        * Развешиваем события
        */
        _initEvents() {
            this.el.addEventListener('submit', this._submitEvent.bind(this));
         }
    }

    // export
    window.Dev = Dev;
})();
