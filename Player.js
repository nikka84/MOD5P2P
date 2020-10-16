/**
 * Personaje principal del juego. Hereda de la clase Character.
 * @extends Character
 */
class Player extends Character {
    /**
     * Inicializa un jugador
     * @param game {Game} La instancia del juego al que pertenece el jugador
     */
    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImage = PLAYER_PICTURE,
            myImageDead = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);

        //Atributo lives que se inicia en 3
            this.lives = PLAYER_LIVES;
        
    }

    /**
     * Actualiza los atributos de posición del jugador y los disparos en función de las teclas pulsadas
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Mata al jugador
     */
    collide() {
        //Modificar método collide para que reste una vida cuando sea alcanzado por un disparo
        if (!this.dead) {
            //Restamos una vida:
            this.lives--;
            document.getElementById("livesli").innerHTML = "Lives: "+this.lives;
            //Comprobamos si es la última:
            if (this.lives === 0) {
                //Finaliza el juego:
                setTimeout(() => {
                    this.game.endGame();
                }, 2000);
                super.collide();
            } else {//Si no...
                //Debe morirse durante 2 segundos y renacer al cabo de ese tiempo
                setTimeout(()=> { //A los 2 segundos...
                    //Recupera imagen inicial y ya no está muerto
                    this.image.src=this.myImage;
                    this.dead=false;
                }, 2000);
                    super.collide(); //Aquí lo matamos               
            }
        }
    }
}