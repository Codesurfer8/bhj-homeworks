const products = Array.from(document.querySelectorAll(".product"));

products.forEach(
    (item) => {
        const countPlus = item.querySelector(".product__quantity-control_inc");
        const countMinus = item.querySelector(".product__quantity-control_dec");
        const countValue = item.querySelector(".product__quantity-value");

        countPlus.addEventListener(
            "click",
            () => {
                countValue.textContent++;
            }
        );

        countMinus.addEventListener(
            "click",
            () => {
                if (countValue.textContent > 1) {
                    countValue.textContent--;
                }


            }
        );

        const addButtons = item.querySelector(".product__add");
        const cartProducts = document.querySelector(".cart__products");
        addButtons.addEventListener(
            "click",
            () => {
                const currentIdPr = addButtons.closest(".product").dataset.id;
                let currentCountValuePr = countValue.textContent;

                const currentImg = item.querySelector(".product__image").src;

                const productInCart = cartProducts.querySelector(`.cart__product[data-id="${currentIdPr}"]`);

                if (productInCart) {
                    productInCart.querySelector(".cart__product-count").textContent = Number(productInCart.querySelector(".cart__product-count").textContent) + Number(currentCountValuePr);
                    if (productInCart.querySelector(".cart__product-count").textContent < 0) {
                        productInCart.querySelector(".cart__product-count").textContent = 0;
                    }
                } else {
                    cartProducts.insertAdjacentHTML(
                        "beforeend",
                        `<div class="cart__product" data-id="${currentIdPr}">
                            <img class="cart__product-image" src="${currentImg}">
                            <div class="cart__product-count">${currentCountValuePr}</div>
                        </div>`
                    );
                }
            }
        )
    }
);
