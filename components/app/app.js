const BASE_URL = 'https://duna2chat.firebaseio.com/roverone';

(function() {
    'use strict';

    // import
    let Form = window.Form;
    let Queue = window.Queue;
    let Service = window.Service;

    /**
     * Компонента "Приложение"
     */
    class App {
        /**
        * @constructor
        * @param {Object} opts
        */
        constructor(opts) {
            this.el = opts.el;
            this.userId = 'user1234';
            this.devId = 'dev12345';
            this.user = {
                url: {
                    gui: '',
                    dev: ''
                },
                lang: 1,
                data: {
                    gui: {
                        params: {},
                        forceCmds: [],
                        cmds: [],
                        sendTime: 0
                    },
                    dev: {
                        params: [{}],
                        forceCmds: [[]],
                        cmds: [[]],
                        queue: [],
                        done: [],
                        sendTime: [],
                        getTime: []
                    }
                }
            };

            this._setUserUrl(this.userId, this.devId);

            this.form = new Form({
                el: this.el.querySelector('.js-app-form'),
                user: this.user
            });

            this.queue = new Queue({
                el: this.el.querySelector('.js-app-queue'),
                user: this.user
            });
        }

        /**
         * Get database url
         * @param {String} userId
         * @param {String} devId
         */
        _setUserUrl(userId, devId) {
            this.user.url.gui = BASE_URL + '/' + userId + '/' + devId + '/gui.json';
            this.user.url.dev = BASE_URL + '/' + userId + '/' + devId + '/dev.json';
        }
    }

    // export
    window.App = App;
})();
