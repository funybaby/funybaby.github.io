//textarea 输入效果
function textareaAutoHeight() {
  $('textarea').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
    }).on('input', function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
}
//获取文本
function getkeyTxt(){
	$.ajax({
		url:"key.txt",
		type:'post',
		dataType:"text",
		success:function(data){
			$("#content").val(data);
			textareaAutoHeight();
			// setTimeout(function() {
			// 	parent.reinitIframe();//iframe 自动高度
			// }, 500);
		}
	});
}
//js删除数组第一元素
function DelArrayElement(arr, n) {
    if (arr == null || isNaN(n) || n >= arr.length) {
        return false;
    }
    arr.splice(n, 1);
}

//复制代码 工具函数
function myCopy(param){
   var oInput = document.createElement('input');
   oInput.value = param;
   document.body.appendChild(oInput);
   oInput.select(); // 选择对象
   document.execCommand("Copy"); // 执行浏览器复制命令
   oInput.className = 'oInput';
   oInput.style.display='none';
   // alert('复制成功');
}
//iframe 自动高度
function reinitIframe(){
  console.log("我什么都没做")
   // var iframe = document.getElementById("myframe");
   // try{
   // var bHeight = iframe.contentWindow.document.body.scrollHeight;
   // var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
   // var height = Math.floor(bHeight, dHeight);
   // iframe.height = height+20;
   // }catch (ex){}
}


