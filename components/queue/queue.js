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
            this.timerId = setInterval(this.loadData.bind(this), 1000);
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = queueTemplate(this.user);
        }

        /**
         * Load data from server and render
         * @return {Promise<*>}
         */
        loadData() {
            return Service.getItems(this.user)
            .then((resp) => {
                this.user.data = resp;
            })
            .then((resp) => {
                this.render();
            })
            .catch((error) => {
                console.log('Error fetch(loadData): ' + error.stack);
            });
        }

        /**
        * Обработка события submit (refresh) на queue
        * @param {Event} event
        * @return {Promise<*>}
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для формы
            return this.loadData()
            .catch((error) => {
                console.log('Error fetch(_submitEvent): ' + error.stack);
            });
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
