

chrome.contextMenus.create({
    type: 'normal',
    title: '测试菜单111',
    id: 'menuDemo',
    contexts: ['all'],
    onclick: function (info, tab) {
        alert('context menu alrt');
    }
}, function () {
    console.log('contextMenus are create.');
});


chrome.browserAction.onClicked.addListener(function callback() {

    alert('tools btn click');

    NotificationDemo()

})

function NotificationDemo() {

    chrome.notifications.create('id111'+new Date(), {
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