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

// Open button
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


// HTTP requests, API GET

const urlSortedByScore = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
const bestMovie = "http://localhost:8000/api/v1/titles/1508669";
const image = "https://m.media-amazon.com/images/M/MV5BNDEyYTA5OWEtYjNiYS00MGZlLThjYzEtMTc1Zjk2NDRmZmYxXkEyXkFqcGdeQXVyNzIwNTQyMw@@._V1_UY268_CR1,0,182,268_AL_.jpg";

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    document.getElementById("banner__img").src = value.results[0].image_url;
  })
  .catch(function(err) {
    // Une erreur est survenue
  });