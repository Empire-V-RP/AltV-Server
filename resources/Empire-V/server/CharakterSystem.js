import alt from 'alt-server';
import * as chat from 'alt:chat';
import * as Verbingung from './MysqlConnection.js';

alt.on('character:Edit', handleCharacterEdit);
alt.on('character:Sync', handleCharacterSync);
alt.onClient('character:Done', handleDone);
alt.onClient(`character:AwaitModel`, handleAwaitModel);

function handleCharacterEdit(player, oldData = null) {
    if (!player || !player.valid) {
        return;
    }

    alt.emitClient(player, 'character:Edit', oldData);
}

function handleAwaitModel(player, characterSex) {
    player.model = characterSex === 0 ? 'mp_f_freemode_01' : 'mp_m_freemode_01';
    alt.emitClient(player, `character:FinishSync`);
}

function handleCharacterSync(player, data) {
    if (!player || !player.valid) {
        return;
    }

    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch(err) {
            throw new Error(`[Character Editor] Failed to sync character. Character data format is not object or JSON string.`);
        }
    }

    if (data.sex === 0) {
        player.model = 'mp_f_freemode_01';
    } else {
        player.model = 'mp_m_freemode_01';
    }

    alt.emitClient(player, 'character:Sync', data);
}

function handleDone(player, newData) {
    alt.emit('character:Done', player, newData);
}

alt.onClient('character:savedatatodata', handleSaveDataToData);

function handleSaveDataToData(player, tempData) {
   // CHECK IF PLAYER EXISTS IN playerclohtes INSERT INTO whis player.name AND IF NOT UPDATE IT
    Verbingung.connection.query(`SELECT * FROM playerclohtes WHERE name = '${player.name}'`, function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            Verbingung.connection.query(`UPDATE playerclohtes SET charaktereditor = '${tempData}' WHERE name = '${player.name}'`, function (err, result) {
                if (err) throw err;
            });
        } else {
            Verbingung.connection.query(`INSERT INTO playerclohtes (name, charaktereditor) VALUES ('${player.name}', '${tempData}')`, function (err, result) {
                if (err) throw err;
            });
        }
    });
}

