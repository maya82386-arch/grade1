/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomeHero } from './components/HomeHero';
import { LetterKingdom } from './components/LetterKingdom';
import { InteractiveGames } from './components/InteractiveGames';
import { WritingLab } from './components/WritingLab';
import { CertificateModal } from './components/CertificateModal';
import { Footer } from './components/Footer';
import { ALPHABET_DATA } from './data/alphabetData';
import { loadProgress, saveProgress } from './utils/storage';
import { LetterData, UserProgress, DifficultyLevel } from './types';
import { audioEngine } from './utils/audio';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadProgress);
  const [currentTab, setCurrentTab] = useState<'home' | 'alphabet' | 'games' | 'writing' | 'certificate'>('home');
  const [labSelectedLetter, setLabSelectedLetter] = useState<LetterData>(ALPHABET_DATA[0]);

  // Persist progress changes to localStorage
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Sync initial sound/music states
  useEffect(() => {
    audioEngine.setSoundEnabled(progress.soundEnabled);
    audioEngine.setMusicEnabled(progress.musicEnabled);
  }, []);

  const handleAddStars = (starsToAdd: number) => {
    setProgress((prev) => {
      const nextStars = prev.totalStars + starsToAdd;
      const nextBadges = [...prev.badges];

      // Auto-unlock badges based on achievements
      if (nextStars >= 50 && !nextBadges.includes('badge_catcher')) {
        nextBadges.push('badge_catcher');
      }
      if (nextStars >= 100 && !nextBadges.includes('badge_treasure')) {
        nextBadges.push('badge_treasure');
      }

      return {
        ...prev,
        totalStars: nextStars,
        badges: nextBadges
      };
    });
  };

  const handleToggleMastered = (letterId: number) => {
    setProgress((prev) => {
      const exists = prev.masteredLetters.includes(letterId);
      const updatedLetters = exists
        ? prev.masteredLetters.filter((id) => id !== letterId)
        : [...prev.masteredLetters, letterId];

      const starsBonus = !exists ? 10 : 0;
      const nextBadges = [...prev.badges];

      if (updatedLetters.length === 28 && !nextBadges.includes('badge_master_all')) {
        nextBadges.push('badge_master_all');
      }

      return {
        ...prev,
        masteredLetters: updatedLetters,
        totalStars: prev.totalStars + starsBonus,
        badges: nextBadges
      };
    });
  };

  const handleLetterPracticed = (letterId: number) => {
    setProgress((prev) => {
      const practiced = prev.writingPracticed.includes(letterId)
        ? prev.writingPracticed
        : [...prev.writingPracticed, letterId];

      const nextBadges = [...prev.badges];
      if (practiced.length >= 3 && !nextBadges.includes('badge_calligrapher')) {
        nextBadges.push('badge_calligrapher');
      }

      return {
        ...prev,
        writingPracticed: practiced,
        badges: nextBadges
      };
    });
  };

  const handleRecordGameCompleted = (gameKey: 'catcher' | 'matching' | 'hiddenLetter' | 'train' | 'treasure') => {
    setProgress((prev) => {
      const updatedGames = {
        ...prev.gamesCompleted,
        [gameKey]: prev.gamesCompleted[gameKey] + 1
      };
      const nextBadges = [...prev.badges];

      if (gameKey === 'train' && !nextBadges.includes('badge_train')) {
        nextBadges.push('badge_train');
      }
      if (gameKey === 'matching' && !nextBadges.includes('badge_matcher')) {
        nextBadges.push('badge_matcher');
      }

      return {
        ...prev,
        gamesCompleted: updatedGames,
        badges: nextBadges
      };
    });
  };

  const handleOpenWritingLab = (letter: LetterData) => {
    setLabSelectedLetter(letter);
    setCurrentTab('writing');
  };

  const handleSetDifficulty = (level: DifficultyLevel) => {
    setProgress((prev) => ({
      ...prev,
      difficulty: level
    }));
  };

  const handleSetSoundEnabled = (v: boolean) => {
    setProgress((prev) => ({ ...prev, soundEnabled: v }));
  };

  const handleSetMusicEnabled = (v: boolean) => {
    setProgress((prev) => ({ ...prev, musicEnabled: v }));
  };

  const handleSetStudentName = (name: string) => {
    setProgress((prev) => ({ ...prev, studentName: name }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-amber-50/30 text-slate-800">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        totalStars={progress.totalStars}
        masteredCount={progress.masteredLetters.length}
        soundEnabled={progress.soundEnabled}
        setSoundEnabled={handleSetSoundEnabled}
        musicEnabled={progress.musicEnabled}
        setMusicEnabled={handleSetMusicEnabled}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {currentTab === 'home' && (
          <HomeHero
            onStartClick={() => {
              setCurrentTab('alphabet');
              audioEngine.speakArabic('مرحباً بك في مملكة الحروف الـ28!');
            }}
            onNavigate={(tab) => setCurrentTab(tab)}
            difficulty={progress.difficulty}
            setDifficulty={handleSetDifficulty}
            masteredCount={progress.masteredLetters.length}
            totalStars={progress.totalStars}
          />
        )}

        {currentTab === 'alphabet' && (
          <LetterKingdom
            alphabet={ALPHABET_DATA}
            masteredLetters={progress.masteredLetters}
            onToggleMastered={handleToggleMastered}
            onOpenWritingLab={handleOpenWritingLab}
            difficulty={progress.difficulty}
          />
        )}

        {currentTab === 'games' && (
          <InteractiveGames
            alphabet={ALPHABET_DATA}
            onAddStars={handleAddStars}
            difficulty={progress.difficulty}
            onRecordGameCompleted={handleRecordGameCompleted}
          />
        )}

        {currentTab === 'writing' && (
          <WritingLab
            alphabet={ALPHABET_DATA}
            initialLetter={labSelectedLetter}
            onLetterPracticed={handleLetterPracticed}
            onAddStars={handleAddStars}
          />
        )}

        {currentTab === 'certificate' && (
          <CertificateModal
            studentName={progress.studentName}
            setStudentName={handleSetStudentName}
            masteredCount={progress.masteredLetters.length}
            totalStars={progress.totalStars}
            unlockedBadges={progress.badges}
          />
        )}
      </main>

      {/* Mandatory Footer */}
      <Footer />
    </div>
  );
}
