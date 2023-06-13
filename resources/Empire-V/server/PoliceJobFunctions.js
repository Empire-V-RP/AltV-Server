import * as alt from 'alt-server';
import * as chat from "alt:chat";
import * as verbindung from '../server/MysqlConnection.js';


export function getDienstStatus(player) {
      return new Promise((resolve, reject) => {
          verbindung.connection.query(`SELECT is_dienst FROM playerstats WHERE name = '${player.name}'`, function (error, result) {
              if (error) {
                  console.log(error);
                  resolve(false);
              }
  
              if (result.length > 0) {
                  const isDienst = result[0].is_dienst;
                  resolve(isDienst === 1);
              } else {
                  resolve(false);
              }
          });
      });
  }
      
export function StandartPolizeikleidung(player) {
    player.setClothes(2, 7, 3, 0);
    player.setClothes(3, 0, 0, 0);
    player.setClothes(4, 35, 0, 0);
    player.setClothes(6, 25, 0, 0);
    player.setClothes(8, 58, 0, 0);
    player.setClothes(11, 55, 0, 0);
    player.setClothes(1, 121, 0, 0);
    player.setClothes(9, 0, 0, 0);
    player.setClothes(7, 0, 0, 0);
    player.setClothes(10, 0, 0, 0);
    player.setClothes(3, 0, 0, 0);
    player.setClothes(4, 35, 0, 0);
    player.setClothes(6, 25, 0, 0);
    player.setClothes(8, 58, 0, 0);
 } 
 
