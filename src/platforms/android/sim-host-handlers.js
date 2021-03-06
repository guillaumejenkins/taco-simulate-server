// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

module.exports = {
    'CoreAndroid': {
        'show': function (success, fail, service, action, args) {
            success && success();
        },
        'messageChannel': function (success, fail, service, action, args) {
            // This call is used to communicate the messageChannel callback to the native Java code. Since we don't need
            // that, we just swallow this and do nothing.
        }
    }
};
