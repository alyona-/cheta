/**
 * Created by alyona on 28.08.14.
 */

var page = {};


page.body = document.body;
page.struct = document.getElementById('struct');
page.window = document.createElement('div');
page.struct.addEventListener('click', function(){
    alert('test');
    page.window.className = 'window';
    page.body.appendChild(window);
},false);


page.fon.className = 'fon';
page.fon.innerHTML = '<div class="window"></div>';

page.fon.addEventListener('click',function(){
    page.body.removeChild(page.window);
    page.body.removeChild(page.fon);
},false);

page.but =document.createElement('button');
page.but.innerText = 'Закрыть';
page.but.className = 'buttonClose';
page.window.appendChild(page.but);

page.but.addEventListener('click',closeWin,false){

}

function closeWin (){
    page.body.removeChild(page.fon);
    page.window.removeChild(page.but);
    page.body.removeChild(page.window);

}