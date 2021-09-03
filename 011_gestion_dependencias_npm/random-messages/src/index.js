const messages = [
    "Sebastian",
    "Oscar",
    "Ana",
    "Nicolay",
    "Yesica",
    "Diego",
    "Laura"
];

const randomMessages = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(`Message to ${message}`);
};

module.exports = { randomMessages };
