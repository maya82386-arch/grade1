export type DifficultyLevel = 'level1' | 'level2' | 'level3';

export interface LetterVowel {
  char: string;
  sound: string;
  word: string;
  emoji: string;
  label: string;
}

export interface LetterExample {
  word: string;
  meaning: string;
  emoji: string;
  highlightIndex?: number;
  omaniContext?: string;
}

export interface LetterForms {
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  exampleInitial: string;
  exampleMedial: string;
  exampleFinal: string;
}

export interface WritingStep {
  step: number;
  instruction: string;
  direction: string; // e.g. "من الأعلى إلى الأسفل ↓"
}

export interface LetterData {
  id: number;
  char: string;
  name: string;
  phoneticName: string;
  soundDescription: string;
  primaryWord: string;
  primaryWordEmoji: string;
  primaryWordContext?: string;
  examples: LetterExample[];
  forms: LetterForms;
  vowels: {
    fatha: LetterVowel;
    damma: LetterVowel;
    kasra: LetterVowel;
    sukun: LetterVowel;
  };
  writingGuide: {
    rule: string;
    steps: WritingStep[];
    dotsDescription: string;
    strokeSvgPath?: string;
  };
  similarLetters: string[];
  themeColor: string; // for playful kid card coloring
}

export interface UserProgress {
  masteredLetters: number[]; // letter IDs
  totalStars: number;
  gamesCompleted: {
    catcher: number;
    matching: number;
    hiddenLetter: number;
    train: number;
    treasure: number;
  };
  writingPracticed: number[];
  studentName: string;
  soundEnabled: boolean;
  musicEnabled: boolean;
  difficulty: DifficultyLevel;
  badges: string[];
}
