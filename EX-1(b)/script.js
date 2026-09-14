const postInput = document.getElementById("postInput");
const postBtn = document.getElementById("postBtn");
const posts = document.getElementById("posts");
const charCount = document.getElementById("charCount");

const imageBtn = document.getElementById("imageBtn");
const imageInput = document.getElementById("imageInput");
const emojiBtn = document.getElementById("emojiBtn");
const emojiPicker = document.getElementById("emojiPicker");
const locationBtn = document.getElementById("locationBtn");

const notificationBtn = document.getElementById("notificationBtn");
const notificationPanel = document.getElementById("notificationPanel");
const closeNotifications = document.getElementById("closeNotifications");

const editProfile = document.getElementById("editProfile");
const profileModal = document.getElementById("profileModal");
const closeModal = document.getElementById("closeModal");
const saveProfile = document.getElementById("saveProfile");

const profileName = document.getElementById("profileName");
const profileUsername = document.getElementById("profileUsername");
const profileBio = document.getElementById("profileBio");
const profileAvatar = document.getElementById("profileAvatar");

const pageTitle = document.getElementById("pageTitle");



/* CHARACTER COUNT */

postInput.addEventListener("input", () => {
    charCount.textContent = `${postInput.value.length} / 280`;
});



/* IMAGE */

imageBtn.addEventListener("click", () => {
    imageInput.click();
});

imageInput.addEventListener("change", () => {

    if (imageInput.files.length > 0) {

        const file = imageInput.files[0];

        postInput.value += ` 📷 ${file.name}`;

        charCount.textContent =
            `${postInput.value.length} / 280`;
    }

});



/* EMOJI */

emojiBtn.addEventListener("click", () => {
    emojiPicker.classList.toggle("show");
});

document.querySelectorAll(".emoji-picker button").forEach(button => {

    button.addEventListener("click", () => {

        postInput.value += button.textContent;

        postInput.focus();

        charCount.textContent =
            `${postInput.value.length} / 280`;

    });

});



/* LOCATION */

locationBtn.addEventListener("click", () => {

    if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(
            position => {

                postInput.value +=
                    ` 📍 Location added`;

                charCount.textContent =
                    `${postInput.value.length} / 280`;

            },

            () => {

                postInput.value +=
                    " 📍 Location";

                charCount.textContent =
                    `${postInput.value.length} / 280`;

            }
        );

    } else {

        postInput.value += " 📍 Location";

    }

});



/* CREATE POST */

postBtn.addEventListener("click", createPost);

postInput.addEventListener("keydown", event => {

    if (event.ctrlKey && event.key === "Enter") {
        createPost();
    }

});

function createPost() {

    const text = postInput.value.trim();

    if (!text) {

        alert("Please write something before posting.");

        postInput.focus();

        return;
    }

    const post = document.createElement("article");

    post.className = "post";

    post.innerHTML = `

        <div class="avatar blue">S</div>

        <div class="post-content">

            <div class="post-header">

                <div>
                    <strong>suthan</strong>
                    <span>@suthan_07 · just now</span>
                </div>

                <button class="more-btn">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>

                <div class="post-menu">

                    <button>Save Post</button>
                    <button>Copy Link</button>
                    <button>Report</button>

                </div>

            </div>

            <p>${escapeHTML(text).replace(/\n/g,"<br>")}</p>

            <div class="post-footer">

                <button class="like-btn">

                    <i class="fa-solid fa-heart"></i>

                    <span>0</span>

                </button>

                <button class="comment-btn">

                    <i class="fa-regular fa-comment"></i>

                    <span>0</span>

                </button>

                <button class="share-btn">

                    <i class="fa-solid fa-arrow-up-from-bracket"></i>

                    <span>Share</span>

                </button>

            </div>

            <div class="comments">

                <div class="comment-input">

                    <input placeholder="Write a comment...">

                    <button>Send</button>

                </div>

            </div>

        </div>
    `;

    posts.prepend(post);

    postInput.value = "";

    charCount.textContent = "0 / 280";

    attachPostEvents(post);

}



/* SECURITY */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}



/* LIKE */

function attachLikeButton(button) {

    button.addEventListener("click", () => {

        const count =
            button.querySelector("span");

        let likes =
            Number(count.textContent);

        if (button.classList.contains("liked")) {

            likes--;

            button.classList.remove("liked");

        } else {

            likes++;

            button.classList.add("liked");

        }

        count.textContent = likes;

    });

}



/* COMMENT */

function attachComment(post) {

    const commentBtn =
        post.querySelector(".comment-btn");

    const comments =
        post.querySelector(".comments");

    const input =
        post.querySelector(".comment-input input");

    const send =
        post.querySelector(".comment-input button");

    commentBtn.addEventListener("click", () => {

        comments.classList.toggle("show");

        if (comments.classList.contains("show")) {
            input.focus();
        }

    });

    send.addEventListener("click", () => {

        const text = input.value.trim();

        if (!text) return;

        const newComment =
            document.createElement("div");

        newComment.className = "comment";

        newComment.innerHTML =
            `<b>suthan</b><span>${escapeHTML(text)}</span>`;

        comments.insertBefore(
            newComment,
            comments.querySelector(".comment-input")
        );

        input.value = "";

        const count =
            commentBtn.querySelector("span");

        count.textContent =
            Number(count.textContent) + 1;

    });

    input.addEventListener("keydown", event => {

        if (event.key === "Enter") {
            send.click();
        }

    });

}



