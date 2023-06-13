import alt from 'alt-server';
import * as chat from "alt:chat";
import { connection } from '../server/MysqlConnection.js';
import * as job from './PoliceJobFunctions.js';


alt.on('playerConnect', (player) => {
   connection.query(`SELECT * FROM playerlastlocation WHERE name = '${player.name}'`, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
         player.spawn(result[0].x, result[0].y, result[0].z, 0);
         player.model = "mp_m_freemode_01";
         loadplayerclothesfromdatenbank(player);
         chat.send(player, "Willkommen zurück " + player.name);
         console.log(player.name + " hat sich eingeloggt");
         alt.emitClient(player, "startHUD");

      } else {
         player.spawn(413.815, -978.132, 29.4315, 0);
         player.model = "mp_m_freemode_01";
         loadplayerclothesfromdatenbank(player);
         console.log(player.name + " hat sich eingeloggt");
         alt.emitClient(player, "startHUD");

         
         // INSERT INTO playerstats (name, money, bankmoney, job, job_rank, permission_level, personal_vehicle, personal_vehicle_ingarage) VALUES ('${player.name}', '0', '0', 'Zivilist', 'Zivilist', '0', '0', '0')
         connection.query(`INSERT INTO playerstats (name, money, bankmoney, job, job_rank, permission_level, personal_vehicle, personal_vehicle_ingarage) VALUES ('${player.name}', '100', '1000', 'Arbeitslos', 'ALG2', '0', 'bmx', '0')`, function (err, result) {
            if (err) throw err;
         });

         connection.query(`INSERT INTO playerlastlocation (name, x, y, z) VALUES ('${player.name}', '-1037.000', '-2737.000', '20.000')`, function (err, result) {
            if (err) throw err;
         });
      }
   });

   // load all colshapes and make this new 
   // id	name	color	sprite	x	y	z
   connection.query(`SELECT * FROM colshapes`, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
         result.forEach(colshape => {
            const colshape2 = new alt.ColshapeCylinder(colshape.x, colshape.y, colshape.z, 1, 1);
            colshape2.name = colshape.name;
            colshape2.color = colshape.color;
            colshape2.sprite = colshape.sprite;
         });
      }
   });

   connection.query(`SELECT * FROM blips`, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
         result.forEach(blip => {
            const blip2 = new alt.PointBlip(blip.x, blip.y, blip.z);
            blip2.sprite = blip.sprite;
            blip2.color = blip.color;
            blip2.name = blip.name;
            blip2.scale = 0.7;
            blip2.shortRange = true;
         });
      }
   });
});

// Save Playersposition Every 2 Seconds
alt.setInterval(function () {
   alt.Player.all.forEach(player => {
       connection.query(`UPDATE playerlastlocation SET x = '${player.pos.x}', y = '${player.pos.y}', z = '${player.pos.z}' WHERE name = '${player.name}'`, function (err, result) {
         if (err) throw err;
      });

      var money = 100;
      var bankmoney = 1000;
      var job = "Arbeitslos";
      var job_rank = "ALG2";
      var is_dienst = 0;
      var permission_level = 0;
      var personal_vehicle = "bmx";
      var personal_vehicle_ingarage = 0;

      // Checkt if player has data in table playerstats if not insert into standard data
      connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
         if (err) throw err;
         if (result.length > 0) {
            result.forEach(playerstats => {
               money = playerstats.money;
               bankmoney = playerstats.bankmoney;
               job = playerstats.job;
               job_rank = playerstats.job_rank;
               is_dienst = playerstats.is_dienst;
               permission_level = playerstats.permission_level;
               personal_vehicle = playerstats.personal_vehicle;
               personal_vehicle_ingarage = playerstats.personal_vehicle_ingarage;
            });
         } else {
            connection.query(`INSERT INTO playerstats (name, money, bankmoney, job, job_rank, is_dienst, permission_level, personal_vehicle, personal_vehicle_ingarage) VALUES ('${player.name}', '100', '1000', 'Arbeitslos', 'ALG2', '0', '0', 'bmx', '0')`, function (err, result) {
               if (err) throw err;
            });
         }
      });
   });
}, 2000);




alt.on('playerDisconnect', (player) => {
   job.setDienstBeenden(player);
   connection.query(`UPDATE playerlastlocation SET x = '${player.pos.x}', y = '${player.pos.y}', z = '${player.pos.z}' WHERE name = '${player.name}'`, function (err, result) {
      if (err) throw err;
   });

});


alt.on('playerDeath', (player) => {
   player.removeAllWeapons();
   const playerlastpos = player.pos;
   player.spawn(playerlastpos.x, playerlastpos.y, playerlastpos.z, 0);
   connection.query(`UPDATE playerlastlocation SET x = '${player.pos.x}', y = '${player.pos.y}', z = '${player.pos.z}' WHERE name = '${player.name}'`, function (err, result) {
      if (err) throw err;
   });
});

