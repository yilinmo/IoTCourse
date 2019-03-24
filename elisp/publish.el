;;; publish.el --- Publish reveal.js presentation from Org file
;; -*- Mode: Emacs-Lisp -*-
;; -*- coding: utf-8 -*-

;; Copyright (C) 2017, 2018, 2019 Jens Lechtenbörger

;;; License: GPLv3

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
(require 'oer-reveal)

;; Load emacs-reveal.
(add-to-list 'load-path (expand-file-name "~/.emacs.d/elpa/emacs-reveal"))
(condition-case nil
    ;; Either require package with above hard-coded location
    ;; (e.g., in docker) ...
    (require 'emacs-reveal)
  (error
   ;; ... or look for sub-directory "emacs-reveal" of parent directory.
   (add-to-list
    'load-path
    (expand-file-name "../emacs-reveal/" (file-name-directory load-file-name)))
   (require 'emacs-reveal)))

;; Activate klipse.
(setq org-re-reveal-klipsify-src t
      org-re-reveal-klipse-js "https://storage.googleapis.com/app.klipse.tech/plugin/js/klipse_plugin.js"
      )

;; Publish Org files.
(oer-reveal-publish-all)

(provide 'publish)
;;; publish.el ends here
