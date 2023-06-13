import alt from 'alt-server';
import * as chat from "alt:chat";
import Mysql from 'mysql';

export const connection = Mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'altv'
});

export function isPolice(player) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM playerstats WHERE name = ?`;
      const values = [player.name];
      connection.query(query, values, function (err, result) {
        if (err) {
          console.error(err);
          resolve(false);
        }
  
        if (result.length > 0) {
          result.forEach(playerstats => {
            const job = playerstats.job;
            if (job == "LSPD") {
              resolve(true);
            } else {
              resolve(false);
            }
          });
        } else {
          resolve(false);
        }
      });
    });
  }
  

  


connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('[Empire-V] Datenbank verbunden!');
        // Server Tables
        createColshapeTable();
        createMakerTable();
        createBlipTable();

        // Player Tables
        createPlayerLastLocationTable();
        createPlayerClohtesTable();
        creteplayerstatstable();

        // LOGINSYSTEM
        createRegisterTable();
        CreateLoginTable();

    }
});


 // money & bankmoney & job & job_rank & is_dienst & permission_level & personal_vehicle & personal_vehicle_ingarage
function creteplayerstatstable() {
    connection.query(`CREATE TABLE IF NOT EXISTS playerstats (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        money INT,
        bankmoney INT,
        job VARCHAR(255),
        job_rank VARCHAR(255),
        is_dienst BOOLEAN,
        permission_level INT,
        personal_vehicle VARCHAR(255),
        personal_vehicle_ingarage BOOLEAN
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Player Stats Table erstellt!');
        }
    }
    );
}



export function savePlayerClothes(player) {
    const clothes = {
        hat_style: player.getClothes(0).drawable,
        hat_texture: player.getClothes(0).texture,
        hair_style: player.getClothes(1).drawable,
        hair_texture: player.getClothes(1).texture,
        glasses_style: player.getClothes(2).drawable,
        glasses_texture: player.getClothes(2).texture,
        mask_style: player.getClothes(3).drawable,
        mask_texture: player.getClothes(3).texture,
        torso_style: player.getClothes(4).drawable,
        torso_texture: player.getClothes(4).texture,
        legs_style: player.getClothes(6).drawable,
        legs_texture: player.getClothes(6).texture,
        shoes_style: player.getClothes(7).drawable,
        shoes_texture: player.getClothes(7).texture,
        accessories_style: player.getClothes(8).drawable,
        accessories_texture: player.getClothes(8).texture,
        undershirt_style: player.getClothes(11).drawable,
        undershirt_texture: player.getClothes(11).texture,
        bodyarmor_style: player.getClothes(9).drawable,
        bodyarmor_texture: player.getClothes(9).texture,
        decal_style: player.getClothes(10).drawable,
        decal_texture: player.getClothes(10).texture,
        top_style: player.getClothes(8).drawable,
        top_texture: player.getClothes(8).texture
    };

    connection.query(`SELECT * FROM playerclothes WHERE name = ?`, [player.name], (error, result) => {
        if (error) {
          console.error(error);
        } else {
          if (result.length > 0) {
            connection.query(`UPDATE playerclothes SET ? WHERE name = ?`, [clothes, player.name], (error, result) => {
              if (error) {
                console.error(error);
              } else {
                console.log('[Empire-V] Spieler Kleidung aktualisiert!');
              }
            });
          } else {
            connection.query(`INSERT INTO playerclothes SET ?`, clothes, (error, result) => {
              if (error) {
                console.error(error);
              } else {
                console.log('[Empire-V] Spieler Kleidung gespeichert!');
              }
            });
          }
        }
      });
      
}


function createPlayerClohtesTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS playerclohtes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        hat_style INT,
        hat_texture INT,
        hair_style INT,
        hair_texture INT,
        glasses_style INT,
        glasses_texture INT,
        mask_style INT,
        mask_texture INT,
        torso_style INT,
        torso_texture INT,
        legs_style INT,
        legs_texture INT,
        shoes_style INT,
        shoes_texture INT,
        accessories_style INT,
        accessories_texture INT,
        undershirt_style INT,
        undershirt_texture INT,
        bodyarmor_style INT,
        bodyarmor_texture INT,
        decal_style INT,
        decal_texture INT,
        top_style INT,
        top_texture INT
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Player Clothes Table erstellt!');
        }
    }
    );
}


// Colshape Table

function createColshapeTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS colshapes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        color VARCHAR(255),
        sprite VARCHAR(255),
        x FLOAT,
        y FLOAT,
        z FLOAT
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Colshape Table erstellt!');
        }
    });
}



// Marker Table

function createMakerTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS markers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        color VARCHAR(255),
        sprite VARCHAR(255),
        x FLOAT,
        y FLOAT,
        z FLOAT
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Marker Table erstellt!');
        }
    });
}




