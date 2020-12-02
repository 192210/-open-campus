// MENUボタンがクリックされたときの処理
$('#menu_btn').on('click', function(){
    // #menu_btnに.activeがあるかどうか
    if($(this).hasClass('active')) {
      // .activeがあるときの処理
      $(this).removeClass('active'); // .activeを削除
      $(this).text('MENU'); // テキストをMENUに書き換え
      $('#menu').removeClass('open'); // #menuの.openを削除
      $('.menu-background').removeClass('open'); // .menu-backgroundの.openを削除
    } else {
      // .activeがないときの処理
      $(this).addClass('active'); // .activeを追加 
      $(this).text('CLOSE'); // テキストをCLOSEに書き換え
      $('#menu').addClass('open'); // #menuに.openを追加
      $('.menu-background').addClass('open'); // .menu-backgroundに.openを追加
    }
  });
  
// メニューの背景がクリックされたときの処理
$('.menu-background').on('click', function(){
    // .menu-backgroundに.openがあるかどうか
    if($(this).hasClass('open')) {
      // .openがあるときの処理
      $(this).removeClass('open'); // .menu-backgroundの.openを削除
      $('#menu_btn').removeClass('active').text('MENU'); // ボタンのテキストをCLOSEからMENUへ書き換え
      $('#menu').removeClass('open'); // #menuの.openを削除
    }
  });