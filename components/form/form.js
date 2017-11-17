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
                let param = this.el.querySelector('textarea[name="param"]').value;
                if (param[0] != '{') {
                    param = `{${param}}`;
                };
                let forceCmd = this.el.querySelector('textarea[name="forceCmd"]').value;
                if (forceCmd[0] != '[') {
                    forceCmd = `[${forceCmd}]`;
                };
                let cmd = this.el.querySelector('textarea[name="cmd"]').value;
                if (cmd[0] != '[') {
                    cmd = `[${cmd}]`;
                };
                try {
                    this.user.dataLocal.gui = {
                        param: JSON.parse(param),
                        forceCmd: JSON.parse(forceCmd),
                        cmd: JSON.parse(cmd),
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
