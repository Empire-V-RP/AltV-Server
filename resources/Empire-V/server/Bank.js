import alt from 'alt-server';
import * as chat from 'alt:chat';
import * as Verbingung from './MysqlConnection.js';





alt.setInterval((player) => {
  if(!player) {
    return;
  } else {
    getBankMoney(player);
  }
}, 1000);


function getBankMoney(player) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT bankmoney FROM playerstats WHERE name = ?';
    const values = [player.name];
    Verbingung.connection.query(query, values, (error, result) => {
      if (error) {
        console.error('Error retrieving bank money:', error);
        resolve(false);
      }

      if (result.length > 0) {
        const bankMoney = result[0].bankmoney;
        resolve(bankMoney);
        alt.emitClient(player, 'getPlayerStatsMoneyBank', bankMoney);
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
    Verbingung.connection.query(query, values, (error, result) => {
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

// is player is near player.pos for 3m return targetplayer
function nearPlayer(player, targetplayer) {
  const playerPos = player.position;
  const targetPos = targetplayer.position;
  const distance = Math.sqrt(
    Math.pow(targetPos.x - playerPos.x, 2) +
    Math.pow(targetPos.y - playerPos.y, 2) +
    Math.pow(targetPos.z - playerPos.z, 2)
  );

  if (distance < 3) {
    return targetplayer;
  }
  return undefined;
}

// Event handler for the überweisen event
alt.onClient('Überweisen', async (player, targetplayer, amount) => {
  const spielerindernähe = nearPlayer(player, targetplayer);
  const playerbankmoney = await getBankMoney(player);
  const targetplayerbankmoney = await getBankMoney(targetplayer);

  if (!spielerindernähe) { 
    return chat.send(player, 'Du bist nicht in der Nähe von dem Spieler');
  }
  if (playerbankmoney >= amount) {
    const newplayerbankmoney = playerbankmoney - amount;
    var removeplayermoney = 'UPDATE playerstats SET bankmoney = ? WHERE name = ?';
    const ValuePlayerBankMoney = [newplayerbankmoney, player.name];
    Verbingung.connection.query(removeplayermoney, ValuePlayerBankMoney, (error) => {
      if (error) {
        console.error('Error updating playerbankmoney:', error);
        return;
      }
    });
    const newtargetplayerbankmoney = targetplayerbankmoney + amount;
    var addtargetplayermoney = 'UPDATE playerstats SET bankmoney = ? WHERE name = ?';
    const ValueTargetPlayerBankMoney = [newtargetplayerbankmoney, targetplayer.name];
    Verbingung.connection.query(addtargetplayermoney, ValueTargetPlayerBankMoney, (error) => {
      if (error) {
        console.error('Error updating targetplayerbankmoney:', error);
        return;
      }
    });
    chat.send(player, `Du hast ${amount}€ an ${targetplayer.name} überwiesen`);
  } else {
    return chat.send(player, 'Du hast nicht genug Geld auf deinem Konto');
  }
  alt.emitClient(player, 'CloseBankMenu');
});




  // targetplayerbankmoney // INSERT INTO



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
    Verbingung.connection.query(updateQuery, updateValues, (error) => {
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
    Verbingung.connection.query(updateQuery, updateValues, (error) => {
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
