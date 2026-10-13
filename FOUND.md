# Apollo 11 Comment Hunt Findings (Luminary099)

## The 10 Famous Comments Found

| # | Comment | File | Line Number | Context / Meaning |
|---|---------|------|-------------|-------------------|
| 1 | `NUMERO MYSTERIOSO` | `Luminary099/LUNAR_LANDING_GUIDANCE_EQUATIONS.agc` | **666** | Tuning constant (`GAINBRAK,1`) for braking phase; empirical gain constant without a clear analytical derivation. |
| 2 | `TEMPORARY, I HOPE HOPE HOPE` | `Luminary099/LUNAR_LANDING_GUIDANCE_EQUATIONS.agc` | **179–180** | Temporary call to `STOPRATE` that ended up flying to the Moon. |
| 3 | `TRASHY LITTLE SUBROUTINES` | `Luminary099/LUNAR_LANDING_GUIDANCE_EQUATIONS.agc` | **1375** | Section header for small utility routines the author was not particularly proud of. |
| 4 | `OFF TO SEE THE WIZARD...` | `Luminary099/THE_LUNAR_LANDING.agc` | **254** | Branching jump into `BURNBABY` (Master Ignition Routine) to ignite the descent engine. |
| 5 | `PLEASE CRANK THE SILLY THING AROUND` | `Luminary099/THE_LUNAR_LANDING.agc` | **245–246** | Prompts the astronaut via DSKY code 500 to manually rotate the landing radar antenna. |
| 6 | `HELLO THERE.` | `Luminary099/BURN_BABY_BURN--MASTER_IGNITION_ROUTINE.agc` | **904** | Entry point greeting for the P40 auto-burn sequence. |
| 7 | `GOODBYE.  COME AGAIN SOON.` | `Luminary099/BURN_BABY_BURN--MASTER_IGNITION_ROUTINE.agc` | **925** | Exit farewell jump (`BANKJUMP`) concluding ignition logic. |
| 8 | `HONI SOIT QUI MAL Y PENSE` | `Luminary099/BURN_BABY_BURN--MASTER_IGNITION_ROUTINE.agc` | **66** | "Shame on him who thinks evil of it" (Order of the Garter motto) placed above the code by authors Adler & Eyles. |
| 9 | `NOLI SE TANGERE` | `Luminary099/BURN_BABY_BURN--MASTER_IGNITION_ROUTINE.agc` | **72** | Latin warning: "Do not touch" preceding the master ignition tables. |
| 10 | `POODOO` / `GOPOODOO` | `Luminary099/ALARM_AND_ABORT.agc` | **150, 162** | The emergency abort and alarm handler routine name. |

---

## Bonus: Arcade-Game-Named File

- **File:** `Luminary099/PINBALL_GAME_BUTTONS_AND_LIGHTS.agc`
- **What it does:** The **DSKY (Display and Keyboard) User Interface**. Handles Verb/Noun input parsing, numerical displays, status indicators, and program interaction. Nicknamed "PINBALL" because the flashing numeric displays and keys resembled playing an arcade pinball machine.
