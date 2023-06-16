import alt from 'alt-client';
import * as NativeUI from '../includes/NativeUI/NativeUi.js';

const Menu = NativeUI.Menu;
const Point = NativeUI.Point;

let bankmoney = 0;

function updateBankMoney(money) {
  bankmoney = money;
}

alt.onServer('getPlayerStatsMoneyBank', () => {
    const money = bankmoney;
    updateBankMoney(money);
});


const ShopBank = new Menu("Bank", "", new Point(10, 120));
const kontostand = new NativeUI.UIMenuItem("Dein Kontostand: " + bankmoney.toString(), "", "");
const einzahlen = new NativeUI.UIMenuListItem("Einzahlen", "", new NativeUI.ItemsCollection(["1", "10", "100", "1000", "10000", "100000", "1000000"]));
const auszahlen = new NativeUI.UIMenuListItem("Auszahlen", "", new NativeUI.ItemsCollection(["1", "10", "100", "1000", "10000", "100000", "1000000"]));
const überweisen = new NativeUI.UIMenuListItem("Überweisen", "", new NativeUI.ItemsCollection(["1", "10", "100", "1000", "10000", "100000", "1000000"]));

ShopBank.AddItem(kontostand);
ShopBank.AddItem(überweisen);
ShopBank.AddItem(einzahlen);
ShopBank.AddItem(auszahlen);

ShopBank.Visible = false;
ShopBank.Close();

alt.onServer('CloseBankMenu', () => {
  ShopBank.Close();
  ShopBank.Visible = false;
});

alt.onServer('OpenBankMenu', () => {
  ShopBank.Open();
  ShopBank.ItemSelect.on((item, index) => {
    if (item == einzahlen) {
      alt.emitServer('Einzahlen', index);
    }
    else if (item == auszahlen) {
      alt.emitServer('Abheben', index);
    } else if (item == überweisen) {
      alt.emitServer('Überweisen', index);
    }
  });
});

alt.setInterval(() => {
    const money = bankmoney;
    updateBankMoney(money);
}, 1000);