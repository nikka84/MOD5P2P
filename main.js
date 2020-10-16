const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/t11.png",
    OPPONENT_PICTURE_DEAD = "assets/t2.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    BOSS_HEIGHT = 5,
    BOSS_PICTURE = "assets/boss1.png",
    BOSS_PICTURE_DEAD = "assets/boss2.png",
    BOSS_SPEED = 10,
    BOSS_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/game_over.png",
    GAME_WIN_PICTURE = "assets/you_win.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/b1.png",
    PLAYER_PICTURE_DEAD = "assets/b2.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    PLAYER_LIVES = 3; //Variable que conserva las vidas iniciales del jugador
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/s1.png",
    SHOT_PICTURE_OPPONENT = "assets/s2.png",
    SHOT_WIDTH = 1.5;

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}
var game;
document.addEventListener("DOMContentLoaded", () => {
        game = new Game();
        game.start();
    }
);