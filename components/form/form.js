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
                resolve(this.user);
            });
        }

        /**
         * Upload data to the server and render
         */
        uploadData() {
            this.getNewDataLocal()
            .then((user) => Service.putGui(user))
            .then((resp) => this.render())
            .catch((error) => console.log(`Error! ${error.stack}`));
        }

        /**
        * Обработка события submit на форме
        * @param {Event} event
        */
        _submitEvent(event) {
            event.preventDefault(); // Отмена действия браузера 'submit' по-умолчанию для формы
            this.uploadData();
        }

        /**
        * Развешиваем события
        */
        _initEvents() {
            this.el.addEventListener('submit', this._submitEvent.bind(this));
            //window.addEventListener('error', (error) => {
                //console.log(`Error (putGui) ${error.stack}`).bind(this);
            //});
            //window.onerror = function(message, url, lineNumber) {
                //alert('Поймана ошибка, выпавшая в глобальную область!\n' +
                    //'Сообщение: ' + message + '\n(' + url + ':' + lineNumber + ')');
            //};
            //throw error;
        }
    }

    // export
    window.Form = Form;
})();
