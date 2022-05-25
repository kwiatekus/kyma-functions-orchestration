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

    var eventOut=event.buildResponseCloudEvent(uuidv4(),eventType,payload);
    eventOut.source=eventSource
    eventOut.specversion="1.0"

    let request = event.publishCloudEvent(eventOut);
    request.then((response)=>{

      console.log(response.request._headers);
      console.log(response.headers);
    }).catch((e)=>{
      console.error(e)
    })

    console.log(request)

    console.log(`Payload pushed to ${eventType}`,eventOut)
    return eventOut;
  }
}