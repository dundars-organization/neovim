module.exports = async ({github, context}) => {
  const requestedReviewers = github.rest.pulls.listRequestedReviewers({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number
  });

  const something = console.log(requestedReviewers)
}
