// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

module.exports = {
    'StatusBar': {
        '_ready': function (successCallback) {
            // Report to the app that the status bar is hidden
            successCallback(false);
        }
    }
};
