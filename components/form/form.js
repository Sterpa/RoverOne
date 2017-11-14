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
            this._initEvents();
        }

        /**
         * Создаем HTML
         */
        render() {
            this.el.innerHTML = formTemplate(this.user);
        }

        /**
         * Собираем новые команды
         * @return {Promise<*>}
         */
        getNewDataLocal() {
            return new Promise((resolve, reject) => {
                let params = this.el.querySelector('textarea[name="params"]').value;
                if (params[0] != '{') {
                    params = `{${params}}`;
                };
                let forceCmds = this.el.querySelector('textarea[name="forceCmds"]').value;
                if (forceCmds[0] != '[') {
                    forceCmds = `[${forceCmds}]`;
                };
                let cmds = this.el.querySelector('textarea[name="cmds"]').value;
                if (cmds[0] != '[') {
                    cmds = `[${cmds}]`;
                };
                try {
                    this.user.dataLocal.gui = {
                        params: JSON.parse(params),
                        forceCmds: JSON.parse(forceCmds),
                        cmds: JSON.parse(cmds),
                        sendTime: new Date()
                    };
                } catch (error) {
                    throw error;
                };
                resolve(this.user.dataLocal.gui);
            });
        }

        /**
         * Upload data to the server and render
         * @return {Promise<*>}
         */
        uploadData() {
            return this.getNewDataLocal()
            .then((resp) => {
                return Service.putGui(this.user)
                .then((resp) => {
                    this.render();
                })
                .catch((error) => {
                    console.log(`Error (putGui) ${error.stack}`);
                });
            })
            .catch((error) => {
                console.log(`Error (getNewDataLocal) ${error.stack}`);
            });
        }

        /**
        * Обработка события submit на форме
        * @param {Event} event
         * @return {Promise<*>}
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для формы
            return this.uploadData()
            .catch((error) => {
                console.log(`Error (uploadData) ${error.stack}`);
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
