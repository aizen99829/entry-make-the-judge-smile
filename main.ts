// SPDX-License-Identifier: MIT
// Make the Judge Smile — one line about a small good thing today.
// Prints the line to stdout, deterministically.

const line =
  "This morning my neighbour left a mango on my doorstep with a note that just said 'too many, enjoy' — the whole street smells like rain and ripe fruit now.";

// Guard: the entry must stay one line of at most 200 characters.
if (line.length > 200 || line.includes("\n")) {
  throw new Error("entry line must be a single line of at most 200 characters");
}

console.log(line);
