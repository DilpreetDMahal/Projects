function calculateAverage(score1, score2, score3){
    return (score1 + score2 + score3)/3
}

function assignGrade(average){
    if ( average >= 90){
        return "A";
    }else if (average >= 80){
        return "B";
    }else if (average >= 70){
        return "C";
    }else if (average >= 60){
        return "D";
    }
    else{
        return "F";
    }
}

// get user input

const scores= []; // init where the scores go

for(let i = 1; i <= 3; i++){
    const score = parseInt(prompt(`Enter Score ${i}:`));

    scores.push(score)
}

const average = calculateAverage(scores[0], scores[1], scores[2]);
const grade = assignGrade(average)

console.log(`Average Score: ${average}`);
console.log(`Final Grade: ${grade}`);