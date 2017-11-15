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
            return new Promise((resolve, reject) => {
                let options = {};
                try {
                    options = {
                        method: method,
                        body: '',
                        body: JSON.stringify(data)
                    };
                } catch (error) {
                    throw error;
                };
                resolve(
                    fetch(url, options)
                    .then((resp) => {
                        return resp.json();
                    })
                    .catch((error) => {
                        throw error;
                    })
                );
            });
        }

        /**
         * Get collection Data
         * @param {Object} user
         * @return {Promise<*>}
         */
        static getData(user) {
            return this._makeRequest('GET', user.url.data, undefined);
        }

        /**
         * Update collections Data
         * @param {Object} user
         * @return {Promise<*>}
         */
        static putData(user) {
            return this._makeRequest('PUT', user.url.data, user.dataLocal);
        }

        /**
         * Update collections Gui
         * @param {Object} user
         * @return {Promise<*>}
         */
        static putGui(user) {
            return this._makeRequest('PUT', user.url.gui, user.dataLocal.gui)
        }

        /**
         * Update collections Dev
         * @param {Object} user
         * @return {Promise<*>}
         */
        static putDev(user) {
            return this._makeRequest('PUT', user.url.dev, user.dataLocal.dev);
        }
    }
    // Export
    window.Service = Service;
})();
