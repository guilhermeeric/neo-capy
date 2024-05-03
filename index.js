// terminalInterface.js
const readline = require('readline');
const Queue = require('./queue');
const PullRequest = require('./pr');
const executeTasks = require('./executor');

// Create a queue
const deploymentQueue = new Queue();

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to print current queue
function printQueue() {
  const branches = deploymentQueue.items.map(pr => pr.getBranch());
  console.log('Current queue: [' + branches.join(', ') + ']');
}

// Command line interface
rl.question('Enter command (rd ship repository/branch): ', (command) => {
  const [_, action, repoAndBranch] = command.split(' ');
  const [repository, branch] = repoAndBranch.split('/');
  
  // Create a new pull request
  const pr = new PullRequest(repository, branch, 'unknown', 'checking');
  
  // Enqueue the pull request
  deploymentQueue.enqueue(pr);
  executeTasks(pr.getRepository(), 'pull_request', pr.getState());

  console.log(`Pull request enqueued for repository ${repository}, branch ${branch}`);
  
  // Print current queue
  printQueue();
  
  rl.close();
});
