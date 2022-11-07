export function findFriendByName(name, friends) {
    for (const item of friends) {
        if (item.name === name) {
            return item;
        }
    }
}
