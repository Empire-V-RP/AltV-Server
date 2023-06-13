import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';
const PoliceKleidungsladen = new MenuFramework.Menu('Polizei-Kleiderschrank', 'Kleiderschrank', 'Hier kannst du deine Uniform anziehen.');
const Arbeitskleidung = new MenuFramework.MenuItem('', '', 'Arbeitskleidung');
const Zivilkleidung = new MenuFramework.MenuItem('', '', 'Zivilkleidung');
const Schutzweste_anlegen = new MenuFramework.MenuItem('', '', 'Polizei Schutzweste anlegen');
const Schutzweste_ablegen = new MenuFramework.MenuItem('', '', 'Polizei Schutzweste ablegen');
const SheriffSchutzweste_anlegen = new MenuFramework.MenuItem('', '', 'Sheriff Schutzweste anlegen');
const SheriffSchutzweste_ablegen = new MenuFramework.MenuItem('', '', 'Sheriff Schutzweste ablegen');

PoliceKleidungsladen.addItem(Arbeitskleidung);
PoliceKleidungsladen.addItem(Zivilkleidung);
PoliceKleidungsladen.addItem(Schutzweste_anlegen);
PoliceKleidungsladen.addItem(Schutzweste_ablegen);
PoliceKleidungsladen.addItem(SheriffSchutzweste_anlegen);
PoliceKleidungsladen.addItem(SheriffSchutzweste_ablegen);
PoliceKleidungsladen.visible = false;
PoliceKleidungsladen.close();


alt.onServer('ClosePoliceClothesMenu', () => {
    PoliceKleidungsladen.close();
    PoliceKleidungsladen.visible = false;
});


alt.onServer('PoliceClothesMenuOpen', () => {
    PoliceKleidungsladen.open();
    PoliceKleidungsladen.itemSelect.on((item, index) => {
    if (item == Arbeitskleidung) {
        alt.emitServer('Arbeitskleidung');
    } else if (item == Zivilkleidung) {
        alt.emitServer('Zivilkleidung');
    } else if (item == Schutzweste_anlegen) {
        alt.emitServer('Schutzweste_anlegen');
    } else if (item == Schutzweste_ablegen) {
        alt.emitServer('Schutzweste_ablegen');
    } else if (item == SheriffSchutzweste_anlegen) {
        alt.emitServer('SheriffSchutzweste_anlegen');
    } else if (item == SheriffSchutzweste_ablegen) {
        alt.emitServer('SheriffSchutzweste_ablegen');
    }

    });
});


