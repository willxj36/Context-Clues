var friends = ['Amber', 'Rudy', 'Ethan', 'Adam', 'Kendra'];
var weapons = ['knife', 'spoon', 'pistol', 'shotgun', 'phone', '9-iron', 'Nerf gun', 'severed arm', 'syringe', 'poison', 'wrench', 'chainsaw', 'mannequin', 'cactus', 'vodka bottle', 'shock collar', '20lb weight', 'rifle', 'attack dog', 'flammenwerfer'];
var locations = ['office', 'kitchen', 'dining room', 'ballroom', 'foyer', 'patio', 'basement', 'bathroom', 'bedroom', 'trophy room'];

for(i = 1 ; i < 101; i++) {
    $('body').append(`<h3 id=${i}>Accusation ${i}</h3>`);
    $(`#${i}`).click(accusation(i));
}

function accusation(i) {
    return function(e) {
        var f = friends[i - 1 % friends.length];
        var w = weapons[i - 1 % weapons.length];
        var l = locations[i - 1 % locations.length];
        alert(`I accuse ${f} with the ${w} in the ${l}`);
    }
}