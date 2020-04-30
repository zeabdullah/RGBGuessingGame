# The Great RGB Guessing Game

Brush up your color mixing knowledge with this little RGB guessing game.



## Getting Started

Simply download the zip file and open `colorgame.html`.

## How it works

The game has two difficulties, `EASY` and `HARD`
* Clicking `EASY` will show *3* different squares on the screen. 
* Clicking `HARD` will show *6* instead.

Each time you click on a difficulty or the `NEW COLORS` button, the squares are assigned random colors each.
One of the squares on the screen will have its color shown at the header of the page in the form `RGB(R, G, B)`.
Your job is to **guess to which square the RGB color in the header belongs to.**

## Don't Know How RGB Works? 

`R` represents _Red_, `G` represents _Green_, and `B` represent _Blue_.
_(numbers range from **0-255**; **0** means no color, **255** means highest intensity of color)_.

Try and mix colors yourself at https://rgbcolorcode.com/

### Simple Examples
* `RGB(0, 0, 0)` will give you black => ⚫

* `RGB(255, 255, 255)` will give you white => ⚪

* `RGB(0, 0, 255)` will give a fully saturated blue.

* Assume the header shows you following string: `RGB(20, 43, 184)`.
We can tell that the `R` and `G` intensities compared to `B` are pretty low, which makes it safe to assume that the blue color will be predominant and the square we're looking for should have a similar color to this => 🔵
