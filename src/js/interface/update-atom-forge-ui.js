const updateAtomForgeUI = () => {
  for (let i = 0; i < 2; i++) {
    const currentForge = player.atomForges[`tier${i + 1}`];
    const currentForgeBuyBtn = document.getElementById(`tier-${i + 1}-atom-forge-btn`);

    document.getElementById(`tier-${i + 1}-atom-forge-a`).textContent = `×${fv(currentForge.multiplier)} (${currentForge.amountBought})`;
    document.getElementById(`tier-${i + 1}-atom-forge-b`).textContent = fv(currentForge.level.mul(currentForge.multiplier));
    document.getElementById(`tier-${i + 1}-atom-forge-c`).textContent = fvnd(currentForge.level);
    document.getElementById(`tier-${i + 1}-atom-forge-btn-txt`).textContent = fv(currentForge.cost);

    if (player.atoms.gte(currentForge.cost)) {
      currentForgeBuyBtn.classList.remove("atom-forge-disabled");
      currentForgeBuyBtn.classList.add("atom-forge-enabled");
    } else {
      currentForgeBuyBtn.classList.remove("atom-forge-enabled");
      currentForgeBuyBtn.classList.add("atom-forge-disabled");
    }
  }
};
