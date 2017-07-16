<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<body>
		<p id="demo">sadas</p>
		<button  onclick="myfec()">dwq</button>
		<script>
			
			document.getElementById("demo").innerHTML="dsadas";
			
			function myfec(){
				document.write("sadasdsadasdasdsadsadsadsa");
			}
			/*
			 	js 获取属性是   获取自定义属性是属性的值 setAttribute()  getAttribute()  removeAttribute()   
                                                                                获取内置属性property() 获取后的属性返回值是ture			 	
			 * 
			 *  for in 一般遍历的是对象  getComputedStyle(obj).attr
			 *                    兼容写法  obj.courrentStyle.attr 
			 * 
			 * 有回调函数的时候，  程序先顺序执行，当遇到回调函数的时候  在执行回调函数 回调函数也是程勋执行的一部分， 可以在回调函数中传参
			 * 
			 * js中添加样式是 className += " "+样式名字
			 *     删除样式  class=" "  就是删除样式
			 * 
			 * 
			 *js中对dom的操作 获取孩子 obj.children
			 *            获取爸爸      obj.parentNode
			 *            获取前面的元素 previousSibling  
			 *            获取后面的元素 nextsibiling
			 *            
			 *            追加元素 appendChild  查到元素里面
			 *            插入元素 insertBefour 插入元素前面
			 * 
			 *            创建元素 createElement（）
			 *            创建元素群   createElementfragment()
			 * 
			 *            删除操作  只能从父元素删除孩子 parentNode.removeChild()
			 *            替换元素  只能从父元素进行孩子的替换parent.replaceChild()
			 *            定级父元素 
			 *                       offsetTop
			 *                       offsetLeft
			 * 
			 * js获取元素高度  clientHeight  可视区域的高度
			 *            offsetHeight  真实的高度  包括padding margin
			 *            scrollHeight  获取对象滚动的高度
			 * 
			 * 获取滚动条的高度  document.body.scrollHeight
			 * 获取窗口的大小    document.body.clientHeight
			 * e事件         e.clientx   当前点击的位置 
			 *        e.pagex    相当于文档顶端的距离
			 *        e.offsetx  相对于定位父级元素的水平x偏移距离
			 * 
			 * 
			 * 进行拖拽的时候 就要用到onmousedown  onmousemove  onmouseup
			 *对象的混入  就是把第二个的属性放到一个里面然后进行赋值
			 *           function  mix(obj1,obj2){
			 * 				for(var key in obj2){
			 * 					obj1[key]=obj2.key;
			 *               }
			 * 				return obj1;
			 *            }
			 * 
			 * ajax的原理与请求
			 *     var xhr = new  XMLHttpRequest();
			 *     xhr.open("get",url,true);
			 *     xhr.send();
			 *     xhr.onreadyStatechange=function(){
			 * 			if(this.readyState==4&&this.status==200){
			 * 				alert(this.responseText)	
			 *      	}
			 *      }
			 * 
			 * 1 生成ajax对象 
			 * 2 打来连接 说明请求方式 地址 
			 * 3 发送
			 * 4 根据onreadyStateChange 函数 然后判断 readyState的值 和this.status的状态
			 *  
			 * 当时post请求的时候要设置请求头。 并且在send中发送数据。
			 * 后台返回前台的数据是responseText 一般是字符串
			 * 
			 * 1
			 * 
			 * 
			 * js对跨域的解释中 jsonp 需要在script标签中加入需要跨域的地址，然后callback需要一个接受的名字
			 *        
			 * <script type="text/javascript">
				    var showName = function(person){  person 就是回调函数回来的数据
				        document.write(person.name);
				    };
				  showName({"name":"zhangsan","age":30})  回调函数请求回来的数据
				    var script = document.createElement("script");
				    script.type = "text/javascript";
				    script.src = "http://10.0.4.226:8080/ServerApp/dataserv.do?callback=showName";
				    document.getElementsByTagName('head')[0].appendChild(script);
				 
			 *</script>
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * 
			 * */
		</script>
	</body>
</html>
