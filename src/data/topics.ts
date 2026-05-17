export type Difficulty = 'foundation' | 'intermediate' | 'advanced'

export interface KeyPoint {
  id: string
  text: string
}

export interface Flashcard {
  id: string
  question: string
  answer: string
}

export interface Topic {
  id: string
  title: string
  subtitle: string
  icon: string
  difficulty: Difficulty
  description: string
  keyPoints: KeyPoint[]
  flashcards: Flashcard[]
  color: string
}

export const topics: Topic[] = [
  {
    id: 'observation',
    title: 'Observation',
    subtitle: 'See and be seen',
    icon: '👁',
    difficulty: 'foundation',
    color: 'blue',
    description:
      'Advanced observation is the foundation of all safe riding. The IPSGA system and systematic scanning techniques allow you to process information from multiple sources simultaneously.',
    keyPoints: [
      { id: 'obs1', text: 'Use the full 12-second forward scan — far, mid, near zones' },
      { id: 'obs2', text: 'Lifesaver checks: rear observation before every major manoeuvre' },
      { id: 'obs3', text: "Use mirrors every 5–8 seconds to maintain awareness of what's behind" },
      { id: 'obs4', text: 'Identify and act on information: features, hazards, road signs' },
      { id: 'obs5', text: 'Read road surfaces — drain covers, painted lines, worn tarmac' },
      { id: 'obs6', text: 'Peripheral vision: keep eyes moving, never stare at a single point' },
    ],
    flashcards: [
      {
        id: 'obs-f1',
        question: 'What are the three scanning zones in advanced observation?',
        answer: 'Far zone (12+ seconds ahead), mid zone (4–12 seconds), near zone (0–4 seconds). Continuous scanning across all three builds complete situational awareness.',
      },
      {
        id: 'obs-f2',
        question: 'When must you perform a lifesaver (rear observation) check?',
        answer: 'Before every lane change, overtake, turn, or any manoeuvre that changes your road position. It checks the blind spot not covered by mirrors.',
      },
      {
        id: 'obs-f3',
        question: 'What does "reading the road" mean in an advanced context?',
        answer: 'Interpreting all available information — road markings, surface condition, vegetation, shadows, road furniture — to anticipate hazards before they become a risk.',
      },
      {
        id: 'obs-f4',
        question: 'How frequently should you check your mirrors and why?',
        answer: 'Every 5–8 seconds in normal conditions, and immediately before any speed or direction change. Regular mirror use means you always know what is behind you and can plan your response to a threat from the rear.',
      },
      {
        id: 'obs-f5',
        question: 'What is target fixation and how do you prevent it?',
        answer: 'Target fixation is the tendency to steer toward whatever you are looking at — typically a hazard or obstacle. Prevent it by deliberately moving your gaze to where you want to go, not at the thing you want to avoid. Eyes lead the motorcycle.',
      },
      {
        id: 'obs-f6',
        question: 'What information can roadside vegetation provide on a country road?',
        answer: 'Overhanging trees or tall hedges suggest a narrowing or enclosed lane. A gap in a hedge may reveal a farm entrance or junction. Leaf patterns and shadows across the road can indicate overhead obstructions. Brambles on the verge can signal an infrequently used passing place with hidden potholes.',
      },
      {
        id: 'obs-f7',
        question: 'What does a shadow falling across the road ahead indicate?',
        answer: 'A shadow may indicate an overhead obstruction (bridge, tree) or a vehicle or pedestrian about to emerge from a side road or driveway that has not yet come into your direct line of sight.',
      },
      {
        id: 'obs-f8',
        question: 'What is peripheral vision and why is it important for riders?',
        answer: 'Peripheral vision detects movement at the edges of your field of view. Because it is motion-sensitive rather than detail-sensitive, it often detects hazards — a pedestrian stepping off a kerb, a vehicle pulling out — before your focused gaze reaches them. Keep your eyes moving to engage it.',
      },
      {
        id: 'obs-f9',
        question: 'What is "tunnelling" and when is it most likely to occur?',
        answer: 'Tunnelling is the narrowing of your field of view under stress, fatigue, or high speed — you focus on a small area directly ahead and miss peripheral hazards. It is most common at high speeds, in poor conditions, or when mentally fatigued. Counter it by consciously widening your scan.',
      },
      {
        id: 'obs-f10',
        question: 'How should you use your mirrors as part of the Information phase of IPSGA?',
        answer: 'Mirrors are a primary source of information about what is behind and to the sides. Check them at the start of every IPSGA application — before positioning, adjusting speed, or signalling — so that your actions take account of following traffic.',
      },
      {
        id: 'obs-f11',
        question: 'What does a dirty or cracked road surface ahead typically indicate?',
        answer: 'It may indicate heavy vehicle use (an industrial entrance or farm access), poor drainage or frost damage, or the presence of loose material such as mud, gravel, or diesel from large vehicle tyres. All reduce available grip.',
      },
      {
        id: 'obs-f12',
        question: 'Why should you scan for clues beyond the immediate road surface when approaching a junction?',
        answer: 'Tops of vehicles, moving shadows, engine noise, or the beginning of a vehicle\'s nose all give advance warning of emerging traffic before the vehicle itself is visible. Acting on these early clues maximises your response time.',
      },
    ],
  },
  {
    id: 'road-positioning',
    title: 'Road Positioning',
    subtitle: 'Where you are matters',
    icon: '🛣',
    difficulty: 'foundation',
    color: 'green',
    description:
      'Position on the road affects your visibility, your safety margin, and your ability to negotiate bends. The three reference positions — normal, left, and right — each serve a specific purpose.',
    keyPoints: [
      { id: 'rp1', text: 'Normal position (NP): approximately 1m from kerb — default riding position' },
      { id: 'rp2', text: 'Left position (LP): approaching junctions, following slower traffic' },
      { id: 'rp3', text: 'Right position (RP): improves forward vision on left-hand bends' },
      { id: 'rp4', text: 'Never cross the centre line unless it is safe and legal to do so' },
      { id: 'rp5', text: 'Position to maximise your view — seek the vanishing point on bends' },
      { id: 'rp6', text: 'Give cyclists and horses extra lateral clearance — at least 1.5m' },
    ],
    flashcards: [
      {
        id: 'rp-f1',
        question: 'Why might you take a right position approaching a left-hand bend?',
        answer: 'Moving right of your normal position opens up your sightline around the bend, giving you more time to identify hazards and adjust speed before the apex.',
      },
      {
        id: 'rp-f2',
        question: 'What is the vanishing point and how does it govern speed?',
        answer: 'The vanishing point is where the two sides of the road appear to meet. You should never travel faster than you can stop in the distance you can see to the vanishing point.',
      },
      {
        id: 'rp-f3',
        question: 'What is the normal riding position (NP) and how is it measured?',
        answer: 'Approximately one metre from the left-hand kerb. It provides a buffer from kerb-side hazards, maintains distance from oncoming traffic, and gives good forward sightlines in most situations.',
      },
      {
        id: 'rp-f4',
        question: 'When would you adopt a left position and why?',
        answer: 'When following a slow vehicle you are not yet overtaking, approaching a left turn, or where oncoming traffic requires you to give more lateral clearance. It also helps when emerging from a side road — you appear at a wider angle to the main road.',
      },
      {
        id: 'rp-f5',
        question: 'What does "position for safety" mean?',
        answer: 'Choosing a road position that maximises your safety margin — keeping distance from parked cars (door zone), avoiding lane edges with loose debris, and staying clear of large vehicles\' blind spots.',
      },
      {
        id: 'rp-f6',
        question: 'What does "position for view" mean?',
        answer: 'Choosing a road position that gives you the best possible forward and peripheral sightline — for example, moving right to see around a left bend, or holding back slightly behind a large vehicle to see past it.',
      },
      {
        id: 'rp-f7',
        question: 'Why should you never ride in the gutter?',
        answer: 'The gutter collects debris, oil, and water, providing poor grip. Drain covers are slippery, especially when wet. Riding in the gutter also reduces your lateral escape room and positions you poorly for bends.',
      },
      {
        id: 'rp-f8',
        question: 'What position should you take on approach to a right-hand bend?',
        answer: 'Move toward the left of your lane. This increases the arc of your sightline around the bend, helping you see further and identify the vanishing point sooner. Never cross the centre line.',
      },
      {
        id: 'rp-f9',
        question: 'How does road position help when you intend to overtake a slow vehicle ahead?',
        answer: 'Positioning slightly toward the centre line (without crossing it) before beginning the overtake increases your forward sightline past the vehicle, allowing you to confirm the road is clear before committing.',
      },
      {
        id: 'rp-f10',
        question: 'What three criteria should every road position satisfy?',
        answer: 'It should be safe (adequate margins from hazards), legal (not crossing solid white lines or entering prohibited lanes), and appropriate (serving a purpose — view, safety, or preparation for the next manoeuvre).',
      },
      {
        id: 'rp-f11',
        question: 'Why is consistent road positioning important for following drivers?',
        answer: 'Predictable positioning allows following drivers to anticipate your movements. Erratic or unexplained position changes confuse other road users and increase the risk of a rear-end collision or unsafe overtake attempt by traffic behind.',
      },
    ],
  },
  {
    id: 'cornering',
    title: 'Cornering',
    subtitle: 'Smooth lines, maximum grip',
    icon: '🔄',
    difficulty: 'intermediate',
    color: 'orange',
    description:
      'Smooth, progressive cornering uses the IPSGA system to set up correctly before the bend and maintain stability through it. Tyre grip and suspension work best in a straight line — reduce speed before the corner, not during.',
    keyPoints: [
      { id: 'c1', text: 'IPSGA: Information, Position, Speed, Gear, Accelerate' },
      { id: 'c2', text: 'All braking should be complete before you begin to lean' },
      { id: 'c3', text: 'A constant or gently increasing throttle through the apex maintains suspension geometry' },
      { id: 'c4', text: 'Apex too early = running wide; apex too late = tightening line' },
      { id: 'c5', text: 'Look through the bend — where you look is where you go' },
      { id: 'c6', text: 'Trail braking is an advanced technique — use it only with correct training' },
    ],
    flashcards: [
      {
        id: 'c-f1',
        question: 'What is the IPSGA system?',
        answer: 'Information — gather and act on it. Position — take the correct road position. Speed — adjust to the right speed for the hazard. Gear — select the appropriate gear. Accelerate — apply power smoothly as you exit.',
      },
      {
        id: 'c-f2',
        question: 'Why should braking be completed before leaning into a corner?',
        answer: 'Braking while leaned reduces the grip available for cornering. Front braking compresses the forks; combined with lean it can cause a tuck or wash-out. Combining braking and cornering uses up your traction budget.',
      },
      {
        id: 'c-f3',
        question: 'What causes a motorcycle to run wide on a corner?',
        answer: 'Entering too fast, apexing too early, or sitting up mid-corner. Looking at the kerb rather than through the bend also causes the rider to sub-consciously steer toward it.',
      },
      {
        id: 'c-f4',
        question: 'What is counter-steering and how does it initiate a turn?',
        answer: 'Counter-steering is pushing the handlebar forward on the side you want to turn toward (push right to go right). At speeds above approximately 20 mph it is the primary method of steering a motorcycle. The brief outward lean of the front wheel causes the bike to lean and turn in the pushed direction.',
      },
      {
        id: 'c-f5',
        question: 'What is the difference between the geometric apex and the late apex?',
        answer: 'The geometric apex is the mid-point of the inside of the bend. The late apex is intentionally later — you continue in a straighter line for longer before tightening toward the inside. The late apex opens up the exit, reduces the risk of running wide, and allows earlier, safer acceleration.',
      },
      {
        id: 'c-f6',
        question: 'Why is a late apex preferred for road riding?',
        answer: 'A late apex keeps you on the outside of the lane longer, giving a better view into the bend and more time to react to hazards. It also means your exit line aims away from the oncoming lane and provides a safer margin for error.',
      },
      {
        id: 'c-f7',
        question: 'What is meant by the "traction budget"?',
        answer: 'A tyre\'s total available grip can be thought of as a budget. Grip used for braking is not available for cornering, and vice versa. Carrying out multiple demands simultaneously — braking while leaned, accelerating aggressively mid-corner — risks exceeding the budget and losing traction.',
      },
      {
        id: 'c-f8',
        question: 'How should your eyes move as you approach a bend?',
        answer: 'Look progressively further through and around the bend as it opens up. Your eyes should always be aiming at where you want to be in the next 2–3 seconds — ahead of the vanishing point. As the vanishing point moves away, you can see more and the bend is opening.',
      },
      {
        id: 'c-f9',
        question: 'What is the effect of a pillion passenger on cornering?',
        answer: 'A pillion raises the centre of gravity, increases the lean angle needed for a given speed, and can unsettle the bike if they move independently. The additional weight increases braking distances significantly. Reduce speed on bends and allow greater following distances.',
      },
      {
        id: 'c-f10',
        question: 'What should you do if you realise mid-corner that you are going too fast?',
        answer: 'Look through the bend — where you look is where you go. Smoothly press the handlebar to increase lean (counter-steer). Avoid braking hard while leaned. A gentle progressive squeeze of the brakes may be possible on modern bikes but should be treated as a last resort. Stay calm — panic is what causes crashes.',
      },
      {
        id: 'c-f11',
        question: 'Why does a constant or gently increasing throttle through the apex improve stability?',
        answer: 'A steady or opening throttle settles the suspension into a balanced state — rear slightly compressed, forks slightly extended. This geometry maximises both tyre contact patches and provides predictable handling. Sudden throttle changes upset this balance.',
      },
    ],
  },
  {
    id: 'braking',
    title: 'Braking',
    subtitle: 'Stop faster, stop safer',
    icon: '⛔',
    difficulty: 'intermediate',
    color: 'red',
    description:
      'Advanced braking combines both brakes progressively, exploiting the full available traction. The front brake provides 70–80% of braking force; under-using it is one of the most common causes of insufficient stopping distances.',
    keyPoints: [
      { id: 'b1', text: 'Squeeze the front brake — never snatch — to allow weight transfer before full force' },
      { id: 'b2', text: 'Rear brake provides stability and additional retardation — use together' },
      { id: 'b3', text: 'Maximum braking occurs just before wheel lock — ABS operates at this threshold' },
      { id: 'b4', text: 'React + think time = ~1.5s before any braking begins — build in buffer distance' },
      { id: 'b5', text: 'Stopping distance doubles when speed doubles (kinetic energy is speed²)' },
      { id: 'b6', text: 'Wet or gravel roads reduce grip dramatically — increase following distance' },
    ],
    flashcards: [
      {
        id: 'b-f1',
        question: 'Why do you squeeze rather than snatch the front brake?',
        answer: 'Squeezing allows the forks to compress progressively, transferring weight to the front wheel and increasing tyre contact patch before maximum force is applied. Snatching can cause an immediate front wheel lock.',
      },
      {
        id: 'b-f2',
        question: 'At 60mph what is the approximate stopping distance on a dry road?',
        answer: 'Around 73 metres (240 feet) — 18m thinking distance + 55m braking distance. This assumes good conditions, good brakes, and an alert rider.',
      },
      {
        id: 'b-f3',
        question: 'How does ABS affect advanced braking technique?',
        answer: 'ABS allows maximum brake pressure without wheel lock. You should still squeeze progressively — ABS is a safety net, not a reason to snatch. On loose surfaces like gravel, ABS may extend stopping distances compared to a skilled rider using threshold braking.',
      },
      {
        id: 'b-f4',
        question: 'What percentage of total braking force is provided by the front brake?',
        answer: 'Approximately 70–80% on a typical motorcycle in normal braking. Under hard braking, weight transfers forward, further increasing front tyre grip and making the front brake even more effective. Under-using the front is one of the most common causes of inadequate stopping.',
      },
      {
        id: 'b-f5',
        question: 'What is thinking distance and what factors affect it?',
        answer: 'Thinking distance is the distance travelled between perceiving a hazard and the brakes beginning to take effect — roughly 1–1.5 seconds. It is affected by speed, fatigue, alcohol, drugs, distractions, and expectation. At 60 mph you travel approximately 27 metres in 1 second.',
      },
      {
        id: 'b-f6',
        question: 'How does wet weather affect braking distances, and why?',
        answer: 'Wet roads reduce tyre grip significantly — stopping distances can double or more compared to dry conditions. Water between the tyre and road reduces friction. Painted lines, drain covers, and polished surfaces become much more slippery. Brake progressively and earlier.',
      },
      {
        id: 'b-f7',
        question: 'What is cadence braking and why has it largely been superseded?',
        answer: 'Cadence braking is rapidly pumping the brakes to prevent lock-up on non-ABS vehicles — it maintains some steering control while braking hard. It has largely been superseded by ABS, which does the same more effectively and consistently. On non-ABS bikes it remains a useful technique.',
      },
      {
        id: 'b-f8',
        question: 'How does weight transfer affect front tyre grip when braking?',
        answer: 'As you brake, weight transfers forward onto the front wheel, increasing the load on the front tyre and therefore its potential grip. This is why the front brake becomes increasingly effective as you brake harder — but it also means the rear tyre unloads and can lock more easily.',
      },
      {
        id: 'b-f9',
        question: 'What should you do if the rear wheel locks under braking?',
        answer: 'Keep the brake applied and steer straight. Releasing a locked rear wheel suddenly can cause a highside if the bike is not tracking straight. If the bike is straight and the wheel is locked, maintain pressure and steer; only release gently once the bike has slowed significantly.',
      },
      {
        id: 'b-f10',
        question: 'What are the Highway Code stopping distances at 30, 50, and 70 mph?',
        answer: '30 mph: 23 m (75 ft). 50 mph: 53 m (175 ft). 70 mph: 96 m (315 ft). These are for cars in good conditions — motorcycles can match or better these figures with good technique, but adverse conditions, worn tyres, or poor technique will increase them substantially.',
      },
      {
        id: 'b-f11',
        question: 'What is the two-second rule and when should you increase it?',
        answer: 'In dry conditions, maintain at least a two-second gap to the vehicle ahead. Double it to four seconds in rain. In fog, ice, or when towing, increase further. To measure: pick a fixed point; when the vehicle ahead passes it, count "one thousand, two thousand" — you should not reach the point before finishing.',
      },
    ],
  },
  {
    id: 'overtaking',
    title: 'Overtaking',
    subtitle: 'Safe and decisive',
    icon: '↗',
    difficulty: 'advanced',
    color: 'purple',
    description:
      'Overtaking is one of the highest-risk manoeuvres. Advanced riders use a systematic approach — POEM — to evaluate every overtake before committing, and always have an escape route.',
    keyPoints: [
      { id: 'o1', text: 'POEM: Position, Observation, Execute, Move back' },
      { id: 'o2', text: 'Only overtake when safe, legal, and necessary' },
      { id: 'o3', text: 'Identify your exit point before you begin — commit only when certain' },
      { id: 'o4', text: 'Lifesaver check before pulling out — check the blind spot' },
      { id: 'o5', text: 'Match the vehicle\'s speed before beginning to pass — reduce the time alongside' },
      { id: 'o6', text: 'Never overtake at junctions, bends, hill brows, or where road markings prohibit' },
    ],
    flashcards: [
      {
        id: 'o-f1',
        question: 'What is the POEM system for overtaking?',
        answer: 'Position — move to get the best view before committing. Observation — confirm it is safe. Execute — carry out the overtake decisively and quickly. Move back — return to normal position promptly.',
      },
      {
        id: 'o-f2',
        question: 'Why is it dangerous to overtake on the approach to a junction?',
        answer: 'Vehicles ahead may turn without warning. An overtaken driver may stop suddenly if they intend to turn. The manoeuvre puts you in the oncoming lane adjacent to turning traffic.',
      },
      {
        id: 'o-f3',
        question: 'What three conditions must always be met before you overtake?',
        answer: 'It must be safe (sufficient clear road ahead, adequate gap, no hidden hazards), legal (no solid white lines on your side, no prohibited zone), and necessary (overtaking improves your journey without creating risk for others).',
      },
      {
        id: 'o-f4',
        question: 'What is the correct lifesaver procedure before pulling out to overtake?',
        answer: 'After mirrors and signal, take a rearward glance over the shoulder on the side you are moving to — this checks the blind spot not covered by mirrors. Only then should you move out, provided the check confirmed it was clear.',
      },
      {
        id: 'o-f5',
        question: 'What is "baulking" and why is it dangerous?',
        answer: 'Baulking is starting an overtake and then abandoning it mid-manoeuvre by braking hard and returning to the nearside. It places you alongside the vehicle you were overtaking, potentially in the path of oncoming traffic, and confuses following drivers who may have begun to overtake you.',
      },
      {
        id: 'o-f6',
        question: 'Why should you match the speed of the vehicle ahead before committing to overtake?',
        answer: 'Matching speed before pulling out means you spend less time in the oncoming lane — the acceleration needed to complete the pass is applied during the manoeuvre rather than before it. It reduces your total exposure time and allows a quicker, safer overtake.',
      },
      {
        id: 'o-f7',
        question: 'What should you check about the vehicle you plan to overtake before committing?',
        answer: 'Its speed (is it constant or variable?), whether it is signalling, whether it is a vehicle that might turn or pull in (bus near a bus stop, lorry near an industrial entrance), and whether it is obscuring a hazard ahead (e.g. a pedestrian crossing it might stop for).',
      },
      {
        id: 'o-f8',
        question: 'What road markings prohibit overtaking?',
        answer: 'A continuous (solid) white line on your side of the centre of the road means you MUST NOT cross or straddle it to overtake. Double solid white lines MUST NOT be crossed regardless of which is on your side. Hatched areas with solid borders also prohibit entry.',
      },
      {
        id: 'o-f9',
        question: 'When is it legal to overtake on the left?',
        answer: 'When traffic is moving in queues and the left-hand lane is moving faster. When the vehicle in front has signalled and is waiting to turn right. In a one-way street. Never use the hard shoulder to overtake.',
      },
      {
        id: 'o-f10',
        question: 'How do you select the right moment to begin an overtake?',
        answer: 'You need a clear view of the road ahead for the full length of the manoeuvre plus a safety margin. Identify the exit point before you pull out. The oncoming road should be clear far enough ahead that any oncoming vehicle cannot reach the overtake zone before you complete it.',
      },
      {
        id: 'o-f11',
        question: 'Why must you return to your side of the road promptly after overtaking?',
        answer: 'Remaining in the oncoming lane longer than necessary increases exposure to head-on risk and prevents oncoming drivers from planning around you. Move back smoothly but without hesitation once the vehicle you have overtaken is clearly in your mirror.',
      },
    ],
  },
  {
    id: 'hazard-awareness',
    title: 'Hazard Awareness',
    subtitle: 'Anticipate, don\'t react',
    icon: '⚠',
    difficulty: 'foundation',
    color: 'yellow',
    description:
      'A hazard is anything with potential to cause danger. Advanced riders categorise hazards as physical, positional, or moving, and build a mental model to predict their development.',
    keyPoints: [
      { id: 'h1', text: 'Physical hazards: road surface, weather, reduced visibility' },
      { id: 'h2', text: 'Positional hazards: junctions, bends, hills, narrow roads' },
      { id: 'h3', text: 'Moving hazards: other vehicles, pedestrians, animals' },
      { id: 'h4', text: 'Hazards often combine — identify the dominant one and plan for the others' },
      { id: 'h5', text: 'Commentary riding trains hazard perception — verbalise what you see' },
      { id: 'h6', text: 'The "What if…" mindset: always have a plan B ready' },
    ],
    flashcards: [
      {
        id: 'h-f1',
        question: 'What are the three categories of hazard?',
        answer: 'Physical hazards (road surface, weather, visibility), positional hazards (junctions, bends, crests), and moving hazards (other vehicles, cyclists, pedestrians, animals).',
      },
      {
        id: 'h-f2',
        question: 'What is commentary riding and why is it useful?',
        answer: 'Commentary riding is verbalising everything you observe and your planned response while riding. It forces conscious processing of the environment, surfaces blind spots, and is used in advanced rider training and assessment.',
      },
      {
        id: 'h-f3',
        question: 'What is the "limit point" and how does it relate to hazard management?',
        answer: 'The limit point is the furthest point you can see the road surface. If the limit point is moving away from you, you have room to maintain speed. If it stays still or moves toward you, you must reduce speed.',
      },
      {
        id: 'h-f4',
        question: 'What is the difference between a primary and secondary hazard?',
        answer: 'A primary hazard is the main, most immediate danger — the thing that requires your principal response. Secondary hazards are additional dangers in the same situation. For example, a broken-down vehicle (primary) may obscure a pedestrian walking around it (secondary). Planning for both prevents being caught out.',
      },
      {
        id: 'h-f5',
        question: 'How does adverse camber (road tilt) increase risk through a bend?',
        answer: 'Adverse camber tilts the road away from the direction of the turn, reducing the effective grip available compared to a banked (positive camber) surface. Your normal cornering speed may be too fast for an adversely cambered bend — approach with caution if camber is unclear.',
      },
      {
        id: 'h-f6',
        question: 'Why are junctions statistically among the most dangerous road locations?',
        answer: 'Junctions concentrate multiple conflicting movements in a small space. Drivers and riders may misjudge the speed or position of approaching vehicles. Limited sightlines reduce reaction time. The SMIDSY ("Sorry Mate, I Didn\'t See You") accident type happens disproportionately at junctions.',
      },
      {
        id: 'h-f7',
        question: 'What is the "what if?" mindset and how do you apply it?',
        answer: 'Constantly asking "what if?" means generating and mentally rehearsing responses to likely hazards before they occur. "What if that parked car door opens? What if that side road has a vehicle about to emerge?" Having a pre-formed response reduces reaction time and improves the quality of your actions.',
      },
      {
        id: 'h-f8',
        question: 'What is a "separation distance" and how should it change with conditions?',
        answer: 'Separation distance is the gap you maintain from the vehicle ahead. In dry conditions, a minimum two-second gap is needed. Double it in rain, treble it in fog, and allow up to ten times as much in ice. It should also increase when following large vehicles, on unfamiliar roads, or when fatigued.',
      },
      {
        id: 'h-f9',
        question: 'How do weather conditions create hazards that don\'t exist in dry conditions?',
        answer: 'Rain reduces grip and visibility, creates aquaplaning risk at speed, and washes diesel onto road surfaces. Frost forms first on bridges and shaded areas. Fog removes all distance judgement. Strong winds destabilise motorcycles, especially on exposed roads and when passing large vehicles.',
      },
      {
        id: 'h-f10',
        question: 'What is a "safety margin" and how should it change with conditions?',
        answer: 'The safety margin is the time and space buffer you maintain around your vehicle. In good conditions it may be comfortable; in poor conditions (wet, fog, dark, unfamiliar road, fatigue) it must be significantly increased. A useful test: "could I stop safely if the hazard materialised right now?"',
      },
      {
        id: 'h-f11',
        question: 'Why is it important to identify the dominant hazard when multiple hazards coincide?',
        answer: 'When hazards combine, you must prioritise your response to the most dangerous one while remaining aware of the others. Dividing attention equally between several hazards can mean responding inadequately to the worst one. Identify the dominant hazard, plan for it, and keep the others in your peripheral awareness.',
      },
    ],
  },
]

export const difficultyLabel: Record<Difficulty, string> = {
  foundation: 'Foundation',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
}

export const difficultyColor: Record<Difficulty, string> = {
  foundation: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  intermediate: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
  advanced: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
}
