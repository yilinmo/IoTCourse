RAWDIR  := ./figures/raw
METADIR := ./figures

PNGS    := $(wildcard $(RAWDIR)/*.png)
PNGMETAS:= $(patsubst $(RAWDIR)/%.png,$(METADIR)/%.meta,$(PNGS))

GIFS    := $(wildcard $(RAWDIR)/*.gif)
GIFMETAS:= $(patsubst $(RAWDIR)/%.gif,$(METADIR)/%.meta,$(GIFS))

JPGS    := $(wildcard $(RAWDIR)/*.jpg)
JPGMETAS:= $(patsubst $(RAWDIR)/%.jpg,$(METADIR)/%.meta,$(JPGS))

TIKZDIR   := ./figures/tikz
TIKZS     := $(wildcard $(TIKZDIR)/*.tikz)
TIKZTEXS  := $(patsubst %.tikz,%.tex,$(TIKZS))
TIKZPDFS  := $(patsubst %.tikz,%.pdf,$(TIKZS))
TIKZSVGS  := $(patsubst %.tikz,%.svg,$(TIKZS))
TIKZPNGS  := $(patsubst %.tikz,%.png,$(TIKZS))
TIKZMETAS := $(patsubst $(TIKZDIR)/%.tikz,$(METADIR)/%.meta,$(TIKZS))


.PHONY: all clean pics

all: pics

pics: $(PNGMETAS) $(GIFMETAS) $(JPGMETAS) $(TIKZMETAS) $(TIKZPNGS) $(TIKZSVGS)

%.tex: %.tikz
	sed -e "s;%TIKZNAME%;$(basename $^);g" ./template.tex > $@

%.pdf: %.tex
	xelatex -output-directory=$(TIKZDIR) $^
	rm $(basename $^).log $(basename $^).aux

%.svg: %.pdf
	pdf2svg $^ $@

%.png: %.pdf
	pdftoppm -r 300 -png $^ tmp
	mv tmp-1.png $@

csvs: $(PUBCSVS)

$(CSVDESTDIR)/%.csv: $(CSVDIR)/%.csv
	cp $^ $@

$(METADIR)/%.meta: | $(TIKZDIR)/%.png
	./gen_meta.sh $| > $@

$(METADIR)/%.meta: | $(RAWDIR)/%.png
	./gen_meta.sh $| > $@

$(METADIR)/%.meta: | $(RAWDIR)/%.gif
	./gen_meta.sh $| > $@

$(METADIR)/%.meta: | $(RAWDIR)/%.jpg
	./gen_meta.sh $| > $@

clean:
	rm $(PNGMETAS) $(GIFMETAS) $(JPGMETAS) $(TIKZTEXS) $(TIKZPDFS) $(TIKZSVGS) $(TIKZPNGS) $(TIKZMETAS) 
