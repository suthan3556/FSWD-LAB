/* ==========================================
   FOODIEGO FOOD DELIVERY APPLICATION
========================================== */


/* ==========================================
   RESTAURANT DATA
========================================== */

const restaurants = [

    {
        id: 1,
        name: "Spice Garden",
        category: "Biryani",
        rating: 4.7,
        delivery: "25-35 min",
        price: "₹₹",
        offer: "30% OFF",
        image:
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=85"
    },

    {
        id: 2,
        name: "Pizza Palace",
        category: "Pizza",
        rating: 4.6,
        delivery: "20-30 min",
        price: "₹₹",
        offer: "FREE DELIVERY",
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=85"
    },

    {
        id: 3,
        name: "Burger House",
        category: "Burger",
        rating: 4.5,
        delivery: "25-35 min",
        price: "₹₹",
        offer: "20% OFF",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85"
    },

    {
        id: 4,
        name: "South Spice",
        category: "South Indian",
        rating: 4.8,
        delivery: "20-30 min",
        price: "₹",
        offer: "15% OFF",
        image:
            "https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=85"
    },

    {
        id: 5,
        name: "Dragon Wok",
        category: "Chinese",
        rating: 4.4,
        delivery: "30-40 min",
        price: "₹₹",
        offer: "10% OFF",
        image:
            "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=85"
    },

    {
        id: 6,
        name: "Sweet Treats",
        category: "Desserts",
        rating: 4.7,
        delivery: "15-25 min",
        price: "₹",
        offer: "BUY 1 GET 1",
        image:
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=85"
    }

];


/* ==========================================
   MENU DATA
========================================== */

