# tennis-scoring

## Pre-requisites

You need to have the following installed on your machine
- nodejs (v12 or above)
- yarn

## Running the app

1. Install the required dependencies
```
yarn
```

2. Run the start script
```
yarn start
```

3. This should prompt you with the node repl interface. The following imports and variables have been initialized.
```
$ babel-node --extensions .ts src/index.ts
> Match
[Function: Match]

> match
Match {
  game: Game {
    playerOne: 0,
    playerTwo: 0,
    pointWonBy: [Function (anonymous)],
    score: [Function (anonymous)],
    winner: [Function (anonymous)]
  },
  playerOne: 0,
  playerTwo: 0,
  pointWonBy: [Function (anonymous)],
  score: [Function (anonymous)],
  winner: [Function (anonymous)]
}
```

4. Feel free to interact with the `match` object, as per the api specifications. Example as follows:
```
> match.pointWonBy("player 1");
null
> match.pointWonBy("player 2");
null
> match.score();
'0-0, 15-15'
>
> match.pointWonBy("player 1");
null
> match.pointWonBy("player 1");
null
> match.score();
'0-0, 40-15'
>
> match.pointWonBy("player 2");
null
> match.pointWonBy("player 2");
null
> match.score();
'0-0, Deuce'
>
> match.pointWonBy("player 1");
null
> match.score();
'0-0, Advantage player 1'
>
> match.pointWonBy("player 1");
null
> match.score();
'1-0'
```

## Running unit test

I have added a limited set of unit tests to the app. Run them as follows:

```
yarn test
```
