const menuBotao = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar-links");
const iconeMenu = menuBotao.querySelector("span");

// Abrir e fechar o menu
menuBotao.addEventListener("click", function () {
    const menuAberto = menu.classList.toggle("menu-aberto");

    menuBotao.setAttribute("aria-expanded", menuAberto);

    menuBotao.setAttribute(
        "aria-label",
        menuAberto
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
    );

    iconeMenu.textContent = menuAberto ? "✕" : "☰";
});


document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        menu.classList.contains("menu-aberto")
    ) {
        fecharMenu();
        menuBotao.focus();
    }
});


menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", fecharMenu);
});

function fecharMenu() {
    menu.classList.remove("menu-aberto");

    menuBotao.setAttribute("aria-expanded", "false");
    menuBotao.setAttribute(
        "aria-label",
        "Abrir menu de navegação"
    );

    iconeMenu.textContent = "☰";
}