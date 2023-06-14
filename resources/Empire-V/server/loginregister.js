import alt from 'alt-server';
import * as chat from 'alt:chat';
import * as job from './PoliceJobFunctions.js';
import * as verbindung from './MysqlConnection.js   ';

alt.onClient('Login:Register', (player, username, password) => {
  if (username && password) {
    console.log(`Registering user: ${username}`);

    const sanitizedUsername = sanitizeString(username);
    const sanitizedPassword = sanitizeString(password);

    const registerQuery = `INSERT INTO login (username, password) VALUES (?, ?)`;
    const registerParams = [sanitizedUsername, sanitizedPassword];

    verbindung.connection.query(registerQuery, registerParams, (err, results) => {
      if (err) {
        console.error('Registration error:', err);
      } else {
        console.log('Registration successful');
        alt.emitClient(player, 'Login:RegisterSuccess');
        alt.emitClient(player, 'Login:ShowLogin');
      } 
    });
  } else {
    console.log('Invalid registration data');
  }
});

alt.onClient('Login:Login', (player, username, password) => {
  if (username && password) {
    console.log(`Logging in user: ${username}`);
    const sanitizedUsername = sanitizeString(username);
    const sanitizedPassword = sanitizeString(password);

    const loginQuery = `SELECT * FROM login WHERE username = ? AND password = ?`;
    const loginParams = [sanitizedUsername, sanitizedPassword];
    verbindung.connection.query(loginQuery, loginParams, (err, results) => {
      if (err) {
        console.error('Login error:', err);
      } else if (results.length === 0) {
        console.log('Login failed: Invalid credentials');
      } else {
        console.log('Login successful');
        alt.emitClient(player, 'Login:LoginSuccess');
      }
    });
  } else {
    console.log('Invalid login data');
  }
});

function sanitizeString(input) {
  const sanitizedInput = verbindung.connection.escape(input);
  return sanitizedInput;
}

