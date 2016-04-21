// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

module.exports = function (messages) {
    var isWebkit = window.webkitRequestFileSystem && window.webkitResolveLocalFileSystemURL;

    return isWebkit ? require('./app-host-webkit-handlers') : require('./app-host-non-webkit-handlers');
};
