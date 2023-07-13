import * as alt from 'alt-server';
import * as chat from "alt:chat";
import * as verbindung from './MysqlConnection.js';
import * as Funktion from './Coleshape.js';
import * as fs from 'fs';

export function checkadmin(player) {
    return new Promise((resolve, reject) => {
      verbindung.connection.query('SELECT * FROM playerstats WHERE name = ?', [player.name], function (err, result) {
        if (err) {
          reject(err);
        } else {
          if (result.length > 0) {
            const permission = result[0].permission_level;
            resolve(permission === 100);
          } else {
            resolve(false);
          }
        }
      });
    });
  }
  
  export function checkpolice(player) {
    return new Promise((resolve, reject) => {
      verbindung.connection.query('SELECT * FROM playerstats WHERE name = ?', [player.name], function (err, result) {
        if (err) {
          reject(err);
        } else {
          if (result.length > 0) {
            const job = result[0].job;
            if (job === 'LSPD') {
              resolve(true);
            } else {
              chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
              resolve(false);
            }
          } else {
            resolve(false);
          }
        }
      });
    });
  }

  chat.registerCmd("charaktereditor", async (player) => {
    try {
      const isAdmin = await checkadmin(player);
      if (!isAdmin) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      }
      alt.emitClient(player, "Client:Charcreator:CreateCEF");
    } catch (err) {
      console.error(err);
      return;
    }
  });

  chat.registerCmd('auto', async (player, args) => {
    try {
      const isAdmin = await checkadmin(player);
      if (!isAdmin) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      }
  
      if (!args[0]) {
        return chat.send(player, 'Bitte gebe ein Fahrzeug an!', 255, 255, 255);
      }
  
      if(args == undefined) {
        return chat.send(player, 'Bitte gebe ein Fahrzeug an!', 255, 255, 255);
      }

      const veh = new alt.Vehicle(args[0], player.pos.x, player.pos.y + 8, player.pos.z, 0, 0, 0);
      veh.lockState = 0;
      veh.setStreamSyncedMeta('owner', player.name);
      veh.setStreamSyncedMeta('fuel', 100);
      veh.setStreamSyncedMeta('engine', false);
      veh.setStreamSyncedMeta('locked', false);
      veh.setStreamSyncedMeta('mileage', 0);
      chat.send(player, `Du hast dir ein ${args[0]} gespawnt!`, 255, 255, 255);
    } catch (err) {
      console.error(err);
    }
  });
  


  // createcolshape PoliceClothesMenu 0 60

  chat.registerCmd('createcolshape', async (player, args) => {
    try {
      const isAdmin = await checkadmin(player);
      if (!isAdmin) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      }
  
      if (!args[0]) {
        return chat.send(player, 'Bitte gebe einen Namen an!', 255, 255, 255);
      }
  
      const name = args[0];
      const color = args[1];
      const sprite = args[2];
      const x = player.pos.x;
      const y = player.pos.y;
      const z = player.pos.z;
      const colshape = new alt.ColshapeCylinder(x, y, z, 1, 1);
      colshape.name = name;
      colshape.color = color;
      colshape.sprite = sprite;
      chat.send(player, `Du hast ein Colshape mit dem Namen ${name} erstellt!`, 255, 255, 255);
  
      verbindung.connection.query('INSERT INTO colshapes (name, color, sprite, x, y, z) VALUES (?, ?, ?, ?, ?, ?)', [name, color, sprite, x, y, z], function (err, result) {
        if (err) {
          console.error(err);
        }
      });
    } catch (err) {
      console.error(err);
    }
  });
  


// createblip Polizei 0 60 
// createblip Sheriff 0 58
// createblip Krankenhaus 0 61
// createblip Mechaniker 0 62
// createblip Einkaufsgeschäft(24/7) 0 59
// createblip Tankstelle 0 52
// createblip Waffenladen 0 110
// createblip Autohaus 0 225
// createblip Tuningwerkstatt 0 72
// createblip Garage 0 50
// createblip Autovermietung 0 56
// createblip Klammottenladen 0 73
// craeteblip Tattoostudio 0 75
// createblip Friseur 0 71

