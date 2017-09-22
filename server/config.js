'use strict';

const systemSettings = require(`${process.cwd()}/config/system`);
const appSettings = require(`${process.cwd()}/config/app`);

module.exports = {
    system: systemSettings,
    app: appSettings,
};
