import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';
const WeaponMenu = new MenuFramework.Menu('Polizei-Waffenschrank', 'Waffenschrank', 'Hier kannst du deine Waffen ausrüsten.');
const Dienstausrüstung_anlegen = new MenuFramework.MenuItem('', '', 'Dienstausrüstung anlegen');
const Dienstausrüstung_ablegen = new MenuFramework.MenuItem('', '', 'Dienstausrüstung ablegen');
WeaponMenu.addItem(Dienstausrüstung_anlegen);
WeaponMenu.addItem(Dienstausrüstung_ablegen);
WeaponMenu.visible = false;
WeaponMenu.close();


alt.onServer('ClosePoliceWeaponGiveMenu', () => {
    WeaponMenu.close();
    WeaponMenu.visible = false;
});


alt.onServer('PoliceWeaponGiveMenu', () => {
    WeaponMenu.open();
    WeaponMenu.itemSelect.on((item, index) => {
    if (item == Dienstausrüstung_anlegen) {
        alt.emitServer('Dienstausrüstung_anlegen');
        WeaponMenu.close();
        WeaponMenu.visible = false;
    } else if (item == Dienstausrüstung_ablegen) {
        alt.emitServer('Dienstausrüstung_ablegen');
        WeaponMenu.close();
        WeaponMenu.visible = false;
    }
    });

});

