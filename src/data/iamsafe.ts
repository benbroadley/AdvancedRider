export interface IAMSAFELetter {
  letter: string
  word: string
  description: string
  options: string[]
}

export const iamsafeLetters: IAMSAFELetter[] = [
  {
    letter: 'I',
    word: 'Illness',
    description: 'Am I suffering from any illness, no matter how minor? A cold, headache, fever, or any condition affecting concentration, reaction time, or physical ability can significantly impair your riding. If in doubt, don\'t ride.',
    options: ['Illness', 'Injury', 'Intoxication', 'Insurance'],
  },
  {
    letter: 'A',
    word: 'Attitude',
    description: 'Is my attitude appropriate for safe riding? Riding with aggression, impatience, over-confidence, or a "nothing will happen to me" mindset increases risk. A calm, responsible, and humble attitude — acknowledging your own limits and the unpredictability of other road users — is essential.',
    options: ['Attitude', 'Alertness', 'Anxiety', 'Awareness'],
  },
  {
    letter: 'M',
    word: 'Medication',
    description: 'Am I taking any medication that could affect my ability to ride? Many prescription and over-the-counter medicines — including antihistamines, painkillers, and some antibiotics — can cause drowsiness, impaired vision, or reduced concentration. Always check the label and consult a pharmacist.',
    options: ['Medication', 'Mindset', 'Mood', 'Mechanics'],
  },
  {
    letter: 'S',
    word: 'Sleep',
    description: 'Have I had enough sleep? Fatigue caused by insufficient sleep is a major cause of accidents. Even mild tiredness slows reactions, reduces hazard perception, and can cause microsleeps. Plan rest stops every two hours on longer journeys and never ride if you feel drowsy.',
    options: ['Sleep', 'Stress', 'Stamina', 'Speed'],
  },
  {
    letter: 'A',
    word: 'Alcohol',
    description: 'Have I consumed any alcohol recently? Alcohol impairs judgement, slows reaction times, reduces coordination, and increases risk-taking. Even small amounts affect riding ability. Alcohol consumed the previous evening may still be present in your system the next morning.',
    options: ['Alcohol', 'Attitude', 'Alertness', 'Anxiety'],
  },
  {
    letter: 'F',
    word: 'Food',
    description: 'Have I eaten adequately? Riding on an empty stomach reduces concentration and physical performance. Low blood sugar impairs decision-making and reaction time. Eat a balanced meal before longer rides. Equally, avoid heavy meals that cause drowsiness.',
    options: ['Food', 'Fatigue', 'Fitness', 'Focus'],
  },
  {
    letter: 'E',
    word: 'Emotion',
    description: 'Am I in an appropriate emotional state to ride? Strong emotions — anger, grief, anxiety, or excitement — reduce concentration and lead to poor decision-making on the road. If you are emotionally compromised, allow time to compose yourself before setting off, or consider not riding.',
    options: ['Emotion', 'Energy', 'Experience', 'Equipment'],
  },
]
