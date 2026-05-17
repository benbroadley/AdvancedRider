export interface HCRule {
  number: number
  title?: string
  text: string
  must?: boolean
}

export interface HCSection {
  id: string
  title: string
  icon: string
  ruleRange: string
  rules: HCRule[]
}

export const highwayCodeSections: HCSection[] = [
  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'pedestrians',
    title: 'Pedestrians',
    icon: '🚶',
    ruleRange: '1–35',
    rules: [
      {
        number: 1,
        title: 'Pavements and footpaths',
        text: 'Use the pavement or footway where provided. Keep to the right if you walk on a road without a pavement, so you face oncoming traffic. Take extra care and leave space for people with pushchairs, guide dogs, wheelchairs, or other mobility aids.',
      },
      {
        number: 2,
        title: 'The Green Cross Code',
        text: 'Think: find the safest place to cross. Stop: just before the kerb. Look: all around for traffic and listen. Wait: until it is safe. Walk: straight across, keep looking and listening. Never run.',
      },
      {
        number: 3,
        title: 'Wearing headphones',
        text: 'Wearing headphones or earphones may reduce your ability to hear traffic. Take care and keep alert.',
      },
      {
        number: 4,
        title: 'Choosing where to cross',
        text: 'A safer place to cross has a clear view of traffic in both directions and good visibility for drivers. Crossing near parked vehicles, bends, or brows of hills is dangerous. Use a pedestrian crossing if one is available.',
      },
      {
        number: 5,
        title: 'Crossing the road',
        text: 'If there is no pedestrian crossing, choose a place where you can see clearly in both directions. Let traffic pass. When it is safe, walk straight across, keeping alert. Never run.',
      },
      {
        number: 6,
        title: 'Pedestrian crossings',
        text: 'Use a pedestrian crossing if one is nearby. Do not cross within the zigzag lines other than at the crossing itself. At toucan or pegasus crossings, wait for the signal.',
      },
      {
        number: 7,
        title: 'Pelican crossings',
        text: 'Wait for the green man before crossing. The flashing green man means you may continue if you have already started crossing but do not start to cross. Be aware that vehicles may be turning across the crossing.',
        must: true,
      },
      {
        number: 8,
        title: 'Puffin crossings',
        text: 'Do not cross until the steady green pedestrian signal is showing. The signal will stay green until you have cleared the road.',
        must: true,
      },
      {
        number: 9,
        title: 'Toucan crossings',
        text: 'Shared crossings for pedestrians and cyclists. Cyclists may cross as well. Wait for the green signal before crossing.',
        must: true,
      },
      {
        number: 10,
        title: 'Pegasus crossings',
        text: 'Equestrian crossings for horse riders. Wait for the green signal and check traffic has stopped before crossing.',
      },
      {
        number: 11,
        title: 'Zebra crossings',
        text: 'Give traffic time to see you and stop before stepping onto a zebra crossing. Drivers MUST give way to pedestrians waiting to cross and those already on the crossing. Make eye contact with drivers to be sure they have seen you before stepping out.',
        must: true,
      },
      {
        number: 12,
        title: 'Parallel crossings',
        text: 'A parallel crossing has a zebra-style crossing for pedestrians alongside a cycle lane. Cyclists have priority. Pedestrians and cyclists should be aware of each other.',
      },
      {
        number: 13,
        title: 'Controlled crossings',
        text: 'At a crossing controlled by a police officer or traffic warden, obey their signals. Do not cross when the signal is against you.',
        must: true,
      },
      {
        number: 14,
        title: 'Subways and footbridges',
        text: 'Use these where provided and available. They provide a safer alternative to crossing at road level.',
      },
      {
        number: 15,
        title: 'Crossing at junctions',
        text: 'Be particularly careful when crossing at or near a junction. Vehicles may be turning. Watch for vehicles signalling to turn. Check both sides of the road including for vehicles coming from behind.',
      },
      {
        number: 16,
        title: 'Wearing high-visibility clothing',
        text: 'If you are walking in or near a road in poor light or at night, wear or carry something reflective or bright-coloured. This makes you more visible to drivers.',
      },
      {
        number: 17,
        title: 'Roads with no footways',
        text: 'Keep to the right so you face oncoming traffic. Try to keep to the edge of the road. Take extra care in poor visibility. Keep children and animals under control. Never step into the path of oncoming vehicles.',
      },
      {
        number: 18,
        title: 'Marching',
        text: 'Groups of people marching must keep to the left unless instructed otherwise by police. A lookout should be posted at the front and rear with illuminated white lights at the front and red at the rear in darkness.',
      },
      {
        number: 19,
        title: 'Near lorries',
        text: 'Be aware that large vehicles have significant blind spots. Never walk immediately alongside or in front of large vehicles that may be about to move.',
      },
      {
        number: 20,
        title: 'Roundabouts',
        text: 'At roundabouts, take extra care. Vehicles may not be able to see you easily. Make eye contact with drivers. Use a pedestrian crossing if available.',
      },
      {
        number: 21,
        title: 'Pavements near traffic',
        text: 'Footways adjacent to roads carrying fast traffic can be dangerous. Stay well back from the kerb. Do not allow children to run ahead near roads.',
      },
      {
        number: 22,
        title: 'Young children',
        text: 'Young children should not be on the road unsupervised. Teach children the Green Cross Code. Hold their hand near roads.',
      },
      {
        number: 23,
        title: 'Buses',
        text: 'Look out for buses moving away from bus stops and take care when crossing in front of stationary buses. Passengers alighting from buses should check before stepping into the road.',
      },
      {
        number: 24,
        title: 'Train and tram crossings',
        text: 'Only cross railway or tramway tracks where provided with a designated crossing. MUST NOT cross when signals indicate a train or tram is approaching.',
        must: true,
      },
      {
        number: 25,
        title: 'Near parked vehicles',
        text: 'Take care when walking between parked vehicles. Drivers may not see you. Step out carefully, ensuring drivers can see you before you commit to crossing. Watch out for vehicles reversing or pulling out.',
      },
      {
        number: 26,
        title: 'Alcohol and drugs',
        text: 'Alcohol and drugs affect your ability to judge speed, distance, and gaps. If impaired, take extra care near roads or avoid roads altogether.',
      },
      {
        number: 27,
        title: 'Emergency vehicles',
        text: 'Move out of the way of emergency vehicles where safe to do so. Be careful not to step into the road unexpectedly.',
      },
      {
        number: 28,
        title: 'Multi-lane roads',
        text: 'Crossing a multi-lane road requires extra care. Only cross when it is safe to reach the central reservation and then wait for a safe gap in the other direction. Never start to cross if you cannot reach safety.',
      },
      {
        number: 29,
        title: 'One-way streets',
        text: 'Check traffic is coming from both directions on one-way streets — some vehicles may make U-turns or be in contraflow. Look right as well as left.',
      },
      {
        number: 30,
        title: 'Bus lanes',
        text: 'Buses, cyclists and sometimes taxis use bus lanes. When crossing, look out for these vehicles as well as general traffic.',
      },
      {
        number: 31,
        title: 'Cycle lanes and tracks',
        text: 'Take care when walking in or across cycle lanes and tracks. Cyclists may be travelling faster than expected. Give way to cyclists on cycle tracks.',
      },
      {
        number: 32,
        title: 'Right of way — hierarchy',
        text: 'Road users at the top of the hierarchy (pedestrians, then cyclists) do not have absolute right of way but drivers and riders should give way to them where possible. This places a greater responsibility on those in larger, more powerful vehicles.',
      },
      {
        number: 33,
        title: 'Shared spaces',
        text: 'In shared spaces where pedestrians and cyclists mix, be aware of other users. Make eye contact. Cyclists should give adequate warning of their presence.',
      },
      {
        number: 34,
        title: 'Visibility',
        text: 'Wear bright or fluorescent clothing in daylight and reflective clothing or carry a torch at night. Make yourself visible.',
      },
      {
        number: 35,
        title: 'Elderly and disabled',
        text: 'Older people and those with disabilities may need more time to cross. Other road users should be patient and never force them to rush.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'animals',
    title: 'Animals',
    icon: '🐴',
    ruleRange: '36–46',
    rules: [
      {
        number: 36,
        title: 'Horses',
        text: 'Horse riders should be aware of traffic and keep their horses calm near roads. Inexperienced riders should not ride on busy roads. Lead horses on the left-hand side of the road.',
      },
      {
        number: 37,
        title: 'Protective equipment',
        text: 'Children under 14 MUST wear a helmet that meets current safety standards when riding a horse on a road. Adults are strongly advised to wear one.',
        must: true,
      },
      {
        number: 38,
        title: 'At night',
        text: 'Avoid riding on the road at night or in poor visibility, but if necessary wear reflective clothing and light-coloured tack.',
      },
      {
        number: 39,
        title: 'Accompanying riders',
        text: 'An experienced rider should accompany less experienced riders or those on young horses on public roads.',
      },
      {
        number: 40,
        title: 'Riding two abreast',
        text: 'Never ride more than two abreast and ride in single file on narrow or busy roads.',
      },
      {
        number: 41,
        title: 'Junctions',
        text: 'On approaching junctions, look all around and signal when necessary. Give way to vehicles on major roads.',
      },
      {
        number: 42,
        title: 'Livestock',
        text: 'When moving livestock on the road, keep them to the left and keep a lookout ahead. Put a person with a white light at the front and red light at the rear at night.',
      },
      {
        number: 43,
        title: 'Dogs',
        text: 'Keep dogs under control near roads. When walking dogs near roads, keep them on a short lead. Do not allow dogs to run into the road.',
      },
      {
        number: 44,
        title: 'Horses — passing drivers',
        text: 'Drivers should pass horses wide and slowly. Never sound the horn or rev the engine near horses. Give horses extra space.',
      },
      {
        number: 45,
        title: 'Large animal warning',
        text: 'If you encounter an animal in the road, slow down and stop if necessary. Do not use the horn. Wait patiently.',
      },
      {
        number: 46,
        title: 'Dog controls',
        text: 'Dog owners are responsible for their dogs near roads. Dogs should be on a lead at all times near traffic.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'cyclists',
    title: 'Cyclists',
    icon: '🚲',
    ruleRange: '59–82',
    rules: [
      {
        number: 59,
        title: 'Clothing',
        text: 'Wear a cycle helmet that conforms to current safety standards. Wear appropriate footwear. Avoid long, loose clothing that could get caught in the chain or wheel. Wear light-coloured or bright clothing and use reflective materials or a reflective belt.',
      },
      {
        number: 60,
        title: 'At night',
        text: 'Lights: MUST use a white front light and a red rear light. A red rear reflector is also required. Amber pedal reflectors are recommended.',
        must: true,
      },
      {
        number: 61,
        title: 'Cycle routes',
        text: 'Use cycle routes, advanced stop lines, cycle boxes and toucan crossings where they are available. They are provided for your safety. Dismount or slow down where cycle paths merge with the footway.',
      },
      {
        number: 62,
        title: 'Cycle tracks',
        text: 'Cycle tracks may run alongside footways. Keep to your side when sharing with pedestrians. Be aware of pedestrians, particularly children and those with mobility impairments.',
      },
      {
        number: 63,
        title: 'Shared-use cycle routes and footways',
        text: 'Give way to pedestrians on shared-use routes and be prepared to slow down and stop. Bear in mind that pedestrians may be hard of hearing or visually impaired. Announce your presence when necessary.',
      },
      {
        number: 64,
        title: 'Pavement cycling',
        text: 'You MUST NOT cycle on a pavement unless it is designated as a shared-use route.',
        must: true,
      },
      {
        number: 65,
        title: 'Road positioning',
        text: 'When cycling, ride no more than 0.5 metres from the kerb edge when riding in a lane narrower than 3 metres or where there is no clearly defined lane. You do not have to ride in the gutter. Ride at least 0.5m from parked vehicles to avoid opening car doors (the "door zone").',
      },
      {
        number: 66,
        title: 'Riding two abreast',
        text: 'You can ride two abreast. Consider riding single file on narrow or busy roads where it is safer. Do not ride more than two abreast.',
      },
      {
        number: 67,
        title: 'Overtaking',
        text: 'Take care when passing other road users. When passing a stationary vehicle, take care in case a door opens or a pedestrian steps out. When overtaking, leave at least 1.5 metres of space at low speeds and more at higher speeds. Pass horses and livestock wide and slowly.',
      },
      {
        number: 68,
        title: 'Cycle lanes',
        text: 'Keep within the cycle lane where provided. Do not obstruct other road users by riding too slowly in a cycle lane.',
      },
      {
        number: 69,
        title: 'Turning right',
        text: 'Well before you turn right, look behind you, signal clearly, move to just left of the centre of the road or into the right-turn lane. Wait until there is a safe gap before turning. Watch out for vehicles on the inside.',
      },
      {
        number: 70,
        title: 'Turning left',
        text: 'Watch out for vehicles passing on the outside or before turning. Do not turn left at the last moment; signal clearly in good time.',
      },
      {
        number: 71,
        title: 'Traffic lights and junctions',
        text: 'You MUST obey all traffic light signals and traffic signs. Do not ride across a red traffic light. Advanced stop lines are provided for cyclists to move ahead of other traffic — use them.',
        must: true,
      },
      {
        number: 72,
        title: 'Pedestrian crossings',
        text: 'You MUST NOT cycle across a pelican, puffin or toucan crossing unless it is a shared crossing (toucan). Dismount and walk at pedestrian crossings.',
        must: true,
      },
      {
        number: 73,
        title: 'Roundabouts',
        text: 'Proceed around roundabouts in the same way as other vehicles. Stay in your lane and signal when exiting. Be aware that drivers may not see you easily. You may take the lane to avoid being cut off.',
      },
      {
        number: 74,
        title: 'Giving way at junctions',
        text: 'Give way to pedestrians crossing or waiting to cross a road into which you are turning. Slow down, stop if necessary.',
        must: true,
      },
      {
        number: 75,
        title: 'Looking and signalling',
        text: 'Always look all around before moving or turning. Give clear hand signals to indicate your intentions. Make eye contact with other road users.',
      },
      {
        number: 76,
        title: 'Dual carriageways',
        text: 'On dual carriageways where the speed limit exceeds 30 mph, cycling may not be permitted. Check local signs. Use cycle lanes on dual carriageways where available.',
      },
      {
        number: 77,
        title: 'Cycle maintenance',
        text: 'Ensure your cycle is roadworthy. Check that brakes are working, tyres are properly inflated, lights are working. Carry out regular checks.',
      },
      {
        number: 78,
        title: 'Passengers',
        text: 'MUST NOT carry a passenger unless the cycle is built or adapted for one. Passengers MUST use appropriate seating and footrests.',
        must: true,
      },
      {
        number: 79,
        title: 'Alcohol and drugs',
        text: 'You MUST NOT cycle on a road when under the influence of drink or drugs, including prescribed medication that affects your ability to cycle safely.',
        must: true,
      },
      {
        number: 80,
        title: 'Mobile phones',
        text: 'Avoid using a hand-held mobile phone while cycling. It is dangerous and should be avoided.',
      },
      {
        number: 81,
        title: 'Bus lanes',
        text: 'Cyclists may use bus lanes unless signs indicate otherwise. Take care when sharing with buses and taxis.',
      },
      {
        number: 82,
        title: 'Horses and animals',
        text: 'Pass horses and other animals slowly and wide. Never use your bell or do anything that may startle horses. Make the rider aware of your presence well in advance.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'motorcyclists',
    title: 'Motorcyclists',
    icon: '🏍',
    ruleRange: '83–88',
    rules: [
      {
        number: 83,
        title: 'Licence requirements',
        text: 'You MUST be properly licensed and insured to ride a motorcycle on the road. This includes having passed the appropriate Compulsory Basic Training (CBT) unless exempt. Learner riders must display L plates and are restricted on motorway use and certain engine sizes.',
        must: true,
      },
      {
        number: 84,
        title: 'Clothing',
        text: 'You MUST wear a protective helmet that meets current safety standards. It is strongly advisable to also wear eye protection, a jacket, trousers, gloves, and boots that give adequate protection. Bright or fluorescent clothing will help other road users to see you.',
        must: true,
      },
      {
        number: 85,
        title: 'Eyesight',
        text: 'You MUST be able to read a vehicle number plate from a distance of 20 metres (or 20.5 metres for older-style plates). If you need glasses or contact lenses to do this, you MUST wear them at all times when riding.',
        must: true,
      },
      {
        number: 86,
        title: 'Alcohol and drugs',
        text: 'You MUST NOT ride under the influence of drink or drugs, including certain prescribed medications. The legal blood alcohol limit for motorcyclists is 80 mg of alcohol per 100 ml of blood. Drug driving laws apply equally to motorcycle riders.',
        must: true,
      },
      {
        number: 87,
        title: 'Fitness to ride',
        text: 'You MUST NOT ride if your ability is impaired through illness, tiredness, stress, or the effects of medication. It is your responsibility to ensure you are fit to ride before setting off.',
        must: true,
      },
      {
        number: 88,
        title: 'Manoeuvring',
        text: 'Motorcycles are less stable than four-wheeled vehicles, particularly when cornering or braking suddenly. You should be aware of the effects of wind, road surface, and other hazards that may affect a motorcycle more than a car. Give extra clearance to large vehicles. Filtering between lanes of slow-moving or stationary traffic is permitted if it is safe, legal, and carried out with care. Take extra care at junctions. Always signal clearly and look over your shoulder (lifesaver check) before changing direction.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'general-rules',
    title: 'General Rules',
    icon: '📋',
    ruleRange: '89–102',
    rules: [
      {
        number: 89,
        title: 'Driving licence',
        text: 'You MUST hold a valid driving or riding licence for the category of vehicle you are driving. Check that your licence covers the category of vehicle, including any trailer or specialist vehicle.',
        must: true,
      },
      {
        number: 90,
        title: 'Vehicle insurance',
        text: 'You MUST have valid third-party motor insurance to drive or ride on a road. Driving without insurance is a serious offence carrying penalty points, a fine, or disqualification.',
        must: true,
      },
      {
        number: 91,
        title: 'Tiredness',
        text: 'Make sure you are fit to drive. It is estimated that driver tiredness causes around 20% of accidents on major roads. You MUST NOT drive when so fatigued that your ability to drive safely is impaired. Plan journeys to avoid the most drowsy times (2am–6am and 1pm–3pm) and take breaks every two hours.',
        must: true,
      },
      {
        number: 92,
        title: 'Eyesight',
        text: 'You MUST be able to read a vehicle number plate from a distance of 20 metres. If you need glasses or contact lenses you MUST wear them at all times when driving. Check your eyesight regularly.',
        must: true,
      },
      {
        number: 93,
        title: 'Alcohol',
        text: 'You MUST NOT drive or attempt to drive a vehicle when your alcohol level exceeds the legal limit. The limit is 80 mg of alcohol per 100 ml of blood in England, Wales and Northern Ireland (50 mg in Scotland). Alcohol affects judgement, slows reactions, and increases risk-taking.',
        must: true,
      },
      {
        number: 94,
        title: 'Drugs',
        text: 'You MUST NOT drive or ride under the influence of drugs, including cannabis, cocaine, and certain prescription medications. There are specific legal limits for a number of illegal drugs. Prescribed drug driving limits also exist. If in doubt, consult your doctor.',
        must: true,
      },
      {
        number: 95,
        title: 'Before setting off',
        text: 'Ensure you are comfortable and can reach all the controls. Adjust the seat, head restraints, steering wheel, and mirrors. Make sure the windows are clean and clear. Check all passengers are wearing seatbelts.',
      },
      {
        number: 96,
        title: 'Vehicle condition',
        text: 'Before driving, carry out a basic check: tyres (condition and pressure), lights (all working), oil, water, screen wash, and brakes. It is your responsibility to ensure your vehicle is roadworthy.',
      },
      {
        number: 97,
        title: 'Seatbelts',
        text: 'You MUST wear a seatbelt if one is fitted. Drivers are responsible for ensuring passengers under 14 are properly restrained. Failure to wear a seatbelt is an offence for both the driver and adult passengers.',
        must: true,
      },
      {
        number: 98,
        title: 'Child restraints',
        text: 'Children MUST use the correct child car seat until they are 135 cm tall or 12 years old. Children under 3 MUST always use a child car seat appropriate to their weight. Rear-facing seats MUST NOT be used in the front with an active airbag.',
        must: true,
      },
      {
        number: 99,
        title: 'Fitness to drive',
        text: 'Ensure you are fit to drive. If you have any condition affecting your fitness to drive, notify the DVLA and your insurance company. It is an offence to drive when medically unfit.',
        must: true,
      },
      {
        number: 100,
        title: 'Mobile phones',
        text: 'You MUST NOT use a hand-held mobile phone when driving. This includes calling, texting, browsing, or any other use. Using a phone while driving, even briefly, significantly increases the risk of an accident. Hands-free systems are permitted but can still distract; pull over and park safely if you need to make or receive a call.',
        must: true,
      },
      {
        number: 101,
        title: 'Satellite navigation systems',
        text: 'A sat-nav must be in a fixed holder and MUST NOT obscure your view of the road. You MUST NOT use a hand-held sat-nav while driving. You are responsible for navigation — do not blindly follow sat-nav directions into danger.',
        must: true,
      },
      {
        number: 102,
        title: 'Loads',
        text: "Ensure that any load is properly secured before driving. Unsecured loads are dangerous and an offence. The combined weight of vehicle and load MUST NOT exceed the vehicle's maximum authorised mass (MAM).",
        must: true,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'using-the-road',
    title: 'Using the Road',
    icon: '🛣',
    ruleRange: '103–158',
    rules: [
      {
        number: 103,
        title: 'Before moving off',
        text: 'Use mirrors, signal, and manoeuvre (MSM). Check all mirrors. Give a signal if it would help other road users. Look around before moving. Move off only when safe.',
      },
      {
        number: 104,
        title: 'Mirrors',
        text: 'Check the mirrors — including your rear-view and both wing mirrors — before signalling, changing direction, turning, overtaking, or stopping. Always be aware of what is behind and to the sides.',
      },
      {
        number: 105,
        title: 'Signalling',
        text: 'Signal clearly and in good time to warn other road users of your intended actions. Use direction indicators and brake lights. Where necessary, sound the horn — but MUST NOT use it in a built-up area between 11.30pm and 7.00am, or when stationary.',
        must: true,
      },
      {
        number: 106,
        title: 'Arm signals',
        text: 'Use arm signals to reinforce or replace indicator signals in some situations. They are especially useful when turning, slowing down, or stopping.',
      },
      {
        number: 107,
        title: 'Hazard warning lights',
        text: 'Use hazard warning lights only when your vehicle is stationary and causing a temporary obstruction, or to warn drivers behind of a hazard ahead on a motorway or dual carriageway. Do not use them as an excuse to park illegally or for more than a few seconds when moving.',
      },
      {
        number: 108,
        title: 'Headlights',
        text: 'You MUST use headlights when visibility is seriously reduced — generally when you cannot see for more than 100 metres. Use dipped headlights in daylight hours if visibility is poor.',
        must: true,
      },
      {
        number: 109,
        title: 'Horn',
        text: 'Use the horn only to alert others to your presence. You MUST NOT use the horn aggressively. You MUST NOT use a horn fitted with a gong, bell, or two-tone note.',
        must: true,
      },
      {
        number: 110,
        title: 'Flashing headlights',
        text: 'Only flash your headlights to let other road users know you are there. Never flash your headlights to convey any other message or as a command to proceed.',
      },
      {
        number: 111,
        title: 'Giving way',
        text: 'You MUST give way when there is a "Give Way" sign or road markings. On the road, give way to vehicles already on the road you are joining. Treat broken white lines with a give way triangle as a priority warning.',
        must: true,
      },
      {
        number: 112,
        title: 'Stopping',
        text: 'Before stopping, use mirrors, signal if necessary, then stop safely and promptly. Do not brake sharply unless there is a genuine emergency.',
      },
      {
        number: 113,
        title: 'Speed limits',
        text: 'You MUST NOT exceed the speed limit for the road and vehicle type. Speed limits are a maximum; you should travel at a speed appropriate to the conditions. The national speed limit on single carriageway roads is 60 mph for cars (50 mph for some vehicles). On dual carriageways and motorways it is 70 mph.',
        must: true,
      },
      {
        number: 114,
        title: 'Speed and stopping distances',
        text: 'In good conditions the stopping distance at 20 mph is 12 metres (40 ft), at 30 mph 23 metres (75 ft), at 50 mph 53 metres (175 ft), at 70 mph 96 metres (315 ft). Double these figures in wet conditions. Allow much more in icy conditions.',
      },
      {
        number: 115,
        title: 'Driving in adverse weather',
        text: 'Adjust your speed to suit the conditions. In rain, allow twice the normal stopping distance. In ice or snow, allow up to 10 times the normal distance. Drive at a speed where you can stop within the distance you can see to be clear.',
      },
      {
        number: 116,
        title: 'Normal road position',
        text: 'Drive on the left side of the road and keep left unless you need to overtake or turn right. Be in the correct lane well before you need to turn.',
      },
      {
        number: 117,
        title: 'Lane discipline on single carriageways',
        text: 'Keep left and do not straddle lane markings. If the road has two lanes, stay in the left lane unless overtaking. If three lanes are marked, do not use the rightmost lane unless overtaking.',
      },
      {
        number: 118,
        title: 'Lane discipline on dual carriageways',
        text: 'Keep to the left lane on a dual carriageway except when overtaking. Return to the left lane as soon as it is safe after overtaking. Do not hog the middle lane.',
      },
      {
        number: 119,
        title: 'Changing lanes',
        text: 'Use mirrors, signal, and check blind spots before changing lanes. Move over when it is safe. Give way to traffic in the lane you are moving into. Do not weave between lanes.',
      },
      {
        number: 120,
        title: 'Tailgating',
        text: 'Keep a safe distance from the vehicle ahead. In good conditions leave a minimum two-second gap; in wet conditions double this to four seconds. Never drive so close to another vehicle that you could not stop in time if they brake suddenly.',
      },
      {
        number: 121,
        title: 'Driving through pedestrian zones',
        text: 'Observe any restrictions on driving in pedestrian zones. Some streets may be closed to traffic at certain times. Where pedestrians and vehicles share space, drive with extreme care and at very low speeds.',
      },
      {
        number: 122,
        title: 'Driving in tunnels',
        text: 'Switch on headlights. Reduce speed. Keep a greater distance than normal from the vehicle ahead. If you break down, switch on hazard lights, switch off the engine and call for help.',
      },
      {
        number: 123,
        title: 'Driving in fog',
        text: 'Use front and rear fog lights when visibility is seriously reduced — generally to less than 100 metres. You MUST NOT use fog lights in other conditions as they can dazzle other drivers. Slow down significantly. Never assume fog clears ahead.',
        must: true,
      },
      {
        number: 124,
        title: 'Driving at night',
        text: 'Reduce speed at night as stopping distances remain the same but visibility is reduced. Use dipped headlights. Switch to full beam when no oncoming traffic is present. Dip to meet oncoming traffic.',
      },
      {
        number: 125,
        title: 'Driving in windy weather',
        text: 'High winds affect larger, higher-sided vehicles most. Motorcyclists and cyclists are also vulnerable. Be aware of gusts at exposed sections, on bridges, and when emerging from cuttings or behind high vehicles.',
      },
      {
        number: 126,
        title: 'Overtaking',
        text: 'Only overtake when it is safe to do so. Do not overtake where there is a solid white line on your side of the centre line. Do not overtake at junctions, on bends, or near brows of hills. Ensure there is a sufficient gap ahead and be sure of your vehicle\'s ability to complete the manoeuvre.',
        must: true,
      },
      {
        number: 127,
        title: 'When not to overtake',
        text: 'Do not overtake if: doing so would force another driver to swerve or slow down; you cannot see far enough ahead; there is a junction, pedestrian crossing or school exit ahead; a vehicle ahead is signalling to turn right; you would have to cross solid white lines.',
      },
      {
        number: 128,
        title: 'Motorcycles — overtaking',
        text: 'Motorcycles can be difficult to see. Take particular care to check for motorcycles when overtaking and when emerging from junctions. Do not pull back in after overtaking until you have a safe gap.',
      },
      {
        number: 129,
        title: 'Being overtaken',
        text: 'When being overtaken, maintain your speed and direction. Do not accelerate. Move slightly left if it helps the overtaking vehicle. Do not make it difficult for vehicles that have already started overtaking to complete the manoeuvre.',
      },
      {
        number: 130,
        title: 'Overtaking on the left',
        text: 'You MUST NOT overtake on the left unless traffic is moving in queues and the left lane is moving faster. Do not use the hard shoulder to overtake.',
        must: true,
      },
      {
        number: 131,
        title: 'Long vehicles',
        text: 'Long vehicles may need more space to turn. Do not cut in front of them. Keep well back and wait for a safe opportunity. Be patient.',
      },
      {
        number: 132,
        title: 'Emerging from side roads',
        text: 'At a junction, look all around — including for cyclists and motorcyclists — before emerging. Give way to traffic on the main road. Do not emerge if it would cause approaching traffic to slow or swerve.',
      },
      {
        number: 133,
        title: 'Turning right',
        text: 'Before turning right: use mirrors, signal, take up position just left of centre or in a right-turn lane. Wait for a gap in oncoming traffic. Complete the turn by passing behind vehicles turning right from the opposite direction (offside to offside) unless the road layout dictates otherwise.',
      },
      {
        number: 134,
        title: 'Turning left',
        text: 'Before turning left: use mirrors, signal, take a position close to the left-hand side. Allow for pedestrians who may be crossing. Watch out for cyclists or motorcyclists on your left.',
      },
      {
        number: 135,
        title: 'Cut-throughs and rat runs',
        text: 'Do not use residential streets as cut-throughs unless you live there or have a specific destination. Excessive speed in residential areas is particularly dangerous.',
      },
      {
        number: 136,
        title: 'Road junctions — approach',
        text: 'Approach junctions at an appropriate speed. Look, assess, decide, and act. Check for pedestrians crossing and cyclists. Be prepared to stop.',
      },
      {
        number: 137,
        title: 'Box junctions',
        text: 'You MUST NOT enter a yellow box junction unless your exit road is clear. You may wait in the box if you are turning right and are only prevented from completing the turn by oncoming traffic.',
        must: true,
      },
      {
        number: 138,
        title: 'Dual carriageways — crossing and turning',
        text: 'Treat each carriageway as a separate road. Wait in the central reservation until there is a safe gap in the second carriageway.',
      },
      {
        number: 139,
        title: 'Reversing',
        text: 'Select a safe place to reverse. Check all around, including behind. If necessary, use a banksman. Reverse only as far as necessary. You MUST NOT reverse further than necessary.',
        must: true,
      },
      {
        number: 140,
        title: 'Reversing into a road',
        text: 'Look all around before reversing. Watch out for pedestrians and cyclists. Give way to any vehicles or pedestrians. Signal if it helps.',
      },
      {
        number: 141,
        title: 'Turning in the road',
        text: 'Only turn in the road where there is enough space and a clear view in both directions. Check all around. Look out for pedestrians and cyclists.',
      },
      {
        number: 142,
        title: 'Coasting',
        text: 'You should not coast (drive with the clutch depressed or in neutral) as it reduces your control of the vehicle and increases stopping distances.',
      },
      {
        number: 143,
        title: 'Keeping left',
        text: 'Keep to the left side of the road unless overtaking, turning right, or instructed otherwise by signs. Keep left on roundabouts unless lane markings indicate otherwise.',
      },
      {
        number: 144,
        title: 'Following distances',
        text: 'The two-second rule: in good conditions, you should be at least two seconds behind the vehicle in front. In wet conditions, double this. At 60 mph in wet conditions you need at least 73 metres to stop.',
      },
      {
        number: 145,
        title: 'Emergency vehicles',
        text: 'Give way to emergency vehicles with flashing blue lights or sirens. Pull over where safe and let them pass. Do not pull over onto the hard shoulder on a motorway.',
      },
      {
        number: 146,
        title: 'Level crossings',
        text: 'Approach level crossings with great care. Never stop on a crossing. Obey all signals. Never drive onto a crossing until the road ahead is clear. Once on the crossing, keep moving.',
        must: true,
      },
      {
        number: 147,
        title: 'Trams',
        text: 'Trams are quiet and fast. Never drive or ride on tram tracks where they are separate from the road. Give way to trams at junctions. Take care when crossing tram tracks.',
      },
      {
        number: 148,
        title: 'Buses',
        text: 'Give priority to buses pulling out from bus stops if safe to do so — especially in 30 mph zones. Do not block bus lane entrances.',
      },
      {
        number: 149,
        title: 'Motorcycles and cyclists',
        text: 'Be especially careful of motorcyclists and cyclists. They are harder to see and more vulnerable. Do not overtake them unless there is a clear, safe gap of at least 1.5 metres for cyclists and more for motorcyclists.',
      },
      {
        number: 150,
        title: 'Equestrians',
        text: 'Pass horses wide and slowly. Never sound the horn or rev the engine near horses. Slow to a walk and pass with plenty of room.',
      },
      {
        number: 151,
        title: 'Obstructions',
        text: 'If you have to pass a stationary obstruction — a broken-down vehicle, road works — make sure oncoming traffic will give you room to pass before you move out.',
      },
      {
        number: 152,
        title: 'Spray',
        text: 'In wet conditions, large vehicles produce spray that can make visibility very poor. Keep well back, use headlights, and be patient before overtaking.',
      },
      {
        number: 153,
        title: 'Skidding',
        text: 'Skidding is usually caused by excessive speed for the conditions, harsh braking, or steering. If you begin to skid, ease off the accelerator and steer smoothly. In a rear-wheel skid, steer in the direction of the skid.',
      },
      {
        number: 154,
        title: 'ABS',
        text: 'ABS (Anti-lock Braking System) prevents wheels from locking during heavy braking and allows you to steer. Apply firm, continuous pressure to the brake pedal and do not release it. ABS may feel unusual — a pulsing sensation is normal.',
      },
      {
        number: 155,
        title: 'Vehicle fires',
        text: 'If your vehicle catches fire, pull over quickly and safely. Get everyone out. Do not return to the vehicle. Call 999.',
      },
      {
        number: 156,
        title: 'Loads',
        text: 'Make sure any load is properly secured before driving. Unsecured loads are dangerous and an offence. Never allow a load to obscure your view.',
        must: true,
      },
      {
        number: 157,
        title: 'Towing a trailer',
        text: 'The trailer must be roadworthy, properly attached, and lights must work. Speed limits are lower when towing. The combined length of vehicle and trailer must not exceed legal limits. Do not exceed the towing limit of your vehicle.',
      },
      {
        number: 158,
        title: 'Towing a broken-down vehicle',
        text: 'Rigid bars are safest. If using a tow rope, mark it clearly. The driver of the towed vehicle MUST be able to steer and brake. Keep it short and slow. The tow rope MUST be visible.',
        must: true,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'road-junctions',
    title: 'Road Junctions',
    icon: '✳',
    ruleRange: '170–183',
    rules: [
      {
        number: 170,
        title: 'Junctions — general',
        text: 'Take extra care at junctions. Check for other road users from all directions. Look out for pedestrians crossing, cyclists, and motorcyclists. Do not assume that because you have priority it is safe to proceed.',
      },
      {
        number: 171,
        title: 'Give way to pedestrians',
        text: 'You MUST give way to pedestrians crossing or waiting to cross a road into which you are turning. Never push through a crossing pedestrian.',
        must: true,
      },
      {
        number: 172,
        title: 'Give way to cyclists and horse riders',
        text: 'You MUST give way to cyclists, horse riders, and horse-drawn vehicles when turning into a road in which they are travelling. Take extra care and give them time and space.',
        must: true,
      },
      {
        number: 173,
        title: 'Give way signs',
        text: 'When there is a "Give Way" sign or road markings, you MUST give way to traffic on the major road. Wait until you can emerge safely without causing other road users to slow or swerve.',
        must: true,
      },
      {
        number: 174,
        title: 'Stop signs',
        text: 'You MUST stop at a stop sign and give way. Wait until the road is clear before emerging. Even if you can see it is clear, you MUST stop at the line.',
        must: true,
      },
      {
        number: 175,
        title: 'T-junctions',
        text: 'At a T-junction, the traffic on the continuing road has priority. Do not assume oncoming vehicles will stop or slow. Only emerge when you are certain it is safe.',
      },
      {
        number: 176,
        title: 'Turning right at a junction',
        text: 'Signal well in advance. Position in the centre of the road or right-turn lane. Wait for a safe gap in oncoming traffic. Turn tightly to the left of the centre point of the junction.',
      },
      {
        number: 177,
        title: 'Turning left at a junction',
        text: 'Signal in good time. Position close to the left. Be aware of pedestrians, cyclists, and motorcyclists who may be crossing or coming past on your left.',
      },
      {
        number: 178,
        title: 'Emerging from a junction',
        text: 'Look right, left, and right again before emerging. Check all mirrors and blind spots. Proceed only when it is safe. Do not emerge blindly.',
      },
      {
        number: 179,
        title: 'Blocked junctions',
        text: 'Do not block a junction when stopping in traffic. If traffic ahead is not moving, wait before crossing the junction. Blocking a box junction is a contravention.',
      },
      {
        number: 180,
        title: 'Crossing a main road',
        text: 'Where you have to cross a major road, wait until there is a safe gap in both directions. Do not force vehicles on the main road to slow down or swerve.',
      },
      {
        number: 181,
        title: 'Dual carriageways',
        text: 'When crossing or turning right at a junction on a dual carriageway, treat each carriageway separately. Wait in the central reservation.',
      },
      {
        number: 182,
        title: 'One-way streets',
        text: 'On a one-way street, all traffic moves in one direction only. Be aware of this when emerging from a junction adjacent to a one-way street.',
      },
      {
        number: 183,
        title: 'Mini roundabouts',
        text: 'Give way to traffic from the right at a mini roundabout. Take care — some road users may not give way. All vehicles must pass around the central markings, except for large vehicles.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'roundabouts',
    title: 'Roundabouts',
    icon: '🔄',
    ruleRange: '184–190',
    rules: [
      {
        number: 184,
        title: 'Approach',
        text: 'Give way to traffic from the immediate right at a roundabout unless signs or markings indicate otherwise. Watch out for vehicles already on the roundabout. Give appropriate signals.',
        must: true,
      },
      {
        number: 185,
        title: 'Going straight ahead',
        text: 'When going straight ahead at a roundabout, unless signs or lane markings indicate otherwise, approach in the left lane, keep to the left on the roundabout, and signal left before you exit.',
      },
      {
        number: 186,
        title: 'Turning right',
        text: 'When turning right, signal right on approach, approach in the right-hand lane, keep to the right on the roundabout, and signal left to exit.',
      },
      {
        number: 187,
        title: 'Long vehicles',
        text: 'Long vehicles may take a different course on the approach and on the roundabout. Allow extra room. Do not assume they will keep to their lane.',
      },
      {
        number: 188,
        title: 'Cyclists and horse riders',
        text: 'Cyclists and horse riders may keep to the left when going straight ahead. Give them time and space — they may need to change lane near exits.',
      },
      {
        number: 189,
        title: 'Spiral roundabouts',
        text: 'At spiral roundabouts, lane markings are more complex. Follow the lane markings carefully and be alert to other vehicles changing lanes.',
      },
      {
        number: 190,
        title: 'Multiple lane roundabouts',
        text: 'When using a multi-lane roundabout, follow lane markings carefully. Signal clearly. Be aware of other vehicles that may be in your blind spot when exiting.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'pedestrian-crossings',
    title: 'Pedestrian Crossings',
    icon: '🚦',
    ruleRange: '191–199',
    rules: [
      {
        number: 191,
        title: 'Approach',
        text: 'Approach pedestrian crossings with care. Be prepared to slow down or stop. Look out for people waiting to cross or crossing.',
      },
      {
        number: 192,
        title: 'Zebra crossings — rules for drivers',
        text: 'You MUST give way to pedestrians waiting to cross at a zebra crossing and those already on it. Approach at a speed at which you can stop. Slow down when you see pedestrians waiting.',
        must: true,
      },
      {
        number: 193,
        title: 'Zigzag lines',
        text: 'You MUST NOT park on or near a crossing within the zigzag lines. You MUST NOT overtake the nearest vehicle or the lead vehicle that has stopped to give way to pedestrians on a crossing.',
        must: true,
      },
      {
        number: 194,
        title: 'Pelican crossings',
        text: 'You MUST stop when the lights show red at a pelican crossing. During the flashing amber phase, give way to pedestrians who are still crossing.',
        must: true,
      },
      {
        number: 195,
        title: 'Puffin crossings',
        text: 'Do not proceed until the lights show green. Sensors detect pedestrians still crossing and hold the red signal until they have cleared the crossing.',
        must: true,
      },
      {
        number: 196,
        title: 'Toucan crossings',
        text: 'At a toucan crossing, wait for the green signal. Both pedestrians and cyclists may cross together. Allow them to complete the crossing.',
        must: true,
      },
      {
        number: 197,
        title: 'Equestrian crossings',
        text: 'Stop at equestrian (Pegasus) crossings. Horse riders will press the button at a higher level. Wait for them to cross safely. Give horses plenty of room.',
        must: true,
      },
      {
        number: 198,
        title: 'Crossing signals out of order',
        text: 'If a crossing signal is not working or flashing, treat the crossing as an ordinary road. Give way to pedestrians crossing. Exercise particular caution.',
      },
      {
        number: 199,
        title: 'Parallel crossings',
        text: 'Parallel crossings combine a zebra pedestrian crossing with a cycling crossing lane. Drivers MUST give way to cyclists on the cycling section as well as pedestrians on the zebra section.',
        must: true,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'extra-care',
    title: 'Road Users Requiring Extra Care',
    icon: '⚠',
    ruleRange: '200–237',
    rules: [
      {
        number: 200,
        title: 'The most vulnerable',
        text: 'Always be prepared to give extra time and space to pedestrians, cyclists, motorcyclists, and horse riders. They are more vulnerable than occupants of motor vehicles.',
      },
      {
        number: 201,
        title: 'Children',
        text: 'Drive carefully near schools, parks, and residential areas. Expect children to run into the road without warning. Slow down when approaching school entrances or school buses.',
      },
      {
        number: 202,
        title: 'Elderly people',
        text: 'Elderly people may take longer to cross the road and may not hear or see you. Give them time and space. Do not sound the horn or behave in a way that might alarm them.',
      },
      {
        number: 203,
        title: 'Disabled pedestrians',
        text: 'People with disabilities may have limited mobility, sight, or hearing. Give them extra time and space. Do not park across dropped kerbs.',
      },
      {
        number: 204,
        title: 'Blind and partially sighted',
        text: 'A white cane indicates the user may be blind or visually impaired. A white cane with a red band indicates deaf-blindness. Exercise extreme care and patience around these individuals.',
      },
      {
        number: 205,
        title: 'Deaf users',
        text: 'Some people may not hear your vehicle or horn because they are deaf. Do not rely on the horn alone. Slow down and give them plenty of space.',
      },
      {
        number: 206,
        title: 'Cyclists',
        text: 'Give cyclists at least 1.5 metres when overtaking at speeds up to 30 mph, and give more space at higher speeds. Do not pass too closely. Cyclists may swerve to avoid potholes or debris.',
      },
      {
        number: 207,
        title: 'Motorcyclists',
        text: 'Motorcyclists can be hard to see. Look specifically for them at junctions and when changing lanes. Give them the same space as other vehicles.',
      },
      {
        number: 208,
        title: 'Animals on roads',
        text: 'Take extra care when approaching horses and livestock. Slow to a walking pace. Pass wide and slow. Turn off the radio and do not sound the horn.',
      },
      {
        number: 209,
        title: 'Large animals',
        text: 'If you see a large animal in the road, slow down gradually and switch off the engine if necessary. Wait patiently.',
      },
      {
        number: 210,
        title: 'School crossings',
        text: 'When a school crossing patrol officer is displaying their sign, you MUST stop. Do not proceed until they have moved to the side and signalled you to proceed.',
        must: true,
      },
      {
        number: 211,
        title: 'Near schools',
        text: 'Slow down near schools. Watch for children crossing the road and being dropped off from vehicles. Never park close to a school entrance at the start or end of the school day.',
      },
      {
        number: 212,
        title: 'Buses',
        text: 'Give way to buses where safe and the road has a sign asking you to. Take care near bus stops where passengers may be crossing the road.',
      },
      {
        number: 213,
        title: 'Cyclists at junctions',
        text: 'At junctions, look specifically for cyclists. Check your mirrors and blind spots. Cyclists may be in positions that make them hard to see.',
      },
      {
        number: 214,
        title: 'Motorcycle and cyclists filtering',
        text: 'Cyclists and motorcyclists may pass on either side of slow-moving or stationary traffic. Check your mirrors before changing lanes and be aware of them.',
      },
      {
        number: 215,
        title: 'Overtaking pedestrians and cyclists',
        text: 'When overtaking pedestrians walking in the road or cyclists, leave at least 1.5 metres for cyclists (more at higher speeds). Pass pedestrians with plenty of space.',
      },
      {
        number: 216,
        title: 'Vulnerable road users in poor weather',
        text: 'In wet conditions, motorcyclists and cyclists have reduced visibility. Be aware of spray from your own vehicle affecting their vision.',
      },
      {
        number: 217,
        title: 'Overtaking horses',
        text: 'Pass horses at a walking pace and at least 2 metres wide. Do not rev your engine, sound the horn, or make sudden movements.',
      },
      {
        number: 218,
        title: 'Learner drivers',
        text: 'Learner drivers and riders are still developing their skills. Be patient and allow them extra space. Do not intimidate them with close following or horn use.',
      },
      {
        number: 219,
        title: 'Emergency vehicles',
        text: 'Give way to emergency vehicles with flashing lights or sirens. Pull over to the left where safe. Do not mount a pavement or run through red lights to move out of the way.',
      },
      {
        number: 220,
        title: 'Breakdown vehicles and recovery',
        text: 'Give extra clearance to breakdown vehicles and those assisting at the roadside. They may be carrying out essential work in dangerous conditions.',
      },
      {
        number: 221,
        title: 'Electric vehicles',
        text: 'Electric vehicles are near-silent at low speeds. Pedestrians and cyclists may not hear them approaching. Take extra care.',
      },
      {
        number: 222,
        title: 'Road maintenance vehicles',
        text: 'Road sweepers and gritting lorries travel slowly. Do not overtake them until it is safe. Do not drive through freshly applied grit or loose surface materials at speed.',
      },
      {
        number: 223,
        title: 'Slow-moving vehicles',
        text: 'Farm and construction vehicles may travel very slowly. Be patient. Only overtake when there is a clear, safe opportunity.',
      },
      {
        number: 224,
        title: 'Narrow roads',
        text: 'On very narrow roads, give way to traffic from the opposite direction where it is not possible to pass. Where there are passing places, use them to allow overtaking or oncoming vehicles to pass.',
      },
      {
        number: 225,
        title: 'Sharing lanes with cyclists',
        text: 'Where a cycle lane is not present, cyclists may travel in the traffic lane. Give them space. Do not bully them into the gutter or pressure them.',
      },
      {
        number: 226,
        title: 'Trams',
        text: 'Do not cross tram lines diagonally. Cross at right angles where possible. Take extra care in wet conditions as tram rails can be slippery. Give way to trams at all times.',
      },
      {
        number: 227,
        title: 'Pedestrians and cyclists at night',
        text: 'Cyclists and pedestrians are harder to see at night. Slow down in residential areas at night. Dip headlights to avoid dazzling cyclists.',
      },
      {
        number: 228,
        title: 'Young and inexperienced cyclists',
        text: 'Young cyclists may not have full control of their bicycles or may not be aware of traffic rules. Give them extra caution and space.',
      },
      {
        number: 229,
        title: 'Motorcycles in poor light',
        text: 'A single headlight may be difficult to judge in terms of distance and speed. Take extra care before emerging at junctions when a single headlight is approaching.',
      },
      {
        number: 230,
        title: 'Quad bikes',
        text: 'Quad bikes may be used on the road but have different handling characteristics. Give them adequate space.',
      },
      {
        number: 231,
        title: 'Road users with wide loads',
        text: 'Agricultural, abnormal, and wide loads may use the road. Slow down, give way, and do not overtake without a clear view ahead.',
      },
      {
        number: 232,
        title: 'Pushing or pulling vehicles',
        text: 'Vehicles being pushed or towed may behave unpredictably. Give them plenty of space.',
      },
      {
        number: 233,
        title: 'School buses',
        text: 'Children may cross the road near school buses. Slow down and watch carefully for children running across the road near a school bus.',
      },
      {
        number: 234,
        title: 'People working on roads',
        text: 'Road workers and others working on or near roads are in danger from passing traffic. Slow down and follow any speed restrictions in the work area.',
      },
      {
        number: 235,
        title: 'Patrol vehicles',
        text: 'Police, Highways England, and other authorities may operate slow-moving convoy vehicles. Follow their instructions.',
      },
      {
        number: 236,
        title: 'Cyclists — doors',
        text: 'When opening a vehicle door, check for cyclists and motorcyclists passing alongside. Open the door slowly and carefully using the Dutch reach where possible (use the hand furthest from the door to open).',
      },
      {
        number: 237,
        title: 'Animals crossing',
        text: 'Animals crossing the road (e.g. livestock being moved) take priority. Slow down and stop. Follow instructions from those driving the livestock.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'waiting-parking',
    title: 'Waiting and Parking',
    icon: '🅿',
    ruleRange: '238–252',
    rules: [
      {
        number: 238,
        title: 'Stopping on the road',
        text: 'You MUST NOT stop or park on: a clearway; a motorway (except emergency); a red route; a bus stop or taxi rank; in a way that blocks other traffic. You MUST comply with waiting and loading restrictions shown by yellow lines or signs.',
        must: true,
      },
      {
        number: 239,
        title: 'Getting out safely',
        text: 'When parking, use the Dutch reach to open the door (use the hand furthest from the door). Look for cyclists and motorcyclists before opening the door. Do not open the door into moving traffic.',
      },
      {
        number: 240,
        title: 'Park safely',
        text: 'Do not park where it will be difficult for other road users to see clearly or where you would obstruct their view. Do not park close to a junction, on a bend, or on a narrow road.',
      },
      {
        number: 241,
        title: 'Parking on the road',
        text: 'Where there is no parking bay, park close to and parallel with the kerb. Switch off the engine, apply the handbrake, use sidelights in poor visibility, and lock the vehicle.',
      },
      {
        number: 242,
        title: 'Yellow lines',
        text: 'Yellow lines on the road indicate restrictions on waiting. A single yellow line means restrictions apply at certain times (shown on nearby signs). Double yellow lines mean no waiting at any time.',
        must: true,
      },
      {
        number: 243,
        title: 'Where not to park',
        text: 'Do not park at or near a school entrance; at a bus stop; on a bend; near the brow of a hill; opposite or within 10 metres of a junction; where you would obstruct a dropped kerb; on a pedestrian crossing or its zigzag lines; in the space of a disabled bay unless entitled.',
        must: true,
      },
      {
        number: 244,
        title: 'Parking at night',
        text: 'You MUST use sidelights when parking on a road with a speed limit greater than 30 mph. On a road with a 30 mph limit or less, you do not need to leave lights on provided you park close to the kerb and are not at a junction.',
        must: true,
      },
      {
        number: 245,
        title: 'Parking facing traffic',
        text: 'You MUST NOT park facing oncoming traffic except in a recognised parking space. At night, parking facing the wrong way means your reflectors will not show to approaching traffic.',
        must: true,
      },
      {
        number: 246,
        title: 'Disabled bays',
        text: 'Blue badge holders may park in designated disabled bays and observe time restrictions on single yellow lines. A valid blue badge MUST be displayed.',
        must: true,
      },
      {
        number: 247,
        title: 'Loading and unloading',
        text: 'Loading or unloading restrictions are shown by yellow kerb marks. Where marks are present, loading or unloading is restricted. Observe the signs for times.',
      },
      {
        number: 248,
        title: 'On the pavement',
        text: 'You MUST NOT park on a pavement in London. Elsewhere, avoid parking on the pavement as it obstructs pedestrians, wheelchair users, and people with pushchairs. It can also damage the pavement.',
        must: true,
      },
      {
        number: 249,
        title: 'Switching off the engine',
        text: 'You MUST NOT leave a vehicle engine running unnecessarily when it is stationary on a public road. Switch off the engine when parked.',
        must: true,
      },
      {
        number: 250,
        title: 'Parking on hills',
        text: 'When parking on a hill, put the vehicle in gear (or "P" for automatics), apply the handbrake, and turn the front wheels to the kerb if facing downhill, or away from the kerb if facing uphill.',
      },
      {
        number: 251,
        title: 'Vehicle security',
        text: 'Lock your vehicle and close the windows when leaving it. Do not leave valuables on display. Use immobilisers, steering locks, or vehicle tracking devices if available.',
      },
      {
        number: 252,
        title: 'Parking near emergency access',
        text: 'Do not park in front of an entrance to a property, across a dropped kerb, or in front of emergency service accesses such as fire station entrances.',
        must: true,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'motorways',
    title: 'Motorways',
    icon: '🛤',
    ruleRange: '253–273',
    rules: [
      {
        number: 253,
        title: 'Who can use motorways',
        text: 'Motorways MUST NOT be used by pedestrians, cyclists, motorcycles under 50cc, agricultural vehicles, or certain others. Learner drivers may not use motorways unless accompanied by an approved driving instructor in a vehicle fitted with dual controls.',
        must: true,
      },
      {
        number: 254,
        title: 'Joining a motorway',
        text: 'Build up your speed on the slip road to match the speed of motorway traffic. Give way to traffic already on the motorway. Join where there is a safe gap. Do not force other vehicles to slow down.',
      },
      {
        number: 255,
        title: 'Driving on the motorway',
        text: 'Keep to the left lane unless overtaking. Return to the left lane as soon as it is safe after overtaking. Do not exceed the speed limit (70 mph maximum).',
        must: true,
      },
      {
        number: 256,
        title: 'Lane discipline',
        text: 'Lane hogging (staying in the middle or right lane unnecessarily) is an offence. Keep to the left unless overtaking. After overtaking, return to the left lane as soon as safe.',
        must: true,
      },
      {
        number: 257,
        title: 'Smart motorways',
        text: 'On smart motorways, variable speed limits are shown on overhead signs and MUST be obeyed. The hard shoulder may be used as a running lane (shown by a white lane marking) or may be a refuge area only. Follow signs carefully.',
        must: true,
      },
      {
        number: 258,
        title: 'Hard shoulder',
        text: 'On conventional motorways, the hard shoulder is for emergencies only. You MUST NOT stop on the hard shoulder except in an emergency. On smart motorways, the hard shoulder may be a running lane — check overhead signs.',
        must: true,
      },
      {
        number: 259,
        title: 'Red X',
        text: 'A red X on an overhead sign means the lane is closed. You MUST NOT drive in a lane with a red X above it.',
        must: true,
      },
      {
        number: 260,
        title: 'Emergency refuge areas',
        text: 'On smart motorways, use the emergency refuge areas (marked with orange SOS phones) if you break down. Do not stop in a live lane.',
      },
      {
        number: 261,
        title: 'Stopping on a motorway',
        text: 'If you break down on a conventional motorway, pull onto the hard shoulder as far to the left as possible. Switch on hazard lights. Exit the vehicle via the left-hand door. Stand behind the barrier if possible. Call for help from an emergency telephone.',
        must: true,
      },
      {
        number: 262,
        title: 'Smart motorway breakdown',
        text: 'If you break down on a smart motorway with no hard shoulder, try to reach an emergency refuge area. If you cannot move, switch on hazard lights, call 999, stay in the vehicle with seatbelts on if it is safer than leaving.',
      },
      {
        number: 263,
        title: 'Leaving the motorway',
        text: 'Watch for the countdown markers (300, 200, 100 yards) before the slip road. Move to the left lane in good time. Do not signal too early. Reduce speed on the slip road.',
      },
      {
        number: 264,
        title: 'Speed limits',
        text: 'The maximum speed limit on motorways is 70 mph. Variable speed limits shown on overhead signs MUST be obeyed. Speed limits may be reduced in poor conditions, incidents, or road works.',
        must: true,
      },
      {
        number: 265,
        title: 'Stopping distances',
        text: 'At 70 mph, the stopping distance is approximately 96 metres (315 feet). In wet or adverse conditions this increases significantly. Keep at least a two-second gap — four seconds in wet weather.',
      },
      {
        number: 266,
        title: 'Overhead signs',
        text: 'Overhead gantry signs display mandatory speed limits, lane closures (red X), and other information. Mandatory signs MUST be obeyed. Advisory signs are guidance.',
        must: true,
      },
      {
        number: 267,
        title: 'Emergency telephones',
        text: 'Emergency telephones are located at 1-mile intervals on the hard shoulder. Orange arrows on posts point toward the nearest telephone. Phones connect directly to the control centre and your location is automatically known.',
      },
      {
        number: 268,
        title: 'Animals',
        text: 'If transporting animals, ensure they are properly secured. If an animal escapes on the motorway, do not attempt to retrieve it yourself. Call the police.',
      },
      {
        number: 269,
        title: 'Motorway incidents',
        text: 'Do not slow down to look at incidents (rubbernecking). It delays recovery, causes secondary accidents, and is dangerous. Keep your eyes on the road.',
      },
      {
        number: 270,
        title: 'Fog on motorways',
        text: 'Motorway fog can be patchy and sudden. Reduce speed significantly. Use dipped headlights and front and rear fog lights when visibility is less than 100 metres. Do not drive at a speed where you cannot stop in the distance you can see.',
      },
      {
        number: 271,
        title: 'Strong winds',
        text: 'Strong crosswinds on motorways can affect motorcycles, high-sided vehicles, and caravans particularly. Reduce speed and hold a firm grip.',
      },
      {
        number: 272,
        title: 'Bridges and exposed sections',
        text: 'Bridges and cuttings are particularly exposed to crosswinds. Expect sudden gusts when emerging from cuttings or crossing exposed bridges.',
      },
      {
        number: 273,
        title: 'Motorway contraflows',
        text: 'In road works, a contraflow system may mean reduced lanes and speed limits. Comply with the reduced speed limits and lane restrictions. Keep well back from the vehicle ahead.',
        must: true,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'breakdowns',
    title: 'Breakdowns and Incidents',
    icon: '🔧',
    ruleRange: '274–287',
    rules: [
      {
        number: 274,
        title: 'Breakdowns',
        text: 'If your vehicle breaks down, get it off the road as quickly and safely as possible. Switch on hazard warning lights. Place a warning triangle at least 45 metres behind the vehicle on a non-motorway road. Do not place a warning triangle on a motorway.',
      },
      {
        number: 275,
        title: 'On a motorway',
        text: 'If you break down on a motorway, pull onto the hard shoulder as far left as possible, switch on hazard lights, exit via the left-hand door, stay behind the barrier, call for help from an emergency telephone or mobile.',
      },
      {
        number: 276,
        title: 'Safety while waiting',
        text: 'Wait near the vehicle but as far from traffic as possible. Do not wait in the vehicle if on a hard shoulder — the risk of being struck is high. Keep passengers together away from the road.',
      },
      {
        number: 277,
        title: 'Rejoining from the hard shoulder',
        text: 'Before rejoining the motorway from the hard shoulder, build up your speed on the hard shoulder. Wait for a safe gap. Merge smoothly into the traffic.',
      },
      {
        number: 278,
        title: 'Warning triangles',
        text: 'Place a warning triangle at least 45 metres behind a broken-down vehicle on a single carriageway road. Do not use on motorways. In poor visibility or at night, leave hazard lights on.',
      },
      {
        number: 279,
        title: 'Reporting an incident',
        text: 'If you witness a serious road accident, do not stop unless you can help without blocking the road. Call 999 or 112. Give the location, what happened, and any injuries.',
      },
      {
        number: 280,
        title: 'Immediate action at an accident',
        text: 'If involved in or first at the scene of an accident: warn other traffic by hazard lights; call emergency services (999); do not move injured people unless there is immediate danger; do not remove a motorcyclist\'s helmet unless essential.',
      },
      {
        number: 281,
        title: 'First aid',
        text: 'Provide first aid where you can. If someone is unconscious and breathing, place in the recovery position. If not breathing normally, begin CPR. Keep them warm. Do not give anything to eat or drink.',
      },
      {
        number: 282,
        title: 'Exchange details',
        text: 'If involved in a collision with another vehicle, you MUST give your name, address, and vehicle registration number to anyone who has a reasonable cause to ask. If no one requires this at the time, report it to the police within 24 hours.',
        must: true,
      },
      {
        number: 283,
        title: 'Damage to property',
        text: 'If you damage another vehicle or property and there is no one present, leave your details in a visible location and report the incident to the police as soon as practicable and within 24 hours.',
        must: true,
      },
      {
        number: 284,
        title: 'Insurance documents',
        text: 'If you are involved in a collision involving injury, you may be asked to produce your insurance certificate to the police or to another party involved. If you cannot produce it at the time, you MUST report to a police station within 7 days.',
        must: true,
      },
      {
        number: 285,
        title: 'Dangerous loads',
        text: 'If a vehicle carrying dangerous goods is involved in an accident, warn other traffic, keep people away, call 999, and pass on information from the vehicle\'s hazard warning panels to the emergency services.',
      },
      {
        number: 286,
        title: 'Fire',
        text: 'If a vehicle catches fire, get all occupants clear of the vehicle immediately. Call 999. Do not attempt to retrieve belongings. Warn other road users.',
      },
      {
        number: 287,
        title: 'Animals in accidents',
        text: 'If an animal is injured or killed in a road accident, you MUST report this to the police. This applies to dogs, horses, cattle, pigs, goats, sheep, donkeys, and mules.',
        must: true,
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'roadworks',
    title: 'Road Works, Level Crossings & Tramways',
    icon: '🚧',
    ruleRange: '288–307',
    rules: [
      {
        number: 288,
        title: 'Road works',
        text: 'Comply with all temporary road signs and signals in road works. Slow down. Obey reduced speed limits. Look for road workers and be prepared to stop. Drive carefully through the works.',
        must: true,
      },
      {
        number: 289,
        title: 'Speed in road works',
        text: 'Obey any speed limits shown. Average speed checks (cameras) may be in place. Do not exceed the limit.',
        must: true,
      },
      {
        number: 290,
        title: 'Lane closures',
        text: 'In road works with lane closures, merge in turn (zip merging) where lanes are combining. Do not jump the queue by overtaking in a closing lane and forcing your way in — it is dangerous and causes congestion.',
      },
      {
        number: 291,
        title: 'Level crossings — approach',
        text: 'Approach level crossings carefully. Do not stop on the tracks. Obey all signals and signs. Be prepared to stop at any time. Do not attempt to cross once barriers have started to descend.',
        must: true,
      },
      {
        number: 292,
        title: 'Barriers and lights',
        text: 'You MUST NOT proceed across a level crossing when the lights are showing red or the alarm is sounding, or when the barriers are closed or closing.',
        must: true,
      },
      {
        number: 293,
        title: 'Open crossings',
        text: 'At crossings with no barriers, gates, or lights, look both ways, listen, and be sure no train is coming before crossing.',
      },
      {
        number: 294,
        title: 'User-operated crossings',
        text: 'At user-operated crossings (with a gate you open), follow the posted instructions. Open the gate only when you are sure no train is approaching. Cross quickly, then close the gate.',
      },
      {
        number: 295,
        title: 'Breakdown on a level crossing',
        text: 'If your vehicle breaks down on a level crossing, get everyone out and clear of the crossing immediately. Call the signal box using the emergency telephone. Move the vehicle clear only if there is enough time and it is safe.',
      },
      {
        number: 296,
        title: 'Tramways',
        text: 'Trams operate on tracks set into the road surface. Never drive on tram-only sections. Give way to trams as they cannot swerve or stop as quickly as other vehicles.',
        must: true,
      },
      {
        number: 297,
        title: 'Tramway tracks',
        text: 'Cross tramway tracks at right angles where possible to avoid getting wheels caught. Take care on wet lines — rails are very slippery. Motorcyclists and cyclists should be especially careful.',
      },
      {
        number: 298,
        title: 'Tram stops',
        text: 'Do not park at or near a tram stop in a way that obstructs passengers boarding or alighting. Give way to passengers crossing the road from tram stops.',
      },
      {
        number: 299,
        title: 'Pedestrian-priority areas',
        text: 'In areas shared by pedestrians and trams, always give way to pedestrians and trams. Drive at very low speeds.',
      },
      {
        number: 300,
        title: 'One-way systems and trams',
        text: 'Trams may operate in both directions on one-way streets. Look both ways for trams even on streets you believe to be one-way.',
      },
      {
        number: 301,
        title: 'Signage in road works',
        text: 'Temporary road signs in works have an orange background and black text. These are mandatory where they show mandatory information. Follow all instructions.',
        must: true,
      },
      {
        number: 302,
        title: 'Road works — lane changing',
        text: 'Move to the correct lane in good time when lane closures are signposted. Do not leave it to the last moment.',
      },
      {
        number: 303,
        title: 'Night road works',
        text: 'Road works at night may be poorly lit. Slow down significantly. Watch for workers in the carriageway and obey all temporary signals.',
      },
      {
        number: 304,
        title: 'Temporary traffic lights',
        text: 'Obey all temporary traffic lights. They MUST be complied with as fully as permanent signals.',
        must: true,
      },
      {
        number: 305,
        title: 'Smart motorway road works',
        text: 'On smart motorways, road works may require all lanes including the hard shoulder to carry traffic. Watch for signs and camera enforcement.',
      },
      {
        number: 306,
        title: 'Narrow lanes in road works',
        text: 'Lanes are often narrowed in road works. Drive carefully. Large vehicles may need more room. Keep well back.',
      },
      {
        number: 307,
        title: 'Road workers',
        text: 'Road workers in the highway have little protection. Give them time and space. Slow down significantly. Be prepared to stop.',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  {
    id: 'annexes',
    title: 'Annexes',
    icon: '📎',
    ruleRange: 'Annexes 1–8',
    rules: [
      {
        number: 0,
        title: 'Annex 1 — Choosing and maintaining your vehicle',
        text: 'Consider fuel efficiency, CO₂ emissions, running costs, and environmental impact. Maintain your vehicle regularly. Check tyres, brakes, lights, fluid levels, and wipers. Keep mirrors and windows clean. Carry a spare tyre, jack, and wheel brace.',
      },
      {
        number: 0,
        title: 'Annex 2 — Motorcycle licence requirements',
        text: 'CBT (Compulsory Basic Training) must be completed before riding on the road as a learner. A1 licence: motorcycles up to 125cc and 11 kW. A2 licence: motorcycles up to 35 kW. A licence (full): no restrictions. Progressive access applies after 2 years at each category.',
      },
      {
        number: 0,
        title: 'Annex 3 — Motor vehicle documentation',
        text: 'You must carry (or be able to produce) a valid driving licence, certificate of insurance, and MOT certificate (if required). Vehicles used on public roads must have a current Vehicle Excise Duty (road tax) licence.',
      },
      {
        number: 0,
        title: 'Annex 4 — The road user and the law',
        text: 'The Highway Code identifies "MUST" and "MUST NOT" rules as backed by law under the Road Traffic Act and associated legislation. Other rules are recommendations. Failure to follow recommendations may be used in court as evidence of careless or dangerous driving.',
      },
      {
        number: 0,
        title: 'Annex 5 — Penalties',
        text: 'Penalties for road traffic offences range from fixed penalties (points on licence and fines) to court-imposed penalties including disqualification, heavy fines, and imprisonment. Dangerous driving, drink-driving, and causing death by dangerous driving carry the most serious penalties.',
      },
      {
        number: 0,
        title: 'Annex 6 — Vehicle maintenance, safety and security',
        text: 'Regularly check: engine oil, coolant, brake fluid, power steering fluid, windscreen washer fluid, tyre pressures and condition, lights, reflectors, wipers, and horn. Ensure your vehicle passes its MOT. Never modify a vehicle in a way that makes it dangerous.',
      },
      {
        number: 0,
        title: 'Annex 7 — First aid on the road',
        text: 'At an incident: warn other traffic; call 999; do not move injured casualties unless in immediate danger; keep them warm; control any heavy bleeding by applying pressure; place unconscious breathing casualties in the recovery position; if not breathing, begin CPR (30 compressions, 2 rescue breaths). An AED (defibrillator) should be used as soon as available.',
      },
      {
        number: 0,
        title: 'Annex 8 — Safety code for new drivers',
        text: 'New drivers are at significantly higher risk of accidents. Avoid driving at high risk times (late night, early morning). Do not carry groups of young passengers. Never drive under the influence. Keep within speed limits. Build up experience gradually in familiar areas before extending range.',
      },
    ],
  },
]