const menuItems = [

    {
        id: 101,
        restaurantId: 1,
        name: "Chicken Biryani",
        description:
            "Fragrant basmati rice with tender chicken and aromatic spices.",
        price: 220,
        rating: 4.8,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=600&q=85"
    },

    {
        id: 102,
        restaurantId: 1,
        name: "Mutton Biryani",
        description:
            "Rich and flavorful biryani made with tender mutton.",
        price: 280,
        rating: 4.7,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=85"
    },

    {
        id: 103,
        restaurantId: 1,
        name: "Paneer Biryani",
        description:
            "Aromatic basmati rice with soft paneer and vegetables.",
        price: 190,
        rating: 4.5,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=85"
    },

    {
        id: 104,
        restaurantId: 1,
        name: "Chicken 65",
        description:
            "Crispy spicy fried chicken served with onion and lemon.",
        price: 170,
        rating: 4.6,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=85"
    },


    {
        id: 201,
        restaurantId: 2,
        name: "Margherita Pizza",
        description:
            "Classic pizza with tomato sauce, mozzarella and basil.",
        price: 249,
        rating: 4.7,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=85"
    },

    {
        id: 202,
        restaurantId: 2,
        name: "Farmhouse Pizza",
        description:
            "Loaded with fresh vegetables and mozzarella cheese.",
        price: 329,
        rating: 4.8,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?w=600&q=85"
    },

    {
        id: 203,
        restaurantId: 2,
        name: "Chicken Pepperoni",
        description:
            "Cheesy pizza topped with chicken pepperoni.",
        price: 369,
        rating: 4.6,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=85"
    },


    {
        id: 301,
        restaurantId: 3,
        name: "Classic Chicken Burger",
        description:
            "Crispy chicken, lettuce, tomato and creamy sauce.",
        price: 179,
        rating: 4.6,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85"
    },

    {
        id: 302,
        restaurantId: 3,
        name: "Cheese Burger",
        description:
            "Juicy burger with melted cheese and special sauce.",
        price: 199,
        rating: 4.7,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=85"
    },

    {
        id: 303,
        restaurantId: 3,
        name: "Veggie Burger",
        description:
            "Crunchy vegetable patty with fresh lettuce.",
        price: 149,
        rating: 4.4,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=85"
    },


    {
        id: 401,
        restaurantId: 4,
        name: "Masala Dosa",
        description:
            "Crispy dosa filled with delicious potato masala.",
        price: 90,
        rating: 4.9,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=85"
    },

    {
        id: 402,
        restaurantId: 4,
        name: "Idli Sambar",
        description:
            "Soft steamed idlis served with hot sambar and chutney.",
        price: 70,
        rating: 4.8,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=85"
    },

    {
        id: 403,
        restaurantId: 4,
        name: "Paneer Dosa",
        description:
            "Crispy dosa filled with spicy paneer masala.",
        price: 130,
        rating: 4.6,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=85"
    },


    {
        id: 501,
        restaurantId: 5,
        name: "Veg Hakka Noodles",
        description:
            "Stir-fried noodles with crunchy vegetables.",
        price: 160,
        rating: 4.5,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=85"
    },

    {
        id: 502,
        restaurantId: 5,
        name: "Chicken Manchurian",
        description:
            "Crispy chicken tossed in spicy Manchurian sauce.",
        price: 220,
        rating: 4.6,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=85"
    },


    {
        id: 601,
        restaurantId: 6,
        name: "Chocolate Cake",
        description:
            "Rich chocolate cake with creamy chocolate frosting.",
        price: 150,
        rating: 4.8,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=85"
    },

    {
        id: 602,
        restaurantId: 6,
        name: "Strawberry Dessert",
        description:
            "Fresh strawberries with cream and sweet layers.",
        price: 170,
        rating: 4.7,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&q=85"
    },

    {
        id: 603,
        restaurantId: 6,
        name: "Vanilla Panna Cotta",
        description:
            "Silky vanilla cream topped with berry compote.",
        price: 160,
        rating: 4.7,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=600&q=85"
    },

    {
        id: 5011,
        restaurantId: 5,
        name: "Schezwan Chow Mein",
        description:
            "Wok-tossed noodles with vegetables and spicy schezwan sauce.",
        price: 180,
        rating: 4.6,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1604908177528-5464e7357d1a?w=600&q=85"
    },

    {
        id: 5021,
        restaurantId: 5,
        name: "Honey Chilli Chicken",
        description:
            "Crispy chicken bites coated in sweet and spicy sauce.",
        price: 240,
        rating: 4.5,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1603133872871-f6cf2b4709de?w=600&q=85"
    },

    {
        id: 4011,
        restaurantId: 4,
        name: "Set Dosa",
        description:
            "Soft layered dosas served with coconut chutney and sambar.",
        price: 120,
        rating: 4.8,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=85"
    },

    {
        id: 3011,
        restaurantId: 3,
        name: "Spicy Chicken Wings",
        description:
            "Crunchy chicken wings tossed in hot and zesty sauce.",
        price: 210,
        rating: 4.6,
        veg: false,
        image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=85"
    },

    {
        id: 2011,
        restaurantId: 2,
        name: "Garlic Bread",
        description:
            "Oven-baked bread with garlic butter and herbs.",
        price: 129,
        rating: 4.7,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=600&q=85"
    },

    {
        id: 1011,
        restaurantId: 1,
        name: "Vegetable Pulao",
        description:
            "Aromatic rice cooked with fresh vegetables and spices.",
        price: 180,
        rating: 4.5,
        veg: true,
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=85"
    }

];


/* ==========================================
   APPLICATION STATE
========================================== */

let cart =
    JSON.parse(
        localStorage.getItem("foodieCart")
    ) || [];

let orders =
    JSON.parse(
        localStorage.getItem("foodieOrders")
    ) || [];

let selectedRestaurant = null;

let selectedCategory = "All";

let discount = 0;

let deliveryType = "Delivery";


/* ==========================================
   DOM ELEMENTS
========================================== */

const restaurantGrid =
    document.getElementById(
        "restaurantGrid"
    );

const menuGrid =
    document.getElementById(
        "menuGrid"
    );

const menuSection =
    document.getElementById(
        "menuSection"
    );

const menuTitle =
    document.getElementById(
        "menuTitle"
    );

