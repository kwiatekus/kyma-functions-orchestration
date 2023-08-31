import os
import datetime
import json

def main(event, context):
    payload=event['data']
    if isinstance(payload, (bytes, bytearray)):
        payload=json.loads(str(payload, "utf-8"))
    checkin=payload['check_in']
    fibo=payload['fibo']
    checkin['fun2']=datetime.datetime.now().isoformat()
    fibo['fun2']=recur_fibo(10)
    eventSource = "kyma"
    eventType = os.environ['PUSH_EVENT_TYPE']
    event.emitCloudEvent(eventType, eventSource, payload)
    print(payload)
    return "OK"


def recur_fibo(n):
   if n <= 1:
       return n
   else:
       return(recur_fibo(n-1) + recur_fibo(n-2))