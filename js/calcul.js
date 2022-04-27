function add(char) 
{
var display = document.getElementById('dis');
display.value = display.value + char;
}
function calculate() {
var display = document.getElementById('dis');
var test = confirm(display.value + '으로 연산합니다');
    if(test==false){
    return  document.getElementById('dis').value = "",
            document.getElementById('result').value = "";
    }
var result = eval(display.value);
    document.getElementById('result').value = result;
    document.getElementById('dis').value = "";
    if (isFinite(result)==false){
        alert('잘못된 연산입니다.')
    }
}
function reset() 
{
document.getElementById('dis').value = "";
document.getElementById('result').value = "";
}
function del()
{
let dis_del = document.getElementById('dis');

    if(document.getElementById('dis').value.length <=1)
    {
        reset();
    }
    else
    {
        dis_del.value = dis_del.value.substring(0, document.getElementById('dis').value.length - 1);
    }        
}
// 계산기 기능
