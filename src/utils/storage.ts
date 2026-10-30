import { UserProgress, DifficultyLevel } from '../types';

const STORAGE_KEY = 'moghamarat_alhoroof_progress_v1';

export const DEFAULT_PROGRESS: UserProgress = {
  masteredLetters: [1, 2], // 2 sample mastered letters initially so child immediately sees progress
  totalStars: 15,
  gamesCompleted: {
    catcher: 1,
    matching: 1,
    hiddenLetter: 0,
    train: 0,
    treasure: 0
  },
  writingPracticed: [1],
  studentName: 'بطل الحروف الصغير',
  soundEnabled: true,
  musicEnabled: false,
  difficulty: 'level1',
  badges: ['badge_explorer']
};

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch (e) {
    console.error('Failed to load progress from localStorage', e);
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export const BADGES_LIST = [
  { id: 'badge_explorer', title: 'مستكشف الحروف', desc: 'بدء أول خطوة في المغامرة', icon: '🧭' },
  { id: 'badge_catcher', title: 'صياد الحروف البارع', desc: 'إتقان لعبة صائد الحروف', icon: '🎯' },
  { id: 'badge_matcher', title: 'مطابق الصور الذكي', desc: 'الفوز في لعبة ربط الصور', icon: '🧩' },
  { id: 'badge_train', title: 'قبطان قطار الحروف', desc: 'ترتيب الحروف في مقطورات القطار', icon: '🚂' },
  { id: 'badge_calligrapher', title: 'فنان الخط الجميل', desc: 'التدرب على كتابة الحروف في المختبر', icon: '✍️' },
  { id: 'badge_treasure', title: 'بطل كنز المعرفة', desc: 'فتح صندوق الكنز السري', icon: '💎' },
  { id: 'badge_master_all', title: 'سلطان الحروف الـ28', desc: 'إتقان كافة حروف الهجاء العربية', icon: '👑' }
];
