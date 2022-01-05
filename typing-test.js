const allWords = [
    "a",
    "ability",
    "able",
    "about",
    "above",
    "accept",
    "according",
    "account",
    "across",
    "act",
    "action",
    "activity",
    "actually",
    "add",
    "address",
    "administration",
    "admit",
    "adult",
    "affect",
    "after",
    "again",
    "against",
    "age",
    "agency",
    "agent",
    "ago",
    "agree",
    "agreement",
    "ahead",
    "air",
    "all",
    "allow",
    "almost",
    "alone",
    "along",
    "already",
    "also",
    "although",
    "always",
    "American",
    "among",
    "amount",
    "analysis",
    "and",
    "animal",
    "another",
    "answer",
    "any",
    "anyone",
    "anything",
    "appear",
    "apply",
    "approach",
    "area",
    "argue",
    "arm",
    "around",
    "arrive",
    "art",
    "article",
    "artist",
    "as",
    "ask",
    "assume",
    "at",
    "attack",
    "attention",
    "attorney",
    "audience",
    "author",
    "authority",
    "available",
    "avoid",
    "away",
    "baby",
    "back",
    "bad",
    "bag",
    "ball",
    "bank",
    "bar",
    "base",
    "be",
    "beat",
    "beautiful",
    "because",
    "become",
    "bed",
    "before",
    "begin",
    "behavior",
    "behind",
    "believe",
    "benefit",
    "best",
    "better",
    "between",
    "beyond",
    "big",
    "bill",
    "billion",
    "bit",
    "black",
    "blood",
    "blue",
    "board",
    "body",
    "book",
    "born",
    "both",
    "box",
    "boy",
    "break",
    "bring",
    "brother",
    "budget",
    "build",
    "building",
    "business",
    "but",
    "buy",
    "by",
    "call",
    "camera",
    "campaign",
    "can",
    "cancer",
    "candidate",
    "capital",
    "car",
    "card",
    "care",
    "career",
    "carry",
    "case",
    "catch",
    "cause",
    "cell",
    "center",
    "central",
    "century",
    "certain",
    "certainly",
    "chair",
    "challenge",
    "chance",
    "change",
    "character",
    "charge",
    "check",
    "child",
    "choice",
    "choose",
    "church",
    "citizen",
    "city",
    "civil",
    "claim",
    "class",
    "clear",
    "clearly",
    "close",
    "coach",
    "cold",
    "collection",
    "college",
    "color",
    "come",
    "commercial",
    "common",
    "community",
    "company",
    "compare",
    "computer",
    "concern",
    "condition",
    "conference",
    "Congress",
    "consider",
    "consumer",
    "contain",
    "continue",
    "control",
    "cost",
    "could",
    "country",
    "couple",
    "course",
    "court",
    "cover",
    "create",
    "crime",
    "cultural",
    "culture",
    "cup",
    "current",
    "customer",
    "cut",
    "dark",
    "data",
    "daughter",
    "day",
    "dead",
    "deal",
    "death",
    "debate",
    "decade",
    "decide",
    "decision",
    "deep",
    "defense",
    "degree",
    "Democrat",
    "democratic",
    "describe",
    "design",
    "despite",
    "detail",
    "determine",
    "develop",
    "development",
    "die",
    "difference",
    "different",
    "difficult",
    "dinner",
    "direction",
    "director",
    "discover",
    "discuss",
    "discussion",
    "disease",
    "do",
    "doctor",
    "dog",
    "door",
    "down",
    "draw",
    "dream",
    "drive",
    "drop",
    "drug",
    "during",
    "each",
    "early",
    "east",
    "easy",
    "eat",
    "economic",
    "economy",
    "edge",
    "education",
    "effect",
    "effort",
    "eight",
    "either",
    "election",
    "else",
    "employee",
    "end",
    "energy",
    "enjoy",
    "enough",
    "enter",
    "entire",
    "environment",
    "environmental",
    "especially",
    "establish",
    "even",
    "evening",
    "event",
    "ever",
    "every",
    "everybody",
    "everyone",
    "everything",
    "evidence",
    "exactly",
    "example",
    "executive",
    "exist",
    "expect",
    "experience",
    "expert",
    "explain",
    "eye",
    "face",
    "fact",
    "factor",
    "fail",
    "fall",
    "family",
    "far",
    "fast",
    "father",
    "fear",
    "federal",
    "feel",
    "feeling",
    "few",
    "field",
    "fight",
    "figure",
    "fill",
    "film",
    "final",
    "finally",
    "financial",
    "find",
    "fine",
    "finger",
    "finish",
    "fire",
    "firm",
    "first",
    "fish",
    "five",
    "floor",
    "fly",
    "focus",
    "follow",
    "food",
    "foot",
    "for",
    "force",
    "foreign",
    "forget",
    "form",
    "former",
    "forward",
    "four",
    "free",
    "friend",
    "from",
    "front",
    "full",
    "fund",
    "future",
    "game",
    "garden",
    "gas",
    "general",
    "generation",
    "get",
    "girl",
    "give",
    "glass",
    "go",
    "goal",
    "good",
    "government",
    "great",
    "green",
    "ground",
    "group",
    "grow",
    "growth",
    "guess",
    "gun",
    "guy",
    "hair",
    "half",
    "hand",
    "hang",
    "happen",
    "happy",
    "hard",
    "have",
    "he",
    "head",
    "health",
    "hear",
    "heart",
    "heat",
    "heavy",
    "help",
    "her",
    "here",
    "herself",
    "high",
    "him",
    "himself",
    "his",
    "history",
    "hit",
    "hold",
    "home",
    "hope",
    "hospital",
    "hot",
    "hotel",
    "hour",
    "house",
    "how",
    "however",
    "huge",
    "human",
    "hundred",
    "husband",
    "I",
    "idea",
    "identify",
    "if",
    "image",
    "imagine",
    "impact",
    "important",
    "improve",
    "in",
    "include",
    "including",
    "increase",
    "indeed",
    "indicate",
    "individual",
    "industry",
    "information",
    "inside",
    "instead",
    "institution",
    "interest",
    "interesting",
    "international",
    "interview",
    "into",
    "investment",
    "involve",
    "issue",
    "it",
    "item",
    "its",
    "itself",
    "job",
    "join",
    "just",
    "keep",
    "key",
    "kid",
    "kill",
    "kind",
    "kitchen",
    "know",
    "knowledge",
    "land",
    "language",
    "large",
    "last",
    "late",
    "later",
    "laugh",
    "law",
    "lawyer",
    "lay",
    "lead",
    "leader",
    "learn",
    "least",
    "leave",
    "left",
    "leg",
    "legal",
    "less",
    "let",
    "letter",
    "level",
    "lie",
    "life",
    "light",
    "like",
    "likely",
    "line",
    "list",
    "listen",
    "little",
    "live",
    "local",
    "long",
    "look",
    "lose",
    "loss",
    "lot",
    "love",
    "low",
    "machine",
    "magazine",
    "main",
    "maintain",
    "major",
    "majority",
    "make",
    "man",
    "manage",
    "management",
    "manager",
    "many",
    "market",
    "marriage",
    "material",
    "matter",
    "may",
    "maybe",
    "me",
    "mean",
    "measure",
    "media",
    "medical",
    "meet",
    "meeting",
    "member",
    "memory",
    "mention",
    "message",
    "method",
    "middle",
    "might",
    "military",
    "million",
    "mind",
    "minute",
    "miss",
    "mission",
    "model",
    "modern",
    "moment",
    "money",
    "month",
    "more",
    "morning",
    "most",
    "mother",
    "mouth",
    "move",
    "movement",
    "movie",
    "Mr",
    "Mrs",
    "much",
    "music",
    "must",
    "my",
    "myself",
    "name",
    "nation",
    "national",
    "natural",
    "nature",
    "near",
    "nearly",
    "necessary",
    "need",
    "network",
    "never",
    "new",
    "news",
    "newspaper",
    "next",
    "nice",
    "night",
    "no",
    "none",
    "nor",
    "north",
    "not",
    "note",
    "nothing",
    "notice",
    "now",
    "number",
    "occur",
    "of",
    "off",
    "offer",
    "office",
    "officer",
    "official",
    "often",
    "oh",
    "oil",
    "ok",
    "old",
    "on",
    "once",
    "one",
    "only",
    "onto",
    "open",
    "operation",
    "opportunity",
    "option",
    "or",
    "order",
    "organization",
    "other",
    "others",
    "our",
    "out",
    "outside",
    "over",
    "own",
    "owner",
    "page",
    "pain",
    "painting",
    "paper",
    "parent",
    "part",
    "participant",
    "particular",
    "particularly",
    "partner",
    "party",
    "pass",
    "past",
    "patient",
    "pattern",
    "pay",
    "peace",
    "people",
    "per",
    "perform",
    "performance",
    "perhaps",
    "period",
    "person",
    "personal",
    "phone",
    "physical",
    "pick",
    "picture",
    "piece",
    "place",
    "plan",
    "plant",
    "play",
    "player",
    "PM",
    "point",
    "police",
    "policy",
    "political",
    "politics",
    "poor",
    "popular",
    "population",
    "position",
    "positive",
    "possible",
    "power",
    "practice",
    "prepare",
    "present",
    "president",
    "pressure",
    "pretty",
    "prevent",
    "price",
    "private",
    "probably",
    "problem",
    "process",
    "produce",
    "product",
    "production",
    "professional",
    "professor",
    "program",
    "project",
    "property",
    "protect",
    "prove",
    "provide",
    "public",
    "pull",
    "purpose",
    "push",
    "put",
    "quality",
    "question",
    "quickly",
    "quite",
    "race",
    "radio",
    "raise",
    "range",
    "rate",
    "rather",
    "reach",
    "read",
    "ready",
    "real",
    "reality",
    "realize",
    "really",
    "reason",
    "receive",
    "recent",
    "recently",
    "recognize",
    "record",
    "red",
    "reduce",
    "reflect",
    "region",
    "relate",
    "relationship",
    "religious",
    "remain",
    "remember",
    "remove",
    "report",
    "represent",
    "Republican",
    "require",
    "research",
    "resource",
    "respond",
    "response",
    "responsibility",
    "rest",
    "result",
    "return",
    "reveal",
    "rich",
    "right",
    "rise",
    "risk",
    "road",
    "rock",
    "role",
    "room",
    "rule",
    "run",
    "safe",
    "same",
    "save",
    "say",
    "scene",
    "school",
    "science",
    "scientist",
    "score",
    "sea",
    "season",
    "seat",
    "second",
    "section",
    "security",
    "see",
    "seek",
    "seem",
    "sell",
    "send",
    "senior",
    "sense",
    "series",
    "serious",
    "serve",
    "service",
    "set",
    "seven",
    "several",
    "sex",
    "sexual",
    "shake",
    "share",
    "she",
    "shoot",
    "short",
    "shot",
    "should",
    "shoulder",
    "show",
    "side",
    "sign",
    "significant",
    "similar",
    "simple",
    "simply",
    "since",
    "sing",
    "single",
    "sister",
    "sit",
    "site",
    "situation",
    "six",
    "size",
    "skill",
    "skin",
    "small",
    "smile",
    "so",
    "social",
    "society",
    "soldier",
    "some",
    "somebody",
    "someone",
    "something",
    "sometimes",
    "son",
    "song",
    "soon",
    "sort",
    "sound",
    "source",
    "south",
    "southern",
    "space",
    "speak",
    "special",
    "specific",
    "speech",
    "spend",
    "sport",
    "spring",
    "staff",
    "stage",
    "stand",
    "standard",
    "star",
    "start",
    "state",
    "statement",
    "station",
    "stay",
    "step",
    "still",
    "stock",
    "stop",
    "store",
    "story",
    "strategy",
    "street",
    "strong",
    "structure",
    "student",
    "study",
    "stuff",
    "style",
    "subject",
    "success",
    "successful",
    "such",
    "suddenly",
    "suffer",
    "suggest",
    "summer",
    "support",
    "sure",
    "surface",
    "system",
    "table",
    "take",
    "talk",
    "task",
    "tax",
    "teach",
    "teacher",
    "team",
    "technology",
    "television",
    "tell",
    "ten",
    "tend",
    "term",
    "test",
    "than",
    "thank",
    "that",
    "the",
    "their",
    "them",
    "themselves",
    "then",
    "theory",
    "there",
    "these",
    "they",
    "thing",
    "think",
    "third",
    "this",
    "those",
    "though",
    "thought",
    "thousand",
    "threat",
    "three",
    "through",
    "throughout",
    "throw",
    "thus",
    "time",
    "to",
    "today",
    "together",
    "tonight",
    "too",
    "top",
    "total",
    "tough",
    "toward",
    "town",
    "trade",
    "traditional",
    "training",
    "travel",
    "treat",
    "treatment",
    "tree",
    "trial",
    "trip",
    "trouble",
    "true",
    "truth",
    "try",
    "turn",
    "TV",
    "two",
    "type",
    "under",
    "understand",
    "unit",
    "until",
    "up",
    "upon",
    "us",
    "use",
    "usually",
    "value",
    "various",
    "very",
    "victim",
    "view",
    "violence",
    "visit",
    "voice",
    "vote",
    "wait",
    "walk",
    "wall",
    "want",
    "war",
    "watch",
    "water",
    "way",
    "we",
    "weapon",
    "wear",
    "week",
    "weight",
    "well",
    "west",
    "western",
    "what",
    "whatever",
    "when",
    "where",
    "whether",
    "which",
    "while",
    "white",
    "who",
    "whole",
    "whom",
    "whose",
    "why",
    "wide",
    "wife",
    "will",
    "win",
    "wind",
    "window",
    "wish",
    "with",
    "within",
    "without",
    "woman",
    "wonder",
    "word",
    "work",
    "worker",
    "world",
    "worry",
    "would",
    "write",
    "writer",
    "wrong",
    "yard",
    "yeah",
    "year",
    "yes",
    "yet",
    "you",
    "young",
    "your",
    "yourself",
];


