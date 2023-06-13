<php>
    <head>
        <title>Empire-V</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="header">
        <h2>Anmele Fenster</h2>
        </div>
        <form method="post" action="login.php">
        <div class="input-group">
            <label>Benutzername</label>
            <input type="text" name="username">
        </div>
        <div class="input-group">
            <label>Passwort</label>
            <input type="password" name="password">
        </div>
        <div class="input-group">
            <button type="submit" class="btn" name="login_user">Anmelden</button>
        </div>
        <p>
        Du hast kein Account ? Hier kannst du einen Erstellen? <a href="./register.html">[REGISTER]</a>
        </p>
        </form>
    </body>
</php>