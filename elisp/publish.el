;;; publish.el --- Publish reveal.js presentation from Org files on Gitlab Pages
;; -*- Mode: Emacs-Lisp -*-
;; -*- coding: utf-8 -*-

;; Copyright (C) 2017, 2018, 2019 Jens Lechtenbörger

;;; License: GPLv3

;;; Commentary:
;; Inspired by publish.el by Rasmus:
;; https://gitlab.com/pages/org-mode/blob/master/publish.el


;;; Code:
(package-initialize)
(require 'org)
(require 'ox-publish)

;; Load emacs-reveal
(condition-case nil
    ;; Either require package in usual location ...
    (require 'emacs-reveal)
  (error
   ;; ... or look for sub-directory "emacs-reveal" of parent directory.
   (add-to-list
    'load-path
    (expand-file-name "../emacs-reveal/" (file-name-directory load-file-name)))
   (require 'emacs-reveal)))

(setq org-export-with-smart-quotes t
      org-confirm-babel-evaluate nil
      org-reveal-root "./reveal.js"
      org-reveal-title-slide "title-slide.html")

(setq org-publish-project-alist
      (list
       (list "howto"
	     :base-directory "."
	     :base-extension "org"
	     :exclude "config\\|license-template\\|privacy\\|imprint"
	     :publishing-function 'org-reveal-publish-to-reveal
	     :publishing-directory "./public")
       (list "figures"
	     :base-directory "figures"
	     :base-extension (regexp-opt '("png" "jpg" "ico" "svg" "gif"))
	     :publishing-directory "./public/figures"
	     :publishing-function 'org-publish-attachment
	     :recursive t)
       (list "legalese"
	     :base-directory "."
	     :html-postamble nil
	     :include '("privacy.org" "imprint.org")
	     :exclude ".*"
	     :publishing-function '(org-html-publish-to-html)
	     :publishing-directory "./public")
       (list "audios"
	     :base-directory "audio"
	     :base-extension (regexp-opt '("ogg" "mp3"))
	     :publishing-directory "./public/audio"
	     :publishing-function 'org-publish-attachment)
       (list "quizzes"
	     :base-directory "quizzes"
	     :base-extension (regexp-opt '("js"))
	     :publishing-directory "./public/quizzes"
	     :publishing-function 'org-publish-attachment)
       (list "reveal-static"
	     :base-directory (expand-file-name "reveal.js" emacs-reveal-dir)
	     :exclude "\\.git"
	     :base-extension 'any
	     :publishing-directory "./public/reveal.js"
	     :publishing-function 'org-publish-attachment
	     :recursive t)
       (list "reveal-theme"
	     :base-directory (expand-file-name "css" emacs-reveal-dir)
	     :base-extension 'any
	     :publishing-directory "./public/reveal.js/css/theme"
	     :publishing-function 'org-publish-attachment)
       (list "reveal-toc-plugin"
	     :base-directory (expand-file-name
			      "Reveal.js-TOC-Progress/plugin" emacs-reveal-dir)
	     :base-extension 'any
	     :publishing-directory "./public/reveal.js/plugin"
	     :publishing-function 'org-publish-attachment
	     :recursive t)
       (list "reveal.js-plugins-anything"
	     :base-directory (expand-file-name
			      "reveal.js-plugins/anything" emacs-reveal-dir)
	     :base-extension 'any
	     :publishing-directory "./public/reveal.js/plugin/anything"
	     :publishing-function 'org-publish-attachment
	     :recursive t)
       (list "reveal.js-plugins-audio-slideshow"
	     :base-directory (expand-file-name
			      "reveal.js-plugins/audio-slideshow"
			      emacs-reveal-dir)
	     :base-extension 'any
	     :publishing-directory "./public/reveal.js/plugin/audio-slideshow"
	     :publishing-function 'org-publish-attachment
	     :recursive t)
       (list "reveal.js-jump-plugin"
	     :base-directory (expand-file-name
			      "reveal.js-jump-plugin/jump" emacs-reveal-dir)
	     :base-extension 'any
	     :publishing-directory "./public/reveal.js/plugin/jump"
	     :publishing-function 'org-publish-attachment
	     :recursive t)
       (list "reveal.js-quiz-plugin"
	     :base-directory (expand-file-name
			      "reveal.js-quiz/quiz" emacs-reveal-dir)
	     :base-extension 'any
	     :publishing-directory "./public/reveal.js/plugin/quiz"
	     :publishing-function 'org-publish-attachment
	     :recursive t)
       (list "site" :components '("howto"))))

(provide 'publish)
;;; publish.el ends here
