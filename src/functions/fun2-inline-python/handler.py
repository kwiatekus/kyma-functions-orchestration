import os
import datetime
import json

def main(event, context):
    payload=event['data']
    if isinstance(payload, str):
        payload=json.loads(payload)
    checkin=payload['check_in']
    fibo=payload['fibo']
    checkin['fun2']=datetime.datetime.now().isoformat()
    fibo['fun2']=recur_fibo(10)
    eventOut = event.buildResponseCloudEvent(payload['uuid'],os.environ['PUSH_EVENT_TYPE'],payload)
    print(eventOut)
    event.publishCloudEvent(eventOut)
    return "OK"


def recur_fibo(n):
   if n <= 1:
       return n
   else:
       return(recur_fibo(n-1) + recur_fibo(n-2))