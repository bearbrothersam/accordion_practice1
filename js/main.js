'use strict';

$('.faq-wrapper__box__ttl').on('click',function() {
  let findElm = $(this).next(".faq-wrapper__box__ans");
  // .next() 指定要素の次の要素を取得
  $(findElm).slideToggle();
  // .slideToggle() スライドアップ,ダウン処理を交互に行う
  if($(this).hasClass('open')) {
    $(this).removeClass('open');
  }else {
    $(this).addClass('open');
  }
});