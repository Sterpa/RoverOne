(function() {
    /**
     * Data source for links collection
     */
    class Service {
        /**
         * Wrapper for XMLHttpRequest
         * @param {string} method
         * @param {string} url
         * @param {Object} data
         * @return {Promise<*>}
         */
        static _makeRequest(method, url, data) {
            let options = {
                method: method,
                body: JSON.stringify(data)
            };
            return fetch(url, options)
            .then((resp) => {
                return resp.json();
            })
            .catch((error) => {
                console.log('Error fetch(_makeRequest): ' + error.stack);
            });
        }

        /**
         * Get collection Data
         * @param {Object} user
         * @return {Promise<*>}
         */
        static getData(user) {
            return this._makeRequest('GET', user.url.data, undefined)
            .catch((error) => {
                console.log('Error fetch(getData): ' + error.stack);
            });
        }

        /**
         * Update collections Data
         * @param {Object} user
         * @return {Promise<*>}
         */
        static putData(user) {
            return this._makeRequest('PUT', user.url.data, user.dataLocal)
            .catch((error) => {
                console.log('Error fetch(putData): ' + error.stack);
            });
        }

        /**
         * Update collections Gui
         * @param {Object} user
         * @return {Promise<*>}
         */
        static putGui(user) {
            return this._makeRequest('PUT', user.url.gui, user.dataLocal.gui)
            .catch((error) => {
                console.log('Error fetch(putGui): ' + error.stack);
            });
        }

        /**
         * Update collections Dev
         * @param {Object} user
         * @return {Promise<*>}
         */
        static putDev(user) {
            return this._makeRequest('PUT', user.url.dev, user.dataLocal.dev)
            .catch((error) => {
                console.log('Error fetch(putDev): ' + error.stack);
            });
        }
    }
    // Export
    window.Service = Service;
})();
