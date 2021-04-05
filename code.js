

formulanimator(document.querySelector('g'));




myimg = document.querySelector("a");

myimg.getAttribute("alt");





/*    icon solor   */


let el = document.querySelectorAll(".color-switcher li");
let cL = [];




for (let i = 0; i < el.length; i++) {

    cL.push(el[i].getAttribute("data-color"));

    el[i].addEventListener("click", function () {

        document.body.classList.remove(...cL);

        document.body.classList.add(this.getAttribute("data-color"));



    }, false);
}

/*    icon solor   */

