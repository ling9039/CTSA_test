// 按下選單的時候切換內文
function loadContent(page) {
   $.get("pages/" + page + ".html", function(data) {
      $('#Content').html(data);
      // 讓內文頂部與底部稍有距離
      $('.Content-Fix').css('height','10px');
   });

   // 相當於return true, 回到頂部
}

// 增加初次載入頁面要做的工作
function addLoadEvent(func) {
   // 先確認目前有沒有已經要做的工作
   var oldOnload = window.onload;
   if (typeof window.onload != 'function') {
      // 沒有的話執行新工作
      window.onload = func;
   } else {
      // 有的話先做舊的再做新的
      window.onload = function() {
         if (oldOnload) {
            oldOnload();
         }
         func();
      }
   }
}

// 在新分頁/視窗中開啟連結
function loadNewScreen(url) {
   var new_window = window.open();
   new_window.location= url;
   return false;
}
