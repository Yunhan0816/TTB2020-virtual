# TTB2020 Virtual

## Contribute Guide

### Before working:

1. pull from master
2. create your new branch
3. do the coding
4. git add -A
5. git commit -m "your commit messages"
6. git push origin your_branch_name

### Git worktree How-To

1. In your terminal, cd to repo
2. `git worktree add -B gh-pages public origin/gh-pages`
3. git worktree is set up!

#### To deploy more code in the future

1. do the code
2. git push etc -- push your stuff first
3. `gatsby build` -- this builds into the public folder
4. `cd public` -- this will direct you to gh-pages
5. git add -A, git commit -m "im awesome or something like that", git push etc -- push your changes
