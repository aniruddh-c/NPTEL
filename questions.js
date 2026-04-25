const questions = [

/* ================= WEEK 1 ================= */

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
  correct: 1
},
{
  id: 4,
  test: 1,
  question: "Raja Ram Mohan Roy’s attitude towards Western modern education differed from that of some of his contemporaries. Roy primarily regarded Western modern education as a means of:",
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
}
,
/* ================= WEEK 2 ================= */

{
  id: 11,
  test: 2,
  question: "Tagore’s vision involved submitting to a ‘world-consciousness’ (Visva Bodh) rather than a national consciousness, where every country would:",
  options: [
    "Abandon political and commercial unions entirely.",
    "Keep alight its own lamp of mind as its share in the illumination of the whole world or humanity.",
    "Revive old institutions and community festivals to unify divided people.",
    "Follow its own destiny rather than merely imitate the West."
  ],
  correct: 1
},
{
  id: 12,
  test: 2,
  question: "Tagore discussed the duality of man, distinguishing between the ‘animal aspect’ concerned with necessities, and the ‘Universal Man’. What does the ‘Universal Man’ strive for?",
  options: [
    "Happiness.",
    "Necessities.",
    "Beauty.",
    "Magnificence."
  ],
  correct: 3
},
{
  id: 13,
  test: 2,
  question: "Tagore opposed the Non-Cooperation Movement launched by Gandhi in the 1920s because he argued that ‘parochial anti-west tendencies’ stemming from ‘blind national pride’ would lead to which consequence?",
  options: [
    "An over-reliance on untruth in political agitation.",
    "The failure of the ‘Charkha’ movement to achieve self-sufficiency.",
    "Hindering India’s cooperation with the international community.",
    "The triumph of patriotism over humanity."
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
    "Cosmopolitanism (as Visva Bodh).",
    "The ‘deep association’ between East and West.",
    "Nationalism (as the final spiritual shelter).",
    "The imitation of the West."
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
    "The aspirations of the Zamindars and the interest of the people.",
    "The political sphere and the spiritual ideals.",
    "Nationalism at the political level and community consciousness at the social level.",
    "The old institutions and the modern political machine."
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
    "Vande Mataram.",
    "Karmayogin.",
    "New Lamps for Old.",
    "The Human Cycle."
  ],
  correct: 2
},
{
  id: 22,
  test: 3,
  question: "What does ‘True Self’ mean as articulated by Aurobindo?",
  options: [
    "Rational mind.",
    "Truthful self.",
    "Spiritual individual.",
    "Physical self."
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
  question: `Read the following two statements and choose the correct option:

Statement I: Aurobindo talks about the ‘economics of a spiritualised society’, which intends to provide everyone with the pleasure of work in accordance with their nature and leisure as required for their inner development.

Statement II: According to Aurobindo, the prime objective of that society is to ensure a stable machinery of production for a longer time.`,
  options: [
    "Only Statement II is correct.",
    "Only Statement I is correct.",
    "Both Statement I & II are correct.",
    "Neither Statement I nor Statement II are correct."
  ],
  correct: 1
},
{
  id: 25,
  test: 3,
  question: "According to Aurobindo, nationalism was not merely a political programme, but ___:",
  options: [
    "A loose confederation of the people.",
    "A religion gifted by God.",
    "The objectification of the universal in individual life.",
    "A decolonised vision of international relations."
  ],
  correct: 1
},
{
  id: 26,
  test: 3,
  question: "Rajas element denotes:",
  options: [
    "A state of illumination.",
    "A state of ignorance.",
    "The will to action.",
    "A state of luxury."
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
    "The immediate formation of a powerful, centralized national government.",
    "The spiritual transformation of the people.",
    "The widespread adoption of Western education and rationalism.",
    "The establishment of economic equality through socialist reforms."
  ],
  correct: 1
}
,
/* ================= WEEK 4 ================= */

{
  id: 31,
  test: 4,
  question: "Vivekananda emphasized the need for ‘fresh interpretation of tradition’. What was the primary justification for this emphasis?",
  options: [
    "To align tradition with the needs of the emerging Westernized elite.",
    "To ensure the continuity of ritualistic practices in a changing world.",
    "To face the new world with new social and political requirements.",
    "To establish the supremacy of Advaita Vedanta over all other religious philosophies."
  ],
  correct: 2
},
{
  id: 32,
  test: 4,
  question: "Which of the following statements represents Vivekananda’s thoughts on democracy?",
  options: [
    "For Vivekananda, democracy was equal to any form of direct rule.",
    "For Vivekananda, democracy was a mode of anarchy.",
    "By democracy, Vivekananda only referred to the indirect forms of representation.",
    "Vivekananda understood democracy as a process that inculcates faith, self-reliance, and self-government."
  ],
  correct: 3
},
{
  id: 33,
  test: 4,
  question: "Vivekananda’s thinking was shaped by the contrasting influences of his parents. The synthesis of these traits arguably led to:",
  options: [
    "His exclusive focus on Advaita Vedanta as a purely mystical philosophy.",
    "His blend of rational, pragmatic inquiry (science) with spiritual ideals (non-attachment) in his youth.",
    "His early rejection of Western philosophy entirely.",
    "His decision to join the Sadharan Brahmo Samaj and reject Freemasonry."
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
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statements I and II are correct.",
    "Neither Statement I nor Statement II is correct."
  ],
  correct: 2
},
{
  id: 35,
  test: 4,
  question: "The famous quote from Vivekananda’s address at the Parliament of Religions is a powerful assertion of:",
  options: [
    "The inherent superiority of Hinduism as the ultimate religious path.",
    "The requirement for all religious people to ultimately convert to Christianity.",
    "The principle of universal religious tolerance and the non-exclusivity of truth.",
    "The need to reject all doctrines and dogmas of organized religion."
  ],
  correct: 2
},
{
  id: 36,
  test: 4,
  question: "Which of the following statements accurately captures Vivekananda’s views on politics and religion?",
  options: [
    "Politics and religion are two different domains.",
    "Politics and religion are inseparable.",
    "Religion is only a manifestation of politics.",
    "Politics is dependent on religion."
  ],
  correct: 0
},
{
  id: 37,
  test: 4,
  question: "Vivekananda’s simplified presentation of Advaita Vedanta emphasized that the supreme truth is based on:",
  options: [
    "The inherent separateness between the soul and Brahman.",
    "The rigid acceptance of existing social privileges and inequality.",
    "The divinity of the soul and the solidarity of mankind.",
    "The supremacy of ritualistic practice over philosophical knowledge."
  ],
  correct: 2
},
{
  id: 38,
  test: 4,
  question: "In the context of his reading of Vedanta, Vivekananda challenged social stratification by arguing:",
  options: [
    "Inequalities are endemic to individuals or institutions.",
    "The idea that one man is born superior to another has no meaning in Vedanta.",
    "Social privileges must be strictly maintained for spiritual order.",
    "Inequalities are a reflection of God’s will and must be accepted."
  ],
  correct: 1
},
{
  id: 39,
  test: 4,
  question: "Ninian Smart’s observation about Vivekananda refers to his construction of a Hinduism that was:",
  options: [
    "Purely localized, emotional, and sectarian cult.",
    "Entirely dependent on the colonial master’s interpretation.",
    "Rational, linear, non-emotive and masculine, detaching it from disorder, chaos, pain, pleasure, and emotions.",
    "Content with and appreciative of the India of his contemporary times, despite its flaws."
  ],
  correct: 2
},
{
  id: 40,
  test: 4,
  question: "In the view of Vivekananda, which of the following was not among the three ways of tackling the existing social concerns in India?",
  options: [
    "Emancipation of Women.",
    "Positive Education.",
    "Cultural Assimilation.",
    "Upliftment of the Masses."
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
    "Swaraj.",
    "Ahimsa.",
    "Sarvodaya.",
    "Varnashrama Dharma."
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
    "Martin Luther King.",
    "Nelson Mandela.",
    "Ruskin Bond.",
    "Henry David Thoreau."
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
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statement I & II are correct.",
    "Neither Statement I nor Statement II are correct."
  ],
  correct: 2
},
{
  id: 47,
  test: 5,
  question: "The Gandhian concept of Trusteeship is not merely an economic policy for wealth distribution but also serves as a necessary ethical practice for the rich towards:",
  options: [
    "Achieving political power by controlling community resources.",
    "Fulfilling the mandate of Aparigraha (non-possession) completely.",
    "Walking the ‘path of ethical development’ by holding excess property as a trust for the underprivileged.",
    "Mobilising capital for the creation of self-sufficient village industries."
  ],
  correct: 2
},
{
  id: 48,
  test: 5,
  question: "From the following statements, choose the one that is not correct regarding Mahatma Gandhi’s vision for future India.",
  options: [
    "Mahatma Gandhi envisioned India as a spiritually enlightened society.",
    "Mahatma Gandhi argued that self-purification could bring spiritual emancipation and lead to a spiritually enlightened society.",
    "In the vision of Mahatma Gandhi, a spiritually enlightened society will be an egalitarian society.",
    "Mahatma Gandhi held that a centralised polity with modern technologies is a prerequisite for the existence of a spiritually enlightened society."
  ],
  correct: 3
},
{
  id: 49,
  test: 5,
  question: "Gandhi rejected the utilitarian principle of ‘greatest good of the greatest number’ because:",
  options: [
    "The moral purity of the action rather than the consequence.",
    "The spiritual liberation of every individual, irrespective of their material condition.",
    "To strive for the 'greatest good of all' and not accept the sacrifice of a minority for the majority.",
    "To prioritize individual Swaraj (self-rule) over collective economic welfare."
  ],
  correct: 2
},
{
  id: 50,
  test: 5,
  question: "In defining ‘passive resistance’, Gandhi contrasts it with 'brute force'. The supreme merit of passive resistance, in his view, is that:",
  options: [
    "It is a political tool that produces far-reaching results without drawing a drop of blood.",
    "It is a method adopted by the spiritually superior Indian civilisation against the violent Europeans.",
    "It blesses the one who uses it but punishes the one against whom it is used.",
    "It requires the sacrifice of others for the common good."
  ],
  correct: 0
}
,
/* ================= WEEK 6 ================= */

{
  id: 51,
  test: 6,
  question: "Iqbal’s political ideology is best characterized by:",
  options: [
    "Reconciliation of Islamic universalism with modern nationalism.",
    "Sufi-Nietzsche synthesis.",
    "Rejection of Sir Syed.",
    "Abandonment of pan-Islamism."
  ],
  correct: 0
},
{
  id: 52,
  test: 6,
  question: "What was ‘Islam’ for Muhammad Iqbal?",
  options: [
    "A philosophy.",
    "A way of living.",
    "An embodiment of socio-cultural institutions.",
    "All of these."
  ],
  correct: 3
},
{
  id: 53,
  test: 6,
  question: "Iqbal’s productive period coincided with:",
  options: [
    "Liberalization.",
    "Anti-colonialism and conservatism.",
    "Rejection of the West.",
    "Pro-British socialism."
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
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statement I and Statement II are correct.",
    "Neither Statement I nor Statement II is correct."
  ],
  correct: 2
},
{
  id: 55,
  test: 6,
  question: "Iqbal’s early poetry reflected:",
  options: [
    "Isolationism.",
    "National unity and liberation.",
    "Critique of Congress.",
    "Islamic autonomy."
  ],
  correct: 1
},
{
  id: 56,
  test: 6,
  question: "Iqbal’s idea of Millat emphasizes:",
  options: [
    "Language unity.",
    "Unity of like-mindedness.",
    "Law dominance.",
    "Historical identity."
  ],
  correct: 1
},
{
  id: 57,
  test: 6,
  question: "Submission to God, according to Iqbal, implies:",
  options: [
    "Intellectual focus.",
    "Renunciation and ethical living.",
    "Self-destruction.",
    "Acceptance of order."
  ],
  correct: 1
},
{
  id: 58,
  test: 6,
  question: "The conflict between Khudi and Millat is resolved by:",
  options: [
    "Prioritizing the individual over the collective.",
    "Dissolving the self entirely.",
    "Balancing ego with Bekhudi.",
    "Rejecting individuality altogether."
  ],
  correct: 2
},
{
  id: 59,
  test: 6,
  question: "An ideal Muslim community, according to Iqbal, requires:",
  options: [
    "Homogeneity.",
    "Unity.",
    "Neither unity nor homogeneity.",
    "Both unity and homogeneity."
  ],
  correct: 3
},
{
  id: 60,
  test: 6,
  question: "Iqbal rejected nationalism because:",
  options: [
    "It breaks unity.",
    "It perpetuates colonial domination.",
    "It opposes religion.",
    "It removes differences."
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
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statements I and II are correct.",
    "Both Statements I and II are incorrect."
  ],
  correct: 0
},
{
  id: 63,
  test: 7,
  question: "Savarkar defined Hindutva as:",
  options: [
    "A monotheistic religion.",
    "A secular nationalism.",
    "An integration of all religious creeds native to Hindustan sharing a common culture and blood.",
    "A purely Vedic tradition."
  ],
  correct: 2
},
{
  id: 64,
  test: 7,
  question: "The closest term to Savarkar’s ‘Hindutva’ is:",
  options: [
    "Hinduism.",
    "Hinduness.",
    "Hindi.",
    "Hindustan."
  ],
  correct: 1
},
{
  id: 65,
  test: 7,
  question: "Savarkar opposed the Congress policy on minorities because:",
  options: [
    "He wanted subordination of minorities.",
    "He opposed preferential treatment and wanted equality.",
    "He wanted a theocratic state.",
    "He supported proportional representation."
  ],
  correct: 1
},
{
  id: 66,
  test: 7,
  question: "Which of the following is not correct regarding Savarkar’s idea of nationalism?",
  options: [
    "Culture and religion contribute to nationhood.",
    "It synthesizes territorial and cultural nationalism.",
    "Territorial unity is more important than religion or race.",
    "Language and culture are the sole basis of nationalism."
  ],
  correct: 2
},
{
  id: 67,
  test: 7,
  question: "Savarkar emphasized ‘common blood’ in order to:",
  options: [
    "Divide regions.",
    "Integrate races.",
    "Reduce caste divisions.",
    "Promote meritocracy."
  ],
  correct: 2
},
{
  id: 68,
  test: 7,
  question: "Which thinker influenced Savarkar’s nationalism?",
  options: [
    "Vivekananda.",
    "Mazzini.",
    "Gandhi.",
    "Ernest Renan."
  ],
  correct: 1
},
{
  id: 69,
  test: 7,
  question: "Savarkar’s ‘Essentials of Hindutva’ is based on:",
  options: [
    "Secular socialism.",
    "Pluralism.",
    "One language, one culture nationalism.",
    "Village republics."
  ],
  correct: 2
},
{
  id: 70,
  test: 7,
  question: "The major difference between Savarkar and Gandhi lies in:",
  options: [
    "Savarkar was silent on nationalism.",
    "Savarkar combined science and religion while Gandhi emphasized inclusivity.",
    "Savarkar imposed Hinduism.",
    "Savarkar rejected religion completely."
  ],
  correct: 1
}
/* ================= WEEK 8 ================= */

,
{
  id: 71,
  test: 8,
  question: "Nehru’s idea of secularism aimed to ensure:",
  options: [
    "That the state does not interfere in religious matters.",
    "The abolition of religion from public life.",
    "That the social position of an individual is not determined by religion.",
    "The establishment of a Hindu state with protection for minorities."
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
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statement I and Statement II are correct.",
    "Neither Statement I nor Statement II is correct."
  ],
  correct: 2
},
{
  id: 73,
  test: 8,
  question: "Which of the following best describes the core components of Nehru’s vision of India?",
  options: [
    "Agrarian economy combined with spiritual revival.",
    "Monarchical governance combined with capitalism.",
    "A secular, democratic, and socialist state.",
    "An authoritarian industrial state."
  ],
  correct: 2
},
{
  id: 74,
  test: 8,
  question: `Read the following statements:

Statement I: Gandhi and Nehru both saw the state as a ‘soulless machine’.

Statement II: Gandhi supported decentralization, whereas Nehru supported central planning.`,
  options: [
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statement I and Statement II are correct.",
    "Neither Statement I nor Statement II is correct."
  ],
  correct: 1
},
{
  id: 75,
  test: 8,
  question: "Nehru’s idea of democracy expanded beyond political democracy to include:",
  options: [
    "Aggressive nationalism.",
    "Scientific temper alone.",
    "Freedom linked with equality.",
    "Judicial supremacy."
  ],
  correct: 2
},
{
  id: 76,
  test: 8,
  question: "Which newspaper was founded by Jawaharlal Nehru?",
  options: [
    "The Times of India.",
    "The Hindu.",
    "National Herald.",
    "Dainik Bhaskar."
  ],
  correct: 2
},
{
  id: 77,
  test: 8,
  question: "Nehru’s role in international politics is best described as:",
  options: [
    "Alignment with the Soviet Union.",
    "Leadership in the Non-Aligned Movement.",
    "Advocacy for a world government led by Asia.",
    "Isolationist policy."
  ],
  correct: 1
},
{
  id: 78,
  test: 8,
  question: "Nehru opposed religious politics because:",
  options: [
    "It promotes Western nationalism.",
    "It hinders the development of a scientific and modern nationalism.",
    "It balances Westernization.",
    "It belongs purely to the private sphere."
  ],
  correct: 1
},
{
  id: 79,
  test: 8,
  question: "Which of the following statements is not correct regarding a secular state?",
  options: [
    "A secular state protects diversity.",
    "A secular state protects minority rights.",
    "A secular state does not intervene even in cases of religious domination.",
    "A secular state intervenes when religious domination violates equality."
  ],
  correct: 2
},
{
  id: 80,
  test: 8,
  question: "The realization of secularism ultimately depends on:",
  options: [
    "The separation of church and state.",
    "An anti-religious state.",
    "The attitude of the majority towards minorities.",
    "The banning of religion from public life."
  ],
  correct: 2
},

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
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statement I and Statement II are correct.",
    "Neither Statement I nor Statement II are correct."
  ],
  correct: 2
},
{
  id: 83,
  test: 9,
  question: "Which of the following constitutional provisions reflects Ambedkar’s belief that political democracy is meaningless without socio-economic democracy?",
  options: [
    "The adoption of bicameral legislature.",
    "The provision for the democratic abolition of Untouchability and safeguards for minorities.",
    "The adoption of a parliamentary form of government.",
    "The federal structure with a strong centre."
  ],
  correct: 1
},
{
  id: 84,
  test: 9,
  question: "How does Ambedkar’s formation of the Independent Labour Party (1936) and the Scheduled Caste Federation (1942) illustrate his political strategy?",
  options: [
    "It demonstrates a gradual move towards collaboration with the Indian National Congress.",
    "It reflects his belief in a political approach utilizing the opportunities of the British constitutional framework to petition for Dalit rights.",
    "It shows a commitment to revolutionary overthrow of the existing social order.",
    "It was primarily focused on obtaining reservations in educational institutions."
  ],
  correct: 1
},
{
  id: 85,
  test: 9,
  question: "A proper way to engage with Ambedkar and his work demands to see him as:",
  options: [
    "Purely political activist focused on electoral gains.",
    "Thinker who critically analysed Indian society and politics and whose projections on Indian democracy remain significant.",
    "Dedicated Marxist historian.",
    "Historian whose influence ended with the drafting of the Constitution."
  ],
  correct: 1
},
{
  id: 86,
  test: 9,
  question: "Which of the following sentences correctly reflects Ambedkar’s views on the nature of religion?",
  options: [
    "A true religion must be an external performance of prescribed rituals.",
    "Religion must be mainly a matter of rules to ensure social uniformity.",
    "When religion degenerates into a set of rules, it kills responsibility.",
    "Hinduism, being a set of principles, cultivates maximum personal responsibility."
  ],
  correct: 2
},
{
  id: 87,
  test: 9,
  question: "Ambedkar’s criticism that the consciousness existing in every Hindu is the ‘consciousness of his caste’ leading to fragmentation identifies his work as:",
  options: [
    "Purely administrative critique of British colonial policy.",
    "A sociological and political critique linking caste fragmentation directly to the failure of creating a cohesive national political community.",
    "An anthropological study focusing exclusively on racial intermixing.",
    "A religious critique focused solely on theological divergences."
  ],
  correct: 1
},
{
  id: 88,
  test: 9,
  question: "From the given statements, choose the one that is not correct regarding Nehru’s overall conception of foreign policy.",
  options: [
    "Nehru viewed that a country’s foreign policy should promote international peace and security.",
    "Nehru viewed that a country’s foreign policy should aim to sustain just and honourable relations between nations.",
    "Nehru viewed that a country’s foreign policy should respect international law and treaties.",
    "Nehru believed that a country’s foreign policy should be guided solely by national interest."
  ],
  correct: 3
},
{
  id: 89,
  test: 9,
  question: "Nehru criticised Clarence Streit’s proposal for a Union of Democracies because:",
  options: [
    "The proposed Union was excessively socialist and anti-capitalist.",
    "It did not include all British colonies.",
    "It was conceptually flawed by excluding major nations like India and China, and by including nations that were still imperialist and based on dominance.",
    "It placed too much emphasis on defence and too little on trade."
  ],
  correct: 2
},
{
  id: 90,
  test: 9,
  question: "Which of the following was not one of the five aspects of the Panchsheel Agreement signed in 1954?",
  options: [
    "Peaceful coexistence.",
    "Respect each other’s sovereignty and territorial integrity.",
    "Non-interference in each other’s domestic affairs.",
    "Mediation by a third party during conflict."
  ],
  correct: 3
}
,
/* ================= WEEK 10 ================= */

