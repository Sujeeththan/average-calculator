function average(event) {
    event.preventDefault();

    // Get values from inputs
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const n3 = parseFloat(document.getElementById("n3").value);
    const n4 = parseFloat(document.getElementById("n4").value);

    // Validate inputs
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Calculate average
    const sum = n1 + n2 + n3 + n4;
    const avg = sum / 4;

    // Display result
    // Use toFixed(2) for cleaner output (optional but good for UX)
    document.getElementById("output").innerText = avg.toFixed(2);
}

function resetOutput() {
    document.getElementById("output").innerText = "--";
}