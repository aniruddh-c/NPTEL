const questions = [
  {
    id: 1,
    test: 1,
    question: "According to the lecture, Raja Ram Mohan Roy’s primary concern regarding caste was:",
    options: [
      "To eradicate Brahminical practices from Hindu society.",
      "To argue that caste is man-made (not divinely ordained) and a major obstacle to Indian unity.",
      "To preserve caste hierarchy while reforming its rituals.",
      "To accept caste as inevitable but improve its spiritual dimensions."
    ],
    correct: 1
  },
  {
    id: 2,
    test: 1,
    question: "Which of the following sentences is not correct regarding the interlinkages between political thought and political theory?",
    options: [
      "Both political theory and political thought are concerned with the understanding of politics.",
      "To be considered as political theory, it should inevitably be developed in the West.",
      "Political thought is less systematic and generalized than political theory.",
      "Political thought is narrower in scope than political theory."
    ],
    correct: 1
  },
  {
  id: 3,
  test: 1,
  question: `Identify the correct chronological order of the following educational institutions/initiatives associated with Raja Ram Mohan Roy, as discussed in the lecture:

    I. Foundation of the Anglo-Hindu School.
    II. Supporting David Hare’s proposal for the establishment of Hindu College.
    III. Establishment of Vedanta College, which combined Western knowledge with Indian learning.`,
    options: [
        "I, II, III",
        "II, I, III",
        "I, III, II",
        "III, I, II"
    ],
    correct: 0
    },
  {
    id: 4,
    test: 1,
    question: "Raja Ram Mohan Roy’s attitude towards Western education differed from that of some of his contemporaries. Roy primarily regarded Western modern education as a means of:",
    options: [
      "Propagating Christian missionary efforts across Bengal.",
      "Establishing a new social hierarchy based on English language proficiency.",
      "Achieving political and economic collaboration with the British rulers.",
      "Social transformation and the enlightenment of Indians from the superstitions and prejudices of religious orthodoxies."
    ],
    correct: 3
  },
  {
    id: 5,
    test: 1,
    question: "Which of the following is not correct regarding Raja Ram Mohan Roy’s perspective towards the British rule?",
    options: [
      "The only reason why Raja Ram Mohan Roy opposed the British rule was the denial of civil liberties to the Indians.",
      "Raja Ram Mohan Roy thought that British rule would promote civil liberties.",
      "Raja Ram Mohan Roy had chosen civil and religious liberty over political liberty.",
      "Raja Ram Mohan Roy considered that the natives of his period lacked the capacity for self-governance."
    ],
    correct: 0
  },
  {
    id: 6,
    test: 1,
    question: "Modern Indian political thinkers like Ram Mohan Roy differed from many Western political theorists in possessing which of the following characteristics?",
    options: [
      "They were purely academic and not engaged in politics.",
      "They were primarily concerned with metaphysical rather than political questions.",
      "They were simultaneously activist thinkers who combined theoretical reflection with political engagement.",
      "They rejected the concept of modernity entirely."
    ],
    correct: 2
  },
  {
    id: 7,
    test: 1,
    question: "What are the distinctive features of modern Indian political thinkers?",
    options: [
      "The ideas of modern Indian political thinkers are historically rooted in the context of colonialism.",
      "An amalgamation of political activism and theoretical reflection is peculiar to modern Indian political thinkers.",
      "Modern Indian political thinkers have unique metaphysical and epistemological questions that may substantially differ from those of Western thinkers.",
      "All of these."
    ],
    correct: 3
  },
  {
    id: 8,
    test: 1,
    question: "On 5th April 1823, the colonial government issued an order restricting the freedom of the press in India. What was not among the grounds on which a publication could be restricted?",
    options: [
      "Any publication that could threaten the peace, harmony and order in society.",
      "Any publication that could create suspicion and hatred among the Indians towards the colonial government.",
      "Any publication that was considered harmful and defamatory towards the royal family, government officials, and allied powers.",
      "Any publication that propagated native religions."
    ],
    correct: 3
  },
  {
    id: 9,
    test: 1,
    question: "Raja Ram Mohan Roy was a vocal proponent of the freedom of the press. Which was not among the grounds that he presented to the British Crown to relax press regulation in India?",
    options: [
      "Press as a necessity for the sustainability and durability of British rule.",
      "Press as a grievance redressal mechanism.",
      "Press as a rightful platform for the revolutionary nationalist activities of Indians.",
      "Press as a means to keep a check on Christian missionaries who were meddling with the religious practices of natives."
    ],
    correct: 2
  },
  {
    id: 10,
    test: 1,
    question: "Roy’s establishment of the Brahmo Sabha (1828) primarily aimed to:",
    options: [
      "Replace Hinduism with a new religion.",
      "Create an exclusive club for the Brahmin elite.",
      "Serve as an instrument for rational religious reform and social transformation through monotheism and rational engagement with doctrine.",
      "Preserve all traditional Hindu practices unchanged."
    ],
    correct: 2
  },
  ,
    {
    id: 11,
    test: 2,
    question: "Tagore’s vision involved submitting to a ‘world-consciousness’ (Visva Bodh) rather than a national consciousness, where every country would:",
    options: [
        "Abandon political and commercial unions entirely",
        "Keep alight its own lamp of mind as its share in the illumination of the whole world or humanity",
        "Revive old institutions and community festivals to unify divided people",
        "Follow its own destiny rather than merely imitate the West"
    ],
    correct: 1
    },
    {
    id: 12,
    test: 2,
    question: "Tagore discussed the duality of man, distinguishing between the ‘animal aspect’ concerned with necessities, and the ‘Universal Man’. What does the ‘Universal Man’ strive for?",
    options: [
        "Happiness",
        "Necessities",
        "Beauty",
        "Magnificence"
    ],
    correct: 3
    },
    {
    id: 13,
    test: 2,
    question: "Tagore opposed the Non-Cooperation Movement launched by Gandhi in the 1920s because he argued that ‘parochial anti-west tendencies’ stemming from ‘blind national pride’ would lead to which consequence?",
    options: [
        "An over-reliance on untruth in political agitation",
        "The failure of the ‘Charkha’ movement to achieve self-sufficiency",
        "Hindering India’s cooperation with the international community",
        "The triumph of patriotism over humanity"
    ],
    correct: 2
    },
    {
    id: 14,
    test: 2,
    question: "What is/are not correct regarding Rabindranath Tagore’s ideas on cosmopolitanism?",
    options: [
        "Rabindranath Tagore considered all human beings as world citizens and argued that they owe their primary allegiance to the world community.",
        "Rabindranath Tagore argued that the motivation behind cosmopolitanism is based on an existential orientation - a way of being in this world.",
        "Rabindranath Tagore’s ideas on cosmopolitanism draws its justifications from theoretical abstractions devoid of any existential orientation.",
        "Rabindranath Tagore’s cosmopolitanism is partly a consequence of his philosophical and historiographical understanding that statist conceptions of history cannot totally capture social life."
    ],
    correct: 2
    },
    {
    id: 15,
    test: 2,
    question: "Tagore’s statement, “I will not buy glass for the price of diamonds, and I will never allow patriotism to triumph over humanity as long as I live”, serves as a definitive assertion against which concept?",
    options: [
        "Cosmopolitanism (as Visva Bodh)",
        "The ‘deep association’ between East and West",
        "Nationalism (as the final spiritual shelter)",
        "The imitation of the West"
    ],
    correct: 2
    },
    {
    id: 16,
    test: 2,
    question: "From the following sentences, choose the one that is not correct regarding Rabindranath Tagore’s ideas on nationalism.",
    options: [
        "Tagore was an ardent nationalist of his time.",
        "Tagore viewed nationalism as the breeding ground for imperialism.",
        "Tagore viewed nationalism as a danger to humanity.",
        "Tagore argued that obsession with nationalism could lead to war, hatred, and mutual suspicion among nations."
    ],
    correct: 0
    },
    {
    id: 17,
    test: 2,
    question: "The central concern of Tagore’s scheme against nationalism was to highlight the ‘gulf’ that would inevitably appear between:",
    options: [
        "The aspirations of the Zamindars and the interest of the people",
        "The political sphere and the spiritual ideals",
        "Nationalism at the political level and community consciousness at the social level",
        "The old institutions and the modern political machine"
    ],
    correct: 2
    },
    {
    id: 18,
    test: 2,
    question: "Tagore can also be regarded as a rooted cosmopolitan thinker because:",
    options: [
        "Tagore believed in the universal values of the East.",
        "Tagore respected the Indian tradition.",
        "Tagore respected various individual traditions and nationalities but also believed in universal values.",
        "Tagore believed in the universal values of the West."
    ],
    correct: 2
    },
    {
    id: 19,
    test: 2,
    question: "Which of the following is not correct regarding Tagore’s views on the Zamindari system?",
    options: [
        "Tagore argued that the zamindari system was for the benefit of the masses.",
        "Tagore believed that the zamindari system, which claimed to represent the people’s interests, was flawed.",
        "As a practitioner of zamindari, Tagore could sense the cruelty associated with the zamindari system.",
        "Tagore was genuinely apologetic and embarrassed about the whole system of zamindari."
    ],
    correct: 0
    },
    {
    id: 20,
    test: 2,
    question: "The debate between Gandhi and Tagore intensified during the 1923–1928 period primarily over the issue of charkha and khadi. Tagore’s main critique centred on:",
    options: [
        "Gandhi’s defence of Varnashrama.",
        "Gandhi’s use of moral language in place of economic efficiency.",
        "Gandhi’s obsession with the sins of western civilization.",
        "The instrumental use of Satyagraha."
    ],
    correct: 1
    },
    /* ================= WEEK 3 ================= */

    {
    id: 21,
    test: 3,
    question: "Aurobindo’s political life began with the publishing of a series of essays titled:",
    options: [
        "Vande Mataram",
        "Karmayogin",
        "New Lamps for Old",
        "The Human Cycle"
    ],
    correct: 2
    },
    {
    id: 22,
    test: 3,
    question: "What does ‘True Self’ mean as articulated by Aurobindo?",
    options: [
        "Rational mind",
        "Truthful self",
        "Spiritual individual",
        "Physical self"
    ],
    correct: 2
    },
    {
    id: 23,
    test: 3,
    question: `Arrange the following stages of the evolutionary understanding of the human collective self, as discussed by Aurobindo, in their correct chronological order:

    1. Individualist stage
    2. Conventional stage
    3. Subjective Age
    4. Symbolic stage`,
    options: [
        "4, 2, 1, 3",
        "1, 2, 3, 4",
        "4, 3, 2, 1",
        "2, 4, 1, 3"
    ],
    correct: 0
    },
    {
    id: 24,
    test: 3,
    question: `Read the following statements and choose the correct option:

    Statement I: Aurobindo talks about the ‘economics of a spiritualised society’, which intends to provide everyone with the pleasure of work in accordance with their nature and leisure as required for their inner development.

    Statement II: According to Aurobindo, the prime objective of that society is to ensure a stable machinery of production for a longer time.`,
    options: [
        "Only Statement II is correct",
        "Only Statement I is correct",
        "Both Statement I & II are correct",
        "Neither Statement I nor Statement II are correct"
    ],
    correct: 1
    },
    {
    id: 25,
    test: 3,
    question: "According to Aurobindo, nationalism was not merely a political programme, but ___:",
    options: [
        "A loose confederation of the people",
        "A religion gifted by God",
        "The objectification of the universal in individual life",
        "A decolonised vision of international relations"
    ],
    correct: 1
    },
    {
    id: 26,
    test: 3,
    question: "Rajas element denotes:",
    options: [
        "A state of illumination",
        "A state of ignorance",
        "The will to action",
        "A state of luxury"
    ],
    correct: 2
    },
    {
    id: 27,
    test: 3,
    question: `Which of the following statements correctly represents Sri Aurobindo’s perspective on the ‘Spiritual religion of humanity’?

    1. It requires a universal religious system, one in mental creed and vital form, to achieve psychological unification.
    2. It aims for psychological unification of people while respecting socio-cultural diversity among them.
    3. It implies that spiritual life does not prioritize freedom and variation in self-expression and means of development.
    4. It is primarily concerned with solving the material problems of humanity before addressing spiritual reality.`,
    options: [
        "1 and 4 only",
        "2 only",
        "2 and 3 only",
        "4 only"
    ],
    correct: 1
    },
    {
    id: 28,
    test: 3,
    question: `Match the following concepts of the ‘self’ (Prakriti qualities) in Aurobindo’s thought with their corresponding characteristics:

    List I (Quality)
    P. Tamas
    Q. Rajas
    R. Sattva

    List II (Characteristic)
    1. The will to discover the truth of oneself and the world
    2. A state of ignorance
    3. The will to action`,
    options: [
        "P-1, Q-2, R-3",
        "P-2, Q-3, R-1",
        "P-3, Q-1, R-2",
        "P-2, Q-1, R-3"
    ],
    correct: 1
    },
    {
    id: 29,
    test: 3,
    question: "Which one of the following sentences is not correct about Aurobindo’s views on the Gita?",
    options: [
        "Aurobindo argued that the Gita should not be understood merely in its metaphysical connotations of ancient times.",
        "Aurobindo argued that the Gita should be understood in its renewed relevance to the living truths that it contains.",
        "Aurobindo believed that the Gita could not offer much in discovering the horizons of the future.",
        "Rather than focusing on the Gita’s relevance for understanding the past, Aurobindo’s approach towards it was more future-oriented."
    ],
    correct: 2
    },
    {
    id: 30,
    test: 3,
    question: "What was Aurobindo’s primary concern that he believed would ultimately lead to psychological unity among the people?",
    options: [
        "The immediate formation of a powerful, centralized national government",
        "The spiritual transformation of the people",
        "The widespread adoption of Western education and rationalism",
        "The establishment of economic equality through socialist reforms"
    ],
    correct: 1
    },
    /* ================= WEEK 4 ================= */

    {
    id: 31,
    test: 4,
    question: "Vivekananda emphasized the need for ‘fresh interpretation of tradition’. What was the primary justification for this emphasis?",
    options: [
        "To align tradition with the needs of the emerging Westernized elite",
        "To ensure the continuity of ritualistic practices in a changing world",
        "To face the new world with new social and political requirements",
        "To establish the supremacy of Advaita Vedanta over all other religious philosophies"
    ],
    correct: 2
    },
    {
    id: 32,
    test: 4,
    question: "Which of the following statements represents Vivekananda’s thoughts on democracy?",
    options: [
        "For Vivekananda, democracy was equal to any form of direct rule",
        "For Vivekananda, democracy was a mode of anarchy",
        "By democracy, Vivekananda only referred to the indirect forms of representation",
        "Vivekananda understood democracy as a process that inculcates faith, self-reliance, and self-government"
    ],
    correct: 3
    },
    {
    id: 33,
    test: 4,
    question: "Vivekananda’s thinking was shaped by the contrasting influences of his parents. The synthesis of these traits arguably led to:",
    options: [
        "His exclusive focus on Advaita Vedanta as a purely mystical philosophy",
        "His blend of rational, pragmatic inquiry (science) with spiritual ideals (non-attachment) in his youth",
        "His early rejection of Western philosophy entirely",
        "His decision to join the Sadharan Brahmo Samaj and reject Freemasonry"
    ],
    correct: 1
    },
    {
    id: 34,
    test: 4,
    question: `Read the following two statements and choose the correct option:

    Statement I: Vivekananda believed in the Varnashrama system.

    Statement II: Vivekananda criticised the Brahmanical practice of excluding the Shudras from accessing Vedic knowledge.`,
    options: [
        "Only Statement I is correct",
        "Only Statement II is correct",
        "Both Statements I and II are correct",
        "Neither Statement I nor II is correct"
    ],
    correct: 2
    },
    {
    id: 35,
    test: 4,
    question: "The famous quote from Vivekananda’s address at the Parliament of Religions is a powerful assertion of:",
    options: [
        "The inherent superiority of Hinduism as the ultimate religious path",
        "The requirement for all religious people to ultimately convert to Christianity",
        "The principle of universal religious tolerance and the non-exclusivity of truth",
        "The need to reject all doctrines and dogmas of organized religion"
    ],
    correct: 2
    },
    {
    id: 36,
    test: 4,
    question: "Which of the following statements accurately captures Vivekananda’s views on politics and religion?",
    options: [
        "Politics and religion are two different domains",
        "Politics and religion are inseparable",
        "Religion is only a manifestation of politics",
        "Politics is dependent on religion"
    ],
    correct: 0
    },
    {
    id: 37,
    test: 4,
    question: "Vivekananda’s simplified presentation of Advaita Vedanta emphasized that the supreme truth is based on:",
    options: [
        "The inherent separateness between the soul and Brahman",
        "The rigid acceptance of existing social privileges and inequality",
        "The divinity of the soul and the solidarity of mankind",
        "The supremacy of ritualistic practice over philosophical knowledge"
    ],
    correct: 2
    },
    {
    id: 38,
    test: 4,
    question: "In the context of his reading of Vedanta, Vivekananda challenged social stratification by arguing:",
    options: [
        "Inequalities are endemic to individuals or institutions",
        "The idea that one man is born superior to another has no meaning in Vedanta",
        "Social privileges must be strictly maintained for spiritual order",
        "Inequalities are a reflection of God’s will and must be accepted"
    ],
    correct: 1
    },
    {
    id: 39,
    test: 4,
    question: "Ninian Smart’s observation about Vivekananda refers to his construction of a Hinduism that was:",
    options: [
        "Purely localized, emotional, and sectarian cult",
        "Entirely dependent on the colonial master’s interpretation",
        "Rational, linear, non-emotive and masculine, detaching it from disorder, chaos, pain, pleasure, and emotions",
        "Content with and appreciative of the India of his contemporary times, despite its flaws"
    ],
    correct: 2
    },
    {
    id: 40,
    test: 4,
    question: "In the view of Vivekananda, which of the following was not among the three ways of tackling the existing social concerns in India?",
    options: [
        "Emancipation of Women",
        "Positive Education",
        "Cultural Assimilation",
        "Upliftment of the Masses"
    ],
    correct: 2
    },
    /* ================= WEEK 5 ================= */

    {
    id: 41,
    test: 5,
    question: "Anthony J. Parel classified Gandhi’s political philosophy as ‘Pax Gandhiana’. This classification is primarily significant because it:",
    options: [
        "Highlights Gandhi’s philosophy as a unique Indian response limited to the anti-colonial struggle.",
        "Emphasizes the universal relevance and applicability of Gandhi’s ideals of Satyagraha and non-violence beyond the Indian context.",
        "Focuses exclusively on Gandhi’s contribution as the single most important organizer of the Indian nationalist movement.",
        "Connects Gandhi’s thought directly to Christian and Islamic influences encountered in South Africa."
    ],
    correct: 1
    },
    {
    id: 42,
    test: 5,
    question: "On which of the following issues was there a significant disagreement between Mahatma Gandhi and B.R. Ambedkar?",
    options: [
        "Swaraj",
        "Ahimsa",
        "Sarvodaya",
        "Varnashrama Dharma"
    ],
    correct: 3
    },
    {
    id: 43,
    test: 5,
    question: "Which of the following statements most accurately reflects Gandhi’s non-negotiable philosophical stance on the relationship between means (e.g., Satyagraha) and ends (e.g., Truth or Swaraj)?",
    options: [
        "The ends, being the ultimate goal, often necessitate a temporary compromise on the purity of the means for strategic success.",
        "The ends are merely a consequence of the means, thus the adoption of just means is a ‘supreme duty’ that guarantees a just end, irrespective of time.",
        "Means and ends are distinct political categories, where the effectiveness of means is judged by its contribution to the final desired end.",
        "Purity of means is essential, but if delayed, aggressive non-violence becomes justified to accelerate attainment."
    ],
    correct: 1
    },
    {
    id: 44,
    test: 5,
    question: "One of the major texts that greatly influenced Gandhi was ‘Life Without Principles’. Who authored this text?",
    options: [
        "Martin Luther King",
        "Nelson Mandela",
        "Ruskin Bond",
        "Henry David Thoreau"
    ],
    correct: 3
    },
    {
    id: 45,
    test: 5,
    question: "Gandhi’s critique of the modern state as a ‘soulless machine’ is fundamentally based on the State’s tendency to:",
    options: [
        "Promote British-style capitalism and protect elite interests.",
        "Centralize authority, thereby destroying individuality, which lies at the root of all progress.",
        "Fail in regulating material life, leading to disorder.",
        "Neglect Sarvodaya and follow utilitarianism."
    ],
    correct: 1
    },
    {
    id: 46,
    test: 5,
    question: `Read the following two statements and choose the correct option:

    Statement I: Gandhi was skeptical of uncontrolled machinery and believed its use should be guided by moral considerations.

    Statement II: Gandhi argued that increasing use of technology could result in massive unemployment.`,
    options: [
        "Only Statement I is correct",
        "Only Statement II is correct",
        "Both Statement I & II are correct",
        "Neither Statement I nor II is correct"
    ],
    correct: 2
    },
    {
    id: 47,
    test: 5,
    question: "The Gandhian concept of Trusteeship serves as:",
    options: [
        "A tool for political control",
        "A method for total renunciation",
        "An ethical practice for wealth redistribution where the rich act as trustees",
        "A mechanism for industrial capitalism"
    ],
    correct: 2
    },
    {
    id: 48,
    test: 5,
    question: "Which statement is not correct regarding Gandhi’s vision of future India?",
    options: [
        "India as a spiritually enlightened society",
        "Self-purification leads to spiritual emancipation",
        "Spiritual society is egalitarian",
        "Centralized polity with modern tech is necessary"
    ],
    correct: 3
    },
    {
    id: 49,
    test: 5,
    question: "Gandhi rejected utilitarianism (‘greatest good of greatest number’) because:",
    options: [
        "It ignores moral purity",
        "It promotes materialism",
        "It sacrifices minority for majority",
        "It neglects Swaraj"
    ],
    correct: 2
    },
    {
    id: 50,
    test: 5,
    question: "The supreme merit of passive resistance, according to Gandhi, is:",
    options: [
        "Political efficiency",
        "Spiritual superiority",
        "It produces results without bloodshed",
        "It enforces obedience"
    ],
    correct: 2
    },
    /* ================= WEEK 6 ================= */

    {
    id: 51,
    test: 6,
    question: "Iqbal’s political ideology is best characterized by:",
    options: [
        "Reconciliation of Islamic universalism with modern nationalism",
        "Sufi-Nietzsche synthesis",
        "Rejection of Sir Syed",
        "Abandonment of pan-Islamism"
    ],
    correct: 0
    },
    {
    id: 52,
    test: 6,
    question: "What was ‘Islam’ for Muhammad Iqbal?",
    options: [
        "A philosophy",
        "A way of living",
        "An embodiment of socio-cultural institutions",
        "All of these"
    ],
    correct: 3
    },
    {
    id: 53,
    test: 6,
    question: "Iqbal’s productive period coincided with:",
    options: [
        "Liberalization",
        "Anti-colonialism + conservatism",
        "Rejection of West",
        "Pro-British socialism"
    ],
    correct: 1
    },
    {
    id: 54,
    test: 6,
    question: `Read the following statements:

    Statement I: Iqbal tried to express anti-colonialism through religion.

    Statement II: He sought an alternative path of development distinct from the West.`,
    options: [
        "Only I",
        "Only II",
        "Both",
        "Neither"
    ],
    correct: 2
    },
    {
    id: 55,
    test: 6,
    question: "Iqbal’s early poetry reflected:",
    options: [
        "Isolationism",
        "National unity and liberation",
        "Critique of Congress",
        "Islamic autonomy"
    ],
    correct: 1
    },
    {
    id: 56,
    test: 6,
    question: "Iqbal’s idea of Millat emphasizes:",
    options: [
        "Language unity",
        "Unity of like-mindedness",
        "Law dominance",
        "Historical identity"
    ],
    correct: 1
    },
    {
    id: 57,
    test: 6,
    question: "Submission to God (Iqbal) implies:",
    options: [
        "Intellectual focus",
        "Renunciation and ethical living",
        "Self-destruction",
        "Acceptance of order"
    ],
    correct: 1
    },
    {
    id: 58,
    test: 6,
    question: "Conflict between Khudi and Millat is resolved by:",
    options: [
        "Prioritizing individual",
        "Dissolving self",
        "Balancing ego with Bekhudi",
        "Rejecting individuality"
    ],
    correct: 2
    },
    {
    id: 59,
    test: 6,
    question: "Ideal Muslim community requires:",
    options: [
        "Homogeneity",
        "Unity",
        "Neither",
        "Both unity and homogeneity"
    ],
    correct: 3
    },
    {
    id: 60,
    test: 6,
    question: "Iqbal rejected nationalism because:",
    options: [
        "It breaks unity",
        "It perpetuates colonial domination",
        "It opposes religion",
        "It removes differences"
    ],
    correct: 1
    },
    /* ================= WEEK 7 ================= */

    {
    id: 61,
    test: 7,
    question: "Savarkar’s political trajectory shows a critical shift in his later years. Which of the following accurately describes this shift?",
    options: [
        "From an extremist revolutionary to a moderate constitutionalist advocating non-violence.",
        "From a radical revolutionary patriot to a Hindu nationalist proponent of the British Rule, rationalising his support as ‘responsive cooperation’.",
        "From a proponent of Swaraj to a dominion status advocate.",
        "From anti-colonial revolutionary to non-cooperation supporter."
    ],
    correct: 1
    },
    {
    id: 62,
    test: 7,
    question: `Read the following two statements:

    Statement I: Savarkar did not negate minorities’ right to co-exist but made it conditional.

    Statement II: Savarkar supported preferential treatment to minorities who accepted Hindu dominance.`,
    options: [
        "Only Statement I is correct",
        "Only Statement II is correct",
        "Both are correct",
        "Both are incorrect"
    ],
    correct: 0
    },
    {
    id: 63,
    test: 7,
    question: "Savarkar defined Hindutva as:",
    options: [
        "A monotheistic religion",
        "A secular nationalism",
        "An integration of all religious creeds native to Hindustan sharing common culture and blood",
        "A purely Vedic tradition"
    ],
    correct: 2
    },
    {
    id: 64,
    test: 7,
    question: "Closest term to Savarkar’s ‘Hindutva’ is:",
    options: [
        "Hinduism",
        "Hinduness",
        "Hindi",
        "Hindustan"
    ],
    correct: 1
    },
    {
    id: 65,
    test: 7,
    question: "Savarkar opposed Congress policy on minorities because:",
    options: [
        "He wanted subordination",
        "He opposed preferential treatment and wanted equality",
        "He wanted theocracy",
        "He supported proportional representation"
    ],
    correct: 1
    },
    {
    id: 66,
    test: 7,
    question: "Which is NOT correct regarding Savarkar’s nationalism?",
    options: [
        "Culture and religion contribute to nationhood",
        "It synthesizes territorial and cultural nationalism",
        "Territorial unity is more important than religion or race",
        "Language and culture are the sole basis"
    ],
    correct: 2
    },
    {
    id: 67,
    test: 7,
    question: "Savarkar emphasized ‘common blood’ to:",
    options: [
        "Divide regions",
        "Integrate races",
        "Reduce caste divisions",
        "Promote meritocracy"
    ],
    correct: 2
    },
    {
    id: 68,
    test: 7,
    question: "Who influenced Savarkar’s nationalism?",
    options: [
        "Vivekananda",
        "Mazzini",
        "Gandhi",
        "Ernest Renan"
    ],
    correct: 1
    },
    {
    id: 69,
    test: 7,
    question: "Savarkar’s Essentials of Hindutva is based on:",
    options: [
        "Secular socialism",
        "Pluralism",
        "One language, one culture nationalism",
        "Village republics"
    ],
    correct: 2
    },
    {
    id: 70,
    test: 7,
    question: "Difference between Savarkar and Gandhi lies in:",
    options: [
        "Savarkar was silent",
        "Savarkar used science + religion, Gandhi emphasized inclusivity",
        "Savarkar imposed Hinduism",
        "Savarkar rejected religion"
    ],
    correct: 1
    },

    /* ================= WEEK 8 ================= */

    {
    id: 71,
    test: 8,
    question: "Nehru’s secularism aimed to ensure:",
    options: [
        "No state interference in religion",
        "Abolition of religion",
        "Social position not determined by religion",
        "Hindu state with minority rights"
    ],
    correct: 2
    },
    {
    id: 72,
    test: 8,
    question: `Read the following statements:

    Statement I: Nehru emphasized social and economic democracy.

    Statement II: Equality is necessary for sustaining democracy.`,
    options: [
        "Only I",
        "Only II",
        "Both",
        "Neither"
    ],
    correct: 2
    },
    {
    id: 73,
    test: 8,
    question: "Core components of Nehru’s vision:",
    options: [
        "Agrarian + spiritual",
        "Monarchy + capitalism",
        "Secular democratic socialist state",
        "Authoritarian industrial state"
    ],
    correct: 2
    },
    {
    id: 74,
    test: 8,
    question: `Read the statements:

    Statement I: Gandhi and Nehru both saw the state as a soulless machine.

    Statement II: Gandhi supported decentralization, Nehru supported central planning.`,
    options: [
        "Only I",
        "Only II",
        "Both",
        "Neither"
    ],
    correct: 1
    },
    {
    id: 75,
    test: 8,
    question: "Nehru’s expanded democracy includes:",
    options: [
        "Aggressive nationalism",
        "Scientific temper only",
        "Freedom linked with equality",
        "Judiciary focus"
    ],
    correct: 2
    },
    {
    id: 76,
    test: 8,
    question: "Nehru founded which newspaper?",
    options: [
        "Times of India",
        "The Hindu",
        "National Herald",
        "Dainik Bhaskar"
    ],
    correct: 2
    },
    {
    id: 77,
    test: 8,
    question: "Nehru’s international role:",
    options: [
        "Soviet alignment",
        "Leader of Non-Aligned Movement",
        "Asian world government",
        "Isolationist"
    ],
    correct: 1
    },
    {
    id: 78,
    test: 8,
    question: "Nehru opposed religious politics because:",
    options: [
        "It creates Western nationalism",
        "It blocks scientific nationalism",
        "It balances Westernization",
        "It belongs to private sphere"
    ],
    correct: 1
    },
    {
    id: 79,
    test: 8,
    question: "Incorrect statement about secular state:",
    options: [
        "Protect diversity",
        "Protect minorities",
        "No intervention in religious domination",
        "Intervene against domination"
    ],
    correct: 2
    },
    {
    id: 80,
    test: 8,
    question: "Realization of secularism depends on:",
    options: [
        "Church-state separation",
        "Anti-religious state",
        "Majority’s attitude toward minorities",
        "Ban religion"
    ],
    correct: 2
    }
    ,
    /* ================= WEEK 9 ================= */

    {
    id: 81,
    test: 9,
    question: "Ambedkar’s critique of the caste system primarily focuses on its mechanism of maintenance. Which option best captures this analytical point?",
    options: [
        "Caste is maintained primarily through continuous, overt use of physical force by the dominant groups.",
        "The caste hierarchy operates largely by ‘voluntary submission’ characterized by an ascending scale of reverence and a descending scale of contempt.",
        "The system is sustained by a state-enforced legal framework that explicitly sanctions hierarchical discrimination.",
        "Caste’s primary challenge to India’s evolution was economic exploitation, separate from social hierarchy."
    ],
    correct: 1
    },
    {
    id: 82,
    test: 9,
    question: `Read the following two statements:

    Statement I: Ambedkar argued that caste was the major hindrance towards the formation of a united political community in India.

    Statement II: The caste system, Ambedkar argued, maintained its hierarchies primarily by voluntary submission characterized by an ascending scale of reverence and a descending scale of contempt.`,
    options: [
        "Only Statement I is correct",
        "Only Statement II is correct",
        "Both Statement I and II are correct",
        "Neither Statement I nor Statement II is correct"
    ],
    correct: 2
    },
    {
    id: 83,
    test: 9,
    question: "Which constitutional provision reflects Ambedkar’s belief that political democracy is meaningless without socio-economic democracy?",
    options: [
        "Bicameral legislature",
        "Abolition of untouchability and safeguards for minorities",
        "Parliamentary system",
        "Federal structure with strong center"
    ],
    correct: 1
    },
    {
    id: 84,
    test: 9,
    question: "Ambedkar’s formation of the Independent Labour Party (1936) and Scheduled Caste Federation (1942) illustrates:",
    options: [
        "Gradual collaboration with Congress",
        "Use of constitutional framework to petition Dalit rights",
        "Commitment to revolutionary overthrow",
        "Focus only on reservations"
    ],
    correct: 1
    },
    {
    id: 85,
    test: 9,
    question: "Ambedkar should be understood as:",
    options: [
        "Electoral politician",
        "Thinker analyzing Indian society and democracy",
        "Marxist historian",
        "Limited constitutional reformer"
    ],
    correct: 1
    },
    {
    id: 86,
    test: 9,
    question: "Ambedkar’s view on religion:",
    options: [
        "Religion is ritual performance",
        "Religion ensures uniformity",
        "Religion as rules kills responsibility",
        "Religion ensures personal responsibility"
    ],
    correct: 2
    },
    {
    id: 87,
    test: 9,
    question: "Ambedkar’s caste critique represents:",
    options: [
        "Administrative critique",
        "Sociological-political critique linking caste to weak nationhood",
        "Anthropological race study",
        "Religious critique"
    ],
    correct: 1
    },
    {
    id: 88,
    test: 9,
    question: "Incorrect statement about Nehru’s foreign policy:",
    options: [
        "Promotes peace",
        "Maintains relations",
        "Respects international law",
        "Guided solely by national interest"
    ],
    correct: 3
    },
    {
    id: 89,
    test: 9,
    options: [
        "Socialist bias",
        "Exclusion of nations",
        "Conceptual flaw excluding India/China and including imperialist nations",
        "Too much defence focus"
    ],
    correct: 2
    },
    {
    id: 90,
    test: 9,
    question: "Which is NOT a Panchsheel principle?",
    options: [
        "Peaceful coexistence",
        "Respect sovereignty",
        "Non-interference",
        "Third-party mediation"
    ],
    correct: 3
    },

    /* ================= WEEK 10 ================= */

    {
    id: 91,
    test: 10,
    question: "Which is NOT an element of constitutional morality?",
    options: [
        "Freedom and self-restraint",
        "Plurality",
        "Skepticism of authority",
        "Right to violent protest"
    ],
    correct: 3
    },
    {
    id: 92,
    test: 10,
    question: "Ambedkar’s critique of parliamentary democracy:",
    options: [
        "Lack of liberty",
        "Failure of representation",
        "Liberty swallowing equality",
        "Fraternity priority"
    ],
    correct: 2
    },
    {
    id: 93,
    test: 10,
    question: "Ambedkar on non-cooperation and satyagraha:",
    options: [
        "Essential",
        "Grammar of anarchy",
        "Necessary for democracy",
        "Legitimate protest"
    ],
    correct: 1
    },
    {
    id: 94,
    test: 10,
    question: "Good society (Ambedkar):",
    options: [
        "Scientific outlook",
        "Political + economic democracy",
        "Liberty, Equality, Fraternity",
        "Vote equality"
    ],
    correct: 2
    },
    {
    id: 95,
    test: 10,
    question: `Three safeguards of democracy:

    I. Constitutional methods
    II. Avoid hero worship
    III. Social democracy
    IV. Violent revolution`,
    options: [
        "I, II, IV",
        "II, III, IV",
        "I, II, III",
        "II, III"
    ],
    correct: 2
    },
    {
    id: 96,
    test: 10,
    question: "Ramabai’s contribution:",
    options: [
        "Religious reform",
        "Upper caste focus",
        "Self-reliance in emancipation",
        "Legal reform only"
    ],
    correct: 2
    },
    {
    id: 97,
    test: 10,
    question: "Ramabai’s critique shows tension between:",
    options: [
        "Western vs Indian thought",
        "Spiritual need vs institutional religion",
        "Christian vs nationalism",
        "Role vs family"
    ],
    correct: 1
    },
    {
    id: 98,
    test: 10,
    question: "Incorrect about democracy (Ambedkar):",
    options: [
        "Means and ends",
        "Scientific outlook linked",
        "Mode of associated living",
        "Social transformation tool"
    ],
    correct: 1
    },
    {
    id: 99,
    test: 10,
    question: "Ramabai’s approach vs male reformers:",
    options: [
        "Scripture use",
        "Upper caste focus",
        "Self-reliance addition",
        "Legalism"
    ],
    correct: 2
    },
    {
    id: 100,
    test: 10,
    question: "Final realization of secularism depends on:",
    options: [
        "Western separation",
        "Anti-religious state",
        "Majority attitude toward minorities",
        "Ban religion"
    ],
    correct: 2
    },
    /* ================= WEEK 11 ================= */

    {
    id: 101,
    test: 11,
    question: "Ramabai’s shift in thought regarding the role of Shastras in women’s emancipation signifies a transition from:",
    options: [
        "Advocating reformist reading to dismissing them",
        "Emphasizing Shastric education for domestic virtues to critiquing their role in patriarchal oppression",
        "Belief in Shastras’ liberation to Bhakti",
        "Male reformers’ interpretation to Western critique"
    ],
    correct: 1
    },
    {
    id: 102,
    test: 11,
    question: "Incorrect statement regarding Lohia’s ‘principle of immediacy’:",
    options: [
        "Ethical justification intrinsic",
        "Based on present not future",
        "Prevents greed/fear politics",
        "Justified by future implications"
    ],
    correct: 3
    },
    {
    id: 103,
    test: 11,
    question: "Ramabai’s historiographical argument on Sati:",
    options: [
        "Blames British",
        "Varna system flaw",
        "Misreading of Vedas by priestly class",
        "Return to Vedic age"
    ],
    correct: 2
    },
    {
    id: 104,
    test: 11,
    question: "Bridge thinker between Gandhi and Ambedkar:",
    options: [
        "Ramabai",
        "Nehru",
        "Phule",
        "Lohia"
    ],
    correct: 3
    },
    {
    id: 105,
    test: 11,
    question: "Ramabai’s degradation argument grounded in:",
    options: [
        "Marxism",
        "Cultural nationalism",
        "Pre-natal influence affecting national progress",
        "Political disenfranchisement"
    ],
    correct: 2
    },
    {
    id: 106,
    test: 11,
    question: "Ramabai’s ‘othering’ emphasized:",
    options: [
        "Literacy",
        "Inter-caste marriage",
        "Self-reliance",
        "Vedic revivalism"
    ],
    correct: 2
    },
    {
    id: 107,
    test: 11,
    question: "Lohia’s socialism:",
    options: [
        "Marxist adaptation",
        "Reject all foreign thought",
        "Indigenous solution free from Eurocentric ideologies",
        "Central planning + Gandhian values"
    ],
    correct: 2
    },
    {
    id: 108,
    test: 11,
    question: "Lohia’s critique of capitalism & communism aligns with:",
    options: [
        "Anarchism",
        "Religious fundamentalism",
        "Gandhian critique of modernity",
        "Western liberal democracy"
    ],
    correct: 2
    },
    {
    id: 109,
    test: 11,
    question: "Forward-looking worldview (Lohia):",
    options: [
        "Western replication",
        "Reject all ideas",
        "Reconstruct world using multiple perspectives",
        "Technological dominance"
    ],
    correct: 2
    },
    {
    id: 110,
    test: 11,
    question: `Read the following two statements:

    Statement I: Ramabai argued Indian women had better status in the past.

    Statement II: She linked degradation of women to degradation of the Hindu nation.`,
    options: [
        "Only I",
        "Only II",
        "Both correct",
        "Neither"
    ],
    correct: 2
    },

    /* ================= WEEK 12 ================= */

    {
    id: 111,
    test: 12,
    question: "Core tensions in modern Indian political thought:",
    options: [
        "Colonialism vs theory",
        "Unity vs discord; freedom vs equity; nationalism vs globalism",
        "Eurocentrism vs Swaraj",
        "Hindutva vs Panchamahi"
    ],
    correct: 1
    },
    {
    id: 112,
    test: 12,
    question: "Entry into ruling class (Lohia):",
    options: [
        "Land + politics",
        "High caste, English education, wealth",
        "Party membership",
        "Socialism commitment"
    ],
    correct: 1
    },
    {
    id: 113,
    test: 12,
    question: "Lohia vs Periyar difference:",
    options: [
        "Reform focus",
        "Economic vs cultural",
        "Gender focus",
        "Opposed anti-Brahminism movements"
    ],
    correct: 3
    },
    {
    id: 114,
    test: 12,
    question: "Chaukhamba Raj property distribution:",
    options: [
        "Village + center",
        "Center, State, District, Village",
        "Province + center",
        "Four organs"
    ],
    correct: 1
    },
    {
    id: 115,
    test: 12,
    question: `Read the following two statements:

    Statement I: Lohia supported replacing English with Hindi.

    Statement II: He opposed English as it created inequality.`,
    options: [
        "Only I",
        "Only II",
        "Both",
        "Neither"
    ],
    correct: 2
    },
    {
    id: 116,
    test: 12,
    question: "Sapt Kranti principle linking caste & gender:",
    options: [
        "Against race inequality",
        "Destroy caste",
        "Gender equality",
        "Economic equality"
    ],
    correct: 2
    },
    {
    id: 117,
    test: 12,
    question: "Lohia on socialism:",
    options: [
        "Universal ideology",
        "Distinct idea needing no prefix/suffix",
        "Centralized state",
        "Eurocentric history"
    ],
    correct: 1
    },
    {
    id: 118,
    test: 12,
    question: "Lohia on English language:",
    options: [
        "Supports mother tongue",
        "Dynamic thinking",
        "Creates inferiority complex",
        "Limits science"
    ],
    correct: 2
    },
    {
    id: 119,
    test: 12,
    question: "Not among Lohia’s focus areas for women:",
    options: [
        "Marriage reform",
        "Education/property equality",
        "Political reservation",
        "Domestic duty training"
    ],
    correct: 3
    },
    {
    id: 120,
    test: 12,
    question: "Author of ‘Marx, Gandhi and Socialism’:",
    options: [
        "Ambedkar",
        "Lohia",
        "M.N. Roy",
        "J.P. Narayan"
    ],
    correct: 1
    }
];