import { Article } from '../types';
import { EXTENDED_ARTICLES } from './articlesExtended';

const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-01',
    slug: 'the-voicemail-i-never-deleted',
    title: 'The Voicemail I Never Deleted',
    excerpt:
      'A forty-two-second audio snippet preserved across three phone upgrades became an anchor to a voice I can never hear again.',
    category: 'emotional-stories',
    author: {
      name: 'Elena Rostova',
      role: 'Staff Essayist',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Elena+Rostova&backgroundColor=142138&textColor=8CF0C4',
      bio: 'Elena writes on memory, ordinary archives, and the emotional resonance of everyday artifacts.',
    },
    publishedDate: '2026-03-14',
    readingTimeMinutes: 3,
    featuredImage: '/src/assets/images/article_voicemail_1791922646329.jpg',
    imageAlt: 'Vintage cassette recorder and handwritten letter on a weathered wooden table',
    isFeatured: true,
    isEditorsPick: true,
    tags: ['Memory', 'Family', 'Digital Archives', 'Grief'],
    relatedSlugs: ['a-small-reset-for-a-busy-mind', 'simple-digital-habits', 'everyday-steps-to-stay-safer-online'],
    sections: [
      {
        id: 'the-carrier-warning',
        title: 'The Carrier Warning',
        content: [
          'It sits near the very bottom of the voicemail inbox, dated on a blustery Tuesday in early November. Every carrier update since has come with a subtle pang of dread: the fear that an automated cleanup routine or a careless finger tap might purge forty-two seconds of crackling static and laughter.',
          'The message itself is deceptively mundane. There are no profound parting declarations or dramatic summaries of life. It begins with the sound of wind rushing against a car window, followed by my grandmother asking if I had remembered to pick up the ginger biscuits from the corner market.',
          'Yet whenever modern life accelerates into chaotic noise, listening to that unhurried cadence restores my sense of proportion. It reminds me that our most durable memories rarely announce themselves as momentous when they occur.',
        ],
        pullQuote:
          'We spend millions building cloud backups for documents and receipts, but our deepest emotional wealth often hangs on a single audio packet.',
      },
      {
        id: 'digital-fragility',
        title: 'The Fragility of Modern Remembrance',
        content: [
          'In past centuries, grief was accompanied by tangible heirlooms: a brass watch, a monogrammed handkerchief, ink stains pressed into yellowed paper. You could lock them in a cedar chest and know they would wait patiently for decades.',
          'Today, our most visceral echoes exist as encoded proprietary data streams inside platforms we do not own. A cancelled subscription, an updated operating system, or a forgotten password can quietly sever access in an afternoon.',
          'Realizing this prompted me to establish [Simple Digital Habits for a More Organized Life](/articles/simple-digital-habits), exporting raw audio files to multiple local drives and transcribing each syllable alongside the date and exact weather of that morning.',
        ],
        keyTakeaway:
          'Take five minutes today to manually back up your most precious audio recordings and personal messages to local, non-proprietary formats like WAV or MP3.',
      },
      {
        id: 'the-sound-of-ordinary-presence',
        title: 'The Sound of Ordinary Presence',
        content: [
          'What makes the recording enduring is not the errand it requested, but the casual assumption of tomorrow. Her voice is unhurried, punctuated by the familiar clink of her car keys and an offhand comment about the sky threatening rain.',
          'If you find yourself overwhelmed by digital demands, try taking [A Small Reset for a Busy Mind](/articles/a-small-reset-for-a-busy-mind) to step away from screens and connect with the tangible world around you.',
        ],
      },
    ],
  },
  {
    id: 'art-02',
    slug: '7-small-habits-for-a-better-morning',
    title: '7 Small Habits for a Better Morning',
    excerpt:
      'Ditch the rigid two-hour routine. Real morning clarity comes from seven microscopic micro-adjustments you can implement tomorrow.',
    category: 'lifestyle-wellbeing',
    author: {
      name: 'Sarah Lindqvist',
      role: 'Wellbeing Contributor',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sarah+Lindqvist&backgroundColor=142138&textColor=9BC7FF',
      bio: 'Sarah writes on mindful morning routines, cognitive rest, and sustainable daily habits.',
    },
    publishedDate: '2026-03-20',
    readingTimeMinutes: 3,
    featuredImage: '/src/assets/images/article_morning_habits_1791922646668.jpg',
    imageAlt: 'Steaming ceramic mug of tea and open journal in soft golden morning light',
    isTrending: true,
    isEditorsPick: true,
    tags: ['Mindfulness', 'Habits', 'Morning Routine', 'Mental Clarity'],
    relatedSlugs: ['a-small-reset-for-a-busy-mind', 'simple-ways-to-reduce-everyday-distractions', 'simple-digital-habits'],
    sections: [
      {
        id: 'the-myth-of-the-monumental-morning',
        title: 'The Myth of the Monumental Morning',
        content: [
          'The productivity internet has conditioned us to believe that unless you wake at 4:30 AM, drink saltwater, run five miles, and write ten pages before sunrise, your morning is wasted. In daily life, these exhaustive regimes often trigger decision fatigue before breakfast.',
          'Sustainable mornings are not built on monumental discipline; they are built on gentle friction reduction. When you remove subtle cognitive stressors, natural focus emerges on its own.',
        ],
        pullQuote:
          'You do not need to reconstruct your identity before 8:00 AM. You simply need to give your mind five undisturbed minutes to arrive in the day.',
      },
      {
        id: 'the-seven-micro-shifts',
        title: 'The Seven Micro-Shifts',
        content: [
          '1. The Ten-Minute Screen Buffer: Avoid checking messages or news feeds until your feet have touched the floor and you have taken your first sip of water.',
          '2. Natural Optical Ingestion: Step to a window or porch for two minutes to let natural sunlight calibrate your circadian rhythm.',
          '3. One Clean Surface: Before sitting down to work, clear a single 2-foot zone on your desk of all clutter.',
          '4. Tactile First Input: Read one printed page or jot three thoughts in a physical notebook rather than a glowing screen.',
          '5. Delayed Caffeine: Wait 60 to 90 minutes after waking before your first espresso to prevent an afternoon adenosine crash.',
          '6. The "Anchor Task" Clarity: Write down the single objective that will make today feel complete before opening your email inbox.',
          '7. Unhurried Breath Transition: Spend sixty seconds simply breathing deeply before launching your primary work tools.',
        ],
        keyTakeaway:
          'Choose just two of these micro-shifts to test tomorrow morning. Incremental ease is far more durable than heroic reform.',
      },
      {
        id: 'protecting-your-afternoon',
        title: 'How Mornings Protect Your Afternoon',
        content: [
          'A gentle morning acts as psychological armor. When you start your day in a calm state rather than a reactionary sprint, your threshold for frustration throughout the rest of the day rises dramatically.',
          'To protect that focus as the day unfolds, explore our companion advice in [Simple Ways to Reduce Everyday Distractions](/articles/simple-ways-to-reduce-everyday-distractions).',
        ],
      },
    ],
  },
  {
    id: 'art-03',
    slug: 'how-to-write-better-ai-prompts',
    title: 'How to Write Better AI Prompts',
    excerpt:
      'Move beyond vague one-liners. Master the structural blueprint for precise, hallucination-resistant, and deeply useful AI output.',
    category: 'technology-ai',
    author: {
      name: 'Marcus Chen',
      role: 'Technology Contributor',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Marcus+Chen&backgroundColor=142138&textColor=8CF0C4',
      bio: 'Marcus writes on applied generative computing, digital craft, and straightforward technology guides.',
    },
    publishedDate: '2026-03-28',
    readingTimeMinutes: 3,
    featuredImage: '/src/assets/images/article_ai_prompts_1791922646887.jpg',
    imageAlt: 'Sleek laptop workspace running clean prompt structure with refined lighting',
    isTrending: true,
    tags: ['AI', 'Prompt Engineering', 'Productivity', 'Technology'],
    relatedSlugs: ['beginner-friendly-technology-tips', 'simple-digital-habits', 'everyday-steps-to-stay-safer-online'],
    sections: [
      {
        id: 'the-context-deficit',
        title: 'The Context Deficit in Casual Prompting',
        content: [
          'Most dissatisfaction with AI language models stems from a simple misunderstanding: people treat the model like an omniscient mind reader rather than a capable assistant who has never seen their personal notes or company guidelines.',
          'When you ask "Write a marketing email for my product," the model must guess your audience, tone, product value, constraints, and goal. The result is inevitably generic marketing prose that sounds like everyone else.',
        ],
        pullQuote:
          'Great prompt engineering is not arcane coding. It is the art of extreme clarity, structured constraints, and explicit role definitions.',
      },
      {
        id: 'the-four-pillar-prompt-framework',
        title: 'The Four-Pillar Prompt Framework',
        content: [
          'To generate exceptional responses consistently, structure your instructions into four clear components:',
          '1. Persona & Audience: Define the perspective and who the output is intended for ("Act as a clear technical writer explaining to newcomers").',
          '2. Specific Objective & Input: Supply the exact raw notes or text to be processed, cleanly demarcated with quotation marks or markdown blocks.',
          '3. Negative Constraints: Specify what to omit ("Do not use buzzwords like leverage, revolutionize, or delve. Avoid overly formal jargon").',
          '4. Output Specification: Dictate the exact format, length, and structure ("Provide a 3-bullet executive summary followed by a numbered checklist").',
        ],
        keyTakeaway:
          'Always give the AI negative constraints (what NOT to do). Eliminating unwanted tropes produces twice the improvement of adding positive requests.',
      },
      {
        id: 'iterative-refinement',
        title: 'The Iterative Dialogue Method',
        content: [
          'Never discard a mediocre first response and re-type the whole prompt. Instead, instruct the model on the exact delta: "Rewrite the second section with more concrete examples and cut the adjective count in half."',
          'Before drafting complex prompts, mastering standard hotkeys from [Beginner-Friendly Technology Tips](/articles/beginner-friendly-technology-tips) helps you navigate text blocks and tabs swiftly.',
        ],
      },
    ],
  },
  {
    id: 'art-04',
    slug: 'everyday-steps-to-stay-safer-online',
    title: 'Everyday Steps to Stay Safer Online',
    excerpt:
      'Practical, non-paranoic cybersecurity principles anyone can implement this weekend without a computer science degree.',
    category: 'online-safety',
    author: {
      name: 'Julian Vance',
      role: 'Security Contributor',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Julian+Vance&backgroundColor=142138&textColor=8CF0C4',
      bio: 'Julian writes on practical digital security, defensive habits, and privacy routines.',
    },
    publishedDate: '2026-04-01',
    readingTimeMinutes: 3,
    featuredImage: '/src/assets/images/article_online_safety_1791922647121.jpg',
    imageAlt: 'Tactile wooden keyboard keys and brass lock charm reflecting digital privacy',
    isFeatured: true,
    tags: ['Cybersecurity', 'Privacy', 'Passkeys', 'Digital Defense'],
    relatedSlugs: ['how-to-build-better-online-privacy-habits', 'beginner-friendly-technology-tips', 'how-to-organize-your-digital-files'],
    sections: [
      {
        id: 'the-threat-landscape',
        title: 'Moving Beyond Password Paranoia',
        content: [
          'For decades, computer security advice focused on memorizing complex strings of characters with capital letters and special symbols. The unfortunate consequence was that people either wrote them on sticky notes or reused the same mutated password across fifty websites.',
          'Today, account compromise almost never happens because an attacker guessed your clever pet name. It happens through database leaks, credential stuffing, and deceptive phishing links delivered straight to your inbox or text messages.',
        ],
        pullQuote:
          'Real security is not about making life inconvenient; it is about creating systems where a single compromised password does not bring down your entire life.',
      },
      {
        id: 'three-pillars-of-defense',
        title: 'The Three Essential Defensive Pillars',
        content: [
          '1. Adopt a Dedicated Password Manager: Open-source or audited tools generate unique, 24-character random passwords for every service, so a breach at an obscure retail site never puts your bank or email at risk.',
          '2. Upgrade to Authenticator 2FA: Move away from SMS-based verification codes whenever possible, as SIM-swapping remains a known attack vector. Use an authenticator app or hardware FIDO2 key.',
          '3. Check Your Email Aliases: Use masked email features when signing up for one-time newsletters or promotional discounts.',
        ],
        keyTakeaway:
          'Audit your primary email account first. Because email controls password reset links for all other accounts, securing your primary email inbox secures 90% of your digital footprint.',
      },
      {
        id: 'spotting-modern-phishing',
        title: 'How to Recognize Modern Phishing',
        content: [
          'Modern phishing rarely features glaring typos or broken graphics. They impersonate your shipping courier, streaming service, or bank with pinpoint accuracy. The universal rule: never click a link inside an urgent alert. Always navigate directly to the official app or website URL yourself.',
          'For deeper defenses on browser tracking and cookies, continue with [How to Build Better Online Privacy Habits](/articles/how-to-build-better-online-privacy-habits).',
        ],
      },
    ],
  },
  {
    id: 'art-05',
    slug: 'simple-digital-habits',
    title: 'Simple Digital Habits for a More Organized Life',
    excerpt:
      'How to establish frictionless filing, clean notification hygiene, and low-stress information architecture across all your devices.',
    category: 'digital-skills',
    author: {
      name: 'Maya Patel',
      role: 'Digital Skills Contributor',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Maya+Patel&backgroundColor=142138&textColor=9BC7FF',
      bio: 'Maya writes on mindful information systems, organized workflows, and digital workspaces.',
    },
    publishedDate: '2026-04-03',
    readingTimeMinutes: 2,
    featuredImage: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Neatly organized minimalist desk with structured daily planning checklist, pen, and laptop',
    isTrending: false,
    tags: ['Productivity', 'Digital Organization', 'Workflow', 'Clean Tech'],
    relatedSlugs: ['how-to-organize-your-digital-files', 'simple-ways-to-reduce-everyday-distractions', 'beginner-friendly-technology-tips'],
    sections: [
      {
        id: 'the-clutter-tax',
        title: 'The Hidden Tax of Digital Clutter',
        content: [
          'Physical clutter is immediately visible: you trip over shoes and shuffle through piles of mail. Digital clutter is insidious because it hides behind slick glass screens, manifesting instead as micro-hesitations and subtle background cognitive drain.',
          'Every time you open your phone to find an app among eighty unsorted icons, or search for an invoice amidst thousands of downloads, your brain spends focus that should be reserved for deep, creative thinking.',
        ],
        pullQuote:
          'Your desktop screen is the entrance hall of your digital office. If it is buried in debris, you begin every work session feeling already behind.',
      },
      {
        id: 'four-weekly-maintenance-routines',
        title: 'Four Weekly Maintenance Routines',
        content: [
          '1. The Friday Desktop Sweep: Spend 10 minutes on Friday afternoon archiving resolved documents and clearing temporary screenshots.',
          '2. Aggressive Notification Pruning: Keep notifications enabled only for direct human communication (messages and phone calls). Mute all social media likes, promotional alerts, and news bulletins.',
          '3. Single Note Repository: Stop scattering thoughts across napkins, voice notes, and three different apps. Commit to one lightweight notes repository.',
          '4. Download Folder Auto-Flush: Treat your Downloads folder as a temporary transit station, not an archive. File what you need immediately, and delete the rest.',
        ],
        keyTakeaway:
          'Design your systems for the days you have zero energy. If a filing process requires more than two clicks, you will abandon it within a fortnight.',
      },
      {
        id: 'structuring-your-storage',
        title: 'Structuring Your Long-Term Storage',
        content: [
          'Once daily habits are established, implementing a systematic file hierarchy such as the one outlined in [How to Organize Your Digital Files](/articles/how-to-organize-your-digital-files) ensures you can retrieve critical records in seconds.',
        ],
      },
    ],
  },
  {
    id: 'art-06',
    slug: 'a-small-reset-for-a-busy-mind',
    title: 'A Small Reset for a Busy Mind',
    excerpt:
      'When thoughts race and the to-do list feels endless, this 10-minute sensory grounding practice restores equilibrium without requiring meditation mastery.',
    category: 'lifestyle-wellbeing',
    author: {
      name: 'Sarah Lindqvist',
      role: 'Wellbeing Contributor',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sarah+Lindqvist&backgroundColor=142138&textColor=9BC7FF',
      bio: 'Sarah writes on mindful morning routines, cognitive rest, and sustainable daily habits.',
    },
    publishedDate: '2026-04-05',
    readingTimeMinutes: 2,
    featuredImage: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Tranquil sunbeams filtering through pine trees offering sensory grounding and mental calm',
    isEditorsPick: true,
    tags: ['Mindfulness', 'Mental Health', 'Burnout Prevention', 'Calm'],
    relatedSlugs: ['7-small-habits-for-a-better-morning', 'simple-ways-to-reduce-everyday-distractions', 'the-voicemail-i-never-deleted'],
    sections: [
      {
        id: 'cognitive-overheating',
        title: 'Recognizing Cognitive Overheating',
        content: [
          'It usually arrives around mid-afternoon: you have twenty tabs open, your neck is tense, and reading a single sentence requires three attempts because your attention skips like a flat stone across water.',
          'Trying to force concentration in this state is like revving an engine in neutral. What your nervous system requires is not more willpower, but a physiological reset switch.',
        ],
      },
      {
        id: 'the-three-channel-reset',
        title: 'The Three-Channel Sensory Reset',
        content: [
          'Step 1: Physical Disconnection. Push your chair back, stand up, and look at the furthest horizon or tree line visible through your window for sixty seconds to release eye lens fatigue.',
          'Step 2: Somatic Temperature Shift. Wash your hands in cold water. The sudden temperature contrast stimulates the vagus nerve and gently slows an elevated heart rate.',
          'Step 3: Paper Externalization. Take a scrap of paper and write down the top three swirling worries in your head. Seeing them written in ink externalizes the burden and tells your brain they are safely recorded.',
        ],
        pullQuote:
          'Rest is not a reward you earn after your to-do list is finished. It is the fuel that allows you to engage with the list in the first place.',
      },
      {
        id: 'building-sustainable-rhythms',
        title: 'Building Sustainable Rhythms',
        content: [
          'After taking this brief pause, look ahead to tomorrow by integrating gentle starts from [7 Small Habits for a Better Morning](/articles/7-small-habits-for-a-better-morning) and curtailing notification surges via [Simple Ways to Reduce Everyday Distractions](/articles/simple-ways-to-reduce-everyday-distractions).',
        ],
      },
    ],
  },
  {
    id: 'art-07',
    slug: 'how-to-organize-your-digital-files',
    title: 'How to Organize Your Digital Files',
    excerpt:
      'A timeless folder taxonomy based on the PARA method that keeps your cloud storage and local drives orderly for years.',
    category: 'digital-skills',
    author: {
      name: 'Maya Patel',
      role: 'Digital Skills Contributor',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Maya+Patel&backgroundColor=142138&textColor=9BC7FF',
      bio: 'Maya writes on mindful information systems, organized workflows, and digital workspaces.',
    },
    publishedDate: '2026-04-07',
    readingTimeMinutes: 2,
    featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Clean laptop display showing structured project directory folders and organized files',
    tags: ['File Management', 'Cloud Storage', 'PARA Method', 'Productivity'],
    relatedSlugs: ['simple-digital-habits', 'beginner-friendly-technology-tips', 'everyday-steps-to-stay-safer-online'],
    sections: [
      {
        id: 'the-folder-graveyard',
        title: 'Why Complex Folder Trees Always Fail',
        content: [
          'Most people organize files by topic: Finances, Health, Recipes, Work, Travel. Within six months, you find yourself wondering whether an invoice for a travel medical vaccine belongs under Finances, Health, or Travel.',
          'Topic-based hierarchies create friction because life is dynamic. A far more resilient framework organizes files by their actionable horizon rather than their subject matter.',
        ],
      },
      {
        id: 'the-para-blueprint',
        title: 'The PARA Structure Explained',
        content: [
          '1. Projects: Short-term efforts with a definite deadline and goal (e.g., "Tax Return 2026", "Kitchen Renovation", "Q2 Budget Presentation").',
          '2. Areas: Ongoing responsibilities with no fixed end date that require steady standards (e.g., "Health Records", "Home Maintenance", "Vehicle Insurance").',
          '3. Resources: Topics of ongoing interest and learning you might reference in the future (e.g., "Typography Notes", "Gardening Guides", "Recipe Collection").',
          '4. Archive: Inactive items from the previous three buckets that are completed or no longer relevant, kept only for historical reference.',
        ],
        pullQuote:
          'When you organize by actionability rather than topic, finding where a document belongs takes two seconds instead of two minutes.',
      },
      {
        id: 'maintenance-with-ease',
        title: 'Maintaining the System',
        content: [
          'Pair this folder taxonomy with the weekly maintenance checklist in [Simple Digital Habits for a More Organized Life](/articles/simple-digital-habits) to keep your desktop clean without ongoing struggle.',
        ],
      },
    ],
  },
  {
    id: 'art-08',
    slug: 'simple-ways-to-reduce-everyday-distractions',
    title: 'Simple Ways to Reduce Everyday Distractions',
    excerpt:
      'Practical strategies to protect your deep work time from digital noise, endless tab hopping, and phantom phone vibrations.',
    category: 'lifestyle-wellbeing',
    author: {
      name: 'Elena Rostova',
      role: 'Staff Essayist',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Elena+Rostova&backgroundColor=142138&textColor=8CF0C4',
      bio: 'Elena writes on memory, ordinary archives, and the emotional resonance of everyday artifacts.',
    },
    publishedDate: '2026-04-09',
    readingTimeMinutes: 2,
    featuredImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Distraction-free workspace with notebook, fountain pen, and smartphone turned face down',
    tags: ['Focus', 'Deep Work', 'Digital Wellbeing', 'Attention Economy'],
    relatedSlugs: ['a-small-reset-for-a-busy-mind', '7-small-habits-for-a-better-morning', 'simple-digital-habits'],
    sections: [
      {
        id: 'the-attention-war',
        title: 'The Modern Economics of Distraction',
        content: [
          'It is comforting to blame our lack of focus on personal weakness, but that ignores the architectural reality: your device is engineered by specialized teams whose primary metric is harvesting minutes of your attention.',
          'You cannot win a willpower battle against algorithms tuned on petabytes of behavioral data. The only effective strategy is environmental design: making distraction physically harder to access than deep work.',
        ],
      },
      {
        id: 'environmental-countermeasures',
        title: 'Environmental Countermeasures That Work',
        content: [
          '• Grayscale Display Mode: Switch your smartphone screen to grayscale in accessibility settings. When vibrant notification badges and neon feeds turn muted gray, their addictive visual pull drops precipitously.',
          '• The Out-of-Sight Phone Rule: Keep your phone in another room while engaging in your most demanding intellectual work. Even a face-down phone on your desk leeches measurable working memory.',
          '• The 20-Minute Timebox: Work in strict twenty-minute intervals with a visible physical timer. Knowing you have permission to check distractions in twenty minutes calms restless urgency.',
        ],
      },
      {
        id: 'restoring-calm',
        title: 'Restoring Equilibrium',
        content: [
          'Whenever you notice your mind scattering into fatigue, apply [A Small Reset for a Busy Mind](/articles/a-small-reset-for-a-busy-mind) to disconnect physically before starting your next session.',
        ],
      },
    ],
  },
  {
    id: 'art-09',
    slug: 'beginner-friendly-technology-tips',
    title: 'Beginner-Friendly Technology Tips',
    excerpt:
      'Essential computer, browser, and mobile shortcuts that make daily computer use effortless, fast, and stress-free.',
    category: 'technology-ai',
    author: {
      name: 'Marcus Chen',
      role: 'Technology Contributor',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Marcus+Chen&backgroundColor=142138&textColor=8CF0C4',
      bio: 'Marcus writes on applied generative computing, digital craft, and straightforward technology guides.',
    },
    publishedDate: '2026-04-10',
    readingTimeMinutes: 2,
    featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Collaborative study space with a learner navigating computer keyboard shortcuts',
    tags: ['Tech Tips', 'Shortcuts', 'Productivity', 'Beginner Guides'],
    relatedSlugs: ['how-to-write-better-ai-prompts', 'how-to-organize-your-digital-files', 'everyday-steps-to-stay-safer-online'],
    sections: [
      {
        id: 'keyboard-superpowers',
        title: 'Five Essential Keyboard Shortcuts You Should Never Forget',
        content: [
          '1. Ctrl/Cmd + Shift + T: Reopen the browser tab you just accidentally closed. This single shortcut saves countless hours of lost research.',
          '2. Ctrl/Cmd + F: Find specific text on any webpage or document instantly instead of scanning with tired eyes.',
          '3. Win + V (Windows) or Clipboard Managers (Mac): Access clipboard history so you can copy multiple items without overwriting previous selections.',
          '4. Spacebar in Browsers: Scroll down a full page without needing to reach for your trackpad or mouse.',
          '5. Middle Click on Links: Opens the link in a background tab so you can browse search results without losing your place.',
        ],
      },
      {
        id: 'browser-safety-basics',
        title: 'Keeping Your Browser Fast & Clean',
        content: [
          'Audit your browser extensions once every three months. Old, forgotten extensions can slow down page loading speeds and occasionally get sold to tracking entities. Remove anything you have not used in thirty days.',
          'If you want to apply these shortcuts when communicating with modern language models, check out [How to Write Better AI Prompts](/articles/how-to-write-better-ai-prompts).',
        ],
      },
    ],
  },
  {
    id: 'art-10',
    slug: 'how-to-build-better-online-privacy-habits',
    title: 'How to Build Better Online Privacy Habits',
    excerpt:
      'Take control of your data footprint with simple, sustainable adjustments to your browser settings, mobile permissions, and search defaults.',
    category: 'online-safety',
    author: {
      name: 'Julian Vance',
      role: 'Security Contributor',
      avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Julian+Vance&backgroundColor=142138&textColor=8CF0C4',
      bio: 'Julian writes on practical digital security, defensive habits, and privacy routines.',
    },
    publishedDate: '2026-04-12',
    readingTimeMinutes: 2,
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Dark glass digital screen displaying modern cybersecurity shield and privacy indicators',
    isEditorsPick: true,
    tags: ['Privacy', 'Data Rights', 'Online Tracking', 'Digital Defense'],
    relatedSlugs: ['everyday-steps-to-stay-safer-online', 'beginner-friendly-technology-tips', 'simple-digital-habits'],
    sections: [
      {
        id: 'the-tracking-economy',
        title: 'Understanding Third-Party Trackers',
        content: [
          'Every website you visit typically loads dozens of third-party network requests. These scripts build an intricate behavioral profile: your device model, approximate location, browsing interests, and reading patterns across multiple domains.',
          'Privacy is not about having something shameful to hide. Privacy is about preserving autonomy, dignity, and boundary control over how your thoughts and attention are monetized.',
        ],
      },
      {
        id: 'actionable-privacy-steps',
        title: 'Five Concrete Steps for Everyday Privacy',
        content: [
          '1. Switch Your Default Search Engine: Try privacy-respecting alternatives that do not store search queries linked to your identity.',
          '2. Tighten Smartphone App Permissions: Regularly review which applications have background access to your location, camera, microphone, and contacts. Set location permissions to "Only While Using App".',
          '3. Enable DNS over HTTPS (DoH): Use encrypted DNS resolvers in your router or browser to prevent local network observers from logging every domain you visit.',
          '4. Clear Cookie Silos Regularly: Use container tabs or automated cookie-clearing settings to prevent tracking beacons from following you across sites.',
          '5. Decline Non-Essential Cookies: Take the two seconds to click "Reject All" on cookie consent banners rather than blindly clicking "Accept".',
        ],
        keyTakeaway:
          'Privacy is a continuum, not an all-or-nothing proposition. Every tracker you block is one less point of surveillance on your digital life.',
      },
      {
        id: 'protecting-credentials',
        title: 'Securing Your Core Accounts',
        content: [
          'Browser privacy works hand-in-hand with authentication hygiene. To secure your master passwords and email accounts, follow our guide on [Everyday Steps to Stay Safer Online](/articles/everyday-steps-to-stay-safer-online).',
        ],
      },
    ],
  },
];

