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
            this.user.run = 0;
            this.user.runColor = 'black';

            this.render();
            this._initEvents();
            //this.timerId = setInterval(this.loadData.bind(this), 3000);
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = queueTemplate(this.user);
        }

        /**
         * Load data from server and render
         */
        loadData() {
            Service.getData(this.user)
            .then((resp) => {
                this.user.data = resp;
                if (!this.user.data.gui) {
                    console.log(`Error! resp.gui = ${resp.gui}`);
                    this.user.data.gui = this.user.dataLocal.gui;
                };
                if (!this.user.data.dev) {
                    console.log(`Error! resp.dev = ${resp.dev}`);
                    this.user.data.dev = this.user.dataLocal.dev;
                }
            })
            .then((resp) => this.render())
            .catch((error) => console.log(`Error! ${error.stack}`));
        }

        /**
        * Обработка события submit (refresh) на queue
        * @param {Event} event
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для queue
            this.loadData();
        }

        /**
        * Развешиваем события
        */
        _initEvents() {
            this.el.addEventListener('submit', this._submitEvent.bind(this));
            this.el.addEventListener('click', this._onClick.bind(this));
         }

        /**
        * Включаем автообновление очереди команд
        * @param {Event} event
        */
        _onClick(event) {
            //event.preventDefault(); // Отмена действия браузера 'click' по-умолчанию для queue
            let item = event.target;
            switch (item.dataset.action) {
            case 'run':
                if (!this.user.run) {
                    this.timerId = setInterval(this.loadData.bind(this), 3000);
                    this.user.run = 1;
                    this.user.runColor = 'red';
                    //this.render();
                } else {
                    clearInterval(this.timerId);
                    this.user.run = 0;
                    this.user.runColor = 'black';
                    this.render();
                }
                break;
            }
        }
    }

    // export
    window.Queue = Queue;
})();
