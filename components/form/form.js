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
        * Парсим и отправляем параметры и команды
        * @param {Event} event
        * @return {Promise<*>}
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для формы
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
                alert('Ошибка ' + error.name + ': ' + error.message + '\n' + error.stack);
                console.log(error);
                return;
            };
            return this.uploadData()
            .then((resp) => {
                event.target.reset();
            })
            .catch((error) => {
                console.log('Error fetch(_refresh): ' + error.message);
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
