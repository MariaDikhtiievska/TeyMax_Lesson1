

const el = document.querySelector(".square");


el.addEventListener("mousedown", onmousedown);

function  onmousedown(e){
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;


        el.style.left = el.offsetLeft - newX + "px";
        el.style.top = el.offsetTop - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
    }
    function  mouseup(){
window.removeEventListener("mousemove", mousemove);
window.removeEventListener("mouseup", mouseup);
    }
}

