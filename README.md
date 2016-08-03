# getPhoneCode
getPhoneCode 是一款获 取验手机证码 控件，可以在移动端和PC端展示效果。

### 创建时间 2016-06-16 18:31
#### 作者 [@zoeblow](http://fuyuan.me)
#### Demo [在线Demo](http://ifuyuan.wang/gitdemo/getPhoneCode/index.html)
###版本
> * V 1.0
> * 修改时间 ：2016-06-16 18:31
> * 描述：创建getPhoneCode

------
> * V 1.1
> * 修改时间 ：2016年8月3日17:16；
> * 描述：修改验证方法，验证了无手机号状态，屏蔽了验证码发送失败继续读秒的Bug 增加了在线demo；

```html
<a href="javascript:void(0);" id="getPhoneCode" class="s-dis">验证码</a>
```
-----
###调用方式
在html中引入jquery之后引入getPhoneCode.js
完成之后即可直接使用

```html
<script type="text/javascript" src="script/jquery.min.js"></script>
<script type="text/javascript" src="script/getPhoneCode.js"></script>
<script>
    //启用
    $('#getPhoneCode').getPhoneCode();        
</script>
```
### 带参数启用
```JavaScript
    $('#getPhoneCode').getPhoneCode({
        'time':5, //自定义时间
        'text':'s', //自定义内容
        'sendBefore':function(){
            consoel.log('开始！');    //开始时执行的回调函数
            //满足验证条件之后才读秒，要不然不读秒
            if(true){
                run();
            }
        },
        'sendAfter':function(){
            consoel.log('结束！');    //结束时执行的回调函数
        }                     
    }); 
```
-----
###参数
| 参数    | 取值类型   |  默认值  | 描述|
| :----:  | :----:  | :----:  | :----:  |
| text    | String |   s     | 在数字后面显示的文字显示的文字  |
| time    | Number |   60 |   下一次请求的时间 |
| sendBefore    | Function |   null |  触发发送请求之前的函数 |
| sendAfter    | Function |   null |   发送的函数 |