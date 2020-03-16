<!--- Local IspellDict: en -->
<!--- SPDX-FileCopyrightText: 2017-2020 Jens Lechtenbörger -->
<!--- SPDX-License-Identifier: CC-BY-SA-4.0 -->


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
defined in [`.gitlab-ci.yml`](.gitlab-ci.yml) (the following may not
show the most recent contents of that file):

```
image: registry.gitlab.com/oer/emacs-reveal/emacs-reveal:7.1.1

pages:
  stage: deploy
  before_script:
  - git submodule sync --recursive
  - git submodule update --init --recursive
  script:
  - emacs --batch --load elisp/publish.el
  - cp public/howto.html public/index.html
  - find public -type f -regex '.*\.\(html\|js\|css\)$' -exec gzip -f -k {} \;
  artifacts:
    paths:
    - public
    expire_in: 4 weeks
  only:
  - master
```

These build instructions are based on the `emacs-reveal:7.1.1` from
[this container registry](https://gitlab.com/oer/emacs-reveal/container_registry),
which contains GNU Emacs with a LaTeX
distribution, [reveal.js](https://revealjs.com/) with selected plugins,
[Org mode](https://orgmode.org/),
[org-re-reveal](https://gitlab.com/oer/org-re-reveal), and
[org-re-reveal-ref](https://gitlab.com/oer/org-re-reveal-ref), and
[oer-reveal](https://gitlab.com/oer/oer-reveal).
During a build, submodules are fetched first, before `emacs` is
executed to publish HTML presentations from `org` files as defined in
[publish.el](elisp/publish.el).

The `cp` statement makes sure that an index page is available for your
GitLab Pages, while the `find` statement creates compressed versions
of text resources to reduce page load times.

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Install emacs-reveal.  Choose a directory, e.g., `~/.emacs.d/elpa`, and clone software
   - `cd ~/.emacs.d/elpa`
   - `git clone https://gitlab.com/oer/emacs-reveal.git`
   - Then, make sure that `emacs-reveal.el` gets loaded in
     your Emacs sessions, e.g., by adding this to your `~/.emacs`:

     ```
     (add-to-list 'load-path "~/.emacs.d/elpa/emacs-reveal")
     (require 'emacs-reveal)
     ```

2. Fork, clone or download this project
3. Initialize submodules (`figures`):

   ```
   git submodule sync --recursive
   git submodule update --init --recursive
   ```

4. Generate the website: `emacs --batch --load elisp/publish.el`
5. Preview your project: `firefox public/howto.html`
6. Add content; repeat, starting with step 5.

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
