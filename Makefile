all: index.html build
build:
	netlify build
	# This creates a draft deploy
	netlify deploy
index.html:
	pandoc -s README.md -o index.html
	
	
