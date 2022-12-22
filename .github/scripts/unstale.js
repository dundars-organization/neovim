module.exports = async ({github, context}) => {
  const commenter = context.actor
  const issue = await context.issue
  console.log(issue)
}
