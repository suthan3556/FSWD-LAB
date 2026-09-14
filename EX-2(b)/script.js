/* =====================================================
   CLASSIFIND - CLASSIFIEDS WEB APPLICATION
   ===================================================== */


/* =====================================================
   PRODUCT DATABASE
   ===================================================== */

const defaultProducts = [

    /* ---------- MOBILES ---------- */

    {
        id: 1,
        name: "iPhone 13 128GB",
        category: "Mobiles",
        price: 38500,
        image: "https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&w=800&q=80",
        description: "Excellent condition iPhone 13 with 128GB storage. Original box and cable included.",
        seller: "Arun Kumar",
        phone: "9876543210",
        location: "Chennai",
        date: "Today",
        favorite: false
    },

    {
        id: 2,
        name: "Samsung Galaxy S22",
        category: "Mobiles",
        price: 28000,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
        description: "Samsung Galaxy S22 in excellent condition. Original charger included.",
        seller: "Manoj",
        phone: "9777666555",
        location: "Chennai",
        date: "Yesterday",
        favorite: false
    },

    {
        id: 3,
        name: "OnePlus 11 5G",
        category: "Mobiles",
        price: 33000,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
        description: "OnePlus 11 5G with fast processor and excellent camera. Very good condition.",
        seller: "Rahul",
        phone: "9123456780",
        location: "Tambaram",
        date: "2 days ago",
        favorite: false
    },


    /* ---------- ELECTRONICS ---------- */

    {
        id: 4,
        name: "Dell Inspiron Laptop",
        category: "Electronics",
        price: 42000,
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80",
        description: "Dell laptop with 8GB RAM and 512GB SSD. Perfect for students and office work.",
        seller: "Vijay",
        phone: "9988776655",
        location: "Chennai",
        date: "Today",
        favorite: false
    },

    {
        id: 5,
        name: "Sony Bluetooth Headphones",
        category: "Electronics",
        price: 5500,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        description: "Sony wireless headphones with excellent sound quality and long battery life.",
        seller: "Deepak",
        phone: "9888999000",
        location: "Velachery",
        date: "2 days ago",
        favorite: false
    },

    {
        id: 6,
        name: "Canon DSLR Camera",
        category: "Electronics",
        price: 32000,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        description: "Canon DSLR camera with lens and camera bag. Great for photography enthusiasts.",
        seller: "Suresh",
        phone: "9333444555",
        location: "Adyar",
        date: "3 days ago",
        favorite: false
    },


    /* ---------- VEHICLES ---------- */

    {
        id: 7,
        name: "Honda Activa 6G",
        category: "Vehicles",
        price: 78000,
        image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
        description: "Single-owner Honda Activa 6G. Regularly serviced and maintained well.",
        seller: "Vignesh",
        phone: "9988776655",
        location: "Chennai",
        date: "Today",
        favorite: false
    },

    {
        id: 8,
        name: "Royal Enfield Classic 350",
        category: "Vehicles",
        price: 145000,
        image: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=800&q=80",
        description: "Royal Enfield Classic 350 in very good condition. Regularly serviced.",
        seller: "Karthik",
        phone: "9222333444",
        location: "Chennai",
        date: "Yesterday",
        favorite: false
    },

    {
        id: 9,
        name: "Maruti Suzuki Swift",
        category: "Vehicles",
        price: 525000,
        image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
        description: "Well maintained Maruti Suzuki Swift. Clean interior and excellent condition.",
        seller: "Prakash",
        phone: "9111222333",
        location: "Chennai",
        date: "3 days ago",
        favorite: false
    },


    /* ---------- FURNITURE ---------- */

    {
        id: 10,
        name: "Modern Study Table",
        category: "Furniture",
        price: 4500,
        image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80",
        description: "Modern wooden study table with storage drawer. Strong and clean.",
        seller: "Priya",
        phone: "9000011111",
        location: "Chennai",
        date: "Today",
        favorite: false
    },

    {
        id: 11,
        name: "Wooden Sofa Set",
        category: "Furniture",
        price: 12000,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        description: "Comfortable wooden sofa set. Good condition and suitable for a living room.",
        seller: "Meena",
        phone: "9666777888",
        location: "Adyar",
        date: "2 days ago",
        favorite: false
    },

    {
        id: 12,
        name: "Office Computer Chair",
        category: "Furniture",
        price: 3500,
        image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=800&q=80",
        description: "Comfortable ergonomic office chair. Perfect for work from home or office use.",
        seller: "Sanjay",
        phone: "9555666777",
        location: "Velachery",
        date: "4 days ago",
        favorite: false
    },


    /* ---------- FASHION ---------- */

    {
        id: 13,
        name: "Nike Running Shoes",
        category: "Fashion",
        price: 2200,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        description: "Original Nike running shoes. Used only a few times and in excellent condition.",
        seller: "Karthik",
        phone: "9444555666",
        location: "Tambaram",
        date: "Today",
        favorite: false
    },

    {
        id: 14,
        name: "Leather Jacket",
        category: "Fashion",
        price: 3500,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        description: "Premium leather jacket. Very lightly used and in excellent condition.",
        seller: "Arun",
        phone: "9777888999",
        location: "Chennai",
        date: "2 days ago",
        favorite: false
    },

    {
        id: 15,
        name: "Casual Backpack",
        category: "Fashion",
        price: 1200,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        description: "Stylish and spacious backpack suitable for college or office.",
        seller: "Naveen",
        phone: "9888777666",
        location: "Anna Nagar",
        date: "3 days ago",
        favorite: false
    },


    /* ---------- BOOKS ---------- */

    {
        id: 16,
        name: "Engineering Books Bundle",
        category: "Books",
        price: 1800,
        image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
        description: "Collection of engineering textbooks. All books are in good condition.",
        seller: "Sanjay",
        phone: "9555666777",
        location: "Chennai",
        date: "Today",
        favorite: false
    },

    {
        id: 17,
        name: "Programming Books Collection",
        category: "Books",
        price: 2500,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80",
        description: "Collection of programming and computer science books for students.",
        seller: "Vishnu",
        phone: "9444333222",
        location: "Chennai",
        date: "3 days ago",
        favorite: false
    },


    /* ---------- OTHERS ---------- */

    {
        id: 18,
        name: "Mountain Bicycle",
        category: "Others",
        price: 8500,
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80",
        description: "Strong mountain bicycle with gears. Great for fitness and daily riding.",
        seller: "Ashwin",
        phone: "9111222333",
        location: "Chennai",
        date: "Today",
        favorite: false
    },

    {
        id: 19,
        name: "Electric Guitar",
        category: "Others",
        price: 9500,
        image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&w=800&q=80",
        description: "Electric guitar in excellent condition. Suitable for beginners and musicians.",
        seller: "Vishal",
        phone: "9888666555",
        location: "Chennai",
        date: "2 days ago",
        favorite: false
    },

    {
        id: 20,
        name: "Home Gym Dumbbells",
        category: "Others",
        price: 3000,
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
        description: "Set of home gym dumbbells. Excellent for home workouts.",
        seller: "Ramesh",
        phone: "9666555444",
        location: "Tambaram",
        date: "4 days ago",
        favorite: false
    }

];


