
function publish() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
        alert("Please fill out both fields!");
        return;
    }

    const output = document.getElementById("output");
    output.innerHTML = `
        <h2>${title}</h2>
        <p>${content.replace(/\n/g, "<br>")}</p>
    `;
    output.style.marginTop = "20px";
    output.style.padding = "10px";
    output.style.border = "1px solid #ddd";
    output.style.borderRadius = "5px";
    output.style.backgroundColor = "#f9f9f9";
}
