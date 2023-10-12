const readline = require("readline");
const path = require("path");
const { program } = require("commander");
const fs = require("fs").promises;

require("colors");

const DEFAULT_MAX = 10;

program.option(
  "-f, --file [string]",
  "file for saving game results",
  "result.txt"
);

program.option(
  "-m, --max-value [number]",
  "max value for the game",
  DEFAULT_MAX
);

const { file, maxValue } = program.parse(process.argv).opts();

const logFile = path.join(__dirname, file);
const logFileDir = path.dirname(logFile);

// console.log(process.argv);
// console.log(file, maxValue);

// console.log("green".green);
// console.log("red".red);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question(
//   `Wprowadź liczbę od 1 do ${maxValue} aby spróbować odgadnąć \n`.yellow,
//   (value) => {
//     // console.log("input value was: ", value);
//     rl.close();
//   }
// );

let guesses = 0;

const max = maxValue ? parseInt(maxValue) : DEFAULT_MAX;
const numberToGuess = Math.floor(Math.random() * max) + 1;

const logResultToFile = async () => {
  try {
    await fs.appendFile(
      logFile,
      `${new Date().toDateString()} | Udało Ci się odgadnąć liczbę od 1 do ${max} w ${guesses} razy\n`
    );
  } catch (e) {
    console.log(e);
    console.log("Nie udało się zapisać wyniku do pliku".red);
  }
};

const gameTick = () => {
  rl.question(`Zgaduj: `.yellow, async (value) => {
    if (value === "quit" || value === "q") {
      // process.exit()
      rl.close();
      return;
    }
    const parsedGuess = parseInt(value);
    guesses++;
    if (parsedGuess === numberToGuess) {
      console.log("Wygrałeś!".green);
      await logResultToFile();
      game();
    } else {
      console.log("Nie udało się :(".red);
      gameTick();
    }
  });
};

const game = () => {
  console.log(`\nWitam w naszej grze, spróbuj odgadnąć liczbę od 1 do ${max}`);
  guesses = 0;
  gameTick();
};

// game();

// sprawdzenie czy mamy dostęp do folderu
fs.access(logFileDir)
  .catch(
    () => fs.mkdir(logFileDir, { recursive: true }) // tworzenie nowego folderu
  )
  .finally(() => {
    game();
  });
// console.log(numberToGuess);

// fs.appendFile(fileName, 'string')
