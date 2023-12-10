let product = document.querySelectorAll(".product");



if (product) {

    product.forEach((el) => {

        let currentProduct = el;
        let imageSwitchItem = currentProduct.querySelectorAll(".image__switch-item");
        let pagination = currentProduct.querySelector(".product__image-pagination");

        imageSwitchItem.forEach((item, index) => {

            item.dataset.index = index;

            pagination.innerHTML += `<li class="image__pagination-item ${index == 0 ? 'image__pagination-item-active' : ''} " data-index=${index}></li>`

            item.addEventListener("mouseenter", (event) => {

                let target = event.target;

                let imagePaginationItem = pagination.querySelectorAll(".image__pagination-item");

                imagePaginationItem.forEach(item => {
                    item.classList.remove("image__pagination-item-active");

                    if (target.dataset.index == item.dataset.index) {
                        item.classList.add("image__pagination-item-active");
                    }
                })
            })

            item.addEventListener("mouseleave", (event) => {

                let imagePaginationItem = pagination.querySelectorAll(".image__pagination-item");

                imagePaginationItem.forEach(item => {
                    item.classList.remove("image__pagination-item-active");
                })

                imagePaginationItem[0].classList.add("image__pagination-item-active");

            })

        })

    })
}



