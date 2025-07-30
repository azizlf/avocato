var menuStatus = false

function homeFn() {
    const btn = document.querySelector("#btn-tooggle-menu")
    const menu = document.querySelector("#menu-tooggle")
    menu.setAttribute("class", "rs-menu rs-menu-close")
    if (btn) {
        menu.addEventListener("click", () => {

            if (menuStatus) {
                menu.setAttribute("class", "rs-menu rs-menu-close")
                menuStatus = false
            } else {
                menu.setAttribute("class", "rs-menu")
                menuStatus = true
            }

        })
    }
    AOS.init();
}