/* GLOBAL VARIABLES */

const TIME_LIMIT = 30; //in seconds

let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

const textInput = document.getElementById("text-input");
const timer = document.getElementById("timer");
const resultsSection = document.getElementById("results-section");
const gameArea = document.getElementById("game-area");
const goAgain = document.getElementById("go-again");

let textToType = document.getElementById("text-to-type");

/* Timer section */

let highScoreResult = {
    'wpm': 0,
    'accuracy': 0,
    'netWpm': 0
}

function formatTime(time) {
    let prettyTime = "";

    if (time < 10) {
        return `0:0${time}`;
    }
    return `0:${time}`;
}

function startTimer() {
    textInput.removeEventListener("keydown", startTimer);
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        timer.innerHTML = `<h3>${formatTime(timeLeft)}</h3>`;
        if (timeLeft === 10) under10();
        if (timeLeft === 0) onTimesUp();

    }, 1000);
}

function under10() {
    setOrange(timer);
}

function setOrange() {
    timer.style.color = "orange";
}

function onTimesUp() {
    clearInterval(timerInterval);

    timer.innerHTML = "<h3>0:00</h3>";
    timer.style.color = "#FF6347";
    textInput.style.display = 'none';
    gameArea.style.justifyContent = 'center';


    let wpm = calculateWPM(textInput.value);
    let accuracy = calculateAccuracy(textInput.value.split(' '), wordsToTypeArr).toPrecision(3);
    let netWpm = calculateNetWPM(wpm, accuracy);

    let result = {'wpm': wpm, 'accuracy': accuracy, 'netWpm': netWpm};
    isNewHighScore(result);
    showResults(result);
    cacheResults(result);

    document.getElementById("button-container").style.display= 'flex';
    document.getElementById("text-input-container").style.margin = "0";

}

