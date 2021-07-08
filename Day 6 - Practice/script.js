const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {

    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
        const boxHeight = box.getBoundingClientRect().top;

        if(boxHeight < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}