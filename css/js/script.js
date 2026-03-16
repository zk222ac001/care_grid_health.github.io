AOS.init({ duration: 800, once: true });

const toggle = document.getElementById("themeToggle");

if (toggle) {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }

    toggle.onclick = () => {
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "theme",
            document.body.classList.contains("dark") ? "dark" : "light"
        );
    };
}