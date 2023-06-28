function openBox(){
    var links = document.getElementById('nav-links');
    links.style.right = '0px';
    var dom = document.getElementById('fa2');
    dom.style.display ='none';
}
function hideBox(){
    var links = document.getElementById('nav-links');
    links.style.right = '-200px';
    var dom = document.getElementById('fa2');
    dom.style.display ='block';
}