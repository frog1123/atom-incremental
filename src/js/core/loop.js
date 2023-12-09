setInterval(() => {
  const speed = 1000 / player.devSettings.gameSpeed;
  player.atoms = player.atoms.add(player.atomForges.tier1.level.mul(player.atomForges.tier1.multiplier).div(speed));
}, player.devSettings.gameSpeed);

setInterval(() => {
  updateAtomCount();
  updateAtomForgeUI();
}, player.settings.uiUpdateSpeed);
