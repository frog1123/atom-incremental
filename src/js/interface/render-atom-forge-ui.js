const renderAtomForgeUI = () => {
  const forgeContainerEl = document.getElementById("atom-forges-container");
  for (let i = 1; i < 9; i++) {
    forgeContainerEl.innerHTML = `${forgeContainerEl.innerHTML}
      <div class="odd:bg-neutral-900 px-2 py-1 grid grid-cols-[1fr_auto_1fr]">
        <div>
          <div class="grid grid-flow-col gap-1 place-items-center w-max">
            <span class="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-orbit">
                <circle cx="12" cy="12" r="3" />
                <circle cx="19" cy="5" r="2" />
                <circle cx="5" cy="19" r="2" />
                <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
                <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
              </svg>
            </span>
            <div class="bg-gray-500 p-1 rounded-md h-max">
              <span class="block md:hidden text-black uppercase font-bold text-xs h-max">T1</span>
              <span class="hidden md:block text-black uppercase font-bold text-xs h-max">Tier 1</span>
            </div>
            <span class="text-white">Atom Forge</span>
            <span id="tier-${i}-atom-forge-a" class="text-white">
              ×~ (~)
            </span>
          </div>
          <div class="grid grid-flow-col gap-1 place-items-center w-max">
            <span class="text-white">Forging</span>
            <span id="tier-${i}-atom-forge-b" class="text-white">
              ~
            </span>
            ${
              i === 1
                ? `<span class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom">
                      <circle cx="12" cy="12" r="1" />
                      <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                      <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                    </svg>
                  </span>`
                : `<span class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-orbit">
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="19" cy="5" r="2" />
                      <circle cx="5" cy="19" r="2" />
                      <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
                      <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
                    </svg>
                  </span>`
            }
            <span class="text-white">/s</span>
          </div>
        </div>
        <div class="w-full grid place-items-center">
          <span id="tier-${i}-atom-forge-c" class="text-white">
            ~
          </span>
        </div>
        <button id="tier-${i}-atom-forge-btn" class="ml-auto py-2 w-[150px] border-[2px] rounded-md grid place-items-center">
          <div class="grid grid-cols-[max-content_max-content] gap-1 place-items-center">
            <span id="tier-${i}-atom-forge-btn-txt" class="text-white">
              ~
            </span>
            <span class="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom">
                <circle cx="12" cy="12" r="1" />
                <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
              </svg>
            </span>
          </div>
        </button>
      </div>`;
  }
};
