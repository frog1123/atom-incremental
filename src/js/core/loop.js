setInterval(() => {
  // const speed = 1000 / player.devSettings.gameSpeed;

  const speed = 0.1;
  player.atomForges.tier1.level = player.atomForges.tier1.level.add(player.atomForges.tier2.level.mul(player.atomForges.tier2.multiplier).div(speed));
  player.atoms = player.atoms.add(player.atomForges.tier1.level.mul(player.atomForges.tier1.multiplier).div(speed));

  //
}, player.devSettings.gameSpeed);

setInterval(() => {
  updateAtomCount();
  updateAtomForgeUI();
}, player.settings.uiUpdateSpeed);
