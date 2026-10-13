/**
 * P63 BRAKING PHASE — ANTENNA POSITION CHECK
 *
 * Translated from Luminary099/THE_LUNAR_LANDING.agc, lines 239-255
 * Original authors: MIT Instrumentation Laboratory
 * All comments preserved word for word from the 1969 source.
 */

// IS THE LR ANTENNA IN POSITION 1 YET
async function p63spot3(hardware, dsky) {
  while (true) {
    const antennaPosition = hardware.read("CHAN33", 6); // BIT6

    if (antennaPosition === 0) {
      // BRANCH IF ANTENNA ALREADY IN POSITION 1
      await p63spot4(hardware);
      return;
    }

    // ASTRONAUT:    PLEASE CRANK THE
    //              SILLY THING AROUND
    const response = await dsky.performAction("CODE500");

    if (response === "TERMINATE") {
      gotopooh(); // TERMINATE
      return;
    }

    if (response === "PROCEED") {
      continue; // PROCEED    SEE IF HE'S LYING
    }

    // (fall through on ENTER to p63spot4)
    break;
  }

  await p63spot4(hardware); // ENTER    INITIALIZE LANDING RADAR
}

async function p63spot4(hardware) {
  hardware.initLandingRadar(); // INITIALIZE LANDING RADAR (SETPOS1)

  // OFF TO SEE THE WIZARD...
  burnbaby();
}

function gotopooh() {
  // return to idle program (P00)
  throw new Error("Program terminated by crew");
}

function burnbaby() {
  // MASTER IGNITION ROUTINE — BURN_BABY_BURN
  console.log("Engine ignition sequence started");
}
