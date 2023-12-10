const displayNewToast = (message, duration = 3000) => {
  const toastContainer = document.getElementById("toast-container");
  const childToast = document.createElement("div");

  childToast.innerHTML = `
  <div class="bg-neutral-900 rounded-md p-2">
    <span>${message}</span>
  </div>`;

  toastContainer.appendChild(childToast);

  setTimeout(() => {
    childToast.style.opacity = 1;
    setTimeout(() => {
      childToast.style.opacity = 0;
      setTimeout(() => {
        toastContainer.removeChild(childToast);
      }, 300);
    }, 300);
  }, duration);
};
