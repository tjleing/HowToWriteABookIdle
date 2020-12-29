// @ts-check

import { deepCopy } from "./Utils.js";
import { ascensionUpgradeConfigs } from "./configs/UpgradeConfigs.js";
import { Upgrade } from "./Upgrade.js";

class AscensionUpgrade extends Upgrade {
    constructor (...args) {
        super(...args);
        this.ascension = this.container;
    }
}


function createAscensionUpgrade (name, div, ascension) {
    return new AscensionUpgrade({ ...deepCopy(ascensionUpgradeConfigs[name]), div: div, container: ascension });
}

function loadAscensionUpgrade (save, div, ascension) {
    const config = deepCopy(ascensionUpgradeConfigs[save.n]);
    config.purchased = save.p === 1 ? true : false;
    config.container = ascension;
    config.div = div;

    return new AscensionUpgrade(config);
}

export { createAscensionUpgrade, loadAscensionUpgrade };