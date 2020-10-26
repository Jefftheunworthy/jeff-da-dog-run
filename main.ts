namespace SpriteKind {
    export const whitekey = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.whitekey, function (sprite, otherSprite) {
    if (otherSprite == c_note) {
        music.pewPew.play()
    } else if (otherSprite == d_note) {
        music.magicWand.play()
    } else if (otherSprite == note_e) {
        music.baDing.play()
    }
})
let note_e: Sprite = null
let d_note: Sprite = null
let c_note: Sprite = null
tiles.setTilemap(tilemap`level`)
scene.setBackgroundColor(10)
let Jeff_da_dog = corgio.create(SpriteKind.Player)
Jeff_da_dog.updateSprite()
Jeff_da_dog.follow()
Jeff_da_dog.verticalMovement()
Jeff_da_dog.horizontalMovement()
c_note = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . f f d d d d d d d d f f . . 
    . f d d d d d d d d d d d d f . 
    . f d d d d d d d d d d d d f . 
    f d d d d d d d d d d d d d d f 
    f d d d 1 f d d d d 1 f d d d f 
    f d d d d d d d d d d d d d d f 
    f d d d d d d d d d d d d d d f 
    f d d d d d f d d f d d d d d f 
    f d d d d d f d d f d d d d d f 
    f d d d d d d d d d d d d d d f 
    f d d f d d d d d d d d f d d f 
    f d d d f f f f f f f f d d d f 
    f d d d d d 1 d d 1 d d d d d f 
    f d d d d d d d d d d d d d d f 
    . f f f f f f f f f f f f f f . 
    `, SpriteKind.whitekey)
tiles.placeOnTile(c_note, tiles.getTileLocation(13, 4))
d_note = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . 7 . . . . . . . . . . 
    . . . . . . 7 . . 7 7 . . . . . 
    . . 1 . 1 . 7 . . 7 . . . . . . 
    . . . f . . 7 . . . 7 . . . . . 
    . . . . . . . . . . 7 . 1 . 1 . 
    . . . . . . . . . . 7 . . f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . . e e . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . e e e e e e e e . . . . 
    `, SpriteKind.whitekey)
tiles.placeOnTile(d_note, tiles.getTileLocation(15, 4))
note_e = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . f f f . . . . . f f . f f . . 
    . . f . . . f . . f . f . f . . 
    . . f . . . f . . f . . . f . . 
    . . f . . . f . . f . . . f . . 
    . f f . . . f . . f . . . f . . 
    `, SpriteKind.whitekey)
tiles.placeOnTile(note_e, tiles.getTileLocation(17, 4))
