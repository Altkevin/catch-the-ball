def on_button_pressed_a():
    if Moveeeeeeee.get(LedSpriteProperty.X) != 0:
        Moveeeeeeee.change(LedSpriteProperty.X, -1)
        Move2.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if Move2.get(LedSpriteProperty.X) != 4:
        Moveeeeeeee.change(LedSpriteProperty.X, 1)
        Move2.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

Bounce = 0
Move2: game.LedSprite = None
Moveeeeeeee: game.LedSprite = None
Move = 1000
Game_start = 0
Moveeeeeeee = game.create_sprite(2, 3)
Ping_pong = game.create_sprite(4, 0)
Move2 = game.create_sprite(3, 3)

def on_forever():
    global Move, Bounce
    if Moveeeeeeee.get(LedSpriteProperty.X) == Ping_pong.get(LedSpriteProperty.X) and Moveeeeeeee.get(LedSpriteProperty.Y) == Ping_pong.get(LedSpriteProperty.Y) or Move2.get(LedSpriteProperty.X) == Ping_pong.get(LedSpriteProperty.X) and Move2.get(LedSpriteProperty.Y) == Ping_pong.get(LedSpriteProperty.Y):
        game.add_score(1)
        Move += -30
        Bounce = 1
basic.forever(on_forever)

def on_forever2():
    basic.pause(Move)
    Ping_pong.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever2)

def on_forever3():
    if Ping_pong.get(LedSpriteProperty.Y) == 4:
        game.game_over()
basic.forever(on_forever3)

def on_forever4():
    global Bounce
    if Bounce == 1:
        Ping_pong.set(LedSpriteProperty.Y, 0)
        Ping_pong.set(LedSpriteProperty.X, randint(0, 4))
        Bounce = 0
basic.forever(on_forever4)