// Blip Table

function createBlipTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS blips (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        color VARCHAR(255),
        sprite VARCHAR(255),
        x FLOAT,
        y FLOAT,
        z FLOAT
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Blip Table erstellt!');
        }
    });
}




function createPlayerLastLocationTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS playerlastlocation (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        x FLOAT,
        y FLOAT,
        z FLOAT,
        dimension INT
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Playerlastlocation Table erstellt!');
        }
    });
}


function createPlayerVehiclesTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS playervehicles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        model VARCHAR(255),
        numberplate VARCHAR(255),
        color VARCHAR(255),
        x FLOAT,
        y FLOAT,
        z FLOAT,
        dimension INT,
        rotation FLOAT,
        fuel INT,
        health INT,
        locked INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Playervehicles Table erstellt!');
        }
    });
}

function createPlayerInventoryTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS playerinventory (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        item VARCHAR(255),
        amount INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Playerinventory Table erstellt!');
        }
    });
}


// PLAYER SAVE CLOHTES AND LOAD PLAYER CLOTHES AND SET PLAYER CLOTHES
export function createPlayerClothesTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS playerclothes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        owner VARCHAR(255) NOT NULL,
        clothes JSON NOT NULL
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Playerclothes Table erstellt!');
        }
    });
}


// REGISTER / ANMELDE TABLE
function createRegisterTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS register (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        username VARCHAR(255),
        password VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Register Table erstellt!');
        }

    });
}

function CreateLoginTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS login (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        username VARCHAR(255),
        password VARCHAR(255)
        )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Login Table erstellt!');
        }
    });
}




function createPlayerWeaponsTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS playerweapons (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        weapon VARCHAR(255),
        ammo INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Playerweapons Table erstellt!');
        }
    });
}

function createJobTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS jobs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        jobrank VARCHAR(255),
        faction VARCHAR(255),
        factionrank VARCHAR(255),
        adminrank VARCHAR(255),
        salary INT,
        playtime INT,
        registerdate VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Jobs Table erstellt!');
        }
    });
}

function createJobVehiclesTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS jobvehicles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        model VARCHAR(255),
        numberplate VARCHAR(255),
        color VARCHAR(255),
        x FLOAT,
        y FLOAT,
        z FLOAT,
        dimension INT,
        rotation FLOAT,
        fuel INT,
        health INT,
        locked INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Jobvehicles Table erstellt!');
        }
    });
}

function createJobInventoryTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS jobinventory (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        item VARCHAR(255),
        amount INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Jobinventory Table erstellt!');
        }
    });
}

function createJobClothesTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS jobclothes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        drawable INT,
        texture INT,
        palette INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Jobclothes Table erstellt!');
        }
    });
}

function createJobWeaponsTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS jobweapons (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        weapon VARCHAR(255),
        ammo INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Jobweapons Table erstellt!');
        }
    });
}

function createFactionTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS factions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        factionrank VARCHAR(255),
        adminrank VARCHAR(255),
        salary INT,
        playtime INT,
        registerdate VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Factions Table erstellt!');
        }
    });
}

function createFactionVehiclesTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS factionvehicles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        model VARCHAR(255),
        numberplate VARCHAR(255),
        color VARCHAR(255),
        x FLOAT,
        y FLOAT,
        z FLOAT,
        dimension INT,
        rotation FLOAT,
        fuel INT,
        health INT,
        locked INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Factionvehicles Table erstellt!');
        }
    });
}

function createFactionInventoryTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS factioninventory (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        item VARCHAR(255),
        amount INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Factioninventory Table erstellt!');
        }
    });
}

function createFactionClothesTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS factionclothes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        drawable INT,
        texture INT,
        palette INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Factionclothes Table erstellt!');
        }
    });
}

function createFactionWeaponsTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS factionweapons (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        weapon VARCHAR(255),
        ammo INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Factionweapons Table erstellt!');
        }
    });
}

function createPoliceRanksTable() {
    //[rang], [permissions], [payday]
    connection.query(`CREATE TABLE IF NOT EXISTS policeranks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        rang VARCHAR(255),
        permissions VARCHAR(255),
        payday INT
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Policeranks Table erstellt!');
        }
    }
    );
}


function createpolicegaragenTable() {
    connection.query(`CREATE TABLE IF NOT EXISTS policegaragen (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        model VARCHAR(255),
        numberplate VARCHAR(255),
        color VARCHAR(255),
        x FLOAT,
        y FLOAT,
        z FLOAT,
        dimension INT,
        rotation FLOAT,
        fuel INT,
        health INT,
        locked INT,
        owner VARCHAR(255)
    )`, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            console.log('[Empire-V] Policegaragen Table erstellt!');
        }
    }
    );
}