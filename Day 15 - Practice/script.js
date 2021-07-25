const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerHTML = 0

    const updateCounter = () => {   
        const target = Number(counter.getAttribute('data-target'))
        console.log(target);
        const initialNumber = +counter.innerText
        const increment = target / 200;

        if(initialNumber < target) {
            counter.innerText = Math.ceil(initialNumber + increment)
            setTimeout(updateCounter, 1) 
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})