/* Word generator section */

function getRandomWord() {
    let randIndex = Math.floor(Math.random() * allWords.length);
    let word = allWords[randIndex];
    return word;
}

function getRandomWords(num) {
    let words = [];
    for (let i = 0; i < num; i++) {
        words.push(getRandomWord());
    }
    return words;
}

function arrAsString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + " ";
    }
    return str;
}

/* Character checking */

function checkCorrect() {
    let actual = textInput.value.split(' ');
    let expected = wordsToTypeArr;


    let checked = "";
    let temp = "";
    let i = 0;
    let j = 0;
    for (i in actual) {
        if (actual[i] == expected[i]) {
            checked = checked + " " + expected[i];
        } else {
            checked = checked + " <span class='incorrect'>" + expected[i] + "</span> ";
        }
        temp = " <span class='correct'> " + checked + "</span> " + expected.slice(++j).toString().replaceAll(",", " ");
    }
    if (temp != "") {
        textToType.innerHTML = temp;
    }
    else {
        textToType.innerHTML = actual;
        return actual;
    }
}

function calculateAccuracy(text1, text2) {
    var total = text1.length;
    var correct = 0;
    for (i in text1) {
        if (text1[i] === '') total--;
        else if (text1[i] == text2[i]) {
            correct++;
        }
    }
    return (correct / total) * 100;
}

