enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Gap = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
scene.setBackgroundColor(11)
info.setScore(0)
effects.blizzard.startScreenEffect()
let mySprite = sprites.create(img`
    ..................
    ...f..............
    ...f...ffffff.....
    ...f..ffffffff....
    ...f..1111111f....
    ...f..ff11ffff....
    ...f..ffffffff....
    ...f..ffffffff11..
    ...f.11111111111..
    ...f..111f1ffff1..
    ..fff.11ff1f11f1..
    ...1ff1fff1f11f11.
    ...1ffffff1ffff11.
    ...f..fffff111111.
    ......ffffffff111.
    ......fffffff1111.
    .......ff..ff.....
    .......ff..ff.....
    .......11..11.....
    ..................
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdate(function () {
    if (mySprite.vy > 0) {
        animation.setAction(mySprite, ActionKind.Idle)
    }
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
