

var defaultCards = [
    { value: 1, color: "#6F98A8" },
    { value: 2, color: "#2B8EAD" },
    { value: 3, color: "#2F454E" },
    { value: 4, color: "#2B8EAD" },
    { value: 5, color: "#2F454E" },
    { value: 6, color: "#BFBFBF" },
    { value: 7, color: "#BFBFBF" },
    { value: 8, color: "#6F98A8" },
    { value: 9, color: "#2F454E" }
];


var cards = new Array();

function createCards() {
    var list = new Array();
    for (var i = 0; i < defaultCards.length; i++) {
        list.push(defaultCards[i]);
    }
    return list;
}

function renderCards() {
    document.getElementById('wrapper').innerHTML = '';
    for (var i = 0; i < cards.length; i++) {
        var card = document.createElement("div");
        card.className = "box";
        card.innerHTML = cards[i].value;
        card.style.backgroundColor = cards[i].color;
        document.getElementById("wrapper").appendChild(card);
    }

}

function shuffle() {
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * cards.length));
        var location2 = Math.floor((Math.random() * cards.length));
        var tmp = cards[location1];

        cards[location1] = cards[location2];
        cards[location2] = tmp;
    }
    renderCards();
}

function sortCards() {
    load();
}

function load() {
    cards = createCards();
    renderCards();
}

window.onload = load;