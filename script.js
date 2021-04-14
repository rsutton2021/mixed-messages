// QUOTES

const markArray = ["Note to self re: Being the The Fonz. Mark, you are NOT The Fonz.",
                    "I do sort of like it when he’s rude to me. Hopefully that’s more a psychological defect than a weird sexual thing.", 
                    "We have something special! We can’t throw all that away just because I spy on you!", 
                    "She is attractive, but brown rice and pop tarts, chamomile tea and economy vodka? That's a car crash of a shopping basket.",
                    "I’m just a normal functioning member of the human race and there’s no way anyone can prove otherwise.",
                    "I have entered the abyss. I've bought a house in the abyss. I'm getting my post forwarded to the abyss."
                ];

const jezArray = ["Mark, do you have live so relentlessly in the real world?",
                    "You realise that tinned food is just for crackheads and wars?",
                    "Mark, if I can just get rid of the dog corpse, there's a chance I still might get laid here.",
                    "Not to be too la-di-dah, but is there a room with fewer snakes available?",
                    "I don't want to tempt fate but I think everything is going to be totally great forever."
                ];

const hansArray = ["Nice box of Crunchy Nut you've got there, quite expensive I seem to recall...",
                    "Tell you what, that crack is really moreish.",
                    "You're not just a man anymore - you are a man with a van. You get a van Jez, we could be men with ven.",
                    "You are paying for that snake to be dry-cleaned.",
                    "You've been thinking thoughts your whole life. Look where that got you.",
                    "...is the bottom half of me on fire?",
                    "We speak the language of love. And a little bit of German."
                ];

const dobbieArray = ["Well, it used to be all pink and tidy but then feminism happened and we all just started pissing on the floor",
                    "I'm a smoker, I need man-cheddar",
                    "I love that whole 'Screw you all, I'm a cat' vibe.",
                    "Mark, you're not trying to get away with pretending you're a normal human being are you?"]




let quoteButton = document.getElementById('quote-button');
let quoteText = document.getElementById('quote-text');

// Write your code here:

function showQuote() {
  quoteText.style.display = 'block';
}
quoteButton.addEventListener('click', showQuote);