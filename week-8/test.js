var JSONitem = [];
$.get("data.json",function(data){
    JSONitem = JSON.parse(data);
    console.log(JSONitem)
});