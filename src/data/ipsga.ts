export type Phase = 'I' | 'P' | 'S' | 'G' | 'A'

export const phaseInfo: Record<Phase, { name: string; colour: string; bg: string; border: string; description: string }> = {
  I: {
    name: 'Information',
    colour: 'text-sky-400',
    bg: 'bg-sky-500/15',
    border: 'border-sky-500/40',
    description: 'Gather, use, and give information. Everything starts here.',
  },
  P: {
    name: 'Position',
    colour: 'text-violet-400',
    bg: 'bg-violet-500/15',
    border: 'border-violet-500/40',
    description: 'Take the correct road position for the hazard ahead.',
  },
  S: {
    name: 'Speed',
    colour: 'text-amber-400',
    bg: 'bg-amber-500/15',
    border: 'border-amber-500/40',
    description: 'Adjust to a safe speed before reaching the hazard.',
  },
  G: {
    name: 'Gear',
    colour: 'text-emerald-400',
    bg: 'bg-emerald-500/15',
    border: 'border-emerald-500/40',
    description: 'Select the gear that gives you the right power and control.',
  },
  A: {
    name: 'Accelerate',
    colour: 'text-orange-400',
    bg: 'bg-orange-500/15',
    border: 'border-orange-500/40',
    description: 'Apply positive drive to stabilise the machine and make progress.',
  },
}

