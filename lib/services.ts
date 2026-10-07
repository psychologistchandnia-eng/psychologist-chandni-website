export type ServiceFaq = { question: string; answer: string };
export type Service = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  condition: string;
  intro: string;
  signs: string[];
  when: string[];
  care: string[];
  faqs: ServiceFaq[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "anxiety",
    title: "Anxiety and Worry",
    h1: "Anxiety Therapy in Malad West, Mumbai",
    metaTitle: "Anxiety Therapy in Malad West, Mumbai",
    metaDescription: "Psychological support for anxiety, worry and tension in Malad West, Mumbai. Learn about counselling, first visits and online appointments.",
    condition: "Anxiety",
    intro: "Anxiety can affect the body, thoughts, sleep, decisions and relationships. A psychology consultation offers time to understand what has been happening and consider practical support without judgement.",
    signs: ["Worry that is hard to pause", "Feeling tense, restless or on edge", "Difficulty sleeping or concentrating", "Avoiding situations that feel overwhelming", "Physical sensations such as a racing heart or tight chest"],
    when: [
      "Consider speaking with a psychologist when anxiety has been present for a while, keeps returning, or makes everyday activities, relationships, study or work harder. You do not need to wait until things feel unmanageable to ask for support.",
      "An appointment can also help when you are unsure whether a reaction is anxiety, stress, a health concern or a combination. A psychologist can listen, discuss your goals and recommend another professional when a medical assessment is more suitable."
    ],
    care: [
      "Counselling starts with your experience rather than a label. Together you can notice triggers, thoughts, body sensations and coping habits. Depending on your needs, sessions may draw on CBT-informed strategies, grounding, mindfulness, emotional regulation and gradual practice with situations you have been avoiding.",
      "The work is collaborative and reviewed over time. You and the psychologist can agree on small, realistic steps and discuss what is or is not helping. Therapy does not promise a particular result, and a psychiatrist or physician may be included when symptoms or physical concerns call for medical care."
    ],
    faqs: [
      { question: "Can anxiety cause physical symptoms?", answer: "Anxiety can come with physical sensations, but new, severe or changing symptoms should also be assessed by a medical professional." },
      { question: "Do I need a diagnosis before booking?", answer: "No referral or diagnosis is needed to start a conversation. You can describe what you have noticed and what support you are looking for." },
      { question: "Can counselling help with panic?", answer: "A psychologist can help you understand panic experiences and consider coping strategies. A medical assessment may be appropriate for new or severe symptoms." },
      { question: "Are online sessions available?", answer: "Yes. Online appointments are available by prior booking, subject to suitability, privacy and a reliable connection." }
    ],
    related: ["stress-workplace-burnout", "sleep-problems", "self-esteem-personal-growth"]
  },
  {
    slug: "depression",
    title: "Depression and Low Mood",
    h1: "Depression Counselling in Malad West, Mumbai",
    metaTitle: "Depression Counselling in Malad West, Mumbai",
    metaDescription: "Discuss low mood, changes in energy or interest, and possible counselling support with Psychologist Chandni Akhenia in Malad West, Mumbai.",
    condition: "Depression",
    intro: "Low mood can touch energy, interest, sleep, appetite and connection with other people. A consultation can help you talk through the changes and consider what kind of psychological or medical support may fit.",
    signs: ["Low or empty mood that keeps returning", "Less interest in people or activities", "Changes in sleep, appetite or energy", "Difficulty concentrating or making decisions", "Feeling unusually self-critical, hopeless or withdrawn"],
    when: [
      "Consider meeting a psychologist when low mood or loss of interest lasts, affects daily routines, or feels difficult to carry alone. Support can also be useful when changes are less clear but something about your usual life or relationships feels different.",
      "A psychologist can discuss how long the changes have been present and how they affect you. If symptoms are severe, a medical review may be recommended. If you may harm yourself or cannot stay safe, seek immediate support through local emergency services or Tele-MANAS at 14416."
    ],
    care: [
      "Counselling can make room to describe what has changed and identify pressures, losses, relationship concerns, health factors and existing sources of support. Psychotherapy may explore patterns of thought and behaviour, daily routines, self-criticism and ways to reconnect with manageable activities.",
      "Follow-up is planned with you and adjusted as your needs become clearer. A psychologist does not prescribe medication; when a psychiatric or medical opinion could help, that option can be discussed. Care is individual, and no outcome or timeline can be guaranteed."
    ],
    faqs: [
      { question: "Does low mood always mean depression?", answer: "No. Low mood has many possible causes. An assessment looks at duration, impact, context and other explanations before drawing conclusions." },
      { question: "Can I speak to a psychologist before seeing a psychiatrist?", answer: "Yes. You can begin with a psychology consultation. A psychiatric or medical assessment may be suggested if it would support your care." },
      { question: "What if talking feels difficult?", answer: "You can go at a pace that feels manageable. You do not need to prepare a complete story before your first appointment." },
      { question: "Is online counselling possible?", answer: "Yes. Online appointments are available by prior booking when a private space and secure connection are available." }
    ],
    related: ["grief-loss", "anxiety", "sleep-problems"]
  },
  {
    slug: "stress-workplace-burnout",
    title: "Stress and Workplace Burnout",
    h1: "Stress and Workplace Burnout Counselling in Malad West, Mumbai",
    metaTitle: "Stress & Burnout in Malad West, Mumbai",
    metaDescription: "Counselling for stress and workplace burnout in Malad West, Mumbai. Explore boundaries, coping strategies and follow-up at your pace.",
    condition: "Stress and workplace burnout",
    intro: "Long-running pressure can affect rest, focus, mood and the way you relate to others. Counselling can help you understand the load you are carrying and consider more sustainable ways to respond.",
    signs: ["Feeling depleted or unable to switch off", "Irritability, worry or emotional exhaustion", "Difficulty focusing or completing familiar tasks", "Sleep changes or recurring headaches and tension", "Feeling detached from work or responsibilities"],
    when: [
      "You may want to speak with a psychologist when stress is affecting your health, relationships, work or studies, or when rest no longer seems to restore your energy. Burnout is not a personal failure; it can be a signal to look carefully at demands, resources and boundaries.",
      "A consultation can help separate work pressures from other concerns and identify what is within your control. Physical symptoms, persistent sleep problems or severe mood changes can also need medical review, so the discussion may include referral options where appropriate."
    ],
    care: [
      "Counselling may look at stressors, expectations, work patterns, recovery time, self-talk and the support available to you. CBT-informed reflection and practical skills can help you notice unhelpful cycles, set boundaries and make changes in manageable steps.",
      "Work is shaped around your situation rather than a fixed productivity target. Follow-up gives you space to review what changed and what remains difficult. Workplace wellness conversations can also focus on stress awareness, communication and emotional wellbeing; no specific employer programme or result is promised."
    ],
    faqs: [
      { question: "Is burnout the same as depression?", answer: "They can overlap, but they are not identical. A consultation can explore the pattern and whether a medical or psychological assessment is appropriate." },
      { question: "Can work stress affect sleep?", answer: "Ongoing stress may affect rest, but sleep changes can have several causes. A medical review is sensible when symptoms are persistent or severe." },
      { question: "Will therapy tell me to quit my job?", answer: "No. Sessions can help you clarify priorities, limits and options; decisions remain yours." },
      { question: "Can I book online after work?", answer: "Online appointments are available by prior booking. Current hours are listed on this site and on the Google Business Profile." }
    ],
    related: ["anxiety", "productivity-focus", "sleep-problems"]
  },
  {
    slug: "relationship-couples-counselling",
    title: "Relationship and Couples Counselling",
    h1: "Relationship and Couples Counselling in Malad West, Mumbai",
    metaTitle: "Couples Counselling in Malad West, Mumbai",
    metaDescription: "Relationship and couples counselling in Malad West, Mumbai for communication, conflict, trust and boundaries. Learn about first visits and booking.",
    condition: "Relationship distress",
    intro: "Relationship concerns can involve communication, trust, conflict, boundaries or uncertainty about what comes next. Counselling provides a structured space to understand the pattern and hear each person’s concerns.",
    signs: ["The same disagreements keep returning", "Conversations turn into blame or silence", "Trust, boundaries or emotional needs feel difficult to discuss", "A major change has created distance or tension", "You feel unsure how to make a relationship decision"],
    when: [
      "You can seek support before a relationship reaches a breaking point. A consultation may be useful when conflict is becoming harder to repair, when communication feels stuck, or when one or both people want help deciding what they need.",
      "Couples work is not about assigning blame or guaranteeing that a relationship will continue. The first discussion clarifies each person’s goals, the format of sessions and how privacy will be handled. If safety or coercion is present, individual support and specialist resources may be more appropriate."
    ],
    care: [
      "Counselling may help people slow down recurring interaction cycles, express needs more clearly, listen without interruption and consider boundaries. Depending on the concerns, sessions may include both partners or begin separately so that the approach is understood and agreed.",
      "Progress is reviewed through conversation, not a promised outcome. Some couples choose to work on communication; others use sessions to make a thoughtful decision about next steps. Follow-up is paced around the goals and safety of the people involved."
    ],
    faqs: [
      { question: "Can one partner attend alone?", answer: "Yes. An individual consultation can help you discuss your concerns and understand options for support." },
      { question: "Can family members join a session?", answer: "Participation is discussed with everyone involved, with clear consent, privacy expectations and a focus on the agreed purpose." },
      { question: "Does couples counselling guarantee reconciliation?", answer: "No. Counselling supports understanding and communication; it cannot guarantee a particular relationship decision or outcome." },
      { question: "Are online couples sessions possible?", answer: "Online sessions can be discussed when both participants can join privately and the format is suitable." }
    ],
    related: ["self-esteem-personal-growth", "stress-workplace-burnout", "teen-adolescent-mental-health"]
  },
  {
    slug: "teen-adolescent-mental-health",
    title: "Teen and Adolescent Mental Health",
    h1: "Teen and Adolescent Mental Health Support in Malad West, Mumbai",
    metaTitle: "Teen Mental Health in Malad West, Mumbai",
    metaDescription: "Adolescent mental health support in Malad West, Mumbai. Learn how counselling, privacy and caregiver involvement are discussed.",
    condition: "Adolescent mental health concerns",
    intro: "Growing up brings changes at home, at school and among friends. When a young person seems distressed or their usual routines change, an age-appropriate conversation can help clarify what support may be useful.",
    signs: ["A lasting change in mood or behaviour", "Pulling away from friends or family", "Changes in sleep, appetite, attendance or school work", "Strong worry, irritability or loss of interest", "Difficulty communicating what feels wrong"],
    when: [
      "Consider seeking support when changes persist, cause distress, affect school or relationships, or leave a teenager feeling unable to cope. A young person does not have to explain everything perfectly to begin a conversation.",
      "The first discussion covers who will take part, consent, privacy and how information is shared with caregivers. Concerns about safety need prompt adult and professional attention. A psychologist may recommend additional assessment or another service when needs fall outside the available scope."
    ],
    care: [
      "Sessions are adapted to a young person’s age, comfort and goals. Counselling can explore mood, friendships, family communication, school pressures and coping skills using clear language and collaborative activities when helpful.",
      "Caregivers may be involved when appropriate and agreed, while respecting the young person’s voice and privacy. Follow-up is reviewed over time. If symptoms need medical assessment, the family can be guided toward a suitable physician or psychiatrist."
    ],
    faqs: [
      { question: "Do you see teenagers?", answer: "Yes, adolescent concerns can be discussed. Consent, caregiver involvement and privacy are clarified before care begins." },
      { question: "Will parents be told everything?", answer: "Privacy and its limits are explained in advance. Safety concerns and legal requirements may affect what information must be shared." },
      { question: "Should a parent attend the first meeting?", answer: "The format depends on the young person’s age, needs and consent. This is agreed before the appointment." },
      { question: "Can a teen consult online?", answer: "Online sessions may be suitable in some situations. A private space, caregiver arrangements and safety plan are considered first." }
    ],
    related: ["anxiety", "depression", "relationship-couples-counselling"]
  },
  {
    slug: "adhd-autism",
    title: "ADHD and Autism Support",
    h1: "ADHD and Autism Support in Malad West, Mumbai",
    metaTitle: "ADHD & Autism Support in Malad West, Mumbai",
    metaDescription: "Discuss ADHD, autism-related concerns, daily-life support and assessment options with a psychologist in Malad West, Mumbai.",
    condition: "Attention-deficit/hyperactivity disorder and autism-related concerns",
    intro: "Differences in attention, organisation, communication or sensory experience can shape daily life in many ways. A consultation can help describe what you notice and consider whether further assessment or practical support is useful.",
    signs: ["Difficulty starting, sequencing or finishing tasks", "Attention that shifts easily or feels hard to direct", "Long-standing differences in communication or social interaction", "Sensory experiences that feel unusually intense", "Challenges with routines, transitions or overwhelm"],
    when: [
      "You can seek support when these patterns affect study, work, relationships or everyday responsibilities, whether or not you already have a diagnosis. Childhood history, current demands and the environments where difficulties appear may all matter.",
      "A consultation is not automatically a diagnostic assessment. ADHD and autism assessment can require developmental history, validated tools and input from suitably qualified professionals. The next step will be explained clearly, including referral when a full diagnostic or medical evaluation is needed."
    ],
    care: [
      "Psychological support can focus on understanding individual strengths and challenges, building routines, planning tasks, managing overwhelm and communicating support needs. Approaches are adapted to the person rather than treating neurodivergence as a character flaw.",
      "Follow-up can review whether changes are practical and respectful of the person’s preferences. When assessment, medication advice or specialist accommodations are needed, those are discussed with the relevant qualified professional; this page does not promise diagnosis or a particular result."
    ],
    faqs: [
      { question: "Can a psychologist diagnose ADHD or autism?", answer: "A consultation can explore concerns. A formal assessment depends on professional scope, training and the assessment process; referral may be recommended." },
      { question: "Can adults seek ADHD or autism support?", answer: "Yes. Adults can discuss attention, communication, sensory and daily-life concerns, including patterns they remember from childhood." },
      { question: "Do I need school records?", answer: "They can be useful for some assessments, but you can begin without them. The psychologist will explain what information may help." },
      { question: "Can support happen online?", answer: "Online counselling may suit some goals. Assessment needs and access requirements are considered individually." }
    ],
    related: ["productivity-focus", "teen-adolescent-mental-health", "anxiety"]
  },
  {
    slug: "ocd",
    title: "OCD and Intrusive Thoughts",
    h1: "OCD Therapy in Malad West, Mumbai",
    metaTitle: "OCD Therapy in Malad West, Mumbai",
    metaDescription: "Psychological counselling for OCD and intrusive thoughts in Malad West, Mumbai. Learn about first visits and possible support.",
    condition: "Obsessive-compulsive disorder",
    intro: "Unwanted thoughts and repeated actions can take up time and make daily life feel difficult. A consultation can help you describe the cycle and understand what kinds of evidence-informed support may be appropriate.",
    signs: ["Intrusive or unwanted thoughts that return", "Repeated checking, washing, counting or mental rituals", "Strong distress when a ritual is interrupted", "Seeking reassurance to reduce anxiety", "Rituals or thoughts taking significant time"],
    when: [
      "Consider speaking with a psychologist when intrusive thoughts or rituals cause distress, affect routines, or are difficult to resist even when you recognise they may not be helpful. You do not have to share details before you feel ready.",
      "A careful assessment helps distinguish OCD concerns from other experiences and identifies whether additional medical or specialist input is useful. A consultation is not a test of willpower, and it does not require you to stop rituals suddenly."
    ],
    care: [
      "Counselling can help you understand triggers, distress and the role of reassurance or rituals. When clinically suitable and within the professional’s training, psychotherapy may include CBT-based work and gradual, collaborative practice with uncertainty. The pace and steps are discussed rather than imposed.",
      "Follow-up provides space to review distress, practical barriers and any changes. OCD can have more than one treatment option; a psychiatrist or specialist may be involved when medication advice or additional expertise is needed. Results are individual and cannot be guaranteed."
    ],
    faqs: [
      { question: "Are intrusive thoughts the same as intentions?", answer: "Not necessarily. A clinician can help you understand unwanted thoughts in context without judging you." },
      { question: "Should I stop rituals before therapy?", answer: "No sudden change is required to book. Any practice is planned collaboratively and only when clinically appropriate." },
      { question: "Can OCD be treated with counselling?", answer: "Psychotherapy is one possible part of care. A psychologist can discuss suitable options and referral to a psychiatrist when needed." },
      { question: "Can I book an online consultation?", answer: "Yes. Online appointments are available by prior booking when a private and reliable setting is available." }
    ],
    related: ["anxiety", "productivity-focus", "sleep-problems"]
  },
  {
    slug: "trauma-ptsd",
    title: "Trauma and PTSD Support",
    h1: "Trauma and PTSD Support in Malad West, Mumbai",
    metaTitle: "Trauma & PTSD Support in Malad West, Mumbai",
    metaDescription: "Trauma and PTSD-related counselling in Malad West, Mumbai, with a careful pace and discussion of suitable support options.",
    condition: "Trauma-related and post-traumatic stress concerns",
    intro: "After a frightening or painful experience, reminders can affect sleep, safety, mood and relationships. Psychological support can begin with what feels manageable; you do not need to recount an event in detail at the first visit.",
    signs: ["Unwanted memories, dreams or reminders", "Avoiding places, people or conversations", "Feeling constantly alert or easily startled", "Emotional numbness, shame or difficulty trusting", "Sleep, concentration or relationship changes"],
    when: [
      "Consider speaking with a psychologist when experiences from the past continue to affect daily life, relationships or a sense of safety. Support can also be useful for distress after a recent event, even when you are unsure what to call it.",
      "A first consultation can focus on present needs and safety rather than asking for a full account. The psychologist may discuss whether trauma-focused care is suitable, whether another professional should be involved, and how to keep the pace manageable."
    ],
    care: [
      "Care is collaborative and sensitive to choice. Early conversations may focus on stabilisation, grounding, sleep, coping and available support. If trauma-focused psychotherapy is appropriate and within the clinician’s competence, its purpose and pace are explained before starting.",
      "Follow-up is used to review safety, comfort and goals. No one should be pressured to disclose more than they choose. For immediate danger or risk of harm, emergency support is more appropriate than waiting for a routine appointment."
    ],
    faqs: [
      { question: "Do I have to describe the traumatic event?", answer: "No. You can begin with how you are feeling now. Any discussion of past events is paced with your consent." },
      { question: "Does every difficult event lead to PTSD?", answer: "No. Reactions vary. A qualified assessment considers symptoms, duration, impact and other possible explanations." },
      { question: "Can online trauma counselling work?", answer: "It may be suitable for some people. Privacy, comfort, stability and access to support are discussed first." },
      { question: "What if I feel unsafe right now?", answer: "Contact local emergency services or a trusted person immediately. In India, Tele-MANAS can be reached at 14416." }
    ],
    related: ["anxiety", "sleep-problems", "self-esteem-personal-growth"]
  },
  {
    slug: "personality-disorders",
    title: "Personality and Relationship Patterns",
    h1: "Personality Disorder Support in Malad West, Mumbai",
    metaTitle: "Personality Support in Malad West, Mumbai",
    metaDescription: "Counselling for emotional and relationship patterns in Malad West, Mumbai. Discuss concerns and suitable next steps without judgement.",
    condition: "Personality-related mental health concerns",
    intro: "Long-standing patterns in emotion, self-image or relationships can cause real distress, but they do not define a person. A respectful consultation focuses on what is difficult and what kind of support could help.",
    signs: ["Emotions that feel intense or hard to settle", "Repeated conflict or fear of losing important relationships", "A shifting or uncertain sense of self", "Impulsive choices that later feel difficult", "Patterns that affect work, friendships or family life"],
    when: [
      "Consider seeking support when patterns have been present for a long time and repeatedly interfere with relationships, decisions or emotional wellbeing. You do not need to identify with a diagnosis before asking for help.",
      "A thoughtful assessment takes context, history and strengths into account. One difficult reaction or online checklist cannot establish a personality disorder. The consultation can clarify the concerns and whether psychological, psychiatric or other support should be included."
    ],
    care: [
      "Psychotherapy may explore triggers, emotions, expectations, self-image and relationship cycles. Depending on goals, sessions can include emotion regulation, distress tolerance, communication and boundary-setting skills. The approach should be collaborative and free of blame or stigma.",
      "Follow-up lets you review skills and goals over time. If risk, medication questions or complex needs arise, collaboration with a psychiatrist or other suitable professional may be recommended. Therapy does not guarantee a diagnosis, cure or specific relationship outcome."
    ],
    faqs: [
      { question: "Can a personality disorder be diagnosed in one session?", answer: "A careful assessment takes time and context. One meeting or a self-test is not enough to establish a diagnosis." },
      { question: "Will I be judged for relationship difficulties?", answer: "The aim is to understand patterns respectfully and consider practical support, not to assign blame." },
      { question: "Can DBT-informed skills be discussed?", answer: "Emotional regulation and distress-tolerance strategies may be discussed when relevant and within the clinician’s competence." },
      { question: "Can family join a session?", answer: "Family participation can be considered with consent and a clear purpose, while respecting privacy and safety." }
    ],
    related: ["relationship-couples-counselling", "self-esteem-personal-growth", "anxiety"]
  },
  {
    slug: "sleep-problems",
    title: "Sleep Problems and Rest",
    h1: "Sleep Problems Counselling in Malad West, Mumbai",
    metaTitle: "Sleep Counselling in Malad West, Mumbai",
    metaDescription: "Discuss sleep difficulties, routines and stress with a psychologist in Malad West, Mumbai, including when medical review may help.",
    condition: "Sleep problems",
    intro: "Sleep difficulties can affect mood, concentration, energy and health. A consultation can help you discuss your routines and stressors while recognising that sleep problems can also have medical causes.",
    signs: ["Difficulty falling asleep or waking often", "Waking earlier than planned and struggling to return to sleep", "Feeling unrefreshed or tired during the day", "Worry about sleep that builds at bedtime", "An irregular sleep schedule that affects daily routines"],
    when: [
      "Consider speaking with a psychologist when sleep difficulties persist, distress you, or affect work, study, mood or relationships. You can bring a simple note of your sleep pattern if that feels useful, but it is not required.",
      "A health professional can help consider stress, routines, medication, physical health and other factors. Loud snoring, breathing pauses, severe daytime sleepiness or a sudden change may need prompt medical assessment rather than counselling alone."
    ],
    care: [
      "Counselling may explore how worry, habits, work patterns and the sleep environment interact. Practical steps can be chosen together and reviewed in follow-up; advice is adjusted to your circumstances rather than presented as a guaranteed fix.",
      "A psychologist does not replace a physician when a physical or sleep-related condition may be involved. If medical assessment is appropriate, that can be discussed. Online sessions may be an option for psychological support."
    ],
    faqs: [
      { question: "Can stress affect sleep?", answer: "Stress may affect sleep, but there are many possible causes. Persistent or severe sleep changes should be discussed with a medical professional." },
      { question: "Should I keep a sleep diary?", answer: "A brief record can help show patterns if you find it manageable. It is optional for the first appointment." },
      { question: "Can counselling help with insomnia?", answer: "Psychological support may help with patterns related to stress or worry. A clinician can also recommend medical review when needed." },
      { question: "Do you offer online appointments?", answer: "Yes. Online sessions are available by prior booking when the format is suitable." }
    ],
    related: ["anxiety", "stress-workplace-burnout", "depression"]
  },
  {
    slug: "grief-loss",
    title: "Grief and Loss",
    h1: "Grief and Loss Counselling in Malad West, Mumbai",
    metaTitle: "Grief Counselling in Malad West, Mumbai",
    metaDescription: "Grief and loss counselling in Malad West, Mumbai. Explore a supportive first conversation without a fixed timeline or pressure to share.",
    condition: "Grief and bereavement",
    intro: "Grief can follow the death of someone important, a relationship ending, a change in health or another significant loss. There is no single correct way to grieve and no fixed timetable for feeling different.",
    signs: ["Waves of sadness, longing or anger", "Changes in sleep, appetite or concentration", "Feeling numb or disconnected", "Finding ordinary routines harder for a time", "Strong reactions to reminders, dates or places"],
    when: [
      "You may choose support when grief feels isolating, daily responsibilities are difficult, or you want a space where you do not have to protect others from your feelings. Seeking help does not mean that grief is an illness.",
      "A psychologist can listen and help you consider what support fits your needs. If grief comes with severe depression, thoughts of self-harm, or an inability to stay safe, seek prompt professional or emergency support."
    ],
    care: [
      "Counselling can offer room to talk about the person or change, remember what matters, and make sense of mixed feelings. It may also focus on practical coping, relationships, rituals, rest and the supports available around you.",
      "Follow-up is guided by your wishes and can change over time. The aim is not to erase a loss or rush you through a process. A medical or specialist service may be suggested if other concerns need attention."
    ],
    faqs: [
      { question: "How long does grief last?", answer: "There is no standard timeline. People respond differently, and support can be useful whenever you want help." },
      { question: "Is grief only about bereavement?", answer: "No. Grief can follow many meaningful losses, including relationship, health, identity or life changes." },
      { question: "Do I need to talk about the loss in detail?", answer: "No. You choose what to share, and the conversation can begin with what daily life is like now." },
      { question: "Can I book an online session?", answer: "Yes. Online appointments are available by prior booking when a private, reliable setting is available." }
    ],
    related: ["depression", "self-esteem-personal-growth", "relationship-couples-counselling"]
  },
  {
    slug: "self-esteem-personal-growth",
    title: "Self-Esteem and Personal Growth",
    h1: "Self-Esteem and Personal Growth in Malad West, Mumbai",
    metaTitle: "Self-Esteem Support in Malad West, Mumbai",
    metaDescription: "Counselling for self-esteem, self-doubt and personal growth in Malad West, Mumbai. Learn about a first visit and online options.",
    condition: "Self-esteem and personal growth concerns",
    intro: "Self-doubt, harsh self-talk or difficulty trusting your own choices can make everyday life feel smaller. Counselling can help you understand where these patterns came from and what you want to change.",
    signs: ["Frequent self-criticism or comparison", "Difficulty saying no or setting boundaries", "Fear of making mistakes or disappointing others", "Repeated overthinking after decisions", "A gap between your values and daily choices"],
    when: [
      "You can seek support even if there is no single crisis. A psychologist may be helpful when self-doubt affects relationships, work, study or your ability to pursue meaningful goals, or when you want a clearer understanding of your needs.",
      "A first conversation can focus on what you hope will be different. It does not require you to have a diagnosis or a detailed explanation of every past experience."
    ],
    care: [
      "Counselling may explore beliefs about worth, feedback from important relationships, life transitions and habits of self-comparison. CBT-informed reflection, self-compassion practice and values-based planning can be discussed when they fit your goals.",
      "Follow-up creates time to test small changes and review what feels authentic. Therapy is not about becoming perfect or meeting someone else’s expectations; it is a collaborative process, and individual outcomes vary."
    ],
    faqs: [
      { question: "Do I need a mental health diagnosis?", answer: "No. People can seek counselling for self-understanding, confidence, boundaries and personal goals without a diagnosis." },
      { question: "Can therapy help with people-pleasing?", answer: "Sessions can explore the situations and beliefs involved and consider practical ways to communicate needs and boundaries." },
      { question: "How should I prepare?", answer: "Think about one or two situations you would like to discuss. It is fine to arrive without notes." },
      { question: "Can I book online?", answer: "Yes. Online appointments are available by prior booking, with a private space and reliable connection." }
    ],
    related: ["relationship-couples-counselling", "anxiety", "productivity-focus"]
  },
  {
    slug: "productivity-focus",
    title: "Productivity and Focus",
    h1: "Productivity and Focus Support in Malad West, Mumbai",
    metaTitle: "Productivity & Focus in Malad West, Mumbai",
    metaDescription: "Support for focus, task planning and productivity concerns in Malad West, Mumbai. Explore counselling and practical next steps.",
    condition: "Focus and productivity concerns",
    intro: "Difficulty starting or finishing tasks can come from many sources, including overload, stress, sleep, mood or attention differences. A consultation can help you explore the pattern without reducing it to laziness.",
    signs: ["Putting off tasks even when they matter", "Losing track of steps or deadlines", "Feeling overwhelmed by planning and organisation", "Focus changing sharply with stress or interest", "Work routines affecting sleep, confidence or relationships"],
    when: [
      "Consider seeking support when focus or follow-through problems are persistent, distressing, or affect work, study or daily responsibilities. You can begin whether the concern is new or has been present since childhood.",
      "The discussion may consider stress, mood, environment, sleep, health and possible attention differences. A psychological appointment does not automatically diagnose ADHD; a formal assessment or medical review may be recommended when indicated."
    ],
    care: [
      "Counselling can help identify bottlenecks and build small, practical systems for planning, task initiation, breaks and realistic expectations. Strategies are chosen to fit your actual schedule and can be revised when they do not work.",
      "Follow-up focuses on learning what supports consistency and what barriers remain. When concerns suggest a broader mental health or neurodevelopmental question, the psychologist can discuss assessment or referral rather than making assumptions."
    ],
    faqs: [
      { question: "Does poor focus mean I have ADHD?", answer: "No. Many things affect attention. Assessment considers history, settings, impact and other possible causes." },
      { question: "Can counselling help with procrastination?", answer: "Sessions can explore what makes tasks difficult to start and test practical changes suited to your situation." },
      { question: "Should I bring work or study deadlines?", answer: "You can bring examples if useful, but there is no required preparation for the first visit." },
      { question: "Are online sessions available?", answer: "Yes. Online appointments are available by prior booking and may suit goals focused on routines and coping." }
    ],
    related: ["adhd-autism", "stress-workplace-burnout", "self-esteem-personal-growth"]
  },
  {
    slug: "online-psychology-consultation",
    title: "Online Psychology Consultation",
    h1: "Online Psychology Consultation in Malad West, Mumbai",
    metaTitle: "Online Psychology Consultation in Malad West, Mumbai",
    metaDescription: "Online psychology consultations by prior booking with Chandni Akhenia in Malad West, Mumbai. Discuss fit, privacy and a first session.",
    condition: "Online psychology consultation",
    intro: "Online sessions can make it easier to speak from home or another private setting. The first conversation is still personal and collaborative, with time to discuss your concerns and decide on next steps.",
    signs: ["You want support but travel is difficult", "You live outside Malad or have a busy schedule", "You prefer speaking from a familiar private space", "You need follow-up without travelling to the clinic", "You are exploring whether counselling suits your needs"],
    when: [
      "An online appointment may be useful when you want to discuss anxiety, stress, relationships, mood, grief, self-esteem or another concern and can join from a private, reliable setting. You can ask about fit before deciding to continue.",
      "Online care may not suit every situation. If immediate in-person assessment, emergency support or a specialist service is needed, the psychologist can discuss another option. For urgent danger, use local emergency services rather than waiting for an online appointment."
    ],
    care: [
      "A video or online consultation follows the same basic approach as an in-person conversation: understanding your concerns, agreeing on goals and discussing appropriate support. The format, privacy arrangements and any technology limits are explained at the start.",
      "Follow-up can be arranged by prior booking. Please join from a space where you can speak freely, use headphones if helpful and keep a local support contact available when appropriate. Online counselling does not replace emergency or medical services."
    ],
    faqs: [
      { question: "How do I prepare for an online session?", answer: "Choose a private, quiet place, check your connection and keep a phone nearby in case the call drops." },
      { question: "Can I book from outside Mumbai?", answer: "Online appointments can be discussed for people outside Mumbai. Suitability and practical arrangements are reviewed before starting." },
      { question: "Is an online session confidential?", answer: "Privacy is discussed at the beginning. Use a private device and space; confidentiality has legal and safety limits." },
      { question: "What if online care is not right for me?", answer: "You can discuss in-person or other suitable options. A referral may be recommended when a different service is more appropriate." }
    ],
    related: ["anxiety", "depression", "stress-workplace-burnout"]
  }
];

export const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

export function servicePath(slug: string) {
  return "/" + slug + "/";
}

export function faqPageSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
}
