button = document.getElementById("btn");
nameColor = document.querySelector(".color");
hex = [
    "1", "0", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"
];
button.addEventListener("click", () => {
    let hexCode = generateHex();
    document.body.style.backgroundColor = hexCode;
    nameColor.textContent = hexCode;
});
function getColor(){
    return Math.floor(Math.random() * hex.length);
}
function generateHex(){
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[getColor()]
    }
    return hexColor
}
