let div, shiftX, shiftY;
class StatsPane {
    constructor() {
        div = document.getElementById("stats");
        this.wordcount_p = document.createElement("p");
        this.inspo_p = document.createElement("p");
        this.knowledge_p = document.createElement("p");

        this.wordcount_p.innerText = "Word count: 2";
        this.inspo_p.innerText = "Inspiration: 0";
        this.knowledge_p.innerText = "Knowledge: 0";

        div.appendChild(this.wordcount_p);
        div.appendChild(this.inspo_p);
        div.appendChild(this.knowledge_p);

        div.onmousedown = this.mousedown.bind(this);
        div.onmouseup = this.mouseup.bind(this);
    }

    mousedown(event) {
        div.style.position = "absolute";
        div.style.zIndex = 1000;

        shiftX = event.clientX - div.getBoundingClientRect().left;
        shiftY = event.clientY - div.getBoundingClientRect().top;
        console.log(shiftX, shiftY);

        this.moveto(event.pageX, event.pageY);
        document.onmousemove = this.mousemove.bind(this);
    }

    mouseup() {
        document.onmousemove = null;
    }

    mousemove(event) {
        this.moveto(event.pageX, event.pageY);
    }

    moveto(pageX, pageY) {
        div.style.left = pageX - shiftX + "px";
        div.style.top = pageY - shiftY + "px";
    }
}

export { StatsPane };