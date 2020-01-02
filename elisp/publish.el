;;; publish.el --- Publish reveal.js presentation from Org file
;; -*- Mode: Emacs-Lisp -*-
;; -*- coding: utf-8 -*-

;; SPDX-FileCopyrightText: 2017-2020 Jens Lechtenbörger
;; SPDX-License-Identifier: GPL-3.0-or-later

;;; License: GPL-3.0-or-later

;;; Commentary:
;; Publication of Org source files to reveal.js uses Org export
;; functionality offered by org-re-reveal and oer-reveal.
;; Initialization code for both is provided by emacs-reveal.
;; Note that org-re-reveal and oer-reveal are available on MELPA.
;;
;; Use this file from its parent directory with the following shell
;; command:
;; emacs --batch --load elisp/publish.el

;;; Code:
(package-initialize)
(setq
 oer-reveal-plugins
 '("reveal.js-plugins" "Reveal.js-TOC-Progress" "reveal.js-jump-plugin"
   "reveal.js-quiz" "reveal.js-coursemod" "klipse-libs"))

;; Uncomment the following for tests with unreleased changes.
;; (add-to-list 'load-path "../oer-reveal")
;; (require 'oer-reveal)
;; (require 'oer-reveal-publish)

;; Setup dot.
;; The following supposes that png images are generated into directory img,
;; which needs to exist.
(make-directory "img" t)
(setq oer-reveal-publish-babel-languages '((dot . t) (emacs-lisp . t))
      org-publish-project-alist
      (list (list "img"
                  :base-directory "img"
                  :base-extension "png"
                  :publishing-function 'org-publish-attachment
                  :publishing-directory "./public/img")))

;; Load emacs-reveal.
(require 'f)
(let ((install-dir (f-join user-emacs-directory "elpa" "emacs-reveal")))
  (add-to-list 'load-path install-dir)
  (condition-case nil
      ;; Either require package with above hard-coded location
      ;; (e.g., in docker) ...
      (require 'emacs-reveal)
    (error
     ;; ... or look for sub-directory "emacs-reveal" of parent project.
     (add-to-list
      'load-path
      (expand-file-name "../../emacs-reveal/" (file-name-directory load-file-name)))
     (require 'emacs-reveal))))

;; Publish Org files.
(oer-reveal-publish-all)
;;; publish.el ends here
