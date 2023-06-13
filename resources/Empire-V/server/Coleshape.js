import * as alt from 'alt-server';
import * as chat from "alt:chat";
import * as job from '../server/PoliceJobFunctions.js';
import * as verbindung from '../server/MysqlConnection.js';

// /createcolshape police-dienstbeginn 0 60
// /createcolshape police-waffenkammer 0 60
// /createcolshape police-abmelden 0 60
// /createcolshape police-umkleide 0 60


export function checkpolice(player) {
   return new Promise((resolve, reject) => {
       verbindung.connection.query(`SELECT job FROM playerstats WHERE name = '${player.name}'`, function (error, result) {
           if (error) {
               console.log(error);
               resolve(false);
           }

           if (result.length > 0) {
               const job = result[0].job;
               resolve(job === 'LSPD');
           } else {
               resolve(false);
           }
       });
   });
}


alt.onClient('lockvehicle', async (player) => {
    const isPolice = await checkpolice(player);
    const isDienst = await job.getDienstStatus(player);
    if (!isPolice) {
        chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
    } else if (!isDienst) {
        chat.send(player, 'Du bist nicht im Dienst!', 255, 255, 255);
    }
    else {
        alt.emitClient(player, 'lockvehicle');
    }
});






alt.on('entityEnterColshape', async (colshape, player) => {
   if (colshape.name === 'PoliceClothesMenu') {
       const isPolice = await checkpolice(player);
       if (!isPolice) {
           chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
       } else {
        alt.emitClient(player, 'PoliceClothesMenuOpen');
      }
     }
     if (colshape.name == 'PoliceWeaponGiveMenu') {
      const isPolice = await checkpolice(player);
       if (!isPolice) {
           chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
       } else {
        alt.emitClient(player, 'PoliceWeaponGiveMenu');
      }
     }
     if (colshape.name == 'PoliceDienstMenu') {
      const isPolice = await checkpolice(player);
       if (!isPolice) {
           chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
       } else {
      alt.emitClient(player, 'PoliceDienstMenu');
      }
      }
      if (colshape.name == 'Kleidungsladen') {
         alt.emitClient(player, 'Kleidungsladen');
      }
      if (colshape.name == 'Firsuerladen') {
         alt.emitClient(player, 'Firsuerladen');
      }
      if (colshape.name == 'Bank') {
        alt.emitClient(player, 'OpenBankMenu');
        }

});


 alt.on('entityLeaveColshape', async (colshape, player) => {
    if (colshape.name == 'PoliceClothesMenu') {
      const isPolice = await checkpolice(player);
       if (!isPolice) {
           chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
       } else {
        alt.emitClient(player, 'ClosePoliceClothesMenu');
      }
     }
     if (colshape.name == 'PoliceWeaponGiveMenu') {
      const isPolice = await checkpolice(player);
       if (!isPolice) {
           chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
       } else {
         alt.emitClient(player, 'ClosePoliceWeaponGiveMenu');
      }
       }
         if (colshape.name == 'PoliceDienstMenu') {
            const isPolice = await checkpolice(player);
       if (!isPolice) {
           chat.send(player, 'Du bist kein Polizist!', 255, 255, 255);
       } else {
            alt.emitClient(player, 'ClosePoliceDienstMenu');
            }
          } 
          if (colshape.name == 'Kleidungsladen') {
            alt.emitClient(player, 'CloseKleidungsladen');
          }
          if (colshape.name == 'Firsuerladen') {
            alt.emitClient(player, 'CloseFirsuerladen');
         }
            if (colshape.name == 'Bank') {
                alt.emitClient(player, 'CloseBankMenu');
                }
});


alt.onClient('HOSEN', (player) => {
   alt.emitClient(player, 'HOSEN');
});

alt.onClient('TOPS', (player) => {
   alt.emitClient(player, 'TOPS');
});

alt.onClient('ARME', (player) => {
   alt.emitClient(player, 'ARME');
});

alt.onClient('SCHUHE', (player) => {
   alt.emitClient(player, 'SCHUHE');
});



