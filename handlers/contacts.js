'use strict';

var repository = require('../lib/contactRepository');

/**
 * Operations on /contacts
 */
module.exports = {

    /**
     *
     * parameters:
     * produces: application/json, text/json
     */
    get: function contacts_get(req, res) {
        res.json(repository.all());
    }

};
