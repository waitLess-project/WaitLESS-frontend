# Contributing

## How do I... <a name="toc"></a>

- [Use This Guide](#introduction)?
- Ask or Say Something? 🤔🐛😱
  - [Request Support](#request-support)
  - [Report an Error or Bug](#report-an-error-or-bug)
  - [Request a Feature](#request-a-feature)
- Make Something? 🤓👩🏽‍💻📜🍳
  - [Project Setup](#project-setup)
  - [Contribute Documentation](#contribute-documentation)
  - [Contribute Code](#contribute-code)
- Manage Something ✅🙆🏼💃👔
  - [Provide Support on Issues](#provide-support-on-issues)
  - [Label Issues](#label-issues)
  - [Clean Up Issues and PRs](#clean-up-issues-and-prs)
  - [Review Pull Requests](#review-pull-requests)
  - [Merge Pull Requests](#merge-pull-requests)
  - [Tag a Release](#tag-a-release)
  - [Join the Project Team](#join-the-project-team)
- Add a Guide Like This One [To My Project](#attribution)? 🤖😻👻

## Project Conventions:
- [File Structure](#file-structure)

## Introduction

Thank you so much for your interest in contributing! All types of contributions are welcome and encouraged. Use the table of contents to find details on how you can contribute. This is an ongoing project maintained by new developers, so any feedback is taken seriously and with appreciation.

The development team looks forward to your contribution!

## Request Support

If you have a question about this project, how to use it, or just need clarification about something:

- Open an Issue at https://github.com/waitLess-project/WaitLESS-frontend/issues
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant. If not, please be ready to provide that information if maintainers ask for it.

Once it's filed:

- The project team will [label the issue](#label-issues).
- Someone will try to have a response soon.
- If you or the maintainers don't respond to an issue for 30 days, the issue will be closed. However, it may always be reopened if you decide to come back.

## Report an Error or Bug

If you run into an error or bug with the project:

- Open an Issue at https://github.com/waitLess-project/WaitLESS-frontend/issues
- Include reproduction steps that someone else can follow to recreate the bug or error on their own.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant. If not, please be ready to provide that information if maintainers ask for it.

Once it's filed:

- The project team will [label the issue](#label-issues).
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro-steps`. Bugs with the `needs-repro-steps` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags (such as `critical`), and be left to be implemented by someone.
- If you or the maintainers don't respond to an issue for 30 days, the issue will be closed. However, it may always be reopened if you decide to come back.

## Request a Feature

If the project doesn't do something you need or want it to do:

- Open an Issue at https://github.com/waitLess-project/WaitLESS-frontend/issues
- Provide as much context as you can about what you're running into.
- Please try and be clear about why existing features and alternatives would not work for you.

Once it's filed:

- The project team will [label the issue](#label-issues).
- The project team will evaluate the feature request, possibly asking you more questions to understand its purpose and any relevant requirements. If the issue is closed, the team will convey their reasoning and suggest an alternative path forward.
- If the feature request is accepted, it will be marked for implementation with `feature-accepted`, which can then be done by either by a core team member or by anyone in the community who wants to contribute.

Note: Please understand if the feature is not accepted by the development team.

## Project Setup

So you wanna contribute some code! That's great! This project uses GitHub Pull Requests to manage contributions, so [read up on how to fork a GitHub project and file a PR](https://guides.github.com/activities/forking) if you've never done it before.

If you want to go the usual route and run the project locally, though:

- [Install Node.js](https://nodejs.org/en/download/)
- [Fork the project](https://guides.github.com/activities/forking/#fork)

Then in your terminal:

- `cd path/to/your/clone`
- `npm install`
- `npm start`

And you should be ready to go!

## Contribute Documentation

Documentation is a super important, critical part of this project. Docs are how we keep track of what we're doing, how, and why. It's how we stay on the same page about our policies. And it's how we tell others everything they need in order to be able to use this project -- or contribute to it. So thank you in advance.

Documentation contributions of any size are welcome! Feel free to file a PR even if you're just re-wording a sentence to be more clear, or fixing a spelling mistake!

To contribute documentation:

- [Set up the project](#project-setup).
- Edit or add any relevant documentation.
- Make sure your changes are formatted correctly and consistently with the rest of the documentation.
- Re-read what you wrote, and run a spellchecker on it to make sure you didn't miss anything.
- Write clear, concise commit message(s) (max 80 characters). From this point forward, we'll all try to follow a convention such as:
    - A bug fix commit... 'fix' being the HEADER, '< component >' being the SUBHEADER   
        - commit message: fix(< component >) < pertinent description of code related to fix >
    - A new feature commit... 'feat' being the HEADER, '< component >' being the SUBHEADER
        - feat(< component >) < pertinent description of code related to feature >
- Go to https://github.com/waitLess-project/WaitLESS-frontend/pulls and open a new pull request with your changes.
- If your PR is connected to an open issue, add a line in your PR's description that says `Fixes: #123`, where `#123` is the number of the issue you're fixing.

Once you've filed the PR:

- If the maintainer asks for any changes, edit your changes, push, and ask for another review.
- If the maintainer decides to pass on your PR, they will thank you for the contribution and explain why they won't be accepting the changes. That's ok! We still really appreciate you taking the time to do it, and we don't take that lightly. 💚
- If your PR gets accepted, it will be marked as such, and merged into the `latest` branch soon after. Yay!

## Contribute Code

Code contribution or documentation contribution are both welcome. Because this repo is maintained by developers with 0-2 years experience, and partially for the sake of brevity, no tests will be required to go along with code contribution until further notice. 

To contribute code:

- [Set up the project](#project-setup).
- Make any necessary changes to the source code.
- Include any [additional documentation](#contribute-documentation) the changes might need.
- Write tests that verify that your contribution works as expected.
- Write clear, concise commit message(s).
- Go to https://github.com/waitLess-project/WaitLESS-frontend/pulls and open a new pull request with your changes.
- If your PR is connected to an open issue, add a line in your PR's description that says `Fixes: #123`, where `#123` is the number of the issue you're fixing.

Once you've filed the PR:

- If the maintainer asks for any changes, edit your changes, push, and ask for another review.
- If the maintainer decides to pass on your PR, they will thank you for the contribution and explain why they won't be accepting the changes. That's ok! We still really appreciate you taking the time to do it, and we don't take that lightly. 💚
- If your PR gets accepted, it will be marked as such, and merged into the `latest` branch soon after. Your contribution will be distributed to the masses. Yay!

## Provide Support on Issues

[Needs Collaborator](#join-the-project-team): none

Helping out other users with their questions is a really awesome way of contributing to any community. It's not uncommon for most of the issues on an open source projects being support-related questions by users trying to understand something they ran into, or find their way around a known bug.

Sometimes, the `support` label will be added to things that turn out to actually be other things, like bugs or feature requests. In that case, suss out the details with the person who filed the original issue, add a comment explaining what the bug is, and change the label from `support` to `bug` or `feature`. If you can't do this yourself, @mention a maintainer so they can do it.



- Avoid responding to issues you don't know you can answer accurately.
- Be kind and patient with users -- often, folks who have run into confusing things might be upset or impatient. This is ok. Try to understand where they're coming from, and if you're too uncomfortable with the tone, feel free to stay away or withdraw from the issue.

## Label Issues

[Needs Collaborator](#join-the-project-team): Issue Tracker

One of the most important tasks in handling issues is labeling them usefully and accurately. All other tasks involving issues ultimately rely on the issue being classified in such a way that relevant parties looking to do their own tasks can find them quickly and easily.

In order to label issues, [open up the list of unlabeled issues](https://github.com/wealljs/weallcontribute/issues?q=is%3Aopen+is%3Aissue+no%3Alabel) and, **from newest to oldest**, read through each one and apply issue labels according to the table below. If you're unsure about what label to apply, skip the issue and try the next one: don't feel obligated to label each and every issue yourself!

| Label           | Apply When                                                                                                                                                                                                                                                                                                                        | Notes                                                                                                                                                                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bug`           | Cases where the code (or documentation) is behaving in a way it wasn't intended to.                                                                                                                                                                                                                                               | If something is happening that surprises the _user_ but does not go against the way the code is designed, it should use the `enhancement` label.                                                                                                                       |
| `critical`      | Added to `bug` issues if the problem described makes the code completely unusable in a common situation.                                                                                                                                                                                                                          |
| `documentation` | Added to issues or pull requests that affect any of the documentation for the project.                                                                                                                                                                                                                                            | Can be combined with other labels, such as `bug` or `enhancement`.                                                                                                                                                                                                     |
| `duplicate`     | Added to issues or PRs that refer to the exact same issue as another one that's been previously labeled.                                                                                                                                                                                                                          | Duplicate issues should be marked and closed right away, with a message referencing the issue it's a duplicate of (with `#123`)                                                                                                                                        |
| `enhancement`   | Added to [feature requests](#request-a-feature), PRs, or documentation issues that are purely additive: the code or docs currently work as expected, but a change is being requested or suggested.                                                                                                                                |
| `help wanted`   | Applied by [Committers](#join-the-project-team) to issues and PRs that they would like to get outside help for. Generally, this means it's lower priority for the maintainer team to itself implement, but that the community is encouraged to pick up if they so desire                                                          | Never applied on first-pass labeling.                                                                                                                                                                                                                                  |
| `in-progress`   | Applied by [Committers](#join-the-project-team) to PRs that are pending some work before they're ready for review.                                                                                                                                                                                                                | The original PR submitter should @mention the team member that applied the label once the PR is complete.                                                                                                                                                              |
| `performance`   | This issue or PR is directly related to improving performance.                                                                                                                                                                                                                                                                    |
| `refactor`      | Added to issues or PRs that deal with cleaning up or modifying the project for the betterment of it.                                                                                                                                                                                                                              |
| `starter`       | Applied by [Committers](#join-the-project-team) to issues that they consider good introductions to the project for people who have not contributed before. These are not necessarily "easy", but rather focused around how much context is necessary in order to understand what needs to be done for this project in particular. | Existing project members are expected to stay away from these unless they increase in priority.                                                                                                                                                                        |
| `support`       | This issue is either asking a question about how to use the project, clarifying the reason for unexpected behavior, or possibly reporting a `bug` but does not have enough detail yet to determine whether it would count as such.                                                                                                | The label should be switched to `bug` if reliable reproduction steps are provided. Issues primarily with unintended configurations of a user's environment are not considered bugs, even if they cause crashes.                                                        |
| `tests`         | This issue or PR either requests or adds primarily tests to the project.                                                                                                                                                                                                                                                          | If a PR is pending tests, that will be handled through the [PR review process](#review-pull-requests)                                                                                                                                                                  |
| `wontfix`       | Labelers may apply this label to issues that clearly have nothing at all to do with the project or are otherwise entirely outside of its scope/sphere of influence. [Committers](#join-the-project-team) may apply this label and close an issue or PR if they decide to pass on an otherwise relevant issue.                     | The issue or PR should be closed as soon as the label is applied, and a clear explanation provided of why the label was used. Contributors are free to contest the labeling, but the decision ultimately falls on committers as to whether to accept something or not.

## Attribution

This guide was inspired by [WeAllJS](https://npm.im/weallcontribute) wellallcontribute repo :)

## File Structure