export interface Question {
  id: string
  phase: Phase
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const questions: Question[] = [
  // ── Information ──────────────────────────────────────────────────────────
  {
    id: 'i1',
    phase: 'I',
    question: 'What are the three things you should do with information in the Information phase?',
    options: [
      'See it, judge it, act on it',
      'Gather it, use it, and give it',
      'Observe it, record it, and report it',
      'Identify it, signal it, and respond to it',
    ],
    correctIndex: 1,
    explanation:
      'The Information phase has three components: gathering information (from mirrors, road, signs, other road users), using that information to plan your actions, and giving information to others through signals, position, and speed.',
  },
  {
    id: 'i2',
    phase: 'I',
    question: 'You are approaching a junction on a busy road. In the Information phase, what should you do FIRST?',
    options: [
      'Check mirrors and assess what is behind and to the sides',
      'Signal your intention to turn',
      'Reduce your speed to a crawl',
      'Move to the left-hand lane immediately',
    ],
    correctIndex: 0,
    explanation:
      'The Information phase begins with gathering — you must know the full picture before you can plan. Check mirrors to understand what is behind you before committing to any change of speed or direction.',
  },
  {
    id: 'i3',
    phase: 'I',
    question: 'A car is parked ahead partially blocking your lane. Which piece of information is MOST critical to the Information phase here?',
    options: [
      'The make and colour of the parked car',
      'Whether oncoming traffic will allow you to pass safely',
      'The speed limit on this road',
      'Whether the car has its hazard lights on',
    ],
    correctIndex: 1,
    explanation:
      'The most safety-critical information is whether oncoming traffic gives you a safe gap to move out and pass. This determines your speed and position decisions in the phases that follow.',
  },
  {
    id: 'i4',
    phase: 'I',
    question: 'Information gathering is described as a continuous process. What does this mean in practice?',
    options: [
      'You only need to check mirrors at set intervals',
      'You gather information once at the start of a journey',
      'You constantly update your assessment as the situation evolves',
      'Information is gathered only when a hazard is visible',
    ],
    correctIndex: 2,
    explanation:
      'The system is a loop, not a one-shot process. As you act on information, the situation changes and new information arrives. Constant reassessment keeps your plan current.',
  },

  // ── Position ─────────────────────────────────────────────────────────────
  {
    id: 'p1',
    phase: 'P',
    question: 'Approaching a sharp left-hand bend on a country lane, which position gives you the best view?',
    options: [
      'Keep to the left and hug the verge',
      'Move toward the centre line to open up your sightline',
      'Move to the right of your lane to open up your sightline',
      'Position does not affect your view on left-hand bends',
    ],
    correctIndex: 2,
    explanation:
      'On a left-hand bend, moving toward the right of your lane (without crossing the centre line) increases the radius of your line of sight around the bend, allowing you to see further and earlier.',
  },
  {
    id: 'p2',
    phase: 'P',
    question: 'What is the "normal" riding position (NP) and why is it the default?',
    options: [
      'The centre of the lane — it gives the most room on both sides',
      'Approximately one metre from the kerb — it balances visibility and safety margins',
      'The far left — closest to the kerb for maximum distance from oncoming traffic',
      'Immediately behind the vehicle ahead for better aerodynamic efficiency',
    ],
    correctIndex: 1,
    explanation:
      'The normal position, around one metre from the kerb, provides a buffer from the kerb and hazards at the side, while maintaining distance from oncoming traffic and giving good forward visibility.',
  },
  {
    id: 'p3',
    phase: 'P',
    question: 'You intend to overtake a slow-moving lorry. Before you pull out, which position should you adopt in the Position phase?',
    options: [
      'Close up behind the lorry to reduce your overtaking distance',
      'Move slightly left to increase your view past the lorry',
      'Move slightly toward the centre line to increase your view past the lorry',
      'Position is irrelevant before an overtake',
    ],
    correctIndex: 2,
    explanation:
      'Easing toward the centre line before pulling out maximises your forward sightline past the lorry, letting you confirm the road ahead is clear before committing to the overtake.',
  },
  {
    id: 'p4',
    phase: 'P',
    question: 'When should the position phase be completed relative to the hazard?',
    options: [
      'Simultaneously with adjusting speed',
      'After speed has been set',
      'Before you reach the hazard, with enough time for it to be effective',
      'It can be done at any point up to and including the hazard',
    ],
    correctIndex: 2,
    explanation:
      'Position must be adopted in good time — it should be complete before you need the benefit it provides (the improved sightline or safety margin). Late positioning is almost as bad as no positioning.',
  },

  // ── Speed ─────────────────────────────────────────────────────────────────
  {
    id: 's1',
    phase: 'S',
    question: 'The vanishing point on a bend appears to be stationary as you approach. What does this tell you?',
    options: [
      'The bend is tightening — you may need to reduce speed further',
      'The bend is opening up — you can safely maintain speed',
      'You are approaching at exactly the right speed',
      'The road ahead is clear',
    ],
    correctIndex: 0,
    explanation:
      'If the vanishing point is stationary or moving toward you, the corner is tightening or you are closing on it faster than it is opening. You must reduce speed until the vanishing point starts to move away from you.',
  },
  {
    id: 's2',
    phase: 'S',
    question: 'By the time you reach the hazard, where should your speed adjustment be?',
    options: [
      'Largely complete, with only minor adjustments remaining',
      'Completely finished — you should be at your target speed before the hazard',
      'Still in progress — it is fine to brake into the hazard',
      'Speed adjustment happens after the hazard when you accelerate away',
    ],
    correctIndex: 1,
    explanation:
      'All braking should be done in a straight line, before you lean or commit to the hazard. Entering a corner still braking compromises grip and stability.',
  },
  {
    id: 's3',
    phase: 'S',
    question: 'Which method of speed reduction is preferred in the Speed phase, assuming time allows?',
    options: [
      'Engine braking alone — avoid using the brakes where possible',
      'Rear brake only — the front brake is too powerful for normal use',
      'Progressive use of both brakes together, starting gently and increasing pressure',
      'Maximum braking as early as possible to get it over with',
    ],
    correctIndex: 2,
    explanation:
      'Progressive use of both brakes — squeezing the front and pressing the rear simultaneously — transfers weight smoothly, maximises stopping power, and keeps the machine stable. Engine braking alone is rarely sufficient.',
  },
  {
    id: 's4',
    phase: 'S',
    question: 'Why does stopping distance increase disproportionately with speed?',
    options: [
      'Because brakes overheat at higher speeds',
      'Because kinetic energy increases with the square of speed',
      'Because tyre contact patch decreases at higher speeds',
      'Because reaction time increases when travelling faster',
    ],
    correctIndex: 1,
    explanation:
      'Kinetic energy = ½mv². Doubling speed quadruples the kinetic energy that brakes must dissipate, so stopping distance increases roughly four-fold — not two-fold as many riders assume.',
  },

  // ── Gear ──────────────────────────────────────────────────────────────────
  {
    id: 'g1',
    phase: 'G',
    question: 'What is the primary purpose of selecting a gear in the Gear phase?',
    options: [
      'To prepare the engine for brisk acceleration when needed',
      'To match the gear to the speed you are travelling',
      'To use the engine as a brake through the hazard',
      'To lower the engine note so passengers can communicate',
    ],
    correctIndex: 0,
    explanation:
      'The correct gear should place the engine in its power band so that positive acceleration is immediately available. This gives you the ability to make progress as soon as it is safe to accelerate.',
  },
  {
    id: 'g2',
    phase: 'G',
    question: 'When in the sequence should you select the gear for a hazard?',
    options: [
      'Before you reduce speed',
      'After you have reached your target speed',
      'At the same time as you are braking',
      'While you are leaned into the corner',
    ],
    correctIndex: 1,
    explanation:
      'Speed first, then gear. Brake to your target speed, then select the appropriate gear. This avoids the instability of changing gear while under maximum braking, and ensures the gear matches your actual speed.',
  },
  {
    id: 'g3',
    phase: 'G',
    question: 'You approach a sharp bend and arrive at your target speed in 3rd gear. Is it always correct to change down a gear?',
    options: [
      'Yes — you should always be in the lowest possible gear through a bend',
      'No — if 3rd gear puts the engine in a good power range for that speed, it may be the right gear',
      'No — you should always hold the highest gear to reduce engine braking',
      'Yes — lower gears improve stability through corners',
    ],
    correctIndex: 1,
    explanation:
      'The correct gear is the one that puts the engine in a responsive power range at your chosen speed — not necessarily the lowest gear. Over-gearing reduces throttle response; under-gearing causes excessive engine braking.',
  },
  {
    id: 'g4',
    phase: 'G',
    question: 'Can the Gear phase ever be omitted from the system?',
    options: [
      'Never — you must always change gear before a hazard',
      'Yes — if the current gear is already appropriate, no change is needed',
      'Yes — on motorways gear changes are not required',
      'Only if you are riding an automatic motorcycle',
    ],
    correctIndex: 1,
    explanation:
      'The system is flexible. If your current gear already provides the right engine response at your target speed, the Gear phase requires no action. The phases are always assessed; they are not always acted upon.',
  },

  // ── Accelerate ────────────────────────────────────────────────────────────
  {
    id: 'a1',
    phase: 'A',
    question: 'When should you begin to apply the throttle in the Accelerate phase when exiting a bend?',
    options: [
      'As soon as you enter the bend, to maintain momentum',
      'Once you can see a clear road ahead and the machine is upright enough to take drive',
      'Only after you are fully upright and the bend is complete',
      'Whenever you feel comfortable — there is no specific trigger point',
    ],
    correctIndex: 1,
    explanation:
      'You begin to apply drive once you can see that the road ahead is safe and the motorcycle is in a position to accept it. This is typically at or shortly after the apex, as the vanishing point opens up. Waiting until fully upright throws away useful road.',
  },
  {
    id: 'a2',
    phase: 'A',
    question: 'What does "positive use of the throttle" mean in the context of the Accelerate phase?',
    options: [
      'Applying maximum throttle as quickly as possible to clear the hazard',
      'A smooth, purposeful increase in throttle that loads the suspension and stabilises the machine',
      'Maintaining a constant throttle position through the corner',
      'Using the throttle to control wheelspin out of corners',
    ],
    correctIndex: 1,
    explanation:
      '"Positive" means deliberate and progressive — not aggressive. Smooth throttle application loads the rear suspension, increases tyre contact patch, and stabilises the chassis. It also signals your intentions to following traffic.',
  },
  {
    id: 'a3',
    phase: 'A',
    question: 'Why is it important to avoid closing the throttle abruptly mid-corner?',
    options: [
      'It will cause the front brake to activate automatically',
      'Sudden engine braking can upset the balance of the machine and reduce rear grip',
      'It reduces fuel economy significantly',
      'It prevents the gear from engaging properly',
    ],
    correctIndex: 1,
    explanation:
      'Abrupt throttle closure causes a sudden weight transfer to the front and removes drive from the rear, which can cause the rear tyre to lose grip or the machine to change line unexpectedly. Smooth, progressive throttle control is essential.',
  },
  {
    id: 'a4',
    phase: 'A',
    question: 'The Accelerate phase is described as completing the system. What happens after it?',
    options: [
      'The system ends and you ride normally until the next hazard',
      'You immediately begin the system again for the next hazard or feature',
      'You check mirrors once and then focus on the road ahead',
      'You signal to confirm you have exited the hazard safely',
    ],
    correctIndex: 1,
    explanation:
      'The system is continuous and cyclical. As you complete the Accelerate phase from one hazard, you are already gathering information for the next. There is no pause — riding is an unbroken chain of IPSGA applications.',
  },
]
