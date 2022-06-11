function nuevoEnemigo () {
    Enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        Enemigo.change(LedSpriteProperty.Y, 1)
    }
    Enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        Enemigo.change(LedSpriteProperty.Y, 1)
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
basic.forever(function () {
    if (Enemigo.isTouching(cuadradito)) {
        basic.showString("PERDISTE")
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
