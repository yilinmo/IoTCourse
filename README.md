<!--- Local IspellDict: en -->

This project demonstrates how to use
[emacs-reveal](https://gitlab.com/oer/emacs-reveal) to generate
[reveal.js presentations](https://revealjs.com/)
(HTML slides embedding audio)
from text files in [Org Mode](https://orgmode.org/).

Head over to the
[Howto Presentation](https://oer.gitlab.io/emacs-reveal-howto/howto.html),
which was generated from [this Org file](howto.org).

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [GitLab CI](#gitlab-ci)
- [Building locally](#building-locally)
- [GitLab User or Group Pages](#gitlab-user-or-group-pages)
- [Did you fork this project?](#did-you-fork-this-project)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: registry.gitlab.com/oer/docker/emacs-reveal:1.0

pages:
  stage: deploy
  before_script:
  - git submodule sync --recursive
  - git submodule update --init --recursive
  script:
  - emacs --batch --load elisp/publish.el
  artifacts:
    paths:
    - public
    expire_in: 4 weeks
  only:
  - master
```

These build instructions are based on the [Docker image](https://gitlab.com/oer/docker)
`emacs-reveal:1.0` which contains GNU Emacs with a LaTeX
distribution, [reveal.js](https://revealjs.com/) with selected plugins,
[Org mode](https://orgmode.org/),
[org-re-reveal-ref](https://gitlab.com/oer/org-re-reveal-ref), and
[oer-reveal](https://gitlab.com/oer/oer-reveal).
During a build, submodules are fetched first, before `emacs` is
executed to publish HTML presentations from `org` files as defined in
[publish.el](elisp/publish.el).

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
2. Initialize submodules (`figures`):
```
git submodule sync --recursive
git submodule update --init --recursive
```
3. Install necessary Emacs packages: `emacs --batch --load emacs-reveal/install.el --funcall install`
4. Generate the website: `emacs --batch --load elisp/publish.el`
5. Preview your project: `firefox public/howto.html`
6. Add content; repeat, starting with step 4.

Read more in the generated [howto of emacs-reveal](https://oer.gitlab.io/emacs-reveal-howto/howto.html).

## GitLab User or Group Pages

To use this project as your user/group website, you will need one additional
step: just rename your project to `namespace.gitlab.io`, where `namespace` is
your `username` or `groupname`. This can be done by navigating to your
project's **Settings**.

Read more about [user/group Pages][userpages] and [project Pages][projpages].

## Did you fork this project?

If you forked this project for your own use, please go to your project's
**Settings** and remove the forking relationship, which won't be necessary
unless you want to contribute back to the upstream project.

[ci]: https://about.gitlab.com/gitlab-ci/
[userpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages
[projpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages
