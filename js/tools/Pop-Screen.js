// 彈出視窗，把指定檔案內容讀入
function popScreen(page_path){
   $.get(page_path, function(data) {
      $("#Pop-Screen-Content").html(data);
      $("#Pop-Screen").css('display','block');
      $("#Pop-Screen-Content").css('margin-top',  -$("#Pop-Screen-Content").height()/2)
                              .css('margin-left', -$("#Pop-Screen-Content").width() /2);
   });
   return false;
}

// 關閉視窗
function closePopScreen(){
   $("#Pop-Screen").css('display','none');
   return false;
}
