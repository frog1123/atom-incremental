const runAtomForge = ({ speed }) => {
  player.atoms = player.atoms.add(player.atomForges.tier1.level.mul(player.atomForges.tier1.multiplier).div(speed));
  for (let i = 2; i <= 9; i++) atomForgeGenerate({ tier: i, speed });

  const forges = player.atomForges;
};

const atomForgeGenerate = ({ tier, speed }) => {
  player.atomForges[`tier${tier - 1}`].level = player.atomForges[`tier${tier - 1}`].level.add(
    player.atomForges[`tier${tier}`].level.round().mul(player.atomForges[`tier${tier}`].multiplier).div(speed)
  );
};
