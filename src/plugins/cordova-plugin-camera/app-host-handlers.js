// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

module.exports = function (messages) {
    return  {
        Camera: {
            takePicture: function (success, fail, args) {
                messages.call('takePicture', args).then(function (result) {
                    // 'result' should be {data: <ArrayBuffer>, type: <mimeType>}, from which we'll create a blob
                    var blob = new Blob([result.data], {type: result.type});
                    success(URL.createObjectURL(blob));
                }, function (error) {
                    fail(error);
                });
            }
        }
    };
};
