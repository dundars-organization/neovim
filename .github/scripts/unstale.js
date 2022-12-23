module.exports = async ({github, context}) => {
  const commenter = context.actor
  const issue = await github.rest.issues.get({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: context.issue.number,
  });

  console.log(issue)
  console.log(commenter)
}
