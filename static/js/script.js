
function toggleBox(id) {
    const box = document.getElementById(id);

    if (box.classList.contains("hidden")) {
        box.classList.remove("hidden");
        box.style.maxHeight = box.scrollHeight + "px";
        box.style.opacity = "1";
    } else {
        box.style.maxHeight = "0px";
        box.style.opacity = "0";
        setTimeout(() => box.classList.add("hidden"), 300);
    }
}

function scrollNext(containerId) {
    const container = document.getElementById(containerId);
    const cards = container.children;

    let index = 0;
    let min = Infinity;

    for (let i = 0; i < cards.length; i++) {
        let diff = Math.abs(cards[i].offsetLeft - container.scrollLeft);
        if (diff < min) {
            min = diff;
            index = i;
        }
    }

    const next = Math.min(index + 1, cards.length - 1);

    container.scrollTo({
        left: cards[next].offsetLeft,
        behavior: "smooth"
    });
}

function scrollBack(containerId) {
    const container = document.getElementById(containerId);
    const cards = container.children;

    let index = 0;
    let min = Infinity;

    for (let i = 0; i < cards.length; i++) {
        let diff = Math.abs(cards[i].offsetLeft - container.scrollLeft);
        if (diff < min) {
            min = diff;
            index = i;
        }
    }

    const prev = Math.max(index - 1, 0);

    container.scrollTo({
        left: cards[prev].offsetLeft,
        behavior: "smooth"
    });
}





function scrollNext(containerId) {
    const container = document.getElementById(containerId);
    const cards = container.children;

    let closestIndex = 0;
    let minDiff = Infinity;

    // Find current visible card
    for (let i = 0; i < cards.length; i++) {
        const diff = Math.abs(cards[i].offsetLeft - container.scrollLeft);
        if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
        }
    }

    // Move to next card
    const nextIndex = Math.min(closestIndex + 1, cards.length - 1);

    container.scrollTo({
        left: cards[nextIndex].offsetLeft,
        behavior: "smooth"
    });
}

function scrollBack(containerId) {
    const container = document.getElementById(containerId);
    const cards = container.children;

    let closestIndex = 0;
    let minDiff = Infinity;

    for (let i = 0; i < cards.length; i++) {
        const diff = Math.abs(cards[i].offsetLeft - container.scrollLeft);
        if (diff < minDiff) {
            minDiff = diff;
            closestIndex = i;
        }
    }

    // Move to previous card
    const prevIndex = Math.max(closestIndex - 1, 0);

    container.scrollTo({
        left: cards[prevIndex].offsetLeft,
        behavior: "smooth"
    });
}




const form = document.getElementById("contactForm");
const modal = document.getElementById("successModal");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        form.reset();
    } else {
        alert("Something went wrong ❌");
    }
});

function closeModal() {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}



document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector(".overflow-y-auto");
    const sections = document.querySelectorAll("section, #home");
    const links = document.querySelectorAll(".nav-link");

    // 🔹 Smooth scroll on click
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (!targetSection) return;

            container.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // 🔹 Active link on scroll
    function setActiveLink() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;

            if (container.scrollTop >= sectionTop - 200) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    }

    // Scroll event on container (NOT window)
    container.addEventListener("scroll", setActiveLink);

    // Run once on load
    setActiveLink();

});





VANTA.WAVES({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,

    color: 0xa,
    shininess: 30,
    waveHeight: 15,
    waveSpeed: 1,
    zoom: 1
})
