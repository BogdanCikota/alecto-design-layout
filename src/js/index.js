const header = document.querySelector('header');
const leftArrow = document.querySelector('.left-arrow img');
const rightArrow = document.querySelector('.right-arrow img');
let counter = 1;
const dots = document.querySelectorAll('.dot');

header.style = `background-image: url('assets/images/carousel/nature${counter}.jpeg')`;

//-------click-------
leftArrow.addEventListener('click', () => {

    if (counter > 1) {
        header.style = `background-image: url('assets/images/carousel/nature${--counter}.jpeg')`;
    } else {
        counter = 5;
        header.style = `background-image: url('assets/images/carousel/nature${counter}.jpeg')`;
    }

});

rightArrow.addEventListener('click', () => {
    setInterval(function () { }, 3000);
    if (counter < 5) {
        header.style = `background-image: url('assets/images/carousel/nature${++counter}.jpeg')`;
    } else {
        counter = 1;
        header.style = `background-image: url('assets/images/carousel/nature${counter}.jpeg')`;
    }

});


for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    dot.addEventListener('click', () => {
        counter = i + 1;
        header.style = `background-image: url('assets/images/carousel/nature${counter}.jpeg')`;
    });

}

//---------touch----------

leftArrow.addEventListener('touchmove', () => {

    if (counter > 1) {
        header.style = `background-image: url('assets/images/carousel/nature${--counter}.jpeg')`;
    } else {
        counter = 5;
        header.style = `background-image: url('assets/images/carousel/nature${counter}.jpeg')`;
    }

});

rightArrow.addEventListener('touchmove', () => {
    setInterval(function () { }, 3000);
    if (counter < 5) {
        header.style = `background-image: url('assets/images/carousel/nature${++counter}.jpeg')`;
    } else {
        counter = 1;
        header.style = `background-image: url('assets/images/carousel/nature${counter}.jpeg')`;
    }

});


for (let i = 0; i < dots.length; i++) {
    const dot = dots[i];
    dot.addEventListener('touchmove', () => {
        counter = i + 1;
        header.style = `background-image: url('assets/images/carousel/nature${counter}.jpeg')`;
    });

}


//---------interval----------

setInterval(function () {
    if (counter < 5) {
        header.style = `background-image: url('assets/images/carousel/nature${++counter}.jpeg')`;

    } else {
        counter = 1;
        header.style = `background-image: url('assets/images/carousel/nature${counter}.jpeg')`;

    }

}, 5000);