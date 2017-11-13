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
            this.name = ['params', 'forceCmds', 'cmds'];

            this.render();
            this._initEvents();
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = formTemplate(this.user);
        }

        /**
         * Upload data to the server and reset
         * @return {Promise<*>}
         */
        uploadData() {
            let params = this.el.querySelector('textarea[name="params"]').value;
            if (params[0] != '{') {
                params = '{' + params + '}';
            };
            let forceCmds = this.el.querySelector('textarea[name="forceCmds"]').value;
            if (forceCmds[0] != '[') {
                forceCmds = '[' + forceCmds + ']';
            };
            let cmds = this.el.querySelector('textarea[name="cmds"]').value;
            if (cmds[0] != '[') {
                cmds = '[' + cmds + ']';
            };
            try {
                this.user.data.guiLocal = {
                    params: JSON.parse(params),
                    forceCmds: JSON.parse(forceCmds),
                    cmds: JSON.parse(cmds),
                    sendTime: new Date()
                };
            } catch (error) {
                alert('Error ' + error.stack);
                console.log(error);
                return new Promise((resolve, reject) => {
                    //throw error;
                });
            };
            return Service.putItems(this.user)
            .then((resp) => {
                this.render();
            })
            .catch((error) => {
                console.log('Error fetch(uploadData): ' + error.stack);
            });
        }

        /**
        * Обработка события submit (send) на form и reset
        * @param {Event} event
        * @return {Promise<*>}
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для формы
            return this.uploadData()
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
    window.Form = Form;
})();
