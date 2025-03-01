document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(this.dataset.target).classList.add('active');
    });
});


// parents control

document.addEventListener("DOMContentLoaded", () => {
    const pinGroups = document.querySelectorAll(".input-group"); // Select both PIN groups

    pinGroups.forEach(group => {
        const pinInputs = group.querySelectorAll(".pin-input input");
        const pinLabel = group.querySelector("label");

        pinInputs.forEach((input) => {
            input.addEventListener("input", () => {
                const allFilled = [...pinInputs].every(inp => inp.value.length === 1);
                if (allFilled) {
                    pinLabel.classList.add("glow"); // Apply glow effect
                } else {
                    pinLabel.classList.remove("glow"); // Remove glow effect
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const parentalLock = document.getElementById("parentalLock");
    const pinModal = document.getElementById("pinModal");
    const closeModal = document.querySelector(".close");
    const pinInputs = document.querySelectorAll(".pin-input input");
    const continueBtn = document.querySelector(".continue-btn");

    // Show PIN setup modal when Parental Lock is turned on
    parentalLock.addEventListener("change", function () {
        if (this.checked) {
            pinModal.style.display = "flex";
        }
    });

    // Close modal and reset inputs
    closeModal.addEventListener("click", function () {
        pinModal.style.display = "none";
        parentalLock.checked = false;
        resetPINInputs();
    });

    // Restrict input to only numbers (0-9) and auto-focus next field
    pinInputs.forEach((input, index) => {
        input.addEventListener("input", (event) => {
            const value = event.target.value;

            // Allow only digits (0-9), remove any non-numeric characters
            if (!/^\d$/.test(value)) {
                event.target.value = "";
                return;
            }

            if (value.length === 1 && index < pinInputs.length - 1) {
                pinInputs[index + 1].focus();
            }
            checkPIN();
        });

        input.addEventListener("keydown", (event) => {
            if (event.key === "Backspace" && input.value === "" && index > 0) {
                pinInputs[index - 1].focus();
            }
        });
    });

    // Enable Continue button only when PINs are filled
    function checkPIN() {
        const allFilled = [...pinInputs].every(input => input.value.length === 1);
        continueBtn.disabled = !allFilled;
    }

    // Function to reset PIN inputs
    function resetPINInputs() {
        pinInputs.forEach(input => input.value = ""); // Clear all input fields
        pinInputs[0].focus(); // Focus on the first input
        continueBtn.disabled = true; // Disable the continue button
    }
});

