import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';




const ShopKleidungsladen = new MenuFramework.Menu('Kleidungsladen', '', 'Hier kannst du dich umziehen.');
const TOPS = new MenuFramework.MenuItem('', '', 'Oberteile');
const HOSEN = new MenuFramework.MenuItem('', '', 'Hosen');
const ARME = new MenuFramework.MenuItem('', '', 'Arme');
const SCHUHE = new MenuFramework.MenuItem('', '', 'Schuhe');

ShopKleidungsladen.addItem(TOPS);
ShopKleidungsladen.addItem(HOSEN);
ShopKleidungsladen.addItem(ARME);
ShopKleidungsladen.addItem(SCHUHE);
ShopKleidungsladen.visible = false;
ShopKleidungsladen.close();


alt.onServer('CloseKleidungsladen', () => {
    ShopKleidungsladen.close();
    ShopKleidungsladen.visible = false;
});


alt.onServer('Kleidungsladen', () => {
    ShopKleidungsladen.open();
    ShopKleidungsladen.itemSelect.on((item, index) => {
    if (item == TOPS) {
        alt.emitServer('TOPS');
        ShopKleidungsladen.close();
        ShopKleidungsladen.visible = false;
    } else if (item == HOSEN) {
        alt.emitServer('HOSEN');
        ShopKleidungsladen.close();
        ShopKleidungsladen.visible = false;
    } else if (item == ARME) {
        alt.emitServer('ARME');
        ShopKleidungsladen.close();
        ShopKleidungsladen.visible = false;
    } else if (item == SCHUHE) {
        alt.emitServer('SCHUHE');
        ShopKleidungsladen.close();
        ShopKleidungsladen.visible = false;
    }
    });
});


