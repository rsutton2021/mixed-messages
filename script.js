// QUOTES

const markArray = ['"Note to self re: Being the The Fonz. Mark, you are NOT The Fonz."',
                    '"I do sort of like it when he’s rude to me. Hopefully that’s more a psychological defect than a weird sexual thing."', 
                    '"We have something special! We can’t throw all that away just because I spy on you!"', 
                    '"She is attractive, but brown rice and pop tarts, chamomile tea and economy vodka? That\'s a car crash of a shopping basket."',
                    '"I’m just a normal functioning member of the human race and there’s no way anyone can prove otherwise."',
                    '"I have entered the abyss. I\'ve bought a house in the abyss. I\'m getting my post forwarded to the abyss."',
                    '"How much pain can I experience at home with a spaghetti carbonara and Das Boot?"'
                ];

const jezArray = ['"Mark, do you have live so relentlessly in the real world?"',
                    '"You realise that tinned food is just for crackheads and wars?"',
                    '"Mark, if I can just get rid of the dog corpse, there\'s a chance I still might get laid here."',
                    '"Not to be too la-di-dah, but is there a room with fewer snakes available?"',
                    '"I don\'t want to tempt fate but I think everything is going to be totally great forever."'
                ];

const hansArray = ['"Nice box of Crunchy Nut you\'ve got there, quite expensive I seem to recall..."',
                    '"Tell you what, that crack is really moreish."',
                    '"You\'re not just a man anymore - you are a man with a van. You get a van Jez, we could be men with ven."',
                    '"You are paying for that snake to be dry-cleaned."',
                    '"You\'ve been thinking thoughts your whole life. Look where that got you."',
                    '"...is the bottom half of me on fire?"',
                    '"We speak the language of love. And a little bit of German."'
                ];

const dobbieArray = ['"Well, it used to be all pink and tidy but then feminism happened and we all just started pissing on the floor"',
                    '"I\'m a smoker, I need man-cheddar"',
                    '"I love that whole \'Screw you all, I\'m a cat\' vibe."',
                    '"Mark, you\'re not trying to get away with pretending you\'re a normal human being are you?"'];




let quoteButton = document.getElementById('quote-button');
let quoteText = document.getElementById('quote-text');
let markPic = document.getElementById('mark-pic');
let jezPic = document.getElementById('jez-pic');
let hansPic = document.getElementById('hans-pic');
let dobbiePic = document.getElementById('dobbie-pic');
let markJezPic = document.getElementById('mark-jez-pic');


// Mark quote function
function quoteSelector() {
    let randomQuote = Math.floor(Math.random() * markArray.length);
    return markArray[randomQuote];
    
};

/* function showQuote() {
    quoteText.innerHTML = quoteSelector(); 
    markPic.style.display = 'block';
    markJezPic.style.display = 'none';
}; */

function showQuote() {
    quoteText.innerHTML = arraySelector; 
    if (display === 'mark') {
        markPic.style.display = 'block';
        jezPic.style.display = 'none';
        hansPic.style.display = 'none';
        dobbiePic.style.display = 'none';
        markJezPic.style.display = 'none';
    } else if (display === 'jez') {
        jezPic.style.display = 'block';
        markPic.style.display = 'none';
        hansPic.style.display = 'none';
        dobbiePic.style.display = 'none';
        markJezPic.style.display = 'none';
    } else if (display === 'hans') {
        hansPic.style.display = 'block';
        markPic.style.display = 'none';
        jezPic.style.display = 'none';
        dobbiePic.style.display = 'none';
        markJezPic.style.display = 'none';
    } else if (display === 'dobbie') {
        dobbiePic.style.display = 'block';
        markPic.style.display = 'none';
        jezPic.style.display = 'none';
        hansPic.style.display = 'none';
        markJezPic.style.display = 'none';
    }
};

quoteButton.addEventListener('click', showQuote);


// Array selector
let arraySelector = Math.floor(Math.random() *4);
let display;
let quoteCache;

switch (arraySelector) {
    case 0 :
        quoteCache = quoteSelectorMark();
        display = 'mark';
        break; 
    
    case 1 :
        quoteCache = quoteSelectorJez();
        display = 'jez';        
        break;
        
    case 2 :
        quoteCache = quoteSelectorHans();
        display = 'hans';
        break;
        
    case 3 :
        quoteCache = quoteSelectorDobbie();
        display = 'dobbie';
        break;
        
};


function quoteSelectorMark() {
    let randomQuoteMark = Math.floor(Math.random() * markArray.length);
    return markArray[randomQuoteMark];     
};

function quoteSelectorJez() {
    let randomQuoteJez = Math.floor(Math.random() * jezArray.length);
    return jezArray[randomQuoteJez];
};

function quoteSelectorHans() {
    let randomQuoteHans = Math.floor(Math.random() * hansArray.length);
    return hansArray[randomQuoteHans];
};

function quoteSelectorDobbie() {
    let randomQuoteDobbie = Math.floor(Math.random() * dobbieArray.length);
    return dobbieArray[randomQuoteDobbie];
};


