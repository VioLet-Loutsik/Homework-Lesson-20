
var str1_ = "You clicked First button",
changeText = function()  {
    document.querySelector('h3').textContent = str1_;
}
document.getElementById('btn1').addEventListener('click', changeText, false);

var str2_ = 'You clicked Second button',
changeText = function()  {
    document.querySelector('h3').textContent = str2_;
}
document.getElementById('btn2').addEventListener('click', changeText, false);

var str3_ = 'You clicked Third button',
changeText = function()  {
    document.querySelector('h3').textContent = str3_;
}
document.getElementById('btn3').addEventListener('click', changeText, false);

