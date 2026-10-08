# Curbside Pickup — Design Prompt Pack

Prompts for designing the curbside pickup exception experience.
Source material: Product Guild Workshop Case 10 (Uber-inspired), "Digital UX Meets Physical Operations",
plus whiteboard output and a ~90-screen competitive scan (Mobbin, "curbside pickup", iOS).

Three prompts here:
1. **The Master Prompt** — full context, use this by default.
2. **The Short Prompt** — for Figma Make / v0 / Lovable where input length matters.
3. **The Critique Prompt** — point it at work you've already done.

Edit anything in `[BRACKETS]` before using.

---

## 1. THE MASTER PROMPT

```text
# ROLE

You are a senior product designer with deep experience in retail operations — the
kind of designer who has stood in a store parking lot with a stopwatch, not just
in Figma. You understand that a grocery pickup app is not a shopping app; it is a
coordination protocol between two parties who cannot see each other, running over
an unreliable physical network.

Your job is to design the end-to-end curbside pickup experience for
[Albertsons / RETAILER NAME], with the exception flow as the primary deliverable.

# THE CORE PROBLEM

A digital order can be marked "complete" while the customer is still struggling
with pickup, parking, wait time, associate coordination, or substitutions.

The app cannot control every physical-world variable. But it can reduce confusion
and coordinate better. That gap — between what the system believes and what is
actually happening in the parking lot — is the design space.

Design for the gap. Not the happy path.

# THE SCENARIO YOU MUST SOLVE

A customer arrives for curbside pickup. All pickup bays are full. Their order is
delayed. They have a sleeping baby in the car.

Three failures stack simultaneously: no physical space, no ready order, and a
customer who cannot be disturbed. Any design that only handles one of these is
incomplete.

Treat this as the stress test, not the only case. Your system must generalise.

# NON-NEGOTIABLE CONSTRAINTS

These are derived from the scenario and are hard design rules, not preferences:

1. NO HORN. The customer cannot honk and must not be honked at.
2. NO CALL. A ringing phone wakes the baby. Voice is a last-resort escalation,
   never a default.
3. NO EXIT. Assume the customer physically cannot leave the vehicle. Any flow
   requiring them to walk inside is a failure state, not a fallback.
4. ONE-HANDED, EYES-UP. The customer is in a driver's seat, possibly moving,
   possibly in the dark, possibly reaching backwards to a car seat. Design for
   glanceability and large tap targets. Assume they will read nothing longer
   than a sentence.
5. NEVER SILENT. The one thing the system must never do is nothing. Silence is
   the actual failure mode. Every state must have a visible owner and a next
   event.
6. NEVER LIE. Do not show a confident ETA you cannot honour. Prefer an honest
   range over a precise fiction.

# THE FIVE VERBS (THE CORE DELIVERABLE)

For every exception you identify, specify all five. This is the heart of the
brief — a design that does not answer all five for each exception is incomplete.

- DETECT   — What signal tells the system something is wrong, and how early?
             Prefer signals available BEFORE the customer arrives.
- ASK      — What does the system ask the customer, and when? What is the
             smallest number of questions that unlocks the most options?
             Every question must change a downstream decision; if it does not,
             delete it.
- NOTIFY   — Who is told what, on which channel, with what urgency? Specify
             both directions: app→customer AND app→associate.
- ESCALATE — What happens at t+2min, t+5min, t+10min, t+15min? Who gets pulled
             in at each rung? What authority does each rung have (apology,
             refund, substitution, delivery conversion)? Escalation must be
             automatic, not customer-initiated.
- REMEMBER — What persists to next time, for this customer, this store, this
             bay, this time-of-day? This is the least-built capability in the
             entire market. Treat it as a first-class feature, not a settings
             screen.

# THE JOURNEY

Current-state happy path:
1. Order placed + payment          (customer emotion: excited, "feeling complete")
2. Select the slot
3. Store selection
4. Drive to store
5. Park in a pickup bay            <-- the industry does not design here
6. Enter parking bay # + vehicle   <-- the industry does not design here
7. Load and go

Steps 5 and 6 are where the experience actually breaks and where almost no
competitor has done serious work. Weight your effort accordingly. Do not spend
your energy redesigning store pickers and time-slot grids — those are solved.

Critically: the customer's emotional peak is at step 1 ("feeling complete") and
their lowest point is at step 5-6. The app currently celebrates at exactly the
moment it has done the least, and goes quiet at exactly the moment it is needed
most. Invert this.

# COMPETITIVE EVIDENCE (USE IT, DON'T REDISCOVER IT)

From a scan of ~90 shipped curbside/pickup screens across grocery, QSR, retail,
pharmacy and mobility:

PATTERNS WORTH STEALING
- Ready-time WINDOWS, not point estimates. Starbucks: "Ready around 10:23 AM
  (in 4-7 minutes)". 7-Eleven: "ready by 5:36 PM - 5:41 PM". Chick-fil-A:
  "3-6 min estimated wait". The industry has already decided variance is the
  product. Absorb variance in the promise rather than hiding it.
- "Don't ring the bell" instructions. Shake Shack: "Deliver to my door /
  I'll come outside / Contact-free". Careem: "don't ring bell". Postmates:
  "Please text me when you arrive!". NOTE: this constrained-customer vocabulary
  is fully solved in DELIVERY and completely absent in CURBSIDE. Porting it is
  the single cheapest win available for the sleeping-baby case.
- Honest capability degradation. Crumbl greys out "Curbside — not available at
  this time" with a reason and offers carry-out instead. Burger King shows an
  unavailable item greyed inline rather than silently deleting it. The pattern
  is: DISABLE + EXPLAIN + OFFER THE ADJACENT PATH. This is the correct answer to
  "all bays are full" — not a spinner, not silence.
- Explicit handoff confirmation. Zomato is the only app in the scan that asks
  "Have you received your order? [No, I need help] [Yes, all good]". That single
  question is the entry point to the entire escalation system.
- Preference persistence. Walmart: "I'll bring my own reusable bags" with a
  "Save my bag preference for next time" toggle. This is the ONLY true "remember"
  pattern found in 90 screens.
- Demand shaping via price. Instacart prices slots dynamically ($0.00 in the
  demand trough vs $3.99 at peak) to flatten the arrival curve.
- Operator-metric protection. DoorDash tells couriers: "Your on-time rate
  includes a buffer for wait time spent waiting at the store." The platform
  explicitly refuses to punish a worker for store latency.

ANTI-PATTERNS TO AVOID
- Zip ships a screen that says "Purchase complete!" the instant payment clears.
  Panera shows "YOUR ORDER IS READY!" while the customer is still in traffic.
  Both are the exact fallacy this brief exists to kill. "Complete" must mean
  handoff, never payment, never shelf-ready.
- DoorDash's current state of the art for bay contention is a text warning:
  "DO NOT park in curbside pickup spots." The industry's best answer to a full
  lot is to tell people not to use the feature. Beat that.
- Abandonment handled as legal policy rather than UX (lululemon's 6-month resale
  notice, Wish's 15-day refund window). Design the recovery, don't just disclaim.

# WHAT TO PRODUCE

1. PERSONA
   Define the primary persona through their CONSTRAINTS, not their demographics.
   The sleeping baby is not a cute detail — it is the constraint set that
   determines the design. Name the constraint classes so they generalise
   (e.g. "cannot be disturbed", "cannot exit vehicle", "time-boxed", "mobility
   limited"). Design for the constraint, and the persona scales.

2. JOURNEY MAP
   Steps 1-7, with: customer action / customer emotion / system state /
   associate state / what the customer can see / what the store can see /
   where it breaks. Explicitly mark the divergence between customer-perceived
   state and system-recorded state at every step.

3. EXCEPTION STATE MODEL
   A proper state machine, not a list. Include at minimum:
   - Bay full / no bay available
   - Order delayed (known before arrival vs discovered after arrival)
   - Customer arrived early / arrived late / no-show
   - Substitution required (pre-arrival vs at-bay)
   - Item missing or damaged
   - Customer cannot be disturbed (quiet mode)
   - Customer cannot exit vehicle
   - Associate cannot locate the vehicle
   - Wrong store
   - Handoff disputed ("I didn't get it")
   - Order abandoned
   For each state: entry trigger, exit conditions, timeout behaviour, and who
   owns resolution. States must be able to COMPOSE — the scenario is three at
   once, and your model must represent that without combinatorial explosion.

4. THE FIVE-VERB MATRIX
   Every exception x {detect, ask, notify, escalate, remember}. Table form.
   This is the primary deliverable. Make it complete.

5. KEY SCREENS
   Design [6-10] screens covering, at minimum:
   - Pre-arrival: the "on my way" / arrival-intent moment, including capture of
     quiet-mode and vehicle constraints
   - Arrival with all bays full (the hero screen)
   - Waiting with an unknown delay (the "am I invisible?" moment)
   - The associate-side view of the same moment (do not design only the
     customer side — this is a two-sided coordination problem and a one-sided
     design is a non-answer)
   - Substitution decision from inside the vehicle
   - Handoff confirmation
   - Recovery / make-good when it went badly
   For each: state the job of the screen in one sentence, then the design.

6. OPERATIONAL SIGNALS
   What the store sees and acts on in real time: bay occupancy, queue depth,
   dwell time per vehicle, picker backlog, staffing vs. demand. Specify the
   threshold at which each signal triggers an intervention, and what the
   intervention is. A signal without a trigger and an action is a dashboard,
   not an operational signal.

7. METRICS
   Propose a metric tree with three layers:
   - North star: a single metric defining a successful handoff. Note that
     "orders completed" is disqualified by this brief.
   - Lagging/outcome: cancellation and refund rate before pickup, drop-off at
     slot selection, repeat curbside rate, NPS/CSAT — the last of these
     segmented by whether an exception fired, since blended CSAT will hide the
     entire problem.
   - Leading/operational: dwell time, time-to-first-contact, customer-initiated
     contact rate, promise-window width vs actual variance, exception recovery
     rate, escalation rate by rung, preference-reuse rate.
   Include GUARDRAIL metrics that prevent gaming — e.g. a cap on promise-window
   inflation (you can hit 100% on-time by promising 60-minute windows), and an
   associate workload ceiling (a CX win that silently requires double staffing
   is not a win).

# HOW TO THINK

- The hard problem is not information display, it is COORDINATION between two
  parties who cannot see each other. Every screen should be judged on whether
  it closes that gap.
- Prefer prevention to recovery, but never let prevention be an excuse for
  not designing recovery. Both are required.
- The best exception handling is invisible: the system noticed and resolved it
  before the customer knew. Your detect layer should be doing most of the work.
- Every notification is an admission that something could not be solved
  automatically. Budget them. A notification the customer could have been
  spared is a design failure.
- Giving the customer OPTIONS is more valuable than giving them INFORMATION.
  "Your order is 12 minutes late" is worse than "Your order is 12 minutes late
  — [wait here] [we'll bring it to you in row C] [convert to delivery, free]
  [cancel, refunded now]". Agency beats transparency.
- An apology is not a recovery. Specify what the system actually DOES.

# OUTPUT FORMAT

[Choose one:]
- Markdown document with tables and ASCII wireframes.
- Figma frames, mobile-first, [iOS / design system name].
- Working React prototype, clickable, with the exception states switchable so
  the flow can be demoed live.

Mobile-first throughout. Assume one hand, bright sunlight, poor signal, and a
customer whose attention is on a child, not a screen.

# BEFORE YOU DESIGN

State your assumptions first — about store operations, associate staffing,
system capabilities (does the app know bay occupancy? does it know the
customer's live location?), and anything else load-bearing. Flag which of your
assumptions, if wrong, would most change the design.

Then design. Show your reasoning for the exception state model before you draw
any screens.
```

