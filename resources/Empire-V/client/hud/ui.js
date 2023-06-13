$(() => {
    //HUD 
    alt.on('updateHUD', (data) => {
        let car = data.car;
        let cash = data.cash;
        let id = data.id;
        let job = data.job;
        let jobgrade = data.jobgrade;
        let hunger = data.hunger;
        let thirst = data.thirst;
        let speed = data.speed;
        let fuel = data.fuel;
        let kilometers = data.kilometers;
        if (car) {
            car = true;
            $('.car').show();
            $('.speed').text(speed + ' km/h');
            $('.benzin').text(fuel + ' %');
            $('.kilometers').text(kilometers + ' km');
        } else {
            car = false;
            $('.car').hide();
            $('.speed').text('0 km/h');
            $('.benzin').text('100%');
        }
        $('#id').text('ID: ' + id);
        $('#job').text(job + '/' + jobgrade);
        $('#cash').text(cash + '$');
        $('.xbar-value-hunger').css("width", hunger + '%');
        $('#hunger2').css("width", hunger + '%');
        $('#hunger2').css("background-color", "rgba(255, 0, 0, " + (100 - hunger) + "%)");

        $('.xbar-value-thirst').css("width", thirst + '%');
        $('#thirst2').css("width", thirst + '%');
        $('#thirst2').css("background-color", "rgba(255, 0, 0, " + (100 - thirst) + "%)");
    });
});