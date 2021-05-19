### Rewind n commits

#### Description



Rewinds the current branch by a given number of commits.

- Use `git reset HEAD~<n>` to rewind the current branch `<n>` commits.
- This command will uncommit and unstage changes, but leave them in the working directory.
- You can use the `--hard` flag to uncommit, unstage and delete changes instead.

```shell
git reset [--hard] HEAD~<n>
```

```shell
git reset HEAD~5
# Rewinds back 5 commits but keeps changes in the working directory

git reset --hard HEAD~3
# Rewinds back 3 commits and deletes changes
```
