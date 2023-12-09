const setHandleAtomForgeBuy = () => {
  for (let i = 0; i < 2; i++) {
    const currentForgeBuyBtn = document.getElementById(`tier-${i + 1}-atom-forge-btn`);

    currentForgeBuyBtn.onclick = () => handleAtomForgeBuy({ tier: i + 1 });
  }
};

const handleAtomForgeBuy = ({ tier }) => {
  const currentForge = player.atomForges[`tier${tier}`];

  if (player.atoms.gte(currentForge.cost)) {
    player.atoms = player.atoms.sub(currentForge.cost);
    player.atomForges[`tier${tier}`].level = player.atomForges[`tier${tier}`].level.add("1");
  }
};
