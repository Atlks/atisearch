chrome.extension.onMessage.addListener(
    function(request, sender, sendMessage) {if (request.invokeFun == "hello")
           // sendMessage(html);
           {
                  keyword=getQueryVariable('q')
                 window.location=' https://www.google.com/search?atisch=y&q='+keyword
           }
        else
            sendMessage("FUCK OFF"); // snub them.
    });


    function getQueryVariable(variable)
{
    alert('search:: '+  window.location.search)
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}