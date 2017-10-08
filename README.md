![Build Status](https://gitlab.com/pages/emacs-reveal/badges/master/build.svg)

---

Example [emacs-reveal] website using GitLab Pages.

Learn more about GitLab Pages at https://pages.gitlab.io and the official
documentation https://docs.gitlab.com/ce/user/project/pages/.

This project demonstrates how to use
[emacs-reveal](https://gitlab.com/oer/emacs-reveal) to generate
[reveal.js presentations](http://lab.hakim.se/reveal-js/)
(HTML slides embedding audio)
from text files in [Org Mode](http://orgmode.org/).

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
- [Troubleshooting](#troubleshooting)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## GitLab CI

This project's static Pages are built by [GitLab CI][ci], following the steps
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml):

```
image: lechten/emacs-tex-org:v2

pages:
  stage: deploy
  before_script:
  - git submodule sync --recursive
  - git submodule update --init --recursive
  script:
  - emacs --batch --load elisp/publish.el --funcall org-publish-all
  artifacts:
    paths:
    - public
  only:
  - master
```

These build instructions are based on the docker image
`lechten/emacs-tex-org:v2` which contains GNU Emacs with a LaTeX
distribution.  Submodules are fetched first, before `emacs` is
executed to publish HTML presentations from `org` files as defined in
[publish.el](elisp/publish.el).

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. Initialize submodules to install emacs-reveal:
```
git submodule sync --recursive
git submodule update --init --recursive
```
1. Generate the website: `emacs --batch --load elisp/publish.el --funcall org-publish-all`
1. Preview your project: `firefox public/howto.html`
1. Add content

Read more at emacs-reveal's [documentation][].

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

## Troubleshooting

1. CSS is missing! That means two things:

    Either that you have wrongly set up the CSS URL in your templates, or
    your static generator has a configuration option that needs to be explicitly
    set in order to serve static assets under a relative URL.

[ci]: https://about.gitlab.com/gitlab-ci/
[emacs-reveal]: https://gitlab.com/oer/emacs-reveal
[documentation]: https://gitlab.com/oer/emacs-reveal-howto
[userpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#user-or-group-pages
[projpages]: https://docs.gitlab.com/ce/user/project/pages/introduction.html#project-pages

----

Forked from @lechten
