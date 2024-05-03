// deploy.js
class Deploy {
    constructor(repository, state, branch) {
      this.repository = repository;
      this.state = state;
      this.branch = branch;
    }
  
    // Getter methods
    getRepository() {
      return this.repository;
    }
  
    getState() {
      return this.state;
    }
  
    getBranch() {
      return this.branch;
    }

    setState(state) {
      this.state = state;
    }
  }
  
  module.exports = Deploy;
  