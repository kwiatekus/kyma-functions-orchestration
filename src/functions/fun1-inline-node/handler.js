const fibonacci = require ('fibonacci');
require('axios');
module.exports = {
    main: function (event, context) {
        let sanitised = sanitizeInput(event.data)
        var payload = {
            ...sanitised,
            check_in: {
                ...sanitised.check_in,
                fun1: new Date(),
            },
            fibo: {
                ...sanitised.fibo,
                fun1: fibonacci.iterate(between(parseInt(process.env['FIBONACCI_MIN'],10),parseInt(process.env['FIBONACCI_MAX'],10)))
            }
        };
        var source = event.extensions.request.get('ce-source')
        var type = process.env['PUSH_EVENT_TYPE']

        event.emitCloudEvent(type, source, payload)
        console.log(`Payload [${payload.uuid}] pushed to ${process.env['PUSH_EVENT_TYPE']}`,payload)
        return 'OK'
    }
}

function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
 
function sanitizeInput(input) {
    let sanitised = input;
    console.log("Type of incomming input : "+ typeof sanitised);
    return sanitised;
}