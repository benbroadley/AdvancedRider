export interface POWDDERSSLetter {
  letter: string
  word: string
  description: string
  options: string[]
}

export const powdderssLetters: POWDDERSSLetter[] = [
  {
    letter: 'P',
    word: 'Petrol',
    description: 'Check the fuel level before every ride. Estimate how far you need to travel and whether you have enough fuel to reach your destination or the next fuel stop. Running out of fuel at speed or on a fast road is dangerous.',
    options: ['Petrol', 'Pressure', 'Position', 'Pedals'],
  },
  {
    letter: 'O',
    word: 'Oil',
    description: 'Check the engine oil level using the sight glass or dipstick. Low oil causes overheating and engine damage. Look underneath the bike for drips or pooling that may indicate a leak. Check transmission oil if your bike requires it separately.',
    options: ['Oil', 'Output', 'Overheating', 'Odometer'],
  },
  {
    letter: 'W',
    word: 'Water',
    description: 'On water-cooled motorcycles, check the coolant level in the reservoir. Never remove the cap when the engine is hot. Look for leaks around hoses and the radiator. A low coolant level can lead to overheating and engine failure.',
    options: ['Water', 'Wheels', 'Weight', 'Wipers'],
  },
  {
    letter: 'D',
    word: 'Damage',
    description: 'Carry out a visual inspection of the whole machine for any damage. Look for cracks, dents, bent components, loose or missing fasteners, and anything that looks out of place since the last ride. Damage can affect handling and safety in ways that may not be immediately obvious.',
    options: ['Damage', 'Drive', 'Disc brakes', 'Dashboard'],
  },
  {
    letter: 'D',
    word: 'Drive',
    description: 'Check the drive chain tension and lubrication — it should have the correct slack as specified in your owner\'s manual (typically 25–30mm). Check for tight spots, stiff links, or excessive wear. If your bike has belt or shaft drive, inspect for visible wear or damage.',
    options: ['Drive', 'Damage', 'Disc brakes', 'Dashboard'],
  },
  {
    letter: 'E',
    word: 'Electrics',
    description: 'Check all lights: headlight (dipped and main beam), tail light, brake light (activated by both front and rear brake), and all four indicators. Test the horn. Check the instrument panel for warning lights. A blown brake light makes you invisible to following traffic.',
    options: ['Electrics', 'Exhaust', 'Engine', 'Equipment'],
  },
  {
    letter: 'R',
    word: 'Rubber',
    description: 'Check tyre pressure with a gauge when the tyres are cold — pressures increase as tyres warm up. Check tread depth (legal minimum 1mm, but 3mm or more is recommended). Inspect for cuts, bulges, embedded nails or glass, and uneven wear patterns. Tyre condition is fundamental to all grip, braking, and cornering.',
    options: ['Rubber', 'Rims', 'Reflectors', 'Rear light'],
  },
  {
    letter: 'S',
    word: 'Steering',
    description: 'With the bike on a stand, turn the handlebars slowly through their full lock-to-lock range. Movement should be smooth with no tightness, notchiness, or resistance — which can indicate worn or pitted headstock bearings. Check handlebar clamps and controls are secure and move freely.',
    options: ['Steering', 'Suspension', 'Shock absorbers', 'Signals'],
  },
  {
    letter: 'S',
    word: 'Suspension',
    description: 'Check the front fork stanchions for oil leaks — wet, dirty, or scored surfaces indicate a blown seal. Push down on the forks to check for smooth compression and rebound. Check the rear shock(s) for leaks and confirm the bike sits at the correct ride height and responds correctly to inputs.',
    options: ['Suspension', 'Steering', 'Shock absorbers', 'Signals'],
  },
]
