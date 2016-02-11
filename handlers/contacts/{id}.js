'use strict';

var repository = require('../../lib/contactRepository');

/**
 * Operations on /contacts/{id}
 */
module.exports = {

    /**
     *
     * parameters: id
     * produces: application/json, text/json
     */
    get: function contacts_getById(req, res) {
        res.json(repository.get(req.params.id));
    }

};
