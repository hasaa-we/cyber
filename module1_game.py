#!/usr/bin/env python3
"""
Module 1: Foundations of Cybersecurity
Covers all slides from I3336-25-26-Module-1.pdf
Features:
- Slide coverage per level
- Pre-question explanations for hard concepts
- Example explanations after wrong answers
- All concepts and topics included
"""

import sys, time

def slow_print(text, delay=0.01):
    for char in text:
        sys.stdout.write(char); sys.stdout.flush(); time.sleep(delay)
    print()

def explain_concept(title, lines):
    print(f"\n{'='*60}\n📚 CONCEPT: {title}\n{'='*60}")
    for line in lines: print(f"   {line}")
    print(f"{'='*60}\n")
    input("Press ENTER to continue...")

def ask(question, options, correct, explanation_before=None, wrong_examples=None, hint=""):
    if explanation_before:
        print("\n💡 Concept clarification:\n")
        for line in explanation_before: print(f"   ▸ {line}")
        print(); input("Press ENTER for the question...")
    print(f"\n❓ {question}")
    for i, opt in enumerate(options, 1): print(f"   {i}. {opt}")
    print("   [Type 'h' for hint]")
    while True:
        try:
            choice = input("\nYour answer: ").strip().lower()
            if choice == 'h' and hint: print(f"\n💡 HINT: {hint}"); continue
            choice_int = int(choice)
            if 1 <= choice_int <= len(options):
                if choice_int == correct:
                    print("\n✅ CORRECT!"); return True
                else:
                    print("\n❌ INCORRECT.")
                    if wrong_examples and choice_int in wrong_examples:
                        print(f"\n📝 WHY THAT'S WRONG:")
                        for line in wrong_examples[choice_int]: print(f"   • {line}")
                    print("\nTry again, or type 'h' for a hint.")
            else: print("Please enter a valid number.")
        except ValueError:
            if choice != 'h': print("Please enter a number, or 'h' for hint.")

def level_header(level_num, title, slides):
    print(f"\n{'='*60}\n   LEVEL {level_num}: {title}\n   📄 Slides: {slides}\n{'='*60}\n")