chat.registerCmd('createblip', async (player, args) => {
    try {
      const isAdmin = await checkadmin(player);
      if (!isAdmin) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      }
  
      if (!args[0] || !args[1] || !args[2]) {
        return chat.send(player, 'Bitte gebe alle erforderlichen Parameter an!', 255, 255, 255);
      }
  
      const name = args[0];
      const color = args[1];
      const sprite = args[2];
      const x = player.pos.x;
      const y = player.pos.y;
      const z = player.pos.z;
      alt.emitClient(player, 'addBlip', name, sprite, color, x, y, z);
      chat.send(player, `Du hast ein Blip mit dem Namen ${name} erstellt!`, 255, 255, 255);
  
      const query = 'INSERT INTO blips (name, color, sprite, x, y, z) VALUES (?, ?, ?, ?, ?, ?)';
      const values = [name, color, sprite, x, y, z];
      verbindung.connection.query(query, values, function (err, result) {
        if (err) {
          console.error(err);
        }
      });
    } catch (err) {
      console.error(err);
    }
  });
  
  chat.registerCmd('createmaker', async (player, args) => {
    try {
      const isAdmin = await checkadmin(player);
      if (!isAdmin) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      }
  
      if (!args[0]) {
        return chat.send(player, 'Bitte gebe einen Makernamen an!', 255, 255, 255);
      }
  
      const name = args[0];
      const x = player.pos.x;
      const y = player.pos.y;
      const z = player.pos.z;
      const marker = new alt.Marker(1, x, y, z, 1, 1, 1, 255, 0, 0);
      marker.name = name;
      chat.send(player, `Du hast einen Marker mit dem Namen ${name} erstellt!`, 255, 255, 255);
  
      const query = 'INSERT INTO markers (name, x, y, z, type, scale, r, g, b, a) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
      const values = [name, x, y, z, 1, 1, 255, 0, 0, 255];
      verbindung.connection.query(query, values, function (err, result) {
        if (err) {
          console.error(err);
        }
      });
    } catch (err) {
      console.error(err);
    }
  });
  
  chat.registerCmd('deletemaker', async (player, args) => {
    try {
      const isAdmin = await checkadmin(player);
      if (!isAdmin) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      }
  
      if (!args[0]) {
        return chat.send(player, 'Bitte gebe einen Makernamen an!', 255, 255, 255);
      }
  
      const name = args[0];
      chat.send(player, `Du hast einen Marker mit dem Namen ${name} gelöscht!`, 255, 255, 255);
  
      const query = 'DELETE FROM markers WHERE name = ?';
      const values = [name];
      verbindung.connection.query(query, values, function (err, result) {
        if (err) {
          console.error(err);
        }
      });
  
      const marker = alt.Marker.all.find(x => x.name === name);
      marker.destroy();
    } catch (err) {
      console.error(err);
    }
  });
  
  chat.registerCmd('getpos', (player) => {
    const { x, y, z } = player.pos;
    chat.send(player, `X: ${x} Y: ${y} Z: ${z}`, 255, 255, 255);
  });

  chat.registerCmd('dv', async (player, range) => {
    try {
      const isAdmin = await checkadmin(player);
      if (!isAdmin) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      }
  
      const deleteRadius = parseInt(range);
      if (isNaN(deleteRadius) || deleteRadius <= 0) {
        return chat.send(player, 'Ungültiger Radius. Verwende: /dv <Radius>', 255, 255, 255);
      }
  
      if (!player.vehicle) {
        // Wenn der Spieler nicht in einem Fahrzeug ist
        const vehicles = alt.Vehicle.all;
        let deletedCount = 0;
  
        for (const veh of vehicles) {
          const distance = Math.sqrt(Math.pow(veh.pos.x - player.pos.x, 2) + Math.pow(veh.pos.y - player.pos.y, 2) + Math.pow(veh.pos.z - player.pos.z, 2));
          if (distance <= deleteRadius) {
            veh.destroy();
            deletedCount++;
          }
        }
  
        chat.send(player, `Du hast ${deletedCount} Fahrzeug(e) im Radius von ${deleteRadius} gelöscht!`, 255, 255, 255);
      } else {
        // Wenn der Spieler in einem Fahrzeug ist
        player.vehicle.destroy();
        chat.send(player, 'Du hast dein Fahrzeug gelöscht!', 255, 255, 255);
      }
    } catch (err) {
      console.error(err);
    }
  });
  