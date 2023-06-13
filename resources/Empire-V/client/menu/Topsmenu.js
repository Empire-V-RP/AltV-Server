import * as alt from 'alt-client';
import * as MenuFramework from './src/menu.js';

const TOPSMENU = new MenuFramework.Menu('Oberteile', '', 'Hier kannst du deine Oberteile ändern.');
const TOP0 = new MenuFramework.MenuItem('', '', 'Oberteil ausziehen');
const TOP1 = new MenuFramework.MenuItem('', '', 'Oberteil 1');
const TOP2 = new MenuFramework.MenuItem('', '', 'Oberteil 2');
const TOP3 = new MenuFramework.MenuItem('', '', 'Oberteil 3');
const TOP4 = new MenuFramework.MenuItem('', '', 'Oberteil 4');
const TOP5 = new MenuFramework.MenuItem('', '', 'Oberteil 5');
const TOP6 = new MenuFramework.MenuItem('', '', 'Oberteil 6');
const TOP7 = new MenuFramework.MenuItem('', '', 'Oberteil 7');
const TOP8 = new MenuFramework.MenuItem('', '', 'Oberteil 8');
const TOP9 = new MenuFramework.MenuItem('', '', 'Oberteil 9');
const TOP10 = new MenuFramework.MenuItem('', '', 'Oberteil 10');


TOPSMENU.addItem(TOP0);
TOPSMENU.addItem(TOP1);
TOPSMENU.addItem(TOP2);
TOPSMENU.addItem(TOP3);
TOPSMENU.addItem(TOP4);
TOPSMENU.addItem(TOP5);
TOPSMENU.addItem(TOP6);
TOPSMENU.addItem(TOP7);
TOPSMENU.addItem(TOP8);
TOPSMENU.addItem(TOP9);
TOPSMENU.addItem(TOP10);
TOPSMENU.visible = false;
TOPSMENU.close();


alt.onServer('CloseKleidungsladen', () => {
    TOPSMENU.close();
    TOPSMENU.visible = false;
});


alt.onServer('TOPS', () => {
    TOPSMENU.open();
    TOPSMENU.itemSelect.on((item, index) => {
    if (item == TOP0) {
        alt.emitServer('TOP0');
    } else if (item == TOP1) {
        alt.emitServer('TOP1');
    }
    else if (item == TOP2) {
        alt.emitServer('TOP2');
    }
    else if (item == TOP3) {
        alt.emitServer('TOP3');
    }
    else if (item == TOP4) {
        alt.emitServer('TOP4');
    }
    else if (item == TOP5) {
        alt.emitServer('TOP5');
    }
    else if (item == TOP6) {
        alt.emitServer('TOP6');
    }
    else if (item == TOP7) {
        alt.emitServer('TOP7');
    }
    else if (item == TOP8) {
        alt.emitServer('TOP8');
    }
    else if (item == TOP9) {
        alt.emitServer('TOP9');
    }
    else if (item == TOP10) {
        alt.emitServer('TOP10');
    }
    });
});