export function StandartSheriffKleidung(player) {
      player.setClothes(2, 0, 0, 0);
      player.setClothes(1, 121, 0, 0);
      player.setClothes(2, 0, 0, 0);
      player.setClothes(3, 1, 0, 0);
      player.setClothes(4, 160, 0, 0);
      player.setClothes(6, 25, 0, 0);
      player.setClothes(8, 122, 0, 0);
      player.setClothes(10, 1, 0, 0);
    }
    
 export function standartwaffen(player) {
       player.giveWeapon('weapon_pistol', 100, true);
       player.giveWeapon('weapon_stungun', 100, true);
       player.giveWeapon('weapon_nightstick', 100, true);
       player.giveWeapon('weapon_flashlight', 100, true);
       player.giveWeapon('weapon_carbinerifle', 100, true);
       player.giveWeapon('weapon_pumpshotgun', 100, true);
       player.giveWeapon('weapon_fireextinguisher', 100, true);
       player.giveWeapon('weapon_flare', 100, true);
       player.giveWeapon('weapon_petrolcan', 100, true);
       player.giveWeapon('weapon_firework', 100, true);
       player.giveWeapon('weapon_ball', 100, true);
       player.giveWeapon('weapon_smokegrenade', 100, true);
       player.giveWeapon('weapon_bzgas', 100, true);
       player.giveWeapon('weapon_molotov', 100, true);
       player.giveWeapon('weapon_snowball', 100, true);
       player.giveWeapon('weapon_flaregun', 100, true);
       player.giveWeapon('weapon_grenade', 100, true);
       player.giveWeapon('weapon_hominglauncher', 100, true);
       player.giveWeapon('weapon_compactlauncher', 100, true);
       player.giveWeapon('weapon_minigun', 100, true);
       player.giveWeapon('weapon_firework', 100, true);
       player.giveWeapon('weapon_rpg', 100, true);
       player.giveWeapon('weapon_grenadelauncher', 100, true);
       player.giveWeapon('weapon_railgun', 100, true);
       player.giveWeapon('weapon_rayminigun', 100, true);
       player.giveWeapon('weapon_knife', 100, true);
       player.giveWeapon('weapon_machete', 100, true);
       player.giveWeapon('weapon_switchblade', 100, true);
       player.giveWeapon('weapon_battleaxe', 100, true);
       player.giveWeapon('weapon_poolcue', 100, true);
       player.giveWeapon('weapon_wrench', 100, true);
       player.giveWeapon('weapon_hammer', 100, true);
       player.giveWeapon('weapon_golfclub', 100, true);
       player.giveWeapon('weapon_crowbar', 100, true);
       player.giveWeapon('weapon_bat', 100, true);
       player.giveWeapon('weapon_bottle', 100, true);
       player.giveWeapon('weapon_dagger', 100, true);
       player.giveWeapon('weapon_hatchet', 100, true);
       player.giveWeapon('weapon_knuckle', 100, true);
       player.giveWeapon('weapon_machete', 100, true);
       player.giveWeapon('weapon_flashlight', 100, true);
       player.giveWeapon('weapon_nightstick', 100, true);
       player.giveWeapon('weapon_stungun', 100, true);
       player.giveWeapon('weapon_pistol', 100, true);
 
 }

      alt.onClient('Arbeitskleidung', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            player.setClothes(3, 0, 0, 0);
            player.setClothes(4, 35, 0, 0);
            player.setClothes(6, 25, 0, 0);
            player.setClothes(8, 58, 0, 0);
            player.setClothes(11, 55, 0, 0);
            player.setClothes(1, 121, 0, 0);
            player.setClothes(9, 0, 0, 0);
            player.setClothes(7, 0, 0, 0);
            player.setClothes(10, 0, 0, 0);
            } else {
                  return chat.send(player, "Du bist nicht im Dienst!");
            }
      });
     
      alt.onClient('Zivilkleidung', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            player.setClothes(3, 0, 0, 0);
            player.setClothes(4, 0, 0, 0);
            player.setClothes(6, 0, 0, 0);
            player.setClothes(8, 0, 0, 0);
            player.setClothes(11, 0, 0, 0);
            player.setClothes(1, 0, 0, 0);
            player.setClothes(9, 0, 0, 0);
            player.setClothes(7, 0, 0, 0);
            player.setClothes(10, 0, 0, 0);
      } else {
            return chat.send(player, "Du bist nicht im Dienst!");
      }
      });

      alt.onClient('SheriffKleidung', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            //Legs
            player.setClothes(4, 160, 0, 0);
            //Shoes
            player.setClothes(6, 25, 0, 0);
            //Accessories
            player.setClothes(7, 0, 0, 0);
            //Undershirts
            player.setClothes(8, 122, 0, 0);
            //Body Armour
            player.setClothes(9, 0, 0, 0);
            //Decals
            player.setClothes(10, 0, 0, 0);
            //Tops
            player.setClothes(11, 442, 0, 0);
      } else {
            return chat.send(player, "Du bist nicht im Dienst!");
      }
      });

      alt.onClient('Schutzweste_anlegen', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            player.maxArmour = 100;
            player.setClothes(9, 59, 0, 0);
      } else {
            return chat.send(player, "Du bist nicht im Dienst!");
      }
      });

      alt.onClient('Schutzweste_ablegen', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            player.maxArmour = 0;
            player.setClothes(9, 0, 0, 0);
      } else {
            return chat.send(player, "Du bist nicht im Dienst!");
      }
      });


      alt.onClient('SheriffSchutzweste_anlegen', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            player.maxArmour = 100;
            player.setClothes(9, 60, 0, 0);
      } else {
            return chat.send(player, "Du bist nicht im Dienst!");
      }
      });

      alt.onClient('SheriffSchutzweste_ablegen', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            player.maxArmour = 0;
            player.setClothes(9, 0, 0, 0);
      } else {
            return chat.send(player, "Du bist nicht im Dienst!");
      }
      });


      alt.onClient('Dienstausrüstung_anlegen', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            player.giveWeapon('weapon_flashlight', 0, true);
            player.giveWeapon('weapon_nightstick', 0, true);
            player.giveWeapon('weapon_stungun', 0, true);
            player.giveWeapon('waepon_pistol', 0, true);
                  } else {
                  return chat.send(player, "Du bist nicht im Dienst!");
            }
      });

      alt.onClient('Dienstausrüstung_ablegen', async (player) => {
           const isDienst = await getDienstStatus(player);
        if (isDienst) {

            player.removeAllWeapons();
      } else {
            return chat.send(player, "Du bist nicht im Dienst!");
      }
      });

      export function setDienstBeginn(player) {
            verbindung.connection.query(`UPDATE playerstats SET is_dienst = 1 WHERE name = '${player.name}'`, function (error, result) {
                if (error) {
                    console.log(error);
                } else {
                    alt.emitClient(player, 'Dienst_beginn');
                    chat.send(player, 'Du hast deinen Dienst begonnen', 255, 255, 255);
                }
            });
        }
        
        export function setDienstBeenden(player) {
            verbindung.connection.query(`UPDATE playerstats SET is_dienst = 0 WHERE name = '${player.name}'`, function (error, result) {
                if (error) {
                    console.log(error);
                } else {
                    alt.emitClient(player, 'Dienst_beenden');
                    chat.send(player, 'Du hast deinen Dienst beendet, schönen Feierabend', 255, 255, 255);
                }
            });
        }


        alt.onClient('Dienst_beginn', (player) => {
            setDienstBeginn(player);
        });
        
        alt.onClient('Dienst_beenden', (player) => {
            setDienstBeenden(player);
        });

      // mache /createweaponstorage (aktuelle position des spielers wird gespeichert und datenbank isert into)
      export function createIngameWeaponStorage() {

      }

      // mache /createpolicebossmenu ( coleshape wird erstellt und datenbank isert into & alt.on('playerEnterColshape')
      export function createIngameBossMenu() {

      }

      // mache ein nativeui menu mit den permissions und rangen für verschiedene interactionen z.b policejob_recrute = hat nur die permission leute zu verhaften und license zu checken
      export function createIngameInteractionsMenu() {

      }


      alt.onClient('lockVehicle', (player) => {
            chat.send(player, 'Fahrzeug abgeschlossen', 214, 4, 0);
      });

      alt.onClient('unlockVehicle', (player) => {     
            chat.send(player, 'Fahrzeug aufgeschlossen', 3, 166, 47);
      });