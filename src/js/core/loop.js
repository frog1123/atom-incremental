setInterval(() => {
  const speed = 1000 / player.devSettings.gameSpeed;
  // const speed = 0.1;

  runAtomForge({ speed });

  //
}, player.devSettings.gameSpeed);

setInterval(() => {
  updateAtomCount();
  updateAtomForgeUI();
}, player.settings.uiUpdateSpeed);
