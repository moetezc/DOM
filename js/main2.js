var removebutton = document.querySelectorAll(".fa-times-circle");

Array.from(removebutton).map(el => {
    el.addEventListener("click", () =>{
        el.parentElement.parentElement.remove();
    });
});
 
var likebutton = document.querySelectorAll(".fa-gratipay")

Array.from(likebutton).map(el => {
    el.addEventListener("click", () =>{
        el.classList.toggle("red");
    });
});

var plusbutton = document.querySelectorAll(".fa-plus-square")
var minusbutton = document.querySelectorAll(".fa-minus-square")

Array.from(plusbutton).map(el => {
    el.addEventListener("click", () =>{
        el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) + 1;
        var price = el.parentElement.nextElementSibling.innerHTML.replace("DT","");
        total.innerHTML= parseInt(total.innerHTML.replace("DT","")) + parseInt(price) + "DT";
    });
});

Array.from(minusbutton).map(el => {
    el.addEventListener("click", () =>{
        if (el.previousElementSibling.innerHTML > 0) {
            el.previousElementSibling.innerHTML = 
            parseInt(el.previousElementSibling.innerHTML) -1;
            var price = el.parentElement.nextElementSibling.innerHTML.replace("DT","");
            total.innerHTML= parseInt(total.innerHTML.replace("DT","")) - parseInt(price) + "DT";
        }
    });
});