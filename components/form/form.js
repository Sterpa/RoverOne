(function() {
    'use strict';

    /**
     * Компонента "Передача команд"
     */
    class Form {
        /**
         * @constructor
         * @param {Object} opts
         */
        constructor(opts) {
            this.el = opts.el;
            this.data = {
                title: 'Передача команд',
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
            this._myInitEvents();
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = formTemplate(this.data);
        }

        /**
         * Upload data to the server
         * @return {Promise<*>}
         */
        uploadData() {
            return Service.putItems(this.data.cmds)
            .catch((error) => {
                console.log('Error fetch(uploadData): ' + error.message);
            });
        }

        /**
        * Триггер
        * @param {Event} event
        */
        _myTrigger(event) {
            event.preventDefault(); // Отмена действия браeзера 'submit' по-умолчанию для формы
            let eventData = {
                param: JSON.parse(this.el.querySelector('input[name="param"]').value),
                forceCmd: JSON.parse(this.el.querySelector('input[name="forceCmd"]').value),
                cmd: JSON.parse(this.el.querySelector('input[name="cmd"]').value)
            };
            this.data.cmds = eventData;
            this.uploadData();
            event.target.reset();
        }

        /**
        * Развешиваем события
        */
        _myInitEvents() {
            this.el.addEventListener('submit', this._myTrigger.bind(this));
        }
    }

    // export
    window.Form = Form;
})();
