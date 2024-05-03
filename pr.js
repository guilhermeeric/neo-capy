// pr.js
class PullRequest {
    constructor(repository, branch, author, state) {
      this.repository = repository;
      this.branch = branch;
      this.author = author;
      this.state = state;
    }
  
    // Getter methods
    getRepository() {
      return this.repository;
    }
  
    getBranch() {
      return this.branch;
    }
  
    getAuthor() {
      return this.author;
    }
  
    getState() {
      return this.state;
    }
  
    setState(state) {
      this.state = state;
    }
  }
  
  module.exports = PullRequest;
  