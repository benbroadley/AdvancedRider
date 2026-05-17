# Advanced Rider — Revision Aid

A web app for studying advanced motorcycle riding theory. Covers the key techniques, rules, and principles used in advanced rider training.

Built with Vite, React, TypeScript, and Tailwind CSS.

---

## Features

### Topic Flashcards
Six riding topics, each with key points and a set of flashcards:

| Topic | Difficulty |
|---|---|
| Observation | Foundation |
| Road Positioning | Foundation |
| Hazard Awareness | Foundation |
| Cornering | Intermediate |
| Braking | Intermediate |
| Overtaking | Advanced |

Each topic has an **Overview** tab (description + key points) and a **Flashcards** tab. Flashcards use a flip-card format — tap to reveal the answer, then mark it as *Got it* or *Still learning*. Progress is tracked per topic for the current session.

### IPSGA Game
A multiple-choice quiz covering all five phases of the System of Motorcycle Control:

- **I** — Information
- **P** — Position
- **S** — Speed
- **G** — Gear
- **A** — Accelerate

20 questions (4 per phase), shuffled each time. Each question is tagged to its phase so you can see where to focus. After answering, a full explanation is shown. The results screen breaks down your score per phase.

### UK Highway Code Reference
A searchable, full-text reference covering all sections of the Highway Code (rules 1–307 + Annexes):

- Pedestrians · Animals · Cyclists · Motorcyclists · General rules
- Using the road · Road junctions · Roundabouts · Pedestrian crossings
- Road users requiring extra care · Waiting and parking
- Motorways · Breakdowns · Road works, level crossings & tramways · Annexes

Legal requirements (MUST / MUST NOT rules) are highlighted in red. Use the search bar to find rules by keyword, topic, or rule number. Section navigation is available in the sidebar (desktop) or via the menu button (mobile).

### Random Rule
Picks a random numbered rule from the Highway Code and displays it at its own URL (e.g. `/rule/88`). Use it to encounter rules you might not actively seek out.

- The URL updates with each rule, so rules can be bookmarked or shared
- Prev / next buttons step through adjacent rules sequentially
- **Another random rule** picks a new rule at random
- Copy link button copies the current rule's URL to the clipboard

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install and run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Serve it with any static file host.

---

## URL Structure

| URL | Page |
|---|---|
| `/` | Home |
| `/ipsga` | IPSGA Game |
| `/highway-code` | Highway Code reference |
| `/topics/:id` | Topic detail (e.g. `/topics/cornering`) |
| `/rule/:number` | Specific Highway Code rule (e.g. `/rule/88`) |
| `/rule` | Redirects to a random rule |

---

## Notes

- Session progress (flashcard scores) is held in memory and resets on page refresh. Persistence is not currently implemented.
- The Highway Code content is a revision summary based on the current UK Highway Code. Always refer to the official GOV.UK Highway Code for the authoritative text.
- For revision purposes only. Always ride within the law and to your ability.