---

## 2. THE SHORT PROMPT

For tools with tight input limits, or a faster first pass.

```text
Design the curbside grocery pickup experience for [RETAILER], focusing on the
exception flow.

Scenario: customer arrives, all pickup bays are full, their order is delayed,
and they have a sleeping baby in the car.

Hard constraints: no horn, no phone call, the customer cannot leave the vehicle,
one-handed and glanceable, never silent, never show an ETA you can't honour.

The core failure this fixes: apps mark an order "complete" at payment while the
customer is still stuck in the parking lot. "Complete" must mean handoff.

For every exception, specify five things:
DETECT (what signal, how early) / ASK (fewest questions that unlock the most
options) / NOTIFY (who, which channel, both directions — customer AND associate)
/ ESCALATE (what happens at t+2, t+5, t+10, t+15 min, and who has authority to
do what) / REMEMBER (what persists for next time — customer, store, bay,
time-of-day).

Design both sides. This is a two-sided coordination problem between people who
cannot see each other; a customer-only design is not an answer.

Give the customer options, not just information. "Your order is 12 min late" is
worse than "12 min late — [wait] [we'll come to row C] [free delivery] [refund now]".

Steal: ready-time windows not point ETAs (Starbucks "in 4-7 minutes"); delivery's
"don't ring the bell" instruction pattern, which no curbside app has ported;
honest degradation (disable + explain + offer the adjacent path); an explicit
"did you get your order?" handoff confirmation.

Produce: persona defined by constraints / journey map steps 1-7 / exception state
machine (states must compose — the scenario is three at once) / the five-verb
matrix / [6-10] key screens including the associate view / operational signals
with thresholds and triggered actions / a metric tree with guardrails against
gaming.

State your assumptions before you design.
```

