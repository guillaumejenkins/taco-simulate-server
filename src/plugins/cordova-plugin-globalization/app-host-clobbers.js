// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
 
// https://github.com/apache/cordova-plugin-globalization/

// this object fixes plugin loading on windows platform
module.exports = {
    GlobalizationProxy: {
        GlobalizationProxy: {
            setLocale: function () {}
        }
    }
};
