const { v4: uuidv4 } = require('uuid');
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
    eventOut.datacontenttype="application/json"

    event.publishCloudEvent(eventOut);
    console.log(`Payload pushed to ${eventType}`,eventOut)
    return eventOut;
  }
}