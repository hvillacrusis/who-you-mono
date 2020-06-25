# Commit Message Format

1. Single line commit message

   ```
   <type>(<scope>): <subject>
   ```

   where, `type` is one of (`feat|fix|chore|refactor|misc|style`). Please refer to [Angular's commit guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type) for further info.

   where, `scope` is the domain of change, i.e. `create-delivery|create-shipment|update-driver` and so on.

   where, `subject` describes what will happen when the commit is applied, i.e. `fix bug of refresh|remove unused codes|add button to see next`. Please always use the imperative present tense of all `subject` statements

1. Multi Line commit message

   You may like to use multi line commit message when describing conplex changes made.

   ```
   <type>(<scope>): <subject>

   <body>

   <footer>
   ```

   where header follows the same convention as a single commit message

   where `body`, should include the motivation for the change and contrast this with previous behaviours, just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes".

   where `footer`, should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.

   please notice the newlines every `header`,`body`,`footer`, these are important to separate the sections on our changelog documents

> NOTE: When in doubt, please refer to
> [Angular's contributing guideline's commit message section](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit-message-format)
