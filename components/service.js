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
                body: JSON.stringify(data)};
            return fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log('Error fetch(_makeRequest): ' + error.message);
            });
        }

        /**
         * Get collection
         * @return {Promise<*>}
         */
        static getItems() {
            return this._makeRequest('GET', BASE_URL, undefined)
            .catch((error) => {
                console.log('Error fetch(getItems): ' + error.message);
            });
        }

        /**
         * Update collections
         * @param {Object} user
         * @return {Promise<*>}
         */
        static putItems(user) {
            return this._makeRequest('PUT', user.url.gui, user.data.gui)
            .catch((error) => {
                console.log('Error fetch(putItems): ' + error.message);
            });
        }
    }
    // Export
    window.Service = Service;
})();
