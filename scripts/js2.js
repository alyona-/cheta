/**
 * Created by alyona on 26.08.14.
 */

var page = {};
page.body = document.body;

page.text = new Array();
page.reset=new Array();
page.change = new Array();
page.add = new Array();
page.div =new Array();

page.add[0]= document.getElementsByClassName('add')[0];
page.add[0].addEventListener('click',function(){
    alert('test');



},false);



var body = document.body;
var struct = document.getElementById('struct');
var window = document.createElement('div');
window.className = 'windowStruct';
struct.addEventListener('click', function(){
    //alert('test');
    window.className = 'window';
    body.appendChild(window);

},false);


/*
*
* <input type="text" class="chet">
 <input type="reset" value="reset">
 <input type="button" class="change" value="change">
 <input type="button" class="add" value="+">
 <input type="button" class="div" value="-">
 <div class="result"></div>
*
* */
