import alt from 'alt-server';
import * as chat from 'alt:chat';
import * as Verbingung from './MysqlConnection.js';


function getBankMoney(player) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT bankmoney FROM playerstats WHERE name = ?';
    const values = [player.name];
    verbindung.connection.query(query, values, (error, result) => {
      if (error) {
        console.error('Error retrieving bank money:', error);
        resolve(false);
      }

      if (result.length > 0) {
        const bankMoney = result[0].bankmoney;
        resolve(bankMoney);
      } else {
        resolve(false);
      }
    });
  });
}

function getMoney(player) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT money FROM playerstats WHERE name = ?';
    const values = [player.name];
    verbindung.connection.query(query, values, (error, result) => {
      if (error) {
        console.error('Error retrieving money:', error);
        resolve(false);
      }

      if (result.length > 0) {
        const Geld = result[0].money;
        resolve(Geld);
      } else {
        resolve(false);
      }
    });
  });
}

// Event handler for the deposit event
alt.onClient('Einzahlen', async (player, amount) => {
  const money = await getMoney(player);
  const bankMoney = await getBankMoney(player);

  if (money !== false && bankMoney !== false) {
    const newMoney = money - amount;
    const newBankMoney = bankMoney + amount;

    // Update the player's money and bank money in the database
    const updateQuery = 'UPDATE playerstats SET money = ?, bankmoney = ? WHERE name = ?';
    const updateValues = [newMoney, newBankMoney, player.name];
    verbindung.connection.query(updateQuery, updateValues, (error) => {
      if (error) {
        console.error('Error updating money and bank money:', error);
        return;
      }

      // Emit an event to inform the client that the transaction was successful
      alt.emitClient(player, 'TransactionSuccess');
    });
  } else {
    // Emit an event to inform the client that the transaction failed
    alt.emitClient(player, 'TransactionFailed');
  }

  alt.emitClient(player, 'CloseBankMenu');
});

// Event handler for the withdrawal event
alt.onClient('Abheben', async (player, amount) => {
  const money = await getMoney(player);
  const bankMoney = await getBankMoney(player);

  if (money !== false && bankMoney !== false && bankMoney >= amount) {
    const newMoney = money + amount;
    const newBankMoney = bankMoney - amount;

    // Update the player's money and bank money in the database
    const updateQuery = 'UPDATE playerstats SET money = ?, bankmoney = ? WHERE name = ?';
    const updateValues = [newMoney, newBankMoney, player.name];
    verbindung.connection.query(updateQuery, updateValues, (error) => {
      if (error) {
        console.error('Error updating money and bank money:', error);
        return;
      }

      // Emit an event to inform the client that the transaction was successful
      alt.emitClient(player, 'TransactionSuccess');
    });
  } else {
    // Emit an event to inform the client that the transaction failed
    alt.emitClient(player, 'TransactionFailed');
  }

  alt.emitClient(player, 'CloseBankMenu');
});
