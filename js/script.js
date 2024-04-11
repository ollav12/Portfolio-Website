function openTab(tabName) {
    var tabLinks = document.getElementsByClassName("tab-links");
    var tabContents = document.getElementsByClassName("tab-contents");

    for(tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }
    for(tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("activeList");
    document.getElementById(tabName).classList.add("active-tab")
}


var side = document.getElementById("sidemenu")

function openMenu() {
    side.style.right = "0px";
}

function closeMenu() {
    side.style.right = "-200px";
}