{
  id: 91,
  test: 10,
  question: "Which of the following is not a component of constitutional morality?",
  options: [
    "Freedom and self-restraint.",
    "Respect for plurality.",
    "Being sceptical of any personalization of authority.",
    "Right to violent protest under necessity."
  ],
  correct: 3
},
{
  id: 92,
  test: 10,
  question: "Which of the following best captures Ambedkar’s critique of the failure of Parliamentary democracy in Western countries?",
  options: [
    "A lack of emphasis on political liberty, leading to authoritarianism.",
    "A failure to adopt the representative form of government effectively.",
    "The tendency to balance liberty and equality, resulting in liberty ‘swallowing’ equality.",
    "The prioritization of constitutional morality over the spirit of fraternity."
  ],
  correct: 2
},
{
  id: 93,
  test: 10,
  question: "Ambedkar considered the use of non-cooperation and civil disobedience in a democratic setup to be:",
  options: [
    "Essential methods for ensuring accountability in the post-colonial state.",
    "Extra-constitutional methods that constitute the ‘grammar of anarchy’.",
    "Necessary instruments for achieving social and economic democracy.",
    "Legitimate forms of protest against unconstitutional morality."
  ],
  correct: 1
},
{
  id: 94,
  test: 10,
  question: "Ambedkar’s conception of a ‘good society’ is based on the principle of:",
  options: [
    "Scientific, Socialist Outlook, and Constitutional Morality.",
    "Political Democracy, Economic Democracy, and Social Democracy.",
    "Liberty, Equality, and Fraternity.",
    "One Man, One Vote, One Value, and Social Transformation."
  ],
  correct: 2
},
{
  id: 95,
  test: 10,
  question: `The three directives given by Ambedkar about a subsequent democracy in India include:

I. Following constitutional methods of politics.
II. Avoiding politics of hero-worship.
III. Striving equally for social democracy alongside political democracy.
IV. Promoting revolutionary changes through extra-constitutional means.`,
  options: [
    "I, II, and III only",
    "I, II, and IV only",
    "II, III, and IV only",
    "I, III, and IV only"
  ],
  correct: 0
},
{
  id: 96,
  test: 10,
  question: "Ramabai’s contribution to the discourse on women’s emancipation emphasized:",
  options: [
    "Religious reform within Hindu traditions.",
    "The upliftment of upper-caste women only.",
    "The importance of self-reliance among women.",
    "Legal reform as the sole solution."
  ],
  correct: 2
},
{
  id: 97,
  test: 10,
  question: "Ramabai’s critique highlights a tension between:",
  options: [
    "Western and Indian philosophical traditions.",
    "Spiritual needs and institutional religion.",
    "Christianity and nationalism.",
    "Individual roles and family structures."
  ],
  correct: 1
},
{
  id: 98,
  test: 10,
  question: "Which of the following statements is not correct regarding Ambedkar’s understanding of democracy?",
  options: [
    "Democracy is both a means and an end.",
    "Democracy is purely a scientific outlook unrelated to social conditions.",
    "Democracy is a mode of associated living.",
    "Democracy is a tool for social transformation."
  ],
  correct: 1
},
{
  id: 99,
  test: 10,
  question: "Ramabai’s approach differed from male reformers because she:",
  options: [
    "Focused primarily on scriptural reinterpretation.",
    "Emphasized upper-caste women.",
    "Added the dimension of self-reliance.",
    "Relied solely on legal frameworks."
  ],
  correct: 2
},
{
  id: 100,
  test: 10,
  question: "The final realization of secularism depends on:",
  options: [
    "Western models of church-state separation.",
    "The creation of an anti-religious state.",
    "The attitude of the majority towards minorities.",
    "The banning of religion."
  ],
  correct: 2
},

