// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

module.exports = {
    // This variable is required on Windows platform so that plugin works
    Windows: {
        ApplicationModel: {
            Contacts: {}
        }
    },
    WinJS: {
        Utilities: {
            // While simulating Windows platform, we don't currently provide
            // a way to specify Table/PC vs Phone simulation so we always
            // retun false here; this may be changed in the future.
            isPhone: false
        }
    }
};
