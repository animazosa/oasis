document.addEventListener("mousemove", parallax);
function parallax(e){
    console.log("ahah")

    let obs = document.querySelector(".container").children
    Array.from(obs).forEach(function(move){
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 100;
        var y = (e.clientY * moving_value) / 100;
        console.log(moving_value)
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}