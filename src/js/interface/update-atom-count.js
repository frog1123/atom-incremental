const atomCountEl = document.getElementById("atom-count");

const updateAtomCount = () => {
  atomCountEl.textContent = fv(player.atoms);
};
