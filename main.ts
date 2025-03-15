input.onButtonPressed(Button.A, function () {
    if (Moveeeeeeee.get(LedSpriteProperty.X) != 0) {
        Moveeeeeeee.change(LedSpriteProperty.X, -1)
        Move2.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.AB, function () {
    Difficulty = 2
    Move = 800
})
input.onButtonPressed(Button.B, function () {
    if (Move2.get(LedSpriteProperty.X) != 4) {
        Moveeeeeeee.change(LedSpriteProperty.X, 1)
        Move2.change(LedSpriteProperty.X, 1)
    }
})
let Bounce = 0
let Bad: game.LedSprite = null
let Bad_done = 0
let Difficulty = 0
let Move2: game.LedSprite = null
let Moveeeeeeee: game.LedSprite = null
let Move = 0
let Game_start = 0
Move = 1000
Moveeeeeeee = game.createSprite(2, 3)
let Ping_pong = game.createSprite(4, 0)
Move2 = game.createSprite(3, 3)
basic.forever(function () {
    if (Difficulty == 2) {
        if (Bad_done == 0) {
            Bad = game.createSprite(randint(0, 4), 0)
            Bad.set(LedSpriteProperty.Blink, 300)
            Bad_done = 1
        }
        if (Bad.get(LedSpriteProperty.X) == Ping_pong.get(LedSpriteProperty.X) || (Bad.get(LedSpriteProperty.X) == Ping_pong.get(LedSpriteProperty.X) - 1 || Bad.get(LedSpriteProperty.X) == Ping_pong.get(LedSpriteProperty.X) + 1)) {
            if (Bad.get(LedSpriteProperty.Y) < 3) {
                Bad.set(LedSpriteProperty.X, randint(0, 4))
            }
        }
        if (Bad.get(LedSpriteProperty.Y) == 4) {
            Bad.set(LedSpriteProperty.Y, 0)
            Bad.set(LedSpriteProperty.X, randint(0, 4))
        }
        if (Moveeeeeeee.get(LedSpriteProperty.X) == Bad.get(LedSpriteProperty.X) && Moveeeeeeee.get(LedSpriteProperty.Y) == Bad.get(LedSpriteProperty.Y) || Move2.get(LedSpriteProperty.X) == Bad.get(LedSpriteProperty.X) && Move2.get(LedSpriteProperty.Y) == Bad.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (Bounce == 1) {
        Ping_pong.set(LedSpriteProperty.Y, 0)
        Ping_pong.set(LedSpriteProperty.X, randint(0, 4))
        Bounce = 0
    }
})
basic.forever(function () {
    if (Moveeeeeeee.get(LedSpriteProperty.X) == Ping_pong.get(LedSpriteProperty.X) && Moveeeeeeee.get(LedSpriteProperty.Y) == Ping_pong.get(LedSpriteProperty.Y) || Move2.get(LedSpriteProperty.X) == Ping_pong.get(LedSpriteProperty.X) && Move2.get(LedSpriteProperty.Y) == Ping_pong.get(LedSpriteProperty.Y)) {
        Move += -30
        Bounce = 1
        game.addScore(1)
    }
})
basic.forever(function () {
    basic.pause(Move)
    Ping_pong.change(LedSpriteProperty.Y, 1)
    if (Difficulty == 2) {
        Bad.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (Ping_pong.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
