module.exports = async ({github, context}) => {
  const requestedReviewers = await github.rest.pulls.listRequestedReviewers({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number
  });

  const something = requestedReviewers
  console.log(something)
}
