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


  
  // 社交账号登录
  var Social = $('.Social ul').height() + 40;
  console.log(Social);
  $('.Social').css({ 'bottom' : -Social });
  var SocialNum = 0;
  $('#Social').click(function(){
    if(SocialNum == 0){
      $('.Social').stop().animate({ bottom : 0 },200);
      SocialNum = 1; 
    }else if(SocialNum == 1){
      $('.Social').stop().animate({ bottom : -Social },200);
      SocialNum = 0; 
    }
  })

  // 全部分类
  var classifyL = $(window).height() - $('header.header').height() - 30;
  var classifyR = $(window).height() - $('header.header').height() - 55;
  $('.classify .classify-l ul').css({ 'height' : classifyL });
  $('.classify .classify-r .classify-r-box ul').css({ 'height' : classifyR });

  $('.classify .classify-l ul li').each(function(index,ele){
    var that = $(this).find('a');
    that.click(function(){
      $('.classify .classify-l ul li a').removeClass(' active');
      that.addClass(' active');
      $('.classify-r div.classify-r-box').css({ 'display' : 'none' });
      $('.classify-r div.classify-r-box').eq(index).css({ 'display' : 'block' });
    })

  })


  // 修改
  var txt1='<div class="am-g Promotion-box"><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="包间类型"></div><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="容纳人数"></div><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="最低消费"></div></div>'
  var txt2='<div class="am-g Promotion-box"><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="酒水名称"></div><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="酒水价格"></div><div class="am-u-sm-4"><input type="text" id="doc-ipt-2" placeholder="最新优惠"></div></div>'
  
  $('.compart .plusAdd span.am-icon-plus-square').click(function(){
    $('.compart .am-u-sm-9 > .active').append(txt1);
    var numAdd = $('.compart .am-u-sm-9 > .active > div.Promotion-box').length;
    if(numAdd >= 4){
      $('.compart .plusAdd span.am-icon-trash').css({'display':'block'})
    }else if(numAdd < 4)(
      $('.compart .plusAdd span.am-icon-trash').css({'display':'none'})
    )

  })

  $('.compart .plusAdd span.am-icon-trash').click(function(){
    $('.compart .am-u-sm-9 > .active > div.Promotion-box').eq(-1).remove();
    
    var numAdd = $('.compart .am-u-sm-9 > .active > div.Promotion-box').length;
    if(numAdd >= 4){
      $('.compart .plusAdd span.am-icon-trash').css({'display':'block'})
    }else if(numAdd < 4)(
      $('.compart .plusAdd span.am-icon-trash').css({'display':'none'})
    )

  })

  $('.drinks .plusAdd span.am-icon-plus-square').click(function(){
    $('.drinks .am-u-sm-9 > .active').append(txt2);
    var numAdd = $('.drinks .am-u-sm-9 > .active > div.Promotion-box').length;
    if(numAdd >= 4){
      $('.drinks .plusAdd span.am-icon-trash').css({'display':'block'})
    }else if(numAdd < 4)(
      $('.drinks .plusAdd span.am-icon-trash').css({'display':'none'})
    )

  })

  $('.drinks .plusAdd span.am-icon-trash').click(function(){
    $('.drinks .am-u-sm-9 > .active > div.Promotion-box').eq(-1).remove();
    var numAdd = $('.drinks .am-u-sm-9 > .active > div.Promotion-box').length;
    if(numAdd >= 4){
      $('.drinks .plusAdd span.am-icon-trash').css({'display':'block'})
    }else if(numAdd < 4)(
      $('.drinks .plusAdd span.am-icon-trash').css({'display':'none'})
    )

  })

})