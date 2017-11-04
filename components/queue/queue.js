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
            return Service.getItems()
            .then((resp) => {
                this.data = resp;
            })
            .catch((error) => {
                console.log('Error fetch(loadData): ' + error.message);
            });
        }
    }

    // export
    window.Queue = Queue;
})();