class Game:
    def __init__(self):
        self.score = 0; self.max_score = 0; self.lives = 3; self.completed = []

    def start(self):
        print("="*60)
        print("   🏛️ MODULE 1: FOUNDATIONS OF CYBERSECURITY QUEST 🏛️")
        print("="*60)
        slow_print("You are a security architect. Before defending systems,")
        slow_print("you must understand WHY systems fail, WHAT assets matter,")
        slow_print("and HOW security objectives interact.")
        print("\n💀 3 lives | 🏆 8 levels | 📚 All slides covered")
        input("\nPress ENTER to begin...")

        levels = [
            ("Introduction & Systems Evolution", "2-13", self.l1),
            ("Security Mindset & Design Principles", "14-32", self.l2),
            ("Assets & Threats", "25-37", self.l3),
            ("Murphy's Law & Security Thinking", "38-48", self.l4),
            ("Vulnerabilities, Risk & Attacks", "48-56", self.l5),
            ("Security Objectives: CIA", "64-95", self.l6),
            ("Auth, Accountability, Privacy & Trade-offs", "96-109", self.l7),
            ("Final Certification", "2-109", self.l8),
        ]
        for i, (title, slides, fn) in enumerate(levels, 1):
            if self.lives <= 0: self.game_over(); return
            level_header(i, title, slides)
            success = fn()
            if success:
                self.completed.append(i)
                print(f"\n🎉 LEVEL {i} COMPLETE! Score: {self.score}/{self.max_score}")
            else:
                self.lives -= 1
                print(f"\n💔 LEVEL {i} FAILED. Lives: {self.lives}")
                if self.lives > 0 and input("Retry? (y/n): ").strip().lower() == 'y':
                    success = fn()
                    if success:
                        self.completed.append(i)
                        print(f"\n🎉 LEVEL {i} COMPLETE! Score: {self.score}/{self.max_score}")
                    else:
                        self.lives -= 1
                        print(f"\n💔 FAILED AGAIN. Lives: {self.lives}")
        self.victory()

    def l1(self):
        explain_concept("Introduction & Systems Evolution", [
            "Cybersecurity studies how digital systems fail under INTENTIONAL attack, not accidental errors.",
            "Most security failures originate from early DESIGN decisions.",
            "EARLY systems: isolated, trusted users, physical control replaced digital security.",
            "MODERN systems: interconnected, permanently exposed, rely on external libraries/services.",
            "Attack surface expanded with cloud & mobile computing.",
            "Old assumptions no longer hold: attackers deliberately violate assumptions systems still rely on.",
            "Why cybersecurity became necessary:",
            "  • Integration removes isolation barriers (security becomes interdependent).",
            "  • Attack automation allows massive scale.",
            "  • Cost of attacking decreased dramatically (DDoS for $5-15/hour)."
        ])
        q1 = ask("What is the main reason cybersecurity became a critical field?",
            ["Computers became faster", "Systems shifted from isolated/trusted to interconnected/permanently exposed",
             "Operating systems became open-source", "Keyboards became wireless"], 2,
            None, {1:["Speed is not the core reason for security needs."],3:["Open-source is a factor but not the fundamental shift."],4:["Wireless keyboards are a minor peripheral concern."]},
            "Slides 4-9: Early systems were isolated with trusted users. Modern systems are interconnected, permanently exposed, with expanded attack surfaces. Old assumptions no longer hold.")
        self.ms(); self.sc(q1)

        q2 = ask("A university's Student Information System was originally designed for internal staff only. Over time, it was connected to the Learning Management System and opened for remote access. A vulnerability in the LMS allowed unauthorized access to grade records. What is the key lesson?",
            ["The LMS should have been deleted", "Integration removes isolation barriers and makes security interdependent",
             "Grade records are not important", "Remote access is always safe"], 2,
            None, {1:["Deleting the LMS is not practical or the lesson."],3:["Grade records are highly sensitive."],4:["Remote access introduces risks, not safety."]},
            "Slide 10: 'Integration removes isolation barriers and makes the security of systems interdependent.' Slide 16 case study: connecting systems expanded the attack surface.")
        self.ms(); self.sc(q2)

        q3 = ask("An attacker can rent a botnet for as little as $5 per hour to launch DDoS attacks. What does this illustrate?",
            ["Cybersecurity is too expensive for defenders", "The cost of attacking decreased dramatically",
             "Botnets are illegal everywhere", "DDoS attacks are impossible to stop"], 2,
            None, {1:["The slide focuses on attacker cost, not defender cost."],3:["While illegal, the low cost makes attacks accessible."],4:["The slide doesn't say they're impossible to stop."]},
            "Slide 12: 'The cost of attacking decreased dramatically.' DDoS-for-hire services cost $5-$15 per hour. Low cost = massive scale of attacks.")
        self.ms(); self.sc(q3)

        q4 = ask("A web application uses open-source authentication libraries, third-party payment APIs, and cloud storage. A vulnerability in one dependency compromises the entire application. What principle does this demonstrate?",
            ["Security depends only on code you write", "Security depends on code you did not write or control",
             "Open-source software is always secure", "Third-party APIs are unnecessary"], 2,
            None, {1:["The opposite — the app was compromised despite its own code being correct."],3:["Open-source can have vulnerabilities too."],4:["Third-party APIs are common and useful but introduce dependencies."]},
            "Slide 7: 'Software relies heavily on external libraries & services.' 'Security depends on code you did not write or control.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l2(self):
        explain_concept("Security Mindset & Design Principles", [
            "Accidents vs Attacks:",
            "  • Bugs cause unintentional failures from mistakes.",
            "  • Attacks are intentional actions by adversaries who adapt to defenses.",
            "  • Fixing bugs alone is insufficient — attackers actively search for new weaknesses.",
            "  • Security assumes INTELLIGENT adversaries, not random failures.",
            "",
            "Security is NOT:",
            "  • A feature, a single tool, encryption alone, compliance, or optional.",
            "  • Security emerges from interaction of ALL components: software, hardware, data, network, users.",
            "  • A secure component in an insecure system is STILL insecure.",
            "",
            "Design requires trade-offs: Security vs Performance, Availability, Usability.",
            "",
            "Systems are built on assumptions (trusted input, honest users, safe networks). Attackers deliberately violate them.",
            "Vulnerabilities are often introduced BEFORE coding. Late security fixes are costly or impossible.",
            "",
            "WEAKEST-LINK PRINCIPLE:",
            "  • Attackers target the EASIEST point of compromise, not the strongest defense.",
            "  • System security = its weakest dependency.",
            "  • Strong cryptography provides little protection if access control is weak."
        ])
        q1 = ask("A company encrypts all sensitive data using modern cryptography. However, access is protected by a single shared admin account, and an attacker obtains the credentials through phishing. What principle does this illustrate?",
            ["Encryption is useless", "The weakest-link principle — attackers target the easiest point, not the strongest defense",
             "Phishing is impossible to prevent", "Shared accounts improve security"], 2,
            None, {1:["Encryption is useful but cannot compensate for weak access control."],3:["Phishing can be mitigated with MFA and training."],4:["Shared accounts are a security weakness, not an improvement."]},
            "Slide 30: 'The Weakest-Link Principle' — attackers target the easiest point. 'Strong cryptography provides little protection if access control or logic is weak.'")
        self.ms(); self.sc(q1)

        q2 = ask("A development team builds an online platform focused on functionality and deadlines. They plan to 'add security later' after deployment. Which statement is TRUE about this approach?",
            ["Security can always be added later without issues", "Late security fixes are costly and sometimes impossible because design decisions become permanent",
             "Early architecture has no impact on security", "Compliance audits fix all security problems"], 2,
            None, {1:["Slide 21: 'Can security fixes compensate for a weak initial design? Patches can reduce risk but rarely remove it entirely.'"],3:["Slide 27: 'Design decisions strongly influence security outcomes. Vulnerabilities are often introduced before coding.'"],4:["Slide 19: 'Does compliance guarantee absence of vulnerabilities? No.'"]},
            "Slide 20-24: 'We'll secure it later' is dangerous. Trust boundaries, identity models, data flows, and system structure are hard to change after deployment.")
        self.ms(); self.sc(q2)

        q3 = ask("Which statement correctly describes the relationship between bugs and attacks?",
            ["Bugs and attacks are the same thing", "Bugs cause unintentional failures; attacks are intentional actions by adaptive adversaries",
             "Fixing all bugs eliminates all security risks", "Attackers cannot adapt to new defenses"], 2,
            None, {1:["They are different concepts."],3:["Slide 14: 'Fixing bugs alone is insufficient, because attackers actively search for new weaknesses.'"],4:["Slide 14: 'Attackers adapt their behavior in response to defenses and system changes.'"]},
            "Slide 14: Bugs = 'unintentional failures from mistakes.' Attacks = 'intentional actions carried out by adversaries seeking to exploit system weaknesses.'")
        self.ms(); self.sc(q3)

        q4 = ask("A system has state-of-the-art encryption but weak password policies and no access logging. An attacker guesses a weak password and deletes critical data. What failed?",
            ["The encryption was too strong", "The system was only as secure as its weakest component",
             "The attacker used advanced techniques", "The data was not valuable"], 2,
            None, {1:["Strong encryption was not the problem."],3:["Guessing a weak password is not advanced."],4:["Critical data is by definition valuable."]},
            "Slide 30: 'System security is determined by its weakest dependency, not its best-protected component.' 'Once the weakest point is exploited, other defenses may become irrelevant.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l3(self):
        explain_concept("Assets & Threats", [
            "ASSET = anything of value to an organization that needs protection.",
            "Assets include: Data, Credentials, Communication records, Identity information, Behavior data, System functions.",
            "DATA is the primary asset in most systems. Includes: Personal info, academic records, financial data, configuration, source code.",
            "Information has value even if it doesn't have a price tag.",
            "",
            "THREAT = potential cause of harm to assets. NOT an event that already occurred.",
            "Threats exist even when no attack is taking place.",
            "Threats are context-dependent: depend on asset, environment, value, timing, access.",
            "Threats cannot be completely eliminated — only reduced or mitigated.",
            "",
            "Example: Phishing threat to university email exists even if no phishing campaign is active today. Threat level increases during exam periods."
        ])
        q1 = ask("A university email system contains valuable identity and communication data. The possibility of phishing emails targeting credentials exists even when no phishing campaign is currently active. What concept does this describe?",
            ["Vulnerability", "Threat",
             "Risk", "Exposure"], 2,
            None, {1:["Vulnerability is an exploitable weakness. The scenario describes a potential cause of harm."],3:["Risk requires threat + vulnerability + exposed asset together."],4:["Exposure is about accessibility/reachability of a vulnerability."]},
            "Slide 36: 'Threats are potential causes of harm to assets, not events that have already occurred.' 'Threats exist even when no attack is taking place.'")
        self.ms(); self.sc(q1)

        q2 = ask("In a university system, which of the following is typically considered the MOST critical asset to protect?",
            ["Public website content about campus history", "Exam questions and student grade records",
             "Archived lecture slides from 10 years ago", "Course schedules"], 2,
            None, {1:["Public content is already intended to be seen by everyone."],3:["Old slides have lower sensitivity than current exam questions."],4:["Schedules are useful but less sensitive than grades/exams."]},
            "Slide 34: Asset exercise ranking. Slide 66: 'Exam questions accessed before an exam by unauthorized users' and 'Student grades visible to users other than the concerned student' are confidentiality violations. Exam questions and grades are highly sensitive.")
        self.ms(); self.sc(q2)

        q3 = ask("A hospital restricts medical record access to authenticated doctors and nurses. A staff member accesses a celebrity patient's record out of curiosity, not for treatment. No data is leaked outside the system. Which statement is TRUE?",
            ["Both confidentiality and privacy are preserved", "Confidentiality is preserved (access was technically restricted), but privacy is violated (inappropriate access)",
             "Only privacy is preserved", "Neither is preserved"], 2,
            None, {1:["Privacy was violated — the staff member had no legitimate reason to access the record."],3:["Confidentiality was technically maintained since access was logged and within the system."],4:["Confidentiality mechanisms worked; privacy was the issue."]},
            "Slide 68: 'Data confidentiality protects information from unauthorized access. Privacy focuses on protecting personal data and individual rights.' Slide 69 example: 'Confidentiality: ✅ Privacy: ❌' — authorized but inappropriate access violates privacy.")
        self.ms(); self.sc(q3)

        q4 = ask("Which statement about threats is TRUE?",
            ["Threats only exist during active attacks", "Threats are context-dependent and cannot be completely eliminated",
             "Threats are the same as vulnerabilities", "All threats can be fully eliminated with enough money"], 2,
            None, {1:["Slide 36: 'Threats exist even when no attack is taking place.'"],3:["Threats = potential harm. Vulnerabilities = exploitable weaknesses. Different concepts."],4:["Slide 36: 'Threats cannot be completely eliminated, only reduced or mitigated.'"]},
            "Slide 36: Threats are 'context-dependent' and 'cannot be completely eliminated, only reduced or mitigated.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l4(self):
        explain_concept("Murphy's Law & Security Thinking", [
            "Murphy's Law: 'Anything that can go wrong, will go wrong.'",
            "General laws:",
            "  • Nothing is as easy as it looks.",
            "  • Everything takes longer than you think.",
            "  • If several things can go wrong, the one causing most damage will go wrong.",
            "  • If anything simply cannot go wrong, it will anyway.",
            "  • If you prepare for four ways things can go wrong, a fifth unprepared way will develop.",
            "",
            "Why Murphy's Law matters in cybersecurity:",
            "  • Security assumes failures and misuse are INEVITABLE.",
            "  • Systems should be designed expecting unexpected behavior.",
            "  • Trusting that 'nothing will happen' is a design flaw.",
            "  • Security planning focuses on RESILIENCE, not optimism.",
            "  • Ignoring unlikely scenarios leads to catastrophic failures.",
            "  • Rare events become LIKELY in large-scale systems.",
            "",
            "Interpreting correctly:",
            "  • Murphy's Law does NOT mean pessimism or paranoia.",
            "  • It means designing systems to handle failure gracefully.",
            "  • Goal: LIMIT damage, not prevent every failure.",
            "  • Security treats low-probability events SERIOUSLY."
        ])
        q1 = ask("A system administrator says: 'Our system is so well-designed that nothing can possibly go wrong.' According to Murphy's Law, what is the flaw in this reasoning?",
            ["The system is indeed perfect", "If anything simply cannot go wrong, it will anyway",
             "Murphy's Law only applies to hardware", "Security should focus only on likely failures"], 2,
            None, {1:["No system is perfect."],3:["Murphy's Law applies to all systems, not just hardware."],4:["Slide 48: 'Security treats low-probability events seriously.'"]},
            "Slide 42: 'If anything simply cannot go wrong, it will anyway.' Slide 47: 'Trusting that nothing will happen is a design flaw.'")
        self.ms(); self.sc(q1)

        q2 = ask("A cloud provider operates 10,000 servers. Each server has a 0.01% chance of failure per year. The provider assumes such a low probability means failures are negligible. What does Murphy's Law suggest?",
            ["Failures are indeed negligible", "Rare events become likely in large-scale systems",
             "Cloud servers never fail", "Probability doesn't apply to computers"], 2,
            None, {1:["0.01% × 10,000 servers = expected 1 failure per year. Not negligible."],3:["All systems can fail."],4:["Probability absolutely applies to computer systems."]},
            "Slide 48: 'Rare events become likely in large-scale systems.' With 10,000 servers, even a 0.01% individual failure rate means failures are expected.")
        self.ms(); self.sc(q2)

        q3 = ask("Which statement BEST represents the correct interpretation of Murphy's Law in security design?",
            ["Be pessimistic about all technology", "Design systems to handle failure gracefully and limit damage",
             "Accept that security is impossible", "Only protect against the most obvious threats"], 2,
            None, {1:["Slide 49: 'Murphy's Law does not mean pessimism or paranoia.'"],3:["Security is achievable through proper design — the goal is resilience."],4:["Slide 48: 'Ignoring unlikely scenarios leads to catastrophic failures.'"]},
            "Slide 49: 'It means designing systems to handle failure gracefully.' 'The goal is to limit damage, not prevent every failure.' 'Security treats low-probability events seriously.'")
        self.ms(); self.sc(q3)
        return q1 and q2 and q3

    def l5(self):
        explain_concept("Vulnerabilities, Risk & Attacks", [
            "VULNERABILITY = exploitable weakness that makes harm possible when a threat exists.",
            "  • Originate from design, implementation, or configuration choices.",
            "  • Not all vulnerabilities are exploited — some remain hidden for years.",
            "  • Exploitability matters: a weakness only becomes a security issue if it can be abused in practice.",
            "",
            "EXPOSURE = making vulnerabilities reachable to attackers.",
            "  • A vulnerability only matters if it is exposed.",
            "  • Systems can contain vulnerabilities that are not currently exposed.",
            "  • Changes in deployment can increase exposure.",
            "",
            "BUGS vs VULNERABILITIES:",
            "  • Bugs = defects in software/configuration/design.",
            "  • Vulnerabilities = bugs that can be exploited to cause security harm.",
            "  • Many bugs are harmless (affect reliability, not security).",
            "  • Context determines severity.",
            "",
            "RISK = potential for harm when a threat exploits a vulnerability in an exposed asset.",
            "  • Risk emerges ONLY when all three come together.",
            "  • A threat alone is not a risk. A vulnerability alone is not a risk. Exposure alone is not a risk.",
            "",
            "ATTACK = intentional attempt to cause harm to valuable assets. Exploits weaknesses in systems, processes, or assumptions."
        ])
        q1 = ask("A server has a known vulnerability in its database software, but the server is air-gapped (no network connection) and only accessible from a secure room. Which statement is TRUE?",
            ["The vulnerability is not a risk because it is not exposed", "The vulnerability is automatically a critical risk",
             "Air-gapped systems cannot have vulnerabilities", "Exposure is irrelevant to security"], 1,
            None, {2:["Risk requires exposure. Without network access, the vulnerability cannot be reached by remote attackers."],3:["Air-gapped systems can still have vulnerabilities; they're just not remotely exploitable."],4:["Slide 51: 'A vulnerability only matters if it is exposed to an attacker.' Exposure is critical."]},
            "Slide 51: 'A vulnerability only matters if it is exposed to an attacker.' Slide 52: 'Same vulnerability, different exposure' — the identical software bug may be critical on an internet-facing server but harmless on an isolated system.")
        self.ms(); self.sc(q1)

        q2 = ask("A software bug causes a calculator app to display incorrect results. However, no attacker can use this to steal data or take control. What is this bug?",
            ["A vulnerability", "A bug that is not a vulnerability",
             "An attack", "A threat"], 2,
            None, {1:["Slide 56: 'Vulnerabilities are bugs that can be exploited to cause security harm.' This bug affects reliability but not security."],3:["An attack is an intentional harmful action. A bug is unintentional."],4:["A threat is potential harm. A bug is a defect."]},
            "Slide 56: 'Bugs are defects in software, configuration, or design.' 'Vulnerabilities are bugs that can be exploited to cause security harm.' 'Many bugs are harmless, affecting reliability but not security.'")
        self.ms(); self.sc(q2)

        q3 = ask("Complete the risk formula: Risk emerges when a ___ exploits a ___ in an ___ asset.",
            ["threat; vulnerability; exposed", "vulnerability; threat; protected",
             "bug; patch; updated", "attack; firewall; secured"], 1,
            None, {2:["Reversed order. Threat exploits vulnerability, not the other way around."],3:["Bugs and patches don't fit the risk formula."],4:["Firewalls are defenses, not part of the risk formula."]},
            "Slide 54: 'Risk is the potential for harm or loss when a threat exploits a vulnerability in an exposed asset.' 'A threat alone is not a risk. A vulnerability alone is not a risk. Exposure alone is not a risk. Risk emerges only when all three come together.'")
        self.ms(); self.sc(q3)

        q4 = ask("In the case study, a student logs in with valid credentials and modifies request parameters to access another student's grades. The system only checks if the user is logged in, not if they own the record. The system appears to operate normally. What is the VULNERABILITY in this case?",
            ["The student knows programming", "Missing authorization check (only verifies login, not record ownership)",
             "The database is too slow", "The network is insecure"], 2,
            None, {1:["Knowing programming is not a vulnerability in the system."],3:["Database speed is irrelevant to the authorization flaw."],4:["The network may be secure; the flaw is in application logic."]},
            "Slide 57 case study: 'The system verifies that the user is logged in but does not consistently verify whether the record belongs to that user.' This is a missing authorization check — an access control vulnerability.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l6(self):
        explain_concept("Security Objectives: CIA", [
            "SECURITY OBJECTIVES:",
            "  1. CONFIDENTIALITY: Information is not disclosed to unauthorized entities. Applies to data at rest, in use, and in transit. Loss of confidentiality does NOT require data modification.",
            "  2. INTEGRITY: Data and systems are accurate, complete, and unaltered. Covers data integrity (content correctness) and system integrity (proper functioning).",
            "  3. AVAILABILITY: Systems and services are accessible by legitimate users when needed. Concerns performance, uptime, resilience. Loss can occur without data loss.",
            "",
            "PRIVACY vs CONFIDENTIALITY:",
            "  • Confidentiality = technical protection from unauthorized access.",
            "  • Privacy = legal/ethical/societal protection of personal data and individual rights.",
            "  • A system may preserve confidentiality while violating privacy (e.g., authorized but inappropriate access).",
            "",
            "DATA COLLECTION TYPES:",
            "  • PII (Personally Identifiable Information): name, email, phone, address, ID numbers.",
            "  • Linkable information: device info, IP address, cookies.",
            "  • Online behavior: websites visited, content viewed, purchases.",
            "  • Location: GPS, Wi-Fi signals, geo-tagged content.",
            "  • Communication: texts, emails, calls.",
            "  • Biometric: fingerprint, voiceprint, iris, face.",
            "  • Financial: bank accounts, credit cards, transactions.",
            "  • Health: fitness data, electronic health records, insurance."
        ])
        q1 = ask("Exam questions are accessed by unauthorized students before the exam begins. Which security objective is violated?",
            ["Integrity", "Confidentiality",
             "Availability", "Accountability"], 2,
            None, {1:["Integrity would mean the exam questions were modified. They were just seen by unauthorized people."],3:["Availability would mean the exam system was down."],4:["Accountability would mean we couldn't trace who accessed them."]},
            "Slide 66: 'Exam questions accessed before an exam by unauthorized users' is a confidentiality violation. Slide 65: 'Confidentiality is the property that information is not disclosed to unauthorized entities.'")
        self.ms(); self.sc(q1)

        q2 = ask("A student submits an exam answer, but a technical error corrupts the file, and the submitted content is different from what the student wrote. Which security objective is violated?",
            ["Confidentiality", "Integrity",
             "Availability", "Authentication"], 2,
            None, {1:["The data was not disclosed to unauthorized parties; it was changed."],3:["The system was available — the file was submitted."],4:["Authentication verifies identity. The issue is data correctness."]},
            "Slide 93: 'Integrity: Data and systems are accurate, complete, and unaltered.' Data integrity = content correctness. The file was corrupted/changed.")
        self.ms(); self.sc(q2)

        q3 = ask("During registration week, the university's course registration system crashes under heavy load, preventing students from enrolling. No data is lost or stolen. Which security objective is violated?",
            ["Confidentiality", "Integrity",
             "Availability", "Authentication"], 3,
            None, {1:["No unauthorized data disclosure occurred."],2:["No data was modified or corrupted."],4:["Authentication verifies identity. The issue is system accessibility."]},
            "Slide 95: 'Availability is the property that systems and services are accessible by legitimate users when needed.' 'Loss of availability can occur without data loss or modification.'")
        self.ms(); self.sc(q3)

        q4 = ask("A hospital restricts medical record access to authenticated doctors. A doctor accesses a celebrity patient's record out of curiosity. The access is technically authorized (the doctor has credentials) but not for treatment purposes. No data is leaked outside. Which statement is TRUE?",
            ["Both confidentiality and privacy are preserved", "Confidentiality is preserved, but privacy is violated",
             "Only privacy is preserved", "Neither is preserved"], 2,
            None, {1:["Privacy is violated because the access was inappropriate and unnecessary for treatment."],3:["Confidentiality mechanisms worked (access was restricted and logged)."],4:["Confidentiality was technically maintained."]},
            "Slide 68: 'Data confidentiality protects information from unauthorized access. Privacy focuses on protecting personal data and individual rights.' Slide 69: 'Confidentiality: ✅ Privacy: ❌' — authorized but inappropriate access.")
        self.ms(); self.sc(q4)

        q5 = ask("Which of the following is considered Personally Identifiable Information (PII)?",
            ["The average temperature in a city", "A person's full name, email address, and phone number",
             "The number of students in a class", "A company's total revenue"], 2,
            None, {1:["Weather data is not personal."],3:["Class size is aggregate, not personally identifiable."],4:["Company revenue is business data, not PII."]},
            "Slide 72-73: PII includes 'Name, Age, Gender, Address, Phone number, Email Address, Internet Address, Device Information, Location.'")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l7(self):
        explain_concept("Authentication, Accountability, Privacy & Trade-offs", [
            "AUTHENTICATION: Verifies the identity of a user or system.",
            "  • User authenticity = users are who they claim to be.",
            "  • Data authenticity = data originates from a legitimate source.",
            "  • Authentication supports confidentiality and integrity but does NOT guarantee authorization or correctness.",
            "",
            "ACCOUNTABILITY:",
            "  • Requirement for actions to be traced uniquely to an entity.",
            "  • Supports: non-repudiation, fault isolation, intrusion detection/prevention, after-action recovery, legal action.",
            "  • Truly secure systems are not yet achievable => we must trace breaches to responsible parties.",
            "  • Examples: audit logs showing who modified a grade and when; tracking access for compliance.",
            "",
            "TRADE-OFFS BETWEEN OBJECTIVES:",
            "  • Confidentiality vs Availability: Strict access controls may delay emergency record access.",
            "  • Availability vs Integrity: Staying online during peak usage may require accepting invalid data.",
            "  • Integrity vs Confidentiality: Publishing audit logs for transparency exposes sensitive identifiers.",
            "  • Authentication vs Availability: Strong MFA may overload auth servers during peak periods.",
            "  • Accountability vs Privacy: Logging every action creates detailed behavioral records.",
            "  • Confidentiality vs Usability: End-to-end encryption with user-managed keys means forgotten passwords = permanent data loss.",
            "",
            "Security design requires balancing objectives based on context and risk."
        ])
        q1 = ask("A hospital enforces very strict access controls on patient records. During emergencies, authentication failures delay record access, impacting patient care. Confidentiality is strengthened, but another objective is degraded. Which one?",
            ["Integrity", "Availability",
             "Accountability", "Authentication"], 2,
            None, {1:["Data was not modified; the issue was delayed access."],3:["Accountability (logging) was not the degraded objective."],4:["Authentication was actually strengthened, not degraded."]},
            "Slide 102-103: 'Confidentiality vs Availability' trade-off. 'Authentication failures delay record access.' 'Confidentiality is strengthened, availability is degraded.'")
        self.ms(); self.sc(q1)

        q2 = ask("An exam platform stays online during peak usage by disabling integrity checks and accepting submissions even when validation fails. Some exam data becomes incomplete. What trade-off is this?",
            ["Confidentiality vs Integrity", "Availability vs Integrity",
             "Authentication vs Accountability", "Privacy vs Usability"], 2,
            None, {1:["Data was not disclosed; it was accepted without proper validation."],3:["Authentication was not the issue; the system stayed online."],4:["Privacy and usability are not the trade-off here."]},
            "Slide 104: 'Availability vs Integrity' trade-off. 'The exam platform prioritizes staying online during peak usage.' 'To avoid downtime, integrity checks are disabled.' 'Availability is maintained, integrity is compromised.'")
        self.ms(); self.sc(q2)

        q3 = ask("A company publishes detailed audit logs for transparency. The logs are accurate and tamper-proof, but they include sensitive user identifiers visible to the public. What trade-off is this?",
            ["Confidentiality vs Availability", "Integrity vs Confidentiality",
             "Authentication vs Privacy", "Accountability vs Integrity"], 2,
            None, {1:["The system is available; the issue is exposed sensitive data."],3:["Authentication is not the issue; the logs are public."],4:["Integrity is preserved, not traded. The trade-off is with confidentiality."]},
            "Slide 105: 'Integrity vs Confidentiality' trade-off. 'Logs are accurate, complete, and tamper-proof.' 'Logs include sensitive user identifiers.' 'Integrity is preserved, confidentiality is violated.'")
        self.ms(); self.sc(q2)

        q4 = ask("Which security objective supports tracing who modified a student grade and when, enabling investigation after a security breach?",
            ["Confidentiality", "Integrity",
             "Availability", "Accountability"], 4,
            None, {1:["Confidentiality prevents unauthorized disclosure, not tracing actions."],2:["Integrity ensures accuracy, not tracing who made changes."],3:["Availability ensures access, not audit trails."]},
            "Slide 98-101: Accountability = 'The requirement for actions of an entity to be traced uniquely to that entity.' Supports 'fault isolation, intrusion detection, after-action recovery, legal action.' Example: 'Audit logs showing who modified a student grade and when.'")
        self.ms(); self.sc(q4)

        q5 = ask("A university enforces multi-factor authentication for all students. During registration periods, authentication servers overload, and legitimate students cannot log in before deadlines. What trade-off is this?",
            ["Confidentiality vs Integrity", "Authentication vs Availability",
             "Privacy vs Accountability", "Integrity vs Availability"], 2,
            None, {1:["Data was not disclosed or modified."],3:["Privacy and accountability are not the trade-off here."],4:["Data integrity was not compromised; the issue was login access."]},
            "Slide 106: 'Authentication vs Availability' trade-off. 'Multi-factor authentication is enforced for all students.' 'Authentication servers overload during registration periods.' 'Authentication is strong, availability is reduced.'")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l8(self):
        explain_concept("Final Certification: All Module 1 Concepts", [
            "Comprehensive review:",
            "  • Cybersecurity = intentional attacks, not accidents.",
            "  • Systems evolved from isolated/trusted to interconnected/exposed.",
            "  • Security is NOT a feature, tool, encryption, or compliance. It is a system property.",
            "  • Weakest-link principle: attackers target the easiest entry point.",
            "  • Assets = data, credentials, identity, behavior, system functions. Data is primary.",
            "  • Threats = potential harm. Exist even without active attacks. Context-dependent.",
            "  • Murphy's Law: design for inevitable failures. Limit damage. Treat low-probability events seriously.",
            "  • Vulnerabilities = exploitable weaknesses. Bugs ≠ vulnerabilities.",
            "  • Exposure = vulnerability must be reachable to matter.",
            "  • Risk = threat + vulnerability + exposed asset. All three needed.",
            "  • Attacks = intentional attempts to cause harm.",
            "  • CIA: Confidentiality (no unauthorized disclosure), Integrity (accuracy), Availability (accessible when needed).",
            "  • Authentication = verifies identity. Does NOT guarantee authorization.",
            "  • Accountability = tracing actions to entities. Supports non-repudiation, legal action.",
            "  • Privacy = legal/ethical protection of personal data. Different from confidentiality.",
            "  • Security objectives often conflict and require trade-offs based on context and risk."
        ])
        q1 = ask("A system encrypts all stored data, requires strong passwords, monitors all access, and maintains 99.99% uptime. A single shared admin password is posted on a sticky note. An attacker uses it to steal all data. What principle explains why the strong encryption failed to protect the data?",
            ["The encryption algorithm was weak", "The weakest-link principle",
             "Availability was too high", "The attacker was an insider"], 2,
            None, {1:["The encryption was described as strong."],3:["High availability is good; it wasn't the cause of the breach."],4:["The attacker could be external who found the sticky note."]},
            "Slide 30: 'Attackers deliberately target the easiest point of compromise, not the strongest defense.' 'System security is determined by its weakest dependency.' The sticky note password was the weakest link.")
        self.ms(); self.sc(q1)

        q2 = ask("A university database has a SQL injection vulnerability. The database is on an isolated internal network with no internet access, and only 3 administrators can reach it. Which concept best describes the current security state?",
            ["High risk because all vulnerabilities are critical", "Low risk because the vulnerability is not exposed",
             "No risk because internal networks are always safe", "High risk because SQL injection is always exploitable"], 2,
            None, {1:["Risk depends on exposure. A hidden vulnerability has lower risk."],3:["Internal networks can be compromised too, but limited access reduces exposure significantly."],4:["Exploitability requires access. Without exposure, the vulnerability cannot be reached."]},
            "Slide 51: 'A vulnerability only matters if it is exposed to an attacker.' 'Systems can contain vulnerabilities that are not currently exposed.' Slide 52: 'Same vulnerability, different exposure.'")
        self.ms(); self.sc(q2)

        q3 = ask("Which statement correctly distinguishes confidentiality from privacy?",
            ["They are exactly the same thing", "Confidentiality is technical protection from unauthorized access; privacy includes legal, ethical, and societal considerations about personal data",
             "Privacy is stronger than confidentiality", "Confidentiality only applies to paper documents"], 2,
            None, {1:["They are related but distinct concepts."],3:["Neither is inherently stronger; they address different aspects."],4:["Confidentiality applies to all forms of information, not just paper."]},
            "Slide 68: 'Data confidentiality protects information from unauthorized access. Privacy focuses on protecting personal data and individual rights.' 'Confidentiality is a technical and organizational objective. Privacy includes legal, ethical, and societal considerations.'")
        self.ms(); self.sc(q3)

        q4 = ask("Complete the sentence: Security is not a ___, not a single ___, not ___ alone, not ___, and not optional.",
            ["password; firewall; antivirus; important", "feature; tool; encryption; compliance",
             "threat; vulnerability; risk; available", "computer; network; user; monitored"], 2,
            None, {1:["Password and antivirus don't match the lecture's exact wording."],3:["These are security concepts, not what security is NOT."],4:["These don't match the lecture."]},
            "Slide 25: 'Security is not a feature. Security is not a single tool. Security is not encryption alone. Security is not compliance. Security is not optional.'")
        self.ms(); self.sc(q4)

        q5 = ask("A company prioritizes keeping their e-commerce website online during Black Friday sales. They reduce input validation to handle more transactions per second. Some invalid orders are accepted. Which security trade-off is occurring?",
            ["Confidentiality vs Integrity", "Availability vs Integrity",
             "Authentication vs Privacy", "Accountability vs Usability"], 2,
            None, {1:["Data was not disclosed; the issue is accepting invalid data to stay online."],3:["Authentication and privacy are not the trade-off here."],4:["Accountability and usability are not the specific trade-off described."]},
            "Slide 104: 'Availability vs Integrity' — prioritizing uptime over data correctness. The system stays online but accepts invalid submissions.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def ms(self): self.max_score += 1
    def sc(self, ok):
        if ok: self.score += 1

    def victory(self):
        print("\n" + "="*60)
        print("   🏆🏆🏆  MISSION ACCOMPLISHED  🏆🏆🏆")
        print("="*60)
        print(f"Final Score: {self.score} / {self.max_score}")
        print(f"Lives remaining: {self.lives}")
        print(f"Levels completed: {len(self.completed)} / 8")
        print("\nYou have mastered Module 1!")
        print("   • Cybersecurity fundamentals & systems evolution")
        print("   • Security mindset: accidents vs attacks, weakest link")
        print("   • Assets: data, credentials, identity, PII")
        print("   • Threats: context-dependent, cannot be eliminated")
        print("   • Murphy's Law: design for inevitable failure")
        print("   • Vulnerabilities, exposure, risk, attacks")
        print("   • Security objectives: CIA + Authentication + Accountability")
        print("   • Privacy vs Confidentiality")
        print("   • Trade-offs between security objectives")
        print("\n🎓 Ready for Module 2?")

    def game_over(self):
        print("\n" + "="*60)
        print("   💀  GAME OVER  💀")
        print("="*60)
        print(f"Completed {len(self.completed)} of 8 levels.")
        print(f"Score: {self.score} / {self.max_score}")
        print("Review the concepts and try again.")

if __name__ == "__main__":
    Game().start()
