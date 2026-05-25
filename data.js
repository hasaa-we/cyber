/* GENERATED FROM PYTHON MODULES */
const MODULES = [
  {
    id: 1, num: "1",
    title: "Foundations of Cybersecurity",
    icon: "🔐",
    desc: "CIA triad, threats, risk, controls, frameworks & ethics",
    color: "#00d4ff",
    levels: [
      {
        id: "1-1", title: "Introduction & Systems Evolution", slides: "2-13",
        concept: {
          title: "Introduction & Systems Evolution",
          body: [
      {"type": "line", "text": "Cybersecurity studies how digital systems fail under INTENTIONAL attack, not accidental errors."},
      {"type": "line", "text": "Most security failures originate from early DESIGN decisions."},
      {"type": "line", "text": "EARLY systems: isolated, trusted users, physical control replaced digital security."},
      {"type": "line", "text": "MODERN systems: interconnected, permanently exposed, rely on external libraries/services."},
      {"type": "line", "text": "Attack surface expanded with cloud & mobile computing."},
      {"type": "line", "text": "Old assumptions no longer hold: attackers deliberately violate assumptions systems still rely on."},
      {"type": "line", "text": "Why cybersecurity became necessary:"},
      {"type": "line", "text": "  • Integration removes isolation barriers (security becomes interdependent)."},
      {"type": "line", "text": "  • Attack automation allows massive scale."},
      {"type": "line", "text": "  • Cost of attacking decreased dramatically (DDoS for $5-15/hour)."}
    ]
        },
        questions: [
      {
        q: "What is the main reason cybersecurity became a critical field?",
        opts: ["Computers became faster", "Systems shifted from isolated/trusted to interconnected/permanently exposed", "Operating systems became open-source", "Keyboards became wireless"],
        correct: 1,
        hint: "Slides 4-9: Early systems were isolated with trusted users. Modern systems are interconnected, permanently exposed, with expanded attack surfaces. Old assumptions no longer hold.",
        wrongReasons: {
          0: ["Speed is not the core reason for security needs."],
          2: ["Open-source is a factor but not the fundamental shift."],
          3: ["Wireless keyboards are a minor peripheral concern."]
        }
      },
      {
        q: "A university's Student Information System was originally designed for internal staff only. Over time, it was connected to the Learning Management System and opened for remote access. A vulnerability in the LMS allowed unauthorized access to grade records. What is the key lesson?",
        opts: ["The LMS should have been deleted", "Integration removes isolation barriers and makes security interdependent", "Grade records are not important", "Remote access is always safe"],
        correct: 1,
        hint: "Slide 10: 'Integration removes isolation barriers and makes the security of systems interdependent.' Slide 16 case study: connecting systems expanded the attack surface.",
        wrongReasons: {
          0: ["Deleting the LMS is not practical or the lesson."],
          2: ["Grade records are highly sensitive."],
          3: ["Remote access introduces risks, not safety."]
        }
      },
      {
        q: "An attacker can rent a botnet for as little as $5 per hour to launch DDoS attacks. What does this illustrate?",
        opts: ["Cybersecurity is too expensive for defenders", "The cost of attacking decreased dramatically", "Botnets are illegal everywhere", "DDoS attacks are impossible to stop"],
        correct: 1,
        hint: "Slide 12: 'The cost of attacking decreased dramatically.' DDoS-for-hire services cost $5-$15 per hour. Low cost = massive scale of attacks.",
        wrongReasons: {
          0: ["The slide focuses on attacker cost, not defender cost."],
          2: ["While illegal, the low cost makes attacks accessible."],
          3: ["The slide doesn't say they're impossible to stop."]
        }
      },
      {
        q: "A web application uses open-source authentication libraries, third-party payment APIs, and cloud storage. A vulnerability in one dependency compromises the entire application. What principle does this demonstrate?",
        opts: ["Security depends only on code you write", "Security depends on code you did not write or control", "Open-source software is always secure", "Third-party APIs are unnecessary"],
        correct: 1,
        hint: "Slide 7: 'Software relies heavily on external libraries & services.' 'Security depends on code you did not write or control.'",
        wrongReasons: {
          0: ["The opposite — the app was compromised despite its own code being correct."],
          2: ["Open-source can have vulnerabilities too."],
          3: ["Third-party APIs are common and useful but introduce dependencies."]
        }
      }
    ]
      },
      {
        id: "1-2", title: "Security Mindset & Design Principles", slides: "14-32",
        concept: {
          title: "Security Mindset & Design Principles",
          body: [
      {"type": "line", "text": "Accidents vs Attacks:"},
      {"type": "line", "text": "  • Bugs cause unintentional failures from mistakes."},
      {"type": "line", "text": "  • Attacks are intentional actions by adversaries who adapt to defenses."},
      {"type": "line", "text": "  • Fixing bugs alone is insufficient — attackers actively search for new weaknesses."},
      {"type": "line", "text": "  • Security assumes INTELLIGENT adversaries, not random failures."},
      {"type": "empty"},
      {"type": "line", "text": "Security is NOT:"},
      {"type": "line", "text": "  • A feature, a single tool, encryption alone, compliance, or optional."},
      {"type": "line", "text": "  • Security emerges from interaction of ALL components: software, hardware, data, network, users."},
      {"type": "line", "text": "  • A secure component in an insecure system is STILL insecure."},
      {"type": "empty"},
      {"type": "line", "text": "Design requires trade-offs: Security vs Performance, Availability, Usability."},
      {"type": "empty"},
      {"type": "line", "text": "Systems are built on assumptions (trusted input, honest users, safe networks). Attackers deliberately violate them."},
      {"type": "line", "text": "Vulnerabilities are often introduced BEFORE coding. Late security fixes are costly or impossible."},
      {"type": "empty"},
      {"type": "line", "text": "WEAKEST-LINK PRINCIPLE:"},
      {"type": "line", "text": "  • Attackers target the EASIEST point of compromise, not the strongest defense."},
      {"type": "line", "text": "  • System security = its weakest dependency."},
      {"type": "line", "text": "  • Strong cryptography provides little protection if access control is weak."}
    ]
        },
        questions: [
      {
        q: "A company encrypts all sensitive data using modern cryptography. However, access is protected by a single shared admin account, and an attacker obtains the credentials through phishing. What principle does this illustrate?",
        opts: ["Encryption is useless", "The weakest-link principle — attackers target the easiest point, not the strongest defense", "Phishing is impossible to prevent", "Shared accounts improve security"],
        correct: 1,
        hint: "Slide 30: 'The Weakest-Link Principle' — attackers target the easiest point. 'Strong cryptography provides little protection if access control or logic is weak.'",
        wrongReasons: {
          0: ["Encryption is useful but cannot compensate for weak access control."],
          2: ["Phishing can be mitigated with MFA and training."],
          3: ["Shared accounts are a security weakness, not an improvement."]
        }
      },
      {
        q: "A development team builds an online platform focused on functionality and deadlines. They plan to 'add security later' after deployment. Which statement is TRUE about this approach?",
        opts: ["Security can always be added later without issues", "Late security fixes are costly and sometimes impossible because design decisions become permanent", "Early architecture has no impact on security", "Compliance audits fix all security problems"],
        correct: 1,
        hint: "Slide 20-24: 'We'll secure it later' is dangerous. Trust boundaries, identity models, data flows, and system structure are hard to change after deployment.",
        wrongReasons: {
          0: ["Slide 21: 'Can security fixes compensate for a weak initial design? Patches can reduce risk but rarely remove it entirely.'"],
          2: ["Slide 27: 'Design decisions strongly influence security outcomes. Vulnerabilities are often introduced before coding.'"],
          3: ["Slide 19: 'Does compliance guarantee absence of vulnerabilities? No.'"]
        }
      },
      {
        q: "Which statement correctly describes the relationship between bugs and attacks?",
        opts: ["Bugs and attacks are the same thing", "Bugs cause unintentional failures; attacks are intentional actions by adaptive adversaries", "Fixing all bugs eliminates all security risks", "Attackers cannot adapt to new defenses"],
        correct: 1,
        hint: "Slide 14: Bugs = 'unintentional failures from mistakes.' Attacks = 'intentional actions carried out by adversaries seeking to exploit system weaknesses.'",
        wrongReasons: {
          0: ["They are different concepts."],
          2: ["Slide 14: 'Fixing bugs alone is insufficient, because attackers actively search for new weaknesses.'"],
          3: ["Slide 14: 'Attackers adapt their behavior in response to defenses and system changes.'"]
        }
      },
      {
        q: "A system has state-of-the-art encryption but weak password policies and no access logging. An attacker guesses a weak password and deletes critical data. What failed?",
        opts: ["The encryption was too strong", "The system was only as secure as its weakest component", "The attacker used advanced techniques", "The data was not valuable"],
        correct: 1,
        hint: "Slide 30: 'System security is determined by its weakest dependency, not its best-protected component.' 'Once the weakest point is exploited, other defenses may become irrelevant.'",
        wrongReasons: {
          0: ["Strong encryption was not the problem."],
          2: ["Guessing a weak password is not advanced."],
          3: ["Critical data is by definition valuable."]
        }
      }
    ]
      },
      {
        id: "1-3", title: "Assets & Threats", slides: "25-37",
        concept: {
          title: "Assets & Threats",
          body: [
      {"type": "line", "text": "ASSET = anything of value to an organization that needs protection."},
      {"type": "line", "text": "Assets include: Data, Credentials, Communication records, Identity information, Behavior data, System functions."},
      {"type": "line", "text": "DATA is the primary asset in most systems. Includes: Personal info, academic records, financial data, configuration, source code."},
      {"type": "line", "text": "Information has value even if it doesn't have a price tag."},
      {"type": "empty"},
      {"type": "line", "text": "THREAT = potential cause of harm to assets. NOT an event that already occurred."},
      {"type": "line", "text": "Threats exist even when no attack is taking place."},
      {"type": "line", "text": "Threats are context-dependent: depend on asset, environment, value, timing, access."},
      {"type": "line", "text": "Threats cannot be completely eliminated — only reduced or mitigated."},
      {"type": "empty"},
      {"type": "line", "text": "Example: Phishing threat to university email exists even if no phishing campaign is active today. Threat level increases during exam periods."}
    ]
        },
        questions: [
      {
        q: "A university email system contains valuable identity and communication data. The possibility of phishing emails targeting credentials exists even when no phishing campaign is currently active. What concept does this describe?",
        opts: ["Vulnerability", "Threat", "Risk", "Exposure"],
        correct: 1,
        hint: "Slide 36: 'Threats are potential causes of harm to assets, not events that have already occurred.' 'Threats exist even when no attack is taking place.'",
        wrongReasons: {
          0: ["Vulnerability is an exploitable weakness. The scenario describes a potential cause of harm."],
          2: ["Risk requires threat + vulnerability + exposed asset together."],
          3: ["Exposure is about accessibility/reachability of a vulnerability."]
        }
      },
      {
        q: "In a university system, which of the following is typically considered the MOST critical asset to protect?",
        opts: ["Public website content about campus history", "Exam questions and student grade records", "Archived lecture slides from 10 years ago", "Course schedules"],
        correct: 1,
        hint: "Slide 34: Asset exercise ranking. Slide 66: 'Exam questions accessed before an exam by unauthorized users' and 'Student grades visible to users other than the concerned student' are confidentiality violations. Exam questions and grades are highly sensitive.",
        wrongReasons: {
          0: ["Public content is already intended to be seen by everyone."],
          2: ["Old slides have lower sensitivity than current exam questions."],
          3: ["Schedules are useful but less sensitive than grades/exams."]
        }
      },
      {
        q: "A hospital restricts medical record access to authenticated doctors and nurses. A staff member accesses a celebrity patient's record out of curiosity, not for treatment. No data is leaked outside the system. Which statement is TRUE?",
        opts: ["Both confidentiality and privacy are preserved", "Confidentiality is preserved (access was technically restricted), but privacy is violated (inappropriate access)", "Only privacy is preserved", "Neither is preserved"],
        correct: 1,
        hint: "Slide 68: 'Data confidentiality protects information from unauthorized access. Privacy focuses on protecting personal data and individual rights.' Slide 69 example: 'Confidentiality: ✅ Privacy: ❌' — authorized but inappropriate access violates privacy.",
        wrongReasons: {
          0: ["Privacy was violated — the staff member had no legitimate reason to access the record."],
          2: ["Confidentiality was technically maintained since access was logged and within the system."],
          3: ["Confidentiality mechanisms worked; privacy was the issue."]
        }
      },
      {
        q: "Which statement about threats is TRUE?",
        opts: ["Threats only exist during active attacks", "Threats are context-dependent and cannot be completely eliminated", "Threats are the same as vulnerabilities", "All threats can be fully eliminated with enough money"],
        correct: 1,
        hint: "Slide 36: Threats are 'context-dependent' and 'cannot be completely eliminated, only reduced or mitigated.'",
        wrongReasons: {
          0: ["Slide 36: 'Threats exist even when no attack is taking place.'"],
          2: ["Threats = potential harm. Vulnerabilities = exploitable weaknesses. Different concepts."],
          3: ["Slide 36: 'Threats cannot be completely eliminated, only reduced or mitigated.'"]
        }
      }
    ]
      },
      {
        id: "1-4", title: "Murphy's Law & Security Thinking", slides: "38-48",
        concept: {
          title: "Murphy's Law & Security Thinking",
          body: [
      {"type": "line", "text": "Murphy's Law: 'Anything that can go wrong, will go wrong.'"},
      {"type": "line", "text": "General laws:"},
      {"type": "line", "text": "  • Nothing is as easy as it looks."},
      {"type": "line", "text": "  • Everything takes longer than you think."},
      {"type": "line", "text": "  • If several things can go wrong, the one causing most damage will go wrong."},
      {"type": "line", "text": "  • If anything simply cannot go wrong, it will anyway."},
      {"type": "line", "text": "  • If you prepare for four ways things can go wrong, a fifth unprepared way will develop."},
      {"type": "empty"},
      {"type": "line", "text": "Why Murphy's Law matters in cybersecurity:"},
      {"type": "line", "text": "  • Security assumes failures and misuse are INEVITABLE."},
      {"type": "line", "text": "  • Systems should be designed expecting unexpected behavior."},
      {"type": "line", "text": "  • Trusting that 'nothing will happen' is a design flaw."},
      {"type": "line", "text": "  • Security planning focuses on RESILIENCE, not optimism."},
      {"type": "line", "text": "  • Ignoring unlikely scenarios leads to catastrophic failures."},
      {"type": "line", "text": "  • Rare events become LIKELY in large-scale systems."},
      {"type": "empty"},
      {"type": "line", "text": "Interpreting correctly:"},
      {"type": "line", "text": "  • Murphy's Law does NOT mean pessimism or paranoia."},
      {"type": "line", "text": "  • It means designing systems to handle failure gracefully."},
      {"type": "line", "text": "  • Goal: LIMIT damage, not prevent every failure."},
      {"type": "line", "text": "  • Security treats low-probability events SERIOUSLY."}
    ]
        },
        questions: [
      {
        q: "A system administrator says: 'Our system is so well-designed that nothing can possibly go wrong.' According to Murphy's Law, what is the flaw in this reasoning?",
        opts: ["The system is indeed perfect", "If anything simply cannot go wrong, it will anyway", "Murphy's Law only applies to hardware", "Security should focus only on likely failures"],
        correct: 1,
        hint: "Slide 42: 'If anything simply cannot go wrong, it will anyway.' Slide 47: 'Trusting that nothing will happen is a design flaw.'",
        wrongReasons: {
          0: ["No system is perfect."],
          2: ["Murphy's Law applies to all systems, not just hardware."],
          3: ["Slide 48: 'Security treats low-probability events seriously.'"]
        }
      },
      {
        q: "A cloud provider operates 10,000 servers. Each server has a 0.01% chance of failure per year. The provider assumes such a low probability means failures are negligible. What does Murphy's Law suggest?",
        opts: ["Failures are indeed negligible", "Rare events become likely in large-scale systems", "Cloud servers never fail", "Probability doesn't apply to computers"],
        correct: 1,
        hint: "Slide 48: 'Rare events become likely in large-scale systems.' With 10,000 servers, even a 0.01% individual failure rate means failures are expected.",
        wrongReasons: {
          0: ["0.01% × 10,000 servers = expected 1 failure per year. Not negligible."],
          2: ["All systems can fail."],
          3: ["Probability absolutely applies to computer systems."]
        }
      },
      {
        q: "Which statement BEST represents the correct interpretation of Murphy's Law in security design?",
        opts: ["Be pessimistic about all technology", "Design systems to handle failure gracefully and limit damage", "Accept that security is impossible", "Only protect against the most obvious threats"],
        correct: 1,
        hint: "Slide 49: 'It means designing systems to handle failure gracefully.' 'The goal is to limit damage, not prevent every failure.' 'Security treats low-probability events seriously.'",
        wrongReasons: {
          0: ["Slide 49: 'Murphy's Law does not mean pessimism or paranoia.'"],
          2: ["Security is achievable through proper design — the goal is resilience."],
          3: ["Slide 48: 'Ignoring unlikely scenarios leads to catastrophic failures.'"]
        }
      }
    ]
      },
      {
        id: "1-5", title: "Vulnerabilities, Risk & Attacks", slides: "48-56",
        concept: {
          title: "Vulnerabilities, Risk & Attacks",
          body: [
      {"type": "line", "text": "VULNERABILITY = exploitable weakness that makes harm possible when a threat exists."},
      {"type": "line", "text": "  • Originate from design, implementation, or configuration choices."},
      {"type": "line", "text": "  • Not all vulnerabilities are exploited — some remain hidden for years."},
      {"type": "line", "text": "  • Exploitability matters: a weakness only becomes a security issue if it can be abused in practice."},
      {"type": "empty"},
      {"type": "line", "text": "EXPOSURE = making vulnerabilities reachable to attackers."},
      {"type": "line", "text": "  • A vulnerability only matters if it is exposed."},
      {"type": "line", "text": "  • Systems can contain vulnerabilities that are not currently exposed."},
      {"type": "line", "text": "  • Changes in deployment can increase exposure."},
      {"type": "empty"},
      {"type": "line", "text": "BUGS vs VULNERABILITIES:"},
      {"type": "line", "text": "  • Bugs = defects in software/configuration/design."},
      {"type": "line", "text": "  • Vulnerabilities = bugs that can be exploited to cause security harm."},
      {"type": "line", "text": "  • Many bugs are harmless (affect reliability, not security)."},
      {"type": "line", "text": "  • Context determines severity."},
      {"type": "empty"},
      {"type": "line", "text": "RISK = potential for harm when a threat exploits a vulnerability in an exposed asset."},
      {"type": "line", "text": "  • Risk emerges ONLY when all three come together."},
      {"type": "line", "text": "  • A threat alone is not a risk. A vulnerability alone is not a risk. Exposure alone is not a risk."},
      {"type": "empty"},
      {"type": "line", "text": "ATTACK = intentional attempt to cause harm to valuable assets. Exploits weaknesses in systems, processes, or assumptions."}
    ]
        },
        questions: [
      {
        q: "A server has a known vulnerability in its database software, but the server is air-gapped (no network connection) and only accessible from a secure room. Which statement is TRUE?",
        opts: ["The vulnerability is not a risk because it is not exposed", "The vulnerability is automatically a critical risk", "Air-gapped systems cannot have vulnerabilities", "Exposure is irrelevant to security"],
        correct: 0,
        hint: "Slide 51: 'A vulnerability only matters if it is exposed to an attacker.' Slide 52: 'Same vulnerability, different exposure' — the identical software bug may be critical on an internet-facing server but harmless on an isolated system.",
        wrongReasons: {
          1: ["Risk requires exposure. Without network access, the vulnerability cannot be reached by remote attackers."],
          2: ["Air-gapped systems can still have vulnerabilities; they're just not remotely exploitable."],
          3: ["Slide 51: 'A vulnerability only matters if it is exposed to an attacker.' Exposure is critical."]
        }
      },
      {
        q: "A software bug causes a calculator app to display incorrect results. However, no attacker can use this to steal data or take control. What is this bug?",
        opts: ["A vulnerability", "A bug that is not a vulnerability", "An attack", "A threat"],
        correct: 1,
        hint: "Slide 56: 'Bugs are defects in software, configuration, or design.' 'Vulnerabilities are bugs that can be exploited to cause security harm.' 'Many bugs are harmless, affecting reliability but not security.'",
        wrongReasons: {
          0: ["Slide 56: 'Vulnerabilities are bugs that can be exploited to cause security harm.' This bug affects reliability but not security."],
          2: ["An attack is an intentional harmful action. A bug is unintentional."],
          3: ["A threat is potential harm. A bug is a defect."]
        }
      },
      {
        q: "Complete the risk formula: Risk emerges when a ___ exploits a ___ in an ___ asset.",
        opts: ["threat; vulnerability; exposed", "vulnerability; threat; protected", "bug; patch; updated", "attack; firewall; secured"],
        correct: 0,
        hint: "Slide 54: 'Risk is the potential for harm or loss when a threat exploits a vulnerability in an exposed asset.' 'A threat alone is not a risk. A vulnerability alone is not a risk. Exposure alone is not a risk. Risk emerges only when all three come together.'",
        wrongReasons: {
          1: ["Reversed order. Threat exploits vulnerability, not the other way around."],
          2: ["Bugs and patches don't fit the risk formula."],
          3: ["Firewalls are defenses, not part of the risk formula."]
        }
      },
      {
        q: "In the case study, a student logs in with valid credentials and modifies request parameters to access another student's grades. The system only checks if the user is logged in, not if they own the record. The system appears to operate normally. What is the VULNERABILITY in this case?",
        opts: ["The student knows programming", "Missing authorization check (only verifies login, not record ownership)", "The database is too slow", "The network is insecure"],
        correct: 1,
        hint: "Slide 57 case study: 'The system verifies that the user is logged in but does not consistently verify whether the record belongs to that user.' This is a missing authorization check — an access control vulnerability.",
        wrongReasons: {
          0: ["Knowing programming is not a vulnerability in the system."],
          2: ["Database speed is irrelevant to the authorization flaw."],
          3: ["The network may be secure; the flaw is in application logic."]
        }
      }
    ]
      },
      {
        id: "1-6", title: "Security Objectives: CIA", slides: "64-95",
        concept: {
          title: "Security Objectives: CIA",
          body: [
      {"type": "line", "text": "SECURITY OBJECTIVES:"},
      {"type": "line", "text": "  1. CONFIDENTIALITY: Information is not disclosed to unauthorized entities. Applies to data at rest, in use, and in transit. Loss of confidentiality does NOT require data modification."},
      {"type": "line", "text": "  2. INTEGRITY: Data and systems are accurate, complete, and unaltered. Covers data integrity (content correctness) and system integrity (proper functioning)."},
      {"type": "line", "text": "  3. AVAILABILITY: Systems and services are accessible by legitimate users when needed. Concerns performance, uptime, resilience. Loss can occur without data loss."},
      {"type": "empty"},
      {"type": "line", "text": "PRIVACY vs CONFIDENTIALITY:"},
      {"type": "line", "text": "  • Confidentiality = technical protection from unauthorized access."},
      {"type": "line", "text": "  • Privacy = legal/ethical/societal protection of personal data and individual rights."},
      {"type": "line", "text": "  • A system may preserve confidentiality while violating privacy (e.g., authorized but inappropriate access)."},
      {"type": "empty"},
      {"type": "line", "text": "DATA COLLECTION TYPES:"},
      {"type": "line", "text": "  • PII (Personally Identifiable Information): name, email, phone, address, ID numbers."},
      {"type": "line", "text": "  • Linkable information: device info, IP address, cookies."},
      {"type": "line", "text": "  • Online behavior: websites visited, content viewed, purchases."},
      {"type": "line", "text": "  • Location: GPS, Wi-Fi signals, geo-tagged content."},
      {"type": "line", "text": "  • Communication: texts, emails, calls."},
      {"type": "line", "text": "  • Biometric: fingerprint, voiceprint, iris, face."},
      {"type": "line", "text": "  • Financial: bank accounts, credit cards, transactions."},
      {"type": "line", "text": "  • Health: fitness data, electronic health records, insurance."}
    ]
        },
        questions: [
      {
        q: "Exam questions are accessed by unauthorized students before the exam begins. Which security objective is violated?",
        opts: ["Integrity", "Confidentiality", "Availability", "Accountability"],
        correct: 1,
        hint: "Slide 66: 'Exam questions accessed before an exam by unauthorized users' is a confidentiality violation. Slide 65: 'Confidentiality is the property that information is not disclosed to unauthorized entities.'",
        wrongReasons: {
          0: ["Integrity would mean the exam questions were modified. They were just seen by unauthorized people."],
          2: ["Availability would mean the exam system was down."],
          3: ["Accountability would mean we couldn't trace who accessed them."]
        }
      },
      {
        q: "A student submits an exam answer, but a technical error corrupts the file, and the submitted content is different from what the student wrote. Which security objective is violated?",
        opts: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        correct: 1,
        hint: "Slide 93: 'Integrity: Data and systems are accurate, complete, and unaltered.' Data integrity = content correctness. The file was corrupted/changed.",
        wrongReasons: {
          0: ["The data was not disclosed to unauthorized parties; it was changed."],
          2: ["The system was available — the file was submitted."],
          3: ["Authentication verifies identity. The issue is data correctness."]
        }
      },
      {
        q: "During registration week, the university's course registration system crashes under heavy load, preventing students from enrolling. No data is lost or stolen. Which security objective is violated?",
        opts: ["Confidentiality", "Integrity", "Availability", "Authentication"],
        correct: 2,
        hint: "Slide 95: 'Availability is the property that systems and services are accessible by legitimate users when needed.' 'Loss of availability can occur without data loss or modification.'",
        wrongReasons: {
          0: ["No unauthorized data disclosure occurred."],
          1: ["No data was modified or corrupted."],
          3: ["Authentication verifies identity. The issue is system accessibility."]
        }
      },
      {
        q: "A hospital restricts medical record access to authenticated doctors. A doctor accesses a celebrity patient's record out of curiosity. The access is technically authorized (the doctor has credentials) but not for treatment purposes. No data is leaked outside. Which statement is TRUE?",
        opts: ["Both confidentiality and privacy are preserved", "Confidentiality is preserved, but privacy is violated", "Only privacy is preserved", "Neither is preserved"],
        correct: 1,
        hint: "Slide 68: 'Data confidentiality protects information from unauthorized access. Privacy focuses on protecting personal data and individual rights.' Slide 69: 'Confidentiality: ✅ Privacy: ❌' — authorized but inappropriate access.",
        wrongReasons: {
          0: ["Privacy is violated because the access was inappropriate and unnecessary for treatment."],
          2: ["Confidentiality mechanisms worked (access was restricted and logged)."],
          3: ["Confidentiality was technically maintained."]
        }
      },
      {
        q: "Which of the following is considered Personally Identifiable Information (PII)?",
        opts: ["The average temperature in a city", "A person's full name, email address, and phone number", "The number of students in a class", "A company's total revenue"],
        correct: 1,
        hint: "Slide 72-73: PII includes 'Name, Age, Gender, Address, Phone number, Email Address, Internet Address, Device Information, Location.'",
        wrongReasons: {
          0: ["Weather data is not personal."],
          2: ["Class size is aggregate, not personally identifiable."],
          3: ["Company revenue is business data, not PII."]
        }
      }
    ]
      },
      {
        id: "1-7", title: "Auth, Accountability, Privacy & Trade-offs", slides: "96-109",
        concept: {
          title: "Authentication, Accountability, Privacy & Trade-offs",
          body: [
      {"type": "line", "text": "AUTHENTICATION: Verifies the identity of a user or system."},
      {"type": "line", "text": "  • User authenticity = users are who they claim to be."},
      {"type": "line", "text": "  • Data authenticity = data originates from a legitimate source."},
      {"type": "line", "text": "  • Authentication supports confidentiality and integrity but does NOT guarantee authorization or correctness."},
      {"type": "empty"},
      {"type": "line", "text": "ACCOUNTABILITY:"},
      {"type": "line", "text": "  • Requirement for actions to be traced uniquely to an entity."},
      {"type": "line", "text": "  • Supports: non-repudiation, fault isolation, intrusion detection/prevention, after-action recovery, legal action."},
      {"type": "line", "text": "  • Truly secure systems are not yet achievable => we must trace breaches to responsible parties."},
      {"type": "line", "text": "  • Examples: audit logs showing who modified a grade and when; tracking access for compliance."},
      {"type": "empty"},
      {"type": "line", "text": "TRADE-OFFS BETWEEN OBJECTIVES:"},
      {"type": "line", "text": "  • Confidentiality vs Availability: Strict access controls may delay emergency record access."},
      {"type": "line", "text": "  • Availability vs Integrity: Staying online during peak usage may require accepting invalid data."},
      {"type": "line", "text": "  • Integrity vs Confidentiality: Publishing audit logs for transparency exposes sensitive identifiers."},
      {"type": "line", "text": "  • Authentication vs Availability: Strong MFA may overload auth servers during peak periods."},
      {"type": "line", "text": "  • Accountability vs Privacy: Logging every action creates detailed behavioral records."},
      {"type": "line", "text": "  • Confidentiality vs Usability: End-to-end encryption with user-managed keys means forgotten passwords = permanent data loss."},
      {"type": "empty"},
      {"type": "line", "text": "Security design requires balancing objectives based on context and risk."}
    ]
        },
        questions: [
      {
        q: "A hospital enforces very strict access controls on patient records. During emergencies, authentication failures delay record access, impacting patient care. Confidentiality is strengthened, but another objective is degraded. Which one?",
        opts: ["Integrity", "Availability", "Accountability", "Authentication"],
        correct: 1,
        hint: "Slide 102-103: 'Confidentiality vs Availability' trade-off. 'Authentication failures delay record access.' 'Confidentiality is strengthened, availability is degraded.'",
        wrongReasons: {
          0: ["Data was not modified; the issue was delayed access."],
          2: ["Accountability (logging) was not the degraded objective."],
          3: ["Authentication was actually strengthened, not degraded."]
        }
      },
      {
        q: "An exam platform stays online during peak usage by disabling integrity checks and accepting submissions even when validation fails. Some exam data becomes incomplete. What trade-off is this?",
        opts: ["Confidentiality vs Integrity", "Availability vs Integrity", "Authentication vs Accountability", "Privacy vs Usability"],
        correct: 1,
        hint: "Slide 104: 'Availability vs Integrity' trade-off. 'The exam platform prioritizes staying online during peak usage.' 'To avoid downtime, integrity checks are disabled.' 'Availability is maintained, integrity is compromised.'",
        wrongReasons: {
          0: ["Data was not disclosed; it was accepted without proper validation."],
          2: ["Authentication was not the issue; the system stayed online."],
          3: ["Privacy and usability are not the trade-off here."]
        }
      },
      {
        q: "A company publishes detailed audit logs for transparency. The logs are accurate and tamper-proof, but they include sensitive user identifiers visible to the public. What trade-off is this?",
        opts: ["Confidentiality vs Availability", "Integrity vs Confidentiality", "Authentication vs Privacy", "Accountability vs Integrity"],
        correct: 1,
        hint: "Slide 105: 'Integrity vs Confidentiality' trade-off. 'Logs are accurate, complete, and tamper-proof.' 'Logs include sensitive user identifiers.' 'Integrity is preserved, confidentiality is violated.'",
        wrongReasons: {
          0: ["The system is available; the issue is exposed sensitive data."],
          2: ["Authentication is not the issue; the logs are public."],
          3: ["Integrity is preserved, not traded. The trade-off is with confidentiality."]
        }
      },
      {
        q: "Which security objective supports tracing who modified a student grade and when, enabling investigation after a security breach?",
        opts: ["Confidentiality", "Integrity", "Availability", "Accountability"],
        correct: 3,
        hint: "Slide 98-101: Accountability = 'The requirement for actions of an entity to be traced uniquely to that entity.' Supports 'fault isolation, intrusion detection, after-action recovery, legal action.' Example: 'Audit logs showing who modified a student grade and when.'",
        wrongReasons: {
          0: ["Confidentiality prevents unauthorized disclosure, not tracing actions."],
          1: ["Integrity ensures accuracy, not tracing who made changes."],
          2: ["Availability ensures access, not audit trails."]
        }
      },
      {
        q: "A university enforces multi-factor authentication for all students. During registration periods, authentication servers overload, and legitimate students cannot log in before deadlines. What trade-off is this?",
        opts: ["Confidentiality vs Integrity", "Authentication vs Availability", "Privacy vs Accountability", "Integrity vs Availability"],
        correct: 1,
        hint: "Slide 106: 'Authentication vs Availability' trade-off. 'Multi-factor authentication is enforced for all students.' 'Authentication servers overload during registration periods.' 'Authentication is strong, availability is reduced.'",
        wrongReasons: {
          0: ["Data was not disclosed or modified."],
          2: ["Privacy and accountability are not the trade-off here."],
          3: ["Data integrity was not compromised; the issue was login access."]
        }
      }
    ]
      },
      {
        id: "1-8", title: "Final Certification", slides: "2-109",
        concept: {
          title: "Final Certification: All Module 1 Concepts",
          body: [
      {"type": "line", "text": "Comprehensive review:"},
      {"type": "line", "text": "  • Cybersecurity = intentional attacks, not accidents."},
      {"type": "line", "text": "  • Systems evolved from isolated/trusted to interconnected/exposed."},
      {"type": "line", "text": "  • Security is NOT a feature, tool, encryption, or compliance. It is a system property."},
      {"type": "line", "text": "  • Weakest-link principle: attackers target the easiest entry point."},
      {"type": "line", "text": "  • Assets = data, credentials, identity, behavior, system functions. Data is primary."},
      {"type": "line", "text": "  • Threats = potential harm. Exist even without active attacks. Context-dependent."},
      {"type": "line", "text": "  • Murphy's Law: design for inevitable failures. Limit damage. Treat low-probability events seriously."},
      {"type": "line", "text": "  • Vulnerabilities = exploitable weaknesses. Bugs ≠ vulnerabilities."},
      {"type": "line", "text": "  • Exposure = vulnerability must be reachable to matter."},
      {"type": "line", "text": "  • Risk = threat + vulnerability + exposed asset. All three needed."},
      {"type": "line", "text": "  • Attacks = intentional attempts to cause harm."},
      {"type": "line", "text": "  • CIA: Confidentiality (no unauthorized disclosure), Integrity (accuracy), Availability (accessible when needed)."},
      {"type": "line", "text": "  • Authentication = verifies identity. Does NOT guarantee authorization."},
      {"type": "line", "text": "  • Accountability = tracing actions to entities. Supports non-repudiation, legal action."},
      {"type": "line", "text": "  • Privacy = legal/ethical protection of personal data. Different from confidentiality."},
      {"type": "line", "text": "  • Security objectives often conflict and require trade-offs based on context and risk."}
    ]
        },
        questions: [
      {
        q: "A system encrypts all stored data, requires strong passwords, monitors all access, and maintains 99.99% uptime. A single shared admin password is posted on a sticky note. An attacker uses it to steal all data. What principle explains why the strong encryption failed to protect the data?",
        opts: ["The encryption algorithm was weak", "The weakest-link principle", "Availability was too high", "The attacker was an insider"],
        correct: 1,
        hint: "Slide 30: 'Attackers deliberately target the easiest point of compromise, not the strongest defense.' 'System security is determined by its weakest dependency.' The sticky note password was the weakest link.",
        wrongReasons: {
          0: ["The encryption was described as strong."],
          2: ["High availability is good; it wasn't the cause of the breach."],
          3: ["The attacker could be external who found the sticky note."]
        }
      },
      {
        q: "A university database has a SQL injection vulnerability. The database is on an isolated internal network with no internet access, and only 3 administrators can reach it. Which concept best describes the current security state?",
        opts: ["High risk because all vulnerabilities are critical", "Low risk because the vulnerability is not exposed", "No risk because internal networks are always safe", "High risk because SQL injection is always exploitable"],
        correct: 1,
        hint: "Slide 51: 'A vulnerability only matters if it is exposed to an attacker.' 'Systems can contain vulnerabilities that are not currently exposed.' Slide 52: 'Same vulnerability, different exposure.'",
        wrongReasons: {
          0: ["Risk depends on exposure. A hidden vulnerability has lower risk."],
          2: ["Internal networks can be compromised too, but limited access reduces exposure significantly."],
          3: ["Exploitability requires access. Without exposure, the vulnerability cannot be reached."]
        }
      },
      {
        q: "Which statement correctly distinguishes confidentiality from privacy?",
        opts: ["They are exactly the same thing", "Confidentiality is technical protection from unauthorized access; privacy includes legal, ethical, and societal considerations about personal data", "Privacy is stronger than confidentiality", "Confidentiality only applies to paper documents"],
        correct: 1,
        hint: "Slide 68: 'Data confidentiality protects information from unauthorized access. Privacy focuses on protecting personal data and individual rights.' 'Confidentiality is a technical and organizational objective. Privacy includes legal, ethical, and societal considerations.'",
        wrongReasons: {
          0: ["They are related but distinct concepts."],
          2: ["Neither is inherently stronger; they address different aspects."],
          3: ["Confidentiality applies to all forms of information, not just paper."]
        }
      },
      {
        q: "Complete the sentence: Security is not a ___, not a single ___, not ___ alone, not ___, and not optional.",
        opts: ["password; firewall; antivirus; important", "feature; tool; encryption; compliance", "threat; vulnerability; risk; available", "computer; network; user; monitored"],
        correct: 1,
        hint: "Slide 25: 'Security is not a feature. Security is not a single tool. Security is not encryption alone. Security is not compliance. Security is not optional.'",
        wrongReasons: {
          0: ["Password and antivirus don't match the lecture's exact wording."],
          2: ["These are security concepts, not what security is NOT."],
          3: ["These don't match the lecture."]
        }
      },
      {
        q: "A company prioritizes keeping their e-commerce website online during Black Friday sales. They reduce input validation to handle more transactions per second. Some invalid orders are accepted. Which security trade-off is occurring?",
        opts: ["Confidentiality vs Integrity", "Availability vs Integrity", "Authentication vs Privacy", "Accountability vs Usability"],
        correct: 1,
        hint: "Slide 104: 'Availability vs Integrity' — prioritizing uptime over data correctness. The system stays online but accepts invalid submissions.",
        wrongReasons: {
          0: ["Data was not disclosed; the issue is accepting invalid data to stay online."],
          2: ["Authentication and privacy are not the trade-off here."],
          3: ["Accountability and usability are not the specific trade-off described."]
        }
      }
    ]
      },
    ]
  },
  {
    id: 2, num: "2.1",
    title: "Cyber Threat Landscape Part 1",
    icon: "🌐",
    desc: "Assets, adversaries, trust, attack surface, vulnerabilities",
    color: "#22c55e",
    levels: [
      {
        id: "2-1", title: "Assets & Their Value", slides: "2-6",
        concept: {
          title: "Assets & Their Value",
          body: [
      {"type": "line", "text": "ASSET = anything that has value and requires protection."},
      {"type": "line", "text": "Assets give meaning to security objectives. Security mechanisms exist because assets exist."},
      {"type": "line", "text": "Common asset categories:"},
      {"type": "line", "text": "  • Data assets: personal, financial, proprietary data"},
      {"type": "line", "text": "  • Identity assets: credentials, authentication material"},
      {"type": "line", "text": "  • Service assets: availability and continuity of operation"},
      {"type": "line", "text": "  • Integrity assets: correctness of records and transactions"},
      {"type": "line", "text": "  • Control assets: administrative or privileged access"},
      {"type": "line", "text": "  • Trust and reputation"},
      {"type": "line", "text": "Asset value is CONTEXT-DEPENDENT: the same asset has different value in different systems."},
      {"type": "line", "text": "Academic records differ from financial or medical records. Availability may matter more than confidentiality in some systems."},
      {"type": "line", "text": "Misidentified assets lead to MISPLACED security controls."}
    ]
        },
        questions: [
      {
        q: "Which statement about assets is TRUE?",
        opts: ["All assets have the same value across all systems", "Asset value is context-dependent and determines where protections should be strongest", "Assets only include digital files", "Attackers target systems randomly regardless of asset value"],
        correct: 1,
        hint: "Slide 5-6: Asset value is context-dependent. Different systems protect different types of assets. Misidentified assets lead to misplaced security controls.",
        wrongReasons: {
          0: ["Slide 6: 'The same asset may have different value in different systems.'"],
          2: ["Slide 4: Assets include data, identity, service, integrity, control, trust, reputation."],
          3: ["Slide 5: 'Assets determine what attackers are interested in' and 'Attackers select targets based on asset value.'"]
        }
      },
      {
        q: "A hospital prioritizes keeping patient records accurate and unaltered. A streaming service prioritizes keeping videos accessible 24/7. What concept does this illustrate?",
        opts: ["All systems need the same security", "Asset value and security priorities depend on system purpose and context", "Hospitals don't need availability", "Streaming services don't need data integrity"],
        correct: 1,
        hint: "Slide 6: 'Availability may matter more than confidentiality in some systems. Integrity may be more critical than secrecy in others.' Asset importance depends on system purpose.",
        wrongReasons: {
          0: ["Slide 6: 'Asset importance depends on system purpose. Security priorities follow asset context.'"],
          2: ["Hospitals do need availability, but integrity of medical records is critical."],
          3: ["Streaming services need integrity of their catalog data, just different priorities."]
        }
      },
      {
        q: "Which of the following is NOT listed as a common asset category in the lecture?",
        opts: ["Data assets", "Identity assets", "Marketing campaigns", "Control assets"],
        correct: 2,
        hint: "Slide 4 lists: Data assets, Identity assets, Service assets, Integrity assets, Control assets, Trust and reputation. Marketing campaigns are not listed as an asset category.",
        wrongReasons: {
          0: ["Data assets ARE listed (slide 4)."],
          1: ["Identity assets ARE listed (slide 4)."],
          3: ["Control assets ARE listed (slide 4)."]
        }
      }
    ]
      },
      {
        id: "2-2", title: "Adversaries / Threat Actors", slides: "7-24",
        concept: {
          title: "Adversaries / Threat Actors",
          body: [
      {"type": "line", "text": "ADVERSARY = an entity that intentionally causes harm. Cyber attacks are deliberate, not accidental."},
      {"type": "line", "text": "Adversaries act with goals, incentives, and constraints. Understanding adversaries explains attack patterns."},
      {"type": "empty"},
      {"type": "line", "text": "By Position:"},
      {"type": "line", "text": "  • External attackers with no legitimate access"},
      {"type": "line", "text": "  • Authenticated but malicious users"},
      {"type": "line", "text": "  • Insiders with privileged access"},
      {"type": "line", "text": "  • Third-party or supply-chain adversaries"},
      {"type": "line", "text": "  • Automated or opportunistic attackers"},
      {"type": "empty"},
      {"type": "line", "text": "By Motivation and Skills:"},
      {"type": "line", "text": "  • SCRIPT KIDDIES: low skill, high volume. Rely on public tools. Target exposed/misconfigured systems. Generate attack noise."},
      {"type": "line", "text": "  • HACKTIVISTS: ideology-driven. Seek visibility, not persistence. Use defacement and DoS. Geopolitical conflicts trigger activity."},
      {"type": "line", "text": "  • DISGRUNTLED EMPLOYEES: possess legitimate access. Operate inside trust boundaries. Abuse access rather than exploit vulnerabilities. Hard to distinguish from normal users."},
      {"type": "line", "text": "  • FINANCIALLY MOTIVATED: extortion, fraud, data resale. Target high-availability orgs. Operate as organized groups."},
      {"type": "line", "text": "  • ESPIONAGE-ORIENTED: intelligence gathering. Long-term access. Avoid visible disruption. State-sponsored or strategic."},
      {"type": "line", "text": "  • STATE-SPONSORED: national/strategic interests. Target governments, critical infrastructure. Emphasize stealth, persistence. Detection takes months/years."}
    ]
        },
        questions: [
      {
        q: "An attacker rents a botnet for $10/hour and uses publicly available scripts to scan the internet for IoT devices with default passwords. They have limited technical understanding. What adversary category is this?",
        opts: ["State-sponsored adversary", "Script kiddie", "Espionage-oriented adversary", "Disgruntled employee"],
        correct: 1,
        hint: "Slide 12: Script kiddies have 'limited technical understanding,' 'heavy reliance on public tools and scripts,' 'target exposed or misconfigured systems,' and 'generate large amounts of attack noise.' Mirai example (slide 13) demonstrates this.",
        wrongReasons: {
          0: ["State-sponsored actors have advanced capabilities and strategic objectives."],
          2: ["Espionage-oriented adversaries focus on stealth and intelligence gathering, not scanning with public tools."],
          3: ["Disgruntled employees have legitimate insider access."]
        }
      },
      {
        q: "A group launches coordinated DDoS attacks against government websites every year during a specific geopolitical anniversary. They publicize their actions and seek media attention. Their goal is protest, not financial gain. What type of adversary?",
        opts: ["Cybercriminal group", "Hacktivist", "State-sponsored actor", "Script kiddie"],
        correct: 1,
        hint: "Slide 14: Hacktivists are 'motivated by political or social causes,' 'seek visibility rather than persistence,' 'use defacement or denial-of-service attacks,' and 'often publicize their actions.' OpIsrael/OpJerusalem example (slide 15).",
        wrongReasons: {
          0: ["Cybercriminals seek financial gain, not protest."],
          2: ["State-sponsored actors prioritize stealth and long-term access, not public visibility."],
          3: ["Script kiddies lack ideology and focus on opportunistic attacks."]
        }
      },
      {
        q: "A former employee of a technology company uses retained access credentials to deliberately delete critical data after a workplace dispute. No malware or external exploit is used. What adversary type?",
        opts: ["External attacker", "Disgruntled or non-satisfied employee (insider)", "Hacktivist", "Script kiddie"],
        correct: 1,
        hint: "Slide 16-17: Disgruntled employees 'possess legitimate system access,' 'operate inside trust boundaries,' 'abuse access rather than exploit vulnerabilities,' and are 'difficult to distinguish from normal users.'",
        wrongReasons: {
          0: ["The attacker had retained insider access, not external."],
          2: ["No political or social cause is mentioned."],
          3: ["This required specific insider access, not public scripts."]
        }
      },
      {
        q: "The SolarWinds compromise (2020) involved inserting a backdoor into trusted software updates, remaining undetected for months, and targeting a limited set of high-value victims. Which adversary category best fits this operation?",
        opts: ["Script kiddie", "Financially motivated criminal", "State-sponsored or strategic adversary", "Hacktivist"],
        correct: 2,
        hint: "Slide 19-20: State-sponsored adversaries 'emphasize stealth, persistence, and intelligence value,' 'often avoid immediate disruption or public visibility,' and 'capabilities exceed those of most other adversaries.' SolarWinds (slide 19) = long-term strategic espionage.",
        wrongReasons: {
          0: ["Script kiddies use public tools and target exposed systems."],
          1: ["Financial criminals seek quick monetary gain, not long-term stealth."],
          3: ["Hacktivists seek visibility, not stealth and persistence."]
        }
      },
      {
        q: "Which statement about adversary categories is TRUE?",
        opts: ["All adversaries have the same skills and motivations", "Different adversaries require different protections, and defensive priorities depend on expected adversaries", "Ignoring adversaries still leads to complete security analysis", "Only external attackers pose real threats"],
        correct: 1,
        hint: "Slide 9: 'Different adversaries require different protections.' 'Defensive priorities depend on expected adversaries.' 'Ignoring adversaries leads to incomplete security analysis.'",
        wrongReasons: {
          0: ["Slide 24: 'Adversaries differ in motivation, capability, and access.'"],
          2: ["Slide 9: 'Ignoring adversaries leads to incomplete security analysis.'"],
          3: ["Slide 16: Insiders with privileged access are significant threats."]
        }
      }
    ]
      },
      {
        id: "2-3", title: "Trust, Assumptions & Least Privilege", slides: "25-45",
        concept: {
          title: "Trust, Assumptions & Least Privilege",
          body: [
      {"type": "line", "text": "TRUST defines which actions are allowed without verification. Systems rely on trust to function efficiently."},
      {"type": "line", "text": "Excessive trust increases security exposure. Insufficient trust reduces usability."},
      {"type": "empty"},
      {"type": "line", "text": "EXPLICIT vs IMPLICIT TRUST:"},
      {"type": "line", "text": "  • Explicit trust = deliberately defined and enforced."},
      {"type": "line", "text": "  • Implicit trust = emerges from design assumptions, rarely documented, harder to audit."},
      {"type": "line", "text": "  • Attackers actively search for implicit trust."},
      {"type": "empty"},
      {"type": "line", "text": "AUTHENTICATION vs AUTHORIZATION:"},
      {"type": "line", "text": "  • Authentication = verifies who a user is."},
      {"type": "line", "text": "  • Authorization = determines what a user may do."},
      {"type": "line", "text": "  • Authentication does NOT imply authorization."},
      {"type": "line", "text": "  • Many systems enforce authentication correctly but authorization logic is often incomplete."},
      {"type": "empty"},
      {"type": "line", "text": "TRUST BOUNDARIES separate components with different trust levels. Data crossing a boundary must be validated."},
      {"type": "empty"},
      {"type": "line", "text": "LEAST PRIVILEGE: grant only permissions strictly needed, limited in scope and duration. Reduces lateral movement and attack surface."},
      {"type": "empty"},
      {"type": "line", "text": "TRANSITIVE TRUST: trust extended implicitly through another trusted entity (e.g., trusting software updates from a vendor). Attackers exploit trust chains rather than single systems. SolarWinds = transitive trust example."},
      {"type": "empty"},
      {"type": "line", "text": "OVER-TRUST vs UNDER-TRUST: Over-trust increases exposure. Under-trust reduces efficiency. Balancing trust is a design decision."}
    ]
        },
        questions: [
      {
        q: "A university portal checks that a user is authenticated (logged in) before processing grade requests, but does not verify whether the student ID in the request belongs to the logged-in user. The system assumes logged-in users only request their own records. What type of trust is the authentication check, and what type is the ownership assumption?",
        opts: ["Both are explicit trust", "Authentication is explicit trust; ownership assumption is implicit trust", "Both are implicit trust", "Authentication is implicit trust; ownership is explicit trust"],
        correct: 1,
        hint: "Slide 28-31: 'Explicit vs Implicit Trust' — explicit trust is 'deliberately defined and enforced.' Implicit trust 'emerges from design assumptions' and is 'rarely documented.' The case study shows authentication is explicit, while ownership of requested data is implicitly trusted.",
        wrongReasons: {
          0: ["The ownership assumption is not deliberately enforced — it's an assumption."],
          2: ["Authentication is deliberately checked and enforced."],
          3: ["Reversed. Authentication is explicit; ownership assumption is implicit."]
        }
      },
      {
        q: "A web application uses a single database admin account for all backend services. All authenticated users share the same role. Authorization logic relies only on frontend checks. What principle is being violated?",
        opts: ["Defense in depth", "Principle of least privilege", "Zero trust", "Multi-factor authentication"],
        correct: 1,
        hint: "Slide 36: Bad implementation of least privilege includes 'All authenticated users share the same role,' 'Backend services use a single database admin account,' and 'Authorization logic relies on frontend checks only.' Slide 35: Least privilege means 'granted only the permissions they strictly need.'",
        wrongReasons: {
          0: ["Defense in depth uses multiple layers. The core issue here is excessive permissions."],
          2: ["Zero trust assumes no implicit trust. This is related but the specific violation is least privilege."],
          3: ["MFA is about proving identity with multiple factors, not about permission scope."]
        }
      },
      {
        q: "In the WannaCry attack (2017), once a single Windows machine was compromised, the malware spread to other internal systems without additional authentication because the internal network was implicitly trusted. What concept does this illustrate?",
        opts: ["Strong perimeter security", "Collapsed trust boundaries due to excessive implicit trust", "Effective network segmentation", "Proper least privilege implementation"],
        correct: 1,
        hint: "Slide 33: WannaCry case study — 'The internal network was implicitly trusted, enabling the malware to spread laterally.' 'This implicit trust in internal network traffic effectively collapsed trust boundaries between machines.'",
        wrongReasons: {
          0: ["The internal network was not well-protected once one machine fell."],
          2: ["No segmentation was in place — that's why it spread."],
          3: ["If least privilege was implemented, lateral movement would have been restricted."]
        }
      },
      {
        q: "A company automatically deploys digitally signed software updates from a trusted vendor. Attackers compromise the vendor's build system and inject malware into the update, which then gets installed in the company's internal network. What concept enabled this attack?",
        opts: ["Zero-day vulnerability", "Transitive trust", "Social engineering", "Brute-force attack"],
        correct: 1,
        hint: "Slide 38-40: Transitive trust = 'trust is implicitly extended through another trusted entity.' 'Trust in one component leads to trust in connected components.' SolarWinds case: 'Customers implicitly trusted digitally signed software updates' and 'This transitive trust allowed attackers to move from a trusted software supplier into highly sensitive environments.'",
        wrongReasons: {
          0: ["A zero-day is an unknown vulnerability. This attack used trust in the vendor, not a software flaw."],
          2: ["No human was manipulated into giving credentials."],
          3: ["No password guessing was involved."]
        }
      },
      {
        q: "Over time, an employee who started with basic access gradually accumulates additional permissions through role changes, temporary assignments, and convenience grants. No one reviews these accumulated permissions. What is this phenomenon called?",
        opts: ["Role explosion", "Permission creep", "Transitive trust", "Zero-day accumulation"],
        correct: 1,
        hint: "Slide 37: 'Permission creep gradually increases access.' 'Roles and responsibilities evolve over time.' 'Privileges accumulate over time.' This is a challenge in applying least privilege.",
        wrongReasons: {
          0: ["Role explosion is an RBAC problem with too many roles. This is about gradual permission accumulation for one user."],
          2: ["Transitive trust is about trust propagation through systems, not individual permission growth."],
          3: ["Zero-days are unknown vulnerabilities, not permission accumulation."]
        }
      }
    ]
      },
      {
        id: "2-4", title: "Attack Surface", slides: "46-58",
        concept: {
          title: "Attack Surface",
          body: [
      {"type": "line", "text": "ATTACK SURFACE = the set of points where a system can be interacted with. Every interface is a potential attack surface."},
      {"type": "line", "text": "Attackers cannot exploit what they cannot reach. Larger attack surfaces increase likelihood of exploitation."},
      {"type": "empty"},
      {"type": "line", "text": "Common types:"},
      {"type": "line", "text": "  • User-facing interfaces: web pages, forms"},
      {"type": "line", "text": "  • Network-exposed services and open ports"},
      {"type": "line", "text": "  • APIs and backend service endpoints"},
      {"type": "line", "text": "  • File upload and download mechanisms"},
      {"type": "line", "text": "  • Authentication and session management components"},
      {"type": "line", "text": "  • Administrative or management interfaces"},
      {"type": "line", "text": "  • Human interaction (social engineering)"},
      {"type": "line", "text": "  • Configuration and management interfaces"},
      {"type": "empty"},
      {"type": "line", "text": "Examples:"},
      {"type": "line", "text": "  • Equifax (2017): unpatched Apache Struts in public-facing web application = user-facing attack surface."},
      {"type": "line", "text": "  • Facebook (2018): 'View As' API flaw = API attack surface. Backend APIs can be high-impact even when not directly visible."},
      {"type": "line", "text": "  • Twitter (2020): phone-based phishing of employees = human attack surface. Bypassed technical safeguards entirely."},
      {"type": "line", "text": "  • Tesla (2018): exposed credentials in public code repo = configuration attack surface."},
      {"type": "line", "text": "  • Capital One (2019): misconfigured WAF allowing access to S3 = configuration/management attack surface."}
    ]
        },
        questions: [
      {
        q: "An attacker discovers an unpatched vulnerability in a public-facing web application and steals millions of customer records. Equifax (2017) is cited as an example. What type of attack surface was exploited?",
        opts: ["Network-exposed service", "User-facing interface", "Human interaction", "Administrative interface"],
        correct: 1,
        hint: "Slide 49-50: Equifax example = 'unpatched Apache Struts in public-facing web application.' 'User-facing interfaces such as web pages and forms' are a common attack surface type.",
        wrongReasons: {
          0: ["Network-exposed services are backend ports/protocols. This was a public web app."],
          2: ["No employee was tricked; it was a technical vulnerability in the web app."],
          3: ["The admin interface was not the entry point."]
        }
      },
      {
        q: "Attackers exploited a flaw in Facebook's 'View As' API feature to obtain access tokens for millions of accounts. The API was not directly visible to end users but exposed functionality in unintended ways. What type of attack surface?",
        opts: ["User-facing web form", "API and backend attack surface", "File upload mechanism", "Network port scanning"],
        correct: 1,
        hint: "Slide 53-54: Facebook (2018) = 'attackers exploited a flaw in the View As API feature.' 'APIs expose system functionality programmatically' and 'Backend endpoints are less visible but highly sensitive.' This is an API/backend attack surface.",
        wrongReasons: {
          0: ["The 'View As' API was a backend endpoint, not a direct user interface."],
          2: ["No file upload was involved."],
          3: ["No port scanning was the attack vector."]
        }
      },
      {
        q: "In 2020, attackers gained access to Twitter's internal systems by calling employees on the phone and convincing them to disclose credentials. No technical vulnerability in the software was exploited. What type of attack surface?",
        opts: ["Configuration error", "Human attack surface", "API vulnerability", "Network service"],
        correct: 1,
        hint: "Slide 55-56: Twitter (2020) = 'socially engineering employees through phone-based phishing attacks.' 'Human trust and interaction can form a primary attack surface, bypassing technical safeguards entirely.'",
        wrongReasons: {
          0: ["No misconfiguration was the cause — it was social engineering."],
          2: ["No API flaw was exploited."],
          3: ["No network service was the entry point."]
        }
      },
      {
        q: "Attackers found exposed cloud management credentials in a public code repository, granting access to administrative dashboards. In another case, a misconfigured web application firewall allowed remote queries to cloud storage without authorization. What category of attack surface?",
        opts: ["User-facing interface", "API endpoint", "Configuration and management attack surface", "Human interaction"],
        correct: 2,
        hint: "Slide 57-58: Tesla (2018) = 'exposed credentials in a public code repository.' Capital One (2019) = 'misconfigured web application firewall.' Both are examples of 'Configuration and Management Attack Surfaces.'",
        wrongReasons: {
          0: ["These were not public user interfaces."],
          1: ["No API was the primary issue — it was misconfiguration and exposed credentials."],
          3: ["No human social engineering was involved."]
        }
      },
      {
        q: "Which statement about attack surfaces is TRUE?",
        opts: ["Attack surfaces only exist in poorly implemented systems", "Attack surfaces exist even in correctly implemented systems, and every interface is a potential attack surface", "New features never create new attack surfaces", "Attack surfaces never change over time"],
        correct: 1,
        hint: "Slide 47-48: 'Attack surfaces exist even in correctly implemented systems.' 'Every interface is a potential attack surface.' 'New features often create new attack surfaces.' 'Attack surfaces evolve over time.'",
        wrongReasons: {
          0: ["Slide 47: 'Attack surfaces exist even in correctly implemented systems.'"],
          2: ["Slide 48: 'New features often create new attack surfaces.'"],
          3: ["Slide 48: 'Attack surfaces evolve over time.'"]
        }
      }
    ]
      },
      {
        id: "2-5", title: "Vulnerabilities & Exploitations", slides: "59-70",
        concept: {
          title: "Vulnerabilities & Exploitations",
          body: [
      {"type": "line", "text": "VULNERABILITY = a weakness that can be exploited. Exists in code, configuration, or design. Passive until exploited."},
      {"type": "empty"},
      {"type": "line", "text": "TECHNICAL VULNERABILITIES:"},
      {"type": "line", "text": "  • Result from implementation or coding errors."},
      {"type": "line", "text": "  • Often violate memory or input-handling rules."},
      {"type": "line", "text": "  • Can allow Remote Code Execution (RCE) or data leakage."},
      {"type": "line", "text": "  • Often exploitable through crafted input."},
      {"type": "line", "text": "  • Usually fixed through patches or updates."},
      {"type": "line", "text": "  • Example: Log4Shell (2021) — RCE in Apache Log4j via crafted input."},
      {"type": "empty"},
      {"type": "line", "text": "LOGICAL VULNERABILITIES:"},
      {"type": "line", "text": "  • Arise from flawed system logic or assumptions."},
      {"type": "line", "text": "  • Occur even when software works as intended."},
      {"type": "line", "text": "  • Often involve access control or workflow errors."},
      {"type": "line", "text": "  • Hard to detect using automated scanners."},
      {"type": "line", "text": "  • Logs often show normal authenticated activity."},
      {"type": "line", "text": "  • Fixes require redesign rather than patching."},
      {"type": "line", "text": "  • Example: Facebook (2021) IDOR — authenticated but not authorized access."},
      {"type": "empty"},
      {"type": "line", "text": "Comparison: Technical = easier to scan, often generic, from code errors. Logical = require human analysis, system-specific, from design decisions."},
      {"type": "empty"},
      {"type": "line", "text": "VULNERABILITY CHAINING: Attacks combine multiple weaknesses. Minor vulnerabilities amplify each other. Security analysis must consider combinations."},
      {"type": "empty"},
      {"type": "line", "text": "EXPLOIT = method to leverage a vulnerability. Not all vulnerabilities have usable exploits."},
      {"type": "line", "text": "ZERO-DAY = targets unknown vulnerability, no patch available. KNOWN EXPLOIT = targets documented vulnerability."}
    ]
        },
        questions: [
      {
        q: "A widely used Java logging library (Log4j) allowed attackers to execute arbitrary code by sending specially crafted input that was logged by applications. This was a coding error in how input was handled. What type of vulnerability is this?",
        opts: ["Logical vulnerability", "Technical vulnerability", "Configuration vulnerability", "Human vulnerability"],
        correct: 1,
        hint: "Slide 61-62: Technical vulnerabilities 'result from implementation or coding errors,' 'often violate memory or input-handling rules,' and 'can allow Remote Code Execution (RCE).' Log4Shell (2021) is explicitly given as a technical vulnerability example.",
        wrongReasons: {
          0: ["Logical vulnerabilities arise from flawed system logic, not coding errors."],
          2: ["Configuration vulnerabilities are about settings, not code implementation."],
          3: ["Human vulnerabilities involve social engineering, not code flaws."]
        }
      },
      {
        q: "A social media platform verifies that a user is authenticated but fails to verify whether a requested resource belongs to that user. By changing a numerical ID in a request, attackers access other users' data. The system works as coded — there is no coding error. What type of vulnerability?",
        opts: ["Technical vulnerability", "Logical vulnerability", "Physical vulnerability", "Network vulnerability"],
        correct: 1,
        hint: "Slide 63-64: Logical vulnerabilities 'arise from flawed system logic or assumptions,' 'occur even when software works as intended,' and 'often involve access control or workflow errors.' Facebook (2021) IDOR is explicitly given as a logical vulnerability.",
        wrongReasons: {
          0: ["Technical vulnerabilities stem from code errors. This is a design/logic flaw."],
          2: ["Physical vulnerabilities involve hardware or physical access."],
          3: ["Network vulnerabilities involve protocol or transmission flaws."]
        }
      },
      {
        q: "An attacker gains initial access through a phishing email, then uses a known software vulnerability to move laterally, then exploits a missing authorization check to access sensitive data. The individual weaknesses alone would not be critical, but combined they lead to a major breach. What concept is this?",
        opts: ["Single point of failure", "Vulnerability chaining", "Defense in depth", "Zero-day exploitation"],
        correct: 1,
        hint: "Slide 66-67: 'Vulnerability chaining' = 'Attacks often combine multiple weaknesses.' 'Minor vulnerabilities can amplify each other.' 'Logical flaws enable deeper exploitation.' 'Technical flaws bypass security controls.' 'Chaining increases attack reliability.'",
        wrongReasons: {
          0: ["This involves multiple weaknesses, not a single point."],
          2: ["Defense in depth is a protective strategy, not an attack technique."],
          3: ["The vulnerabilities described are known, not zero-day."]
        }
      },
      {
        q: "A vulnerability exists in a system but no known method currently exists to exploit it in practice. What is the difference between the vulnerability and an exploit?",
        opts: ["They are the same thing", "Vulnerability is the weakness; exploit is the technique to use it. Not all vulnerabilities have usable exploits", "An exploit is weaker than a vulnerability", "A vulnerability cannot exist without an exploit"],
        correct: 1,
        hint: "Slide 69-70: 'Vulnerability is a weakness. Exploit is the technique to use it.' 'Vulnerability may exist without active exploit.' 'Exploit requires feasibility conditions.'",
        wrongReasons: {
          0: ["They are distinct concepts."],
          2: ["An exploit operationalizes a weakness, making it more dangerous, not weaker."],
          3: ["Slide 69: 'Vulnerability may exist without active exploit.'"]
        }
      },
      {
        q: "A security researcher discovers a flaw in a browser that the vendor was previously unaware of. No patch exists. An attacker quickly develops a working exploit and begins using it before the vendor can respond. What type of exploit is this?",
        opts: ["Known exploit", "Zero-day exploit", "Logical exploit", "Technical exploit"],
        correct: 1,
        hint: "Slide 70-71: Zero-day exploit 'targets unknown vulnerability' and 'vendor has no patch available.' Known exploit 'targets documented vulnerability.' This scenario describes an unknown flaw with no patch — a zero-day.",
        wrongReasons: {
          0: ["Known exploits target documented vulnerabilities with patches available."],
          2: ["Logical vs technical describes the vulnerability type, not the exploit's novelty."],
          3: ["Technical vs logical describes the vulnerability category, not the timing."]
        }
      }
    ]
      },
      {
        id: "2-6", title: "Threats, Scenarios & Impact", slides: "71-81",
        concept: {
          title: "Threats, Scenarios & Impact",
          body: [
      {"type": "line", "text": "THREAT = a potential cause of unwanted harm. Requires: adversary + objective + feasible path + accessible attack surface + exploitable vulnerability + reachable asset."},
      {"type": "line", "text": "A threat exists even before exploitation. Threats are contextual, not abstract."},
      {"type": "empty"},
      {"type": "line", "text": "THREAT SCENARIO = concrete description of how harm may occur."},
      {"type": "line", "text": "  • Components: Adversary and objective, Exploited weakness, Affected asset, Potential consequences."},
      {"type": "line", "text": "  • Example: Okta/MOVEit (2023) — Cl0p ransomware group used SQL injection in MOVEit to exfiltrate data from hundreds of organizations."},
      {"type": "empty"},
      {"type": "line", "text": "THREAT GOALS: Financial gain, Data theft, Disruption, Espionage, Influence operations, Reputation damage."},
      {"type": "empty"},
      {"type": "line", "text": "THREAT PATH = sequence from entry point to target asset. May involve multiple vulnerabilities, exploit trust relationships, combine technical and logical weaknesses, include social engineering."},
      {"type": "empty"},
      {"type": "line", "text": "THREAT IMPACT: Confidentiality loss, Integrity compromise, Availability disruption, Reputational harm, Legal consequences, Financial damage."}
    ]
        },
        questions: [
      {
        q: "Complete the threat formula: A threat requires an ___ with motivation, a ___ aligned with attacker objectives, a ___ with an exploitable weakness, and a ___ asset.",
        opts: ["adversary; goal; attack surface; reachable", "vulnerability; patch; network; encrypted", "firewall; password; user; hidden", "developer; feature; bug; internal"],
        correct: 0,
        hint: "Slide 73-74: Threat = Adversary + Goal + Path to Asset. Components: 'An accessible attack surface,' 'An exploitable vulnerability,' 'A goal aligned with attacker objectives,' 'A reachable asset,' 'An adversary with motivation,' 'A realistic execution path.'",
        wrongReasons: {
          1: ["Patches and encryption are defensive, not threat components."],
          2: ["Firewalls are defenses, not threat elements."],
          3: ["Developers and features don't fit the threat model."]
        }
      },
      {
        q: "In the 2023 MOVEit Transfer breach, the Cl0p ransomware group used a SQL injection flaw in the web-facing application to gain unauthorized access to databases storing sensitive files, then exfiltrated data from hundreds of organizations for extortion. What is this narrative an example of?",
        opts: ["A vulnerability scan report", "A threat scenario", "A penetration test plan", "A compliance audit"],
        correct: 1,
        hint: "Slide 75-78: 'Threat Scenario' = 'A concrete description of how harm may occur.' The MOVEit example breaks down into: Adversary (Cl0p) and objective (data exfiltration/extortion), Exploited weakness (SQL injection), Affected asset (sensitive data/PII), Potential consequences (confidentiality breach, extortion, regulatory penalties).",
        wrongReasons: {
          0: ["A scan report lists vulnerabilities; this describes a specific attack narrative."],
          2: ["A pen test plan describes what WILL be tested, not what already happened."],
          3: ["A compliance audit checks regulatory adherence, not a specific attack chain."]
        }
      },
      {
        q: "Which of the following is NOT listed as a threat goal in the lecture?",
        opts: ["Financial gain", "Data theft", "Increasing system performance", "Espionage"],
        correct: 2,
        hint: "Slide 79 lists threat goals: Financial gain, Data theft, Disruption, Espionage, Influence operations, Reputation damage. 'Increasing system performance' is not a threat goal.",
        wrongReasons: {
          0: ["Financial gain IS listed (slide 79)."],
          1: ["Data theft IS listed (slide 79)."],
          3: ["Espionage IS listed (slide 79)."]
        }
      },
      {
        q: "A threat path may involve multiple vulnerabilities, exploit trust relationships, combine technical and logical weaknesses, and include social engineering. What does the threat path primarily define?",
        opts: ["The cost of the system", "The feasibility of the attack", "The programming language used", "The physical location of the attacker"],
        correct: 1,
        hint: "Slide 80: 'Threat Path: Sequence from entry point to target asset.' 'Defines feasibility of attack.' The path determines whether the attack is realistically achievable.",
        wrongReasons: {
          0: ["System cost is not related to threat path definition."],
          2: ["Programming language is implementation detail, not threat path definition."],
          3: ["Physical location is not what the threat path defines."]
        }
      },
      {
        q: "A ransomware attack encrypts a hospital's patient records (availability disruption), steals copies for extortion (confidentiality loss), and modifies appointment schedules (integrity compromise). The hospital faces regulatory fines and reputational damage. What concept describes these outcomes?",
        opts: ["Threat surface", "Threat impact", "Attack vector", "Risk assessment"],
        correct: 1,
        hint: "Slide 81: 'Threat Impact' includes: 'Confidentiality loss, Integrity compromise, Availability disruption, Reputational harm, Legal consequences, Financial damage.' All the described outcomes are threat impacts.",
        wrongReasons: {
          0: ["Threat surface is not a standard term; attack surface is about entry points."],
          2: ["Attack vector is the method of entry, not the resulting harm."],
          3: ["Risk assessment is the process of evaluating risk, not the outcomes themselves."]
        }
      }
    ]
      },
      {
        id: "2-7", title: "Final Certification", slides: "2-81",
        concept: {
          title: "Final Certification: All Module 2 Part 1 Concepts",
          body: [
      {"type": "line", "text": "Comprehensive review:"},
      {"type": "line", "text": "  • Assets = anything of value. Categories: data, identity, service, integrity, control, trust/reputation. Value is context-dependent."},
      {"type": "line", "text": "  • Adversaries = intentional harm-causers. By position (external, insider, supply-chain) and motivation (script kiddies, hacktivists, insiders, financial, espionage, state-sponsored)."},
      {"type": "line", "text": "  • Trust = defines allowed actions without verification. Explicit (deliberate) vs implicit (assumed). Authentication ≠ authorization."},
      {"type": "line", "text": "  • Trust boundaries = separate components with different trust levels. Data crossing must be validated."},
      {"type": "line", "text": "  • Least privilege = only strictly needed permissions. Reduces lateral movement and attack surface."},
      {"type": "line", "text": "  • Transitive trust = trust extended through another trusted entity. Dangerous because one compromise affects many systems."},
      {"type": "line", "text": "  • Attack surface = all interaction points. Types: user-facing, network, API, file upload, auth/session, admin, human, configuration."},
      {"type": "line", "text": "  • Vulnerabilities = weaknesses in code, config, or design. Technical (coding errors, patchable) vs logical (design flaws, require redesign)."},
      {"type": "line", "text": "  • Vulnerability chaining = combining multiple weaknesses for greater impact."},
      {"type": "line", "text": "  • Exploit = technique to use a vulnerability. Zero-day (unknown, no patch) vs known (documented)."},
      {"type": "line", "text": "  • Threat = potential harm. Requires: adversary + goal + path + attack surface + vulnerability + asset."},
      {"type": "line", "text": "  • Threat scenario = concrete narrative of harm. Threat goals, path, and impact define the full picture."}
    ]
        },
        questions: [
      {
        q: "A software library has a coding error that allows remote code execution when specially crafted input is processed. Automated scanners can detect it, and a patch fixes it. A different application correctly verifies authentication but fails to check if users can access specific resources they request. Logs show normal activity. What two concepts describe these vulnerabilities?",
        opts: ["Both are technical vulnerabilities", "Technical vulnerability and logical vulnerability", "Both are logical vulnerabilities", "Zero-day and known exploit"],
        correct: 1,
        hint: "Slide 65: Technical vulnerabilities 'stem from code errors,' are 'easier to scan,' and 'often generic.' Logical vulnerabilities 'stem from design decisions,' are 'system-specific,' and 'require human analysis.' The first scenario = technical. The second = logical (IDOR-style access control flaw).",
        wrongReasons: {
          0: ["The second is a design flaw (access control), not a coding error."],
          2: ["The first is a coding error, not a design logic flaw."],
          3: ["These describe exploit timing, not vulnerability types."]
        }
      },
      {
        q: "A company trusts a vendor's software updates because the vendor is reputable. The vendor's build system is compromised, and malicious code is inserted into a signed update. Customers install it automatically because they trust the vendor. What two key concepts does this illustrate?",
        opts: ["Zero-day vulnerability and technical exploit", "Transitive trust and collapsed trust boundaries", "Social engineering and human attack surface", "Permission creep and least privilege"],
        correct: 1,
        hint: "Slide 38-42: Transitive trust = 'trust is implicitly extended through another trusted entity.' SolarWinds case: 'Customers implicitly trusted digitally signed software updates.' 'This transitive trust allowed attackers to move from a trusted software supplier into highly sensitive environments.' Trust boundaries collapsed because third-party trust was not validated.",
        wrongReasons: {
          0: ["No unknown software vulnerability was used — it was trust abuse."],
          2: ["No human was tricked into giving credentials."],
          3: ["No individual permission accumulation is described."]
        }
      },
      {
        q: "An attacker tricks an employee into revealing credentials over the phone, then uses those credentials to access internal systems. No software vulnerability was exploited. What type of attack surface is primarily involved?",
        opts: ["API and backend attack surface", "Human attack surface", "Configuration attack surface", "Network-based attack surface"],
        correct: 1,
        hint: "Slide 55-56: 'Human Interaction as an Attack Surface.' Twitter (2020) example: 'socially engineering employees through phone-based phishing attacks.' 'Human trust and interaction can form a primary attack surface, bypassing technical safeguards entirely.'",
        wrongReasons: {
          0: ["No API flaw was exploited."],
          2: ["No misconfiguration was the cause."],
          3: ["No network service was directly attacked."]
        }
      },
      {
        q: "Which statement correctly captures the relationship between vulnerabilities, exploits, and patches?",
        opts: ["Every vulnerability has an active exploit", "A patch removes the vulnerability, but exploit history remains. Not all vulnerabilities have usable exploits", "Exploits exist only after patches are released", "Zero-day exploits target known vulnerabilities with patches available"],
        correct: 1,
        hint: "Slide 69-71: 'Vulnerability is a weakness. Exploit is the technique to use it.' 'Vulnerability may exist without active exploit.' 'Patch removes vulnerability, not exploit history.' Zero-day = unknown, no patch. Known exploit = documented vulnerability.",
        wrongReasons: {
          0: ["Slide 69: 'Not all vulnerabilities have usable exploits.'"],
          2: ["Zero-day exploits exist BEFORE patches."],
          3: ["Zero-day exploits target UNKNOWN vulnerabilities with NO patch available."]
        }
      },
      {
        q: "A university system for course registration has a threat of phishing emails targeting student credentials. No phishing campaign is active today, but the threat level increases during registration periods. What does this demonstrate about threats?",
        opts: ["Threats only exist during active attacks", "Threats are contextual and exist even before exploitation", "Threats are absolute and independent of timing", "All threats can be completely eliminated"],
        correct: 1,
        hint: "Slide 73: 'A threat is contextual, not abstract.' 'A threat exists even before exploitation.' The phishing threat exists even without an active campaign, and its level changes based on context (registration periods).",
        wrongReasons: {
          0: ["Slide 73: 'A threat exists even before exploitation.'"],
          2: ["Slide 73: 'A threat is contextual, not abstract.'"],
          3: ["Slide 36 (from Module 1 reminder): 'Threats cannot be completely eliminated, only reduced or mitigated.'"]
        }
      }
    ]
      },
    ]
  },
  {
    id: 3, num: "2.2",
    title: "Attacks, Malware & Threat Modeling",
    icon: "⚔️",
    desc: "Attacks, phishing, malware, persistence, threat modeling",
    color: "#f97316",
    levels: [
      {
        id: "3-1", title: "Attacks & Phishing", slides: "82-97",
        concept: {
          title: "Attacks & Phishing",
          body: [
      {"type": "line", "text": "ATTACK = deliberate execution of a threat. Involves a sequence of actions."},
      {"type": "line", "text": "Attacks are STRUCTURED, not random. Each stage enables the next."},
      {"type": "line", "text": "Early actions may appear harmless. Understanding structure improves detection."},
      {"type": "empty"},
      {"type": "line", "text": "PHISHING = attempt to steal sensitive information by pretending to be a legitimate source."},
      {"type": "line", "text": "Common phishing examples:"},
      {"type": "line", "text": "  • 'Your account has been compromised' → fake login page steals credentials"},
      {"type": "line", "text": "  • 'You have won a prize' → preys on desire for freebies, asks for personal info"},
      {"type": "line", "text": "  • 'Urgent action required' → creates pressure, fake verification page"},
      {"type": "line", "text": "  • 'Fake invoice or payment request' → targets businesses, fake payment portal"},
      {"type": "line", "text": "  • 'Fake job offer' → fake application form collects personal data"},
      {"type": "line", "text": "  • 'Update your account information' → fake form for personal/credit card details"},
      {"type": "line", "text": "  • 'Fake charity donation request' → exploits generosity, fake donation page"},
      {"type": "line", "text": "  • 'Fake tech support' → claims computer is infected, asks for remote access"}
    ]
        },
        questions: [
      {
        q: "An attacker sends an email claiming the victim's bank account has been compromised and instructs them to click a link to 'verify their identity.' The link leads to a fake login page that captures credentials. What type of attack is this?",
        opts: ["Denial of Service", "Phishing attack", "Ransomware", "Physical theft"],
        correct: 1,
        hint: "Slide 86-87: 'Your account has been compromised' phishing example. 'The email will contain a link to a fake login page, where the victim will be asked to enter their login credentials, which will then be stolen by the attacker.'",
        wrongReasons: {
          0: ["DoS makes systems unavailable, not steal credentials."],
          2: ["Ransomware encrypts data; this attack steals login info."],
          3: ["No physical device is stolen."]
        }
      },
      {
        q: "A victim receives an email claiming they won a gift card and must click a link to claim it. The link leads to a fake website asking for credit card details to 'process the prize.' What psychological tactic is the attacker using?",
        opts: ["Fear", "Greed/desire for freebies", "Curiosity", "Sympathy"],
        correct: 1,
        hint: "Slide 88-89: 'You have won a prize' phishing 'preys on the victim's desire for freebies or rewards.' The attacker exploits greed by offering something for free.",
        wrongReasons: {
          0: ["Fear is used in 'account compromised' or 'urgent action' phishing."],
          2: ["Curiosity might make someone click, but the prize angle targets desire for rewards."],
          3: ["Sympathy is used in fake charity donation requests."]
        }
      },
      {
        q: "An attacker sends an email posing as a charitable organization after a natural disaster, asking victims to donate via a link. The link leads to a fake donation page that collects credit card details. What type of phishing is this?",
        opts: ["Fake tech support", "Fake charity donation request", "Fake job offer", "Fake invoice"],
        correct: 1,
        hint: "Slide 92-93: 'Fake charity donation request' — 'The attacker poses as a charitable organization and asks the victim to make a donation.' Exploits sympathy and generosity during crises.",
        wrongReasons: {
          0: ["Fake tech support claims the computer is infected."],
          2: ["Fake job offers pose as recruiters."],
          3: ["Fake invoices target businesses with payment requests."]
        }
      },
      {
        q: "Which statement about attacks is TRUE?",
        opts: ["Attacks are random and unpredictable", "Attacks follow a logical progression where each stage enables the next", "Attacks never involve reconnaissance", "Early attack actions are always obviously malicious"],
        correct: 1,
        hint: "Slide 84: 'Attacks follow logical progression' and 'Each stage enables the next.' 'Attackers adapt based on system response.' 'Early actions may appear harmless.'",
        wrongReasons: {
          0: ["Slide 84: 'Attacks follow logical progression. Each stage enables the next.'"],
          2: ["Slide 84: 'Attacks often involve reconnaissance.'"],
          3: ["Slide 84: 'Early actions may appear harmless.'"]
        }
      }
    ]
      },
      {
        id: "3-2", title: "Social Engineering, DoS & Physical Theft", slides: "98-112",
        concept: {
          title: "Social Engineering, DoS & Physical Theft",
          body: [
      {"type": "line", "text": "SOCIAL ENGINEERING = psychological manipulation of people into performing actions or divulging confidential information."},
      {"type": "line", "text": "Can be crafted based on available public information (OSINT)."},
      {"type": "empty"},
      {"type": "line", "text": "DENIAL OF SERVICE (DoS): aims to make a system unavailable. Targets AVAILABILITY."},
      {"type": "line", "text": "Categories of DoS:"},
      {"type": "line", "text": "  • Volumetric: exhaust network bandwidth"},
      {"type": "line", "text": "  • Protocol: exhaust server or network state resources"},
      {"type": "line", "text": "  • Application-layer: exhaust application logic capacity"},
      {"type": "line", "text": "  • Distributed DoS (DDoS): uses multiple compromised systems"},
      {"type": "line", "text": "  • Reflection and amplification: multiply traffic volume"},
      {"type": "line", "text": "  • DoS may combine multiple techniques simultaneously"},
      {"type": "empty"},
      {"type": "line", "text": "PHYSICAL THEFT = temporarily or permanently stealing physical devices."},
      {"type": "empty"},
      {"type": "line", "text": "REAL-WORLD ANALOGIES (Cybercrime Feels Familiar):"},
      {"type": "line", "text": "Cyberattacks use the same goals as physical crime — just different methods:"},
      {"type": "line", "text": "  • Same goal, different method: theft, deception, force all apply digitally."},
      {"type": "line", "text": "  • Thinking in real-world terms makes cyber threats easier to understand."}
    ]
        },
        questions: [
      {
        q: "An attacker calls an employee pretending to be IT support and convinces them to reveal their password. No software vulnerability is exploited. What type of attack is this?",
        opts: ["Malware attack", "Social engineering attack", "Denial of Service attack", "Physical theft"],
        correct: 1,
        hint: "Slide 99: 'Social Engineering Attacks: Psychological manipulation of people into performing actions or divulging confidential information.' 'Attack can be crafted based on available public information.'",
        wrongReasons: {
          0: ["No malicious software is installed."],
          2: ["DoS targets availability, not credential theft."],
          3: ["No physical device is stolen."]
        }
      },
      {
        q: "A botnet of 50,000 compromised devices simultaneously sends massive traffic to a company's web server, overwhelming its bandwidth and making the website unreachable for legitimate users. What type of attack is this?",
        opts: ["Phishing attack", "Distributed Denial of Service (DDoS)", "Ransomware", "Spyware"],
        correct: 1,
        hint: "Slide 100-101: DoS 'aims to make a system unavailable' and 'targets availability.' DDoS 'uses multiple compromised systems.' Volumetric attacks 'exhaust network bandwidth.'",
        wrongReasons: {
          0: ["Phishing steals credentials via deception, not overwhelm servers."],
          2: ["Ransomware encrypts data; it doesn't typically flood networks with traffic."],
          3: ["Spyware collects information silently, not disrupt availability."]
        }
      },
      {
        q: "Which DoS attack category targets the application logic layer by exhausting the application's processing capacity rather than network bandwidth?",
        opts: ["Volumetric attack", "Application-layer attack", "Protocol attack", "Reflection attack"],
        correct: 1,
        hint: "Slide 101: 'Application-layer attacks exhaust application logic capacity.' This is distinct from volumetric (bandwidth) and protocol (state resources) attacks.",
        wrongReasons: {
          0: ["Volumetric attacks exhaust network bandwidth, not application logic."],
          2: ["Protocol attacks exhaust server or network state resources."],
          3: ["Reflection attacks multiply traffic volume; they are a delivery mechanism, not a layer target."]
        }
      },
      {
        q: "A thief steals a laptop from a coffee shop to access the data stored on it. What category of attack does this represent?",
        opts: ["Social engineering", "Physical theft attack", "Phishing", "Malware"],
        correct: 1,
        hint: "Slide 102: 'Physical Theft Attacks: Temporarily or Permanently stealing physical devices.' The laptop theft is a physical security breach.",
        wrongReasons: {
          0: ["No psychological manipulation was used."],
          2: ["No deceptive email or message was involved."],
          3: ["No software was used; it was a physical act."]
        }
      }
    ]
      },
      {
        id: "3-3", title: "Attack Phases & Cyber Kill Chain", slides: "113-123",
        concept: {
          title: "Attack Phases & Cyber Kill Chain",
          body: [
      {"type": "line", "text": "Attacks unfold in stages like a break-in. Breaking one stage can stop progression."},
      {"type": "empty"},
      {"type": "line", "text": "1. RECONNAISSANCE (Planning and Surveillance):"},
      {"type": "line", "text": "  • Gather information about target system, network, or individuals."},
      {"type": "line", "text": "  • Examples: Scanning open ports, researching employees on social media, identifying software versions."},
      {"type": "line", "text": "  • PASSIVE reconnaissance: collects info without direct interaction (OSINT, DNS records, social media, leaked datasets). Stealthier and harder to detect."},
      {"type": "line", "text": "  • ACTIVE reconnaissance: sends traffic to target (port scanning, vulnerability scanning, enumeration). Reveals more but increases detection likelihood."},
      {"type": "empty"},
      {"type": "line", "text": "2. PREPARATION (Tooling and Resource Gathering):"},
      {"type": "line", "text": "  • Develop or acquire malware, phishing kits, or exploits."},
      {"type": "line", "text": "  • Set up infrastructure: fake websites, command-and-control servers."},
      {"type": "empty"},
      {"type": "line", "text": "3. INITIAL INTRUSION (Entry):"},
      {"type": "line", "text": "  • Gain initial access: phishing, exploiting vulnerability, stolen passwords."},
      {"type": "empty"},
      {"type": "line", "text": "4. ESCALATION AND EXPLORATION (Movement and Discovery):"},
      {"type": "line", "text": "  • Escalate privileges, move laterally, search for sensitive data."},
      {"type": "line", "text": "  • May disable security software or cover tracks."},
      {"type": "empty"},
      {"type": "line", "text": "5. EXECUTION (Theft or Damage):"},
      {"type": "line", "text": "  • Exfiltrate data, deploy ransomware, or disrupt services."},
      {"type": "line", "text": "  • May delete logs or files to hinder investigation."},
      {"type": "empty"},
      {"type": "line", "text": "6. ESCAPE AND EVASION (Exit):"},
      {"type": "line", "text": "  • Remove traces, delete logs, use anonymizing tools."},
      {"type": "line", "text": "  • Disconnect from compromised system."},
      {"type": "empty"},
      {"type": "line", "text": "CYBER KILL CHAIN: structured framework for understanding attack stages."},
      {"type": "line", "text": "ATTACK AUTOMATION: reduces required skill, accelerates speed, enables mass compromise."},
      {"type": "line", "text": "ATTACK SCALABILITY: cloud infrastructure, shared software components amplify impact. Minor flaws affect millions."}
    ]
        },
        questions: [
      {
        q: "A security analyst notices unusual port scanning activity against their company's public servers. No actual breach has occurred yet. Which attack phase is this?",
        opts: ["Initial Intrusion", "Reconnaissance", "Execution", "Escape and Evasion"],
        correct: 1,
        hint: "Slide 113-114: Reconnaissance = 'gathering information about the target system, network, or individuals.' 'Scanning for open ports' is reconnaissance. Slide 114: Active reconnaissance 'sends traffic to the target system.'",
        wrongReasons: {
          0: ["Initial intrusion involves actual access, not just information gathering."],
          2: ["Execution involves data theft or damage, not preliminary scanning."],
          3: ["Escape happens after the attack, not before it begins."]
        }
      },
      {
        q: "An attacker researches a company's employees on LinkedIn to identify their roles and responsibilities. They collect this information without sending any traffic to the company's systems. What type of reconnaissance is this?",
        opts: ["Active reconnaissance", "Passive reconnaissance", "Social engineering", "Physical reconnaissance"],
        correct: 1,
        hint: "Slide 114: Passive reconnaissance 'collects information without direct interaction.' Examples include 'OSINT, DNS records, social media analysis, and leaked datasets.' 'Passive methods are stealthier and harder to detect.'",
        wrongReasons: {
          0: ["Active reconnaissance sends traffic to the target. No traffic was sent."],
          2: ["Social engineering involves direct interaction/manipulation. This is information collection."],
          3: ["No physical presence is involved; this is digital information gathering."]
        }
      },
      {
        q: "After gaining initial access through a phishing email, an attacker creates additional admin accounts, installs remote access tools, and modifies registry settings to survive reboots. Which attack phase and concept does this primarily demonstrate?",
        opts: ["Reconnaissance", "Persistence during Escalation and Exploration", "Initial Intrusion", "Execution"],
        correct: 1,
        hint: "Slide 117-118: Escalation and Exploration = 'escalates privileges, moves laterally within the network.' Slide 124-125: Persistence = 'allows continued access after compromise' and 'survives system reboots.' Creating accounts and remote access tools = persistence mechanisms.",
        wrongReasons: {
          0: ["Reconnaissance happens before access is gained."],
          2: ["Initial intrusion was the phishing email itself. The described actions happen AFTER initial access."],
          3: ["Execution would be data exfiltration or ransomware deployment, not establishing continued access."]
        }
      },
      {
        q: "A single vulnerability in a popular open-source library is discovered. Within days, automated tools are scanning the entire internet for vulnerable systems and exploiting them automatically. What concept does this demonstrate?",
        opts: ["Attack stealth", "Attack automation and scalability", "Physical security breach", "Social engineering"],
        correct: 1,
        hint: "Slide 122-123: Attack automation 'reduces required attacker skill,' 'enables mass compromise,' and 'increases attack frequency.' Attack scalability: 'Shared software components amplify impact' and 'Minor flaws affect millions of systems.' 'Modern attacks propagate rapidly.'",
        wrongReasons: {
          0: ["The scenario describes mass scanning, not stealth."],
          2: ["No physical devices are involved."],
          3: ["No human manipulation is described."]
        }
      }
    ]
      },
      {
        id: "3-4", title: "Persistence & Long-Term Access", slides: "124-130",
        concept: {
          title: "Persistence & Long-Term Access",
          body: [
      {"type": "line", "text": "PERSISTENCE = allows continued access after compromise."},
      {"type": "line", "text": "  • Survives system reboots."},
      {"type": "line", "text": "  • Resists basic remediation efforts."},
      {"type": "line", "text": "  • Enables long-term attacker control."},
      {"type": "line", "text": "  • Transforms intrusion into campaign."},
      {"type": "empty"},
      {"type": "line", "text": "BACKDOORS: hidden mechanisms for re-entry. May bypass normal authentication. Often disguised as legitimate services."},
      {"type": "empty"},
      {"type": "line", "text": "LONG-TERM ACCESS MECHANISMS:"},
      {"type": "line", "text": "  • Credential harvesting — steal passwords/tokens for later use."},
      {"type": "line", "text": "  • Account creation — new hidden accounts."},
      {"type": "line", "text": "  • Token theft and reuse — steal session tokens."},
      {"type": "line", "text": "  • Service installation — malicious services that auto-start."},
      {"type": "line", "text": "  • Session hijacking — take over legitimate sessions."},
      {"type": "line", "text": "  • Scheduled task creation — recurring execution."},
      {"type": "empty"},
      {"type": "line", "text": "STEALTH TECHNIQUES:"},
      {"type": "line", "text": "  • Log manipulation — delete or alter logs."},
      {"type": "line", "text": "  • Code obfuscation — hide what malware does."},
      {"type": "line", "text": "  • Living-off-the-land — use legitimate tools (like PowerShell) for malicious purposes."},
      {"type": "line", "text": "  • Blending into normal activity — appearing as regular traffic/processes."},
      {"type": "line", "text": "  • Avoiding signature detection — changing appearance to evade antivirus."},
      {"type": "empty"},
      {"type": "line", "text": "DWELL TIME = time between compromise and detection. Longer dwell time = more damage. Often measured in months."},
      {"type": "empty"},
      {"type": "line", "text": "CUMULATIVE IMPACT: Initial compromise may seem minor. Persistence expands scope over time. Small access can escalate to systemic failure."}
    ]
        },
        questions: [
      {
        q: "After compromising a server, an attacker modifies system logs to remove evidence of their intrusion and uses built-in Windows administration tools (like PowerShell) to maintain access instead of installing suspicious malware. What two concepts are demonstrated?",
        opts: ["Encryption and decryption", "Log manipulation and living-off-the-land techniques", "Phishing and social engineering", "DDoS and volumetric attack"],
        correct: 1,
        hint: "Slide 128: Stealth techniques include 'log manipulation' and 'living-off-the-land techniques.' Living-off-the-land means using legitimate system tools for malicious purposes, making detection harder. Log manipulation removes evidence.",
        wrongReasons: {
          0: ["No encryption is mentioned in the scenario."],
          2: ["Phishing and social engineering were used to gain access, not to maintain it stealthily."],
          3: ["No denial of service is described."]
        }
      },
      {
        q: "An attacker installs a hidden service on a compromised server that automatically starts on boot and provides remote access even if the main vulnerability is patched. What is this hidden service called?",
        opts: ["A firewall", "A backdoor", "An antivirus", "A proxy server"],
        correct: 1,
        hint: "Slide 126: Backdoors are 'hidden mechanisms for re-entry' that 'may bypass normal authentication,' are 'often disguised as legitimate services,' and 'provide repeated access.' Slide 125: Persistence 'survives system reboots.'",
        wrongReasons: {
          0: ["A firewall blocks unauthorized access, not provides it."],
          2: ["Antivirus detects malware; it doesn't give attackers remote access."],
          3: ["A proxy forwards traffic but isn't specifically a hidden re-entry mechanism."]
        }
      },
      {
        q: "A company discovers that an attacker had access to their network for 8 months before being detected. During this time, the attacker gradually escalated privileges and exfiltrated increasing amounts of data. What metric describes the 8-month period?",
        opts: ["Attack surface", "Dwell time", "Threat path", "Attack chain"],
        correct: 1,
        hint: "Slide 129: 'Dwell time: Time between compromise and detection.' 'Longer dwell time increases damage.' 'Often measured in months.' 'Correlates with data exfiltration.' The 8-month period is dwell time.",
        wrongReasons: {
          0: ["Attack surface is about entry points, not time."],
          2: ["Threat path is the sequence of attack steps, not duration."],
          3: ["Attack chain describes phases, not the time before detection."]
        }
      },
      {
        q: "Which statement about cumulative impact of persistence is TRUE?",
        opts: ["Initial compromise is always the most damaging stage", "Persistence allows small access to escalate to systemic failure over time", "Persistence has no effect on attack severity", "Detection speed does not affect the scale of damage"],
        correct: 1,
        hint: "Slide 130: 'Initial compromise may seem minor.' 'Persistence expands scope over time.' 'Small access can escalate to systemic failure.' 'Combined impacts exceed isolated damage.' 'Time amplifies consequences.' 'Detection speed determines scale.'",
        wrongReasons: {
          0: ["Slide 130: 'Initial compromise may seem minor.' Persistence makes it worse over time."],
          2: ["Slide 130: 'Persistence expands scope over time' and 'increases potential damage.'"],
          3: ["Slide 130: 'Detection speed determines scale.' Faster detection = less damage."]
        }
      }
    ]
      },
      {
        id: "3-5", title: "Malware Types & Behaviors", slides: "131-147",
        concept: {
          title: "Malware Types & Behaviors",
          body: [
      {"type": "line", "text": "MALWARE = malicious software that performs unauthorized actions. It's a tool, not the attack itself."},
      {"type": "line", "text": "Malware often appears AFTER access is gained. It amplifies attack capability."},
      {"type": "empty"},
      {"type": "line", "text": "PURPOSES: Data exfiltration, surveillance, financial extortion, disruption of services, credential harvesting, botnet participation."},
      {"type": "empty"},
      {"type": "line", "text": "BEHAVIORS: Self-propagation, stealth and obfuscation, command-and-control (C2) communication, privilege manipulation, file encryption/modification, system configuration changes."},
      {"type": "empty"},
      {"type": "line", "text": "LIFECYCLE: Delivery → Execution → Persistence → Communication with attacker → Action on objectives → Cleanup or self-deletion."},
      {"type": "empty"},
      {"type": "line", "text": "DELIVERY MECHANISMS: Phishing attachments, drive-by downloads, exploit kits, supply-chain compromise, removable media, malicious updates."},
      {"type": "empty"},
      {"type": "line", "text": "TYPES:"},
      {"type": "line", "text": "  • VIRUS: attaches to legitimate files, requires user interaction, spreads through file execution, alters host files."},
      {"type": "line", "text": "  • WORM: self-propagating, spreads WITHOUT user interaction, exploits network vulnerabilities, rapidly scalable, causes widespread disruption."},
      {"type": "line", "text": "  • TROJAN: disguised as legitimate software, relies on user trust, does NOT self-propagate, often installs backdoors, enables secondary payloads."},
      {"type": "line", "text": "  • RANSOMWARE: encrypts victim data, demands payment for recovery, often includes data exfiltration, targets enterprises and infrastructure."},
      {"type": "line", "text": "  • BACKDOOR MALWARE: provides remote access, bypasses authentication, enables long-term persistence, supports lateral movement."},
      {"type": "line", "text": "  • SPYWARE: collects sensitive information, monitors user activity, captures credentials, often stealthy. Examples: Pegasus (mobile surveillance), Graphite."}
    ]
        },
        questions: [
      {
        q: "A piece of malware spreads automatically across a corporate network by exploiting a vulnerability in the file-sharing protocol, infecting hundreds of machines within hours without any user clicking on anything. What type of malware is this?",
        opts: ["Virus", "Worm", "Trojan", "Spyware"],
        correct: 1,
        hint: "Slide 139: Worm = 'self-propagating,' 'spreads without user interaction,' 'exploits network vulnerabilities,' 'rapidly scalable,' 'causes widespread disruption.'",
        wrongReasons: {
          0: ["Viruses require user interaction to spread."],
          2: ["Trojans rely on user trust and do not self-propagate."],
          3: ["Spyware monitors activity but doesn't typically self-propagate across networks."]
        }
      },
      {
        q: "A user downloads what appears to be a free PDF editor from an unofficial website. After installation, the software works correctly but secretly opens a connection that allows remote attackers to control the computer. The malware does not spread to other computers. What type is this?",
        opts: ["Worm", "Trojan", "Ransomware", "Virus"],
        correct: 1,
        hint: "Slide 140: Trojan = 'disguised as legitimate software,' 'relies on user trust,' 'does not self-propagate,' 'often installs backdoors,' 'enables secondary payloads.' The free PDF editor = disguise. Secret remote access = backdoor.",
        wrongReasons: {
          0: ["Worms self-propagate. This does not spread."],
          2: ["Ransomware encrypts files and demands payment. No encryption is described."],
          3: ["Viruses attach to legitimate files and require execution to spread."]
        }
      },
      {
        q: "A hospital's computer systems are suddenly locked, with a message demanding Bitcoin payment to restore access to patient records. The attackers also threaten to publish the stolen records publicly if payment is not made. What type of malware is this?",
        opts: ["Spyware", "Ransomware", "Trojan", "Worm"],
        correct: 1,
        hint: "Slide 141: Ransomware = 'encrypts victim data,' 'demands payment for recovery,' 'often includes data exfiltration,' 'may disrupt operations,' 'targets enterprises and infrastructure.' The hospital scenario is a classic ransomware attack.",
        wrongReasons: {
          0: ["Spyware monitors activity silently; it doesn't lock systems or demand payment."],
          2: ["Trojans disguise themselves as legitimate software but don't typically encrypt data for ransom."],
          3: ["Worms self-propagate but don't typically encrypt data and demand ransom."]
        }
      },
      {
        q: "Pegasus spyware was used to monitor targeted individuals by exploiting mobile device vulnerabilities, operating covertly to collect communications and location data. What is the PRIMARY purpose of spyware?",
        opts: ["Encrypting files for ransom", "Collecting sensitive information and monitoring user activity", "Self-propagating across networks", "Destroying system files"],
        correct: 1,
        hint: "Slide 144: Spyware = 'collects sensitive information,' 'monitors user activity,' 'captures credentials,' 'often stealthy,' 'may transmit data externally,' 'frequently used in surveillance.' Pegasus (slide 145) is a spyware example.",
        wrongReasons: {
          0: ["That's ransomware, not spyware."],
          2: ["That's a worm's behavior."],
          3: ["Destruction is associated with wipers or destructive malware, not spyware."]
        }
      },
      {
        q: "A user receives an email with an attached Word document. When they open it and enable macros, malicious code executes and infects the computer. The malware then attaches itself to other documents on the system. What type of malware is this?",
        opts: ["Worm", "Virus", "Trojan", "Backdoor"],
        correct: 1,
        hint: "Slide 138: Virus = 'attaches to legitimate files,' 'requires user interaction,' 'spreads through file execution,' 'alters host files.' Opening the Word document and enabling macros = user interaction. Attaching to other documents = virus behavior.",
        wrongReasons: {
          0: ["Worms spread without user interaction via network vulnerabilities."],
          2: ["Trojans disguise as legitimate software but don't typically attach to other files."],
          3: ["Backdoors provide remote access but don't typically attach to documents."]
        }
      }
    ]
      },
      {
        id: "3-6", title: "Threat Modeling Fundamentals", slides: "148-157",
        concept: {
          title: "Threat Modeling Fundamentals",
          body: [
      {"type": "line", "text": "THREAT MODELING = structured security reasoning. It identifies how systems can be attacked and anticipates realistic threat scenarios."},
      {"type": "line", "text": "Key functions:"},
      {"type": "line", "text": "  • Makes assumptions explicit"},
      {"type": "line", "text": "  • Links adversaries to assets"},
      {"type": "line", "text": "  • Supports secure design decisions"},
      {"type": "line", "text": "  • Is repeatable and scales with complexity"},
      {"type": "empty"},
      {"type": "line", "text": "TRUST BOUNDARIES in threat modeling:"},
      {"type": "line", "text": "  • Identify where trust assumptions change"},
      {"type": "line", "text": "  • Identify external vs internal domains"},
      {"type": "line", "text": "  • Identify privilege level transitions"},
      {"type": "line", "text": "  • Identify authentication boundaries"},
      {"type": "line", "text": "  • Identify network segmentation points"},
      {"type": "empty"},
      {"type": "line", "text": "THREAT ENUMERATION:"},
      {"type": "line", "text": "  1. Identify possible adversaries"},
      {"type": "line", "text": "  2. Identify possible threat goals"},
      {"type": "line", "text": "  3. Identify attack surfaces"},
      {"type": "line", "text": "  4. Identify exploitable vulnerabilities"},
      {"type": "line", "text": "  5. Identify feasible paths"},
      {"type": "line", "text": "  6. Describe complete threat scenarios"},
      {"type": "empty"},
      {"type": "line", "text": "THREAT PRIORITIZATION:"},
      {"type": "line", "text": "  • Evaluate likelihood qualitatively"},
      {"type": "line", "text": "  • Evaluate potential impact"},
      {"type": "line", "text": "  • Consider exploit availability"},
      {"type": "line", "text": "  • Consider asset criticality"},
      {"type": "line", "text": "  • Prioritize realistic attack paths"},
      {"type": "line", "text": "  • Guide mitigation strategy"},
      {"type": "empty"},
      {"type": "line", "text": "STRUCTURED REASONING vs INTUITION:"},
      {"type": "line", "text": "  • Security cannot rely on intuition alone"},
      {"type": "line", "text": "  • Complex systems hide indirect paths"},
      {"type": "line", "text": "  • Adversary perspective must be considered"},
      {"type": "line", "text": "  • Structured reasoning scales with complexity"}
    ]
        },
        questions: [
      {
        q: "A development team reviews their application design by systematically identifying what assets exist, who might attack them, how they could be reached, and what the impact would be. What security activity are they performing?",
        opts: ["Penetration testing", "Threat modeling", "Code compilation", "Vulnerability scanning"],
        correct: 1,
        hint: "Slide 148-149: Threat modeling = 'structured security reasoning' that 'identifies how systems can be attacked,' 'anticipates realistic threat scenarios,' and 'supports secure design decisions.' The described activity = systematic design review = threat modeling.",
        wrongReasons: {
          0: ["Penetration testing exploits actual vulnerabilities in running systems. This is reviewing design before coding."],
          2: ["Code compilation translates source code to executable; it's not a security analysis activity."],
          3: ["Vulnerability scanning detects known vulnerabilities in deployed systems, not design-level reasoning."]
        }
      },
      {
        q: "During a threat modeling exercise, a team marks the boundary between the public internet and their internal network, noting that data crossing this line must be validated. They also mark where user authentication happens. What are they identifying?",
        opts: ["Attack surfaces", "Trust boundaries", "Malware signatures", "Encryption keys"],
        correct: 1,
        hint: "Slide 151: Trust boundaries 'identify where trust assumptions change,' 'external vs internal domains,' 'privilege level transitions,' 'authentication boundaries,' and 'network segmentation points.' The boundaries between internet and internal network are classic trust boundaries.",
        wrongReasons: {
          0: ["Attack surfaces are interaction points. The team is marking trust transitions, not just interaction points."],
          2: ["Malware signatures are used in antivirus detection, not threat modeling."],
          3: ["Encryption keys are technical controls, not architectural trust transitions."]
        }
      },
      {
        q: "After enumerating threats, a team evaluates which threats are most likely to occur and which would cause the most damage if successful. They focus their mitigation budget on the top 5 threats. What step of threat modeling is this?",
        opts: ["Threat enumeration", "Threat prioritization", "Threat execution", "Threat elimination"],
        correct: 1,
        hint: "Slide 153: Threat prioritization = 'evaluate likelihood qualitatively,' 'evaluate potential impact,' 'consider exploit availability,' 'consider asset criticality,' 'prioritize realistic attack paths,' and 'guide mitigation strategy.' Ranking by likelihood and impact = prioritization.",
        wrongReasons: {
          0: ["Enumeration is identifying threats. This step is about ranking them."],
          2: ["Threat execution is not a threat modeling step; it's what attackers do."],
          3: ["Threats cannot be completely eliminated — only mitigated."]
        }
      },
      {
        q: "A security architect argues that threat modeling is unnecessary because they have 'good security intuition' from years of experience. What is the flaw in this reasoning?",
        opts: ["Intuition is always wrong", "Complex systems hide indirect paths, and security cannot rely on intuition alone", "Threat modeling is only for beginners", "Intuition is better than structured reasoning"],
        correct: 1,
        hint: "Slide 155: 'Security cannot rely on intuition alone.' 'Complex systems hide indirect paths.' 'Assumptions must be documented.' 'Adversary perspective must be considered.' 'Structured reasoning scales with complexity.'",
        wrongReasons: {
          0: ["Intuition isn't always wrong, but it's insufficient for complex systems."],
          2: ["Threat modeling is used by experts and organizations at all levels."],
          3: ["Slide 155 explicitly states structured reasoning is needed for complex systems."]
        }
      }
    ]
      },
      {
        id: "3-7", title: "STRIDE, DFD & Threat Modeling Tools", slides: "158-160",
        concept: {
          title: "STRIDE, DFD & Threat Modeling Tools",
          body: [
      {"type": "line", "text": "STRIDE = threat classification framework. Six categories:"},
      {"type": "line", "text": "  • SPOOFING: impersonating an entity."},
      {"type": "line", "text": "  • TAMPERING: unauthorized data modification."},
      {"type": "line", "text": "  • REPUDIATION: denying actions without proof."},
      {"type": "line", "text": "  • INFORMATION DISCLOSURE: unauthorized data access."},
      {"type": "line", "text": "  • DENIAL OF SERVICE: disrupting availability."},
      {"type": "line", "text": "  • ELEVATION OF PRIVILEGE: gaining higher permissions."},
      {"type": "empty"},
      {"type": "line", "text": "DATA FLOW DIAGRAM (DFD) ELEMENTS in security context:"},
      {"type": "line", "text": "  • External Entity: User or external system"},
      {"type": "line", "text": "  • Process: Application or service performing computation"},
      {"type": "line", "text": "  • Data Store: Database or file storage"},
      {"type": "line", "text": "  • Data Flow: Movement of data between elements"},
      {"type": "line", "text": "  • Trust Boundary: Change in trust level between components"},
      {"type": "empty"},
      {"type": "line", "text": "TOOLS:"},
      {"type": "line", "text": "  • Microsoft Threat Modeling Tool (MTMT): Desktop tool based on DFDs. Automatically maps DFD elements to STRIDE threats. Generates threat lists per component."},
      {"type": "line", "text": "  • OWASP Threat Dragon: Open-source, web-based, lightweight. Supports STRIDE-based threat enumeration. Suitable for web and cloud architectures."},
      {"type": "empty"},
      {"type": "line", "text": "STRENGTHS: Structured enumeration, documentation, repeatability. Makes trust boundaries explicit."},
      {"type": "line", "text": "LIMITATIONS: Depends on accurate system modeling. May generate generic or excessive threats. Tools assist but do NOT replace expert judgment."}
    ]
        },
        questions: [
      {
        q: "An attacker guesses a user's password and logs in as that user. According to STRIDE, what category of threat is this?",
        opts: ["Tampering", "Spoofing", "Repudiation", "Information Disclosure"],
        correct: 1,
        hint: "Slide 1421: Spoofing = 'Impersonating an entity.' Guessing a password and logging in as someone else = impersonating that user = spoofing.",
        wrongReasons: {
          0: ["Tampering = unauthorized data modification. No data was modified here."],
          2: ["Repudiation = denying actions without proof. The issue is impersonation, not denial."],
          3: ["Information Disclosure = unauthorized data access. The attack is about identity, not data access."]
        }
      },
      {
        q: "An attacker modifies a database record to change a student's grade from C to A without authorization. According to STRIDE, what category is this?",
        opts: ["Spoofing", "Tampering", "Denial of Service", "Elevation of Privilege"],
        correct: 1,
        hint: "Slide 1421: Tampering = 'Unauthorized data modification.' Changing a grade without authorization = tampering with data.",
        wrongReasons: {
          0: ["Spoofing = impersonation. The attacker is not pretending to be someone else."],
          2: ["DoS = disrupting availability. The system is still available."],
          3: ["Elevation of privilege = gaining higher permissions. The attacker may already have access; the issue is data modification."]
        }
      },
      {
        q: "In a Data Flow Diagram used for threat modeling, what element represents a 'change in trust level between components' such as the boundary between a user's browser and the application server?",
        opts: ["External Entity", "Process", "Data Store", "Trust Boundary"],
        correct: 3,
        hint: "Slide 1451-1503: Trust Boundary = 'Change in trust level between components.' The boundary between user browser (untrusted) and application server (trusted) is a trust boundary.",
        wrongReasons: {
          0: ["External Entity = user or external system."],
          1: ["Process = application or service performing computation."],
          2: ["Data Store = database or file storage."]
        }
      },
      {
        q: "A company uses an automated threat modeling tool that generates 200 potential threats for their system. Many of these threats are generic and not realistic for their specific architecture. What limitation of threat modeling tools does this illustrate?",
        opts: ["Tools always miss real threats", "Tools may generate generic or excessive threats and depend on accurate modeling", "Tools replace expert judgment completely", "Tools cannot map DFD elements to STRIDE"],
        correct: 1,
        hint: "Slide 1561: Limitations include 'May generate generic or excessive threats' and 'Depends on accurate system modeling.' The scenario describes exactly this — many generic, unrealistic threats.",
        wrongReasons: {
          0: ["The issue is too many generic threats, not missing threats."],
          2: ["Slide 1561: 'Tools assist analysis but do not replace expert judgment.'"],
          3: ["Tools like MTMT explicitly map DFD elements to STRIDE. This is a strength, not a limitation."]
        }
      }
    ]
      },
      {
        id: "3-8", title: "Final Certification", slides: "82-160",
        concept: {
          title: "Final Certification: All Module 2 Part 2 Concepts",
          body: [
      {"type": "line", "text": "Comprehensive review:"},
      {"type": "line", "text": "  • Attack = deliberate execution of a threat. Structured, not random."},
      {"type": "line", "text": "  • Phishing = steal info by pretending to be legitimate. Types: account compromised, prize, urgent action, invoice, job offer, update info, charity, tech support."},
      {"type": "line", "text": "  • Social engineering = psychological manipulation."},
      {"type": "line", "text": "  • DoS = make system unavailable. Categories: volumetric, protocol, application-layer, DDoS, reflection/amplification."},
      {"type": "line", "text": "  • Physical theft = stealing devices."},
      {"type": "line", "text": "  • Attack phases: Reconnaissance (passive/active), Preparation, Initial Intrusion, Escalation/Exploration, Execution, Escape/Evasion."},
      {"type": "line", "text": "  • Attack automation reduces skill requirements. Scalability amplifies impact."},
      {"type": "line", "text": "  • Persistence = continued access after compromise. Backdoors, credential harvesting, account creation, stealth techniques."},
      {"type": "line", "text": "  • Dwell time = time between compromise and detection."},
      {"type": "line", "text": "  • Malware = malicious software, a tool not the attack itself."},
      {"type": "line", "text": "  • Virus (needs user interaction, attaches to files), Worm (self-propagating, no user interaction), Trojan (disguised as legitimate), Ransomware (encrypts, demands payment), Backdoor (remote access), Spyware (surveillance)."},
      {"type": "line", "text": "  • Threat modeling = structured security reasoning. Trust boundaries, enumeration, prioritization."},
      {"type": "line", "text": "  • STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege."},
      {"type": "line", "text": "  • DFD elements: External Entity, Process, Data Store, Data Flow, Trust Boundary."},
      {"type": "line", "text": "  • Tools: MTMT, OWASP Threat Dragon. Strengths and limitations."}
    ]
        },
        questions: [
      {
        q: "An attacker sends emails to a company's employees claiming to be from the IT department, asking them to click a link to update their account information. The link leads to a fake login page. At the same time, another attacker rents a botnet to flood the company's website with traffic, making it unavailable. What two attack types are being used simultaneously?",
        opts: ["Ransomware and spyware", "Phishing and Denial of Service", "Worm and virus", "Social engineering and physical theft"],
        correct: 1,
        hint: "Slide 86-97: Phishing emails asking to update account information = phishing attack. Slide 100-101: Flooding a website with traffic = DoS/DDoS attack. The scenario combines both.",
        wrongReasons: {
          0: ["No encryption or surveillance is described."],
          2: ["Worms and viruses are malware types, not the attack methods described."],
          3: ["Physical theft is not described."]
        }
      },
      {
        q: "During a threat modeling session, a team identifies that an attacker could impersonate an admin user (Spoofing), modify order records (Tampering), and delete logs to hide evidence (Repudiation). What framework are they using to classify these threats?",
        opts: ["OWASP Top 10", "STRIDE", "CVSS", "NIST CSF"],
        correct: 1,
        hint: "Slide 1421: STRIDE = 'Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.' The team is classifying threats using the STRIDE framework.",
        wrongReasons: {
          0: ["OWASP Top 10 lists web application vulnerabilities, not threat categories."],
          2: ["CVSS scores vulnerability severity, not classifies threat types."],
          3: ["NIST CSF is a cybersecurity framework, not a threat classification system."]
        }
      },
      {
        q: "A malware spreads across a network automatically by exploiting a file-sharing vulnerability, infecting machines without any user interaction. It encrypts files on each machine and displays a ransom demand. Which two malware types are combined in this attack?",
        opts: ["Virus and Trojan", "Worm and Ransomware", "Spyware and Backdoor", "Trojan and Spyware"],
        correct: 1,
        hint: "Slide 139: Worm = 'self-propagating,' 'spreads without user interaction.' Slide 141: Ransomware = 'encrypts victim data,' 'demands payment for recovery.' The malware spreads like a worm and acts like ransomware.",
        wrongReasons: {
          0: ["Viruses require user interaction. This spreads automatically."],
          2: ["Spyware monitors activity; backdoor provides remote access. Neither is the primary behavior described."],
          3: ["Trojans don't self-propagate. This malware spreads automatically."]
        }
      },
      {
        q: "A security analyst researches a target company by reading their public blog posts, examining DNS records, and analyzing employee LinkedIn profiles — all without sending any traffic to the company's systems. Another analyst runs port scans and vulnerability scans against the company's servers. What two types of reconnaissance are being conducted?",
        opts: ["Active and active reconnaissance", "Passive and active reconnaissance", "Internal and external reconnaissance", "Social and physical reconnaissance"],
        correct: 1,
        hint: "Slide 114: Passive reconnaissance 'collects information without direct interaction' (OSINT, DNS records, social media). Active reconnaissance 'sends traffic to the target system' (port scanning, vulnerability scanning). The first analyst = passive. The second = active.",
        wrongReasons: {
          0: ["The first analyst does NOT send traffic — that's not active."],
          2: ["Internal vs external refers to attacker position, not reconnaissance method."],
          3: ["Physical reconnaissance is not described."]
        }
      },
      {
        q: "An attacker gains access to a system, installs a hidden remote access service, creates a new hidden administrator account, and modifies system logs to remove evidence. After the main vulnerability is patched, the attacker can still access the system. What concept best describes this entire behavior?",
        opts: ["Initial intrusion", "Persistence", "Reconnaissance", "Execution"],
        correct: 1,
        hint: "Slide 124-130: Persistence = 'allows continued access after compromise,' 'survives system reboots,' 'resists basic remediation efforts.' Hidden remote access, new accounts, and log modification are all persistence mechanisms. The attacker maintains access even after patching = persistence.",
        wrongReasons: {
          0: ["Initial intrusion was the entry point. The described actions happen after entry to maintain access."],
          2: ["Reconnaissance happens before the attack, not after compromise."],
          3: ["Execution would be data theft or damage, not establishing continued access."]
        }
      }
    ]
      },
    ]
  },
  {
    id: 4, num: "3",
    title: "Cybersecurity Defense",
    icon: "🛡️",
    desc: "Defense fundamentals, firewalls, encryption, monitoring & resilience",
    color: "#8b5cf6",
    levels: [
      {
        id: "4-1", title: "Defense Fundamentals", slides: "2-6",
        concept: {
          title: "Defense Fundamentals",
          body: [
      {"type": "line", "text": "Defense shifts from attacker behavior to SYSTEM PROTECTION."},
      {"type": "line", "text": "Core objectives: Access Control, Isolation, Protection, Visibility, Detection, Resilience."},
      {"type": "line", "text": "4 categories of mechanisms: Preventive, Protective, Detective, Resilience & Availability."},
      {"type": "line", "text": "Defense focuses on RISK REDUCTION, not threat elimination."},
      {"type": "line", "text": "Mechanisms must be understood conceptually before deployment."}
    ]
        },
        questions: [
      {
        q: "What is the primary shift when moving from threat analysis to defense?",
        opts: ["From attacker behavior to system protection", "From system protection to attacker behavior", "From risk reduction to threat elimination", "From prevention to only detection"],
        correct: 0,
        hint: "Slide 2: 'Defense shifts the perspective from attacker behavior to system protection.'",
        wrongReasons: {
          1: ["That's the opposite direction."],
          2: ["Defense does NOT eliminate threats — it reduces risk."],
          3: ["Defense includes prevention, detection, protection, AND resilience."]
        }
      },
      {
        q: "Which of these is NOT one of the four categories of network defense mechanisms?",
        opts: ["Preventive mechanisms", "Predictive mechanisms", "Detective mechanisms", "Protective mechanisms"],
        correct: 1,
        hint: "Slide 6 lists four: Preventive, Protective, Detective, Resilience and Availability.",
        wrongReasons: {
          0: ["Preventive IS a category (blocks/restricts)."],
          2: ["Detective IS a category (observes/analyzes)."],
          3: ["Protective IS a category (protects data in transit)."]
        }
      },
      {
        q: "What is the main purpose of preventive mechanisms?",
        opts: ["Observe and analyze network behavior", "Block or restrict communication before or at the point of access", "Focus on maintaining availability during attacks", "Correlate events across multiple systems"],
        correct: 1,
        hint: "Slide 7: Preventive mechanisms 'block or restrict communication' and 'act before or at the point of access.'",
        wrongReasons: {
          0: ["That's detective mechanisms."],
          2: ["That's resilience mechanisms."],
          3: ["That's SIEM (detective/resilience)."]
        }
      },
      {
        q: "Network defense focuses on:",
        opts: ["Threat elimination", "Risk reduction", "Complete attack prevention", "Removing all vulnerabilities"],
        correct: 1,
        hint: "Slide 2: 'Defense focuses on risk reduction, not threat elimination.'",
        wrongReasons: {
          0: ["The slide says defense focuses on risk reduction, NOT threat elimination."],
          2: ["No defense prevents ALL attacks."],
          3: ["Removing all vulnerabilities is impossible."]
        }
      }
    ]
      },
      {
        id: "4-2", title: "Preventive: Firewalls", slides: "7-11",
        concept: {
          title: "Preventive Mechanisms: Firewalls",
          body: [
      {"type": "line", "text": "FIREWALL = first line of defense. Controls traffic based on rules."},
      {"type": "line", "text": "Enforces network boundaries between trusted/untrusted zones."},
      {"type": "line", "text": "Types:"},
      {"type": "line", "text": "  1. Packet-filtering (1st gen): inspects headers (IP, port, protocol). Fast but blind to payload."},
      {"type": "line", "text": "  2. Stateful (2nd/3rd gen): tracks active connections. Allows known session traffic."},
      {"type": "line", "text": "  3. Next-Generation: adds application awareness, deep packet inspection, malware detection."},
      {"type": "line", "text": "Limitations: cannot detect attacks in allowed traffic, blind to encrypted payloads."}
    ]
        },
        questions: [
      {
        q: "A firewall that inspects packet headers (IP, port, protocol) but cannot see inside the packet payload is called:",
        opts: ["Stateful firewall", "Next-generation firewall", "Packet-filtering firewall", "Application firewall"],
        correct: 2,
        hint: "Slide 9: Packet-filtering 'inspect packet headers' and is 'fast but blind to payload content.'",
        wrongReasons: {
          0: ["Stateful firewalls track connections, not just headers."],
          1: ["Next-gen firewalls do deep packet inspection and see payload."],
          3: ["Not a standard type in the lecture."]
        }
      },
      {
        q: "A firewall tracks active connections and allows traffic only if it belongs to a known, established session. What type is this?",
        opts: ["Packet-filtering firewall", "Next-generation firewall", "Stateful firewall", "Proxy firewall"],
        correct: 2,
        hint: "Slide 10: Stateful firewalls 'track active connections' and 'allow traffic belonging to known sessions.'",
        wrongReasons: {
          0: ["Packet-filtering does not track connections — it only looks at headers."],
          1: ["Next-gen adds application awareness and DPI, not just connection tracking."],
          3: ["Proxy firewall is not listed in the lecture types."]
        }
      },
      {
        q: "A next-generation firewall adds which capabilities beyond traditional firewalls?",
        opts: ["Only faster packet processing", "Application awareness and deep packet inspection", "No limitations whatsoever", "Physical device blocking"],
        correct: 1,
        hint: "Slide 11: Next-gen 'adds application awareness and deep packet inspection' and 'detects malware, blocks applications.'",
        wrongReasons: {
          0: ["Speed isn't the defining feature of next-gen."],
          2: ["All firewalls have limitations. Next-gen still cannot see all encrypted content perfectly."],
          3: ["Physical blocking is not a firewall capability."]
        }
      },
      {
        q: "Which is a limitation of firewalls?",
        opts: ["They are too expensive", "Cannot detect attacks in allowed traffic and are blind to encrypted payloads", "They block all internet traffic", "They require daily reboots"],
        correct: 1,
        hint: "Slide 8: Limitations include 'cannot detect attacks in allowed traffic' and 'blind to encrypted payload content.'",
        wrongReasons: {
          0: ["Cost is not mentioned as a limitation in the lecture."],
          2: ["Firewalls selectively allow traffic based on rules, not block everything."],
          3: ["Reboot requirements are not mentioned."]
        }
      }
    ]
      },
      {
        id: "4-3", title: "Preventive: NAC & Segmentation", slides: "12-15",
        concept: {
          title: "Preventive: NAC & Segmentation",
          body: [
      {"type": "line", "text": "NAC (Network Access Control): controls which devices may join the network."},
      {"type": "line", "text": "Requires authentication BEFORE granting access."},
      {"type": "line", "text": "Distinguishes trusted vs untrusted endpoints."},
      {"type": "line", "text": "Reduces risk from rogue or unmanaged devices."},
      {"type": "empty"},
      {"type": "line", "text": "Network Segmentation: divides network into isolated zones."},
      {"type": "line", "text": "Limits lateral movement after compromise."},
      {"type": "line", "text": "Reduces blast radius of attacks."},
      {"type": "line", "text": "Effectiveness depends on correct design."}
    ]
        },
        questions: [
      {
        q: "Which mechanism controls which devices may join a network and requires authentication before granting access?",
        opts: ["Firewall", "Network Access Control (NAC)", "Intrusion Detection System", "SIEM"],
        correct: 1,
        hint: "Slide 12: NAC 'controls which devices may join the network' and 'requires authentication before granting access.'",
        wrongReasons: {
          0: ["Firewalls filter traffic but don't control which devices join the network."],
          2: ["IDS detects suspicious activity, it doesn't authenticate devices before access."],
          3: ["SIEM correlates events across systems, it doesn't control network admission."]
        }
      },
      {
        q: "A company divides its network into separate zones so that if one zone is compromised, the attacker cannot easily move to other zones. What defense concept is this?",
        opts: ["Firewall filtering", "Network Segmentation", "Data encryption", "Load balancing"],
        correct: 1,
        hint: "Slide 14: Segmentation 'divides the network into isolated zones' and 'limits lateral movement after compromise.'",
        wrongReasons: {
          0: ["Firewall filtering controls traffic but doesn't create isolated zones by itself."],
          2: ["Encryption protects data, it doesn't isolate network zones."],
          3: ["Load balancing distributes traffic, it doesn't limit lateral movement."]
        }
      },
      {
        q: "What does 'blast radius' mean in the context of network segmentation?",
        opts: ["The physical size of the network", "The extent of damage if one zone is compromised", "The speed of network traffic", "The encryption strength"],
        correct: 1,
        hint: "Slide 14: Segmentation 'reduces the blast radius of attacks' — meaning it limits how far damage can spread.",
        wrongReasons: {
          0: ["Blast radius is not physical size."],
          2: ["Not related to traffic speed."],
          3: ["Not related to encryption."]
        }
      }
    ]
      },
      {
        id: "4-4", title: "Protective: Encryption & VPNs", slides: "16-24",
        concept: {
          title: "Protective Mechanisms: Encryption & VPNs",
          body: [
      {"type": "line", "text": "PROTECTIVE mechanisms protect data and communications."},
      {"type": "line", "text": "They do NOT block traffic — they focus on confidentiality and integrity."},
      {"type": "line", "text": "Often transparent to users."},
      {"type": "empty"},
      {"type": "line", "text": "ENCRYPTION protects data in transit from eavesdropping."},
      {"type": "line", "text": "Critical against interception and MITM (Man-in-the-Middle) attacks."},
      {"type": "empty"},
      {"type": "line", "text": "VPN (Virtual Private Network) creates secure tunnels over untrusted networks."},
      {"type": "line", "text": "VPN Types:"},
      {"type": "line", "text": "  • Site-to-Site: connects entire networks (branch ↔ HQ), uses IPsec, users unaware."},
      {"type": "line", "text": "  • Remote Access: connects individual users to private network, requires client software."},
      {"type": "line", "text": "  • Cloud Remote Access: cloud-hosted gateways, integrated with SSO/MFA."},
      {"type": "line", "text": "  • SSL VPN: uses TLS/SSL (HTTPS), browser-based, easier deploy, app-level access only."},
      {"type": "line", "text": "  • Multi-hop: routes through 2+ servers, layered encryption, higher latency."},
      {"type": "line", "text": "VPN Limitations: can extend trust to compromised endpoints, does not inspect internal traffic."}
    ]
        },
        questions: [
      {
        q: "Which defense mechanism category focuses on confidentiality and integrity but does NOT block traffic?",
        opts: ["Preventive", "Detective", "Protective", "Resilience"],
        correct: 2,
        hint: "Slide 15: Protective mechanisms 'protect data and communications,' 'do not block traffic,' and 'focus on confidentiality and integrity.'",
        wrongReasons: {
          0: ["Preventive blocks or restricts communication."],
          1: ["Detective observes and analyzes behavior."],
          3: ["Resilience maintains availability."]
        }
      },
      {
        q: "A company connects its branch office network to headquarters so employees at the branch can access internal servers transparently without knowing a VPN exists. What type of VPN is this?",
        opts: ["Remote Access VPN", "Site-to-Site VPN", "SSL VPN", "Multi-hop VPN"],
        correct: 1,
        hint: "Slide 19: Site-to-Site 'connects entire networks transparently' and 'users are unaware of the tunnel.'",
        wrongReasons: {
          0: ["Remote Access connects individual users, not entire networks."],
          2: ["SSL VPN is browser-based and limited to app-level access."],
          3: ["Multi-hop routes through multiple servers for anonymity."]
        }
      },
      {
        q: "A traveling employee connects their laptop to the company network from a hotel using client software. What type of VPN is this?",
        opts: ["Site-to-Site VPN", "Remote Access VPN", "SSL VPN", "Multi-hop VPN"],
        correct: 1,
        hint: "Slide 20: Remote Access VPN 'connects individual users/devices to a private network' and 'requires client software.'",
        wrongReasons: {
          0: ["Site-to-Site connects branch offices, not individual travelers."],
          2: ["SSL VPN uses a browser, not necessarily client software."],
          3: ["Multi-hop is for anonymity, not standard remote work."]
        }
      },
      {
        q: "An employee accesses company email through a web browser without installing any VPN software. The connection uses HTTPS. What type of VPN is this?",
        opts: ["IPsec VPN", "Remote Access VPN", "SSL VPN", "Site-to-Site VPN"],
        correct: 2,
        hint: "Slide 22: SSL VPN 'uses TLS/SSL (HTTPS)' and is 'accessible via web browser' with 'no complex network configuration.'",
        wrongReasons: {
          0: ["IPsec requires dedicated client/software configuration."],
          1: ["Remote Access typically requires client software."],
          3: ["Site-to-Site connects entire networks, not individual browser access."]
        }
      },
      {
        q: "A user routes their traffic through two VPN servers in different countries to make it harder to trace their activity. What type is this?",
        opts: ["Site-to-Site VPN", "Remote Access VPN", "SSL VPN", "Multi-hop VPN"],
        correct: 3,
        hint: "Slide 23: Multi-hop VPN 'routes traffic through two (or more) VPN servers sequentially' for 'layered encryption and anonymity.'",
        wrongReasons: {
          0: ["Site-to-Site connects corporate networks."],
          1: ["Remote Access connects one user to one network."],
          2: ["SSL VPN is browser-based for simple access."]
        }
      },
      {
        q: "Which is a limitation of VPNs?",
        opts: ["They make internet connections faster", "They can extend trust to compromised endpoints and do not inspect internal traffic", "They prevent all types of cyber attacks", "They are only used for illegal activities"],
        correct: 1,
        hint: "Slide 18: VPN limitations include 'can extend trust to compromised endpoints' and 'does not inspect internal traffic.'",
        wrongReasons: {
          0: ["VPNs typically add latency, not speed."],
          2: ["VPNs don't prevent all attacks — they secure the tunnel only."],
          3: ["VPNs have legitimate business uses like remote work."]
        }
      }
    ]
      },
      {
        id: "4-5", title: "Detective: IDS, IPS & Monitoring", slides: "25-28",
        concept: {
          title: "Detective Mechanisms: IDS, IPS & Monitoring",
          body: [
      {"type": "line", "text": "DETECTIVE mechanisms observe and analyze network behavior."},
      {"type": "line", "text": "They identify suspicious or malicious activity."},
      {"type": "line", "text": "They typically operate AFTER access is granted."},
      {"type": "empty"},
      {"type": "line", "text": "NETWORK MONITORING collects traffic, flow data, or metadata."},
      {"type": "line", "text": "Limitation: visibility alone does not equal detection."},
      {"type": "empty"},
      {"type": "line", "text": "IDS (Intrusion Detection System): analyzes traffic for known/anomalous patterns."},
      {"type": "line", "text": "Methods: signature-based (known patterns) or behavior-based (anomalies)."},
      {"type": "line", "text": "Generates alerts but does NOT automatically stop attacks."},
      {"type": "empty"},
      {"type": "line", "text": "IPS (Intrusion Prevention System): actively BLOCKS detected malicious traffic."},
      {"type": "line", "text": "Combines detection with enforcement."},
      {"type": "line", "text": "Limitation: false positives may disrupt legitimate services."}
    ]
        },
        questions: [
      {
        q: "A system collects all network traffic and flow data to provide visibility into what is happening on the network. However, it does not automatically detect threats. What is this?",
        opts: ["IDS", "IPS", "Network Monitoring", "Firewall"],
        correct: 2,
        hint: "Slide 25: Network Monitoring 'collects traffic, flow data, or metadata' but 'visibility alone does not equal detection.'",
        wrongReasons: {
          0: ["IDS analyzes traffic and generates alerts."],
          1: ["IPS actively blocks traffic."],
          3: ["Firewalls filter traffic based on rules."]
        }
      },
      {
        q: "An Intrusion Detection System (IDS) analyzes traffic and generates alerts when it sees suspicious patterns. However, it does NOT:",
        opts: ["Use signature-based detection", "Use behavior-based detection", "Automatically stop attacks", "Generate alerts"],
        correct: 2,
        hint: "Slide 26: IDS 'does not automatically stop attacks' — it only detects and alerts.",
        wrongReasons: {
          0: ["IDS DOES use signature-based methods."],
          1: ["IDS DOES use behavior-based methods."],
          3: ["IDS DOES generate alerts."]
        }
      },
      {
        q: "What is the key difference between IDS and IPS?",
        opts: ["IDS detects threats; IPS actively blocks malicious traffic", "IDS is cheaper than IPS", "IDS uses signatures; IPS uses behavior analysis", "IDS is hardware; IPS is software"],
        correct: 0,
        hint: "Slide 27: IPS 'actively block detected malicious traffic' and 'combine detection with enforcement.' IDS only alerts.",
        wrongReasons: {
          1: ["Cost is not the defining difference in the lecture."],
          2: ["Both can use signatures and behavior analysis."],
          3: ["Both can be hardware or software."]
        }
      },
      {
        q: "An IPS blocks traffic that matches known attack signatures. What is its main limitation?",
        opts: ["It cannot detect any threats", "False positives may disrupt legitimate services", "It only works on wired networks", "It encrypts all traffic"],
        correct: 1,
        hint: "Slide 27: IPS limitation is 'false positives may disrupt services.'",
        wrongReasons: {
          0: ["IPS detects AND blocks known threats."],
          2: ["IPS works on both wired and wireless."],
          3: ["IPS doesn't encrypt traffic — that's a protective mechanism."]
        }
      },
      {
        q: "A detective mechanism operates after access is granted to identify stealthy threats. This describes:",
        opts: ["Preventive mechanism", "Detective mechanism", "Protective mechanism", "Resilience mechanism"],
        correct: 1,
        hint: "Slide 24: Detective mechanisms 'typically operate after access is granted' and are 'essential for detecting stealthy threats.'",
        wrongReasons: {
          0: ["Preventive acts BEFORE or AT the point of access."],
          2: ["Protective secures data in transit, not behavior after access."],
          3: ["Resilience maintains availability during attacks."]
        }
      }
    ]
      },
      {
        id: "4-6", title: "Detective: SIEM", slides: "29-32",
        concept: {
          title: "Detective: SIEM",
          body: [
      {"type": "line", "text": "SIEM (Security Information and Event Management): aggregates, correlates, and analyzes security events across systems."},
      {"type": "line", "text": "Core functions:"},
      {"type": "line", "text": "  • Log Collection: from network devices, servers, apps, auth systems."},
      {"type": "line", "text": "  • Normalization: converts logs into common format."},
      {"type": "line", "text": "  • Correlation: links events across multiple sources."},
      {"type": "line", "text": "  • Alerting: detects suspicious patterns."},
      {"type": "empty"},
      {"type": "line", "text": "Strengths: centralized visibility, correlation of distributed events, supports forensic analysis."},
      {"type": "line", "text": "Limitations:"},
      {"type": "line", "text": "  • Depends on log quality and coverage."},
      {"type": "line", "text": "  • Cannot detect what is not logged."},
      {"type": "line", "text": "  • High false positives/negatives."},
      {"type": "line", "text": "  • Limited visibility into encrypted traffic."},
      {"type": "line", "text": "  • Requires human analysis."},
      {"type": "empty"},
      {"type": "line", "text": "Comparison:"},
      {"type": "line", "text": "  • Firewall: controls traffic based on rules."},
      {"type": "line", "text": "  • IDS/IPS: detects or blocks known threats."},
      {"type": "line", "text": "  • SIEM: correlates events across systems (complements, not replaces others)."}
    ]
        },
        questions: [
      {
        q: "A SIEM system collects logs from firewalls, servers, authentication systems, and applications, then converts them into a common format to find patterns across all systems. What SIEM function is 'converting logs into a common format'?",
        opts: ["Log Collection", "Normalization", "Correlation", "Alerting"],
        correct: 1,
        hint: "Slide 29: Normalization is 'convert logs into a common format.'",
        wrongReasons: {
          0: ["Collection = gathering logs from sources."],
          2: ["Correlation = linking events across sources."],
          3: ["Alerting = notifying when suspicious patterns are found."]
        }
      },
      {
        q: "A SIEM links a failed login from a VPN, an unusual file access from a server, and a firewall alert from the same IP address into a single suspicious incident. What SIEM function is this?",
        opts: ["Log Collection", "Normalization", "Correlation", "Alerting"],
        correct: 2,
        hint: "Slide 29: Correlation is 'link events across multiple sources.'",
        wrongReasons: {
          0: ["Collection just gathers the logs."],
          1: ["Normalization formats the logs."],
          3: ["Alerting would notify after correlation finds the pattern."]
        }
      },
      {
        q: "Which is a limitation of SIEM?",
        opts: ["It replaces firewalls and IDS completely", "It cannot detect what is not logged and depends on log quality", "It automatically blocks all attacks", "It only works for small networks"],
        correct: 1,
        hint: "Slide 30: Limitations include 'depends on log quality and coverage' and 'cannot detect what is not logged.'",
        wrongReasons: {
          0: ["Slide 31: SIEM 'complements — not replaces — other defenses.'"],
          2: ["SIEM detects and alerts; it does not block."],
          3: ["SIEM works for networks of all sizes."]
        }
      },
      {
        q: "Which defense mechanism is described as 'correlates events across systems'?",
        opts: ["Firewall", "IDS/IPS", "SIEM", "VPN"],
        correct: 2,
        hint: "Slide 31: SIEM 'correlates events across systems.' Firewall controls, IDS/IPS detects/blocks.",
        wrongReasons: {
          0: ["Firewall controls traffic based on rules."],
          1: ["IDS/IPS detects or blocks known threats."],
          3: ["VPN creates secure tunnels."]
        }
      }
    ]
      },
      {
        id: "4-7", title: "Resilience: DoS Mitigation", slides: "33-35",
        concept: {
          title: "Resilience & Availability Mechanisms",
          body: [
      {"type": "line", "text": "RESILIENCE mechanisms focus on maintaining availability."},
      {"type": "line", "text": "They ASSUME attacks will occur."},
      {"type": "line", "text": "They reduce impact rather than prevent attacks."},
      {"type": "line", "text": "Critical for public-facing services."},
      {"type": "empty"},
      {"type": "line", "text": "DoS/DDoS Mitigation:"},
      {"type": "line", "text": "  • Protects services against traffic floods."},
      {"type": "line", "text": "  • Manages excessive or malicious traffic."},
      {"type": "line", "text": "  • Relies on scale, filtering, or distribution."},
      {"type": "line", "text": "  • Limitation: cannot fully prevent large-scale attacks."},
      {"type": "empty"},
      {"type": "line", "text": "Rate Limiting & Traffic Shaping:"},
      {"type": "line", "text": "  • Restrict abusive or excessive requests."},
      {"type": "line", "text": "  • Protect application and system resources."},
      {"type": "line", "text": "  • Effective against low-rate attacks."},
      {"type": "line", "text": "  • Simple but powerful."},
      {"type": "line", "text": "  • May impact legitimate users."}
    ]
        },
        questions: [
      {
        q: "Which defense mechanism category assumes attacks will occur and focuses on reducing their impact rather than preventing them?",
        opts: ["Preventive", "Detective", "Protective", "Resilience and Availability"],
        correct: 3,
        hint: "Slide 32: Resilience mechanisms 'assume attacks will occur' and 'reduce impact rather than prevent attacks.'",
        wrongReasons: {
          0: ["Preventive tries to block before access."],
          1: ["Detective observes after access."],
          2: ["Protective secures data in transit."]
        }
      },
      {
        q: "A university's online registration system is flooded with millions of fake requests during enrollment, making it unavailable for real students. Which defense mechanism is designed to handle this?",
        opts: ["Network Segmentation", "DoS and DDoS Mitigation", "Network Access Control", "Encryption"],
        correct: 1,
        hint: "Slide 33: DoS/DDoS mitigation 'protects services against traffic floods' and 'manages excessive or malicious traffic.'",
        wrongReasons: {
          0: ["Segmentation isolates zones but doesn't handle traffic floods."],
          2: ["NAC controls device access, not traffic volume."],
          3: ["Encryption protects data, not availability."]
        }
      },
      {
        q: "An API starts rejecting requests from a single IP after it sends 100 requests per minute, while still allowing normal users. What mechanism is this?",
        opts: ["Firewall", "Rate Limiting", "Network Segmentation", "VPN"],
        correct: 1,
        hint: "Slide 34: Rate limiting 'restricts abusive or excessive requests' and 'protects application and system resources.'",
        wrongReasons: {
          0: ["Firewalls filter based on rules, not request frequency."],
          2: ["Segmentation divides networks, not request rates."],
          3: ["VPNs secure tunnels, not API request rates."]
        }
      },
      {
        q: "Which is a limitation of DoS/DDoS mitigation?",
        opts: ["It prevents all attacks completely", "It cannot fully prevent large-scale attacks", "It only works for small websites", "It encrypts all network traffic"],
        correct: 1,
        hint: "Slide 33: Limitation is 'cannot fully prevent large-scale attacks.'",
        wrongReasons: {
          0: ["The slide explicitly says it cannot fully prevent large-scale attacks."],
          2: ["It works for platforms of all sizes."],
          3: ["Encryption is a protective mechanism, not resilience."]
        }
      }
    ]
      },
      {
        id: "4-8", title: "Final Certification", slides: "2-35",
        concept: {
          title: "Final Review: All Module 3 Concepts",
          body: [
      {"type": "line", "text": "4 defense categories: Preventive (blocks), Protective (encrypts/secures), Detective (observes), Resilience (maintains availability)."},
      {"type": "line", "text": "Firewalls: packet-filtering, stateful, next-gen. Limitations: allowed traffic, encrypted payloads."},
      {"type": "line", "text": "NAC: authenticates devices before network access."},
      {"type": "line", "text": "Segmentation: isolates zones, limits lateral movement."},
      {"type": "line", "text": "VPNs: Site-to-Site, Remote Access, Cloud, SSL, Multi-hop. Limitations: compromised endpoints, no internal inspection."},
      {"type": "line", "text": "IDS vs IPS: IDS detects and alerts; IPS detects and blocks."},
      {"type": "line", "text": "SIEM: aggregates, normalizes, correlates, alerts. Limitations: log dependency, false positives, encrypted traffic blind spots."},
      {"type": "line", "text": "Resilience: DoS mitigation, rate limiting. Limitations: can't fully prevent large attacks, may impact legitimate users."}
    ]
        },
        questions: [
      {
        q: "A packet-filtering firewall is fast but cannot inspect the actual content of packets. A next-generation firewall can see applications and malware inside packets. What capability makes this possible?",
        opts: ["Connection tracking", "Deep packet inspection", "Network segmentation", "Rate limiting"],
        correct: 1,
        hint: "Slide 11: Next-gen firewalls add 'deep packet inspection' and 'application awareness.'",
        wrongReasons: {
          0: ["Connection tracking = stateful firewall feature."],
          2: ["Segmentation divides networks."],
          3: ["Rate limiting restricts request frequency."]
        }
      },
      {
        q: "Complete the comparison: A firewall controls traffic based on rules, an IDS/IPS detects or blocks known threats, and a SIEM:",
        opts: ["Encrypts all network traffic", "Correlates events across systems", "Replaces all other defenses", "Physically blocks devices from joining"],
        correct: 1,
        hint: "Slide 31: SIEM 'correlates events across systems.'",
        wrongReasons: {
          0: ["Encryption is a protective mechanism."],
          2: ["SIEM complements, not replaces, other defenses."],
          3: ["NAC controls device admission, not SIEM."]
        }
      },
      {
        q: "A company wants to ensure that if a workstation in the finance department is compromised, the attacker cannot easily reach engineering servers. Which two mechanisms work together best for this?",
        opts: ["Firewall and VPN", "Network Segmentation and NAC", "IDS and SIEM", "Rate limiting and encryption"],
        correct: 1,
        hint: "Segmentation isolates departments. NAC ensures only trusted devices enter each segment.",
        wrongReasons: {
          0: ["Firewalls filter traffic; VPNs secure remote access. Neither isolates departments."],
          2: ["IDS and SIEM detect threats but don't isolate network zones."],
          3: ["Rate limiting handles request volume; encryption protects data. Neither isolates departments."]
        }
      },
      {
        q: "An organization can see all traffic passing through its network, but encrypted HTTPS traffic appears as unreadable data. Which defense mechanism is most affected by this encryption blind spot?",
        opts: ["Firewall", "IDS/IPS", "SIEM", "All of the above"],
        correct: 3,
        hint: "Slide 8 says firewalls are 'blind to encrypted payload content.' Slide 30 says SIEM has 'limited visibility into encrypted traffic.' IDS/IPS also struggle with encrypted payloads.",
        wrongReasons: {
          0: ["Firewalls can still filter by IP/port even with encrypted payloads."],
          1: ["IDS/IPS can still detect some patterns in metadata, though payload is hidden."],
          2: ["SIEM is affected, but the question asks about ALL mechanisms."]
        }
      }
    ]
      },
    ]
  },
  {
    id: 5, num: "4",
    title: "Identity, Authentication & Access Control",
    icon: "🔐",
    desc: "Identity, auth, access control, MFA, Zero Trust & policies",
    color: "#0ea5e9",
    levels: [
      {
        id: "5-1", title: "Core Identity Concepts", slides: "2-18",
        concept: {
          title: "Core Identity Concepts",
          body: [
      {"type": "line", "text": "IDENTITY = digital representation of an entity (human, service, device)."},
      {"type": "line", "text": "IDENTITY vs ACCOUNT: Identity is the real-world entity. Account is how it's represented in a specific system. One identity can have multiple accounts."},
      {"type": "line", "text": "IDENTIFICATION = claiming an identity (e.g., entering username)."},
      {"type": "line", "text": "AUTHENTICATION (AuthN) = verifying that claim (e.g., entering password). Answers: 'Who are you?'"},
      {"type": "line", "text": "AUTHORIZATION (AuthZ) = determining what you're allowed to do. Answers: 'What can you do?'"},
      {"type": "line", "text": "AAA Model: Authentication + Authorization + Accounting (records activity)."},
      {"type": "line", "text": "SESSION = maintains authenticated state across requests (cookies, tokens)."},
      {"type": "line", "text": "TRUST BOUNDARY = where trust assumptions change. Requires validation."}
    ]
        },
        questions: [
      {
        q: "A user types their username into a login form. What security action is this?",
        opts: ["Authentication", "Identification", "Authorization", "Accounting"],
        correct: 1,
        hint: "Slide 12: Identification is 'the act of claiming an identity.' Authentication verifies it.",
        wrongReasons: {
          0: ["Authentication verifies the claim. Typing a username is just claiming identity."],
          2: ["Authorization decides permissions AFTER authentication."],
          3: ["Accounting records activity, not the initial claim."]
        }
      },
      {
        q: "A student logs into a university system with valid credentials. The system then decides the student can view grades but cannot modify them. What is the second step called?",
        opts: ["Authentication", "Identification", "Authorization", "Session management"],
        correct: 2,
        hint: "Slide 13: Authorization answers 'What are you allowed to do?' and happens AFTER authentication.",
        wrongReasons: {
          0: ["Authentication was the login step. The system already knows who they are."],
          1: ["Identification was entering the username."],
          3: ["Session management maintains state, not permission decisions."]
        }
      },
      {
        q: "In the AAA model, what does the third 'A' (Accounting) do?",
        opts: ["Verifies user identity", "Determines allowed actions", "Records user activity for monitoring and auditing", "Encrypts user passwords"],
        correct: 2,
        hint: "Slide 15: Accounting 'records user activity for monitoring and auditing.'",
        wrongReasons: {
          0: ["That's Authentication."],
          1: ["That's Authorization."],
          3: ["Encryption is not part of AAA."]
        }
      },
      {
        q: "After a user successfully logs in, the system uses a cookie to remember they are authenticated across multiple page requests. What is this mechanism?",
        opts: ["Trust boundary", "Session", "Access control matrix", "Identity provider"],
        correct: 1,
        hint: "Slide 17: Sessions 'maintain the user's authenticated state across requests.'",
        wrongReasons: {
          0: ["Trust boundaries are where assumptions change."],
          2: ["Access control matrix defines permissions."],
          3: ["Identity provider manages identities externally."]
        }
      },
      {
        q: "A single person has a university email account, a personal Gmail account, and a work Microsoft account. Each has different permissions. What concept explains this?",
        opts: ["One identity cannot have multiple accounts", "Identity vs Account distinction", "Authentication is the same as authorization", "Sessions are permanent"],
        correct: 1,
        hint: "Slide 11: 'Identity refers to the real-world entity. Account is how that identity is represented in a specific system.'",
        wrongReasons: {
          0: ["Slide 11 explicitly says a single identity CAN have multiple accounts."],
          2: ["They are different concepts."],
          3: ["Sessions are temporary, not permanent."]
        }
      }
    ]
      },
      {
        id: "5-2", title: "Password Weaknesses & Attacks", slides: "19-32",
        concept: {
          title: "Password Weaknesses & Attacks",
          body: [
      {"type": "line", "text": "Passwords are widely used but fundamentally weak:"},
      {"type": "line", "text": "  • Users choose predictable passwords (123456, password, qwerty)."},
      {"type": "line", "text": "  • Many attack techniques: brute-force, dictionary, credential stuffing, phishing, keyloggers."},
      {"type": "line", "text": "BRUTE-FORCE = trying every possible combination. Very slow without constraints."},
      {"type": "line", "text": "DICTIONARY ATTACK = using lists of common passwords and leaked credentials. Much faster."},
      {"type": "line", "text": "CREDENTIAL STUFFING = using leaked credentials from one breach on other platforms. Automated."},
      {"type": "line", "text": "PASSWORD STORAGE: never store plaintext. Use HASHING (one-way) + SALTING (random data added before hashing)."},
      {"type": "line", "text": "Key insight: Passwords alone cannot provide strong security guarantees."}
    ]
        },
        questions: [
      {
        q: "An attacker uses a list of the 10,000 most common passwords to try logging into many accounts. What attack is this?",
        opts: ["Brute-force attack", "Dictionary attack", "Credential stuffing attack", "Session hijacking"],
        correct: 1,
        hint: "Slide 26: Dictionary attacks use 'lists of common passwords' and are 'much faster than brute force.'",
        wrongReasons: {
          0: ["Brute-force tries ALL combinations, not just common ones."],
          2: ["Credential stuffing uses leaked credentials from other breaches."],
          3: ["Session hijacking steals active sessions, not passwords."]
        }
      },
      {
        q: "An attacker obtains a database of usernames and passwords from a breached shopping website and automatically tries them on banking websites. What attack is this?",
        opts: ["Brute-force attack", "Dictionary attack", "Credential stuffing attack", "Phishing attack"],
        correct: 2,
        hint: "Slide 27: Credential stuffing uses 'credentials leaked from previous breaches' and 'automated tools try these on other platforms.'",
        wrongReasons: {
          0: ["Brute-force tries random combinations."],
          1: ["Dictionary uses common password lists, not leaked credentials."],
          3: ["Phishing tricks users into revealing passwords. This uses already-stolen data."]
        }
      },
      {
        q: "A system stores passwords as plain text in its database. An attacker breaches the database and immediately knows every user's password. What critical mistake did the system make?",
        opts: ["Not using multi-factor authentication", "Storing passwords in plaintext instead of hashing", "Allowing too many login attempts", "Not having a firewall"],
        correct: 1,
        hint: "Slide 30: 'Systems must never store passwords in plaintext.' Secure systems use hashing.",
        wrongReasons: {
          0: ["MFA is good but doesn't fix plaintext storage."],
          2: ["Rate limiting helps but doesn't fix storage."],
          3: ["Firewalls filter traffic, not store passwords."]
        }
      },
      {
        q: "Even if two users have the same password, their stored hashes should look different. What technique ensures this?",
        opts: ["Hashing alone", "Salting", "Encryption", "Compression"],
        correct: 1,
        hint: "Slide 31: Salting 'adds random data before hashing' so 'even if two users have the same password, their stored hashes will be different.'",
        wrongReasons: {
          0: ["Hashing alone would produce the same hash for the same password."],
          2: ["Encryption is reversible. Hashing is one-way."],
          3: ["Compression reduces size, not a security mechanism."]
        }
      },
      {
        q: "Malicious software records every keystroke a user types, including passwords, and sends them to an attacker. What is this called?",
        opts: ["Ransomware", "Keylogger", "Worm", "Trojan"],
        correct: 1,
        hint: "Slide 29: 'Keyloggers recording keystrokes' are a form of password capture via malware.",
        wrongReasons: {
          0: ["Ransomware encrypts files and demands payment."],
          2: ["Worms self-propagate across networks."],
          3: ["Trojan disguises itself as legitimate software."]
        }
      },
      {
        q: "Which statement about passwords is TRUE?",
        opts: ["Passwords alone provide strong security guarantees", "Even well-implemented systems can be compromised through user behavior", "Strong passwords are immune to keyloggers", "Plaintext password storage is acceptable with a strong firewall"],
        correct: 1,
        hint: "Slide 32: 'Even well-implemented systems can be compromised' and 'passwords rely heavily on user behavior, which is often weak.'",
        wrongReasons: {
          0: ["Slide 32: 'Passwords alone cannot provide strong security guarantees.'"],
          2: ["Keyloggers capture ANY password typed, strong or weak."],
          3: ["Plaintext storage is NEVER acceptable."]
        }
      }
    ]
      },
      {
        id: "5-3", title: "MFA & Strengthening Authentication", slides: "33-43",
        concept: {
          title: "MFA & Strengthening Authentication",
          body: [
      {"type": "line", "text": "MFA (Multi-Factor Authentication) = requires two or more INDEPENDENT proofs of identity."},
      {"type": "line", "text": "Even if one factor is compromised, others protect the account."},
      {"type": "line", "text": "Factors:"},
      {"type": "line", "text": "  • Something you KNOW (password, PIN)"},
      {"type": "line", "text": "  • Something you HAVE (phone, hardware token, smart card)"},
      {"type": "line", "text": "  • Something you ARE (fingerprint, face recognition)"},
      {"type": "line", "text": "OTP (One-Time Password) = temporary codes. SMS or app-generated."},
      {"type": "line", "text": "Hardware tokens and authenticator apps are more secure than SMS."},
      {"type": "line", "text": "BIOMETRIC: convenient but cannot be changed if compromised."},
      {"type": "line", "text": "Limitations: SMS interception, device compromise, phishing against MFA (fake login pages capturing OTP in real-time)."},
      {"type": "line", "text": "PASSWORDLESS = eliminate passwords. Uses biometrics, secure devices, cryptographic auth (Passkeys, FIDO2)."}
    ]
        },
        questions: [
      {
        q: "A user must enter their password AND a code sent to their phone to log in. What security mechanism is this?",
        opts: ["Single sign-on", "Multi-factor authentication (MFA)", "Network segmentation", "Rate limiting"],
        correct: 1,
        hint: "Slide 35: MFA 'requires users to provide two or more independent proofs of identity.'",
        wrongReasons: {
          0: ["SSO lets users log in once for multiple services."],
          2: ["Network segmentation divides network zones."],
          3: ["Rate limiting restricts request frequency."]
        }
      },
      {
        q: "An authentication system requires a fingerprint scan AND a hardware security key. Which two factor categories are used?",
        opts: ["Knowledge and possession", "Possession and inherence", "Inherence and knowledge", "Location and time"],
        correct: 1,
        hint: "Slide 36: Fingerprint = 'something you ARE' (inherence). Hardware key = 'something you HAVE' (possession).",
        wrongReasons: {
          0: ["Knowledge = something you know (password). No password is used here."],
          2: ["Knowledge is not used. Fingerprint is inherence, key is possession."],
          3: ["Location and time are context factors, not the primary factor categories."]
        }
      },
      {
        q: "A bank sends a one-time code via SMS for login verification. What is a key limitation of this approach?",
        opts: ["SMS codes never expire", "SMS can be intercepted by attackers", "Users cannot receive SMS messages", "SMS is too expensive"],
        correct: 1,
        hint: "Slide 41: MFA limitations include 'SMS interception' and 'device compromise.'",
        wrongReasons: {
          0: ["SMS codes do expire (short validity)."],
          2: ["Most users can receive SMS; this isn't the security limitation."],
          3: ["Cost is not the security concern."]
        }
      },
      {
        q: "An attacker creates a fake login page that looks identical to a real banking site. When a user enters their password and OTP, the attacker forwards both to the real site instantly, gaining access. What does this demonstrate?",
        opts: ["MFA is completely unbreakable", "MFA can be bypassed through phishing", "Hardware tokens are useless", "Biometrics are always better"],
        correct: 1,
        hint: "Slide 42: 'Attackers use fake login pages to capture credentials. User enters password and OTP → attacker forwards them instantly.'",
        wrongReasons: {
          0: ["Slide 41 explicitly says MFA 'does not eliminate risk.'"],
          2: ["Hardware tokens are still more secure than SMS."],
          3: ["Biometrics have their own limitations (cannot be changed if compromised)."]
        }
      },
      {
        q: "Which modern authentication approach aims to eliminate passwords entirely, using biometrics and secure devices with cryptographic authentication?",
        opts: ["Multi-factor authentication", "Passwordless authentication (FIDO2/Passkeys)", "Single sign-on", "Risk-based authentication"],
        correct: 1,
        hint: "Slide 43: 'Toward Passwordless Authentication' uses 'biometrics, secure devices' and 'cryptographic authentication' with examples like Passkeys and FIDO2.",
        wrongReasons: {
          0: ["MFA still uses passwords as one factor."],
          2: ["SSO centralizes login but doesn't eliminate passwords."],
          3: ["Risk-based adapts requirements based on context but doesn't eliminate passwords."]
        }
      }
    ]
      },
      {
        id: "5-4", title: "Access Control Fundamentals", slides: "44-57",
        concept: {
          title: "Access Control Fundamentals",
          body: [
      {"type": "line", "text": "ACCESS CONTROL = regulating who can access what resources. Operates AFTER authentication."},
      {"type": "line", "text": "Without AC, any authenticated user could access everything."},
      {"type": "line", "text": "SUBJECT = entity performing action (user, process)."},
      {"type": "line", "text": "RESOURCE (OBJECT) = target being accessed (file, database, API)."},
      {"type": "line", "text": "ACTION = operation performed (read, write, delete)."},
      {"type": "line", "text": "ACCESS CONTROL MATRIX = rows (subjects) × columns (resources) = allowed actions."},
      {"type": "line", "text": "LEAST PRIVILEGE = only permissions needed. Reduces risk from mistakes/compromise."},
      {"type": "line", "text": "NEED-TO-KNOW = access granted only if necessary for a task. Even within same role, access may vary."},
      {"type": "line", "text": "SEPARATION OF DUTIES = critical tasks divided among multiple users. Prevents single-user control."},
      {"type": "line", "text": "POLICY vs MECHANISM: Policy defines what SHOULD be allowed. Mechanism ENFORCES it."},
      {"type": "line", "text": "CENTRALIZED = one system manages access (easier consistency). DECENTRALIZED = multiple systems manage independently (more flexible, harder to control)."}
    ]
        },
        questions: [
      {
        q: "In a university system, a student can view their own grades but not modify them, while an instructor can modify grades. What security concept governs these different permissions?",
        opts: ["Authentication", "Access control", "Encryption", "Network segmentation"],
        correct: 1,
        hint: "Slide 45: Access control 'defines the rules that determine which users can access which data and what actions they are allowed to perform.'",
        wrongReasons: {
          0: ["Authentication verifies identity. It doesn't decide who can modify what."],
          2: ["Encryption protects data, not permissions."],
          3: ["Segmentation divides networks, not user permissions."]
        }
      },
      {
        q: "A developer is given full administrator access 'just in case' they might need it someday. They accidentally delete a critical database. Which principle was violated?",
        opts: ["Need-to-know principle", "Principle of least privilege", "Separation of duties", "Centralized access control"],
        correct: 1,
        hint: "Slide 52: Least privilege means 'users should be given only the permissions they need' and 'no unnecessary or excessive access rights.'",
        wrongReasons: {
          0: ["Need-to-know is about whether access is necessary for a task. This is about giving TOO MUCH access."],
          2: ["Separation of duties divides tasks among people. One person had all the access."],
          3: ["Centralized vs decentralized is about who manages access, not how much is granted."]
        }
      },
      {
        q: "In a hospital, a nurse in the cardiology department can access cardiology patient records but not oncology records, even though both are nurses. What principle is this?",
        opts: ["Least privilege", "Need-to-know principle", "Separation of duties", "Decentralized access control"],
        correct: 1,
        hint: "Slide 53: Need-to-know 'access is granted only if it is necessary for a task' and 'even within the same role, access may vary.'",
        wrongReasons: {
          0: ["Least privilege limits how much access. Need-to-know limits based on task relevance."],
          2: ["Separation of duties divides tasks, not records by department."],
          3: ["Decentralized is about management structure, not this specific rule."]
        }
      },
      {
        q: "A bank requires two employees to approve any transaction over $10,000 — one to initiate and one to authorize. No single employee can complete it alone. What principle is this?",
        opts: ["Least privilege", "Need-to-know", "Separation of duties", "Role-based access control"],
        correct: 2,
        hint: "Slide 55: Separation of duties means 'critical tasks are divided among multiple users' and 'prevents a single user from having excessive control.'",
        wrongReasons: {
          0: ["Least privilege limits access amount, not task division."],
          1: ["Need-to-know limits based on necessity, not task splitting."],
          3: ["RBAC is a model. This is a principle that can be implemented within any model."]
        }
      },
      {
        q: "'Students cannot modify grades' is a security policy. The application code that actually prevents students from submitting grade changes is the:",
        opts: ["Policy", "Mechanism", "Subject", "Resource"],
        correct: 1,
        hint: "Slide 56: Policy 'defines what should be allowed.' Mechanism 'enforces the policy in the system' (e.g., application code or access rules).",
        wrongReasons: {
          0: ["Policy defines what should be allowed."],
          2: ["Subject is the entity performing the action (the student)."],
          3: ["Resource is the target (the grade database)."]
        }
      },
      {
        q: "A large organization uses one central system to manage access permissions for all employees worldwide. What is this approach?",
        opts: ["Decentralized access control", "Centralized access control", "Discretionary access control", "Attribute-based access control"],
        correct: 1,
        hint: "Slide 57: Centralized = 'one system manages access decisions' and is 'easier to enforce consistency.'",
        wrongReasons: {
          0: ["Decentralized = multiple systems manage independently."],
          2: ["DAC is a model where resource owners control access."],
          3: ["ABAC uses attributes for decisions."]
        }
      }
    ]
      },
      {
        id: "5-5", title: "Access Control Models", slides: "58-74",
        concept: {
          title: "Access Control Models",
          body: [
      {"type": "line", "text": "DAC (Discretionary Access Control): Resource OWNER decides who can access. Common in personal systems (Windows, Linux). Flexible but users may grant excessive permissions."},
      {"type": "line", "text": "MAC (Mandatory Access Control): System ENFORCES decisions based on security labels/classifications. Users cannot override. Used in military/government. Strong but rigid."},
      {"type": "line", "text": "RBAC (Role-Based Access Control): Permissions assigned to ROLES, not individuals. Users inherit permissions through roles. Easy to manage at scale. Risk: role explosion."},
      {"type": "line", "text": "ABAC (Attribute-Based Access Control): Decisions based on ATTRIBUTES (user role, department, resource type, time, location). Highly flexible and context-aware. Complex to design."},
      {"type": "line", "text": "Comparison:"},
      {"type": "line", "text": "  DAC: High flexibility, Low-Medium security, Personal systems."},
      {"type": "line", "text": "  MAC: Low flexibility, High security, Military/government."},
      {"type": "line", "text": "  RBAC: Medium flexibility, Medium-High security, Enterprises."},
      {"type": "line", "text": "  ABAC: Very high flexibility, High security, Cloud/modern systems."}
    ]
        },
        questions: [
      {
        q: "In a system where the creator of a file decides who can read or edit it, and can share access with others freely, what access control model is this?",
        opts: ["Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)", "Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)"],
        correct: 1,
        hint: "Slide 61: DAC 'access decisions are controlled by the resource owner' and 'the owner decides who can access resources.'",
        wrongReasons: {
          0: ["MAC is system-enforced. Users cannot override."],
          2: ["RBAC assigns permissions to roles, not resource owners."],
          3: ["ABAC uses attributes, not owner discretion."]
        }
      },
      {
        q: "A military system classifies documents as 'Secret' and 'Top Secret.' Users have clearance levels. A user with 'Secret' clearance CANNOT access 'Top Secret' documents, and no user can override this. What model?",
        opts: ["DAC", "MAC", "RBAC", "ABAC"],
        correct: 1,
        hint: "Slide 63: MAC 'access decisions enforced by the system' and 'based on security labels and classifications.' Users cannot override.",
        wrongReasons: {
          0: ["DAC lets owners override. Users cannot override in this scenario."],
          2: ["RBAC uses roles, not security labels/clearances."],
          3: ["ABAC uses multiple attributes, not just classification labels."]
        }
      },
      {
        q: "A hospital assigns permissions to roles: 'Doctor' can view patient records, 'Nurse' can update vitals, 'Admin' can manage users. All doctors inherit the same permissions automatically. What model?",
        opts: ["DAC", "MAC", "RBAC", "ABAC"],
        correct: 2,
        hint: "Slide 66: RBAC 'access is based on roles assigned to users' and 'permissions are assigned to roles, not individuals.'",
        wrongReasons: {
          0: ["DAC is owner-controlled, not role-based."],
          1: ["MAC uses security labels, not roles."],
          3: ["ABAC uses attributes, not just roles."]
        }
      },
      {
        q: "A system grants access only if: user is a manager AND it's during business hours AND they're on the corporate network. Decisions depend on multiple dynamic conditions. What model?",
        opts: ["DAC", "MAC", "RBAC", "ABAC"],
        correct: 3,
        hint: "Slide 69: ABAC decisions are 'based on attributes' including 'user attributes, resource attributes, environment attributes (time, location).' Policies evaluate multiple conditions dynamically.",
        wrongReasons: {
          0: ["DAC is owner-controlled."],
          1: ["MAC uses fixed labels."],
          2: ["RBAC uses roles alone, not time/location context."]
        }
      },
      {
        q: "A major limitation of RBAC in large organizations is that as the organization grows, the number of specialized roles becomes unmanageable. What is this problem called?",
        opts: ["Policy explosion", "Role explosion", "Attribute overflow", "Permission creep"],
        correct: 1,
        hint: "Slide 68: RBAC limitation includes 'role explosion (too many roles).'",
        wrongReasons: {
          0: ["Policy explosion is not the standard term."],
          2: ["Attribute overflow is not a standard term."],
          3: ["Permission creep is gradual accumulation, not the RBAC-specific issue."]
        }
      },
      {
        q: "Which model offers the highest flexibility and is most suitable for modern cloud systems, but is also the most complex to design and manage?",
        opts: ["DAC", "MAC", "RBAC", "ABAC"],
        correct: 3,
        hint: "Slide 73 comparison table: ABAC has 'Very High' flexibility and 'High' security, with typical use in 'Cloud, modern systems.' Limitation: 'more complex to design and manage.'",
        wrongReasons: {
          0: ["DAC is flexible but low security, for personal systems."],
          1: ["MAC is rigid, for high-security environments."],
          2: ["RBAC is medium flexibility, for enterprises."]
        }
      }
    ]
      },
      {
        id: "5-6", title: "Identity as the New Perimeter", slides: "75-84",
        concept: {
          title: "Identity as the New Security Perimeter",
          body: [
      {"type": "line", "text": "TRADITIONAL MODEL (Perimeter-Based): Protect the internal network. Assume users inside are trusted. Firewalls + segmentation."},
      {"type": "line", "text": "PROBLEM: Users now access from home, mobile, cloud. Network boundary is no longer reliable."},
      {"type": "line", "text": "IDENTITY-CENTRIC SECURITY: Security decisions based on WHO the user is, not WHERE they are located."},
      {"type": "line", "text": "Every access request must be authenticated AND authorized."},
      {"type": "line", "text": "Access is evaluated CONTINUOUSLY, not just at login."},
      {"type": "empty"},
      {"type": "line", "text": "ZERO TRUST: 'Never trust, always verify.' No implicit trust based on network location or device ownership. Every request validated."},
      {"type": "empty"},
      {"type": "line", "text": "CONTINUOUS AUTHENTICATION: Verify identity DURING the session, not just at login. Detect anomalies → re-authenticate or terminate."},
      {"type": "line", "text": "RISK-BASED/ADAPTIVE: Authentication adapts based on context (location, device, time). New country → require additional verification."}
    ]
        },
        questions: [
      {
        q: "In traditional security, organizations assumed that anyone inside the corporate network was trusted. What is the main problem with this model today?",
        opts: ["Firewalls are too expensive", "Users now access from home, mobile, and cloud — the network boundary is no longer reliable", "Employees no longer need to access company systems", "VPNs are always secure"],
        correct: 1,
        hint: "Slide 78: 'Users now access systems from home networks, mobile devices, public internet' and 'the concept of inside vs outside is no longer reliable.'",
        wrongReasons: {
          0: ["Cost is not the fundamental problem."],
          2: ["Employees do need access, just from various locations."],
          3: ["VPNs have limitations and can extend trust to compromised endpoints."]
        }
      },
      {
        q: "A security model whose core principle is 'Never trust, always verify,' where no user or device is trusted simply because it's inside the network. What is this?",
        opts: ["Perimeter-based security", "Zero Trust", "Role-based access control", "Discretionary access control"],
        correct: 1,
        hint: "Slide 80: Zero Trust core principle is 'Never trust, always verify' with 'no implicit trust based on network location or device ownership.'",
        wrongReasons: {
          0: ["Perimeter-based assumes inside = trusted. Zero Trust does the opposite."],
          2: ["RBAC is an access control model, not a security architecture philosophy."],
          3: ["DAC is about who controls permissions, not trust assumptions."]
        }
      },
      {
        q: "Instead of verifying a user's identity only once at login, a system continuously monitors their behavior and triggers re-authentication if anomalies are detected. What is this called?",
        opts: ["Single sign-on", "Continuous authentication", "Risk-based authentication", "Identity federation"],
        correct: 1,
        hint: "Slide 83: Continuous authentication means 'continuously verify user identity during session' and may 'trigger re-authentication or session termination.'",
        wrongReasons: {
          0: ["SSO lets users log in once for multiple services."],
          2: ["Risk-based authentication adapts requirements based on context, but the question describes ongoing session verification."],
          3: ["Federation allows shared identity across organizations."]
        }
      },
      {
        q: "When a user logs in from a new country they've never visited before, the system requires additional verification steps beyond the normal password. What concept is this?",
        opts: ["Multi-factor authentication", "Risk-based and adaptive authentication", "Identity federation", "Network segmentation"],
        correct: 1,
        hint: "Slide 82: Risk-based authentication 'adapts based on context' including 'user location, device used, time of access.' Example: 'Login from new country → require additional verification.'",
        wrongReasons: {
          0: ["MFA is the mechanism, but the specific adaptation based on context is risk-based."],
          2: ["Federation is about trusting identities across organizations."],
          3: ["Segmentation divides networks, not login requirements."]
        }
      },
      {
        q: "Which statement best describes 'Identity as the New Perimeter'?",
        opts: ["Organizations should stop using passwords entirely", "Security decisions are based on who the user is, not where they are located", "Firewalls and network segmentation are no longer needed", "Only biometric authentication should be used"],
        correct: 1,
        hint: "Slide 79: 'Security decisions are now based on: Who the user is. Not where they are located.' Identity becomes the primary trust anchor.",
        wrongReasons: {
          0: ["Identity-centric doesn't mean eliminating passwords entirely (though passwordless is a trend)."],
          2: ["Network defenses are still needed; they just aren't sufficient alone."],
          3: ["Identity-centric doesn't mandate only biometrics."]
        }
      }
    ]
      },
      {
        id: "5-7", title: "Identity Infrastructure & Standards", slides: "85-94",
        concept: {
          title: "Identity Infrastructure & Standards",
          body: [
      {"type": "line", "text": "IdP (Identity Provider) = system that manages user identities and authenticates users. Examples: Google, Microsoft, university login systems."},
      {"type": "line", "text": "SSO (Single Sign-On) = log in once, access multiple services. Centralizes authentication. Benefits: fewer passwords, less password reuse, centralized management, better usability. Risks: single point of failure, compromised main account = all services affected."},
      {"type": "line", "text": "IDENTITY FEDERATION = multiple systems trust a shared identity. Users authenticate with one organization and access another. Common in partnerships."},
      {"type": "line", "text": "STANDARDS:"},
      {"type": "line", "text": "  • OAuth 2.0 = AUTHORIZATION standard (granting access to resources)."},
      {"type": "line", "text": "  • OpenID Connect (OIDC) = AUTHENTICATION standard (verifying user identity)."},
      {"type": "line", "text": "  • SAML = identity federation standard (widely used in enterprises)."},
      {"type": "line", "text": "These enable SSO and secure communication between trusted systems."}
    ]
        },
        questions: [
      {
        q: "A student logs into their university portal once, and that same login session automatically grants access to email, the learning platform, and library services without re-entering credentials. What is this?",
        opts: ["Identity federation", "Single Sign-On (SSO)", "Multi-factor authentication", "Risk-based authentication"],
        correct: 1,
        hint: "Slide 88: SSO 'allows users to log in once and access multiple services' and 'users do not need to authenticate separately for each application.'",
        wrongReasons: {
          0: ["Federation is between different organizations. These are all university services."],
          2: ["MFA requires multiple proofs of identity, not single login for multiple services."],
          3: ["Risk-based adapts requirements based on context."]
        }
      },
      {
        q: "If a user's main SSO account (e.g., their Google account) is compromised, all connected services (email, cloud storage, calendar) are also at risk. What does this illustrate?",
        opts: ["The benefits of SSO", "A single point of failure in SSO", "The need for identity federation", "The effectiveness of MFA"],
        correct: 1,
        hint: "Slide 91: SSO risks include 'if the main account is compromised, all connected services are affected' and 'creates a single point of failure.'",
        wrongReasons: {
          0: ["This is a RISK, not a benefit."],
          2: ["Federation is about cross-organization trust, not this specific risk."],
          3: ["MFA would help protect the account, but the question is about the inherent SSO risk."]
        }
      },
      {
        q: "A researcher at University A uses their university credentials to access a shared research database hosted by University B, because the two universities have a trust agreement. What concept is this?",
        opts: ["Single Sign-On", "Identity Federation", "Multi-factor authentication", "Zero Trust"],
        correct: 1,
        hint: "Slide 92: Identity Federation 'allows multiple systems to trust a shared identity' and 'users can authenticate with one organization and access another.'",
        wrongReasons: {
          0: ["SSO is within one organization. This spans two organizations."],
          2: ["MFA is about multiple verification factors, not cross-org access."],
          3: ["Zero Trust means never trust implicitly. This is about established trust between organizations."]
        }
      },
      {
        q: "Which protocol is used for AUTHORIZATION (granting access to resources), not authentication?",
        opts: ["OpenID Connect (OIDC)", "OAuth 2.0", "SAML", "FIDO2"],
        correct: 1,
        hint: "Slide 94: 'OAuth 2.0 → authorization (granting access to resources).' 'OpenID Connect (OIDC) → authentication.'",
        wrongReasons: {
          0: ["OIDC is for authentication (verifying identity)."],
          2: ["SAML is for identity federation."],
          3: ["FIDO2 is for passwordless authentication."]
        }
      },
      {
        q: "Which standard is widely used in enterprises for identity federation between organizations?",
        opts: ["OAuth 2.0", "OpenID Connect", "SAML", "SSH"],
        correct: 2,
        hint: "Slide 94: 'SAML (Security Assertion Markup Language) → identity federation (widely used in enterprises).'",
        wrongReasons: {
          0: ["OAuth 2.0 is for authorization, not primarily federation."],
          1: ["OIDC is for authentication."],
          3: ["SSH is for secure remote access, not identity federation."]
        }
      }
    ]
      },
      {
        id: "5-8", title: "Attacks on Identity & Access + Final", slides: "95-105",
        concept: {
          title: "Attacks on Identity & Access Control",
          body: [
      {"type": "line", "text": "BROKEN ACCESS CONTROL (OWASP Top 10): access restrictions not properly enforced. Users can perform actions beyond permissions."},
      {"type": "line", "text": "IDOR (Insecure Direct Object Reference): application exposes internal IDs (e.g., /profile?id=123). Attacker changes ID to access others' data."},
      {"type": "line", "text": "PRIVILEGE ESCALATION: gaining higher access rights."},
      {"type": "line", "text": "  • Vertical: user → admin."},
      {"type": "line", "text": "  • Horizontal: user → another user (same privilege level)."},
      {"type": "line", "text": "SESSION HIJACKING: attacker takes control of a valid user session. Steals cookies or intercepts network traffic."},
      {"type": "line", "text": "TOKEN THEFT: modern systems use tokens. If stolen (insecure storage, URLs, logs), attacker can reuse them."},
      {"type": "line", "text": "WEAK AUTHORIZATION CHECKS: system checks authentication but NOT authorization properly. 'If authenticated, access is allowed' = dangerous assumption."},
      {"type": "line", "text": "ATTACK CHAINS: real attacks combine multiple weaknesses (phishing → credentials → IDOR → data theft)."},
      {"type": "line", "text": "DEFENSE: strong auth (MFA), proper authorization checks, validate every request, least privilege, monitor behavior."}
    ]
        },
        questions: [
      {
        q: "A user changes the URL from /profile?id=123 to /profile?id=124 and can view another user's private data because the system only checks if they're logged in, not if they own that profile. What vulnerability is this?",
        opts: ["Brute-force attack", "Insecure Direct Object Reference (IDOR)", "Credential stuffing", "Privilege escalation"],
        correct: 1,
        hint: "Slide 98: IDOR occurs when 'application exposes internal identifiers' and 'attacker changes ID to access another user's data' with 'no proper authorization check.'",
        wrongReasons: {
          0: ["Brute-force tries many passwords."],
          2: ["Credential stuffing uses leaked credentials."],
          3: ["Privilege escalation gains higher rights. This is accessing data at the same level."]
        }
      },
      {
        q: "An attacker with a regular user account discovers a way to gain full administrator privileges on a system. What type of privilege escalation is this?",
        opts: ["Horizontal escalation", "Vertical escalation", "Lateral movement", "Token theft"],
        correct: 1,
        hint: "Slide 99: Vertical escalation = 'user → admin' (gaining higher access rights).",
        wrongReasons: {
          0: ["Horizontal = user → another user at same level."],
          2: ["Lateral movement is moving between systems, not escalating privilege level."],
          3: ["Token theft is stealing session tokens, not escalating privileges."]
        }
      },
      {
        q: "An attacker steals a user's session cookie from an unsecured Wi-Fi network and uses it to access the user's account without knowing their password. What is this?",
        opts: ["Phishing", "Session hijacking", "Credential stuffing", "Brute-force"],
        correct: 1,
        hint: "Slide 100: Session hijacking = 'attacker takes control of a valid user session' and 'does not need to know the password.'",
        wrongReasons: {
          0: ["Phishing tricks users into giving credentials."],
          2: ["Credential stuffing uses leaked username/password pairs."],
          3: ["Brute-force tries many password combinations."]
        }
      },
      {
        q: "A developer writes code that checks 'Is the user logged in?' but never checks 'Is this user allowed to access THIS specific record?' This leads to major data exposure. What is this?",
        opts: ["Strong authorization", "Weak authorization checks", "Multi-factor authentication failure", "Network segmentation failure"],
        correct: 1,
        hint: "Slide 102: Weak authorization checks = 'system checks authentication but not authorization properly' and developers assume 'if authenticated, access is allowed.'",
        wrongReasons: {
          0: ["The code has NO authorization check — the opposite of strong."],
          2: ["MFA is about authentication, not authorization of specific resources."],
          3: ["Network segmentation divides zones but doesn't fix missing authorization logic."]
        }
      },
      {
        q: "An attacker sends a phishing email to steal credentials, logs in successfully, then uses an IDOR vulnerability to access other users' data. What does this demonstrate?",
        opts: ["A single vulnerability caused the breach", "Real-world attacks often combine multiple weaknesses in chains", "MFA would have prevented everything", "Access control models don't matter"],
        correct: 1,
        hint: "Slide 103: 'Real-world attacks often combine multiple weaknesses' in chains, like 'phishing → steal credentials → login → bypass authentication → IDOR → access other users' data.'",
        wrongReasons: {
          0: ["Multiple weaknesses were combined, not just one."],
          2: ["MFA helps but doesn't prevent IDOR — that's an authorization flaw."],
          3: ["The choice of access control model directly affects whether IDOR is possible."]
        }
      },
      {
        q: "Which defensive measure directly prevents the IDOR vulnerability where users can access others' data by changing an ID in the URL?",
        opts: ["Stronger password policies", "Proper authorization checks for every request", "Faster internet connection", "More firewalls"],
        correct: 1,
        hint: "Slide 104: 'Always enforce proper authorization checks' and 'validate every request.'",
        wrongReasons: {
          0: ["Strong passwords don't prevent authorization logic flaws."],
          2: ["Internet speed has nothing to do with authorization."],
          3: ["Firewalls filter traffic but don't check resource ownership."]
        }
      }
    ]
      },
    ]
  },
  {
    id: 6, num: "5",
    title: "Operating System & System Security",
    icon: "🖥️",
    desc: "OS security, trust models, privilege, hardening, patch management",
    color: "#14b8a6",
    levels: [
      {
        id: "6-1", title: "OS Security Fundamentals", slides: "2-8",
        concept: {
          title: "OS Security Fundamentals",
          body: [
      {"type": "line", "text": "Operating systems are at the CORE of every computing system."},
      {"type": "line", "text": "All applications rely on the OS to enforce: Security, Isolation, Access control."},
      {"type": "line", "text": "A vulnerability at the system level can compromise ALL running applications."},
      {"type": "line", "text": "Most attacks succeed NOT due to complex exploits, but because systems are MISCONFIGURED and privileges are POORLY MANAGED."},
      {"type": "line", "text": "A secure application on an insecure system is STILL VULNERABLE."},
      {"type": "line", "text": "Typical attack path: Initial access → Execution with limited privileges → Privilege escalation → Full system compromise."},
      {"type": "line", "text": "Small misconfigurations can enable large attacks. OS security determines whether an attack stops early or escalates."}
    ]
        },
        questions: [
      {
        q: "What is the core reason most attacks succeed according to the module?",
        opts: ["Advanced zero-day exploits", "Systems are misconfigured and privileges are poorly managed", "Weak encryption algorithms", "Attackers have state-sponsored resources"],
        correct: 1,
        hint: "Slide 4: 'In reality, most attacks succeed because: systems are misconfigured, privileges are poorly managed.'",
        wrongReasons: {
          0: ["Slide 4: 'Many assume security failures come from weak encryption or complex exploits.' But in reality, most succeed due to misconfiguration."],
          2: ["Weak encryption is not highlighted as the main reason."],
          3: ["State-sponsored resources are not the focus — simple misconfigurations are."]
        }
      },
      {
        q: "A company deploys a perfectly coded web application on a server running with root privileges and default passwords. The application gets compromised. What is the key lesson?",
        opts: ["The developers wrote bad code", "A secure application on an insecure system is still vulnerable", "The attackers used advanced techniques", "Encryption was too weak"],
        correct: 1,
        hint: "Slide 4: 'A secure application on an insecure system is still vulnerable.' Security must be enforced at the system level.",
        wrongReasons: {
          0: ["The module explicitly states the application can be secure but the system around it may not be."],
          2: ["The module says attackers exploit simple weaknesses, not necessarily advanced techniques."],
          3: ["Weak encryption is not the issue described."]
        }
      },
      {
        q: "Which describes the typical attack path through a system?",
        opts: ["Immediate full system compromise via single exploit", "Initial access → execution with limited privileges → privilege escalation → full compromise", "Social engineering → encryption cracking → data exfiltration", "Physical theft → network scanning → malware deployment"],
        correct: 1,
        hint: "Slide 5: 'Most system compromises follow a similar pattern: Initial access → Execution within limited privileges → Privilege escalation → Full system compromise.'",
        wrongReasons: {
          0: ["Slide 5: Attackers 'rarely rely on a single flaw; they combine weaknesses.'"],
          2: ["Encryption cracking is not part of the typical attack path described."],
          3: ["Physical theft is not the typical digital attack path."]
        }
      },
      {
        q: "What determines whether an attack stops early or escalates to full compromise?",
        opts: ["The complexity of the attacker's tools", "The operating system's security configuration", "The strength of the application's encryption", "The physical security of the data center"],
        correct: 1,
        hint: "Slide 5: 'OS security determines whether an attack stops early or escalates.'",
        wrongReasons: {
          0: ["The module emphasizes simple misconfigurations, not tool complexity."],
          2: ["Application encryption doesn't stop system-level privilege escalation."],
          3: ["Physical security is not the focus of this module's attack path."]
        }
      }
    ]
      },
      {
        id: "6-2", title: "Trust Models & Privilege Separation", slides: "9-15",
        concept: {
          title: "Trust Models & Privilege Separation",
          body: [
      {"type": "line", "text": "TRUST MODEL: defines which components are trusted and which must be restricted."},
      {"type": "line", "text": "TRUSTED COMPONENTS: OS kernel, core system services."},
      {"type": "line", "text": "UNTRUSTED COMPONENTS: user applications, external inputs."},
      {"type": "line", "text": "The OS enforces restrictions to prevent untrusted components from affecting critical parts."},
      {"type": "empty"},
      {"type": "line", "text": "TRUSTED COMPUTING BASE (TCB): all components critical to system security."},
      {"type": "line", "text": "  • Includes: Kernel, Authentication mechanisms, Core system services."},
      {"type": "line", "text": "  • If any part of TCB is compromised, the entire system can no longer be trusted."},
      {"type": "line", "text": "  • Larger TCB = larger attack surface. TCB must be MINIMAL and WELL-AUDITED."},
      {"type": "empty"},
      {"type": "line", "text": "USER SPACE vs KERNEL SPACE:"},
      {"type": "line", "text": "  • Enforced by CPU hardware + OS design."},
      {"type": "line", "text": "  • Prevents user programs from directly manipulating critical resources."},
      {"type": "line", "text": "  • Limits impact of bugs and exploits."},
      {"type": "line", "text": "  • If bypassed, attacker gains kernel-level control (full system compromise)."}
    ]
        },
        questions: [
      {
        q: "Which components are considered part of the Trusted Computing Base (TCB)?",
        opts: ["User applications and web browsers", "Kernel, authentication mechanisms, and core system services", "External APIs and third-party libraries", "Social media plugins"],
        correct: 1,
        hint: "Slide 13: TCB includes 'Kernel, Authentication mechanisms, Core system services.' If compromised, 'the entire system can no longer be trusted.'",
        wrongReasons: {
          0: ["User applications are UNTRUSTED components."],
          2: ["External APIs are not part of the core TCB."],
          3: ["Social media plugins are external, untrusted components."]
        }
      },
      {
        q: "A system administrator installs many non-essential drivers and services into the kernel space to ensure maximum compatibility. From a security perspective, what is the problem?",
        opts: ["It makes the system faster", "A larger TCB means a larger attack surface", "It improves user experience", "It reduces memory usage"],
        correct: 1,
        hint: "Slide 13: 'Larger TCB = larger attack surface' and 'Security design aims to reduce and protect the TCB.'",
        wrongReasons: {
          0: ["More kernel components does not necessarily make the system faster."],
          2: ["User experience is not the security concern here."],
          3: ["More components typically use more memory, not less."]
        }
      },
      {
        q: "A web browser crashes, but the rest of the operating system continues running normally. Which security mechanism makes this possible?",
        opts: ["Firewall filtering", "User space vs kernel space separation", "Network segmentation", "Password hashing"],
        correct: 1,
        hint: "Slide 14: 'Prevents user programs from directly manipulating critical resources' and 'Limits impact of bugs and exploits.' Example: 'A browser crash does not crash the OS.'",
        wrongReasons: {
          0: ["Firewalls filter network traffic, not process crashes."],
          2: ["Network segmentation divides networks, not process memory."],
          3: ["Password hashing protects credentials, not system stability."]
        }
      },
      {
        q: "An attacker discovers a vulnerability that allows them to execute code inside the kernel space, bypassing all user-space restrictions. What level of control do they gain?",
        opts: ["Limited to the current user's files", "Full kernel-level control over the entire system", "Only network traffic access", "Read-only access to system files"],
        correct: 1,
        hint: "Slide 14: 'If this boundary is bypassed, attacker gains kernel-level control' and 'This boundary is one of the strongest protections in modern OS.'",
        wrongReasons: {
          0: ["User-space restrictions no longer apply in kernel space."],
          2: ["Kernel-level access is far more than just network traffic."],
          3: ["Kernel compromise grants full read/write/execute control, not read-only."]
        }
      },
      {
        q: "The OS enforces restrictions to prevent untrusted components from affecting critical parts. What is an example of an UNTRUSTED component?",
        opts: ["OS kernel", "User applications and external inputs", "Core system services", "Authentication mechanisms"],
        correct: 1,
        hint: "Slide 12: Untrusted components include 'User applications, External inputs.' Trusted components include 'OS kernel, Core system services.'",
        wrongReasons: {
          0: ["The kernel is a TRUSTED component."],
          2: ["Core system services are trusted."],
          3: ["Authentication mechanisms are part of the TCB (trusted)."]
        }
      }
    ]
      },
      {
        id: "6-3", title: "Privilege Levels, PoLP & Escalation", slides: "16-30",
        concept: {
          title: "Privilege Levels, Least Privilege & Escalation",
          body: [
      {"type": "line", "text": "PRIVILEGE LEVELS determine what a user or process is allowed to do."},
      {"type": "line", "text": "Linux: Root user (UID 0) has full system control. Regular users have limited permissions."},
      {"type": "line", "text": "Windows: Uses UAC (User Account Control) to manage elevation. Even administrators run with limited privileges by default."},
      {"type": "line", "text": "Commands: whoami (current user), id (UID/groups), sudo -l (check escalation rights)."},
      {"type": "empty"},
      {"type": "line", "text": "PRINCIPLE OF LEAST PRIVILEGE (PoLP): give ONLY the permissions necessary."},
      {"type": "line", "text": "Applies to: Users, Applications, Services."},
      {"type": "line", "text": "Key idea: 'Do not trust more than required.'"},
      {"type": "empty"},
      {"type": "line", "text": "PRIVILEGE ESCALATION: gaining higher privileges than allowed."},
      {"type": "line", "text": "  • Vertical: user → admin/root."},
      {"type": "line", "text": "  • Horizontal: user → another user (same privilege level)."},
      {"type": "line", "text": "  • Small vulnerability + high privilege = full system compromise."},
      {"type": "empty"},
      {"type": "line", "text": "PROCESS ISOLATION: each process runs in its own memory space. One compromised process does not infect all."}
    ]
        },
        questions: [
      {
        q: "In Linux, which user ID (UID) represents the root account with full system control?",
        opts: ["UID 1000", "UID 0", "UID 1", "UID 999"],
        correct: 1,
        hint: "Slide 17: Root user has 'UID 0' and 'Full system control' including 'Read, Modify or Delete any file.'",
        wrongReasons: {
          0: ["UID 1000 is typically the first regular user account."],
          2: ["UID 1 is usually a system service account, not root."],
          3: ["UID 999 is not the root account."]
        }
      },
      {
        q: "In Windows, even administrators run with limited privileges by default. What mechanism requires explicit approval before granting elevated privileges?",
        opts: ["Windows Defender", "User Account Control (UAC)", "Active Directory", "Task Manager"],
        correct: 1,
        hint: "Slide 20: Windows 'uses User Account Control (UAC) to manage elevation' and 'Elevation requires explicit approval via UAC prompt.'",
        wrongReasons: {
          0: ["Windows Defender is antivirus, not privilege management."],
          2: ["Active Directory manages identities across networks, not local elevation prompts."],
          3: ["Task Manager shows processes but doesn't control privilege elevation."]
        }
      },
      {
        q: "A server process is configured to run with root privileges even though it only needs to read from a single directory. An attacker compromises this process. What principle was violated, and what is the likely result?",
        opts: ["Separation of duties; limited data theft", "Principle of least privilege; full system compromise", "Need-to-know principle; horizontal escalation", "Defense in depth; temporary access"],
        correct: 1,
        hint: "Slide 24: PoLP means 'give only the permissions necessary to perform a task.' If violated, 'any compromise leads to full system control.' Slide 28: 'Privilege + Vulnerability = Impact' — high privilege means system-wide compromise.",
        wrongReasons: {
          0: ["Separation of duties divides tasks among people. The issue here is excessive privileges."],
          2: ["Need-to-know is about access necessity, not privilege level. Horizontal escalation moves between users at same level."],
          3: ["Defense in depth uses multiple layers. The issue is a single layer having too much privilege."]
        }
      },
      {
        q: "An attacker compromises a regular user account and then exploits a misconfigured sudo permission to gain root access. What type of privilege escalation is this?",
        opts: ["Horizontal escalation", "Vertical escalation", "Lateral movement", "Session hijacking"],
        correct: 1,
        hint: "Slide 27: Vertical escalation = 'user → admin/root' (gaining higher privileges).",
        wrongReasons: {
          0: ["Horizontal escalation = user → another user at same level."],
          2: ["Lateral movement moves between systems, not privilege levels."],
          3: ["Session hijacking steals an existing session, not escalates privileges."]
        }
      },
      {
        q: "Which Linux command shows the current user's UID, group memberships, and privilege details?",
        opts: ["whoami", "id", "sudo -l", "netstat"],
        correct: 1,
        hint: "Slide 18: 'Check detailed identity: id' which shows 'User ID (UID), Group memberships.'",
        wrongReasons: {
          0: ["whoami shows only the current username, not groups or UID."],
          2: ["sudo -l shows what sudo privileges the user has, not their current identity details."],
          3: ["netstat shows network connections, not user identity."]
        }
      },
      {
        q: "A vulnerability in a low-privilege user application can only modify files in that user's home directory. The same vulnerability in a root-owned system service could modify any file on the system. What principle does this illustrate?",
        opts: ["Encryption strength", "Privilege + Vulnerability = Impact", "Network segmentation", "Social engineering"],
        correct: 1,
        hint: "Slide 28: 'A vulnerability alone is not always critical. Impact depends on privilege level of exploited process.' 'Low privilege → Limited damage. High privilege → System-wide compromise.'",
        wrongReasons: {
          0: ["Encryption is not relevant to this scenario about privilege levels."],
          2: ["Network segmentation divides networks, not process privileges."],
          3: ["Social engineering manipulates humans, not system privileges."]
        }
      }
    ]
      },
      {
        id: "6-4", title: "System Hardening", slides: "31-47",
        concept: {
          title: "System Hardening",
          body: [
      {"type": "line", "text": "SYSTEM HARDENING = securing a system by reducing vulnerabilities through configuration changes, service management, and access restrictions."},
      {"type": "line", "text": "Goal: Minimize exposure to threats. A hardened system is Minimal, Controlled, and Monitored."},
      {"type": "empty"},
      {"type": "line", "text": "ATTACK SURFACE REDUCTION:"},
      {"type": "line", "text": "  • Disable unnecessary services (FTP servers, remote access)."},
      {"type": "line", "text": "  • Close unused ports. Only essential services should be exposed."},
      {"type": "line", "text": "  • Commands: ss -tuln, netstat -tuln (Linux), netstat -ano (Windows)."},
      {"type": "empty"},
      {"type": "line", "text": "SECURE CONFIGURATION:"},
      {"type": "line", "text": "  • Avoid default configurations and default credentials (admin/admin, root/root)."},
      {"type": "line", "text": "  • Enforce strong authentication."},
      {"type": "line", "text": "  • Apply security updates."},
      {"type": "line", "text": "  • Restrict user privileges."},
      {"type": "line", "text": "  • Enable logging and monitoring."},
      {"type": "empty"},
      {"type": "line", "text": "DEFENSE IN DEPTH: multiple layers of protection (firewall + auth + logging). If one layer fails, others still protect."},
      {"type": "line", "text": "TRADE-OFF: Secure configurations often restrict functionality. Users may relax settings for convenience."},
      {"type": "empty"},
      {"type": "line", "text": "HARDENING TOOLS: Ansible (automation), OpenSCAP and Lynis (auditing against benchmarks)."}
    ]
        },
        questions: [
      {
        q: "What is the primary goal of system hardening?",
        opts: ["To add more features and services", "To minimize the system's exposure to threats", "To make the system run faster", "To simplify user interfaces"],
        correct: 1,
        hint: "Slide 33: 'System hardening is the process of securing a system by reducing its vulnerabilities' and objective is to 'Minimize the system's exposure to threats.'",
        wrongReasons: {
          0: ["Hardening removes unnecessary services, not adds them."],
          2: ["Performance is not the primary goal of hardening."],
          3: ["UI simplicity is unrelated to security hardening."]
        }
      },
      {
        q: "A server has ports 21 (FTP), 22 (SSH), 80 (HTTP), and 3306 (MySQL) all open to the internet, but the company only uses HTTP for its public website. What hardening step is most urgent?",
        opts: ["Upgrade the web server software", "Close unnecessary ports and disable unused services", "Change the company logo", "Add more RAM"],
        correct: 1,
        hint: "Slide 36: 'Open ports indicate services listening for connections' and 'Hardening involves closing unnecessary ports. Only essential services should be exposed.'",
        wrongReasons: {
          0: ["Upgrading software is good but doesn't address the immediate exposure."],
          2: ["The logo has no security relevance."],
          3: ["More RAM is a performance improvement, not a security hardening step."]
        }
      },
      {
        q: "A router is deployed with the default username 'admin' and password 'admin.' Within hours, an attacker logs in and reconfigures the network. What hardening failure occurred?",
        opts: ["The firewall was too strong", "Default credentials were not changed", "The encryption was outdated", "The network was too slow"],
        correct: 1,
        hint: "Slide 39: 'Many systems ship with default usernames and passwords' like 'admin/admin' and 'Failure to change defaults leads to immediate compromise.' Hardening requires 'enforcing unique, strong credentials.'",
        wrongReasons: {
          0: ["A strong firewall would help, not hinder. The issue was credentials."],
          2: ["Encryption wasn't the problem — the default password was."],
          3: ["Network speed is irrelevant to this credential-based attack."]
        }
      },
      {
        q: "A company uses a firewall for network protection, strong authentication for user access, and detailed logging for monitoring. Even if the firewall fails, the other protections remain. What security concept is this?",
        opts: ["Single sign-on", "Defense in depth", "Identity federation", "Zero-day prevention"],
        correct: 1,
        hint: "Slide 41: 'Defense in depth' means 'multiple layers of protection are required' and 'If one layer fails, others still protect the system.'",
        wrongReasons: {
          0: ["SSO lets users log in once for multiple services."],
          2: ["Identity federation is cross-organizational identity sharing."],
          3: ["Zero-day prevention is not a specific concept — zero-days are unknown vulnerabilities."]
        }
      },
      {
        q: "A developer sets a Linux file permission to 'chmod 777' on a critical system file so their script can access it easily. This means anyone can read, write, and execute the file. What is the security risk?",
        opts: ["The file becomes encrypted", "Any user can modify critical files, leading to data tampering or privilege escalation", "The file is automatically deleted", "The system becomes faster"],
        correct: 1,
        hint: "Slide 72: 'File permission: chmod 777 (read/write/execute for all). Any user can modify critical files' leading to 'Data tampering, Privilege escalation.'",
        wrongReasons: {
          0: ["chmod 777 doesn't encrypt — it opens access to everyone."],
          2: ["The file is not deleted."],
          3: ["More access doesn't improve performance."]
        }
      },
      {
        q: "Which of these is a cross-platform tool that automates configuration enforcement, service management, and security policy deployment?",
        opts: ["OpenSCAP", "Ansible", "Lynis", "nmap"],
        correct: 1,
        hint: "Slide 46: 'Tools such as Ansible automate configuration enforcement, service management and security policy deployment.'",
        wrongReasons: {
          0: ["OpenSCAP is an auditing tool that assesses against benchmarks, not primarily automation."],
          2: ["Lynis is an auditing tool for security assessment."],
          3: ["nmap is a network scanner, not a configuration automation tool."]
        }
      }
    ]
      },
      {
        id: "6-5", title: "Patch & Configuration Management", slides: "48-64",
        concept: {
          title: "Patch & Configuration Management",
          body: [
      {"type": "line", "text": "PATCH MANAGEMENT = identifying, acquiring, and applying updates to fix vulnerabilities."},
      {"type": "line", "text": "VULNERABILITY LIFECYCLE:"},
      {"type": "line", "text": "  1. Discovery: vulnerability is unknown (zero-day)."},
      {"type": "line", "text": "  2. Disclosure: vendor/public becomes aware."},
      {"type": "line", "text": "  3. Patch: vendor releases fix."},
      {"type": "line", "text": "  4. Exploitation: attackers analyze patch and develop exploits."},
      {"type": "line", "text": "Systems that remain unpatched after disclosure become HIGHLY VULNERABLE."},
      {"type": "line", "text": "WannaCry (2017) exploited a known vulnerability with a patch available — systems not updated were compromised."},
      {"type": "empty"},
      {"type": "line", "text": "CONFIGURATION MANAGEMENT ensures systems are consistently configured."},
      {"type": "line", "text": "CONFIGURATION DRIFT = systems deviate from intended configuration over time. Creates hidden vulnerabilities."},
      {"type": "empty"},
      {"type": "line", "text": "AUTOMATION TOOLS: Ansible, Puppet, Microsoft Endpoint Configuration Manager."},
      {"type": "line", "text": "PATCHING DECISION: Immediate patching (reduces risk) vs. Delayed (ensures stability). Risk-based approach prioritizes critical vulnerabilities."}
    ]
        },
        questions: [
      {
        q: "The WannaCry ransomware attack in 2017 spread rapidly and caused massive damage. The vulnerability it exploited had a security patch released by Microsoft two months earlier. What does this demonstrate?",
        opts: ["The patch was ineffective", "Systems that are not updated become easy and predictable targets", "Ransomware only affects Linux systems", "Encryption cannot stop ransomware"],
        correct: 1,
        hint: "Slide 53: WannaCry case study. Slide 54: 'The issue is often not lack of security solutions, but a failure to apply available fixes' and 'Systems are compromised due to known vulnerabilities.'",
        wrongReasons: {
          0: ["The patch was effective — systems that applied it were not affected."],
          2: ["WannaCry primarily affected Windows systems, not Linux."],
          3: ["The issue was about patching, not encryption effectiveness."]
        }
      },
      {
        q: "After a vendor releases a security patch, attackers often analyze the patch to understand the flaw and quickly develop an exploit. What stage of the vulnerability lifecycle is this?",
        opts: ["Discovery", "Disclosure", "Patch", "Exploitation"],
        correct: 3,
        hint: "Slide 51: In the vulnerability lifecycle, after the patch is released, 'Attackers analyze patches to understand the flaw' and 'Exploits are often developed shortly after patch release.'",
        wrongReasons: {
          0: ["Discovery is when the vulnerability is first found/unknown."],
          1: ["Disclosure is when it becomes publicly known."],
          2: ["Patch is when the fix is released by the vendor."]
        }
      },
      {
        q: "Over time, one server in a data center receives security patches while another identical server does not. They gradually have different configurations and vulnerabilities. What is this phenomenon called?",
        opts: ["Role explosion", "Configuration drift", "Privilege escalation", "Session hijacking"],
        correct: 1,
        hint: "Slide 58: 'Configuration drift occurs when systems deviate from intended configuration' and 'Example: One server patched, another not.' Drift 'creates hidden vulnerabilities.'",
        wrongReasons: {
          0: ["Role explosion is an RBAC problem with too many roles."],
          2: ["Privilege escalation is gaining higher access rights."],
          3: ["Session hijacking is stealing user sessions."]
        }
      },
      {
        q: "A system administrator runs 'apt list --upgradable' on a Debian server and sees 47 packages with pending updates. What does this indicate about the system's security posture?",
        opts: ["The system is fully secure", "Systems with many pending updates have higher risk exposure", "Updates are automatically applied", "The system has no vulnerabilities"],
        correct: 1,
        hint: "Slide 55: 'Systems with many pending updates → Higher risk exposure.' The command 'apt list --upgradable' displays available package updates and indicates potential vulnerabilities.",
        wrongReasons: {
          0: ["Pending updates indicate unpatched vulnerabilities, not full security."],
          2: ["apt list --upgradable only shows available updates; they are not automatically applied."],
          3: ["Pending updates often include security fixes for known vulnerabilities."]
        }
      },
      {
        q: "A company delays applying a critical security patch because they are worried it might break a legacy application. From an attacker's perspective, what does this delay create?",
        opts: ["A more secure environment", "A low-effort opportunity for exploitation", "Better system stability", "Improved user experience"],
        correct: 1,
        hint: "Slide 63: 'Unpatched systems are Low-effort opportunities' and 'Patch delays directly benefit attackers.'",
        wrongReasons: {
          0: ["Delaying patches increases risk, not security."],
          2: ["Stability is the company's concern, not the attacker's perspective."],
          3: ["User experience is not the attacker's focus."]
        }
      },
      {
        q: "Which is a key trade-off when deciding when to apply security patches?",
        opts: ["Security vs convenience", "Security vs availability", "Speed vs color", "Cost vs brand reputation"],
        correct: 1,
        hint: "Slide 62: The decision scenario shows the trade-off: 'Immediate patching: reduces security risk' vs 'Delayed patching: ensures system stability.' The core trade-off is 'Security vs availability.'",
        wrongReasons: {
          0: ["Convenience is a factor but the module explicitly frames it as security vs availability/stability."],
          2: ["Color has no relevance."],
          3: ["Brand reputation is not the primary technical trade-off."]
        }
      }
    ]
      },
      {
        id: "6-6", title: "Misconfiguration as Attack Vector", slides: "65-78",
        concept: {
          title: "Misconfiguration as an Attack Vector",
          body: [
      {"type": "line", "text": "MISCONFIGURATION = incorrect or insecure system setup. It is a HUMAN or PROCESS error, not a software flaw."},
      {"type": "line", "text": "Often introduced during deployment or maintenance."},
      {"type": "line", "text": "Difficult to detect without proper auditing."},
      {"type": "empty"},
      {"type": "line", "text": "Why misconfiguration is dangerous:"},
      {"type": "line", "text": "  • Does not require complex exploits."},
      {"type": "line", "text": "  • Often provides direct access to sensitive resources."},
      {"type": "line", "text": "  • Easily discovered using automated scanning tools."},
      {"type": "line", "text": "  • Can bypass intended security mechanisms."},
      {"type": "empty"},
      {"type": "line", "text": "Common types:"},
      {"type": "line", "text": "  • Open/unnecessary ports."},
      {"type": "line", "text": "  • Weak or excessive permissions (chmod 777, 'Everyone' access)."},
      {"type": "line", "text": "  • Default credentials left unchanged."},
      {"type": "line", "text": "  • Unprotected services (database without password)."},
      {"type": "line", "text": "  • Disabled security mechanisms (firewall off, antivirus disabled)."},
      {"type": "line", "text": "  • Improper access control settings."},
      {"type": "line", "text": "  • Exposed sensitive data or directories."},
      {"type": "empty"},
      {"type": "line", "text": "Examples: Open cloud storage (S3 buckets), directory listing enabled, weak file permissions, exposed services, disabled security controls."},
      {"type": "empty"},
      {"type": "line", "text": "Why it happens: Default configs not reviewed, time pressure, poor documentation, lack of security awareness, lack of audits, complexity, over-reliance on 'secure by default.'"},
      {"type": "empty"},
      {"type": "line", "text": "Key insight: Systems are often secure by design, but INSECURE in deployment."}
    ]
        },
        questions: [
      {
        q: "An attacker finds a database server accessible on the internet with no password required. They connect directly and steal all data without using any exploit. What type of security issue is this?",
        opts: ["Zero-day vulnerability", "Misconfiguration", "Advanced persistent threat", "Social engineering"],
        correct: 1,
        hint: "Slide 67: 'Misconfiguration is not a software flaw; it is a human or process error.' Slide 73: 'Database accessible without password — attackers connect directly; no exploitation required.'",
        wrongReasons: {
          0: ["A zero-day is an unknown software flaw. No exploit was used here — the database was simply unprotected by configuration."],
          2: ["An APT is a long-term, sophisticated attack campaign. This was immediate and simple."],
          3: ["Social engineering manipulates humans. No human was tricked."]
        }
      },
      {
        q: "A company believes their cloud service provider secures everything automatically, so they never review the access settings on their cloud storage buckets. The buckets are left publicly readable. What cognitive bias contributed to this?",
        opts: ["Separation of duties", "Over-reliance on 'secure by default'", "Principle of least privilege", "Defense in depth"],
        correct: 1,
        hint: "Slide 76: One cause of misconfiguration is 'Over-reliance on secure by default assumptions.' Slide 77: 'Systems are often: Secure by design, Insecure in deployment.'",
        wrongReasons: {
          0: ["Separation of duties divides tasks among people. This is about assuming security without verification."],
          2: ["Least privilege would mean restricting access, not leaving it open."],
          3: ["Defense in depth uses multiple layers. This is the opposite — relying on a single assumption."]
        }
      },
      {
        q: "Which of the following is NOT listed as a common type of misconfiguration in the lecture?",
        opts: ["Open or unnecessary ports", "Weak or excessive permissions", "Using quantum encryption", "Default credentials left unchanged"],
        correct: 2,
        hint: "Slide 69 lists common types: Open or unnecessary ports, Weak or excessive permissions, Default credentials left unchanged, Unprotected services, Disabled security mechanisms, Improper access control settings, Exposed sensitive data or directories. Quantum encryption is not mentioned.",
        wrongReasons: {
          0: ["Open/unnecessary ports IS listed (slide 69)."],
          1: ["Weak or excessive permissions IS listed (slide 69)."],
          3: ["Default credentials left unchanged IS listed (slide 69)."]
        }
      },
      {
        q: "A web server has directory listing enabled, allowing anyone to view all files in a directory by simply visiting a URL. An attacker finds backup files containing database passwords. What misconfiguration enabled this?",
        opts: ["Strong firewall rules", "Directory listing enabled", "Multi-factor authentication", "Network segmentation"],
        correct: 1,
        hint: "Slide 71: 'Directory Listing Enabled' is given as a misconfiguration example. It exposes files that should not be visible.",
        wrongReasons: {
          0: ["Strong firewall rules would prevent access, not enable it."],
          2: ["MFA would add authentication, but the issue is that no auth was needed to browse directories."],
          3: ["Segmentation divides networks, not directory visibility."]
        }
      },
      {
        q: "A system administrator disables the firewall and turns off antivirus on a production server because they were causing performance issues. What type of misconfiguration is this?",
        opts: ["Weak file permissions", "Disabled security controls", "Default credentials", "Open cloud storage"],
        correct: 1,
        hint: "Slide 74: 'Security features may be disabled for convenience' including 'Firewall turned off, Antivirus disabled.' This is a misconfiguration of 'Disabled security controls' (slide 69).",
        wrongReasons: {
          0: ["File permissions are about who can access files, not active security tools."],
          2: ["Default credentials are unchanged factory passwords."],
          3: ["Open cloud storage is about misconfigured cloud buckets."]
        }
      },
      {
        q: "Why is misconfiguration often easier to exploit than software vulnerabilities?",
        opts: ["It requires nation-state resources", "It does not require complex exploits and often provides direct access", "It only affects Linux systems", "It cannot be detected by attackers"],
        correct: 1,
        hint: "Slide 68: Misconfiguration 'does not require complex exploits,' 'often provides direct access to sensitive resources,' and is 'easily discovered using automated scanning tools.' Slide 77: 'Misconfiguration is often easier to exploit than vulnerabilities.'",
        wrongReasons: {
          0: ["Slide 68: misconfiguration 'does not require complex exploits' and is easily discovered."],
          2: ["Misconfiguration affects all systems — Linux, Windows, cloud, etc."],
          3: ["Slide 68: misconfiguration is 'easily discovered using automated scanning tools.'"]
        }
      }
    ]
      },
      {
        id: "6-7", title: "Conclusion & Advanced Topics", slides: "79-83",
        concept: {
          title: "Conclusion & Advanced OS Security Topics",
          body: [
      {"type": "line", "text": "Key takeaways from Module 5:"},
      {"type": "line", "text": "  • OS security is the foundation of all application security."},
      {"type": "line", "text": "  • Trust models, privilege separation, and the TCB must be protected."},
      {"type": "line", "text": "  • System hardening reduces attack surface before attacks occur."},
      {"type": "line", "text": "  • Patch management fixes known vulnerabilities — delayed patching benefits attackers."},
      {"type": "line", "text": "  • Misconfiguration is one of the most common and dangerous attack vectors."},
      {"type": "line", "text": "  • Security is a continuous process, not a one-time task."},
      {"type": "line", "text": "  • Most systems are not broken by design; they are misconfigured in deployment."},
      {"type": "line", "text": "  • Attackers don't need complex exploits — simple mistakes are often enough."},
      {"type": "line", "text": "  • A well-secured system assumes breaches can happen and limits their impact."},
      {"type": "empty"},
      {"type": "line", "text": "Advanced topics beyond the basics:"},
      {"type": "line", "text": "  • Kernel hardening."},
      {"type": "line", "text": "  • Memory protection techniques (preventing code injection)."},
      {"type": "line", "text": "  • Sandboxing and isolation (browsers, containers)."},
      {"type": "line", "text": "  • MAC (Mandatory Access Control) — fine-grained policies beyond user/group."},
      {"type": "line", "text": "  • Virtualization and container security."},
      {"type": "line", "text": "  • Secure boot mechanisms (ensuring system integrity from startup)."}
    ]
        },
        questions: [
      {
        q: "Which statement best summarizes the module's conclusion about system security?",
        opts: ["Software vulnerabilities are the only real threat", "Most systems are not broken by design; they are misconfigured in deployment", "Linux is always more secure than Windows", "Firewalls alone are sufficient for OS security"],
        correct: 1,
        hint: "Slide 81: 'Most systems are not broken, they are misconfigured' and 'Security is not a product, It is a continuous process.'",
        wrongReasons: {
          0: ["The module explicitly states misconfiguration is often more dangerous than software flaws."],
          2: ["Slide 23: 'Security depends on correct configuration, not OS choice.'"],
          3: ["The module emphasizes defense in depth — multiple layers, not just firewalls."]
        }
      },
      {
        q: "Which advanced OS security mechanism ensures system integrity by verifying that only trusted software runs from startup?",
        opts: ["User Account Control", "Secure boot mechanisms", "Directory listing", "Configuration drift"],
        correct: 1,
        hint: "Slide 82: Advanced OS security topics include 'Secure boot mechanisms: Ensuring system integrity from startup.'",
        wrongReasons: {
          0: ["UAC manages privilege elevation in Windows, not startup integrity."],
          2: ["Directory listing is a web server feature, not an OS security mechanism."],
          3: ["Configuration drift is a problem, not a security mechanism."]
        }
      },
      {
        q: "The module mentions that security is not one mechanism but a combination of controls. Which of the following is NOT one of the elements that together define system security posture?",
        opts: ["Trust and privilege models", "System hardening", "Marketing and branding", "Patch and configuration management"],
        correct: 2,
        hint: "Slide 79: 'These elements together define System security posture: Trust and privilege models, System hardening, Patch management, Misconfiguration risks.' Marketing is not a security control.",
        wrongReasons: {
          0: ["Trust and privilege models ARE listed in the conclusion (slide 79)."],
          1: ["System hardening IS listed."],
          3: ["Patch and configuration management IS listed."]
        }
      },
      {
        q: "A well-secured system assumes that breaches can happen. What is the primary goal in this mindset?",
        opts: ["Prevent all attacks completely", "Limit the impact of attacks when they occur", "Hide all vulnerabilities from attackers", "Make the system invisible on the network"],
        correct: 1,
        hint: "Slide 81: 'A well-secured system assumes breaches can happen' and 'Your role is to design systems that fail safely.' The goal is to limit impact, not prevent everything.",
        wrongReasons: {
          0: ["Slide 81: 'The goal of OS security is not only to prevent attacks, But to limit their impact.'"],
          2: ["Hiding vulnerabilities is security through obscurity, not the module's approach."],
          3: ["Being invisible is not possible or the goal."]
        }
      }
    ]
      },
      {
        id: "6-8", title: "Final Certification", slides: "2-83",
        concept: {
          title: "Final Certification: All Module 5 Concepts",
          body: [
      {"type": "line", "text": "Comprehensive review of all Module 5 content:"},
      {"type": "line", "text": "  • OS enforces security, isolation, and access control for all applications."},
      {"type": "line", "text": "  • TCB must be minimal and well-audited. User space vs kernel space separation is critical."},
      {"type": "line", "text": "  • Linux: root (UID 0) vs regular users. Windows: UAC for elevation."},
      {"type": "line", "text": "  • PoLP: give only necessary permissions. Privilege escalation transforms small flaws into full compromise."},
      {"type": "line", "text": "  • System hardening: reduce attack surface, close unnecessary ports, change defaults, defense in depth."},
      {"type": "line", "text": "  • Patch management: vulnerability lifecycle (discovery → disclosure → patch → exploitation). Unpatched systems = easy targets."},
      {"type": "line", "text": "  • Configuration drift creates hidden vulnerabilities. Automation (Ansible, Puppet) improves consistency."},
      {"type": "line", "text": "  • Misconfiguration is a human/process error, not a software flaw. Often easier to exploit than vulnerabilities."},
      {"type": "line", "text": "  • Common misconfigs: default creds, open ports, weak permissions, disabled controls, exposed services."},
      {"type": "line", "text": "  • Advanced: kernel hardening, memory protection, sandboxing, MAC, secure boot."}
    ]
        },
        questions: [
      {
        q: "An attacker analyzes a recently released security patch to understand the underlying flaw and then targets systems that have not yet applied it. Which phase of the vulnerability lifecycle does this represent?",
        opts: ["Discovery", "Disclosure", "Patch", "Exploitation"],
        correct: 3,
        hint: "Slide 51: After patch release, 'Attackers analyze patches to understand the flaw' and 'Exploits are often developed shortly after patch release.' This is the exploitation phase.",
        wrongReasons: {
          0: ["Discovery is when the vulnerability is first found, before anyone knows about it."],
          1: ["Disclosure is when it becomes public knowledge."],
          2: ["Patch is when the vendor releases the fix."]
        }
      },
      {
        q: "Which two Windows and Linux mechanisms are conceptually similar in their purpose of managing privilege elevation?",
        opts: ["Windows Defender and SELinux", "User Account Control (UAC) and sudo", "Task Manager and netstat", "Active Directory and nmap"],
        correct: 1,
        hint: "Slide 20: Windows uses UAC for elevation. Slide 17: Linux uses 'sudo' for 'temporary privilege elevation.' Both manage privilege elevation.",
        wrongReasons: {
          0: ["Windows Defender is antivirus; SELinux is MAC enforcement."],
          2: ["Task Manager shows processes; netstat shows network connections."],
          3: ["Active Directory manages identities; nmap scans networks."]
        }
      },
      {
        q: "A system administrator runs 'ss -tuln' on a Linux server and discovers several listening ports for services that are no longer needed. What hardening principle should they apply?",
        opts: ["Enable all services for compatibility", "Reduce unnecessary services and close unused ports", "Increase the number of open ports", "Disable logging to save disk space"],
        correct: 1,
        hint: "Slide 35: 'Disable or remove unused services' and 'Fewer services → Lower attack surface.' Slide 36: 'Hardening involves closing unnecessary ports. Only essential services should be exposed.'",
        wrongReasons: {
          0: ["Enabling unnecessary services increases attack surface."],
          2: ["More open ports = more attack opportunities."],
          3: ["Logging is essential for detection; disabling it weakens security."]
        }
      },
      {
        q: "Complete the key formula from the module: A vulnerability's impact is determined by combining the vulnerability with:",
        opts: ["The attacker's motivation", "The privilege level of the exploited process", "The system's encryption strength", "The user's password complexity"],
        correct: 1,
        hint: "Slide 28: 'Privilege + Vulnerability = Impact.' 'A vulnerability alone is not always critical. Impact depends on privilege level of exploited process.'",
        wrongReasons: {
          0: ["Motivation doesn't change technical impact."],
          2: ["Encryption strength is separate from the privilege level of the compromised process."],
          3: ["Password complexity is an authentication factor, not directly about process privilege."]
        }
      },
      {
        q: "A company's development team uses 'chmod 777' on shared directories for convenience during coding. After deployment to production, these permissions remain. An attacker with any low-privilege account can now modify critical system files. What is the root cause category of this breach?",
        opts: ["Zero-day software vulnerability", "Misconfiguration (weak file permissions)", "Advanced persistent threat", "Social engineering"],
        correct: 1,
        hint: "Slide 72: 'chmod 777 (read/write/execute for all)' is a misconfiguration. Slide 67: 'Misconfiguration is not a software flaw; it is a human or process error.' Slide 77: 'A secure system incorrectly configured is effectively insecure.'",
        wrongReasons: {
          0: ["No zero-day exploit was used. The attacker simply exploited overly permissive file settings."],
          2: ["An APT is a long-term sophisticated campaign. This was a simple configuration error."],
          3: ["No human was manipulated. The system was misconfigured."]
        }
      }
    ]
      },
    ]
  },
  {
    id: 7, num: "6",
    title: "Web Security Fundamentals",
    icon: "🌐",
    desc: "Web security, HTTP, XSS, SQLi, CSRF, sessions, secure practices",
    color: "#f43f5e",
    levels: [
      {
        id: "7-1", title: "Web Security Introduction & Architecture", slides: "2-20",
        concept: {
          title: "Web Security Introduction & Architecture",
          body: [
      {"type": "line", "text": "Web applications are everywhere: banking, e-commerce, healthcare, government."},
      {"type": "line", "text": "Attacks are frequent and automated. Small vulnerabilities lead to large impact."},
      {"type": "line", "text": "Most breaches exploit simple logic flaws and misconfigurations, not advanced techniques."},
      {"type": "empty"},
      {"type": "line", "text": "MODERN WEB ARCHITECTURE:"},
      {"type": "line", "text": "  • Single-page applications (SPAs) shift logic to frontend."},
      {"type": "line", "text": "  • Backend exposes APIs instead of full pages."},
      {"type": "line", "text": "  • Microservices split logic across multiple services."},
      {"type": "line", "text": "  • Frontend communicates asynchronously with backend APIs."},
      {"type": "line", "text": "  • Increased complexity expands attack surface."},
      {"type": "empty"},
      {"type": "line", "text": "TRUST BOUNDARIES:"},
      {"type": "line", "text": "  • User input travels through multiple layers."},
      {"type": "line", "text": "  • Each transition point introduces validation challenges."},
      {"type": "line", "text": "  • All user inputs = potential attack vectors (forms, headers, cookies, APIs, file uploads, query parameters)."},
      {"type": "empty"},
      {"type": "line", "text": "ATTACKER MINDSET:"},
      {"type": "line", "text": "  • Attackers intercept, modify, and replay requests."},
      {"type": "line", "text": "  • They do NOT use the UI as intended."},
      {"type": "line", "text": "  • Key assumption: 'Everything from the client can be modified.'"},
      {"type": "line", "text": "  • Client-side validation improves usability, NOT security."}
    ]
        },
        questions: [
      {
        q: "A developer believes their web application is secure because they added JavaScript validation that checks if a user entered a valid email address before submitting a form. What is wrong with this reasoning?",
        opts: ["JavaScript validation is too slow", "Client-side validation improves usability but not security — attackers can bypass it", "Email validation is not needed", "Server-side validation is less accurate"],
        correct: 1,
        hint: "Slide 20: 'Client-side validation improves usability, not security.' Slide 35: 'All client input must be considered untrusted data.' Attackers fully control the client environment.",
        wrongReasons: {
          0: ["Speed is not the issue."],
          2: ["Email validation is important, but the location matters."],
          3: ["Server-side validation is the ONLY validation that matters for security."]
        }
      },
      {
        q: "A modern web application uses React on the frontend and communicates with multiple backend microservices via APIs. How does this architecture affect security compared to traditional server-rendered pages?",
        opts: ["It reduces the attack surface", "Increased complexity expands the potential attack surface", "It eliminates the need for authentication", "It makes HTTPS unnecessary"],
        correct: 1,
        hint: "Slide 16: 'Increased complexity expands potential attack surface.' More components (frontend, APIs, microservices) = more trust boundaries to protect.",
        wrongReasons: {
          0: ["More components = more attack surface, not less."],
          2: ["Authentication is still critical, just implemented differently."],
          3: ["HTTPS is always needed for API communications."]
        }
      },
      {
        q: "An attacker uses a proxy tool (like Burp Suite) to intercept a web request, changes a price parameter from $100 to $1, and resubmits it to the server. The server accepts the modified price. What assumption did the developers make that enabled this?",
        opts: ["They assumed HTTPS was enough", "They assumed the client would not modify the request", "They assumed users would not know the URL", "They assumed SQL injection was impossible"],
        correct: 1,
        hint: "Slide 8: 'Attackers fully control client environment and tools.' Slide 32: 'Core workflow: intercept, modify, replay requests.' The key developer mistake was trusting client-submitted data.",
        wrongReasons: {
          0: ["HTTPS protects in transit but doesn't prevent parameter tampering."],
          2: ["URL hiding is security through obscurity, not real security."],
          3: ["This is parameter tampering, not SQL injection."]
        }
      },
      {
        q: "In a web application, where should security and business rules be strictly enforced?",
        opts: ["Only in the client-side JavaScript", "Only in the server-side code", "In both client and server equally", "In the database only"],
        correct: 1,
        hint: "Slide 20: 'Server enforces security and business rules strictly.' 'Sensitive decisions must never rely on client input.' 'Server must verify all incoming data rigorously.'",
        wrongReasons: {
          0: ["Client-side can be bypassed entirely."],
          2: ["Client-side is for usability; server-side is for security. They are not equal."],
          3: ["Database enforces storage rules but cannot validate business logic for all requests."]
        }
      }
    ]
      },
      {
        id: "7-2", title: "HTTP & Communication Fundamentals", slides: "22-32",
        concept: {
          title: "HTTP & Communication Fundamentals",
          body: [
      {"type": "line", "text": "HTTP = stateless request-response protocol. No memory between requests."},
      {"type": "line", "text": "HTTP REQUEST: method (GET/POST/PUT/DELETE), path, headers, body. All fields can be manipulated by attacker."},
      {"type": "line", "text": "HTTP RESPONSE: status line, headers, body. Server controls response data."},
      {"type": "empty"},
      {"type": "line", "text": "METHODS:"},
      {"type": "line", "text": "  • GET: retrieve data (should not modify state)."},
      {"type": "line", "text": "  • POST: submit data (changes server state)."},
      {"type": "line", "text": "  • PUT/PATCH: update existing resources."},
      {"type": "line", "text": "  • DELETE: removes resources."},
      {"type": "line", "text": "Misuse of methods may introduce security risks."},
      {"type": "empty"},
      {"type": "line", "text": "HEADERS carry authentication and session info. Cookies transmitted through headers. Custom headers may expose sensitive data. Manipulating headers can bypass security."},
      {"type": "empty"},
      {"type": "line", "text": "STATE MANAGEMENT:"},
      {"type": "line", "text": "  • Cookies: store session identifiers in browser."},
      {"type": "line", "text": "  • Server-side sessions: track auth state."},
      {"type": "line", "text": "  • Tokens: used in modern API authentication."},
      {"type": "line", "text": "  • Local storage: sometimes stores tokens (risky)."},
      {"type": "empty"},
      {"type": "line", "text": "COOKIE SECURITY ATTRIBUTES:"},
      {"type": "line", "text": "  • Secure: only sent over HTTPS."},
      {"type": "line", "text": "  • HttpOnly: not accessible via JavaScript."},
      {"type": "line", "text": "  • Domain/Path: control scope."},
      {"type": "line", "text": "  • SameSite: mitigate CSRF risks."},
      {"type": "empty"},
      {"type": "line", "text": "HTTPS uses TLS to encrypt communication. Protects against eavesdropping. BUT does NOT protect against application-level vulnerabilities (SQLi, XSS, etc.)."}
    ]
        },
        questions: [
      {
        q: "HTTP is described as a 'stateless protocol.' What does this mean from a security perspective?",
        opts: ["All requests are automatically encrypted", "Each request is processed independently without memory of previous interactions", "The server always remembers the user's previous actions", "Sessions are built into HTTP by default"],
        correct: 1,
        hint: "Slide 28: 'Each request processed independently without memory.' 'No built-in session awareness between requests.' 'Applications must implement their own state management.'",
        wrongReasons: {
          0: ["Encryption requires HTTPS, not plain HTTP."],
          2: ["The opposite — HTTP has NO built-in memory of previous interactions."],
          3: ["Applications must implement their own session management. HTTP does not have built-in sessions."]
        }
      },
      {
        q: "A web application sets a session cookie without the HttpOnly flag. An attacker injects JavaScript that successfully reads the cookie and sends it to their server. What does the HttpOnly flag prevent?",
        opts: ["Prevents the cookie from being sent to the server", "Prevents JavaScript from accessing the cookie", "Prevents the cookie from expiring", "Prevents HTTPS connections"],
        correct: 1,
        hint: "Slide 30: 'Cookies... Accessible via JavaScript unless protected properly.' Attributes include 'Secure, httponly, domain, path.' HttpOnly prevents script-based cookie theft.",
        wrongReasons: {
          0: ["HttpOnly doesn't stop the cookie from being sent — it stops JavaScript from reading it."],
          2: ["Cookie expiration is controlled by the Expires/Max-Age attribute, not HttpOnly."],
          3: ["HTTPS is controlled by the Secure attribute, not HttpOnly."]
        }
      },
      {
        q: "A company deploys HTTPS on their website and believes this makes their application fully secure against all web attacks. What is the flaw in this reasoning?",
        opts: ["HTTPS is unnecessary for web security", "HTTPS provides transport security but does not protect against application-level vulnerabilities", "HTTPS only works on mobile devices", "HTTPS prevents all types of XSS"],
        correct: 1,
        hint: "Slide 31: 'HTTPS... Protects against network eavesdropping and tampering' BUT 'Does not protect against application-level vulnerabilities' and 'Secure transport does not guarantee secure application.'",
        wrongReasons: {
          0: ["HTTPS is necessary but not sufficient."],
          2: ["HTTPS works on all devices with browser support."],
          3: ["HTTPS does not prevent XSS — XSS is an application-level output encoding issue."]
        }
      },
      {
        q: "An attacker intercepts an HTTP request and modifies the Authorization header containing a JWT token to impersonate another user. What does this demonstrate?",
        opts: ["HTTPS is always broken", "HTTP headers can be manipulated to bypass security mechanisms", "Cookies are the only authentication method", "POST requests cannot be modified"],
        correct: 1,
        hint: "Slide 26: 'Headers carry authentication and session information.' 'Manipulating headers can bypass security mechanisms.' All request fields can be manipulated by attackers.",
        wrongReasons: {
          0: ["HTTPS protects in transit. This attack manipulates headers at the application level, not transport."],
          2: ["Tokens in headers are another authentication method besides cookies."],
          3: ["All HTTP methods can have their headers and bodies modified."]
        }
      },
      {
        q: "Which HTTP method is designed to retrieve data from a server without modifying server state, and misuse of which for state-changing operations can introduce security risks?",
        opts: ["POST", "GET", "DELETE", "PUT"],
        correct: 1,
        hint: "Slide 25: GET 'Requests retrieve data without modifying state.' Slide 25 also notes: 'Misuse of methods may introduce security risks.' Using GET for state changes can enable CSRF.",
        wrongReasons: {
          0: ["POST submits data and changes state."],
          2: ["DELETE removes resources."],
          3: ["PUT updates existing resources."]
        }
      }
    ]
      },
      {
        id: "7-3", title: "Core Web Security Principles", slides: "34-44",
        concept: {
          title: "Core Web Security Principles",
          body: [
      {"type": "line", "text": "1. NEVER TRUST USER INPUT: All client input is untrusted. Hidden fields provide no protection. Input validation must be server-side always."},
      {"type": "empty"},
      {"type": "line", "text": "2. INPUT VALIDATION & OUTPUT ENCODING:"},
      {"type": "line", "text": "  • Input validation protects the BACKEND."},
      {"type": "line", "text": "  • Output encoding protects the FRONTEND."},
      {"type": "line", "text": "  • Prefer strict allowlists over permissive validation."},
      {"type": "line", "text": "  • Encode output before rendering in browser to prevent malicious input from being interpreted as code."},
      {"type": "empty"},
      {"type": "line", "text": "3. AUTHENTICATION vs AUTHORIZATION: Authentication verifies identity. Authorization determines access rights. Both must be implemented separately."},
      {"type": "empty"},
      {"type": "line", "text": "4. LEAST PRIVILEGE: Users granted only minimal required permissions. Limits damage from compromised accounts."},
      {"type": "empty"},
      {"type": "line", "text": "5. DEFENSE IN DEPTH: Multiple layers of security. No single mechanism provides full protection. Failure of one layer doesn't break the system."},
      {"type": "empty"},
      {"type": "line", "text": "6. SECURE SESSION MANAGEMENT:"},
      {"type": "line", "text": "  • Sessions must be unpredictable and securely generated."},
      {"type": "line", "text": "  • Session ID should not be guessable or reusable."},
      {"type": "line", "text": "  • Sessions must expire after inactivity or logout."},
      {"type": "line", "text": "  • Weak sessions enable hijacking and impersonation."},
      {"type": "empty"},
      {"type": "line", "text": "7. FAIL SECURELY: Deny access by default. Errors must not expose sensitive internal information."},
      {"type": "empty"},
      {"type": "line", "text": "8. ZERO TRUST MINDSET: Assume no component is trustworthy. Validate all inputs regardless of origin. Internal services should not blindly trust each other."}
    ]
        },
        questions: [
      {
        q: "A developer implements client-side JavaScript that checks if a form field contains only numbers before submitting. They skip server-side validation because 'the JavaScript already checks it.' What principle is violated?",
        opts: ["Defense in depth", "Never trust user input", "Least privilege", "Fail securely"],
        correct: 1,
        hint: "Slide 35: 'Never trust user input.' 'Users can modify requests before reaching server.' 'Hidden fields and parameters provide no protection.' 'Input validation must be enforced server-side always.'",
        wrongReasons: {
          0: ["Defense in depth uses multiple layers. The issue here is trusting one layer (client) exclusively."],
          2: ["Least privilege is about permissions, not input validation."],
          3: ["Fail securely is about default deny behavior, not validation location."]
        }
      },
      {
        q: "An application validates that user-submitted usernames contain only letters and numbers before processing them. It also encodes any special characters before displaying the username in the browser. What two security mechanisms are being used?",
        opts: ["Encryption and decryption", "Input validation and output encoding", "Authentication and authorization", "Compression and decompression"],
        correct: 1,
        hint: "Slide 36: 'Input validation protects the backend.' 'Output encoding protects the frontend.' 'Validate all incoming data before processing.' 'Encode output before rendering in browser context.'",
        wrongReasons: {
          0: ["No encryption is mentioned — the question is about checking and encoding content."],
          2: ["Authentication and authorization are about identity and permissions, not data handling."],
          3: ["Compression is not relevant to security in this context."]
        }
      },
      {
        q: "A web application shows detailed database error messages including table names and SQL syntax when a query fails. An attacker uses these error messages to craft more precise attacks. What principle was violated?",
        opts: ["Least privilege", "Fail securely", "Zero trust", "Defense in depth"],
        correct: 1,
        hint: "Slide 42: 'Fail Securely' means 'Errors must not expose sensitive internal information' and 'Unexpected conditions handled safely without data leakage.' Showing SQL details helps attackers.",
        wrongReasons: {
          0: ["Least privilege limits access. The issue is information exposure, not excessive permissions."],
          2: ["Zero trust is about not trusting components. The issue is error handling."],
          3: ["Defense in depth uses multiple layers. The issue is what happens when one layer fails (errors)."]
        }
      },
      {
        q: "A banking website uses HTTPS, requires strong passwords, implements server-side input validation, logs all transactions, and monitors for suspicious activity. If the password database is breached, the other protections still limit damage. What concept is this?",
        opts: ["Single sign-on", "Defense in depth", "Identity federation", "Client-side validation"],
        correct: 1,
        hint: "Slide 39: 'Defense in depth' = 'Multiple layers of security controls applied simultaneously.' 'No single mechanism should provide full protection.' 'Failure of one layer does not break system.'",
        wrongReasons: {
          0: ["SSO lets users log in once for multiple services."],
          2: ["Identity federation is cross-organizational trust."],
          3: ["Client-side validation is not a security defense strategy."]
        }
      },
      {
        q: "A system administrator creates session IDs using simple incrementing numbers (session_1, session_2, session_3). An attacker guesses the next session ID and impersonates an active user. What session management principle was violated?",
        opts: ["Sessions should be short", "Sessions must be unpredictable and securely generated", "Sessions should be stored in cookies", "Sessions should use localStorage"],
        correct: 1,
        hint: "Slide 41: 'Sessions must be unpredictable and securely generated.' 'Session ID should not be guessable or reusable.' Incrementing numbers are trivially guessable.",
        wrongReasons: {
          0: ["Short sessions help but the core issue is predictability."],
          2: ["Storing in cookies is common practice but doesn't fix predictability."],
          3: ["localStorage is less secure than cookies for session data."]
        }
      }
    ]
      },
      {
        id: "7-4", title: "Injection & XSS Attacks", slides: "46-58",
        concept: {
          title: "Injection & XSS Attacks",
          body: [
      {"type": "line", "text": "INJECTION ATTACKS:"},
      {"type": "line", "text": "  • Occurs when untrusted data is interpreted as code."},
      {"type": "line", "text": "  • Attacker input alters execution of backend commands."},
      {"type": "line", "text": "  • Affects databases (SQLi), OS commands, and interpreters."},
      {"type": "line", "text": "  • Caused by missing validation and unsafe input handling."},
      {"type": "line", "text": "  • SQL Injection: user input concatenated directly into SQL query strings. Database executes unintended operations."},
      {"type": "line", "text": "  • Not limited to SQL — affects APIs, JSON, templates. Same root cause: mixing untrusted data with code."},
      {"type": "empty"},
      {"type": "line", "text": "XSS (Cross-Site Scripting):"},
      {"type": "line", "text": "  • Allows execution of malicious scripts in the victim's browser."},
      {"type": "line", "text": "  • Occurs when application reflects untrusted input to users without proper encoding."},
      {"type": "line", "text": "  • Browser interprets attacker input as executable JavaScript."},
      {"type": "line", "text": "  • Types: Stored (persistent in DB), Reflected (in URL/response), DOM-based (client-side manipulation)."},
      {"type": "line", "text": "  • Impact: Session hijacking, phishing, keylogging, defacement, credential theft, malware distribution."}
    ]
        },
        questions: [
      {
        q: "An application's login form takes a username and directly inserts it into an SQL query: 'SELECT * FROM users WHERE name = \"' + username + '\"'. An attacker enters: admin' OR '1'='1. What attack is this, and what is the root cause?",
        opts: ["Cross-site scripting; missing output encoding", "SQL injection; missing input validation and unsafe string concatenation", "CSRF; missing anti-CSRF tokens", "Session hijacking; weak session IDs"],
        correct: 1,
        hint: "Slide 49: 'Application builds SQL queries using user input. Input directly concatenated into database query strings.' Slide 48: 'Injection occurs when untrusted data interpreted as code.' The root cause is missing validation and string concatenation.",
        wrongReasons: {
          0: ["XSS is about JavaScript execution in browsers. This is about SQL queries."],
          2: ["CSRF tricks users into unwanted actions. This directly manipulates a database query."],
          3: ["Session hijacking steals sessions. This is about query manipulation."]
        }
      },
      {
        q: "An attacker submits a comment on a blog that contains JavaScript code. When other users view the comment, the script runs in their browsers and steals their session cookies. What type of XSS is this?",
        opts: ["Reflected XSS", "Stored (persistent) XSS", "DOM-based XSS", "Self-XSS"],
        correct: 1,
        hint: "Slide 55: XSS types include stored (persistent) where the payload is saved in the database/server. The blog comment is stored and displayed to all viewers.",
        wrongReasons: {
          0: ["Reflected XSS requires the victim to click a malicious link. The payload is not stored."],
          2: ["DOM-based XSS manipulates the client-side DOM without server involvement."],
          3: ["Self-XSS requires the victim to run code themselves in their own browser console."]
        }
      },
      {
        q: "An attacker sends a victim a link: https://site.com/search?q=<script>stealCookies()</script>. When the victim clicks it, the search page reflects the query back in the response without encoding, and the script executes. What XSS type is this?",
        opts: ["Stored XSS", "Reflected XSS", "DOM-based XSS", "Blind XSS"],
        correct: 1,
        hint: "Slide 55: Reflected XSS = payload in URL/response, requires victim to visit a link. The server reflects the input directly in the response without encoding.",
        wrongReasons: {
          0: ["Stored XSS requires the payload to be saved on the server. This is in a URL parameter."],
          2: ["DOM-based XSS happens purely in the browser DOM without server reflection. Here the server reflects the input."],
          3: ["Blind XSS executes in a backend/admin panel the attacker cannot see."]
        }
      },
      {
        q: "A developer argues that SQL injection is no longer a problem because modern applications use APIs and JSON instead of traditional SQL databases. Why is this argument incorrect?",
        opts: ["SQL injection is the only type of injection", "Injection is not limited to SQL — it affects APIs, JSON, and templates with the same root cause", "APIs are always secure", "JSON cannot contain malicious data"],
        correct: 1,
        hint: "Slide 53: 'Injection not limited to traditional SQL databases.' 'Modern applications use APIs, JSON, and templates.' 'Same root cause: mixing untrusted data with code.'",
        wrongReasons: {
          0: ["The module explicitly says injection is NOT limited to SQL."],
          2: ["APIs can be vulnerable to injection just like SQL databases."],
          3: ["JSON can absolutely contain malicious data that gets interpreted as code."]
        }
      },
      {
        q: "Which of the following is a valid defense against SQL injection?",
        opts: ["Only using GET requests for database queries", "Using parameterized queries (prepared statements) instead of string concatenation", "Relying on client-side validation", "Disabling HTTPS"],
        correct: 1,
        hint: "Slide 78: 'Use parameterized queries for database interactions.' 'Avoid building queries using string concatenation.' Parameterized queries separate code from data.",
        wrongReasons: {
          0: ["GET vs POST doesn't prevent SQL injection."],
          2: ["Client-side validation can be bypassed and does not protect the backend."],
          3: ["HTTPS protects data in transit; disabling it would make things worse."]
        }
      },
      {
        q: "An XSS attack allows an attacker to execute JavaScript in a victim's browser. Which of the following is NOT a typical impact of XSS?",
        opts: ["Session hijacking via cookie theft", "Defacement of the website appearance", "Direct deletion of the server's database", "Keylogging of user keystrokes"],
        correct: 2,
        hint: "Slide 57: XSS impact includes 'Session hijacking, Phishing, Keylogging, Defacement, Credential theft, Malware distribution.' XSS runs in the browser — it cannot directly delete a server database. That requires SQL injection or other server-side attacks.",
        wrongReasons: {
          0: ["XSS commonly steals session cookies for hijacking."],
          1: ["XSS can modify the DOM to deface the page."],
          3: ["XSS can log keystrokes by capturing keyboard events in the browser."]
        }
      }
    ]
      },
      {
        id: "7-5", title: "Authentication, Session & Access Control Attacks", slides: "59-66",
        concept: {
          title: "Authentication, Session & Access Control Attacks",
          body: [
      {"type": "line", "text": "AUTHENTICATION & SESSION WEAKNESSES:"},
      {"type": "line", "text": "  • Weak authentication allows account compromise."},
      {"type": "line", "text": "  • Poor session management enables impersonation."},
      {"type": "line", "text": "  • Credentials may be predictable or poorly protected."},
      {"type": "line", "text": "  • Session identifiers exposed through insecure mechanisms."},
      {"type": "empty"},
      {"type": "line", "text": "ACCESS CONTROL VULNERABILITIES:"},
      {"type": "line", "text": "  • Occur when authorization checks are missing or incorrect."},
      {"type": "line", "text": "  • Users access resources beyond their permissions."},
      {"type": "line", "text": "  • Server trusts client-provided identifiers (e.g., /profile?id=123)."},
      {"type": "empty"},
      {"type": "line", "text": "IDOR (Insecure Direct Object Reference):"},
      {"type": "line", "text": "  • Application exposes internal identifiers in URLs/parameters."},
      {"type": "line", "text": "  • Attacker changes the ID to access another user's data."},
      {"type": "line", "text": "  • Server only checks authentication, not authorization/ownership."}
    ]
        },
        questions: [
      {
        q: "An application uses URLs like /invoice?id=1001. A logged-in user changes the ID to 1002 and can view another customer's invoice. The server verifies the user is logged in but does not check if they own that invoice. What vulnerability is this?",
        opts: ["SQL injection", "Insecure Direct Object Reference (IDOR)", "Cross-site scripting", "CSRF"],
        correct: 1,
        hint: "Slide 65: IDOR = 'Application exposes internal identifiers.' 'Attacker changes ID to access another user's data.' 'Server trusts client-provided identifiers.'",
        wrongReasons: {
          0: ["SQL injection manipulates database queries. No query manipulation happened here."],
          2: ["XSS executes JavaScript in browsers. No script was injected."],
          3: ["CSRF tricks users into unwanted actions. The user intentionally changed a URL parameter."]
        }
      },
      {
        q: "A banking application generates session IDs using sequential numbers. An attacker with a valid session guesses other active session IDs and successfully impersonates multiple customers. What is the primary weakness?",
        opts: ["Weak password policy", "Predictable session identifiers", "Missing HTTPS", "Excessive password length"],
        correct: 1,
        hint: "Slide 41: 'Sessions must be unpredictable and securely generated.' 'Session ID should not be guessable or reusable.' Sequential numbers are trivially guessable.",
        wrongReasons: {
          0: ["Password policy is unrelated to session ID generation."],
          2: ["HTTPS protects in transit but doesn't fix predictable session IDs."],
          3: ["Long passwords are good. The issue is session predictability."]
        }
      },
      {
        q: "A user logs into a web application. The server creates a session and sends the session ID in a cookie. The user logs out, but the session ID remains valid on the server for 30 days. An attacker who stole the cookie can still use it. What principle was violated?",
        opts: ["Least privilege", "Sessions must expire after logout or timeout", "Defense in depth", "Zero trust"],
        correct: 1,
        hint: "Slide 41: 'Sessions must expire after inactivity or logout.' 'Invalidate sessions properly on logout and timeout.' Slide 60: 'Invalidate sessions properly on logout and timeout.'",
        wrongReasons: {
          0: ["Least privilege is about permissions, not session lifecycle."],
          2: ["Defense in depth uses multiple layers. The issue is session management specifically."],
          3: ["Zero trust is about not trusting components. The issue is session invalidation."]
        }
      },
      {
        q: "An application checks if a user is logged in (authentication) before showing a page, but never checks if the logged-in user is actually allowed to see that specific record (authorization). What is this weakness called?",
        opts: ["Strong authentication", "Missing authorization checks / broken access control", "Multi-factor authentication failure", "Session fixation"],
        correct: 1,
        hint: "Slide 64: 'Access Control Vulnerabilities: Occur when authorization checks are missing or incorrect.' 'Users access resources beyond their assigned permissions.' Slide 37: 'Authentication without authorization leads to privilege misuse.'",
        wrongReasons: {
          0: ["Authentication is working. The problem is the missing next step."],
          2: ["MFA is about proving identity with multiple factors."],
          3: ["Session fixation is when an attacker sets a known session ID for a victim."]
        }
      }
    ]
      },
      {
        id: "7-6", title: "CSRF & Client-Side Trust Attacks", slides: "67-74",
        concept: {
          title: "CSRF & Client-Side Trust Attacks",
          body: [
      {"type": "line", "text": "CSRF (Cross-Site Request Forgery):"},
      {"type": "line", "text": "  • Attacker tricks user into sending unintended requests."},
      {"type": "line", "text": "  • Exploits browser automatically including authentication credentials (cookies) with requests."},
      {"type": "line", "text": "  • Server cannot distinguish legitimate from forged requests."},
      {"type": "line", "text": "  • Relies on an active authenticated user session."},
      {"type": "line", "text": "  • Impact: Unauthorized actions (change password, transfer money) executed on behalf of the user."},
      {"type": "empty"},
      {"type": "line", "text": "CLIENT-SIDE TRUST VULNERABILITIES:"},
      {"type": "line", "text": "  • Application relies on client-side validation for security."},
      {"type": "line", "text": "  • Sensitive data stored in browser-accessible storage (localStorage)."},
      {"type": "line", "text": "  • Business logic partially implemented in frontend code."},
      {"type": "line", "text": "  • Attackers modify client behavior and bypass restrictions."},
      {"type": "empty"},
      {"type": "line", "text": "Example: An e-commerce site stores the item price in a hidden form field. An attacker changes the price to $0 using browser developer tools before submitting. The server accepts it because it trusts the client-submitted price."}
    ]
        },
        questions: [
      {
        q: "A user is logged into their bank website. They visit a malicious site that contains an image tag: <img src='https://bank.com/transfer?to=attacker&amount=10000'>. The browser automatically includes the user's bank cookies, and the money is transferred. What attack is this?",
        opts: ["SQL injection", "Cross-Site Request Forgery (CSRF)", "Cross-Site Scripting (XSS)", "Session hijacking"],
        correct: 1,
        hint: "Slide 68: CSRF 'tricks user into sending unintended requests.' 'Exploits browser automatically including authentication credentials.' 'Server cannot distinguish legitimate from forged requests.'",
        wrongReasons: {
          0: ["SQL injection manipulates database queries. No query was manipulated."],
          2: ["XSS requires script execution. An <img> tag is not JavaScript execution."],
          3: ["Session hijacking steals the session cookie. Here the cookie stays with the user but is sent along with an unintended request."]
        }
      },
      {
        q: "Which defense directly prevents CSRF attacks by requiring the server to validate that state-changing requests include a unique token known only to the legitimate application?",
        opts: ["HTTPS encryption", "Anti-CSRF tokens", "Output encoding", "SQL parameterized queries"],
        correct: 1,
        hint: "Slide 85: 'Use anti-CSRF tokens for state-changing requests.' The server verifies the token matches what it issued, distinguishing legitimate from forged requests.",
        wrongReasons: {
          0: ["HTTPS protects data in transit but doesn't prevent forged requests from the same browser."],
          2: ["Output encoding prevents XSS, not CSRF."],
          3: ["Parameterized queries prevent SQL injection."]
        }
      },
      {
        q: "An e-commerce website stores product prices in hidden HTML form fields. A user opens browser developer tools, changes the price from $500 to $5, and submits the order. The server processes the order at the reduced price. What category of vulnerability is this?",
        opts: ["SQL injection", "Client-side trust vulnerability", "Session hijacking", "Denial of service"],
        correct: 1,
        hint: "Slide 72: 'Application relies on client-side validation for security.' 'Business logic partially implemented in frontend code.' 'Attackers modify client behavior and bypass restrictions.' The server should never trust prices from the client.",
        wrongReasons: {
          0: ["No SQL query was manipulated."],
          2: ["No session was stolen."],
          3: ["The service is still available. The issue is trusting client-provided data."]
        }
      },
      {
        q: "A developer stores an authentication token in the browser's localStorage because it is convenient to access from JavaScript. What is the security risk?",
        opts: ["localStorage is automatically encrypted by the browser", "localStorage is accessible by any JavaScript on the page, making it vulnerable to XSS theft", "localStorage is more secure than cookies", "localStorage prevents CSRF attacks"],
        correct: 1,
        hint: "Slide 82: 'Avoid storing sensitive tokens in localStorage.' Slide 30: Cookies with HttpOnly are not accessible via JavaScript. localStorage IS accessible via JavaScript, so any XSS can steal tokens from it.",
        wrongReasons: {
          0: ["localStorage is NOT automatically encrypted."],
          2: ["localStorage is LESS secure than HttpOnly cookies for tokens."],
          3: ["localStorage doesn't prevent CSRF — it stores the token that enables it."]
        }
      },
      {
        q: "Which cookie attribute helps mitigate CSRF by preventing the browser from sending cookies in cross-site requests?",
        opts: ["HttpOnly", "Secure", "SameSite", "Path"],
        correct: 2,
        hint: "Slide 82: 'Set SameSite attribute to mitigate CSRF risks.' Slide 86: 'Use SameSite cookie attribute to restrict cross-site requests.' SameSite=Strict or Lax prevents cookies from being sent in cross-origin requests.",
        wrongReasons: {
          0: ["HttpOnly prevents JavaScript access to cookies. It doesn't control cross-site sending."],
          1: ["Secure ensures cookies are only sent over HTTPS."],
          3: ["Path limits cookie scope to specific URL paths."]
        }
      }
    ]
      },
      {
        id: "7-7", title: "Defensive Techniques & Best Practices", slides: "76-87",
        concept: {
          title: "Defensive Techniques & Best Practices",
          body: [
      {"type": "line", "text": "INJECTION DEFENSE:"},
      {"type": "line", "text": "  • Use parameterized queries (prepared statements)."},
      {"type": "line", "text": "  • Avoid string concatenation for queries."},
      {"type": "line", "text": "  • Validate and sanitize all user input strictly."},
      {"type": "line", "text": "  • Use ORM frameworks with safe query mechanisms."},
      {"type": "line", "text": "  • Limit database privileges to minimum required."},
      {"type": "empty"},
      {"type": "line", "text": "XSS DEFENSE:"},
      {"type": "line", "text": "  • Encode output before rendering user-controlled content."},
      {"type": "line", "text": "  • Use context-aware encoding (HTML, JavaScript, URL, CSS)."},
      {"type": "line", "text": "  • Avoid inserting raw input into HTML or scripts."},
      {"type": "line", "text": "  • Implement Content Security Policy (CSP)."},
      {"type": "empty"},
      {"type": "line", "text": "AUTHENTICATION & SESSION DEFENSE:"},
      {"type": "line", "text": "  • Strong password policies and MFA."},
      {"type": "line", "text": "  • Secure session identifiers with high entropy."},
      {"type": "line", "text": "  • Regenerate session IDs after authentication events."},
      {"type": "line", "text": "  • Invalidate sessions on logout and timeout."},
      {"type": "line", "text": "  • HttpOnly, Secure, SameSite cookie flags."},
      {"type": "empty"},
      {"type": "line", "text": "ACCESS CONTROL DEFENSE:"},
      {"type": "line", "text": "  • Enforce authorization checks on EVERY server request."},
      {"type": "line", "text": "  • Never rely on client-provided identifiers for access control."},
      {"type": "line", "text": "  • Validate ownership of resources before granting access."},
      {"type": "line", "text": "  • Deny access by default unless explicitly allowed."},
      {"type": "empty"},
      {"type": "line", "text": "CSRF DEFENSE:"},
      {"type": "line", "text": "  • Anti-CSRF tokens for state-changing requests."},
      {"type": "line", "text": "  • Validate Origin or Referer headers."},
      {"type": "line", "text": "  • SameSite cookie attribute."},
      {"type": "line", "text": "  • Re-authentication for sensitive operations."},
      {"type": "line", "text": "  • Avoid GET requests for critical actions."},
      {"type": "empty"},
      {"type": "line", "text": "SECURITY HEADERS:"},
      {"type": "line", "text": "  • CSP (Content Security Policy): restricts which resources can load/execute."},
      {"type": "line", "text": "  • HSTS (HTTP Strict Transport Security): forces HTTPS connections."},
      {"type": "line", "text": "  • X-Frame-Options: prevents clickjacking by blocking iframe embedding."}
    ]
        },
        questions: [
      {
        q: "Which technique separates SQL code from user data, ensuring that user input is always treated as data and never as executable code?",
        opts: ["Base64 encoding", "Parameterized queries (prepared statements)", "URL encoding", "MD5 hashing"],
        correct: 1,
        hint: "Slide 78: 'Use parameterized queries for database interactions.' 'Avoid building queries using string concatenation.' Parameterized queries treat user input strictly as data parameters.",
        wrongReasons: {
          0: ["Base64 is for data representation, not query safety."],
          2: ["URL encoding is for safe transport in URLs, not database queries."],
          3: ["MD5 is a hash function, not a query safety mechanism."]
        }
      },
      {
        q: "A developer wants to prevent an attacker from embedding their banking website inside a malicious iframe that tricks users into clicking unintended buttons. Which HTTP security header should they implement?",
        opts: ["Content Security Policy (CSP)", "X-Frame-Options", "HTTP Strict Transport Security (HSTS)", "Access-Control-Allow-Origin"],
        correct: 1,
        hint: "Slide 87: 'X-Frame-Options: HTTP response header that instructs the browser whether a webpage is allowed to be embedded inside a frame or iframe.' 'Prevents clickjacking attacks effectively.'",
        wrongReasons: {
          0: ["CSP restricts script/sources but doesn't specifically prevent iframe embedding."],
          2: ["HSTS forces HTTPS, not iframe blocking."],
          3: ["CORS header controls cross-origin access, not iframe embedding."]
        }
      },
      {
        q: "Which Content Security Policy (CSP) directive tells the browser to only load and execute scripts from specific trusted sources, preventing inline script execution?",
        opts: ["style-src", "script-src", "img-src", "connect-src"],
        correct: 1,
        hint: "Slide 87: 'Content Security Policy (CSP): HTTP response header that tells the browser which resources are allowed to load and execute on a page.' 'Restricts script execution sources.' The script-src directive specifically controls JavaScript sources.",
        wrongReasons: {
          0: ["style-src controls CSS sources."],
          2: ["img-src controls image sources."],
          3: ["connect-src controls AJAX/WebSocket connections."]
        }
      },
      {
        q: "A security team implements all the following: parameterized queries for databases, output encoding for XSS, anti-CSRF tokens, secure session management, and least privilege access control. What security philosophy does this represent?",
        opts: ["Single point of protection", "Defense in depth", "Security through obscurity", "Zero-day prevention"],
        correct: 1,
        hint: "Slide 39: 'Defense in depth: Multiple layers of security controls applied simultaneously.' 'No single mechanism should provide full protection.' Slide 76: 'Security must be applied at multiple application layers.'",
        wrongReasons: {
          0: ["The module explicitly rejects single-mechanism protection."],
          2: ["Security through obscurity means hiding vulnerabilities. This is about multiple explicit defenses."],
          3: ["Zero-day prevention is impossible — this is about layered protection against known issues."]
        }
      },
      {
        q: "An application processes a state-changing action (like deleting an account) via a GET request: /delete-account. A victim clicks a malicious link that triggers this URL, and their account is deleted. Which two defensive measures would have prevented this?",
        opts: ["Using POST for the action and adding anti-CSRF tokens", "Using GET and adding more JavaScript validation", "Using HTTP instead of HTTPS", "Disabling cookies entirely"],
        correct: 0,
        hint: "Slide 86: 'Avoid using GET requests for critical actions.' Slide 85: 'Use anti-CSRF tokens for state-changing requests.' State-changing actions should use POST with CSRF tokens.",
        wrongReasons: {
          1: ["GET should not be used for state-changing actions. Client-side validation is bypassable."],
          2: ["HTTP is less secure than HTTPS."],
          3: ["Disabling cookies breaks session-based authentication entirely."]
        }
      }
    ]
      },
      {
        id: "7-8", title: "Final Certification", slides: "2-90",
        concept: {
          title: "Final Certification: All Module 6 Concepts",
          body: [
      {"type": "line", "text": "Comprehensive review:"},
      {"type": "line", "text": "  • Web security depends on correct handling of trust."},
      {"type": "line", "text": "  • Client-side cannot be trusted under any conditions."},
      {"type": "line", "text": "  • Security must be enforced server-side consistently."},
      {"type": "line", "text": "  • HTTP is stateless — applications must implement session management."},
      {"type": "line", "text": "  • HTTPS protects transport but not application-level vulnerabilities."},
      {"type": "line", "text": "  • Never trust user input — validate server-side."},
      {"type": "line", "text": "  • Input validation protects backend; output encoding protects frontend."},
      {"type": "line", "text": "  • Injection: mixing untrusted data with code. Defense = parameterized queries."},
      {"type": "line", "text": "  • XSS: executing scripts in victim browser. Defense = output encoding + CSP."},
      {"type": "line", "text": "  • Authentication verifies identity; authorization determines access."},
      {"type": "line", "text": "  • Session management: unpredictable IDs, expiration, invalidation, HttpOnly/Secure/SameSite."},
      {"type": "line", "text": "  • Access control: validate ownership, deny by default, never trust client IDs."},
      {"type": "line", "text": "  • CSRF: forged requests with automatic cookie inclusion. Defense = anti-CSRF tokens + SameSite."},
      {"type": "line", "text": "  • Client-side trust: never implement security logic in frontend."},
      {"type": "line", "text": "  • Security headers: CSP, HSTS, X-Frame-Options."},
      {"type": "line", "text": "  • Security is a continuous process, not a one-time activity."}
    ]
        },
        questions: [
      {
        q: "An application uses HTTPS, has a WAF, and validates user input. However, it still suffers from XSS because user-submitted comments are displayed in the browser without any encoding. Which defense was missing?",
        opts: ["Stronger HTTPS cipher suites", "Output encoding before rendering user content in the browser", "A faster web server", "More firewall rules"],
        correct: 1,
        hint: "Slide 79: 'Encode output before rendering user-controlled content.' Slide 36: 'Output encoding protects the frontend.' Without encoding, the browser interprets attacker input as executable code.",
        wrongReasons: {
          0: ["HTTPS was already in place. The issue is application-level rendering."],
          2: ["Server speed doesn't prevent XSS."],
          3: ["WAF/firewall rules might catch some XSS but are not a replacement for proper output encoding."]
        }
      },
      {
        q: "Complete the core web security principle: Input validation protects the ___, and output encoding protects the ___.",
        opts: ["frontend; backend", "backend; frontend", "database; network", "network; database"],
        correct: 1,
        hint: "Slide 36: 'Input validation protects the backend.' 'Output encoding protects the frontend.' Input validation prevents malicious data from reaching backend systems. Output encoding prevents malicious data from executing in the user's browser.",
        wrongReasons: {
          0: ["Reversed."],
          2: ["The module specifically distinguishes backend vs frontend protection."],
          3: ["Network and database are not the dichotomy used in the lecture."]
        }
      },
      {
        q: "A web application uses sequential numeric IDs for user profiles (/user/1, /user/2). It checks if the visitor is logged in but does not verify profile ownership. This is an example of:",
        opts: ["SQL injection", "Insecure Direct Object Reference (IDOR) + missing authorization", "Cross-site scripting", "CSRF"],
        correct: 1,
        hint: "Slide 65: IDOR = 'Application exposes internal identifiers.' 'Server trusts client-provided identifiers.' Missing authorization check = 'Users access resources beyond their assigned permissions.'",
        wrongReasons: {
          0: ["No SQL query manipulation is described."],
          2: ["No script injection is described."],
          3: ["No forged request via victim's browser is described."]
        }
      },
      {
        q: "Which of the following HTTP cookie attributes should be used together to maximize session security? (Select the best combination)",
        opts: ["HttpOnly + Secure + SameSite", "HttpOnly only", "Secure only", "Path only"],
        correct: 0,
        hint: "Slide 82: 'Use HttpOnly flag to protect cookies from scripts.' 'Use Secure flag to restrict cookies to HTTPS.' 'Set SameSite attribute to mitigate CSRF risks.' All three together provide defense against XSS (HttpOnly), network sniffing (Secure), and CSRF (SameSite).",
        wrongReasons: {
          1: ["HttpOnly alone doesn't protect against network sniffing or CSRF."],
          2: ["Secure alone doesn't protect against JavaScript theft."],
          3: ["Path alone has minimal security benefit."]
        }
      },
      {
        q: "A developer believes their application is secure because they cannot think of any way to attack it. What mindset should they adopt instead?",
        opts: ["Assume attackers cannot find any bugs", "Think like an attacker during design and testing — intercept, modify, and replay requests", "Trust that open-source libraries are always secure", "Assume users will never try anything malicious"],
        correct: 1,
        hint: "Slide 89: 'Think like attacker during design and testing phases.' 'Intercept, modify, and replay requests to test behavior.' 'Security is continuous process, not one-time activity.'",
        wrongReasons: {
          0: ["This is complacency, not a security mindset."],
          2: ["Open-source libraries have vulnerabilities too."],
          3: ["Users are not the only threat — automated scanners and attackers are."]
        }
      }
    ]
      },
    ]
  },
  {
    id: 8, num: "7",
    title: "Secure Software Development Life Cycle",
    icon: "⚙️",
    desc: "SSDLC, secure by design, DevSecOps, threat modeling, testing & secure release",
    color: "#7b5cf5",
    levels: [
      {
        id: "8-1", title: "Why Security as an Afterthought Fails", slides: "2-10",
        concept: {
          title: "Why Security as an Afterthought Fails",
          body: [
      {"type": "line", "text": "Vulnerabilities begin EARLY in development — during design and requirements, not just in code."},
      {"type": "line", "text": "Attackers exploit TRUST ASSUMPTIONS baked into architecture."},
      {"type": "empty"},
      {"type": "line", "text": "Cost of late vulnerability remediation:"},
      {"type": "line", "text": "  • Fixing a vulnerability after release costs 10x-100x more than fixing it during design."},
      {"type": "line", "text": "  • Late fixes require rework, regression testing, and potential architecture changes."},
      {"type": "line", "text": "  • Some design flaws cannot be patched at all."},
      {"type": "empty"},
      {"type": "line", "text": "Business impact of reactive security:"},
      {"type": "line", "text": "  • Data breaches damage reputation and customer trust."},
      {"type": "line", "text": "  • Regulatory fines (GDPR, PCI-DSS) can be massive."},
      {"type": "line", "text": "  • Rework delays product launches and wastes engineering time."},
      {"type": "empty"},
      {"type": "line", "text": "Business logic abuse case study:"},
      {"type": "line", "text": "  • Application works technically correctly but allows unintended use."},
      {"type": "line", "text": "  • Example: an e-commerce site allows negative quantities in a cart, resulting in refunds instead of charges."},
      {"type": "line", "text": "  • Reactive security (adding patches) fails because the flaw is in the design logic, not the code syntax."}
    ]
        },
        questions: [
      {
        q: "A development team discovers a critical vulnerability after their application has been in production for 6 months. Fixing it now requires redesigning the authentication flow, retesting all integrations, and notifying affected customers. Which principle does this demonstrate?",
        opts: ["Security is always cheap to implement", "The cost of late vulnerability remediation is exponentially higher than fixing issues early", "Production vulnerabilities are always easy to patch", "Users don't care about security flaws"],
        correct: 1,
        hint: "Slide 7: 'The Cost of Late Vulnerability Remediation.' Fixing after release costs 10x-100x more than during design. Late fixes require rework, regression testing, and architecture changes.",
        wrongReasons: {
          0: ["Slide 7: Late remediation costs are high, not cheap."],
          2: ["Slide 7: Some design flaws cannot be patched; they require rework."],
          3: ["Slide 8: Data breaches damage reputation and customer trust."]
        }
      },
      {
        q: "An e-commerce application technically works correctly: users can add items to their cart, enter a quantity, and checkout. However, the system accepts negative quantities, so a user enters -5 items and receives a refund instead of being charged. No code bug exists — the logic simply never considered this case. What type of flaw is this?",
        opts: ["A syntax error", "Business logic abuse", "A network protocol flaw", "A hardware failure"],
        correct: 1,
        hint: "Slide 9: 'Mini Case Study: Business Logic Abuse.' The application works technically correctly but allows unintended use. The flaw is in the design logic — not validating that quantities must be positive.",
        wrongReasons: {
          0: ["Syntax errors prevent compilation. The code compiles and runs correctly."],
          2: ["Network protocols are not involved in this cart quantity validation."],
          3: ["No hardware component failed."]
        }
      },
      {
        q: "A company develops a web application with the plan to 'add security later' after all features are complete. The application is released on time but suffers a major breach within the first month. Why does reactive security fail in this scenario?",
        opts: ["Security patches are always effective", "Vulnerabilities often originate in early design decisions that cannot be patched away", "Attackers only target old software", "Users never exploit obvious flaws"],
        correct: 1,
        hint: "Slide 5: 'Where Vulnerabilities Actually Begin' — early design. Slide 6: 'Attackers Exploit Trust Assumptions.' Slide 10: 'Why Reactive Security Fails' — flaws rooted in design assumptions cannot be patched away; they require redesign.",
        wrongReasons: {
          0: ["Slide 10: Reactive security fails because some flaws are architectural, not patchable."],
          2: ["Attackers target all software, especially new releases with untested defenses."],
          3: ["Users and attackers actively look for flaws."]
        }
      }
    ]
      },
      {
        id: "8-2", title: "Secure by Design & Shift-Left Security", slides: "11-16",
        concept: {
          title: "Secure by Design & Shift-Left Security",
          body: [
      {"type": "line", "text": "SECURE BY DESIGN vs SECURE BY PATCH:"},
      {"type": "line", "text": "  • Secure by patch = add security after building. Reactive. Expensive. Incomplete."},
      {"type": "line", "text": "  • Secure by design = security is part of the foundation from the beginning."},
      {"type": "line", "text": "  • Secure by design means: minimizing attack surface, reducing trust assumptions, defense in depth, fail securely, least privilege."},
      {"type": "empty"},
      {"type": "line", "text": "SHIFT-LEFT SECURITY:"},
      {"type": "line", "text": "  • Move security activities EARLIER in the development lifecycle."},
      {"type": "line", "text": "  • Instead of testing at the end, embed security in requirements, architecture, and coding."},
      {"type": "line", "text": "  • The 'left' refers to earlier phases in a timeline diagram (requirements → design → code → test → deploy)."},
      {"type": "empty"},
      {"type": "line", "text": "Why early decisions matter:"},
      {"type": "line", "text": "  • Architecture decisions are the hardest and most expensive to change later."},
      {"type": "line", "text": "  • A trust boundary placed incorrectly in design affects every subsequent implementation decision."},
      {"type": "line", "text": "  • Early security constraints improve quality, reduce cost, and prevent breaches."}
    ]
        },
        questions: [
      {
        q: "A development team builds an application first, then hires a security consultant to 'audit it' two weeks before release. The consultant finds that the authentication system was designed without multi-factor authentication, and adding it now would require changing the entire user flow. What approach did the team use, and what should they have used instead?",
        opts: ["Secure by design; should have used secure by patch", "Secure by patch; should have used secure by design", "DevSecOps; should have used waterfall", "Shift-right; should have used shift-left"],
        correct: 1,
        hint: "Slide 12: 'Secure By Design vs Secure By Patch.' Secure by patch = add security after building. Secure by design = security is part of the foundation. Slide 13: 'What Secure by Design Really Means.' The authentication design flaw = a design-phase issue that should have been addressed early.",
        wrongReasons: {
          0: ["Reversed. They patched security on at the end, not designing it in from the start."],
          2: ["They did not integrate security throughout (DevSecOps). They tested at the end."],
          3: ["'Shift-right' is not a standard term; shift-left means moving security earlier."]
        }
      },
      {
        q: "In a typical development timeline, 'shift-left security' refers to moving security activities from the testing/deployment phase to which earlier phases?",
        opts: ["Only the coding phase", "Requirements, architecture, and design phases", "Only the maintenance phase", "Only the marketing phase"],
        correct: 1,
        hint: "Slide 14: 'Shift-Left Security' means moving security activities earlier. Slide 15: 'Why Early Decisions Matter' — architecture decisions are hardest to change. Security should be embedded starting at requirements, through architecture, design, and coding.",
        wrongReasons: {
          0: ["Shift-left includes more than just coding — it starts at requirements and design."],
          2: ["Maintenance is after deployment; shift-left moves earlier, not later."],
          3: ["Marketing is not part of the software development lifecycle."]
        }
      },
      {
        q: "Which of the following is a core principle of 'Secure by Design'?",
        opts: ["Add security only after user complaints", "Minimize attack surface, reduce trust assumptions, and implement defense in depth from the beginning", "Rely solely on external security audits", "Assume attackers cannot understand the system"],
        correct: 1,
        hint: "Slide 13: 'What Secure by Design Really Means' includes minimizing attack surface, reducing trust assumptions, defense in depth, failing securely, and least privilege. These are design-phase decisions, not afterthoughts.",
        wrongReasons: {
          0: ["Adding security after complaints is reactive patching, not secure by design."],
          2: ["External audits validate but do not replace built-in security design."],
          3: ["'Security through obscurity' is not a principle of secure by design."]
        }
      }
    ]
      },
      {
        id: "8-3", title: "SSDLC Fundamentals & The Continuous Cycle", slides: "17-22",
        concept: {
          title: "SSDLC Fundamentals & The Continuous Cycle",
          body: [
      {"type": "line", "text": "SSDLC (Secure Software Development Life Cycle) = integrates security into every phase of software development."},
      {"type": "empty"},
      {"type": "line", "text": "Key principle: Security is NOT a separate development phase. It is woven through requirements, design, coding, testing, and operations."},
      {"type": "empty"},
      {"type": "line", "text": "The continuous SSDLC cycle:"},
      {"type": "line", "text": "  • Plan & Requirements → Threat modeling and security requirements"},
      {"type": "line", "text": "  • Architecture & Design → Secure design patterns and trust boundaries"},
      {"type": "line", "text": "  • Implementation → Secure coding standards and code review"},
      {"type": "line", "text": "  • Verification → Security testing, pen testing, automated scanning"},
      {"type": "line", "text": "  • Release & Deploy → Hardening, secure configuration"},
      {"type": "line", "text": "  • Operations & Monitor → Logging, detection, incident response"},
      {"type": "line", "text": "  → Loop back to planning with lessons learned"},
      {"type": "empty"},
      {"type": "line", "text": "SSDLC core security activities:"},
      {"type": "line", "text": "  • Threat modeling, secure requirements, secure architecture"},
      {"type": "line", "text": "  • Secure coding training, code review, SAST/DAST"},
      {"type": "line", "text": "  • Security testing, pen testing, vulnerability management"},
      {"type": "line", "text": "  • Secure deployment, monitoring, incident response"},
      {"type": "empty"},
      {"type": "line", "text": "What SSDLC achieves:"},
      {"type": "line", "text": "  • Fewer vulnerabilities in production"},
      {"type": "line", "text": "  • Lower cost of security fixes"},
      {"type": "line", "text": "  • Faster detection and response"},
      {"type": "line", "text": "  • Compliance with security standards"},
      {"type": "line", "text": "  • Reduced business risk"}
    ]
        },
        questions: [
      {
        q: "A team treats security as a single 'security phase' that happens after coding is complete but before release. According to SSDLC principles, what is wrong with this approach?",
        opts: ["It is too thorough", "Security is not a separate phase — it must be integrated into every development activity", "It happens too early", "Security should only be handled by operations"],
        correct: 1,
        hint: "Slide 19: 'Security Is Not a Separate Development Phase.' SSDLC integrates security into requirements, design, coding, testing, and operations. A single late phase cannot catch design-level vulnerabilities.",
        wrongReasons: {
          0: ["A separate security phase is not thorough enough — it misses design-phase issues."],
          2: ["A phase after coding is late, not early."],
          3: ["Security is everyone's responsibility, not just operations."]
        }
      },
      {
        q: "Which of the following is NOT a core security activity in the SSDLC framework?",
        opts: ["Threat modeling", "Secure coding standards", "Writing user manuals only", "Security testing and pen testing"],
        correct: 2,
        hint: "Slide 21: 'SSDLC Core Security Activities' include threat modeling, secure requirements, secure architecture, secure coding, code review, security testing, pen testing, secure deployment, monitoring, and incident response. Writing user manuals is documentation, not a security activity.",
        wrongReasons: {
          0: ["Threat modeling IS a core SSDLC activity (slide 21)."],
          1: ["Secure coding standards ARE core activities (slide 21)."],
          3: ["Security testing and pen testing ARE core activities (slide 21)."]
        }
      },
      {
        q: "The SSDLC is described as a 'continuous cycle' rather than a linear process. What does this mean for a development team?",
        opts: ["They only need to think about security once at the beginning", "Lessons learned from operations and incidents feed back into planning and requirements for the next iteration", "Security stops after release", "They should never release the product"],
        correct: 1,
        hint: "Slide 20: 'The Continuous SSDLC Cycle' loops from operations back to planning. Slide 22: 'What SSDLC Achieves' includes continuous improvement. Lessons from monitoring and incidents inform the next development cycle.",
        wrongReasons: {
          0: ["A continuous cycle means security is ongoing, not a one-time activity."],
          2: ["Slide 20: The continuous cycle includes operations and feedback. Security does not end at release."],
          3: ["Release is part of the cycle; the point is continuous improvement, not avoidance."]
        }
      }
    ]
      },
      {
        id: "8-4", title: "Agile, DevSecOps & Modern Secure Delivery", slides: "23-29",
        concept: {
          title: "Agile, DevSecOps & Modern Secure Delivery",
          body: [
      {"type": "line", "text": "CLASSICAL SSDLC (waterfall-style) is no longer sufficient for modern development."},
      {"type": "line", "text": "  • Long release cycles mean vulnerabilities persist for months."},
      {"type": "line", "text": "  • Security testing at the end blocks releases or gets skipped."},
      {"type": "line", "text": "  • Business pressure to ship overrides security concerns."},
      {"type": "empty"},
      {"type": "line", "text": "How SSDLC adapts to Agile:"},
      {"type": "line", "text": "  • Security tasks become user stories and acceptance criteria."},
      {"type": "line", "text": "  • Threat modeling happens per feature, not per project."},
      {"type": "line", "text": "  • Security testing is continuous, not a final gate."},
      {"type": "empty"},
      {"type": "line", "text": "THE SHARED RESPONSIBILITY PROBLEM:"},
      {"type": "line", "text": "  • Developers blame security teams for being slow."},
      {"type": "line", "text": "  • Security teams blame developers for writing vulnerable code."},
      {"type": "line", "text": "  • Operations teams blame both for unstable releases."},
      {"type": "line", "text": "  • DevSecOps breaks down these silos."},
      {"type": "empty"},
      {"type": "line", "text": "DEVSECOPS = Security integrated into delivery pipelines."},
      {"type": "line", "text": "  • Security is automated in CI/CD pipelines."},
      {"type": "line", "text": "  • Developers get immediate feedback on security issues."},
      {"type": "line", "text": "  • Security becomes part of daily work, not an external gate."},
      {"type": "empty"},
      {"type": "line", "text": "SECURITY AUTOMATION in modern delivery:"},
      {"type": "line", "text": "  • SAST (Static Application Security Testing) in build pipelines"},
      {"type": "line", "text": "  • DAST (Dynamic Application Security Testing) in staging"},
      {"type": "line", "text": "  • Dependency scanning for vulnerable libraries"},
      {"type": "line", "text": "  • Container image scanning"},
      {"type": "line", "text": "  • Infrastructure-as-code security scanning"},
      {"type": "empty"},
      {"type": "line", "text": "Modern secure delivery model:"},
      {"type": "line", "text": "  • Plan → Build → Test → Deploy → Monitor"},
      {"type": "line", "text": "  • Security gates at each step, automated where possible"},
      {"type": "line", "text": "  • Fast feedback loops enable quick fixes"}
    ]
        },
        questions: [
      {
        q: "In a traditional waterfall project, security testing happens as a final gate before release. The team finds critical issues but the business deadline is in 3 days, so they ship anyway and plan to patch later. What problem of classical SSDLC does this illustrate?",
        opts: ["Security testing is too effective", "Security testing at the end gets overridden by business pressure to ship, and vulnerabilities persist", "Developers write perfect code", "Agile methods are too slow"],
        correct: 1,
        hint: "Slide 24: 'Why Classical SSDLC Is No Longer Sufficient.' Slide 23: In classical models, 'security testing at the end blocks releases or gets skipped.' Business pressure to ship overrides security when security is only a final gate.",
        wrongReasons: {
          0: ["The issue is not effectiveness but timing and business pressure."],
          2: ["If code were perfect, security testing would find nothing."],
          3: ["Agile is designed to be faster and more adaptive, not slower."]
        }
      },
      {
        q: "A development team, security team, and operations team each blame the others when a vulnerability reaches production. Developers say security never gave them clear requirements. Security says developers ignored their advice. Operations says both teams deploy unstable code. What concept describes this dysfunction?",
        opts: ["Perfect collaboration", "The shared responsibility problem", "Single team ownership", "DevOps success"],
        correct: 1,
        hint: "Slide 26: 'The Shared Responsibility Problem' — developers blame security for being slow, security blames developers for vulnerable code, operations blames both for instability. DevSecOps breaks down these silos.",
        wrongReasons: {
          0: ["The scenario describes conflict, not collaboration."],
          2: ["No single team owns the outcome; all blame each other."],
          3: ["DevOps success involves collaboration, not blame-shifting."]
        }
      },
      {
        q: "A company configures its CI/CD pipeline to automatically run static code analysis on every commit, scan dependencies for known vulnerabilities on every build, and block deployment if critical issues are found. Developers see results within minutes. What approach is this?",
        opts: ["Manual security auditing", "DevSecOps with security automation in the delivery pipeline", "Waterfall security gate", "Penetration testing"],
        correct: 1,
        hint: "Slide 27: 'DevSecOps: Security Integrated into Delivery Pipelines.' Slide 28: 'Security Automation in Modern Delivery' includes SAST, DAST, dependency scanning, and container scanning in CI/CD. Fast feedback = DevSecOps.",
        wrongReasons: {
          0: ["The process is automated, not manual."],
          2: ["Waterfall has a single late gate; this is continuous and automated."],
          3: ["Pen testing is a manual adversarial exercise, not automated pipeline scanning."]
        }
      },
      {
        q: "In an Agile environment, how should threat modeling be adapted compared to a waterfall project?",
        opts: ["Threat modeling should only happen at the project start", "Threat modeling should happen per feature or sprint, continuously", "Threat modeling is unnecessary in Agile", "Threat modeling should be delayed until the final release"],
        correct: 1,
        hint: "Slide 25: 'How SSDLC Adapts to Agile Development' — security tasks become user stories, threat modeling happens per feature, and security testing is continuous. In waterfall, threat modeling is a single project activity. In Agile, it is ongoing.",
        wrongReasons: {
          0: ["That is the waterfall approach, not Agile."],
          2: ["Threat modeling is always necessary; Agile requires it to be more frequent."],
          3: ["Delaying until final release is the old waterfall approach that fails."]
        }
      }
    ]
      },
      {
        id: "8-5", title: "Secure Planning & Requirements Engineering", slides: "30-34",
        concept: {
          title: "Secure Planning & Requirements Engineering",
          body: [
      {"type": "line", "text": "SECURITY REQUIREMENTS are real requirements, not optional add-ons."},
      {"type": "line", "text": "  • Every functional requirement should have a corresponding security consideration."},
      {"type": "line", "text": "  • Example: 'Users can upload files' → 'Uploaded files must be scanned for malware and size-limited.'"},
      {"type": "empty"},
      {"type": "line", "text": "ABUSE CASES & MISUSE CASES:"},
      {"type": "line", "text": "  • Abuse case = how an attacker could misuse a legitimate feature."},
      {"type": "line", "text": "  • Misuse case = how a legitimate user could accidentally cause harm."},
      {"type": "line", "text": "  • Example abuse case: 'Attacker uses password reset flow to enumerate valid email addresses.'"},
      {"type": "line", "text": "  • Example misuse case: 'Admin accidentally deletes all user data because no confirmation is required.'"},
      {"type": "empty"},
      {"type": "line", "text": "SECURITY IN AGILE PLANNING:"},
      {"type": "line", "text": "  • Security tasks are added to the product backlog as user stories."},
      {"type": "line", "text": "  • Example: 'As a user, I want my password to be hashed so that my credentials are protected if the database is breached.'"},
      {"type": "line", "text": "  • Security work is estimated and prioritized alongside features."},
      {"type": "empty"},
      {"type": "line", "text": "SECURITY ACCEPTANCE CRITERIA:"},
      {"type": "line", "text": "  • Define when a feature is 'secure enough' to release."},
      {"type": "line", "text": "  • Example criteria: 'All API endpoints require authentication,' 'No sensitive data in URLs,' 'Input validated on server side.'"},
      {"type": "line", "text": "  • Without explicit criteria, security is subjective and inconsistent."}
    ]
        },
        questions: [
      {
        q: "A product manager writes a requirement: 'Users can upload profile pictures.' A security engineer adds: 'Uploaded images must be limited to 5MB, scanned for embedded malicious scripts, and stored outside the web root.' What is the security engineer doing?",
        opts: ["Adding optional nice-to-haves", "Defining real security requirements that constrain how the feature is implemented", "Blocking the feature entirely", "Writing marketing copy"],
        correct: 1,
        hint: "Slide 31: 'Security Requirements are Real Requirements.' Every functional requirement needs a corresponding security consideration. 'Users can upload files' requires constraints on size, content validation, and storage location.",
        wrongReasons: {
          0: ["Slide 31: Security requirements are real requirements, not optional."],
          2: ["The feature is still allowed — just with safe constraints."],
          3: ["Marketing copy has nothing to do with technical security constraints."]
        }
      },
      {
        q: "A team analyzes how an attacker could misuse the 'password reset' feature to determine which email addresses are registered in the system, then uses that list for targeted phishing. What is this analysis called?",
        opts: ["A misuse case", "An abuse case", "A functional test", "A user story"],
        correct: 1,
        hint: "Slide 32: 'Abuse Cases & Misuse Cases.' Abuse case = how an attacker could misuse a legitimate feature. Misuse case = how a legitimate user could accidentally cause harm. Enumerating valid emails via password reset = abuse case.",
        wrongReasons: {
          0: ["Misuse cases involve legitimate users causing accidental harm. An attacker using a feature maliciously = abuse case."],
          2: ["Functional tests verify intended behavior, not attacker misuse."],
          3: ["A user story describes desired functionality, not attacker behavior."]
        }
      },
      {
        q: "An Agile team writes the following backlog item: 'As a user, I want my session to expire after 15 minutes of inactivity so that my account remains secure if I forget to log out.' What is this an example of?",
        opts: ["A bug report", "A security user story in Agile planning", "A marketing requirement", "A hardware specification"],
        correct: 1,
        hint: "Slide 33: 'Security in Agile Planning' — security tasks become user stories and acceptance criteria. This backlog item is a user story with a clear security benefit (session expiration for protection).",
        wrongReasons: {
          0: ["This describes desired behavior, not a defect."],
          2: ["Marketing requirements focus on features and benefits, not session security."],
          3: ["Session timeout is a software security control, not hardware."]
        }
      },
      {
        q: "A development team defines explicit rules that a feature must meet before it can be considered complete and released. These rules include: 'All inputs are validated server-side,' 'No hardcoded secrets in code,' and 'Error messages do not reveal database schema.' What concept is this?",
        opts: ["Technical debt", "Security acceptance criteria", "Code refactoring", "User interface design"],
        correct: 1,
        hint: "Slide 34: 'Security Acceptance Criteria' define when a feature is 'secure enough.' Examples include input validation, no hardcoded secrets, and safe error messages. Without explicit criteria, security is subjective.",
        wrongReasons: {
          0: ["Technical debt is accumulated shortcuts, not explicit completion rules."],
          2: ["Refactoring improves code structure; these are release conditions."],
          3: ["UI design is about visual layout, not security rules for release."]
        }
      }
    ]
      },
      {
        id: "8-6", title: "Secure Architecture & Threat Modeling", slides: "35-41",
        concept: {
          title: "Secure Architecture & Threat Modeling",
          body: [
      {"type": "line", "text": "THREAT MODELING IN ARCHITECTURE:"},
      {"type": "line", "text": "  • Think like an attacker during the design phase."},
      {"type": "line", "text": "  • Identify assets, adversaries, attack surfaces, trust boundaries."},
      {"type": "line", "text": "  • A threat model is a living document, not a one-time activity."},
      {"type": "empty"},
      {"type": "line", "text": "UNDERSTANDING ATTACK SURFACE:"},
      {"type": "line", "text": "  • Every interface, API, port, and user input point is part of the attack surface."},
      {"type": "line", "text": "  • Design should minimize unnecessary interfaces."},
      {"type": "line", "text": "  • More complexity = larger attack surface."},
      {"type": "empty"},
      {"type": "line", "text": "TRUST BOUNDARIES MATTER:"},
      {"type": "line", "text": "  • Mark where trust levels change (e.g., public internet → DMZ → internal network → database)."},
      {"type": "line", "text": "  • Data crossing trust boundaries must be validated and encrypted."},
      {"type": "line", "text": "  • Internal components should not blindly trust each other (zero trust)."},
      {"type": "empty"},
      {"type": "line", "text": "STRIDE: Practical Threat Categories:"},
      {"type": "line", "text": "  • Spoofing — impersonating users or systems"},
      {"type": "line", "text": "  • Tampering — unauthorized data modification"},
      {"type": "line", "text": "  • Repudiation — denying actions without proof"},
      {"type": "line", "text": "  • Information Disclosure — unauthorized data access"},
      {"type": "line", "text": "  • Denial of Service — disrupting availability"},
      {"type": "line", "text": "  • Elevation of Privilege — gaining higher permissions"},
      {"type": "empty"},
      {"type": "line", "text": "SECURE ARCHITECTURE PRINCIPLES:"},
      {"type": "line", "text": "  • Defense in depth — multiple layers of protection"},
      {"type": "line", "text": "  • Least privilege — minimal necessary permissions"},
      {"type": "line", "text": "  • Fail securely — default to safe state on errors"},
      {"type": "line", "text": "  • Separation of duties — divide critical operations"},
      {"type": "line", "text": "  • Economy of mechanism — keep design simple"},
      {"type": "empty"},
      {"type": "line", "text": "ARCHITECTURE SECURITY REVIEW:"},
      {"type": "line", "text": "  • Peer review of design documents with security lens"},
      {"type": "line", "text": "  • Validate trust boundaries and data flows"},
      {"type": "line", "text": "  • Check for single points of failure"}
    ]
        },
        questions: [
      {
        q: "During architecture design, a team draws lines on their system diagram marking where the public internet meets their load balancer, where the application server talks to the database, and where user authentication happens. According to the module, why are these lines important?",
        opts: ["They are just decorative", "They represent trust boundaries where data must be validated and security controls enforced", "They show network speed limits", "They mark where backups should occur"],
        correct: 1,
        hint: "Slide 38: 'Trust Boundaries Matter.' Trust boundaries identify where trust assumptions change, privilege levels transition, and authentication boundaries exist. Data crossing these lines must be validated and protected.",
        wrongReasons: {
          0: ["Slide 38: 'Trust Boundaries Matter' — these are functional security design elements."],
          2: ["Trust boundaries are about security levels, not bandwidth."],
          3: ["Backups are important but unrelated to trust boundary marking."]
        }
      },
      {
        q: "A team uses the STRIDE framework during threat modeling. They identify that an attacker could modify a request parameter to change another user's account settings. Which STRIDE category does this represent?",
        opts: ["Spoofing", "Tampering", "Repudiation", "Information Disclosure"],
        correct: 1,
        hint: "Slide 39: 'STRIDE: Practical Threat Categories.' Tampering = 'Unauthorized data modification.' Changing another user's settings without authorization = tampering with data.",
        wrongReasons: {
          0: ["Spoofing = impersonation. The attacker is not pretending to be someone else; they are changing data."],
          2: ["Repudiation = denying actions. No denial is described."],
          3: ["Information Disclosure = unauthorized data access. The issue is data modification, not access."]
        }
      },
      {
        q: "An architecture review identifies that the entire application uses a single database account with full administrator privileges for all operations — reading user data, updating orders, and deleting logs. What secure architecture principle is being violated?",
        opts: ["Economy of mechanism", "Least privilege", "Fail securely", "Defense in depth"],
        correct: 1,
        hint: "Slide 40: 'Secure Architecture Principles' include least privilege. Slide 35: SSDLC architecture should enforce least privilege. Using one admin account for everything violates 'grant only minimal necessary permissions.'",
        wrongReasons: {
          0: ["Economy of mechanism means keeping design simple. One admin account is simple but insecure."],
          2: ["Fail securely means defaulting to safe states on errors."],
          3: ["Defense in depth uses multiple layers. The issue is excessive permissions, not missing layers."]
        }
      },
      {
        q: "Which of the following is NOT one of the STRIDE threat categories?",
        opts: ["Tampering", "Elevation of Privilege", "Social Engineering", "Information Disclosure"],
        correct: 2,
        hint: "Slide 39: STRIDE = Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. Social engineering is an attack method, not a STRIDE category.",
        wrongReasons: {
          0: ["Tampering IS a STRIDE category."],
          1: ["Elevation of Privilege IS a STRIDE category."],
          3: ["Information Disclosure IS a STRIDE category."]
        }
      }
    ]
      },
      {
        id: "8-7", title: "Secure Implementation & Developer Practices", slides: "42-48",
        concept: {
          title: "Secure Implementation & Developer Practices",
          body: [
      {"type": "line", "text": "SECURE CODING is more than writing bug-free code:"},
      {"type": "line", "text": "  • Bug-free code can still have security flaws (business logic issues)."},
      {"type": "line", "text": "  • Security requires intentional defensive coding patterns."},
      {"type": "line", "text": "  • Developers must understand attack patterns to prevent them."},
      {"type": "empty"},
      {"type": "line", "text": "INPUT VALIDATION & DATA HANDLING:"},
      {"type": "line", "text": "  • Never trust user input — validate on the server side."},
      {"type": "line", "text": "  • Use allowlists (permitted values) rather than blocklists (forbidden values)."},
      {"type": "line", "text": "  • Sanitize data before using it in queries, commands, or rendering."},
      {"type": "line", "text": "  • Handle errors without revealing sensitive internal information."},
      {"type": "empty"},
      {"type": "line", "text": "AUTHENTICATION & AUTHORIZATION ENFORCEMENT:"},
      {"type": "line", "text": "  • Enforce authentication on every protected endpoint."},
      {"type": "line", "text": "  • Check authorization (what the user can do) after authentication (who they are)."},
      {"type": "line", "text": "  • Use centralized access control, not scattered checks."},
      {"type": "line", "text": "  • Session management: strong IDs, expiration, invalidation on logout."},
      {"type": "empty"},
      {"type": "line", "text": "SECRETS & SENSITIVE DATA HANDLING:"},
      {"type": "line", "text": "  • Never hardcode passwords, API keys, or tokens in source code."},
      {"type": "line", "text": "  • Use secret management systems (vaults, environment variables)."},
      {"type": "line", "text": "  • Encrypt sensitive data at rest and in transit."},
      {"type": "line", "text": "  • Minimize what data is collected and stored (data minimization)."},
      {"type": "empty"},
      {"type": "line", "text": "DEPENDENCY SECURITY & SUPPLY CHAIN RISK:"},
      {"type": "line", "text": "  • Third-party libraries can introduce vulnerabilities (Log4Shell, SolarWinds)."},
      {"type": "line", "text": "  • Maintain a software bill of materials (SBOM)."},
      {"type": "line", "text": "  • Scan dependencies for known vulnerabilities."},
      {"type": "line", "text": "  • Pin versions and verify integrity of packages."},
      {"type": "empty"},
      {"type": "line", "text": "SECURE CODE REVIEW & AUTOMATED CHECKS:"},
      {"type": "line", "text": "  • Manual peer review catches logic flaws tools miss."},
      {"type": "line", "text": "  • Automated tools (SAST, SCA) catch known vulnerability patterns."},
      {"type": "line", "text": "  • Both manual and automated reviews are needed."}
    ]
        },
        questions: [
      {
        q: "A developer writes code that handles file uploads. They check that the file extension is not '.exe' to prevent executable uploads. An attacker uploads a file named 'malicious.php.jpg' which bypasses the check and executes as PHP on the server. What validation approach should have been used instead?",
        opts: ["Blocklist of forbidden extensions", "Allowlist of permitted extensions and server-side content validation", "Client-side JavaScript validation only", "Trust the filename from the user"],
        correct: 1,
        hint: "Slide 44: 'Input Validation & Data Handling.' Never trust user input. Use allowlists (permitted values) rather than blocklists (forbidden values). Server-side validation is required. The blocklist approach was bypassed.",
        wrongReasons: {
          0: ["Blocklists can be bypassed with tricks like double extensions."],
          2: ["Client-side validation can be bypassed entirely by attackers."],
          3: ["User-submitted filenames should never be trusted."]
        }
      },
      {
        q: "An application's source code contains a hardcoded database password that is the same across all environments. The code is pushed to a public GitHub repository. An attacker finds the password and accesses the production database. What principle was violated?",
        opts: ["Defense in depth", "Secrets & sensitive data handling", "Fail securely", "Input validation"],
        correct: 1,
        hint: "Slide 46: 'Secrets & Sensitive Data Handling.' Never hardcode passwords, API keys, or tokens. Use secret management systems. Hardcoded secrets in public repositories are a common and serious vulnerability.",
        wrongReasons: {
          0: ["Defense in depth uses multiple layers. The issue is specifically secret exposure."],
          2: ["Fail securely means safe defaults on errors, not secret management."],
          3: ["Input validation is about user data, not developer secrets."]
        }
      },
      {
        q: "A web application checks if a user is logged in on the home page, but some API endpoints do not check authentication because 'they are only called by the frontend.' An attacker directly calls these endpoints and accesses admin functionality. What implementation flaw is this?",
        opts: ["Weak encryption", "Missing authentication and authorization enforcement on every endpoint", "Slow database queries", "Poor user interface design"],
        correct: 1,
        hint: "Slide 45: 'Authentication & Authorization Enforcement.' Enforce authentication on every protected endpoint. Check authorization after authentication. The frontend-only assumption is dangerous because attackers can call APIs directly.",
        wrongReasons: {
          0: ["The issue is not encryption strength; it's missing access checks."],
          2: ["Database speed is unrelated to missing authentication."],
          3: ["UI design doesn't affect API endpoint security when called directly."]
        }
      },
      {
        q: "A team uses 47 third-party open-source libraries in their application. They never check which versions are used or whether any have known vulnerabilities. After a breach, they discover one library had a critical CVE published 6 months earlier. What practice was missing?",
        opts: ["User acceptance testing", "Dependency security and supply chain risk management", "Performance benchmarking", "Code formatting"],
        correct: 1,
        hint: "Slide 47: 'Dependency Security & Supply Chain Risk.' Third-party libraries can introduce vulnerabilities. Teams should maintain SBOMs, scan dependencies, pin versions, and verify package integrity. Missing this = supply chain risk.",
        wrongReasons: {
          0: ["UAT tests functionality from a user perspective, not library vulnerabilities."],
          2: ["Performance benchmarking measures speed, not security."],
          3: ["Code formatting is about style, not vulnerability management."]
        }
      }
    ]
      },
      {
        id: "8-8", title: "Security Verification & Testing", slides: "49-55",
        concept: {
          title: "Security Verification & Testing",
          body: [
      {"type": "line", "text": "SECURITY TESTING ≠ FUNCTIONAL TESTING:"},
      {"type": "line", "text": "  • Functional testing asks: 'Does it do what it should?'"},
      {"type": "line", "text": "  • Security testing asks: 'Can it be made to do what it should NOT?'"},
      {"type": "line", "text": "  • A system can pass all functional tests and still be deeply insecure."},
      {"type": "empty"},
      {"type": "line", "text": "SECURITY TESTING TECHNIQUES:"},
      {"type": "line", "text": "  • SAST (Static Application Security Testing): analyzes source code for vulnerabilities without running the application."},
      {"type": "line", "text": "  • DAST (Dynamic Application Security Testing): tests running application from the outside (like an attacker)."},
      {"type": "line", "text": "  • IAST (Interactive Application Security Testing): monitors application from inside while running tests."},
      {"type": "line", "text": "  • Fuzzing: sending random/malformed input to find crashes or unexpected behavior."},
      {"type": "line", "text": "  • Manual security testing: expert analysis of logic, workflows, and edge cases."},
      {"type": "empty"},
      {"type": "line", "text": "MANUAL SECURITY TESTING STILL MATTERS:"},
      {"type": "line", "text": "  • Automated tools find known patterns, not novel logic flaws."},
      {"type": "line", "text": "  • Business logic vulnerabilities (IDOR, race conditions) require human analysis."},
      {"type": "line", "text": "  • Penetration testing simulates real adversaries."},
      {"type": "empty"},
      {"type": "line", "text": "PENETRATION TESTING & ADVERSARIAL VALIDATION:"},
      {"type": "line", "text": "  • Ethical hackers attempt to break the system."},
      {"type": "line", "text": "  • Validates defenses against realistic attacks."},
      {"type": "line", "text": "  • Findings are prioritized by exploitability and impact."},
      {"type": "empty"},
      {"type": "line", "text": "SECURITY TESTING IN CI/CD:"},
      {"type": "line", "text": "  • Automated security tests run on every commit/build."},
      {"type": "line", "text": "  • Fail the build on critical vulnerabilities."},
      {"type": "line", "text": "  • Developers get immediate feedback."},
      {"type": "empty"},
      {"type": "line", "text": "VERIFICATION COMPLETES THE FEEDBACK LOOP:"},
      {"type": "line", "text": "  • Testing reveals whether security controls actually work."},
      {"type": "line", "text": "  • Results feed back into requirements and design."},
      {"type": "line", "text": "  • Without verification, security is just an assumption."}
    ]
        },
        questions: [
      {
        q: "A QA team verifies that a login form accepts valid usernames and passwords, rejects empty fields, and displays appropriate error messages. They declare the feature 'fully tested.' From a security perspective, what is missing?",
        opts: ["More functional test cases", "Security testing that asks whether the form can be abused — e.g., SQL injection, brute force, credential stuffing", "Better UI colors", "Faster page load times"],
        correct: 1,
        hint: "Slide 50: 'Security Testing ≠ Functional Testing.' Functional testing asks 'Does it do what it should?' Security testing asks 'Can it be made to do what it should NOT?' The QA team only did functional validation.",
        wrongReasons: {
          0: ["The functional tests are complete. What's missing is security-focused testing."],
          2: ["UI design is not a security testing concern."],
          3: ["Performance is important but not the security gap."]
        }
      },
      {
        q: "A security tool scans an application's source code without executing it, looking for patterns like hardcoded passwords, SQL query concatenation, and weak cryptography. What type of testing is this?",
        opts: ["DAST (Dynamic Application Security Testing)", "SAST (Static Application Security Testing)", "Penetration testing", "Fuzzing"],
        correct: 1,
        hint: "Slide 51: 'Security Testing Techniques.' SAST = 'analyzes source code for vulnerabilities without running the application.' DAST = tests running applications from outside. The tool analyzing source code statically = SAST.",
        wrongReasons: {
          0: ["DAST tests running applications from the outside. This scans source code without execution."],
          2: ["Penetration testing is manual adversarial testing of running systems."],
          3: ["Fuzzing sends random input to running applications, not code pattern analysis."]
        }
      },
      {
        q: "An automated scanner reports zero vulnerabilities in an application. However, a penetration tester discovers that by changing a numeric ID in a URL parameter, they can view other users' private records. The application logic was correct but the authorization check was missing. Why did the scanner miss this?",
        opts: ["The scanner was broken", "Automated tools find known patterns but miss novel logic flaws and business logic vulnerabilities", "The vulnerability did not exist", "The scanner only tests network ports"],
        correct: 1,
        hint: "Slide 52: 'Manual Security Testing Still Matters.' Automated tools 'find known patterns, not novel logic flaws.' Business logic vulnerabilities like IDOR 'require human analysis.' The missing authorization check is a logical flaw, not a known code pattern.",
        wrongReasons: {
          0: ["The scanner worked as designed — it just cannot detect logic flaws."],
          2: ["The IDOR vulnerability definitely existed and was exploitable."],
          3: ["Application security scanners test application logic, not just ports."]
        }
      },
      {
        q: "A company's CI/CD pipeline is configured to run automated security scans on every pull request. If critical vulnerabilities are found, the build fails and the developer is notified immediately. What benefit does this provide?",
        opts: ["It delays releases indefinitely", "It creates a fast feedback loop so developers fix issues while the code is still fresh in their minds", "It removes the need for all manual testing", "It makes security the security team's sole responsibility"],
        correct: 1,
        hint: "Slide 54: 'Security Testing in CI/CD' and Slide 55: 'Verification Completes the Feedback Loop.' Fast feedback means developers fix issues early while context is fresh. 'Without verification, security is just an assumption.'",
        wrongReasons: {
          0: ["Automated gating prevents bad code from shipping, but doesn't inherently delay releases if issues are fixed quickly."],
          2: ["Manual testing like pen testing is still needed."],
          3: ["Slide 27: DevSecOps makes security everyone's responsibility, not just the security team."]
        }
      }
    ]
      },
      {
        id: "8-9", title: "Secure Release, Operations & Final Certification", slides: "56-62",
        concept: {
          title: "Secure Release, Operations & The Continuous Loop",
          body: [
      {"type": "line", "text": "SECURITY DOES NOT END AT RELEASE:"},
      {"type": "line", "text": "  • Deployment opens the system to real adversaries."},
      {"type": "line", "text": "  • Production environments differ from development."},
      {"type": "line", "text": "  • New vulnerabilities are discovered after release."},
      {"type": "empty"},
      {"type": "line", "text": "SECURE DEPLOYMENT & HARDENING:"},
      {"type": "line", "text": "  • Remove debug features, test accounts, and default credentials."},
      {"type": "line", "text": "  • Apply principle of least privilege to production services."},
      {"type": "line", "text": "  • Use infrastructure-as-code for reproducible, auditable deployments."},
      {"type": "line", "text": "  • Enable TLS/HTTPS, secure headers, and WAF rules."},
      {"type": "empty"},
      {"type": "line", "text": "MONITORING, LOGGING & DETECTION:"},
      {"type": "line", "text": "  • Log security-relevant events (authentication, access, changes)."},
      {"type": "line", "text": "  • Monitor for anomalies and attack patterns."},
      {"type": "line", "text": "  • Set up alerting for suspicious activity."},
      {"type": "line", "text": "  • Logs must be protected from tampering."},
      {"type": "empty"},
      {"type": "line", "text": "VULNERABILITY & PATCH MANAGEMENT:"},
      {"type": "line", "text": "  • Continuously scan for new vulnerabilities in production."},
      {"type": "line", "text": "  • Apply patches promptly for critical issues."},
      {"type": "line", "text": "  • Test patches before applying to production."},
      {"type": "line", "text": "  • Maintain an inventory of all components."},
      {"type": "empty"},
      {"type": "line", "text": "INCIDENT RESPONSE & LESSONS LEARNED:"},
      {"type": "line", "text": "  • Have a defined incident response plan."},
      {"type": "line", "text": "  • Detect, contain, eradicate, recover, and document."},
      {"type": "line", "text": "  • After resolution, conduct a post-mortem."},
      {"type": "line", "text": "  • Feed lessons learned back into requirements and design."},
      {"type": "empty"},
      {"type": "line", "text": "SSDLC AS A CONTINUOUS SECURITY LOOP:"},
      {"type": "line", "text": "  • Operations feeds back into planning."},
      {"type": "line", "text": "  • Incidents improve the next cycle."},
      {"type": "line", "text": "  • Security is never 'done' — it evolves with threats."}
    ]
        },
        questions: [
      {
        q: "An application is deployed to production with debug mode enabled, test accounts with weak passwords still present, and default administrator credentials unchanged. What phase of SSDLC should have prevented this?",
        opts: ["Requirements engineering", "Secure deployment and hardening", "Threat modeling", "User acceptance testing"],
        correct: 1,
        hint: "Slide 58: 'Secure Deployment & Hardening' includes removing debug features, test accounts, and default credentials. Applying least privilege to production services. These are deployment-phase security activities.",
        wrongReasons: {
          0: ["Requirements define what the system should do. They don't directly control deployment settings."],
          2: ["Threat modeling identifies risks but doesn't configure production."],
          3: ["UAT validates functionality, not production hardening."]
        }
      },
      {
        q: "After a security breach, a company discovers that their logs were incomplete, stored on the same compromised server, and showed no evidence of the attacker's actions because the attacker deleted them. What two operational practices were missing?",
        opts: ["Better marketing and faster servers", "Proper monitoring/logging and log protection against tampering", "More developers and bigger databases", "User training and UI redesign"],
        correct: 1,
        hint: "Slide 59: 'Monitoring, Logging & Detection' — log security-relevant events, monitor for anomalies, and 'Logs must be protected from tampering.' Storing logs on the compromised server and allowing deletion = missing log protection.",
        wrongReasons: {
          0: ["Marketing and server speed are irrelevant to log integrity."],
          2: ["More developers and bigger databases don't fix logging issues."],
          3: ["User training and UI design are not log security controls."]
        }
      },
      {
        q: "A company patches a critical vulnerability within 24 hours of disclosure, but the patch breaks a key feature and causes a 4-hour outage. They had no testing environment to validate the patch first. What SSDLC practice was missing?",
        opts: ["Agile planning", "Vulnerability and patch management with testing before production deployment", "User story writing", "Threat modeling"],
        correct: 1,
        hint: "Slide 60: 'Vulnerability & Patch Management' includes 'Apply patches promptly' AND 'Test patches before applying to production.' The outage resulted from untested deployment.",
        wrongReasons: {
          0: ["Agile planning is about work organization, not patch testing."],
          2: ["User stories capture requirements but don't test patches."],
          3: ["Threat modeling identifies risks but doesn't validate patches."]
        }
      },
      {
        q: "After resolving a security incident, a team documents what happened, how the attacker got in, what data was affected, and what controls failed. They then update their threat model and security requirements to prevent similar incidents. What concept does this represent?",
        opts: ["Blame assignment", "Incident response with lessons learned feeding back into the SSDLC loop", "Ignoring the incident", "Legal prosecution only"],
        correct: 1,
        hint: "Slide 61: 'Incident Response & Lessons Learned' — after resolution, conduct a post-mortem and 'Feed lessons learned back into requirements and design.' Slide 62: 'SSDLC as a Continuous Security Loop' — operations feeds back into planning.",
        wrongReasons: {
          0: ["The scenario describes learning, not blame."],
          2: ["They are actively using the incident to improve."],
          3: ["Legal action might happen, but the described activities are about process improvement."]
        }
      },
      {
        q: "Which statement best captures the overall philosophy of Module 7: Secure Software Development Life Cycle?",
        opts: ["Security should be tested once before release", "Security is a continuous, integrated process from requirements through operations, with feedback loops that never end", "Security is the sole responsibility of the security team", "Developers should not think about security"],
        correct: 1,
        hint: "Slide 17-18: SSDLC 'integrates security into software development activities.' Slide 62: 'SSDLC as a Continuous Security Loop.' Security is never done — it evolves with threats and feeds back into every phase.",
        wrongReasons: {
          0: ["Slide 19: Security is not a separate phase. Slide 55: Verification is continuous."],
          2: ["Slide 26-27: DevSecOps makes security a shared responsibility."],
          3: ["Slide 43: Developers must understand attack patterns and code defensively."]
        }
      }
    ]
      },
    ]
  },
];
