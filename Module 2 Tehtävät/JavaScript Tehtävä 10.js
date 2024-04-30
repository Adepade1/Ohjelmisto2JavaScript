function displayResults(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);

    console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes.");

    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(candidate.name + ": " + candidate.votes + " votes");
    });
}

let numCandidates = prompt("Enter the number of candidates:");
let candidates = [];

for (let i = 1; i <= numCandidates; i++) {
    let candidateName = prompt("Name for candidate " + i + ":");
    candidates.push({ name: candidateName, votes: 0 });
}

let numVoters = prompt("Enter the number of voters:");

for (let i = 0; i < numVoters; i++) {
    let vote = prompt("Enter your vote (empty for abstain):");
    let candidate = candidates.find(candidate => candidate.name === vote);
    if (candidate) {
        candidate.votes++;
    }
}

displayResults(candidates);
