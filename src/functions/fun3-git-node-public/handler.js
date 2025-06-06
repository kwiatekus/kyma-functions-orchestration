const fibonacci = require ('fibonacci');

module.exports = {
    main: async function (event, context) {
        const dataIn = sanitizeInput(event.data);
        var payload = {
            ...dataIn,
            check_in: {
                ...dataIn.check_in,
                fun3: new Date()
            },
            fibo: {
            ...dataIn.fibo,
            fun3: fibonacci.iterate(between(parseInt(process.env['FIBONACCI_MIN'],10),parseInt(process.env['FIBONACCI_MAX'],10)))
            }
        };

        var eventType = process.env['PUSH_EVENT_TYPE'];
        var eventSource = event.extensions.request.get('ce-source')
        event.emitCloudEvent(eventType, eventSource, payload);
        // console.log(`Payload [${payload.uuid}] pushed to ${process.env['PUSH_EVENT_TYPE']}`,payload)
        return "OK";
    },
  };


  function between(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function sanitizeInput(input) {
    console.log(input)

    let sanitised = input;
    console.log("Type of incomming input : "+ typeof sanitised);
    return sanitised;
}
