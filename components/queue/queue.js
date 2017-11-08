(function() {
    'use strict';

    /**
     * Компонента "Очередь команд"
     */
    class Queue {
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
            this.el.innerHTML = queueTemplate(this.user);
        }

        /**
         * Load data from server
         * @return {Promise<*>}
         */
        loadData() {
            return Service.getItems(this.user)
            .then((resp) => {
                this.user.data = resp;
                this.render();
            })
            .catch((error) => {
                console.log('Error fetch(loadData): ' + error.message);
            });
        }

        /**
        * Парсим отправляемые параметры и команды
        * @param {Event} event
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для формы
            this.loadData();
            // .then((resp) => {
                // this.render();
            // });
        }

        /**
        * Развешиваем события
        */
        _initEvents() {
            this.el.addEventListener('submit', this._submitEvent.bind(this));
        }
    }

    // export
    window.Queue = Queue;
})();
