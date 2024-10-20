document.getElementById("bypassButton").addEventListener("click", function() {
    const urlInput = document.getElementById("urlInput").value;
    const statusMessage = document.getElementById("statusMessage");
    const resultMessage = document.getElementById("resultMessage");

    if (!urlInput) {
        statusMessage.textContent = "Please enter a URL.";
        resultMessage.textContent = "";
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
                resultMessage.textContent = "";
            }
        })
        .catch(() => {
            statusMessage.textContent = "Error: Failed to fetch data.";
            resultMessage.textContent = "";
        });
});
