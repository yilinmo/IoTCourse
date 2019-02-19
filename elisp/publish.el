;;; publish.el --- Publish reveal.js presentation from Org files on Gitlab Pages
;; -*- Mode: Emacs-Lisp -*-
;; -*- coding: utf-8 -*-

;; Copyright (C) 2017, 2018, 2019 Jens Lechtenbörger

;;; License: GPLv3

;;; Commentary:
;; Inspired by publish.el by Rasmus:
;; https://gitlab.com/pages/org-mode/blob/master/publish.el


;;; Code:

;; Load emacs-reveal-publish
(condition-case nil
    ;; Either require package in usual location ...
    (require 'emacs-reveal-publish)
  (error
   ;; ... or look for sub-directory "emacs-reveal" of parent directory.
   (add-to-list
    'load-path
    (expand-file-name "../emacs-reveal/" (file-name-directory load-file-name)))
   (require 'emacs-reveal-publish)))

(setq org-re-reveal-klipsify-src t
      org-re-reveal-klipse-js "https://storage.googleapis.com/app.klipse.tech/plugin/js/klipse_plugin.js"
      )

(provide 'publish)
;;; publish.el ends here
