var fs = require('fs');
var path = require('path');
var Watcher = require('./Watcher').Watcher;

var socket;
var watcher;

function cssFileChanged(fileRelativePath) {
    socket.emit('lr-update-css', { href: fileRelativePath.replace(/\\/g, '/') });
}

function nonCssFileChanged(fileRelativePath) {
    socket.emit('lr-full-reload');
}

module.exports.init = function (sock) {
    if (!watcher) {
        watcher = new Watcher(cssFileChanged, nonCssFileChanged);
        watcher.startWatching();
    }

    socket = sock;
    socket.emit('start-live-reload');
};