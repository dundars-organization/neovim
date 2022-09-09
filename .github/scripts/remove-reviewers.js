module.exports = async ({github, context}) => {
  const {data: { users }} = await github.rest.pulls.listRequestedReviewers({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number
  });
  const reviewers = users.map(e => e.login)

  const { data } = await github.rest.teams.list({
    org: "neovim"
  });
  allTeams = data.map(e => e.slug)

  github.rest.pulls.removeRequestedReviewers({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number,
    reviewers: reviewers,
    team_reviewers: allTeams,
  });
}
