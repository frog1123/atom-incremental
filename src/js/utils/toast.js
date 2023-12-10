const displayNewToast = (message, duration = 3000) => {
  const toastContainer = document.getElementById("toast-container");
  const childToast = document.createElement("div");

  childToast.innerHTML = `
    <div class="toast-content bg-neutral-900 rounded-md p-2">
      <span class="text-white text-center">${message}</span>
    </div>`;
  childToast.className = "toast-entry";

  toastContainer.appendChild(childToast);

  setTimeout(() => {
    childToast.classList.add("toast-entered");
  }, 0);

  setTimeout(() => {
    childToast.classList.remove("toast-entered");
    childToast.classList.add("toast-exit");

    setTimeout(() => {
      toastContainer.removeChild(childToast);
    }, 100);
  }, duration);
};
