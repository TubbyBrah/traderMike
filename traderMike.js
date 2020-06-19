const example = document.getElementsByClassName('class1');

function clicked(){
    console.log("clicked");
}
example[1].addEventListener('click', clicked);
