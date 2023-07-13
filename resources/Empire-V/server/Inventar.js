import alt from 'alt-server';
import * as connection from './MysqlConnection.js';


function getItemsFromDatabase() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM spieler_inventar", (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
  
  alt.on("CLIENT:INVENTAR:REQUEST_ITEMS_FROM_DATABASE", (player) => {
    getItemsFromDatabase()
      .then((items) => {
        alt.emitClient(player, "CLIENT:INVENTAR:ITEMS_FROM_DATABASE", items);
      })
      .catch((error) => {
        console.error(error);
      });
  });