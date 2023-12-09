const updateAtomForgeUI = () => {
  for (let i = 1; i <= 9; i++) {
    const currentForge = player.atomForges[`tier${i}`];
    const currentForgeBuyBtn = document.getElementById(`tier-${i}-atom-forge-btn`);

    document.getElementById(`tier-${i}-atom-forge-a`).textContent = `×${fv(currentForge.multiplier)} (${currentForge.amountBought})`;
    document.getElementById(`tier-${i}-atom-forge-b`).textContent = fvnd(currentForge.level.mul(currentForge.multiplier));
    document.getElementById(`tier-${i}-atom-forge-c`).textContent = fvnd(currentForge.level);
    document.getElementById(`tier-${i}-atom-forge-btn-txt`).textContent = fv(currentForge.cost);

    if (player.atoms.gte(currentForge.cost)) {
      currentForgeBuyBtn.classList.remove("atom-forge-disabled");
      currentForgeBuyBtn.classList.add("atom-forge-enabled");
    } else {
      currentForgeBuyBtn.classList.remove("atom-forge-enabled");
      currentForgeBuyBtn.classList.add("atom-forge-disabled");
    }
  }
};
