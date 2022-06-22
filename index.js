// Carousel

(function () {
    let carousels = document.querySelectorAll('.js-product-carousel');

    [].forEach.call(carousels, function (carousel) {
        carouselize(carousel);
    });

})();


function carouselize(carousel) {
    let productList = carousel.querySelector('.js-product-list');
    let productListWidth = 0;
    let productListSteps = 0;
    let products = carousel.querySelectorAll('.product');
    let productAmount = 0;
    let productAmountVisible = 4;
    let carouselPrev = carousel.querySelector('.js-carousel-prev');
    let carouselNext = carousel.querySelector('.js-carousel-next');

    //Count all the products
    [].forEach.call(products, function (product) {
        productAmount++;
        productListWidth += 250;
        productList.style.width = productListWidth + "px";
    });

    function moveProductList() {
        productList.style.transform = "translateX(-" + 205 * productListSteps + "px)";
    };

    carouselNext.addEventListener("click", function () {
        if (productListSteps < productAmount - productAmountVisible) {
            productListSteps++;
            moveProductList();
        }
    });

    carouselPrev.addEventListener("click", function () {
        if (productListSteps > 0) {
            productListSteps--;
            moveProductList();
        }
    });
}

// modal window

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}