/* ================= WEEK 11 ================= */

{
  id: 101,
  test: 11,
  question: "Ramabai’s shift in thought regarding the role of Shastras in women’s emancipation signifies a transition from:",
  options: [
    "Advocating reformist reading of Shastras to dismissing them entirely.",
    "Emphasizing Shastric education for domestic virtues to critiquing their role in patriarchal oppression.",
    "Belief in Shastras’ liberatory potential to Bhakti-based reform.",
    "Male reformers’ interpretation to Western critique."
  ],
  correct: 1
},
{
  id: 102,
  test: 11,
  question: "Which of the following is not correct regarding Lohia’s ‘principle of immediacy’?",
  options: [
    "It has intrinsic ethical justification.",
    "It is based on present conditions rather than future outcomes.",
    "It prevents politics driven by greed and fear.",
    "It is justified primarily by its future implications."
  ],
  correct: 3
},
{
  id: 103,
  test: 11,
  question: "Ramabai’s historiographical argument on Sati was based on:",
  options: [
    "Blaming British intervention.",
    "The inherent flaw of the Varna system.",
    "Misinterpretation of Vedas by the priestly class.",
    "The need to return to a Vedic golden age."
  ],
  correct: 2
},
{
  id: 104,
  test: 11,
  question: "Who is regarded as a bridge thinker between Gandhi and Ambedkar?",
  options: [
    "Ramabai.",
    "Nehru.",
    "Phule.",
    "Lohia."
  ],
  correct: 3
},
{
  id: 105,
  test: 11,
  question: "Ramabai’s argument on women’s degradation is grounded in:",
  options: [
    "Marxist analysis.",
    "Cultural nationalism.",
    "The idea of pre-natal influence affecting national progress.",
    "Political disenfranchisement."
  ],
  correct: 2
},
{
  id: 106,
  test: 11,
  question: "Ramabai’s concept of ‘othering’ emphasized:",
  options: [
    "Literacy.",
    "Inter-caste marriage.",
    "Self-reliance.",
    "Vedic revivalism."
  ],
  correct: 2
},
{
  id: 107,
  test: 11,
  question: "Lohia’s socialism can be best described as:",
  options: [
    "A direct adaptation of Marxism.",
    "A rejection of all foreign thought.",
    "An indigenous solution free from Eurocentric ideologies.",
    "Central planning combined with Gandhian values."
  ],
  correct: 2
},
{
  id: 108,
  test: 11,
  question: "Lohia’s critique of capitalism and communism aligns with:",
  options: [
    "Anarchism.",
    "Religious fundamentalism.",
    "Gandhian critique of modernity.",
    "Western liberal democracy."
  ],
  correct: 2
},
{
  id: 109,
  test: 11,
  question: "Lohia’s forward-looking worldview emphasized:",
  options: [
    "Replication of Western models.",
    "Rejection of all external ideas.",
    "Reconstruction of the world using multiple perspectives.",
    "Technological dominance."
  ],
  correct: 2
},
{
  id: 110,
  test: 11,
  question: `Read the following statements:

Statement I: Ramabai argued that Indian women had better status in the past.

Statement II: She linked the degradation of women to the degradation of the Hindu nation.`,
  options: [
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statement I and Statement II are correct.",
    "Neither Statement I nor Statement II are correct."
  ],
  correct: 2
},

