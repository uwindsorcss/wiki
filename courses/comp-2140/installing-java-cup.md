---
id: installing-java-cup
title: Instructions to Install Java Cup on the CS Servers
sidebar_label: Installing Java Cup
slug: /comp-2140/installing-java-cup
---

Just want all the commands? Check them out [here](#all-commands-in-one-block)  
Or, run this one command to do everything:

```bash
curl -o- https://gist.githubusercontent.com/jere-mie/63277b52b89f0184bff86069e47b2faa/raw/everything.sh | bash
```

## Detailed instructions

### Make the 2140-javacup directory and cd into it

```bash
mkdir -p 2140-javacup
cd 2140-javacup
```

### Install JLex

```bash
mkdir -p JLex
cd JLex
wget http://jlu.myweb.cs.uwindsor.ca/214/Main.java
javac Main.java
cd ..
```

### Install JavaCup

```bash
wget https://jlu.myweb.cs.uwindsor.ca/214/javaCup.tar
tar -xvf *.tar
rm *.tar
```

### Download all of the calc files

```bash
wget https://jlu.myweb.cs.uwindsor.ca/214/calc.lex
wget https://jlu.myweb.cs.uwindsor.ca/214/calc.cup
wget https://jlu.myweb.cs.uwindsor.ca/214/CalcParserUser.java
wget https://jlu.myweb.cs.uwindsor.ca/214/calc.input
```

### Run it

```bash
java JLex.Main calc.lex
java java_cup.Main -parser CalcParser -symbols CalcSymbol calc.cup
javac calc.lex.java
javac CalcParser.java CalcSymbol.java CalcParserUser.java
java CalcParserUser
```

### Addendum

You may want to run the following once you're done just to clean up your directory:

```bash
rm *.class
```

Also, you may want to save the commands in [the "run it" section](#run-it) to a script file, such as `calc.sh`.
I've attached one at the bottom of this gist. You can download it by running:

```bash
wget https://gist.githubusercontent.com/jere-mie/63277b52b89f0184bff86069e47b2faa/raw/calc.sh
```

And you can run it by running:

```bash
chmod +x calc.sh # you only need to do this once
./calc.sh
```

## All commands in one block

Below are all of the commands listed together. You can type them in one at a time, or run this one script:

```bash
curl -o- https://gist.githubusercontent.com/jere-mie/63277b52b89f0184bff86069e47b2faa/raw/everything.sh | bash
```

Commands one at a time:

```bash
mkdir -p 2140-javacup
cd 2140-javacup

mkdir -p JLex
cd JLex

wget http://jlu.myweb.cs.uwindsor.ca/214/Main.java
javac Main.java
cd ..

wget https://jlu.myweb.cs.uwindsor.ca/214/javaCup.tar
tar -xvf *.tar
rm *.tar

wget https://jlu.myweb.cs.uwindsor.ca/214/calc.lex
wget https://jlu.myweb.cs.uwindsor.ca/214/calc.cup
wget https://jlu.myweb.cs.uwindsor.ca/214/CalcParserUser.java
wget https://jlu.myweb.cs.uwindsor.ca/214/calc.input

java JLex.Main calc.lex
java java_cup.Main -parser CalcParser -symbols CalcSymbol calc.cup
javac calc.lex.java
javac CalcParser.java CalcSymbol.java CalcParserUser.java
java CalcParserUser
```
