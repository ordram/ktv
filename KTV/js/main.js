$(function(){
  
  // 发布页面
  $('.ktv-jobs .ktv-jobs-content .am-form-horizontal .Promotion-box ul li').each(function(){
    var that = $(this).find('a');
    that.click(function(){
      $('.ktv-jobs .ktv-jobs-content .am-form-horizontal .Promotion-box ul li a').removeClass('active');
      that.addClass('active');
    })
  })
  $('.ktv-jobs .ktv-jobs-content .am-form-horizontal ul.category li').each(function(){
    var that = $(this).find('a');
    that.click(function(){
      $('.ktv-jobs .ktv-jobs-content .am-form-horizontal ul.category li a').removeClass('active');
      that.addClass('active');
    })
  })

  //  收藏
  var coll = 1;
  $('.Booking-show .Booking-box-l .Booking-box-t .right-B p a').eq(0).click(function(){
    if(coll == 1){
      $(this).css({ 'color': '#00b8f5'})
      $(this).find('span').removeClass('am-icon-star-o');
      $(this).find('span').addClass('am-icon-star');
      setTimeout(function(){
        alert('收藏成功！');
      },100);
      coll ++;
    }else{
      $(this).css({ 'color': '#999'})
      $(this).find('span').removeClass('am-icon-star');
      $(this).find('span').addClass('am-icon-star-o');
      setTimeout(function(){
        alert('取消收藏！');
      },100);
      coll = 1;
    }
  });


  // 个人中心页面
  $('.user .user-l > ul > li').each(function(){
    var UserNum = 1;
    var that = $(this);
    var thata = $(this).find('a');
    var userUl = $(this).find('ul li').length * 43 + 'px';
    thata.click(function(){
      if(UserNum == 1){
        thata.find('i').removeClass('am-icon-angle-down');
        thata.find('i').addClass('am-icon-angle-up');
        that.find('ul').stop().animate({ height : userUl });
        UserNum = 2;
      }else if(UserNum == 2){
        thata.find('i').removeClass('am-icon-angle-up');
        thata.find('i').addClass('am-icon-angle-down');
        that.find('ul').stop().animate({ height : 0 });
        UserNum = 1;
      }
    })
  })


  // 修改
  var txt1='<div class="am-g Promotion-box"><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="请输入包间类型"></div><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="请输入容纳人数"></div><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="请输入最低消费"></div></div>'
  var txt2='<div class="am-g Promotion-box"><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="请输入酒水名称"></div><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="请输入酒水价格"></div><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="请输入最新优惠"></div></div>'
  
  $('.compart .plusAdd span.am-icon-plus-square').click(function(){
    $('.compart .am-u-sm-6 > .active').append(txt1);
    var numAdd = $('.compart .am-u-sm-6 > .active > div.Promotion-box').length;
    if(numAdd >= 4){
      $('.compart .plusAdd span.am-icon-trash').css({'display':'block'})
    }else if(numAdd < 4)(
      $('.compart .plusAdd span.am-icon-trash').css({'display':'none'})
    )

  })

  $('.compart .plusAdd span.am-icon-trash').click(function(){
    $('.compart .am-u-sm-6 > .active > div.Promotion-box').eq(-1).remove();
    
    var numAdd = $('.compart .am-u-sm-6 > .active > div.Promotion-box').length;
    if(numAdd >= 4){
      $('.compart .plusAdd span.am-icon-trash').css({'display':'block'})
    }else if(numAdd < 4)(
      $('.compart .plusAdd span.am-icon-trash').css({'display':'none'})
    )

  })


  $('.drinks .plusAdd span.am-icon-plus-square').click(function(){
    $('.drinks .am-u-sm-6 > .active').append(txt2);
    var numAdd = $('.drinks .am-u-sm-6 > .active > div.Promotion-box').length;
    if(numAdd >= 4){
      $('.drinks .plusAdd span.am-icon-trash').css({'display':'block'})
    }else if(numAdd < 4)(
      $('.drinks .plusAdd span.am-icon-trash').css({'display':'none'})
    )

  })

  $('.drinks .plusAdd span.am-icon-trash').click(function(){
    $('.drinks .am-u-sm-6 > .active > div.Promotion-box').eq(-1).remove();
    var numAdd = $('.drinks .am-u-sm-6 > .active > div.Promotion-box').length;
    if(numAdd >= 4){
      $('.drinks .plusAdd span.am-icon-trash').css({'display':'block'})
    }else if(numAdd < 4)(
      $('.drinks .plusAdd span.am-icon-trash').css({'display':'none'})
    )

  })

  
})