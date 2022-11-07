// import functions and grab DOM elements
import { renderMushroom, renderFriend } from './lib/render-utils.js';
import { getRandName } from './lib/get-name.js';
import { findFriendByName } from './lib/data-utils.js';

const friendsEl = document.querySelector('.friends');
const friendInputEl = document.getElementById('friend-input');
const mushroomsEl = document.querySelector('.mushrooms');
const addMushroomButton = document.getElementById('add-mushroom-button');
const addFriendButton = document.getElementById('add-friend-button');
const friendsDiv = document.getElementById('friends-div');
// initialize state

let mushroomCount = 3;

const friendData = [
    {
        name: 'Erich',
        satisfaction: 2,
    },
    {
        name: 'Sarah',
        satisfaction: 3,
    },
    {
        name: 'Missael',
        satisfaction: 1,
    },
    {
        name: 'Soraya',
        satisfaction: 2,
    },
];

addMushroomButton.addEventListener('click', () => {
    if (Math.random() > 0.5) {
        alert('found a mushroom!');

        mushroomCount++;
        displayMushrooms();
    } else {
        alert('no luck!');
    }
});

addFriendButton.addEventListener('click', () => {
    // get the name from the input
    const newName = friendInputEl.value;
    // create a new friend object
    const newFriend = {
        name: newName || getRandName(),
        satisfaction: 1,
    };
    // push it into the friends state array, passed in as an argument
    friendData.push(newFriend);
    // reset the input
    friendInputEl.value = '';
    // display all the friends (use a function here)
    displayFriends();
});

function displayFriends() {
    // clear out the friends in DOM
    friendsDiv.textContent = '';
    // for each friend in state . . .
    for (let friend of friendData) {
        // use renderFriend to make a friendEl
        const friendEl = renderFriend(friend);
        // this is a clickable list, so . . .
        //     add an event listener to each friend
        friendEl.addEventListener('click', () => {
            // get the friend
            const targetFriend = findFriendByName(friend.name, friendData);
            // tell the user what's wrong
            if (mushroomCount === 0) {
                alert('Out of mushrooms!');
            } else if (targetFriend.satisfaction >= 3) {
                alert('Friend is full!');
            }
            // and if the friend's satisfaction level is below 3 and you have mushrooms left
            if (mushroomCount > 0 && targetFriend.satisfaction < 3) {
                // increment the friends satisfaction and decrement your mushrooms
                targetFriend.satisfaction++;
                mushroomCount--;
                // then display your friends and mushrooms with the updated state
                displayFriends();
                displayMushrooms();
            }
        });
        // append the friendEl to the friends list in DOM
        friendsEl.append(friendEl);
    }
}

function displayMushrooms() {
    // clear out the mushroom div

    for (let i = 0; i < mushroomCount; i++) {
        // for each mushroom in your mushroom state, render and append a mushroom
    }
}

displayFriends();
displayMushrooms();
