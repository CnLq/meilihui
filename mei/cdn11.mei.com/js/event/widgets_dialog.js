function CustomdDialogPlugins(b,e,c){var a="display: none;background-color: #000000;position: absolute;z-index: 9998;left: 0;top: 0;width: 100%;height: 100%;opacity: 0.8;filter: alpha(opacity =   80);-moz-opacity: 0.8;";var f="<div style='"+a+"' id='backgroundDivID'></div>";var d="<div id='showDivDialog'>";d+="<div style='width:500px;height:25px;position:relative;clear:both;'>";d+="<img id='closeImgBtn' class='img_close'";d+="style='width: 17px; height: 17px;  cursor: pointer; position: absolute;right:0px;top:10px;'";d+="alt='关闭' src="+$("#contextPath").val()+"'../../images/icon_close1.png'/*tpa=http://cdn11.mei.com/images/icon_close1.png*/ onclick='_closeDialog("+b+");'></div>";d+="<div id='bodyDivID' style='margin-top:25px;'></div></div>";$(document.body).append(f);$(document.body).append(d);this.closeBtnObj=$("#closeImgBtn");this.bodyDivObj=$("#bodyDivID");this.backgroundDivObj=$("#backgroundDivID");this.showDivDialogObj=$("#showDivDialog");this.time=e;$(this.backgroundDivObj).click(function(){_closeDialog(b)})}CustomdDialogPlugins.prototype={btnClick:function(b){correctPNG();var e=$("#"+b);if(null==e){return false}var c=$(e).prop("outerHTML");$(this.bodyDivObj).html(c);$(this.bodyDivObj).children("div").css("display","block");$(this.backgroundDivObj).css({display:"block",height:$(document).height()+50});var d=$(e).height()+20;var a=$(e).width();$(this.showDivDialogObj).css({width:a,height:d,top:($(document).scrollTop()+100),left:(document.documentElement.clientWidth-a)/2});$(this.showDivDialogObj).fadeIn(1000);$(this.showDivDialogObj).addClass("dialogDiv");if(isNumber(this.time)){setTimeout(function(){_closeDialog()},this.time*1000)}}};function _closeDialog(a){var b=$("#showDivDialog");var c=$("#bodyDivID").find("#checkNumber1").val();$(b).removeClass("dialogDiv");$(b).removeAttr("top");$(b).removeAttr("left");$(b).hide();$("#backgroundDivID").css("display","none");b.remove();$("#backgroundDivID").remove();if(a!=null){a()}if(c==="yes"){location.reload()}}function isNumber(b){var a=/^[1-9]+[0-9]*]*$/;if(a.test(b)){return true}else{return false}};