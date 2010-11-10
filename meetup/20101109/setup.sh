#!/bin/sh
# Review: Style, nomenclature, structure, and performance
 
for G in http://github.com/janl/mustache.js.git http://github.com/jquery/jquery-tmpl.git http://github.com/documentcloud/underscore.git http://github.com/donnerjack13589/nTPL.git  http://github.com/SamuraiJack/Shotenjin-Joosed.git http://github.com/fitzgen/tempest.git http://github.com/atduskgreg/srender.git http://github.com/trix/nano.git
do
    git clone $G
done
 
# http://dojotoolkit.org/reference-guide/dojo/replace.html - Not the core framework
 
 
# http://code.google.com/p/json-template/
hg clone https://json-template.googlecode.com/hg/ json-template
 
# http://code.google.com/p/google-jstemplate/
svn checkout http://google-jstemplate.googlecode.com/svn/trunk/ google-jstemplate-read-only
 
# http://code.google.com/p/closure-templates/
svn checkout http://closure-templates.googlecode.com/svn/trunk/ closure-templates-read-only
