const readAllBtn = document.querySelector("#mark-all-read-btn");

readAllBtn.addEventListener("click", (e) => {
    document.querySelectorAll(".notification__item").forEach((element) => {
        element.classList.remove("new");
    });

    document.querySelector("#notification-count").style.display = "none";
});
