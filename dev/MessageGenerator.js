import champions from 'lol-champions' assert { type: "json" };


const pickRandomChamps = (sentenceAmount) => {
    let champArray = [];
    for(let i = 0; i < sentenceAmount; i++){
    champArray.push(champions[Math.floor(Math.random() * champions.length)].name);
    }
    return champArray;
}

const champArray = pickRandomChamps(3);

const pickRandomPlaystyle = () => {
    const playStyles = ['Tank', 'Attack Damage', 'Ability Power', 'Support', 'Disco Mid'];
    return playStyles[Math.floor(Math.random() * (playStyles.length - 1))];
}

const sentencesLayout = {
    firstSentences : [`Darn it they nerfed ${pickRandomPlaystyle()} ${champArray[0]}`,`I can't believe they buffed ${champArray[0]}.`,`I'm so glad they buffed${champArray[0]}!`],
    secondSentences : [`Now everybody will start playing ${pickRandomPlaystyle()} ${champArray[1]}!`,`Surely ${pickRandomPlaystyle()} ${champArray[1]} will become overpowered now.`],
    thirdSentences : [`I can finally go back to playing ${champArray[2]}`, `You should really try out ${pickRandomPlaystyle()} ${champArray[2]}`]
}
console.log(sentencesLayout.length);
const createRandomMessage = () => {
    console.log(sentencesLayout.firstSentences[Math.ceil(Math.random() * (sentencesLayout.firstSentences.length - 1))] + '\n' + sentencesLayout.secondSentences[Math.ceil(Math.random() * (sentencesLayout.secondSentences.length - 1))] + '\n' + sentencesLayout.thirdSentences[Math.ceil(Math.random() * (sentencesLayout.thirdSentences.length - 1))]);
}

createRandomMessage();