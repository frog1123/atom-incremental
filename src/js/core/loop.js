setInterval(() => {
  player.atoms = player.atoms.add(player.atomForges.tier1.level * player.atomForges.tier1.multiplier);

  updateAtomCount();
  updateAtomForgeUI();
}, 20);
