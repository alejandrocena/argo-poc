const axios = require('axios');
//const Core = require('core-sube');

exports.sube_charge = async function(event, context, callback) {
    try {
        const {token, card_id, amount} = event;
        await axios({
            method: 'post',
            url: 'http://localhost:3000/sube_charge',
            data: {token, card_id, amount},
            responseType: 'json'
          });
        callback(null, data);
    } catch(ex) {
        callback(ex);
    }
}

exports.sube_reverse = function(event, context, callback) {
    try {
        const {token, card_id, amount} = event;
        await axios({
            method: 'post',
            url: 'http://localhost:3000/sube_reverse',
            data: {token, card_id, amount},
            responseType: 'json'
          });
        callback(null, data);
    } catch(ex) {
        callback(ex);
    }
}

exports.cb_cashin = function(event, context, callback) {
    try {
        const {token, card_id, amount} = event;
        await axios({
            method: 'post',
            url: 'http://localhost:3000/cb_cashin',
            data: {token, card_id, amount},
            responseType: 'json'
          });
        callback(null, data);
    } catch(ex) {
        callback(ex);
    }
}

exports.cb_cashout = function(event, context, callback) {
    try {
        const {token, card_id, amount} = event;
        await axios({
            method: 'post',
            url: 'http://localhost:3000/cb_cashout',
            data: {token, card_id, amount},
            responseType: 'json'
          });
        callback(null, data);
    } catch(ex) {
        callback(ex);
    }
}