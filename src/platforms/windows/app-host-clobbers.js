// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

module.exports = {
    // Сlobbing WinJS.Application.addEventListener
    // for proper cordova-plugin-test-framework initialization
    // on Windows platform
    WinJS: {
        Application: {
            addEventListener: function () {}
        }
    }
};
