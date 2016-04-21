// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

var fs = require('fs'),
    path = require('path');

var config = {};
var simulationFilePath;

Object.defineProperties(module.exports, {
    liveReloadEnabled: {
        get: function () {
            return getValue('liveReloadEnabled');
        },
        set: function (value) {
            setValue('liveReloadEnabled', value);
        }
    },
    platform: {
        get: function () {
            return getValue('platform');
        },
        set: function (value) {
            setValue('platform', value);
        }
    },
    prepareOnCssChange: {
        get: function () {
            return getValue('prepareOnCssChange');
        },
        set: function (value) {
            setValue('prepareOnCssChange', value);
        }
    },
    projectRoot: {
        get: function () {
            return getValue('projectRoot');
        },
        set: function (value) {
            setValue('projectRoot', value, true)
        }
    },
    platformRoot: {
        get: function () {
            return getValue('platformRoot');
        },
        set: function (value) {
            setValue('platformRoot', value);
        }
    },
    server: {
        get: function () {
            return getValue('server', true);
        },
        set: function (value) {
            setValue('server', value);
        }
    },
    telemetry: {
        get: function () {
            return getValue('telemetry', true);
        },
        set: function (value) {
            setValue('telemetry', value);
        }
    },
    simHostOptions: {
        get: function () {
            return getValue('simHostOptions');
        },
        set: function (value) {
            setValue('simHostOptions', value);
        }
    },
    simulationFilePath: {
        get: function () {
            if (!simulationFilePath) {
                var projectRoot = getValue('projectRoot');
                simulationFilePath = path.join(projectRoot, 'simulation');
                if (!fs.existsSync(simulationFilePath)) {
                    fs.mkdirSync(simulationFilePath);
                }
            }
            return simulationFilePath;
        }
    }
});

function setValue(prop, value, single) {
    if (single && config.hasOwnProperty(prop)) {
        throw new Error('Can\'t reinitialize ' + prop);
    }
    config[prop] = value;
}

function getValue(prop, optional) {
    if (!config.hasOwnProperty(prop) && !optional) {
        throw new Error('Cannot get ' + prop + ' as it has not been initialized.');
    }
    return config[prop];
}
