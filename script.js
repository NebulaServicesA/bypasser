document.getElementById("bypassButton").addEventListener("click", function() {
    const urlInput = document.getElementById("urlInput").value;
    const statusMessage = document.getElementById("statusMessage");
    const resultMessage = document.getElementById("resultMessage");

    statusMessage.textContent = "";
    resultMessage.textContent = "";

    if (!urlInput) {
        statusMessage.textContent = "Please enter a URL.";
        return;
    }

    fetch(`https://api.bypass.vip/bypass?url=${encodeURIComponent(urlInput)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                statusMessage.textContent = "Success!";
                resultMessage.innerHTML = `Result: <a href="${data.result}" target="_blank">${data.result}</a>`;
            } else {
                statusMessage.textContent = "Error: Could not bypass the URL.";
            }
        })
        .catch(() => {
            statusMessage.textContent = "Error: Failed to fetch data.";
        });
});
