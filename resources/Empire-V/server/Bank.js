import alt from 'alt-server';
import * as chat from 'alt:chat';
import * as Verbingung from './MysqlConnection.js';



function getBankMoney(player) {
    const query = `SELECT bankmoney FROM playerstats WHERE name = '${player.name}'`;
    Verbingung.connection.query(query, (error, result) => {
      if (error) {
        console.error('Error retrieving bank money:', error);
        return false;
      }
  
      if (result.length > 0) {
        const bankMoney = result[0].bankmoney;
        return bankMoney;
      } else {
        return false;
      }
    });
  }
  
  function getMoney(player) {
    const query = `SELECT money FROM playerstats WHERE name = '${player.name}'`;
    Verbingung.connection.query(query, (error, result) => {
      if (error) {
        console.error('Error retrieving money:', error);
        return false;
      }
  
      if (result.length > 0) {
        const Geld = result[0].money;
        return Geld;
      } else {
        return false;
      }
    });
  }
  
  // Event handler for the deposit event
  alt.onClient('Einzahlen', (player, amount) => {
    const money = getMoney(player);
    const bankMoney = getBankMoney(player);
  
    if (money !== false && bankMoney !== false) {
      const newMoney = money - amount;
      const newBankMoney = bankMoney + amount;
  
      // Update the player's money and bank money in the database
      const updateQuery = `UPDATE playerstats SET money = ${newMoney}, bankmoney = ${newBankMoney} WHERE name = '${player.name}'`;
      Verbingung.connection.query(updateQuery, (error) => {
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
  alt.onClient('Abheben', (player, amount) => {
    const money = getMoney(player);
    const bankMoney = getBankMoney(player);
  
    if (money !== false && bankMoney !== false && bankMoney >= amount) {
      const newMoney = money + amount;
      const newBankMoney = bankMoney - amount;
  
      // Update the player's money and bank money in the database
      const updateQuery = `UPDATE playerstats SET money = ${newMoney}, bankmoney = ${newBankMoney} WHERE name = '${player.name}'`;
      Verbingung.connection.query(updateQuery, (error) => {
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