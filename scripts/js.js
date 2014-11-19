/**
 * Created by alyona on 26.08.14.
 */

var page = {};
page.body = document.body;
page.chet = document.getElementsByClassName('chet')[0];
page.send = document.getElementsByClassName('send')[0];
//page.text =
page.result = document.createElement('div');
page.result.className = 'result';
page.table = document.createElement('table');
page.table.className = 'tableResult';
page.reset = document.getElementsByClassName('send')[1];

page.array = new Array();

page.send.addEventListener('click', function (){




   // alert('Тест');
    var str  = page.chet.value;
   // alert(str);
    page.body.appendChild(page.result);
    page.result.innerHTML = str.substr(0,5)+' '+
        str.substr(5,3)+' '+str.substr(8,1)+' '+str.substr(9,4)+' '+str.substr(13,7);


    page.body.appendChild(page.table);
    page.table.innerHTML = '<tr>'+

        '<td class="numbercell"> 1) </td><td>'+str.substr(0,5)+' '+
        str.substr(5,3)+' '+str.substr(8,1)+' '+str.substr(9,4)+' '+str.substr(13,7)+'</td>' +
        '<td class="copy"><button>Скопировать</button></td>'+

        '</tr>';

},false);

page.reset.addEventListener('click',function (){
   // alert('test');
    page.chet.value = '';

},false);
