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
                        cmd: [],
                        forceCmd: [],
                        param: {},
                        sendTime: 0
                    },
                    dev: {
                        cmds: [[]],
                        forceCmds: [[]],
                        params: [{}],
                        sendTime: [],
                        queue: [],
                        done: [],
                        getTime: []
                    }
                },
                dataLocal: {
                    gui: {
                        cmd: [],
                        forceCmd: [],
                        param: {},
                        sendTime: 0
                    },
                    dev: {
                        cmds: [[]],
                        forceCmds: [[]],
                        params: [{}],
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
                        cmd: [],
                        forceCmd: [],
                        param: {},
                        sendTime: 0
                    },
                    dev: {
                        cmd: [],
                        forceCmd: [],
                        param: [],
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

            this.queue = new Dev({
                el: this.el.querySelector('.js-app-dev'),
                user: this.user
            });

            this.databaseInit();
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

        /**
         * Init Firebase Realtime Database
         */
        databaseInit() {
            // Initialize Database
            let config = {
                apiKey: 'AIzaSyAOC8aUUIjxq7LGqcBnntUJ-fOf3NsE6Us',
                authDomain: 'duna2chat.firebaseapp.com',
                databaseURL: 'https://duna2chat.firebaseio.com',
                projectId: 'duna2chat',
                storageBucket: 'duna2chat.appspot.com',
                messagingSenderId: '815694703942'
            };
            firebase.initializeApp(config);

            // Get a reference to the database service
            this.user.db = firebase.database();
        }

        /**
         * Add data to Firestore
         * @param {Object} postData
         * @return {Promise<*>}
         */
        add(postData) {
            // Get a key for a new Post.
            let newPostKey = (new Date()).getTime();

            // Write the new post's data posts list.
            let updates = {};
            updates[`/${this.userId}/${this.devId}/gui/${newPostKey}`] = postData;

            return this.user.db.ref('roverone').update(updates);
        }
    }

    // export
    window.App = App;
})();
