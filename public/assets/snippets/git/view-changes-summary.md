### View changes summary

#### Description



Prints a summary of changes between two given commits.

- Use `git shortlog <commit>..<other-commit>` to view a summary of changes between the two given commits.
- Use arrow keys to navigate, press <kbd>Q</kbd> to exit.

```shell
git shortlog <commit>..<other-commit>
```

```shell
git shortlog 3050fc0de..HEAD
# Duck Quacking (2):
#      Fix network bug
#      Update documentation
```
