let q1 = [
    {
        question: "What is the name of this flower?",
        image: "/images/daffodil.png",
        answers: [
            {answerText: "Daisy", correct: false},
            {answerText: "Daffodil", correct: true},
            {answerText: "Lily", correct: false},
            {answerText: "Rose", correct: false},
        ],
    },
    {
        question: "What is the name of the animal?",
        image: "/images/RedPanda.jpg",
        answers: [
            {answerText: "Black Bear", correct: false},
            {answerText: "Red Panda", correct: true},
            {answerText: "Koala", correct: false},
            {answerText: "Lemur", correct: false},
        ],
    },
    {
        question: "What is the name of the insect?",
        image: "/images/Ladybug.jpg",
        answers: [
            {answerText: "Fly", correct: false},
            {answerText: "Grasshopper", correct: false},
            {answerText: "Butterfly", correct: false},
            {answerText: "Ladybug", correct: true},
        ],
    },
    {
        question: "What is the name of the plant?",
        image: "/images/cactus.jpg",
        answers: [
            {answerText: "Orchid", correct: false},
            {answerText: "Palm Tree", correct: false},
            {answerText: "Aloe Vera", correct: false},
            {answerText: "Cactus", correct: true},
        ],
    },
    {
        question: "What kind of fish is in the picture?",
        image: "/images/Clownfish.jpg",
        answers: [
            {answerText: "Clownfish", correct: true},
            {answerText: "Betta Fish", correct: false},
            {answerText: "Catfish", correct: false},
            {answerText: "Goldfish", correct: false},
        ],
    },
    {
        question: "What kind of plant is there?",
        image: "/images/SucculentGarden.jpg",
        answers: [
            {answerText: "Cactus", correct: false},
            {answerText: "Aloe Vera", correct: false},
            {answerText: "Succulent Garden", correct: true},
            {answerText: "Lilies", correct: false},
        ],
    },
];

let q2 = [
    {
        question: "What is the name of the flower?",
        image: "/images/cherryblossom.png",
        answers: [
            {answerText: "Water Lily", correct: false},
            {answerText: "Daffodil", correct: false},
            {answerText: "Cherry Blossom", correct: true},
            {answerText: "Rose", correct: false},
        ],
    },
    {
        question: "What is the name of the animal?",
        image: "/images/SeaTurtle.jpg",
        answers: [
            {answerText: "Sea Turtle", correct: true},
            {answerText: "Seahorse", correct: false},
            {answerText: "Shark", correct: false},
            {answerText: "Whale", correct: false},
        ],
    },
    {
        question: "What type of tree is pictured?",
        image: "/images/LemonTree.jpg",
        answers: [
            {answerText: "Pine Tree", correct: false},
            {answerText: "Palm Tree", correct: false},
            {answerText: "Lemon Tree", correct: true},
            {answerText: "Orange Tree", correct: false},
        ],
    },
    {
        question: "What is the name of the animal?",
        image: "/images/Otter.jpg",
        answers: [
            {answerText: "Sea Otter", correct: true},
            {answerText: "Penguin", correct: false},
            {answerText: "Walrus", correct: false},
            {answerText: "Sea Lion", correct: false},
        ],
    },
    {
        question: "What is the name of the plant?",
        image: "/images/VenusFlyTrap.jpg",
        answers: [
            {answerText: "Orchid", correct: false},
            {answerText: "Venus Fly Trap", correct: true},
            {answerText: "Sunflower", correct: false},
            {answerText: "Dandelion", correct: false},
        ],
    },
    {
        question: "What is the name of the animal?",
        image: "/images/Mongoose.jpg",
        answers: [
            {answerText: "Meerkat", correct: false},
            {answerText: "Lemur", correct: false},
            {answerText: "Fox", correct: false},
            {answerText: "Mongoose", correct: true},
        ],
    }
];

let q3 = [
    {
        question: "What is the name of this flower?",
        image: "/images/lily.jpg",
        answers: [
            {answerText: "Lily", correct: true},
            {answerText: "Daisy", correct: false},
            {answerText: "Tulip", correct: false},
            {answerText: "Sunflower", correct: false},
        ],
    },
    {
        question: "What is the name of this animal",
        image: "/images/Moose.jpg",
        answers: [
            {answerText: "Stag", correct: false},
            {answerText: "Moose", correct: true},
            {answerText: "Reindeer", correct: false},
            {answerText: "Goat", correct: false},
        ],
    },
    {
        question: "What is the breed of this puppy?",
        image: "/images/ScottishTerrier.jpg",
        answers: [
            {answerText: "Maltese", correct: false},
            {answerText: "Poodle", correct: false},
            {answerText: "Beagle", correct: false},
            {answerText: "Scottish Terrier", correct: true},
        ],
    },
    {
        question: "What is the name of this plant?",
        image: "/images/AloeVera.jpg",
        answers: [
            {answerText: "Cactus", correct: false},
            {answerText: "Aloe Vera", correct: true},
            {answerText: "Spider Plant", correct: false},
            {answerText: "Monstera", correct: false},
        ],
    },
    {
        question: "What is the name of this insect?",
        image: "/images/Honeybee.jpg",
        answers: [
            {answerText: "Honey Bee", correct: true},
            {answerText: "Wasp", correct: false},
            {answerText: "Hornet", correct: false},
            {answerText: "Fly", correct: false},
        ],
    },
    {
        question: "What is the breed of this puppy?",
        image: "/images/ShihTzu.jpg",
        answers: [
            {answerText: "Shih Tzu", correct: true},
            {answerText: "Maltese", correct: false},
            {answerText: "Chihuahua", correct: false},
            {answerText: "Pug", correct: false},
        ],
    },
];

let quiz1 = {id: 1, name: "Quiz 1", picture: "/images/daffodil.png", questions: q1};
let quiz2 = {id: 2, name: "Quiz 2", picture: "/images/cherryblossom.png", questions: q2};
let quiz3 = {id: 3, name: "Quiz 3", picture: "/images/lily.jpg", questions: q3};

let quizzes = [quiz1, quiz2, quiz3];

module.exports.quizzes = quizzes;