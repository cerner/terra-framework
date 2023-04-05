const GithubIssue = require('./GithubIssue');
class GithubPr extends GithubIssue {
  async getBaseBranchRef() {
    const result = await this.requestWithThrows(`GET /repos/${this.owner}/${this.repo}/pulls/${this.number}`);
    return result.data.base.ref;
  }
}
module.exports = GithubPr;