const tabsBtn = document.querySelectorAll(".but")
const tabsItems = document.querySelectorAll(".tabs-item")

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBnt = item;
        let tabId = currentBnt.getAttribute("data-tab")
        let currentTab = document.getElementById(tabId)
        console.log(tabId)
        if (!currentBnt.classList.contains('active')){
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });
            currentBnt.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});
document.querySelector('.but').click()
//theme
if (!localStorage.theme) localStorage.theme = 'light'
document.body.className = localStorage.theme
toggleThemeBtn.innerText = document.body.classList.contains("dark") ? "Light" : "Dark"

toggleThemeBtn.onclick = () => {
    document.body.classList.toggle("dark")
    toggleThemeBtn.innerText = document.body.classList.contains("dark") ? "Light" : "Dark"
    localStorage.theme = document.body.className || "light"
}