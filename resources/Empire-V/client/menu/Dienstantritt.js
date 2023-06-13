import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';
const DienstMenu = new MenuFramework.Menu('Polizei-Anmelden', 'Dienstanmelden', 'Hier kannst du dich als Polizist anmelden.');
const Dienst_beginn = new MenuFramework.MenuItem('', '', 'Dienst beginnen');
const Dienst_beenden = new MenuFramework.MenuItem('', '', 'Dienst beenden');
DienstMenu.addItem(Dienst_beginn);
DienstMenu.addItem(Dienst_beenden);
DienstMenu.visible = false;
DienstMenu.close();


alt.onServer('ClosePoliceDienstMenu', () => {
    DienstMenu.close();
    DienstMenu.visible = false;
});


alt.onServer('PoliceDienstMenu', () => {
    DienstMenu.open();
    DienstMenu.itemSelect.on((item, index) => {
    if (item == Dienst_beginn) {
        alt.emitServer('Dienst_beginn');
        DienstMenu.close();
        DienstMenu.visible = false;
    } else if (item == Dienst_beenden) {
        alt.emitServer('Dienst_beenden');
        DienstMenu.close();
        DienstMenu.visible = false;
    }
    });

});
