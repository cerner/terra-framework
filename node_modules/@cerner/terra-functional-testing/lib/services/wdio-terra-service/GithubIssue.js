const {
  Octokit
} = require('@octokit/core');
class GithubIssue {
  constructor(url, token, owner, repo, number) {
    this.octokit = new Octokit({
      baseUrl: url,
      auth: token
    });
    this.repo = repo;
    this.owner = owner;
    this.number = number;
  }
  requestWithThrows(route, options) {
    return this.octokit.request(route, options).catch(err => {
      throw new Error(JSON.stringify(err, null, 4));
    });
  }
  postComment(comment) {
    return this.requestWithThrows(`POST /repos/${this.owner}/${this.repo}/issues/${this.number}/comments`, {
      body: comment
    });
  }
  async getComments() {
    const result = await this.requestWithThrows(`GET /repos/${this.owner}/${this.repo}/issues/${this.number}/comments`);
    return result.data.map(x => x.body);
  }
}
module.exports = GithubIssue;