/* ================= WEEK 12 ================= */

{
  id: 111,
  test: 12,
  question: "The core tensions in modern Indian political thought include:",
  options: [
    "Colonialism versus theory.",
    "Unity versus discord; freedom versus equity; nationalism versus globalism.",
    "Eurocentrism versus Swaraj.",
    "Hindutva versus Panchamahi."
  ],
  correct: 1
},
{
  id: 112,
  test: 12,
  question: "According to Lohia, entry into the ruling class is determined by:",
  options: [
    "Land ownership and political affiliation.",
    "High caste status, English education, and wealth.",
    "Party membership.",
    "Commitment to socialism."
  ],
  correct: 1
},
{
  id: 113,
  test: 12,
  question: "The key difference between Lohia and Periyar lies in:",
  options: [
    "Focus on reform.",
    "Economic versus cultural priorities.",
    "Gender focus.",
    "Opposition to anti-Brahmin movements."
  ],
  correct: 3
},
{
  id: 114,
  test: 12,
  question: "Chaukhamba Raj distributes power across:",
  options: [
    "Village and center.",
    "Center, State, District, and Village.",
    "Province and center.",
    "Four abstract organs."
  ],
  correct: 1
},
{
  id: 115,
  test: 12,
  question: `Read the following statements:

Statement I: Lohia supported replacing English with Hindi.

Statement II: He opposed English because it created inequality.`,
  options: [
    "Only Statement I is correct.",
    "Only Statement II is correct.",
    "Both Statement I and Statement II are correct.",
    "Neither Statement I nor Statement II are correct."
  ],
  correct: 2
},
{
  id: 116,
  test: 12,
  question: "Which principle of Sapt Kranti links caste and gender?",
  options: [
    "Opposition to race inequality.",
    "Destruction of caste.",
    "Gender equality.",
    "Economic equality."
  ],
  correct: 2
},
{
  id: 117,
  test: 12,
  question: "Lohia viewed socialism as:",
  options: [
    "A universal ideology.",
    "A distinct idea needing no prefix or suffix.",
    "A centralized state system.",
    "A Eurocentric framework."
  ],
  correct: 1
},
{
  id: 118,
  test: 12,
  question: "According to Lohia, the use of English leads to:",
  options: [
    "Support for mother tongue.",
    "Dynamic thinking.",
    "An inferiority complex.",
    "Limitations in scientific progress."
  ],
  correct: 2
},
{
  id: 119,
  test: 12,
  question: "Which of the following was not among Lohia’s focus areas for women?",
  options: [
    "Marriage reform.",
    "Education and property equality.",
    "Political reservation.",
    "Domestic duty training."
  ],
  correct: 3
},
{
  id: 120,
  test: 12,
  question: "Who is the author of ‘Marx, Gandhi and Socialism’?",
  options: [
    "Ambedkar.",
    "Lohia.",
    "M. N. Roy.",
    "J. P. Narayan."
  ],
  correct: 1
}
];