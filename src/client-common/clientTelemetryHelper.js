function sendClientTelemetry(clientSocket, event, props, piiProps) {
    var telemetryData = {
        event: event,
        props: props,
        piiProps: piiProps
    };
    
    clientSocket.emit('telemetry', telemetryData);
}

module.exports.sendClientTelemetry = sendClientTelemetry;