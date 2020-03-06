

chrome.contextMenus.create({
    type: 'normal',
    title: '测试菜单111',
    id: 'menuDemo',
    contexts: ['all'],
    onclick: function (info, tab) {

        console.log('context menu alrt');
     
        // keyword=getQueryVariable('q')
        // window.location=' https://www.google.com/search?atisch=y&q='+keyword


        chrome.tabs.getSelected(null, function (tab) {　　// 先获取当前页面的tabID
            tab.url=tab.url+'&atisch=y'
            console.log(tab.url)
            window.location=tab.url
            chrome.tabs.create({ url: tab.url });
            // chrome.tabs.sendMessage(tab.id, {invokeFun: "hello"}, function(response) {
            //     console.log(response);　　// 向content-script.js发送请求信息
            // });
        });

        NotificationDemo()

    }
}, function () {
    console.log('contextMenus are create.');
});


chrome.browserAction.onClicked.addListener(function callback() {

    alert('tools btn click');

    NotificationDemo()

})

function NotificationDemo() {

    chrome.notifications.create('id111' + new Date(), {
        "type": "basic", "message": "msgx111",
        "title": "ttt", "iconUrl": "icon.png", "contextMessage": "ctmsg"


    })


    // 注意：没有必要调用 webkitNotifications.checkPermission()。
    // 声明了 notifications 权限的扩展程序总是允许创建通知。

    // 创建一个简单的文本通知：
    // var notification =chrome. webkitNotifications.createNotification(
    //     '48.png',  // 图标 URL，可以是相对路径
    //     '您好！',  // 通知标题
    //     '内容（Lorem ipsum...）'  // 通知正文文本
    //   );

    //   // 或者创建 HTML 通知：
    //   // var notification = webkitNotifications.createHTMLNotification(
    //   //   'notification.html'  // HTML 的 URL，可以是相对路径
    //   // );

    //   // 然后显示通知。
    //   notification.show();
}



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