function calculateWPM(text) {
    return (text.length / 5 * (60 / TIME_LIMIT)).toPrecision(3);
}

function calculateNetWPM(wpm, accuracy) {
    return (wpm * accuracy).toPrecision(3) / 100;
}

function logKey() {
    console.log(textInput.value);
}

/* Results */

function isNewHighScore(res){
    if(res['netWpm'] > highScoreResult['netWpm']){
        highScoreResult = res;
    }
}

function showResults(res, fromCached) {
    resultsSection.style.display = 'flex';
    document.getElementById("high-score").style.textAlign = 'center';
    document.getElementById("high-score").style.display = 'block';
    document.getElementById("high-score").style.margin = '1rem';
    document.getElementById("high-score-title").innerHTML = `<h3 id="high-score-title">High Score:</h3>`;
    document.getElementById("best-wpm").innerHTML = `<p id="wpm">wpm: ${highScoreResult['wpm']}</p>`;
    document.getElementById("best-accuracy").innerHTML = `<p id="accuracy">accuracy: ${highScoreResult['accuracy']}%</p>`;
    document.getElementById("best-net-wpm").innerHTML = `<p id="net-wpm">net wpm: ${highScoreResult['netWpm']}</p>`;
    if(!fromCached){
        document.getElementById("high-score").style.textAlign = 'left';
        document.getElementById("last-result").style.display = 'block';
        document.getElementById("last-result").style.margin = '1rem';
        document.getElementById("results-title").innerHTML = `<h3 id="results-title">Results:</h3>`;
        document.getElementById("wpm").innerHTML = `<p id="wpm">wpm: ${res['wpm']}</p>`;
        document.getElementById("accuracy").innerHTML = `<p id="accuracy">accuracy: ${res['accuracy']}%</p>`;
        document.getElementById("net-wpm").innerHTML = `<p id="net-wpm">net wpm: ${res['netWpm']}</p>`;
    }
}

