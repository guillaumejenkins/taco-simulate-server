// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

var pluginId = 'events';
var panelId = 'events';

module.exports = function (messages) {
    function initialize(telemetry) {
        var eventList = document.getElementById('event-list');
        var events = ['deviceready', 'backbutton', 'menubutton', 'pause', 'resume', 'searchbutton', 'online', 'offline'];
        events.forEach(function (event) {
            var option = document.createElement('option');
            option.value = event;
            var caption = document.createTextNode(event);
            option.appendChild(caption);
            eventList.appendChild(option);
        });
        document.getElementById('event-fire').addEventListener('click', function () {
            var eventList = document.getElementById('event-list');
            var option = eventList.options[eventList.selectedIndex];

            if (telemetry) {
                telemetry.telemetryHelper.sendClientTelemetry(telemetry.socket, 'plugin-ui', { pluginId: pluginId, panel: panelId, control: 'event-fire', value: option.value });
            }
            
            messages.call('event', option.value).then(function (result) {
                console.log('Fired event: ' + result);
            }, function (err) {
                console.log('Firing event failed: ' + err);
            });
        });
    }

    return {
        initialize: initialize
    };
};
