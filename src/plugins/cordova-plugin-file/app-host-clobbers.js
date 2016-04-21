// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

module.exports = {
    // This variable is required on Windows so that plugin works
    Windows: {
        Storage: {
            StorageFolder: {
                getFolderFromPathAsync: function () {}
            },
            StorageFile: {
                getFileFromPathAsync: function () {}
            },
            ApplicationData: {
                current: {
                    localFolder: {
                        path: ''
                    },
                    temporaryFolder: {
                        path: ''
                    }
                }
            }
        }
    }
};
