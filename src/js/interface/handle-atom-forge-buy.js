const setHandleAtomForgeBuy = () => {
  for (let i = 1; i <= 9; i++) {
    const currentForgeBuyBtn = document.getElementById(`tier-${i}-atom-forge-btn`);

    currentForgeBuyBtn.onclick = () => handleAtomForgeBuy({ tier: i });
  }
};

const handleAtomForgeBuy = ({ tier }) => {
  const currentForge = player.atomForges[`tier${tier}`];

  if (player.atoms.gte(currentForge.cost)) {
    player.atoms = player.atoms.sub(currentForge.cost);
    player.atomForges[`tier${tier}`].level = player.atomForges[`tier${tier}`].level.add("1");
  }
};
