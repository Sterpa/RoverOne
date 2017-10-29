(function() {
    'use strict';

    /**
     * Компонента "Форма"
     */
    class Form {
        /**
         * @constructor
         * @param {Object} opts
         */
        constructor(opts) {
            this.el = opts.el;
            this.data = {
                title: 'Список команд',
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
            this.el.innerHTML = formTemplate(this.data);
            console.log(JSON.stringify(this.data));
        }
    }

    // export
    window.Form = Form;
})();
