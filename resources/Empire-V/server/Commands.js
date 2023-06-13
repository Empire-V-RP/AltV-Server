import * as alt from 'alt-server';
import * as chat from "alt:chat";
import * as verbindung from './MysqlConnection.js';
import * as Funktion from './Coleshape.js';


  // value from permission_level == 100 this a admin darunter ist ein normaler spieler
    export function checkadmin(player) {
        verbindung.connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
            if (err) throw err;
            if (result.length > 0) {
                result.forEach(player => {
                    const permission = player.permission_level;
                    if (permission == 100) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
            }
        });
    }

    export function checkpolice(player) {
        verbindung.connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
            if (err) throw err;
            if (result.length > 0) {
                result.forEach(player => {
                    const permission = player.job;
                    if (permission == 'LSPD') {
                        return true;
                    }
                    else {
                        return false;
                        chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
                    }
                });
            }
        });
    }



    chat.registerCmd('saveoutfit', (player) => {
        if (checkadmin(player) == false) {
            return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
            } else {
                verbindung.savePlayerClothes(player);
                chat.send(player, 'Dein Outfit wurde gespeichert!', 255, 255, 255);
    }
    });

  chat.registerCmd('auto', (player, args) => {

    if (checkadmin(player) == false) {
      return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
    } else {


    if (!args[0]) {
      return chat.send(player, 'Bitte gebe ein Fahrzeug an!', 255, 255, 255);
    }
  
    const veh = new alt.Vehicle(args[0], player.pos.x, player.pos.y + 5, player.pos.z, 0, 0, 0);
    veh.numberPlate = 'Empire-V';
    veh.engineOn = true;
    veh.lockState = 0;
    veh.setStreamSyncedMeta('owner', player.name);
    chat.send(player, `Du hast dir ein ${args[0]} gespawnt!`, 255, 255, 255);

    }
  
  });



chat.registerCmd('createcolshape', (player, args) => {
    if (checkadmin(player) == false) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      } else {
    // 	id	name	color	sprite	x	y	z
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
    verbindung.connection.query(`INSERT INTO colshapes (name, color, sprite, x, y, z) VALUES ('${name}', '${color}', '${sprite}', '${x}', '${y}', '${z}')`, function (err, result) {
        if (err) throw err;
        console.log(err);
    });
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

chat.registerCmd('createblip', (player, args) => {

    if (checkadmin(player) == false) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      } else {
    // id	name	color	sprite	x	y	z	
    const name = args[0];
    const color = args[1];
    const sprite = args[2];
    const x = player.pos.x;
    const y = player.pos.y;
    const z = player.pos.z;
    alt.emitClient(player, 'addBlip', name, sprite, color, x, y, z);
    chat.send(player, `Du hast ein Blip mit dem Namen ${name} erstellt!`, 255, 255, 255);
    verbindung.connection.query(`INSERT INTO blips (name, color, sprite, x, y, z) VALUES ('${name}', '${color}', '${sprite}', '${x}', '${y}', '${z}')`, function (err, result) {
        if (err) throw err;
    }
    );
}
});

chat.registerCmd('createmaker', (player, args) => {

    if (checkadmin(player) == false) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      } else {
    if(!args[0]) return
    chat.send(player, `Bitte gebe ein makernamen an!`, 255, 255, 255);
    const marker = new alt.Marker(1, player.pos.x, player.pos.y, player.pos.z, 1, 1, 1, 255, 0, 0);
    marker.name = args[0];
    chat.send(player, `Du hast ein Marker mit dem Namen ${args[0]} erstellt!`, 255, 255, 255);
    
    var sql = "INSERT INTO markers (name, x, y, z, type, scale, r, g, b, a) VALUES ?";
    var values = [
        [args[0], player.pos.x, player.pos.y, player.pos.z, 1, 1, 255, 0, 0, 255]
    ];
    verbindung.connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    }
    );
    }
});


chat.registerCmd('deletemaker', (player, args) => {

    if (checkadmin(player) == false) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      } else {
    if(!args[0]) return chat.send(player, `Bitte gebe ein makernamen an!`, 255, 255, 255);
    chat.send(player, `Du hast ein Marker mit dem Namen ${args[0]} gelöscht!`, 255, 255, 255);
    verbindung.connection.query(`DELETE FROM markers WHERE name = '${args[0]}'`, function (err, result) {
        if (err) throw err;
        console.log("1 record deleted");
    }
    );
    const marker = alt.Marker.all.find(x => x.name == args[0]);
    marker.destroy();
    }
});


chat.registerCmd('getpos', (player) => {
    chat.send(player, `X: ${player.pos.x} Y: ${player.pos.y} Z: ${player.pos.z}`, 255, 255, 255);
});


  chat.registerCmd('dv', (player) => {

    if (checkadmin(player) == false) {
        return chat.send(player, 'Du hast nicht die benötigten Rechte!', 255, 255, 255);
      } else {
    // checkt ob ein Fahrzeug in der nähe ist
    if (!player.vehicle) {
        chat.send(player, 'Du bist in keinem Fahrzeug!', 255, 255, 255);
        return;
        }
        // löscht das Fahrzeug
        player.vehicle.destroy();
        chat.send(player, 'Du hast dein Fahrzeug gelöscht!', 255, 255, 255);
    }
  });


