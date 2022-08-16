// Code your solutions in this file
function writeCards(cards, event) {
    let message = [];

    for(let i = 0; i < cards.length; i++)
    {
       message.push(`Thank you, ${cards[i]}, for the wonderful ${event} gift!`);
    }
    return message;
    debugger;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(positiveNum) {
    
    while(positiveNum>=0) {
        console.log(positiveNum--)
    }

}