function loadplayerclothesfromdatenbank(player) {
   connection.query(`SELECT * FROM playerclohtes WHERE name = '${player.name}'`, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
         result.forEach(clothes => {
            // 0 - Head
            // 1 - Mask
            // 2 - Hair Stye
            // 3 - Torso
            // 4 - Legs
            // 5 - Bags
            // 6 - Shoes
            // 7 - Accessories
            // 8 - Undershirts
            // 9 - Body Armour
            // 10 - Decals
            // 11 - Tops

            player.setClothes(0, clothes.hat_style, clothes.hat_texture, 0);
            player.setClothes(1, clothes.mask_style, clothes.mask_texture, 0);
            player.setClothes(2, clothes.hair_style, clothes.hair_texture, 0);
            player.setClothes(3, clothes.torso_style, clothes.torso_texture, 0);
            player.setClothes(4, clothes.legs_style, clothes.legs_texture, 0);
            player.setClothes(5, clothes.bags_style, clothes.bags_texture, 0);
            player.setClothes(6, clothes.shoes_style, clothes.shoes_texture, 0);
            player.setClothes(7, clothes.accessories_style, clothes.accessories_texture, 0);
            player.setClothes(8, clothes.undershirts_style, clothes.undershirts_texture, 0);
            player.setClothes(9, clothes.body_armour_style, clothes.body_armour_texture, 0);
            player.setClothes(10, clothes.decals_style, clothes.decals_texture, 0);
            player.setClothes(11, clothes.top_style, clothes.top_texture, 0);
            
         });
      }
   });
}


alt.onClient('getCash', (player) => {
   connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
         if (err) throw err;
         if (result.length > 0) {
            result.forEach(playerstats => {
               const cash = playerstats.money;
               return cash;
            });
         }
   });
});

alt.onClient('getPlayerStatsMoneyBank', (player) => {
   connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
         if (err) throw err;
         if (result.length > 0) {
            result.forEach(playerstats => {
               const bankcash = playerstats.bankmoney;
               return bankcash;
            });
         }
   });
});



alt.onClient('getMoney', (player) => {
   connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
       if (err) throw err;
       if (result.length > 0) {
           result.forEach(playerstats => {
               const money = playerstats.money;
               alt.emitClient(player, 'moneyResponse', money);
           });
       }
   });
});

alt.onClient('getBankMoney', (player) => {
   connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
       if (err) throw err;
       if (result.length > 0) {
           result.forEach(playerstats => {
               const bankMoney = playerstats.bankmoney;
               alt.emitClient(player, 'bankMoneyResponse', bankMoney);
           });
       }
   });
});

alt.onClient('getJob', (player) => {
   connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
       if (err) throw err;
       if (result.length > 0) {
           result.forEach(playerstats => {
               const job = playerstats.job;
               alt.emitClient(player, 'jobResponse', job);
           });
       }
   });
});

alt.onClient('getRank', (player) => {
   connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
       if (err) throw err;
       if (result.length > 0) {
           result.forEach(playerstats => {
               const rank = playerstats.job_rank;
               alt.emitClient(player, 'rankResponse', rank);
           });
       }
   });
});

alt.onClient('getFuelLevel', (player) => {
   // Retrieve the fuel level for the player (example)
   if(player.vehicle == null) {
      return;
   } else {
      const vehicle = player.vehicle;
      const vehicleFuelLevel = vehicle.fuelLevel;
      alt.emitClient(player, 'fuelLevelResponse', vehicleFuelLevel);
   }
});


alt.onClient('getTank', (player) => {
   // tank == % of fuel
   // 0% bis 100%
   if(player.vehicle == null) {
      return;
   }
   const vehicle = player.vehicle;
   const vehicleFuelLevel = vehicle.fuelLevel;
   const vehicleFuelTank = vehicle.fuelTank;
   const vehicleFuelTankPercentage = vehicleFuelLevel / vehicleFuelTank * 100;
   vehicle.setFuelLevel(100);
   alt.emitClient(player, 'tankResponse', vehicleFuelTankPercentage);

   // wenn das auto 0% tank hat, dann stoppe den timer
   if(vehicleFuelLevel == 0) {
      alt.clearInterval();
   }

   // wenn das auto 100% tank hat, dann starte den timer
   if(vehicleFuelLevel == 100) {
      alt.setInterval(() => {
         if(vehicleFuelLevel > 0) {
            vehicle.setFuelLevel(vehicleFuelLevel - 1);
         }
      }, 1000);
   }

   //mache das auto kaputt wenn der tank leer ist
   if(vehicleFuelLevel == 0) {
      vehicle.setEngineStatus(false);
   }

});

alt.onClient('getGeld', (player) => {
   getGeld(player);
});


function getGeld(player) {
   connection.query(`SELECT * FROM playerstats WHERE name = '${player.name}'`, function (err, result) {
       if (err) throw err;
       if (result.length > 0) {
           result.forEach(playerstats => {
               const money = playerstats.money;
               return money;
           });
       }
   });
}



alt.on('enteredVehicle', (player, vehicle) => {
   if(player == null || vehicle == null) {
      return;
   } else {
      alt.emitClient(player, 'inVehicle');
   }
});

alt.on('leftVehicle', (player) => {
      alt.emitClient(player, 'outVehicle');
});
