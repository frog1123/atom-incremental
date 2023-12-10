const exportBtn = document.getElementById("export-btn");
const importBtn = document.getElementById("import-btn");

const gameVersion = "ATOM_INCREMENTAL_V0.1.0_SAVE_FORMAT";

exportBtn.onclick = () => {
  const exportedSave = `${gameVersion}$${btoa(JSON.stringify(player))}`;

  console.log(exportedSave);
  navigator.clipboard.writeText(exportedSave);
  alert("save exported to clipboard");
};

importBtn.onclick = () => {
  const inputSave = prompt("paste your save here");

  try {
    const [importedVersion, importedSaveData] = inputSave.split("$");

    if (importedVersion === gameVersion) {
      const importedPlayer = convertToDecimal(JSON.parse(atob(importedSaveData)));

      console.log(importedPlayer);
      player = importedPlayer;

      alert("save imported successfully");
    } else {
      alert(`incorrect game version, please use ${gameVersion}`);
    }
  } catch (err) {
    console.error("[IMPORT_SAVE]", err);
    alert("save couldn't be imported");
  }
};
