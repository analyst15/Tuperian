import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle, CheckCircle, ArrowRight, RotateCcw, Lock } from 'lucide-react';
import { SECURITY_QUESTIONS } from '../data/agencyData';

interface SecurityEvaluatorProps {
  onBookSecurityAudit: (score: number, riskyAreas: string[]) => void;
}

export const SecurityEvaluator: React.FC<SecurityEvaluatorProps> = ({ onBookSecurityAudit }) => {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleOptionSelect = (qId: string, score: number) => {
    setAnswers(prev => ({ ...prev, [qId]: score }));
  };

  const calculateScore = () => {
    const totalScore = (Object.values(answers) as number[]).reduce((a: number, b: number) => a + b, 0);
    return Math.min(100, Math.max(0, totalScore));
  };

  const getRiskLevel = (score: number) => {
    if (score >= 80) return { label: 'Low Cyber Risk (Strong Posture)', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' };
    if (score >= 50) return { label: 'Moderate Vulnerability (Remediation Advised)', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/30' };
    return { label: 'Critical Ransomware & Breach Risk!', color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/30' };
  };

  const score = calculateScore();
  const risk = getRiskLevel(score);
  const totalQuestions = SECURITY_QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  // Find risky items
  const riskyCategories: string[] = [];
  SECURITY_QUESTIONS.forEach(q => {
    const currentAnswerScore = answers[q.id];
    if (currentAnswerScore !== undefined && currentAnswerScore < 20) {
      riskyCategories.push(q.category);
    }
  });

  return (
    <section id="security" className="py-16 bg-slate-900 text-slate-100 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 text-xs font-bold text-rose-400 border border-rose-500/30">
            <ShieldAlert className="w-4 h-4 text-rose-400" />
            <span>Interactive Cyber Defense Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            60-Second Small Business Cyber Security Evaluator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Over 60% of small businesses close within 6 months of a major cyber breach or ransomware attack. Evaluate your current protection status below.
          </p>
        </div>

        {!submitted ? (
          /* Question Form */
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Progress Bar */}
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 pb-2 border-b border-slate-800">
              <span>Assessment Progress ({answeredCount} / {totalQuestions} answered)</span>
              <span className="text-cyan-400">{Math.round((answeredCount / totalQuestions) * 100)}% Complete</span>
            </div>

            {/* Questions List */}
            <div className="space-y-8">
              {SECURITY_QUESTIONS.map((q, idx) => (
                <div key={q.id} className="space-y-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                    <span>Question {idx + 1}: {q.category}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{q.question}</h3>

                  <div className="grid sm:grid-cols-3 gap-3 pt-1">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = answers[q.id] === opt.score;
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleOptionSelect(q.id, opt.score)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-cyan-500/10 border-cyan-500 text-white font-bold ring-1 ring-cyan-500'
                              : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                          }`}
                        >
                          <span className="text-xs">{opt.label}</span>
                          <span className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${
                            opt.isRisky ? 'text-rose-400' : 'text-emerald-400'
                          }`}>
                            {opt.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Diagnostic Button */}
            <div className="pt-4 flex justify-end">
              <button
                disabled={answeredCount < totalQuestions}
                onClick={() => setSubmitted(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:opacity-95 text-white font-extrabold text-xs tracking-wide shadow-xl shadow-rose-950/40 transition-all cursor-pointer disabled:opacity-40"
              >
                {answeredCount < totalQuestions
                  ? `Answer All Questions (${answeredCount}/${totalQuestions})`
                  : 'Calculate Security Posture & Vulnerabilities →'}
              </button>
            </div>

          </div>
        ) : (
          /* Results Dashboard */
          <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* Score & Risk Badge */}
            <div className={`p-6 rounded-2xl border ${risk.bg} flex flex-col sm:flex-row items-center justify-between gap-6`}>
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Security Score Calculation</span>
                <h3 className={`text-2xl font-extrabold ${risk.color}`}>{risk.label}</h3>
                <p className="text-xs text-slate-300 max-w-lg">
                  {score >= 80
                    ? 'Your current cyber posture shows good baseline hygiene. Tuperian can help maintain SOC2 readiness.'
                    : 'Your organization has active security gaps that expose company data and customer files to automated ransomware scanners.'}
                </p>
              </div>

              {/* Gauge Circle */}
              <div className="flex flex-col items-center justify-center w-28 h-28 rounded-full bg-slate-900 border-4 border-slate-800 shrink-0">
                <span className={`text-3xl font-black ${risk.color}`}>{score}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">/ 100 Health</span>
              </div>
            </div>

            {/* Identified Gaps */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Identified Security Gaps & Recommended Fixes</span>
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {SECURITY_QUESTIONS.map(q => {
                  const userScore = answers[q.id];
                  const isGap = userScore < 20;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border space-y-2 ${
                        isGap ? 'bg-rose-500/5 border-rose-500/30' : 'bg-slate-900 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-white">{q.category}</span>
                        {isGap ? (
                          <span className="text-rose-400 flex items-center gap-1 text-[10px] uppercase font-extrabold">
                            <ShieldAlert className="w-3.5 h-3.5" /> High Risk
                          </span>
                        ) : (
                          <span className="text-emerald-400 flex items-center gap-1 text-[10px] uppercase font-extrabold">
                            <CheckCircle className="w-3.5 h-3.5" /> Protected
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300">
                        {isGap
                          ? `Gaps detected in ${q.category.toLowerCase()}. Vulnerable to phishing or data lockouts.`
                          : `Robust policies configured for ${q.category.toLowerCase()}.`}
                      </p>

                      {isGap && (
                        <div className="pt-2 border-t border-rose-500/20 text-[11px] text-cyan-300 font-semibold flex items-center gap-1.5">
                          <Lock className="w-3 h-3 text-cyan-400" />
                          <span>Tuperian Solution: Managed 24/7 EDR & Duo MFA</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold transition-colors flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Diagnostic</span>
              </button>

              <button
                onClick={() => onBookSecurityAudit(score, riskyCategories)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs tracking-wide shadow-xl shadow-cyan-500/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Book Free Cyber Security Remediation Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
