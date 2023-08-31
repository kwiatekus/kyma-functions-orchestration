const { v4: uuidv4 } = require('uuid');
require('axios');
module.exports = { 
  main: function (event, context) {
    const payload={
      uuid: uuidv4(),
      check_in: {
        fun0: new Date(),
      },
      fibo: {
        fun0: 0,
      },
    };
    const eventType = process.env['PUSH-TO-EVENTTYPE'];
    const eventSource = process.env['CE-SOURCE'];

    let request = event.emitCloudEvent(eventType, eventSource, payload);
    request.then((response)=>{

      console.log(response.request._headers);
      console.log(response.headers);
    }).catch((e)=>{
      console.error(e)
    })

    console.log(request)

    console.log(`Payload pushed to ${eventType}`,payload)
    return payload;
  }
}