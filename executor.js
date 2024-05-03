const yaml = require('js-yaml');
const fs = require('fs');

// Function to execute tasks associated with a repository, type, and state
function executeTasks(repository, type, state) {
  try {
    // Read YAML configuration file
    const config = yaml.load(fs.readFileSync('config.yaml', 'utf8'));

    // Get tasks associated with the repository, type, and state
    const tasks = config[repository][type].tasks.filter(task => task.state === state);

    // Execute tasks
    tasks.forEach(task => {
      console.log('\n============================================');
      console.log(`Executing task "${task.name}" for repository "${repository}" in state "${state}"`);

      // Simulate task execution by logging a message
      console.log(`Task "${task.name}" completed for repository "${repository}" in state "${state}"`);
      console.log('============================================\n');
    });
  } catch (e) {
    console.log('Error executing tasks:', e);
  }
}

module.exports = executeTasks;
