function nuevoEnemigo () {
    Enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        let sprite: game.LedSprite = null
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    cuadradito.move(-1)
})
input.onButtonPressed(Button.B, function () {
    cuadradito.move(1)
})
let Enemigo: game.LedSprite = null
let cuadradito: game.LedSprite = null
cuadradito = game.createSprite(2, 4)
nuevoEnemigo()