/* SHARE */

function attachShare(post) {

    const shareBtn =
        post.querySelector(".share-btn");

    shareBtn.addEventListener("click", async () => {

        const text =
            post.querySelector(".post-content p").innerText;

        if (navigator.share) {

            try {

                await navigator.share({
                    title: "MicroBlog",
                    text: text
                });

            } catch {}

        } else {

            try {

                await navigator.clipboard.writeText(text);

                alert("Post copied to clipboard!");

            } catch {

                alert("Share link copied!");

            }

        }

    });

}



/* MORE MENU */

function attachMenu(post) {

    const moreBtn =
        post.querySelector(".more-btn");

    const menu =
        post.querySelector(".post-menu");

    moreBtn.addEventListener("click", event => {

        event.stopPropagation();

        document
            .querySelectorAll(".post-menu.show")
            .forEach(m => m.classList.remove("show"));

        menu.classList.toggle("show");

    });

    menu.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", async () => {

            if (button.textContent === "Copy Link") {

                try {

                    await navigator.clipboard.writeText(
                        window.location.href
                    );

                    alert("Link copied!");

                } catch {

                    alert("Link: " + window.location.href);

                }

            }

            if (button.textContent === "Save Post") {
                button.textContent = "Saved ✓";
            }

            if (button.textContent === "Report") {
                alert("Post reported.");
            }

            menu.classList.remove("show");

        });

    });

}



/* ATTACH EVENTS */

function attachPostEvents(post) {

    attachLikeButton(
        post.querySelector(".like-btn")
    );

    attachComment(post);

    attachShare(post);

    attachMenu(post);

}



/* EXISTING POSTS */

document
    .querySelectorAll(".post")
    .forEach(post => attachPostEvents(post));



/* NOTIFICATIONS */

notificationBtn.addEventListener("click", event => {

    event.stopPropagation();

    notificationPanel.classList.toggle("show");

});

closeNotifications.addEventListener("click", () => {

    notificationPanel.classList.remove("show");

});



/* PROFILE MODAL */

editProfile.addEventListener("click", () => {

    document.getElementById("editName").value =
        profileName.textContent;

    document.getElementById("editUsername").value =
        profileUsername.textContent.replace("@","");

    document.getElementById("editBio").value =
        profileBio.textContent;

    profileModal.classList.add("show");

});

closeModal.addEventListener("click", () => {

    profileModal.classList.remove("show");

});

profileModal.addEventListener("click", event => {

    if (event.target === profileModal) {
        profileModal.classList.remove("show");
    }

});



/* SAVE PROFILE */

saveProfile.addEventListener("click", () => {

    const name =
        document.getElementById("editName").value.trim();

    const username =
        document.getElementById("editUsername").value.trim();

    const bio =
        document.getElementById("editBio").value.trim();

    if (!name || !username) {

        alert("Name and username are required.");

        return;
    }

    profileName.textContent = name;

    profileUsername.textContent =
        "@" + username;

    profileBio.textContent = bio;

    profileAvatar.textContent =
        name.charAt(0).toUpperCase();

    profileModal.classList.remove("show");

});



/* NAVIGATION */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        document
            .querySelectorAll(".nav-link")
            .forEach(item =>
                item.classList.remove("active")
            );

        link.classList.add("active");

        const page =
            link.dataset.page;

        if (page === "home") {

            pageTitle.innerHTML = `
                <h1>Home</h1>
                <p>See what's happening around you.</p>
            `;

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

        if (page === "explore") {

            pageTitle.innerHTML = `
                <h1>Explore</h1>
                <p>Discover trending posts and topics.</p>
            `;

            document.querySelector(".trending")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

        if (page === "profile") {

            pageTitle.innerHTML = `
                <h1>Profile</h1>
                <p>Manage your MicroBlog profile.</p>
            `;

            document.querySelector(".profile-card")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }

    });

});



/* TRENDING CLICK */

document.querySelectorAll(".trend button")
.forEach(button => {

    button.addEventListener("click", () => {

        const topic = button.textContent;

        postInput.value =
            `${topic} `;

        postInput.focus();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});



/* CLOSE POPUPS */

document.addEventListener("click", event => {

    if (
        !event.target.closest(".notification-panel") &&
        !event.target.closest(".notification-btn")
    ) {

        notificationPanel.classList.remove("show");

    }

    if (!event.target.closest(".more-btn")) {

        document
            .querySelectorAll(".post-menu.show")
            .forEach(menu =>
                menu.classList.remove("show")
            );

    }

});