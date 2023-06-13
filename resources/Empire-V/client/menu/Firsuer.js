import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';

const FRISURMENU = new MenuFramework.Menu('Haare', '', 'Hier kannst du deine Haare ändern.');
const FRISUR1 = new MenuFramework.MenuItem('', '', 'Haare 1');
const FRISUR2 = new MenuFramework.MenuItem('', '', 'Haare 2');
const FRISUR3 = new MenuFramework.MenuItem('', '', 'Haare 3');
const FRISUR4 = new MenuFramework.MenuItem('', '', 'Haare 4');
const FRISUR5 = new MenuFramework.MenuItem('', '', 'Haare 5');
const FRISUR6 = new MenuFramework.MenuItem('', '', 'Haare 6');
const FRISUR7 = new MenuFramework.MenuItem('', '', 'Haare 7');
const FRISUR8 = new MenuFramework.MenuItem('', '', 'Haare 8');
const FRISUR9 = new MenuFramework.MenuItem('', '', 'Haare 9');
const FRISUR10 = new MenuFramework.MenuItem('', '', 'Haare 10');

FRISURMENU.addItem(FRISUR1);
FRISURMENU.addItem(FRISUR2);
FRISURMENU.addItem(FRISUR3);
FRISURMENU.addItem(FRISUR4);
FRISURMENU.addItem(FRISUR5);
FRISURMENU.addItem(FRISUR6);
FRISURMENU.addItem(FRISUR7);
FRISURMENU.addItem(FRISUR8);
FRISURMENU.addItem(FRISUR9);
FRISURMENU.addItem(FRISUR10);
FRISURMENU.visible = false;
FRISURMENU.close();


alt.onServer('CloseFirsuerladen', () => {
    FRISURMENU.close();
    FRISURMENU.visible = false;
});


alt.onServer('Firsuerladen', () => {
    FRISURMENU.open();
    FRISURMENU.itemSelect.on((item, index) => {
    if (item == FRISUR1) {
        alt.emitServer('FRISUR1');
    }
    else if (item == FRISUR2) {
        alt.emitServer('FRISUR2');
    }
    else if (item == FRISUR3) {
        alt.emitServer('FRISUR3');
    }
    else if (item == FRISUR4) {
        alt.emitServer('FRISUR4');
    }
    else if (item == FRISUR5) {
        alt.emitServer('FRISUR5');
    }
    else if (item == FRISUR6) {
        alt.emitServer('FRISUR6');
    }
    else if (item == FRISUR7) {
        alt.emitServer('FRISUR7');
    }
    else if (item == FRISUR8) {
        alt.emitServer('FRISUR8');
    }
    else if (item == FRISUR9) {
        alt.emitServer('FRISUR9');
    }
    else if (item == FRISUR10) {
        alt.emitServer('FRISUR10');
    }
    });
});

