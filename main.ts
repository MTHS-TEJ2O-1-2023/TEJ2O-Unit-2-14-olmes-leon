/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Nov 7 2023
 * This program Loops
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// when "A" is pressed, the pixels move down in a diagnol
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter <= 5) {
      sprite.set(LedSpriteProperty.X, loopCounter)
      sprite.set(LedSpriteProperty.Y, loopCounter)
      loopCounter = loopCounter + 1
   basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// when "B" is pressed, the pixels move down in a diagnol
input.onButtonPressed(Button.B, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

  while (loopCounter <= 5) {
      sprite.set(LedSpriteProperty.X, loopCounter)
      sprite.set(LedSpriteProperty.Y, loopCounter)
      loopCounter = loopCounter + 1
      basic.pause(500)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
