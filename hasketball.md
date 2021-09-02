# objectketball

## Learning Goals

* Practice building nested objects.
* Practice iterating over nested objects.

## Instructions

This lab is about as representative of real-life tasks as a programmer as you
can get: data on paper or in tables needs to be given to a programming language
to deliver _insights_.

You're going to perform an analysis on an NBA game. You've been provided some
basic game data in a series of tables. You're going to ask JavaScript to help you
answer some questions about the game.

This challenge comes in two major pieces:

1. Build a nested data structure from text and data stored in tables
2. Process the nested data structure to produce _insights_ about how various
   players performed

While you've worked with nested data structures using simple looping and
Enumerables, you've never before had to _create_ such a complex nested data
structure **and** _process_ it as well. Work where you processed `Array` of
`Arrays` or `Array`s of `Object`s would be wise to freshen up on as preparation.
Take it in pieces, remember your training, and you'll get there!

We also strongly recommend that you read the ***entire*** README before you
start coding. We're going to show some tips and tricks that make the coding a
lot easier...but only if you read through to the end.

Code your solution in `hashketball.js` following the steps below. Because this
lab is so big, be sure to test in your console as you go!

## Step 1: Building the Object

The first function you will define is called `game_object`. This function contains and
returns an object nested in the following manner:

* The top level of the object has two keys: `:home`, for the home team, and
  `:away`, for the away team.
* The values of the `:home` and `:away` keys are objects. These objects have the
  following keys:
  * `:team_name`
  * `:colors`
  * `:players`
* The `:team_name` key points to a string of the team name.
* The `:colors` key points to an array of strings that are that team's colors.
* The `:players` key points to an `Array` of `Object`s. Each `Object` in the `Array`
  should contain the players' stats. Each stat should be a key that points to
  a value for that stat. The keys should be:
  * `:player_name`
  * `:number`
  * `:shoe`
  * `:points`
  * `:rebounds`
  * `:assists`
  * `:steals`
  * `:blocks`
  * `:slam_dunks`
* The data for each player is provided in a table below.

Home Team:

* team name: Brooklyn Nets
* colors: Black, White
* players:

|          Stat          | Info | Info |  Info | Info | Info   |
|:------------------:|:-------------:|:------------:|:------------:|:-------------:|:-------------:|
| **Player Name**    |  Alan Anderson| Reggie Evans | Brook Lopez  | Mason Plumlee | Jason Terry   |
| **Number**         | 0             | 30           | 11           | 1             | 31            |
| **Shoe**           | 16            | 14           | 17           | 19            | 15            |
| **Points**         | 22            | 12           | 17           | 26            | 19            |
| **Rebounds**       | 12            | 12           | 19           | 11            | 2             |
| **Assists**        | 12            | 12           | 10           | 6             | 2             |
| **Steals**         | 3             | 12           | 3            | 3             | 4             |
| **Blocks**         | 1             | 12           | 1            | 8             | 11            |
| **Slam Dunks**     | 1             | 7            | 15           | 5             | 1             |

Away Team:

* team name: Charlotte Hornets
* colors: Turquoise, Purple
* players:

|        Stat       |     Info          |         Info     |              Info |         Info     |         Info      |
|:------------------:|:-----------------:|:-----------------:|:-----------------:|:---------------:|:-----------------:|
| **Player Name**  | Jeff Adrien     | Bismack Biyombo    | DeSagna Diop      | Ben Gordon      | Kemba Walker   |
| **Number**         | 4                 | 0                 | 2                 | 8               | 33                |
| **Shoe**           | 18                | 16                | 14                | 15              | 15                |
| **Points**         | 10                | 12                | 24                | 33              | 6                 |
| **Rebounds**       | 1                 | 4                 | 12                | 3               | 12                |
| **Assists**        | 1                 | 7                 | 12                | 2               | 12                |
| **Steals**         | 2                 | 22                 | 4                 | 1               | 7                |
| **Blocks**         | 7                 | 15                | 5                 | 1               | 5                 |
| **Slam Dunks**     | 2                 | 10                | 5                 | 0               | 12                |

Write a function called `game_object` that returns your nested data structure. We
might suggest starting with having `game_object` return only a `{}`. Then run the
`game_object` tests (see next section) and slowly build up your nested data
structure to satisfy those tests. We'll describe the strategy here in the next
sections.

### Process Tip: Writing Nested Data Structures is Hard

Writing nested data structures is challenging because we humans can lose track
of whether or not we closed a `{...}` set or added a `,` in the right place.
Running a small chunk of tests (more on that in the next section ) to make sure
our nested data structure is _syntactically valid_ (i.e. honors JavaScript's grammar
rules) is a good idea. This allows a process like:

