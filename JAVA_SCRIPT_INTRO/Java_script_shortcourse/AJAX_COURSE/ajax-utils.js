function (global){
 var ajaxutilis= {};
 function getrequest(){
    if (global.XMLHttpRequest) {
        return (new XMLHttpRequest());
    }
    else if(global.ActiveXObject){
        return (new ActiveXObject("MicrosoftXMLHTTP"));
    }
    else {
        globall.alert ("not supported");
        return null
    }
 }   
};

ajaxutilis.sendgetrequest= function(requesturl, responsehandle){
    var request= getrequest();
request.onreadystatechange= function(){
    handleresponse(request, responsehandle)};
    request.open("get", requesturl, true);
    request.send(null);

};

function handleResponse(request,
    responseHandler) {
if ((request.readyState == 4) &&
(request.status == 200)) {
responseHandler(request);
}
}
