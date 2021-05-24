
var workerId;
var interval;

onmessage = function(obj){
  console.log(obj.data);
  workerId = obj.data.workerId;
  interval = obj.data.interval
  setTimeout(methodCall,interval);
}

function methodCall() {
    postMessage({"id":workerId,"value":interval});
    setTimeout(methodCall,interval);
}


