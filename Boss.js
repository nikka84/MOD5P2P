/**
 * Monstruo al que tenemos que destruir
 */
class Boss extends Opponent {
  /**
   * @param game {Game} La instancia del juego al que pertenece el oponente
   */
  constructor(game) {
    const height = (OPPONENT_HEIGHT * game.width) / 100,
      width = (OPPONENT_WIDTH * game.width) / 100,
      x = getRandomNumber(game.width - width / 2),
      y = 0;
    super(game, width, height, x, y);
    this.speed = BOSS_SPEED;
    this.myImage = BOSS_PICTURE;
    this.myImageDead = BOSS_PICTURE_DEAD;
    this.direction = "R"; // Dirección hacia la que se mueve el oponente
    setTimeout(() => super.shoot(), 1000 + getRandomNumber(2500));
  }

  /**
   * Mata al oponente
   */
  collide() {
    if (!this.dead) {
      setTimeout(() => {
        this.game.endGame();
        //Modificar método collide para que sume un punto a score cada vez que un triángulo muere
        this.game.score += 10;
        document.getElementById("scoreli").innerHTML =
          "Score: " + this.game.score;
      }, 2000);
      this.image.src = this.myImageDead;
      this.dead = true;
    }
  }
}