---

## 3. THE CRITIQUE PROMPT

Point this at a design you've already made.

```text
You are reviewing a curbside pickup design against this standard:

The system must handle a customer arriving to find all bays full, their order
delayed, and a sleeping baby in the car — meaning no horn, no phone call, and
no leaving the vehicle.

Review the attached design and answer:

1. For each exception it handles, is DETECT / ASK / NOTIFY / ESCALATE / REMEMBER
   each specified? Name every gap.
2. Can the exception states COMPOSE? The scenario is three simultaneous failures.
   Does the model handle that, or does it assume one at a time?
3. Is there any state where the system goes silent or the customer cannot tell
   who owns the next action? Find them.
4. Does it design the ASSOCIATE side, or only the customer side?
5. Does anything mark the order "complete" before physical handoff?
6. Does it give the customer OPTIONS or merely INFORMATION at each failure point?
7. Is the escalation automatic, or does it require the customer to initiate?
8. Does anything persist to next time, or does every visit start from zero?
9. Which metrics could be gamed, and how? Where are the guardrails?
10. Does it require the customer to leave the car, hear a phone, or be honked at
    anywhere in any flow? Those are disqualifying.

Be specific and blunt. Rank findings by severity. For each, say what you'd change.
```

---

## Usage notes

- **For Figma Make / v0 / Lovable:** use the Short Prompt and add your design
  system or brand reference. These tools degrade with very long inputs.
- **For Claude / ChatGPT as a thinking partner:** use the Master Prompt and ask
  for the state model and five-verb matrix *before* any screens. The matrix is
  what makes the screens good.
- **For a human designer:** the Master Prompt works as a written brief as-is.
- **For the workshop itself:** the Critique Prompt is a strong readout exercise —
  run each group's output through it.
- Replace `[6-10]` with a real number. Unbounded screen counts produce shallow work.
- The biggest failure mode when running these: the model designs a beautiful
  happy path and bolts on one error toast. If that happens, re-prompt with only
  the exception scenario and explicitly forbid designing steps 1-3.
