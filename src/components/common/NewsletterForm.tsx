import React, { useState } from 'react';
import { Mail, AlertCircle, Info, ShieldCheck } from 'lucide-react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'notice' | 'error'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail || !/^\S+@\S+\.\S+$/.test(cleanEmail)) {
      setFeedback({
        type: 'error',
        message: 'Please provide a valid email address.',
      });
      return;
    }

    // In accordance with editorial trust requirements:
    // No external email provider is currently provisioned in this environment.
    // We explicitly state the inactive status rather than simulating a fake backend success.
    setFeedback({
      type: 'notice',
      message:
        'Newsletter dispatch is currently in preview mode (no external email provider like Resend, Mailchimp, or Substack is connected). To activate automatic subscriber collection, configure your live ESP API endpoint in production.',
    });
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="my-12 rounded-2xl border border-[#9BC7FF]/20 bg-[#111C2F] p-8 sm:p-10 relative overflow-hidden"
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 text-xs text-[#8CF0C4] font-medium mb-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Editorial Dispatch • Preview Mode</span>
        </div>

        <h3 id="newsletter-heading" className="text-xl sm:text-2xl font-serif font-medium text-[#EDF4FF]">
          Stay Grounded with the Weekly Dispatch
        </h3>
        <p className="mt-2 text-sm text-[#AAB9CE] leading-relaxed">
          Every Sunday morning, we send three hand-selected essays on intentional living, clear digital habits, and human resilience. No automated sponsors, no filler.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAB9CE]" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (feedback) setFeedback(null);
                }}
                placeholder="Enter your email address"
                required
                aria-label="Email address for Trendora Daily newsletter"
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#0B1220] border border-[#AAB9CE]/20 text-sm text-[#EDF4FF] placeholder-[#AAB9CE]/60 focus:border-[#8CF0C4] focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-[#8CF0C4] text-[#080E19] text-sm font-semibold hover:bg-[#8CF0C4]/90 transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe Free
            </button>
          </div>

          <p className="mt-2.5 text-[11px] text-[#AAB9CE]/70">
            By entering your email, you acknowledge our{' '}
            <a href="/privacy-policy" className="underline hover:text-[#EDF4FF]">
              Privacy Policy
            </a>
            . Unsubscribe anytime with a single click.
          </p>

          {feedback && (
            <div
              className={`mt-4 p-3.5 rounded-lg text-xs leading-relaxed flex items-start gap-2.5 border ${
                feedback.type === 'error'
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  : 'bg-[#9BC7FF]/10 border-[#9BC7FF]/20 text-[#EDF4FF]'
              }`}
            >
              {feedback.type === 'error' ? (
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
              ) : (
                <Info className="w-4 h-4 shrink-0 text-[#9BC7FF] mt-0.5" />
              )}
              <span>{feedback.message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
