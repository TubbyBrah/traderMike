const example = document.getElementsByClassName('class1');

function clicked(){
    console.log("clicked");
}
example[0].addEventListener('click', clicked);
example[1].addEventListener('click', clicked);
example[2].addEventListener('click', clicked);
