WebFontConfig = {
    google: {
        families: ['Black Ops One']
    }
};


/**
    Loads up menu pre game start.
*/
var menuState = {
    init: function(message) {
        if (message) {
            var messageLabel = game.add.text(80, game.world.height - 160, message);
        }
    },
    preload: function() {
        //  Load the Google WebFont Loader script
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

    },
    create: function() {
        var nameLabel = game.add.text(80, 80, 'World Dom1nation', { font: '50px Black Ops One', fill: '#800000' });

        var instructionsLabel = game.add.text(80, 200, 'Last as long as possible against the Enemies \n' +
            'with your squad. To control your units, \n' +
            'drag with the left mouse to select and right click to move \n' +
            'to or attack enemies. Move around the map \nwith \'WASD\' keys. You can pause the game\n' +
            'with the \'P\' key', { font: '20px Black Ops One', fill: '#913535' });

        var startLabel = game.add.text(80, game.world.height - 80,
            'press "SPACE" key to start...', { font: '25px Black Ops One', fill: '#00cc00' });

        var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

        spaceKey.onDown.addOnce(this.start, this);
    },
    start: function() {
        game.state.start('play');
    }

};
