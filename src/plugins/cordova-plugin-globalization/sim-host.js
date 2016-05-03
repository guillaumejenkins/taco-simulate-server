// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

// https://github.com/apache/cordova-plugin-globalization/

var languages = [
    'English',
    'English (Canadian)',
    'French',
    'French (Canadian)',
    'German',
    'Русский'
];

var daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var telemetry;
var pluginId = 'cordova-plugin-globalization';
var panelId = 'globalization';

function initialize(telem) {
    var localeList = document.querySelector('#locale-list');
    var dayList = document.querySelector('#day-list');

    telemetry = telem;
    languages.forEach(function (locale) {
        var option = document.createElement('option');
        option.value = locale;
        var caption = document.createTextNode(locale);
        option.appendChild(caption);
        localeList.appendChild(option);
    });

    daysOfTheWeek.forEach(function (day) {
        var option = document.createElement('option');
        option.value = day;
        var caption = document.createTextNode(day);
        option.appendChild(caption);
        dayList.appendChild(option);
    });

    localeList.onchange = sendUITelemetry.bind(this, 'locale-list');
    dayList.onchange = sendUITelemetry.bind(this, 'day-list');

    // Clicking the checkbox's label fires the click event twice, so keep track of the previous state. Note that we can't use the change event because the component seems to swallow it.
    var previousDaylightState = false;
    var daylightCheckbox = document.querySelector('#is-daylight-checkbox');
    daylightCheckbox.onclick = function () {
        if (daylightCheckbox.checked !== previousDaylightState) {
            previousDaylightState = daylightCheckbox.checked;
            sendUITelemetry('is-daylight-checkbox');
        }
    };
}

function sendUITelemetry(controlId) {
    if (telemetry) {
        telemetry.telemetryHelper.sendClientTelemetry(telemetry.socket, 'plugin-ui', { pluginId: pluginId, panel: panelId, control: controlId });
    }
}

module.exports = {
    initialize: initialize
};