* Start with something _syntactically valid_, but _incorrect_ e.g. `{}`
* Make an edit
* run the tests
* Is the nested data structure valid? Great!
* Make another edit
* Run the tests...error!
* Add missing comma
* Add the comma
* Run tests...
* Working again!

Syntactically valid, but _incorrect_ nested data structures are easier to
correct than to fix _syntactically invalid_ ***and*** _incorrect_ nested data
structures.  Constantly asking JavaScript "Hey can you read this?" means that you're
never have a mountain of things that are broken...maybe small,
more-easily-fixed little pile.

Once you have a _syntactically valid,_ but _incorrect_ nested data structure,
you can slowly add to the nested data structure and move it to being _correct_.
A key strategy to iterating towards _correctness_ is running a small subset of
tests to have _JavaScript_ validate our nested data structure instead of our
error-prone human eyes.

> **Wisdom**: Move from working to working to working. Never let "broken in
> this way, and that way, and that way" mount up!

### Leaving Step 1

Let's zoom back out again and run _all_ the tests. Many tests fail, but the
good news is that the three tests in the "`game_object`" example are _passing_.
That means we have a _correct_ and _syntactically valid_ nested data structure
to work with. That means we can start building the functions that the tests
demand. We're ready for Step 2!

## Step 2: Building functions

At this point, you're where you were with earlier labs. You were given a nested
data structure and then needed to process it to product _insights_. 

1. Ensure you can read data out of the nested data structure with simple, basic
   `[]` calls
2. Wrap basic code that "reaches into" the nested data structure in functions
   that have friendly human-names. Wrap basic (or "First Order") functions into
   functions that do more ("Nth Order") and are human-brain-friendly (`list_snacks`)
3. Be flexible; work from what you have to where you want to go; or, work
   backward; or, make a midpoint between what you have and what you need to
   have

While you might have seen this pattern with simple nested data structure work,
this pattern **is still valid**. The only thing that's changed is that in some
places you can see where an Enumerable could make your code clearer and
briefer.  ***This process works***. Take this lab as a chance to hone your
skills attacking BIG problems with process _on your side_.

### Additional functions

* Build a function, `shoe_size`, that takes in an argument of a player's name and
  returns the shoe size for that player.
  * Think about how you will find the shoe size of the correct player. How can
    you check and see if a player's name matches the name that has been passed
    into the function as an argument?

* Build a function, `team_colors`, that takes in an argument of the team name and
  returns an `Array` of that team's colors.

* Build a function, `team_names`, that operates on the game `object` to return an
  `Array` of the team names.

* Build a function, `player_numbers`, that takes in an argument of a team name and
  returns an `Array` of the jersey numbers for that team.

* Build a function, `player_stats`, that takes in an argument of a player's name
  and returns a object of that player's stats.
  * Check out the following example of the expected return value of the
    `player_stats` function:

  ```bash
  player_stats("Alan Anderson")
  => { :number => 0,
        :shoe => 16,
        :points => 22,
        :rebounds => 12,
        :assists => 12,
        :steals => 3,
        :blocks => 1,
        :slam_dunks => 1
      }
  ```

* Build a function, `big_shoe_rebounds`, that will return the number of rebounds
  associated with the player that has the largest shoe size. Break this one down
  into steps:
  * First, find the player with the largest shoe size
  * Then, return that player's number of rebounds
  * Remember to think about return values here.

**Bonus Questions:**

Define functions to return the answer to the following questions:

1. Which player has the most points? Call the function `most_points_scored`.

2. Which team has the most points? Call the function `winning_team`.

3. Which player has the longest name? Call the function `player_with_longest_name`.

**Super Bonus:**

1. Write a function that returns true if the player with the longest name had the
   most steals. Call the function `long_name_steals_a_ton?`.

## "I am so stuck"

The two best debugging tools you have for this lab are `console.log` and your JavaScript playground provided by `node`.   

For instance, if you are trying to return a value that is nested in several `object`s and `array`s, try using `console.log` at each layer to confirm that each step works the way you think ig does. 

Don't forget you can also access the JavaScript playground from your Command Prompt window using the command `node`. This will allow you to quickly test JavaScript concepts. You can assin variables, create functions, or 

## Conclusion

This is a new frontier for you! You are now using powerful tools of JavaScript
to transform a nested data structure, that you made from non-computer-ready
data, to produce insights. You've made huge strides in becoming a really solid
developer in the procedural programming paradigm. This is a huge moment.
Celebrate it!

Believe it or not, the code that put rockets in space and mankind on the Moon
were only slight variations on this style of programming. You've learned
something really powerful!