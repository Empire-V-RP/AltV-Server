<php>
    <head>
        <title>Empire-V</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="header">
        <h2>Registrierungs Fenster</h2>
        </div>
        <form method="post" action="register.php">
        <div class="input-group">
            <label>Benutzername</label>
            <input type="text" name="username">
        </div>
        <div class="input-group">
            <label>Passwort</label>
            <input type="password" name="password_1">
        </div>
        <div class="input-group">
            <label>Passwort bestätigen</label>
            <input type="password" name="password_2">
        </div>
        <div class="input-group">
            <button type="submit" class="btn" name="reg_user">Registrieren</button>
        </div>
        <p>
        Du hast schon einen Account ? Hier kannst du dich Anmelden? <a href="./login.html">[LOGIN]</a>
        </p>
        </form>
</php>