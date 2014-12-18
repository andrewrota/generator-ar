generator-ar
============

A Yeoman generator I use for quickly scaffolding client side web sites and applications with Sass, webpack, Flow, and Jest.

## Usage

    wget http://flowtype.org/downloads/flow-linux64-latest.zip
    unzip flow-linux64-latest.zip
    cd flow
    echo "PATH=\"\$PATH:$(pwd)/\"" >> ~/.bashrc && source ~/.bashrc

    npm install -g react-tools

    gem install sass

    npm install -g yo

    npm install -g gulp

    npm install -g bower

    npm install -g https://github.com/andrewrota/generator-ar/tarball/master

    yo ar --app-name=myApp --app-path=source

    npm install

**To run static type checks:**

    flow check