/* =====================================================
   APPLICATION VARIABLES
   ===================================================== */

let products;

const savedProducts =
    localStorage.getItem("classifind_products");

if (savedProducts) {

    products = JSON.parse(savedProducts);

} else {

    products = defaultProducts;

    saveProducts();

}


let selectedCategory = "All";
let searchText = "";
let selectedSort = "latest";


/* =====================================================
   SAVE PRODUCTS
   ===================================================== */

function saveProducts() {

    localStorage.setItem(
        "classifind_products",
        JSON.stringify(products)
    );

}


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts() {

    const grid =
        document.getElementById("productGrid");

    const noResults =
        document.getElementById("noResults");


    let result = [...products];


    /* CATEGORY */

    if (selectedCategory !== "All") {

        result = result.filter(product =>
            product.category === selectedCategory
        );

    }


    /* SEARCH */

    if (searchText.trim() !== "") {

        const search =
            searchText.toLowerCase().trim();

        result = result.filter(product =>

            product.name.toLowerCase().includes(search) ||

            product.category.toLowerCase().includes(search) ||

            product.location.toLowerCase().includes(search) ||

            product.description.toLowerCase().includes(search)

        );

    }


    /* SORT */

    if (selectedSort === "low") {

        result.sort((a, b) =>
            Number(a.price) - Number(b.price)
        );

    }


    if (selectedSort === "high") {

        result.sort((a, b) =>
            Number(b.price) - Number(a.price)
        );

    }


    if (selectedSort === "latest") {

        result.sort((a, b) =>
            Number(b.id) - Number(a.id)
        );

    }


    grid.innerHTML = "";


    if (result.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    result.forEach(product => {

        const card =
            createProductCard(product);

        grid.appendChild(card);

    });


    updateCategoryCount();

}


/* =====================================================
   CREATE PRODUCT CARD
   ===================================================== */

function createProductCard(product) {

    const card =
        document.createElement("div");

    card.className = "product-card";


    card.innerHTML = `

        <div class="product-image">

            <img
                src="${safe(product.image)}"
                alt="${safe(product.name)}"
                onerror="
                    this.src='https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
                "
            >

            <button
                class="favorite ${product.favorite ? "active" : ""}"
                onclick="toggleFavorite(${product.id}, event)"
            >
                ${product.favorite ? "♥" : "♡"}
            </button>

        </div>


        <div class="product-info">

            <span class="product-category">
                ${safe(product.category)}
            </span>

            <h3 class="product-name">
                ${safe(product.name)}
            </h3>

            <div class="price">
                ₹${Number(product.price).toLocaleString("en-IN")}
            </div>

            <div class="product-details">

                <span>
                    📍 ${safe(product.location)}
                </span>

                <span>
                    ${safe(product.date)}
                </span>

            </div>

            <button
                class="view-button"
                onclick="viewProduct(${product.id})"
            >
                View Details
            </button>

        </div>

    `;


    return card;

}


/* =====================================================
   CATEGORY FILTER
   ===================================================== */

function filterCategory(category, button) {

    selectedCategory = category;

    searchText = "";

    document.getElementById(
        "searchInput"
    ).value = "";


    document.querySelectorAll(".category")
        .forEach(item => {

            item.classList.remove("active");

        });


    button.classList.add("active");


    if (category === "All") {

        document.getElementById(
            "listingTitle"
        ).textContent = "Latest Listings";

    } else {

        document.getElementById(
            "listingTitle"
        ).textContent =
            category + " Products";

    }


    displayProducts();


    document.querySelector(
        ".products-section"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   SEARCH
   ===================================================== */

function searchProducts() {

    searchText =
        document.getElementById(
            "searchInput"
        ).value;


    selectedCategory = "All";


    document.querySelectorAll(".category")
        .forEach(item => {

            item.classList.remove("active");

        });


    document.querySelector(
        ".category"
    ).classList.add("active");


    if (searchText.trim() === "") {

        document.getElementById(
            "listingTitle"
        ).textContent =
            "Latest Listings";

    } else {

        document.getElementById(
            "listingTitle"
        ).textContent =
            "Search Results";

    }


    displayProducts();

}


/* =====================================================
   SORT
   ===================================================== */

function sortProducts() {

    selectedSort =
        document.getElementById(
            "sortSelect"
        ).value;


    displayProducts();

}


/* =====================================================
   SHOW ALL
   ===================================================== */

function showAllProducts() {

    selectedCategory = "All";

    searchText = "";

    document.getElementById(
        "searchInput"
    ).value = "";


    document.getElementById(
        "listingTitle"
    ).textContent =
        "Latest Listings";


    document.querySelectorAll(".category")
        .forEach(item => {

            item.classList.remove("active");

        });


    document.querySelector(
        ".category"
    ).classList.add("active");


    displayProducts();

}


/* =====================================================
   VIEW PRODUCT
   ===================================================== */

function viewProduct(id) {

    const product =
        products.find(item =>
            item.id === id
        );


    if (!product) return;


    document.getElementById(
        "productDetails"
    ).innerHTML = `

        <div class="detail-grid">

            <div class="detail-image">

                <img
                    src="${safe(product.image)}"
                    alt="${safe(product.name)}"
                >

            </div>


            <div>

                <span class="detail-category">
                    ${safe(product.category)}
                </span>


                <h2 class="detail-title">
                    ${safe(product.name)}
                </h2>


                <div class="detail-price">
                    ₹${Number(product.price).toLocaleString("en-IN")}
                </div>


                <p class="detail-description">
                    ${safe(product.description)}
                </p>


                <div class="seller-box">

                    <strong>
                        👤 ${safe(product.seller)}
                    </strong>

                    <span>
                        📍 ${safe(product.location)}
                    </span>

                    <br>

                    <span>
                        🕒 Posted ${safe(product.date)}
                    </span>

                </div>


                <button
                    class="contact-button"
                    onclick="openMessage(${product.id})"
                >
                    💬 Contact Seller
                </button>

            </div>

        </div>

    `;


    document.getElementById(
        "productModal"
    ).classList.add("show");

}


/* =====================================================
   FAVORITES
   ===================================================== */

function toggleFavorite(id, event) {

    event.stopPropagation();


    const product =
        products.find(item =>
            item.id === id
        );


    if (!product) return;


    product.favorite =
        !product.favorite;


    saveProducts();

    displayProducts();


    if (product.favorite) {

        showToast(
            "♥",
            "Added to favorites"
        );

    } else {

        showToast(
            "♡",
            "Removed from favorites"
        );

    }

}


/* =====================================================
   SHOW FAVORITES
   ===================================================== */

function showFavorites() {

    const favorites =
        products.filter(
            product => product.favorite
        );


    const grid =
        document.getElementById(
            "productGrid"
        );


    const noResults =
        document.getElementById(
            "noResults"
        );


    document.getElementById(
        "listingTitle"
    ).textContent =
        "My Favorites";


    grid.innerHTML = "";


    if (favorites.length === 0) {

        noResults.style.display =
            "block";

        return;

    }


    noResults.style.display =
        "none";


    favorites.forEach(product => {

        grid.appendChild(
            createProductCard(product)
        );

    });


    document.querySelectorAll(".category")
        .forEach(item => {

            item.classList.remove("active");

        });


    document.querySelector(
        ".products-section"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


/* =====================================================
   POST AD
   ===================================================== */

function openPostAd() {

    document.getElementById(
        "postModal"
    ).classList.add("show");

}


function addProduct(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "productName"
        ).value.trim();


    const category =
        document.getElementById(
            "productCategory"
        ).value;


    const price =
        Number(
            document.getElementById(
                "productPrice"
            ).value
        );


    const image =
        document.getElementById(
            "productImage"
        ).value.trim();


    const description =
        document.getElementById(
            "productDescription"
        ).value.trim();


    const seller =
        document.getElementById(
            "sellerName"
        ).value.trim();


    const phone =
        document.getElementById(
            "sellerPhone"
        ).value.trim();


    const location =
        document.getElementById(
            "sellerLocation"
        ).value.trim();


    if (!/^[0-9]{10}$/.test(phone)) {

        showToast(
            "!",
            "Enter a valid 10-digit phone number"
        );

        return;

    }


    const defaultImage =
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80";


    const newProduct = {

        id: Date.now(),

        name: name,

        category: category,

        price: price,

        image:
            image || defaultImage,

        description: description,

        seller: seller,

        phone: phone,

        location: location,

        date: "Just now",

        favorite: false

    };


    products.unshift(
        newProduct
    );


    saveProducts();


    document.getElementById(
        "postForm"
    ).reset();


    closeModal(
        "postModal"
    );


    showAllProducts();


    showToast(
        "✓",
        "Advertisement published successfully!"
    );

}


/* =====================================================
   LOGIN
   ===================================================== */

function openLogin() {

    document.getElementById(
        "loginModal"
    ).classList.add("show");

}


function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "loginEmail"
        ).value;


    closeModal(
        "loginModal"
    );


    showToast(
        "✓",
        "Login successful!"
    );

}


/* =====================================================
   CONTACT SELLER
   ===================================================== */

function openMessage(id) {

    const product =
        products.find(item =>
            item.id === id
        );


    if (!product) return;


    document.getElementById(
        "sellerContactText"
    ).textContent =
        "Send a message to " +
        product.seller +
        " about " +
        product.name;


    closeModal(
        "productModal"
    );


    document.getElementById(
        "messageModal"
    ).classList.add("show");

}


function sendMessage(event) {

    event.preventDefault();


    document.getElementById(
        "messageText"
    ).value = "";


    closeModal(
        "messageModal"
    );


    showToast(
        "✓",
        "Message sent successfully!"
    );

}


/* =====================================================
   CLOSE MODAL
   ===================================================== */

function closeModal(id) {

    document.getElementById(
        id
    ).classList.remove("show");

}


/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ===================================================== */

document.querySelectorAll(
    ".modal-overlay"
).forEach(modal => {

    modal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "show"
                );

            }

        }
    );

});


/* =====================================================
   MOBILE MENU
   ===================================================== */

function toggleMobileMenu() {

    document.getElementById(
        "mobileMenu"
    ).classList.toggle("show");

}


/* =====================================================
   TOAST
   ===================================================== */

let toastTimer;


function showToast(icon, message) {

    const toast =
        document.getElementById(
            "toast"
        );


    document.getElementById(
        "toastIcon"
    ).textContent = icon;


    document.getElementById(
        "toastMessage"
    ).textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3000);

}


/* =====================================================
   UPDATE CATEGORY COUNT
   ===================================================== */

function updateCategoryCount() {

    const total =
        products.length;


    document.getElementById(
        "categoryCount"
    ).textContent =
        total + " products";

}


/* =====================================================
   SAFE HTML
   ===================================================== */

function safe(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =====================================================
   START APPLICATION
   ===================================================== */

displayProducts();

updateCategoryCount();

console.log(
    "ClassiFind loaded successfully!"
);