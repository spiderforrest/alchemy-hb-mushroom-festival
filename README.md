# Mushroom Festival

Oh no, the prior developer ate a bad mushroom and the app is incomplete! Your goal is to write the code needed to get the rest of the app to work properly. Make sure to have at least one a commit for each of the requirements/rubric items.

Use [this template](https://github.com/alchemycodelab/half-baked-web-01-mushroom-festival) to get started.

### Live Example:

https://alchemycodelab.github.io/web-01-mushroom-festival/

## Learning Objectives

-   In response to a user event, mutate a single object in a state array and display the new state to the user (i.e., complete a todo).
-   Describe the difference between a pure and impure function.

# Acceptance Criteria

-   User should see some mushrooms and default friends on load
-   Click on the 'invite' button to create a new (unsatisfied) friend (with a random default name if none is provided) and add them to the page
-   The number of mushrooms should be visible on the table and should update when mushroom state changes.
-   Clicking the forage button should launch an alert telling the user if they found a mushroom. 50% of the time, the user should succeed.
-   On clicking a friend, a mushroom should vanish from the table, and the friend should become more satisfied. Satisfaction level should be visible to the user as different emojis
-   On clicking a friend, if that friend is completely satisfied, they can eat no more mushrooms. Also, if you try to feed a friend and there are no mushrooms, user should get an alert telling them to go forage for another mushroom.

## Rubric

The following is required for your assignment to be graded:

-   PR open from dev to main
-   PR Passes CI (lint + tests)
-   PR preview on netlify
-   At least 6 commits- one for each Rubric event below

| Events                                                                                                                                                                                                                               |     |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --: |
| On load, see some mushrooms and default friends on the page                                                                                                                                                                          |   1 |
| The number of mushrooms should be visible on the table and should update when mushroom state changes.                                                                                                                                |   1 |
| On clicking the 'forage' button, launch an alert telling the user if they found a mushroom. 50% of the time, the user should succeed.                                                                                                |   2 |
| On clicking a friend, a mushroom should vanish from the table, and the friend should become more satisfied. Satisfaction level should be visible to the user as different emojis                                                     |   2 |
| On clicking a friend, if that friend is completely satisfied, they can eat no more mushrooms. Also, if you try to feed a friend and there are no mushrooms, user should get an alert telling them to go forage for another mushroom. |   2 |
| Click on the 'invite' button to create a new (unsatisfied) friend (with a random default name if none is provided) and add them to the page                                                                                          |   2 |

## Stretch goal ideas

It's so easy to imagine new features for games.

-   What if there were not just mushrooms, but also delicious berries?
-   What if you could invite friends AND animals to the festival?
-   What if some friends or animals don't like berries, burt only like mushrooms and vice versa? And if you feed somebody a berry to somebody who doesn't like berries, they get less happy
-   What if friends had _favorite animals_ (i.e., a pet)? And when that animal gets happier, the friend gets happier, and vice versa?
-   What if there were three trees in the forest, and you clicked on one to figure out where a mushroom is (like hide and seek from day 1?)
-   What if some mushrooms were poison and render differently? And you could only feed them to animals who are resistant to that poison?
-   etc etc etc
