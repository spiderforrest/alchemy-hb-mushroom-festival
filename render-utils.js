export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    div.classList.add('friend');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    nameEl.textContent = friend.name;

    if (friend.satisfaction === 1) {
        emojiEl.textContent = '😒';
    }

    if (friend.satisfaction === 2) {
        emojiEl.textContent = '😐';
    }

    if (friend.satisfaction === 3) {
        emojiEl.textContent = '😀';
    }

    div.append(nameEl, emojiEl);
    return div;
}