const menuSubtitle =
    document.getElementById(
        "menuSubtitle"
    );

const cartDrawer =
    document.getElementById(
        "cartDrawer"
    );

const overlay =
    document.getElementById(
        "overlay"
    );

const cartItems =
    document.getElementById(
        "cartItems"
    );

const cartEmpty =
    document.getElementById(
        "cartEmpty"
    );

const cartSummary =
    document.getElementById(
        "cartSummary"
    );


/* ==========================================
   FORMAT MONEY
========================================== */

function money(amount) {

    return "₹" +
        amount.toLocaleString("en-IN");
}


/* ==========================================
   SAVE DATA
========================================== */

function saveCart() {

    localStorage.setItem(
        "foodieCart",
        JSON.stringify(cart)
    );
}

function saveOrders() {

    localStorage.setItem(
        "foodieOrders",
        JSON.stringify(orders)
    );
}


/* ==========================================
   RESTAURANT DISPLAY
========================================== */

function renderRestaurants(
    search = "",
    category = "All"
) {

    let result =
        restaurants.filter(
            restaurant => {

                const searchText =
                    (
                        restaurant.name +
                        " " +
                        restaurant.category
                    ).toLowerCase();

                const matchesSearch =
                    searchText.includes(
                        search.toLowerCase()
                    );

                const matchesCategory =
                    category === "All" ||
                    restaurant.category === category;

                return (
                    matchesSearch &&
                    matchesCategory
                );
            }
        );


    if (result.length === 0) {

        restaurantGrid.innerHTML = `
            <div class="empty-result">
                <h3>😕 No restaurants found</h3>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    restaurantGrid.innerHTML =
        result.map(
            restaurant => `

                <article
                    class="restaurant-card"
                    onclick="openRestaurant(${restaurant.id})"
                >

                    <div class="restaurant-image">

                        <img
                            src="${restaurant.image}"
                            alt="${restaurant.name}"
                        >

                        <span class="offer">
                            ${restaurant.offer}
                        </span>

                        <button
                            class="favorite"
                            onclick="
                                event.stopPropagation();
                                toggleFavorite(this, ${restaurant.id})
                            "
                        >
                            ♡
                        </button>

                    </div>


                    <div class="restaurant-info">

                        <div class="restaurant-name-row">

                            <h3>
                                ${restaurant.name}
                            </h3>

                            <span class="rating">
                                ★ ${restaurant.rating}
                            </span>

                        </div>


                        <p>
                            ${restaurant.category}
                        </p>


                        <div class="restaurant-meta">

                            <span>
                                🛵 ${restaurant.delivery}
                            </span>

                            <span>
                                ${restaurant.price}
                            </span>

                            <span>
                                ✓ Top rated
                            </span>

                        </div>

                    </div>

                </article>
            `
        ).join("");
}


/* ==========================================
   FAVORITES
========================================== */

function toggleFavorite(
    button,
    id
) {

    button.classList.toggle("active");

    button.textContent =
        button.classList.contains("active")
            ? "♥"
            : "♡";

    showToast(
        button.classList.contains("active")
            ? "Added to favorites ❤️"
            : "Removed from favorites"
    );
}


/* ==========================================
   OPEN RESTAURANT
========================================== */

function openRestaurant(id) {

    selectedRestaurant =
        restaurants.find(
            restaurant =>
                restaurant.id === id
        );


    menuTitle.textContent =
        selectedRestaurant.name;

    menuSubtitle.textContent =
        `${selectedRestaurant.category} • ⭐ ${selectedRestaurant.rating} • ${selectedRestaurant.delivery}`;


    renderMenu();


    menuSection.classList.add("show");


    menuSection.scrollIntoView({
        behavior: "smooth"
    });
}


/* ==========================================
   RENDER MENU
========================================== */

function renderMenu() {

    const items =
        menuItems.filter(
            item =>
                item.restaurantId ===
                selectedRestaurant.id
        );


    menuGrid.innerHTML =
        items.map(
            item => `

                <article class="menu-card">

                    <div class="menu-card-image">

                        <img
                            src="${item.image}"
                            alt="${item.name}"
                        >

                        <span
                            class="
                                veg-dot
                                ${item.veg
                                    ? ""
                                    : "nonveg-dot"}
                            "
                        ></span>

                    </div>


                    <div class="menu-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <span class="food-rating">
                            ★ ${item.rating}
                        </span>

                        <p>
                            ${item.description}
                        </p>


                        <div class="menu-bottom">

                            <span class="price">
                                ${money(item.price)}
                            </span>

                            <button
                                class="add-btn"
                                onclick="addToCart(${item.id})"
                            >
                                + Add
                            </button>

                        </div>

                    </div>

                </article>
            `
        ).join("");
}


/* ==========================================
   ADD TO CART
========================================== */

function addToCart(itemId) {

    const item =
        menuItems.find(
            item => item.id === itemId
        );


    if (!item) return;


    if (
        cart.length > 0 &&
        cart[0].restaurantId !==
            item.restaurantId
    ) {

        const change =
            confirm(
                "Your cart contains items from another restaurant. Clear the cart and add this item?"
            );

        if (!change) return;

        cart = [];
    }


    const existing =
        cart.find(
            cartItem =>
                cartItem.id === itemId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...item,
            quantity: 1,
            restaurantId:
                item.restaurantId
        });

    }


    saveCart();

    updateCart();

    showToast(
        `${item.name} added to cart 🛒`
    );
}


/* ==========================================
   UPDATE CART
========================================== */

function updateCart() {

    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    document.getElementById(
        "cartCount"
    ).textContent = totalItems;


    if (cart.length === 0) {

        cartItems.innerHTML = "";

        cartEmpty.classList.add(
            "show"
        );

        cartSummary.style.display =
            "none";

        document.getElementById(
            "cartRestaurant"
        ).textContent =
            "No items added";

        return;
    }


    cartEmpty.classList.remove(
        "show"
    );

    cartSummary.style.display =
        "block";


    const restaurant =
        restaurants.find(
            r =>
                r.id ===
                cart[0].restaurantId
        );


    document.getElementById(
        "cartRestaurant"
    ).textContent =
        restaurant
            ? restaurant.name
            : "";


    cartItems.innerHTML =
        cart.map(
            item => `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div class="cart-item-info">

                        <h4>
                            ${item.name}
                        </h4>

                        <p>
                            ${money(item.price)}
                        </p>


                        <div class="qty">

                            <button
                                onclick="
                                    changeQuantity(
                                        ${item.id},
                                        -1
                                    )
                                "
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="
                                    changeQuantity(
                                        ${item.id},
                                        1
                                    )
                                "
                            >
                                +
                            </button>

                        </div>

                    </div>

                    <strong class="item-price">
                        ${money(
                            item.price *
                            item.quantity
                        )}
                    </strong>

                </div>
            `
        ).join("");


    calculateTotal();
}


/* ==========================================
   CHANGE QUANTITY
========================================== */

function changeQuantity(
    id,
    amount
) {

    const item =
        cart.find(
            item => item.id === id
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );
    }


    saveCart();

    updateCart();
}


/* ==========================================
   CALCULATE TOTAL
========================================== */

function calculateTotal() {

    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    const deliveryFee =
        deliveryType === "Pickup"
            ? 0
            : subtotal >= 499
                ? 0
                : 40;


    const discountAmount =
        Math.round(
            subtotal *
            discount
        );


    const total =
        subtotal +
        deliveryFee -
        discountAmount;


    document.getElementById(
        "subtotal"
    ).textContent =
        money(subtotal);


    document.getElementById(
        "deliveryFee"
    ).textContent =
        deliveryFee === 0
            ? "FREE"
            : money(deliveryFee);


    document.getElementById(
        "discount"
    ).textContent =
        "-" +
        money(discountAmount);


    document.getElementById(
        "total"
    ).textContent =
        money(total);


    document.getElementById(
        "checkoutTotal"
    ).textContent =
        money(total);


    return {
        subtotal,
        deliveryFee,
        discountAmount,
        total
    };
}


/* ==========================================
   COUPON
========================================== */

document
    .getElementById("applyCoupon")
    .addEventListener(
        "click",
        function () {

            const code =
                document
                    .getElementById(
                        "couponInput"
                    )
                    .value
                    .trim()
                    .toUpperCase();


            if (code === "FOOD10") {

                discount = 0.10;

                calculateTotal();

                showToast(
                    "10% discount applied! 🎉"
                );

            } else if (code === "WELCOME50") {

                discount = 0.15;

                calculateTotal();

                showToast(
                    "15% discount applied! 🎉"
                );

            } else {

                discount = 0;

                calculateTotal();

                showToast(
                    "Invalid coupon code"
                );
            }

        }
    );


/* ==========================================
   OPEN CART
========================================== */

document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        () => {

            cartDrawer.classList.add(
                "show"
            );

            overlay.classList.add(
                "show"
            );

        }
    );


/* ==========================================
   CLOSE CART
========================================== */

function closeCart() {

    cartDrawer.classList.remove(
        "show"
    );

    overlay.classList.remove(
        "show"
    );
}

document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );

overlay.addEventListener(
    "click",
    closeCart
);


/* ==========================================
   CHECKOUT
========================================== */

document
    .getElementById("checkoutBtn")
    .addEventListener(
        "click",
        function () {

            if (cart.length === 0) {

                showToast(
                    "Your cart is empty!"
                );

                return;
            }


            const totals =
                calculateTotal();


            document.getElementById(
                "checkoutTotal"
            ).textContent =
                money(totals.total);


            closeCart();


            document
                .getElementById(
                    "checkoutModal"
                )
                .classList.add(
                    "show"
                );

        }
    );


/* ==========================================
   CLOSE CHECKOUT
========================================== */

document
    .getElementById("closeCheckout")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "checkoutModal"
                )
                .classList.remove(
                    "show"
                );

        }
    );


/* ==========================================
   DELIVERY / PICKUP
========================================== */

document
    .querySelectorAll(".delivery-tab")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".delivery-tab"
                    )
                    .forEach(
                        btn =>
                            btn.classList.remove(
                                "active"
                            )
                    );


                this.classList.add(
                    "active"
                );


                deliveryType =
                    this.dataset.type;


                const addressFields =
                    document.getElementById(
                        "addressFields"
                    );


                if (
                    deliveryType ===
                    "Pickup"
                ) {

                    addressFields.style.display =
                        "none";

                    document.getElementById(
                        "customerName"
                    ).required = false;

                    document.getElementById(
                        "customerPhone"
                    ).required = false;

                    document.getElementById(
                        "customerAddress"
                    ).required = false;

                } else {

                    addressFields.style.display =
                        "block";

                    document.getElementById(
                        "customerName"
                    ).required = true;

                    document.getElementById(
                        "customerPhone"
                    ).required = true;

                    document.getElementById(
                        "customerAddress"
                    ).required = true;
                }


                calculateTotal();

            }
        );

    });


/* ==========================================
   PLACE ORDER
========================================== */

document
    .getElementById("checkoutForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (cart.length === 0) {

                showToast(
                    "Your cart is empty!"
                );

                return;
            }


            const totals =
                calculateTotal();


            const restaurant =
                restaurants.find(
                    r =>
                        r.id ===
                        cart[0].restaurantId
                );


            const order = {

                id:
                    Math.floor(
                        100000 +
                        Math.random() *
                        900000
                    ),

                restaurant:
                    restaurant.name,

                restaurantId:
                    restaurant.id,

                items:
                    [...cart],

                total:
                    totals.total,

                payment:
                    document.getElementById(
                        "paymentMethod"
                    ).value,

                deliveryType:
                    deliveryType,

                customer:
                    document.getElementById(
                        "customerName"
                    ).value,

                phone:
                    document.getElementById(
                        "customerPhone"
                    ).value,

                address:
                    document.getElementById(
                        "customerAddress"
                    ).value,

                instructions:
                    document.getElementById(
                        "instructions"
                    ).value,

                status: "Placed",

                date:
                    new Date().toLocaleString()
            };


            orders.unshift(order);

            saveOrders();


            cart = [];

            discount = 0;

            saveCart();

            updateCart();


            document
                .getElementById(
                    "checkoutModal"
                )
                .classList.remove(
                    "show"
                );


            this.reset();


            showToast(
                "Order placed successfully! 🎉"
            );


            setTimeout(
                () => {

                    openTracking(order);

                },
                600
            );


            startOrderTracking(order);

        }
    );


/* ==========================================
   OPEN TRACKING
========================================== */

function openTracking(order) {

    document.getElementById(
        "orderNumber"
    ).textContent =
        order.id;


    document.getElementById(
        "trackingRestaurant"
    ).textContent =
        order.restaurant;


    document.getElementById(
        "trackingAmount"
    ).textContent =
        money(order.total);


    document.getElementById(
        "trackingPayment"
    ).textContent =
        order.payment;


    document
        .getElementById(
            "trackingModal"
        )
        .classList.add(
            "show"
        );


    updateTrackingUI(
        order.status
    );
}


/* ==========================================
   TRACKING UI
========================================== */

function updateTrackingUI(
    status
) {

    const steps = [
        document.getElementById("step1"),
        document.getElementById("step2"),
        document.getElementById("step3"),
        document.getElementById("step4")
    ];


    const statusIndex = {

        Placed: 0,

        Preparing: 1,

        "On the way": 2,

        Delivered: 3

    };


    const index =
        statusIndex[status] ?? 0;


    steps.forEach(
        (step, i) => {

            if (i <= index) {

                step.classList.add(
                    "active"
                );

            } else {

                step.classList.remove(
                    "active"
                );
            }

        }
    );


    const width =
        index * 33.33;


    document.getElementById(
        "progressLine"
    ).style.width =
        width + "%";


    const messages = {

        Placed: [
            "Order placed",
            "The restaurant has received your order."
        ],

        Preparing: [
            "Preparing your food",
            "The chef is preparing your delicious meal."
        ],

        "On the way": [
            "Your food is on the way",
            "Our delivery partner has picked up your order."
        ],

        Delivered: [
            "Delivered 🎉",
            "Enjoy your delicious meal!"
        ]

    };


    document.getElementById(
        "trackingStatus"
    ).textContent =
        messages[status][0];


    document.getElementById(
        "trackingText"
    ).textContent =
        messages[status][1];
}


/* ==========================================
   SIMULATE ORDER TRACKING
========================================== */

function startOrderTracking(order) {

    const statuses = [
        "Preparing",
        "On the way",
        "Delivered"
    ];


    statuses.forEach(
        (status, index) => {

            setTimeout(
                () => {

                    order.status =
                        status;

                    saveOrders();


                    updateTrackingUI(
                        status
                    );

                },

                (index + 1) * 7000

            );

        }
    );
}


/* ==========================================
   CLOSE TRACKING
========================================== */

document
    .getElementById("closeTracking")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "trackingModal"
                )
                .classList.remove(
                    "show"
                );

        }
    );


/* ==========================================
   SEARCH
========================================== */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        function () {

            renderRestaurants(
                this.value,
                selectedCategory
            );

        }
    );


document
    .getElementById("searchBtn")
    .addEventListener(
        "click",
        function () {

            const search =
                document.getElementById(
                    "searchInput"
                ).value;


            renderRestaurants(
                search,
                selectedCategory
            );

            document
                .getElementById(
                    "restaurantGrid"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* ==========================================
   CATEGORIES
========================================== */

document
    .querySelectorAll(".category")
    .forEach(
        button => {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".category"
                        )
                        .forEach(
                            btn =>
                                btn.classList.remove(
                                    "active"
                                )
                        );


                    this.classList.add(
                        "active"
                    );


                    selectedCategory =
                        this.dataset.category;


                    const search =
                        document.getElementById(
                            "searchInput"
                        ).value;


                    renderRestaurants(
                        search,
                        selectedCategory
                    );

                }
            );

        }
    );


/* ==========================================
   SEE ALL
========================================== */

document
    .getElementById("seeAllBtn")
    .addEventListener(
        "click",
        function () {

            selectedCategory =
                "All";


            document
                .querySelectorAll(
                    ".category"
                )
                .forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


            document
                .querySelector(
                    '[data-category="All"]'
                )
                .classList.add(
                    "active"
                );


            document.getElementById(
                "searchInput"
            ).value = "";


            renderRestaurants();

        }
    );


/* ==========================================
   BACK TO RESTAURANTS
========================================== */

document
    .getElementById(
        "backToRestaurants"
    )
    .addEventListener(
        "click",
        function () {

            menuSection.classList.remove(
                "show"
            );

            document
                .getElementById(
                    "restaurantGrid"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


/* ==========================================
   ORDER HISTORY
========================================== */

document
    .getElementById("ordersBtn")
    .addEventListener(
        "click",
        function () {

            renderOrderHistory();

            document
                .getElementById(
                    "ordersModal"
                )
                .classList.add(
                    "show"
                );

        }
    );


function renderOrderHistory() {

    const container =
        document.getElementById(
            "orderHistory"
        );


    if (orders.length === 0) {

        container.innerHTML = `
            <div class="cart-empty show">
                <div>📦</div>
                <h3>No orders yet</h3>
                <p>Your orders will appear here.</p>
            </div>
        `;

        return;
    }


    container.innerHTML =
        orders.map(
            order => `

                <div class="history-item">

                    <div class="history-top">

                        <strong>
                            ${order.restaurant}
                        </strong>

                        <span class="history-status">
                            ${order.status}
                        </span>

                    </div>

                    <p>
                        Order #${order.id}
                        • ${order.date}
                    </p>

                    <div class="history-bottom">

                        <span>
                            ${order.items.length}
                            item(s)
                        </span>

                        <strong>
                            ${money(order.total)}
                        </strong>

                    </div>

                    <button
                        class="see-all"
                        onclick="
                            openTrackingFromHistory(
                                ${order.id}
                            )
                        "
                    >
                        Track order →
                    </button>

                </div>
            `
        ).join("");
}


function openTrackingFromHistory(
    id
) {

    const order =
        orders.find(
            order =>
                order.id === id
        );


    if (!order) return;


    document
        .getElementById(
            "ordersModal"
        )
        .classList.remove(
            "show"
        );


    openTracking(order);
}


/* ==========================================
   CLOSE ORDERS
========================================== */

document
    .getElementById("closeOrders")
    .addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "ordersModal"
                )
                .classList.remove(
                    "show"
                );

        }
    );


/* ==========================================
   DARK MODE
========================================== */

document
    .getElementById("darkModeBtn")
    .addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark"
            );


            const dark =
                document.body.classList.contains(
                    "dark"
                );


            this.textContent =
                dark ? "☀️" : "🌙";


            localStorage.setItem(
                "foodieDarkMode",
                dark
            );

        }
    );


if (
    localStorage.getItem(
        "foodieDarkMode"
    ) === "true"
) {

    document.body.classList.add(
        "dark"
    );

    document.getElementById(
        "darkModeBtn"
    ).textContent = "☀️";
}


/* ==========================================
   HEADER LOCATION
========================================== */

document
    .getElementById(
        "headerLocation"
    )
    .addEventListener(
        "click",
        function () {

            const location =
                prompt(
                    "Enter your delivery location:",
                    this.textContent
                );


            if (
                location &&
                location.trim()
            ) {

                this.textContent =
                    location.trim();

                showToast(
                    "Delivery location updated 📍"
                );

            }

        }
    );


/* ==========================================
   TOAST
========================================== */

let toastTimer;

function showToast(
    message
) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* ==========================================
   INITIALIZE
========================================== */

renderRestaurants();

updateCart();