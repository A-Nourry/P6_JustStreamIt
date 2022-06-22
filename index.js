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

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    document.getElementById("movie_title").innerText = value.results[0].title;
    document.getElementById("movie_genre").innerText = value.results[0].genres;
    document.getElementById("movie_release_date").innerText = value.results[0].year;
    document.getElementById("movie_imdb_score").innerText = value.results[0].imdb_score;
    document.getElementById("movie_actors").innerText = value.results[0].actors;
    document.getElementById("movie_image").src = value.results[0].image_url;
    document.getElementById("banner__img").src = value.results[0].image_url;
    document.getElementById("top_ranked_img_1").src = value.results[0].image_url;
    document.getElementById("top_ranked_img_2").src = value.results[1].image_url;
    document.getElementById("top_ranked_img_3").src = value.results[2].image_url;
    document.getElementById("top_ranked_img_4").src = value.results[3].image_url;
  })
  .catch(function(err) {
    // Une erreur est survenue
  });


fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score")
.then(function(res) {
    if (res.ok) {
    return res.json();
    }
})
.then(function(value) {
    document.getElementById("top_ranked_img_5").src = value.results[0].image_url;
    document.getElementById("top_ranked_img_6").src = value.results[1].image_url;
    document.getElementById("top_ranked_img_7").src = value.results[2].image_url;
})
.catch(function(err) {
    // Une erreur est survenue
});


// get data for the first category
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Sci-Fi")
.then(function(res) {
    if (res.ok) {
    return res.json();
    }
})
.then(function(value) {
    document.getElementById("cat_1_img_1").src = value.results[0].image_url;
    document.getElementById("cat_1_img_2").src = value.results[1].image_url;
    document.getElementById("cat_1_img_3").src = value.results[2].image_url;
    document.getElementById("cat_1_img_4").src = value.results[3].image_url;
})
.catch(function(err) {
    // Une erreur est survenue
});

fetch("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&page=2&sort_by=-imdb_score")
.then(function(res) {
    if (res.ok) {
    return res.json();
    }
})
.then(function(value) {
    document.getElementById("cat_1_img_5").src = value.results[0].image_url;
    document.getElementById("cat_1_img_6").src = value.results[1].image_url;
    document.getElementById("cat_1_img_7").src = value.results[2].image_url;
})
.catch(function(err) {
    // Une erreur est survenue
});


// get data for the second category
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Mystery")
.then(function(res) {
    if (res.ok) {
    return res.json();
    }
})
.then(function(value) {
    document.getElementById("cat_2_img_1").src = value.results[0].image_url;
    document.getElementById("cat_2_img_2").src = value.results[1].image_url;
    document.getElementById("cat_2_img_3").src = value.results[2].image_url;
    document.getElementById("cat_2_img_4").src = value.results[3].image_url;
})
.catch(function(err) {
    // Une erreur est survenue
});

fetch("http://localhost:8000/api/v1/titles/?genre=Mystery&page=2&sort_by=-imdb_score")
.then(function(res) {
    if (res.ok) {
    return res.json();
    }
})
.then(function(value) {
    document.getElementById("cat_2_img_5").src = value.results[0].image_url;
    document.getElementById("cat_2_img_6").src = value.results[1].image_url;
    document.getElementById("cat_2_img_7").src = value.results[2].image_url;
})
.catch(function(err) {
    // Une erreur est survenue
});


// get data for the third category
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Fantasy")
.then(function(res) {
    if (res.ok) {
    return res.json();
    }
})
.then(function(value) {
    document.getElementById("cat_3_img_1").src = value.results[0].image_url;
    document.getElementById("cat_3_img_2").src = value.results[1].image_url;
    document.getElementById("cat_3_img_3").src = value.results[2].image_url;
    document.getElementById("cat_3_img_4").src = value.results[3].image_url;
})
.catch(function(err) {
    // Une erreur est survenue
});

fetch("http://localhost:8000/api/v1/titles/?genre=Fantasy&page=2&sort_by=-imdb_score")
.then(function(res) {
    if (res.ok) {
    return res.json();
    }
})
.then(function(value) {
    document.getElementById("cat_3_img_5").src = value.results[0].image_url;
    document.getElementById("cat_3_img_6").src = value.results[1].image_url;
    document.getElementById("cat_3_img_7").src = value.results[2].image_url;
})
.catch(function(err) {
    // Une erreur est survenue
});