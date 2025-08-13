function updateCount() {
    let maxLength = 50;
    let textLength = document.getElementById("myText").value.length;
    let remaining = maxLength - textLength;
    document.getElementById("charCount").innerHTML = remaining + " characters remaining";
}