export const ARTICLES: Article[] = [...INITIAL_ARTICLES, ...EXTENDED_ARTICLES];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return ARTICLES.filter((a) => a.category === categorySlug);
}

export function getRelatedArticles(article: Article): Article[] {
  const directMatches = article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);

  if (directMatches.length >= 3) {
    return directMatches.slice(0, 3);
  }

  // Backfill with articles from the same category (excluding self and existing)
  const existingIds = new Set([article.id, ...directMatches.map((m) => m.id)]);
  const categoryFallbacks = ARTICLES.filter(
    (a) => a.category === article.category && !existingIds.has(a.id)
  );

  const combined = [...directMatches, ...categoryFallbacks];
  if (combined.length >= 3) {
    return combined.slice(0, 3);
  }

  // Fallback to latest editorial dispatches if category is small
  const editorialFallbacks = ARTICLES.filter(
    (a) => !existingIds.has(a.id) && !categoryFallbacks.some((c) => c.id === a.id)
  );
  return [...combined, ...editorialFallbacks].slice(0, 3);
}

export function searchArticles(query: string, categoryFilter?: string): Article[] {
  const cleanQuery = query.toLowerCase().trim();
  return ARTICLES.filter((art) => {
    const matchesCategory = !categoryFilter || categoryFilter === 'all' || art.category === categoryFilter;
    if (!matchesCategory) return false;

    if (!cleanQuery) return true;

    const inTitle = art.title.toLowerCase().includes(cleanQuery);
    const inExcerpt = art.excerpt.toLowerCase().includes(cleanQuery);
    const inTags = art.tags.some((t) => t.toLowerCase().includes(cleanQuery));
    const inAuthor = art.author.name.toLowerCase().includes(cleanQuery);
    const inSections = art.sections.some(
      (s) =>
        s.title.toLowerCase().includes(cleanQuery) ||
        s.content.some((c) => c.toLowerCase().includes(cleanQuery))
    );

    return inTitle || inExcerpt || inTags || inAuthor || inSections;
  });
}
