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
            this.user = opts.user;

            this.render();
            this._InitEvents();
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = formTemplate(this.user);
        }

        /**
         * Upload data to the server
         * @return {Promise<*>}
         */
        uploadData() {
            return Service.putItems(this.user)
            .catch((error) => {
                console.log('Error fetch(uploadData): ' + error.message);
            });
        }

        /**
        * Парсим отправляемые параметры и команды
        * @param {Event} event
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для формы
            let params = this.el.querySelector('input[name="params"]').value;
            let forceCmds = this.el.querySelector('input[name="forceCmds"]').value;
            let cmds = this.el.querySelector('input[name="cmds"]').value;
            this.user.data.gui = {
                params: JSON.parse(params),
                forceCmds: JSON.parse(forceCmds),
                cmds: JSON.parse(cmds),
                sendTime: new Date()
            };
            this.uploadData();
            event.target.reset();
        }

        /**
        * Развешиваем события
        */
        _InitEvents() {
            this.el.addEventListener('submit', this._submitEvent.bind(this));
        }
    }

    // export
    window.Form = Form;
})();
