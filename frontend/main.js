// Display modal on click
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper) {
  function displayModal(id) {
    const modal = document.getElementById(id);
    modalWrapper.style.display = "flex";
    modal.style.display = "flex";

    
    const close = document.getElementById("close-modal");
    close.addEventListener("click", () => {
      modalWrapper.style.display = "none";
      modal.style.display = "none";

      // Show header again when modal closes
      document.querySelector("header").style.display = "unset";
    });

    // Hide header when modal opens
    document.querySelector("header").style.display = "none";
  }

  // Expose displayModal globally so inline HTML can call it
  window.displayModal = displayModal;
}

// Copy to clipboard for table inputs
document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-btn");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Find the input in the same cell and select text
      const tr = btn.closest("tr");
      if (!tr) return;

      const copyType = btn.getAttribute("data-copy");
      let inputToCopy;

      if (copyType.endsWith("email")) {
        inputToCopy = tr.querySelector("input[type='email']");
      } else if (copyType.endsWith("password")) {
        inputToCopy = tr.querySelector("input[type='password']");
      }

      if (inputToCopy) {
        inputToCopy.select();
        inputToCopy.setSelectionRange(0, 99999); // For mobile devices

        try {
          const successful = document.execCommand("copy");
          if (successful) {
            btn.title = "Copied!";
            setTimeout(() => (btn.title = "Copy"), 1500);
          }
        } catch (err) {
          console.error("Copy failed", err);
        }

        window.getSelection().removeAllRanges();
      }
    });
  });
});
