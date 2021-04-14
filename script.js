// 1
let submissions = [
{name: "Jane", score: 95, date: "2020-01-24", passed: "true"},
{name: "Joe", score: 77, date: "2018-05-14", passed: "true"},
{name: "Jack", score: 59, date: "2019-07-05", passed: "false"},
{name: "Jill", score: 88, date: "2020-04-22", passed: "true"},
];

// 2
function addSubmission(array, newName, newScore, newDate) {

array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60 
  });
}
addSubmission(submissions, "Nick", 78, "2021-04-13");
console.log(submissions)

//3
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1)
    }
    
deleteSubmissionByIndex(submissions, 1);
console.log(submissions)
    
//4
function deleteSubmissionByName(array, name) {
    let index = array.findIndex(array => array.name === name);
    array.splice(index, 1);
}
deleteSubmissionByName(submissions, "Jane");
console.log(submissions)

//5
// function editSubmission(array, index, score) {
//     array[index].score = score;
//     array.passed.score >= 60;
// }

// editSubmission(submissions, 2, 80)
//6

function findSubmissionByName(array, name) {
    let found = array.find(array => array.name === name);
    console.log(found)
}
findSubmissionByName(submissions, "Nick");
console.log(submissions)

// 7
function findLowestScore(array) {
    let minValue = Infinity;
    array.forEach(array => console.log(array.score));
    if (array.score < minValue) {
        minValue = array.score;
    }
    console.log(minValue)
}
findLowestScore(submissions);
console.log(submissions)


// 8
function findAverageScore(array){

}


// 9 
function filterPassing(array){

}

// 10
function filter90AndAbove(array){
    
}