// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

module.exports = {
    // This is required for device-motion tests for windows platform.
    Windows: {
        Devices: {
            Sensors: {
                Accelerometer: {
                    getDefault: function () { return true; }
                }
            }
        }
    }
};
