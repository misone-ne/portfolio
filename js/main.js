const openButtons = document.querySelectorAll("[data-modal-open]");
const closeButtons = document.querySelectorAll("[data-modal-close]");

openButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modalName = button.dataset.modalOpen;
        const modal = document.getElementById(`modal-${modalName}`);

        if (!modal) return;

        modal.hidden = false;
        document.body.style.overflow = "hidden";
    });
});

closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");

        if (!modal) return;

        modal.hidden = true;
        document.body.style.overflow = "";
    });
});