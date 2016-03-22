$(function(){
  
      var demo1=function(){
   	  var arr=[{'0':'U'},{1:'N'},{2:'A'},{3:'B'},{4:'R'},{5:'I'},{6:'D'},
             {7:'G'},{8:'E'},{9:'D'},{10:' '},{11:'S'},{12:'O'},{13:'F'},{14:'T'},
             {15:'W'},{16:'A'},{17:'R'},{18:'A'}]
      var str='';
      var i=0;
      var t=setInterval(function(){
          str+=arr[i][i];
        $('.section1-middle').text(str);
      	i++;
     if(i==19){
       clearInterval(t)
      }
    },100)
   }

      var demo2=function(){
    	var arr1=[{0:''},{1:'C'},{2:'O'},{3:'N'},{4:'V'},{5:'E'},{6:'R'},{7:'S'},
               {8:'A'},{9:'T'},{10:'I'},{11:'O'},{12:'N'}]
      var str1='';
      var j=0;
      var n=setInterval(function(){
          str1+=arr1[j][j];
        $('.section2-bottom').text(str1);
      	j++;
     if(j==13){
       clearInterval(n)
      }
    },100)
    }	
      var demo3=function(){
      var arr2=[{0:'P'},{1:'L'},{2:'A'},{3:'N'}]
      var str2='';
      var i=0;
      var t=setInterval(function(){
          str2+=arr2[i][i];
        $('.s3r').text(str2);
        i++;
     if(i==4){
       clearInterval(t)
      }
    },100)
   } 
      var demo4=function(){
      var arr3=[{0:'P'},{1:'R'},{2:'O'},{3:'D'},{4:'U'},{5:'C'},{6:'E'}]
      var str3='';
      var i=0;
      var t=setInterval(function(){
          str3+=arr3[i][i];
        $('.s4r').text(str3);
        i++;
     if(i==7){
       clearInterval(t)
      }
    },100)
   } 
      var demo5=function(){
      var arr4=[{0:'D'},{1:'E'},{2:'L'},{3:'I'},{4:'V'},{5:'E'},{6:'R'}]
      var str4='';
      var i=0;
      var t=setInterval(function(){
          str4+=arr4[i][i];
        $('.s5r').text(str4);
        i++;
     if(i==7){
       clearInterval(t)
      }
    },100)
   } 
      var demo6=function(){
      var arr5=[{0:'R'},{1:'E'},{2:'S'},{3:'U'},{4:'L'},{5:'T'},{6:'S'}]
      var str5='';
      var i=0;
      var t=setInterval(function(){
          str5+=arr5[i][i];
        $('.s6r').text(str5);
        i++;
     if(i==7){
       clearInterval(t)
      }
    },100)
   } 

      var demo7=function(){
      var arr5=[{0:'T'},{1:'A'},{2:'L'},{3:'K'}]
      var str5='';
      var i=0;
      var t=setInterval(function(){
          str5+=arr5[i][i];
        $('.s7r').text(str5);
        i++;
     if(i==4){
       clearInterval(t)
      }
    },100)
   } 

	$('#fullpage').fullpage({
    
		//verticalCentered: true,
		resize : true,
		sectionsColor: ["#24354C", "#67AF32", "#24354C", "#67AF32", "#24354C", "#67AF32", "#24354C"],
		anchors: ["Introduction", "Conversation", "Plan", "Produce", "Deliver", "Results", "Talk"],
		scrollingSpeed: 700,
		easing: "easeInQuart",
		fixedElements:'.nav',
		//menu:".header, #dot-nav-names, .mobile-switch, .banner",
			navigation: true,//导航
			navigationPosition: "right",
			loopBottom: false,
			loopTop: false,
			autoScrolling: true,
			scrollOverflow: false,
			css3: true,
			paddingTop: 0,
			paddingBottom: 0,
		
			//Events
 
          onLeave: function(index, direction){
          switch(index){
            case 2:
         move('.one').y(400).end()
        .move('.two').y(400).end()
        .move('.three').y(400).end();
        break;
        case 3:
        move('.lenimgsm').y(360).end()
        break;
      }
      },

		    afterLoad: function(anchorLink,index){
				switch(index){
					case 1:
					demo1();
					break;
					case 2:
		      demo2();
          move('.one').delay(1200).y(-140).duration(1000).end()
          .move('.two').delay(1300).y(-30).duration(1000).end()
          .move('.three').delay(1400).y(10).duration(1000).end();
					break;
          case 3:
          demo3();
          move('.len3').delay(400).y(-120).duration(1000).end()
          .move('.len2').delay(800).y(-30).duration(1000).end()
          .move('.len1').delay(1200).y(-30).duration(1000).end()
          move('.lenimgsm').delay(1300).y(-340).duration(1000).end()
          break;
          case 4:
          demo4();
          move('.img1').scale(120).duration(600).end(function(){
            move('.img1').scale(100).duration(600).end();
          });
          move('.img2').scale(120).duration(900).end(function(){
            move('.img2').scale(100).duration(900).end();
          });
          move('.img3').scale(120).duration(800).end(function(){
            move('.img3').scale(100).duration(800).end();
          });
          break;
          case 5:
          demo5();
          move('.s5img2').y(210).duration(500).end();
          move('.dai').y(230).duration(500).end(function(){
            move('.dai').y(-180).duration(800).end(function(){
              $('.s5img1').css({'zIndex':100});
              move('.dai').y(-40).duration(800).end(
                function(){
            $('.hua').css({'zIndex':102});
            move('.hua').scale(1.3).duration(100).end();
          });
            })
          });
          break;
          case 6:
          demo6();
          $('.section6-bottom')./*css({'opacity':1})*/animate({opacity:1},1500);
          break;
          case 7:
          demo7();
          break;
				}
				//alert(index)
			}
	})

  /* if(document.documentElement.clientWidth<500){
        $('body').css({'fontSize':8});
        $('.section1-middle').css({'width':'50%'});
        $('.one').css({'height':'10%'});
        $('.two').css({'height':'10%'});
        $('.three').css({'height':'10%'});
        $('.section3-top').css({'top':'20%'});
        $('.section3-middle').css({'top':'25%'});
        $('.section3-bottom').css({'top':'30%'});
        $('.len1').css({'height':'8%'});
        $('.len2').css({'height':'8%'});
        $('.len3').css({'height':'8%'})
        $('.lenimgsm').css({'width':'10%','height':'10%'});
        var w=$(window).height();
        $('.section-top').css({'height':'w/3'+'px'})
        $('.section4-middle').css({'margin-top':'10%'})
        $('.section4-bottom').css({'margin-top':'10%'})
        $('.section4-last').css({'margin-top':'10%'})
    }*/

   $('.nav-right').click(function(){
   	$('.all-list').slideToggle();
   })

	/*$(".bg").interactive_bg({
       strength: 25,
       scale: 1.02,
       animationSpeed: "120ms",
       contain: true,
       wrapContent:true
   });*/

})