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
            this.data = {
                title: 'Очередь команд',
                cmds: {
                    param: {
                        alt: 200,
                        speed: 100,
                        dist: 2500
                    },
                    forceCmd: ['CMD1', 'CMD2'],
                    cmd: ['CMD01', 'CMD02', 'CMD03']
                }
            };

            this.render();
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = queueTemplate(this.data);
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
