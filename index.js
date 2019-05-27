const axios = require('axios');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const call = (service, user, amount ) => {
    return new Promise((resolve, reject) => {
        const sleep = getRandomInt(1000,5000);
        setTimeout(function() {
          const value = getRandomInt(1,11) 
          const message = 'service: ' + service + ' sleep: ' + sleep + ' value: ' + value;
          if(value > 5 ) {
            resolve({value, sleep, user, amount, 'service': service})
          } else {
            reject(service + ' Failed.')
          }
        }, sleep);
    });
}

exports.service_pay = async function(event, context, callback) {
    try {
        const {user, amount} = event;
        const data = await call('service_pay', user, amount);
        callback(null, data);
    } catch(ex) {
        callback(ex);
    }
}

exports.service_pay_reverse = async function(event, context, callback) {
    try {
        const {user, amount} = event;
        const data = await call('service_pay_reverse', user, amount);
        callback(null, data);
    } catch(ex) {
        callback(ex);
    }
}

exports.wallet_extraction = async function(event, context, callback) {
    try {
        const {user, amount} = event;
        const data = await call('wallet_extraction', user, amount);
        callback(null, data);
    } catch(ex) {
        callback(ex);
    }
}

exports.wallet_extraction_reverse = async function(event, context, callback) {
    try {
        const {user, amount} = event;
        const data = await call('wallet_extraction_reverse', user, amount);
        callback(null, data);
    } catch(ex) {
        callback(ex);
    }
}