function cacheResults(res){
    localStorage.setItem('wpm', res['wpm']);
    localStorage.setItem('accuracy', res['accuracy']);
    localStorage.setItem('netWpm', res['netWpm']);
}

/* New game */

function startGame() {
    textInput.removeEventListener("keydown", startGame);
    console.log("startGame");
    startTimer();
}

function resetGame() {
    resetTimer();
    textInput.style.display = null;
    textInput.value = "";
    getNewWords();
    document.getElementById("text-input-container").style.margin = "";
    
    textInput.addEventListener("keydown", startGame);
}

function resetTimer() {
    clearInterval(timerInterval)
    timeLeft = TIME_LIMIT;
    timePassed = 0;
    timer.innerHTML = '<h3 id="timer">0:30</h3>';
    timer.style.color = "#00D46A";
}

function getNewWords() {
    wordsToTypeArr = getRandomWords(100);
    wordsToTypeStr = arrAsString(wordsToTypeArr);
    textToType = document.getElementById("text-to-type");
    textToType.innerHTML = `<span id="text-to-type">${wordsToTypeStr}</span>`;
}

function checkCache() {
    let cachedWpm = localStorage.getItem('wpm');
    let cachedAcc = localStorage.getItem('accuracy');
    let cachedNetWpm = localStorage.getItem('netWpm');
    if(cachedWpm && cachedAcc && cachedNetWpm){
        highScoreResult = {'wpm': cachedWpm, 'accuracy': cachedAcc, 'netWpm': cachedNetWpm};
        showResults(highScoreResult, true);
    }
}

/* Listeners */

const keyAction = {
    ' ': { keydown: checkCorrect },
}

function keyHandler(event) {
    if (!(event.key in keyAction) || !(event.type in keyAction[event.key]))
        return;
    keyAction[event.key][event.type]();
}


let wordsToTypeArr = getRandomWords(100);
let wordsToTypeStr = arrAsString(wordsToTypeArr);

textToType.innerHTML = `<span id="text-to-type">${wordsToTypeStr}</span>`;

textInput.addEventListener("keydown", startGame);
textInput.addEventListener("keydown", keyHandler);
goAgain.onclick = resetGame;
window.onload = checkCache;