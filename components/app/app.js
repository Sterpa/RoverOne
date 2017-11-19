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
            this.userId = opts.userId;
            this.devId = opts.devId;
            this.user = {
                lang: 0,
                url: {
                    gui: '',
                    dev: '',
                    data: ''
                },
                data: {
                    gui: {
                        param: {},
                        forceCmd: [],
                        cmd: [],
                        sendTime: 0
                    },
                    dev: {
                        params: [{}],
                        forceCmds: [[]],
                        cmds: [[]],
                        sendTime: [],
                        queue: [],
                        done: [],
                        getTime: []
                    }
                },
                dataLocal: {
                    gui: {
                        param: {},
                        forceCmd: [],
                        cmd: [],
                        sendTime: 0
                    },
                    dev: {
                        params: [{}],
                        forceCmds: [[]],
                        cmds: [[]],
                        sendTime: [],
                        queue: [],
                        done: [],
                        getTime: []
                    }
                },
                dataLocal2: {
                    gui: {
                        cmd: [],
                        forceCmd: [],
                        param: {}
                    }
                },
                dataDev: {
                    gui: {
                        param: {},
                        forceCmd: [],
                        cmd: [],
                        sendTime: 0
                    },
                    dev: {
                        params: [{}],
                        forceCmds: [[]],
                        cmds: [[]],
                        sendTime: [],
                        queue: [],
                        done: [],
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
         * Set database url
         * @param {String} userId
         * @param {String} devId
         */
        _setUserUrl(userId, devId) {
            this.user.url.data = BASE_URL + '/' + userId + '/' + devId + '.json';
            this.user.url.gui = BASE_URL + '/' + userId + '/' + devId + '/gui.json';
            this.user.url.dev = BASE_URL + '/' + userId + '/' + devId + '/dev.json';
        }
    }

    // export
    window.App = App;
})();
