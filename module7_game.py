#!/usr/bin/env python3
"""
Module 7: Secure Software Development Life Cycle (SSDLC)
Covers all slides from I3336-25-26-Module-7.pdf (Slides 2-62)
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
        print("   🔐 MODULE 7: SECURE SOFTWARE DEVELOPMENT LIFE CYCLE 🔐")
        print("="*60)
        slow_print("You are a Secure Development Lead. From design to deployment,")
        slow_print("every phase of software development must embed security.")
        slow_print("Shift-left, DevSecOps, threat modeling, and continuous verification.")
        print("\n💀 3 lives | 🏆 9 levels | 📚 Slides 2-62")
        input("\nPress ENTER to begin...")

        levels = [
            ("Why Security as an Afterthought Fails", "2-10", self.l1),
            ("Secure by Design & Shift-Left Security", "11-16", self.l2),
            ("SSDLC Fundamentals & The Continuous Cycle", "17-22", self.l3),
            ("Agile, DevSecOps & Modern Secure Delivery", "23-29", self.l4),
            ("Secure Planning & Requirements Engineering", "30-34", self.l5),
            ("Secure Architecture & Threat Modeling", "35-41", self.l6),
            ("Secure Implementation & Developer Practices", "42-48", self.l7),
            ("Security Verification & Testing", "49-55", self.l8),
            ("Secure Release, Operations & Final Certification", "56-62", self.l9),
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
        explain_concept("Why Security as an Afterthought Fails", [
            "Vulnerabilities begin EARLY in development — during design and requirements, not just in code.",
            "Attackers exploit TRUST ASSUMPTIONS baked into architecture.",
            "",
            "Cost of late vulnerability remediation:",
            "  • Fixing a vulnerability after release costs 10x-100x more than fixing it during design.",
            "  • Late fixes require rework, regression testing, and potential architecture changes.",
            "  • Some design flaws cannot be patched at all.",
            "",
            "Business impact of reactive security:",
            "  • Data breaches damage reputation and customer trust.",
            "  • Regulatory fines (GDPR, PCI-DSS) can be massive.",
            "  • Rework delays product launches and wastes engineering time.",
            "",
            "Business logic abuse case study:",
            "  • Application works technically correctly but allows unintended use.",
            "  • Example: an e-commerce site allows negative quantities in a cart, resulting in refunds instead of charges.",
            "  • Reactive security (adding patches) fails because the flaw is in the design logic, not the code syntax."
        ])
        q1 = ask("A development team discovers a critical vulnerability after their application has been in production for 6 months. Fixing it now requires redesigning the authentication flow, retesting all integrations, and notifying affected customers. Which principle does this demonstrate?",
            ["Security is always cheap to implement", "The cost of late vulnerability remediation is exponentially higher than fixing issues early",
             "Production vulnerabilities are always easy to patch", "Users don't care about security flaws"], 2,
            None, {1:["Slide 7: Late remediation costs are high, not cheap."],3:["Slide 7: Some design flaws cannot be patched; they require rework."],4:["Slide 8: Data breaches damage reputation and customer trust."]},
            "Slide 7: 'The Cost of Late Vulnerability Remediation.' Fixing after release costs 10x-100x more than during design. Late fixes require rework, regression testing, and architecture changes.")
        self.ms(); self.sc(q1)

        q2 = ask("An e-commerce application technically works correctly: users can add items to their cart, enter a quantity, and checkout. However, the system accepts negative quantities, so a user enters -5 items and receives a refund instead of being charged. No code bug exists — the logic simply never considered this case. What type of flaw is this?",
            ["A syntax error", "Business logic abuse",
             "A network protocol flaw", "A hardware failure"], 2,
            None, {1:["Syntax errors prevent compilation. The code compiles and runs correctly."],3:["Network protocols are not involved in this cart quantity validation."],4:["No hardware component failed."]},
            "Slide 9: 'Mini Case Study: Business Logic Abuse.' The application works technically correctly but allows unintended use. The flaw is in the design logic — not validating that quantities must be positive.")
        self.ms(); self.sc(q2)

        q3 = ask("A company develops a web application with the plan to 'add security later' after all features are complete. The application is released on time but suffers a major breach within the first month. Why does reactive security fail in this scenario?",
            ["Security patches are always effective", "Vulnerabilities often originate in early design decisions that cannot be patched away",
             "Attackers only target old software", "Users never exploit obvious flaws"], 2,
            None, {1:["Slide 10: Reactive security fails because some flaws are architectural, not patchable."],3:["Attackers target all software, especially new releases with untested defenses."],4:["Users and attackers actively look for flaws."]},
            "Slide 5: 'Where Vulnerabilities Actually Begin' — early design. Slide 6: 'Attackers Exploit Trust Assumptions.' Slide 10: 'Why Reactive Security Fails' — flaws rooted in design assumptions cannot be patched away; they require redesign.")
        self.ms(); self.sc(q3)
        return q1 and q2 and q3

    def l2(self):
        explain_concept("Secure by Design & Shift-Left Security", [
            "SECURE BY DESIGN vs SECURE BY PATCH:",
            "  • Secure by patch = add security after building. Reactive. Expensive. Incomplete.",
            "  • Secure by design = security is part of the foundation from the beginning.",
            "  • Secure by design means: minimizing attack surface, reducing trust assumptions, defense in depth, fail securely, least privilege.",
            "",
            "SHIFT-LEFT SECURITY:",
            "  • Move security activities EARLIER in the development lifecycle.",
            "  • Instead of testing at the end, embed security in requirements, architecture, and coding.",
            "  • The 'left' refers to earlier phases in a timeline diagram (requirements → design → code → test → deploy).",
            "",
            "Why early decisions matter:",
            "  • Architecture decisions are the hardest and most expensive to change later.",
            "  • A trust boundary placed incorrectly in design affects every subsequent implementation decision.",
            "  • Early security constraints improve quality, reduce cost, and prevent breaches."
        ])
        q1 = ask("A development team builds an application first, then hires a security consultant to 'audit it' two weeks before release. The consultant finds that the authentication system was designed without multi-factor authentication, and adding it now would require changing the entire user flow. What approach did the team use, and what should they have used instead?",
            ["Secure by design; should have used secure by patch", "Secure by patch; should have used secure by design",
             "DevSecOps; should have used waterfall", "Shift-right; should have used shift-left"], 2,
            None, {1:["Reversed. They patched security on at the end, not designing it in from the start."],3:["They did not integrate security throughout (DevSecOps). They tested at the end."],4:["'Shift-right' is not a standard term; shift-left means moving security earlier."]},
            "Slide 12: 'Secure By Design vs Secure By Patch.' Secure by patch = add security after building. Secure by design = security is part of the foundation. Slide 13: 'What Secure by Design Really Means.' The authentication design flaw = a design-phase issue that should have been addressed early.")
        self.ms(); self.sc(q1)

        q2 = ask("In a typical development timeline, 'shift-left security' refers to moving security activities from the testing/deployment phase to which earlier phases?",
            ["Only the coding phase", "Requirements, architecture, and design phases",
             "Only the maintenance phase", "Only the marketing phase"], 2,
            None, {1:["Shift-left includes more than just coding — it starts at requirements and design."],3:["Maintenance is after deployment; shift-left moves earlier, not later."],4:["Marketing is not part of the software development lifecycle."]},
            "Slide 14: 'Shift-Left Security' means moving security activities earlier. Slide 15: 'Why Early Decisions Matter' — architecture decisions are hardest to change. Security should be embedded starting at requirements, through architecture, design, and coding.")
        self.ms(); self.sc(q2)

        q3 = ask("Which of the following is a core principle of 'Secure by Design'?",
            ["Add security only after user complaints", "Minimize attack surface, reduce trust assumptions, and implement defense in depth from the beginning",
             "Rely solely on external security audits", "Assume attackers cannot understand the system"], 2,
            None, {1:["Adding security after complaints is reactive patching, not secure by design."],3:["External audits validate but do not replace built-in security design."],4:["'Security through obscurity' is not a principle of secure by design."]},
            "Slide 13: 'What Secure by Design Really Means' includes minimizing attack surface, reducing trust assumptions, defense in depth, failing securely, and least privilege. These are design-phase decisions, not afterthoughts.")
        self.ms(); self.sc(q3)
        return q1 and q2 and q3

    def l3(self):
        explain_concept("SSDLC Fundamentals & The Continuous Cycle", [
            "SSDLC (Secure Software Development Life Cycle) = integrates security into every phase of software development.",
            "",
            "Key principle: Security is NOT a separate development phase. It is woven through requirements, design, coding, testing, and operations.",
            "",
            "The continuous SSDLC cycle:",
            "  • Plan & Requirements → Threat modeling and security requirements",
            "  • Architecture & Design → Secure design patterns and trust boundaries",
            "  • Implementation → Secure coding standards and code review",
            "  • Verification → Security testing, pen testing, automated scanning",
            "  • Release & Deploy → Hardening, secure configuration",
            "  • Operations & Monitor → Logging, detection, incident response",
            "  → Loop back to planning with lessons learned",
            "",
            "SSDLC core security activities:",
            "  • Threat modeling, secure requirements, secure architecture",
            "  • Secure coding training, code review, SAST/DAST",
            "  • Security testing, pen testing, vulnerability management",
            "  • Secure deployment, monitoring, incident response",
            "",
            "What SSDLC achieves:",
            "  • Fewer vulnerabilities in production",
            "  • Lower cost of security fixes",
            "  • Faster detection and response",
            "  • Compliance with security standards",
            "  • Reduced business risk"
        ])
        q1 = ask("A team treats security as a single 'security phase' that happens after coding is complete but before release. According to SSDLC principles, what is wrong with this approach?",
            ["It is too thorough", "Security is not a separate phase — it must be integrated into every development activity",
             "It happens too early", "Security should only be handled by operations"], 2,
            None, {1:["A separate security phase is not thorough enough — it misses design-phase issues."],3:["A phase after coding is late, not early."],4:["Security is everyone's responsibility, not just operations."]},
            "Slide 19: 'Security Is Not a Separate Development Phase.' SSDLC integrates security into requirements, design, coding, testing, and operations. A single late phase cannot catch design-level vulnerabilities.")
        self.ms(); self.sc(q1)

        q2 = ask("Which of the following is NOT a core security activity in the SSDLC framework?",
            ["Threat modeling", "Secure coding standards",
             "Writing user manuals only", "Security testing and pen testing"], 3,
            None, {1:["Threat modeling IS a core SSDLC activity (slide 21)."],2:["Secure coding standards ARE core activities (slide 21)."],4:["Security testing and pen testing ARE core activities (slide 21)."]},
            "Slide 21: 'SSDLC Core Security Activities' include threat modeling, secure requirements, secure architecture, secure coding, code review, security testing, pen testing, secure deployment, monitoring, and incident response. Writing user manuals is documentation, not a security activity.")
        self.ms(); self.sc(q2)

        q3 = ask("The SSDLC is described as a 'continuous cycle' rather than a linear process. What does this mean for a development team?",
            ["They only need to think about security once at the beginning", "Lessons learned from operations and incidents feed back into planning and requirements for the next iteration",
             "Security stops after release", "They should never release the product"], 2,
            None, {1:["A continuous cycle means security is ongoing, not a one-time activity."],3:["Slide 20: The continuous cycle includes operations and feedback. Security does not end at release."],4:["Release is part of the cycle; the point is continuous improvement, not avoidance."]},
            "Slide 20: 'The Continuous SSDLC Cycle' loops from operations back to planning. Slide 22: 'What SSDLC Achieves' includes continuous improvement. Lessons from monitoring and incidents inform the next development cycle.")
        self.ms(); self.sc(q3)
        return q1 and q2 and q3

    def l4(self):
        explain_concept("Agile, DevSecOps & Modern Secure Delivery", [
            "CLASSICAL SSDLC (waterfall-style) is no longer sufficient for modern development.",
            "  • Long release cycles mean vulnerabilities persist for months.",
            "  • Security testing at the end blocks releases or gets skipped.",
            "  • Business pressure to ship overrides security concerns.",
            "",
            "How SSDLC adapts to Agile:",
            "  • Security tasks become user stories and acceptance criteria.",
            "  • Threat modeling happens per feature, not per project.",
            "  • Security testing is continuous, not a final gate.",
            "",
            "THE SHARED RESPONSIBILITY PROBLEM:",
            "  • Developers blame security teams for being slow.",
            "  • Security teams blame developers for writing vulnerable code.",
            "  • Operations teams blame both for unstable releases.",
            "  • DevSecOps breaks down these silos.",
            "",
            "DEVSECOPS = Security integrated into delivery pipelines.",
            "  • Security is automated in CI/CD pipelines.",
            "  • Developers get immediate feedback on security issues.",
            "  • Security becomes part of daily work, not an external gate.",
            "",
            "SECURITY AUTOMATION in modern delivery:",
            "  • SAST (Static Application Security Testing) in build pipelines",
            "  • DAST (Dynamic Application Security Testing) in staging",
            "  • Dependency scanning for vulnerable libraries",
            "  • Container image scanning",
            "  • Infrastructure-as-code security scanning",
            "",
            "Modern secure delivery model:",
            "  • Plan → Build → Test → Deploy → Monitor",
            "  • Security gates at each step, automated where possible",
            "  • Fast feedback loops enable quick fixes"
        ])
        q1 = ask("In a traditional waterfall project, security testing happens as a final gate before release. The team finds critical issues but the business deadline is in 3 days, so they ship anyway and plan to patch later. What problem of classical SSDLC does this illustrate?",
            ["Security testing is too effective", "Security testing at the end gets overridden by business pressure to ship, and vulnerabilities persist",
             "Developers write perfect code", "Agile methods are too slow"], 2,
            None, {1:["The issue is not effectiveness but timing and business pressure."],3:["If code were perfect, security testing would find nothing."],4:["Agile is designed to be faster and more adaptive, not slower."]},
            "Slide 24: 'Why Classical SSDLC Is No Longer Sufficient.' Slide 23: In classical models, 'security testing at the end blocks releases or gets skipped.' Business pressure to ship overrides security when security is only a final gate.")
        self.ms(); self.sc(q1)

        q2 = ask("A development team, security team, and operations team each blame the others when a vulnerability reaches production. Developers say security never gave them clear requirements. Security says developers ignored their advice. Operations says both teams deploy unstable code. What concept describes this dysfunction?",
            ["Perfect collaboration", "The shared responsibility problem",
             "Single team ownership", "DevOps success"], 2,
            None, {1:["The scenario describes conflict, not collaboration."],3:["No single team owns the outcome; all blame each other."],4:["DevOps success involves collaboration, not blame-shifting."]},
            "Slide 26: 'The Shared Responsibility Problem' — developers blame security for being slow, security blames developers for vulnerable code, operations blames both for instability. DevSecOps breaks down these silos.")
        self.ms(); self.sc(q2)

        q3 = ask("A company configures its CI/CD pipeline to automatically run static code analysis on every commit, scan dependencies for known vulnerabilities on every build, and block deployment if critical issues are found. Developers see results within minutes. What approach is this?",
            ["Manual security auditing", "DevSecOps with security automation in the delivery pipeline",
             "Waterfall security gate", "Penetration testing"], 2,
            None, {1:["The process is automated, not manual."],3:["Waterfall has a single late gate; this is continuous and automated."],4:["Pen testing is a manual adversarial exercise, not automated pipeline scanning."]},
            "Slide 27: 'DevSecOps: Security Integrated into Delivery Pipelines.' Slide 28: 'Security Automation in Modern Delivery' includes SAST, DAST, dependency scanning, and container scanning in CI/CD. Fast feedback = DevSecOps.")
        self.ms(); self.sc(q3)

        q4 = ask("In an Agile environment, how should threat modeling be adapted compared to a waterfall project?",
            ["Threat modeling should only happen at the project start", "Threat modeling should happen per feature or sprint, continuously",
             "Threat modeling is unnecessary in Agile", "Threat modeling should be delayed until the final release"], 2,
            None, {1:["That is the waterfall approach, not Agile."],3:["Threat modeling is always necessary; Agile requires it to be more frequent."],4:["Delaying until final release is the old waterfall approach that fails."]},
            "Slide 25: 'How SSDLC Adapts to Agile Development' — security tasks become user stories, threat modeling happens per feature, and security testing is continuous. In waterfall, threat modeling is a single project activity. In Agile, it is ongoing.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l5(self):
        explain_concept("Secure Planning & Requirements Engineering", [
            "SECURITY REQUIREMENTS are real requirements, not optional add-ons.",
            "  • Every functional requirement should have a corresponding security consideration.",
            "  • Example: 'Users can upload files' → 'Uploaded files must be scanned for malware and size-limited.'",
            "",
            "ABUSE CASES & MISUSE CASES:",
            "  • Abuse case = how an attacker could misuse a legitimate feature.",
            "  • Misuse case = how a legitimate user could accidentally cause harm.",
            "  • Example abuse case: 'Attacker uses password reset flow to enumerate valid email addresses.'",
            "  • Example misuse case: 'Admin accidentally deletes all user data because no confirmation is required.'",
            "",
            "SECURITY IN AGILE PLANNING:",
            "  • Security tasks are added to the product backlog as user stories.",
            "  • Example: 'As a user, I want my password to be hashed so that my credentials are protected if the database is breached.'",
            "  • Security work is estimated and prioritized alongside features.",
            "",
            "SECURITY ACCEPTANCE CRITERIA:",
            "  • Define when a feature is 'secure enough' to release.",
            "  • Example criteria: 'All API endpoints require authentication,' 'No sensitive data in URLs,' 'Input validated on server side.'",
            "  • Without explicit criteria, security is subjective and inconsistent."
        ])
        q1 = ask("A product manager writes a requirement: 'Users can upload profile pictures.' A security engineer adds: 'Uploaded images must be limited to 5MB, scanned for embedded malicious scripts, and stored outside the web root.' What is the security engineer doing?",
            ["Adding optional nice-to-haves", "Defining real security requirements that constrain how the feature is implemented",
             "Blocking the feature entirely", "Writing marketing copy"], 2,
            None, {1:["Slide 31: Security requirements are real requirements, not optional."],3:["The feature is still allowed — just with safe constraints."],4:["Marketing copy has nothing to do with technical security constraints."]},
            "Slide 31: 'Security Requirements are Real Requirements.' Every functional requirement needs a corresponding security consideration. 'Users can upload files' requires constraints on size, content validation, and storage location.")
        self.ms(); self.sc(q1)

        q2 = ask("A team analyzes how an attacker could misuse the 'password reset' feature to determine which email addresses are registered in the system, then uses that list for targeted phishing. What is this analysis called?",
            ["A misuse case", "An abuse case",
             "A functional test", "A user story"], 2,
            None, {1:["Misuse cases involve legitimate users causing accidental harm. An attacker using a feature maliciously = abuse case."],3:["Functional tests verify intended behavior, not attacker misuse."],4:["A user story describes desired functionality, not attacker behavior."]},
            "Slide 32: 'Abuse Cases & Misuse Cases.' Abuse case = how an attacker could misuse a legitimate feature. Misuse case = how a legitimate user could accidentally cause harm. Enumerating valid emails via password reset = abuse case.")
        self.ms(); self.sc(q2)

        q3 = ask("An Agile team writes the following backlog item: 'As a user, I want my session to expire after 15 minutes of inactivity so that my account remains secure if I forget to log out.' What is this an example of?",
            ["A bug report", "A security user story in Agile planning",
             "A marketing requirement", "A hardware specification"], 2,
            None, {1:["This describes desired behavior, not a defect."],3:["Marketing requirements focus on features and benefits, not session security."],4:["Session timeout is a software security control, not hardware."]},
            "Slide 33: 'Security in Agile Planning' — security tasks become user stories and acceptance criteria. This backlog item is a user story with a clear security benefit (session expiration for protection).")
        self.ms(); self.sc(q3)

        q4 = ask("A development team defines explicit rules that a feature must meet before it can be considered complete and released. These rules include: 'All inputs are validated server-side,' 'No hardcoded secrets in code,' and 'Error messages do not reveal database schema.' What concept is this?",
            ["Technical debt", "Security acceptance criteria",
             "Code refactoring", "User interface design"], 2,
            None, {1:["Technical debt is accumulated shortcuts, not explicit completion rules."],3:["Refactoring improves code structure; these are release conditions."],4:["UI design is about visual layout, not security rules for release."]},
            "Slide 34: 'Security Acceptance Criteria' define when a feature is 'secure enough.' Examples include input validation, no hardcoded secrets, and safe error messages. Without explicit criteria, security is subjective.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l6(self):
        explain_concept("Secure Architecture & Threat Modeling", [
            "THREAT MODELING IN ARCHITECTURE:",
            "  • Think like an attacker during the design phase.",
            "  • Identify assets, adversaries, attack surfaces, trust boundaries.",
            "  • A threat model is a living document, not a one-time activity.",
            "",
            "UNDERSTANDING ATTACK SURFACE:",
            "  • Every interface, API, port, and user input point is part of the attack surface.",
            "  • Design should minimize unnecessary interfaces.",
            "  • More complexity = larger attack surface.",
            "",
            "TRUST BOUNDARIES MATTER:",
            "  • Mark where trust levels change (e.g., public internet → DMZ → internal network → database).",
            "  • Data crossing trust boundaries must be validated and encrypted.",
            "  • Internal components should not blindly trust each other (zero trust).",
            "",
            "STRIDE: Practical Threat Categories:",
            "  • Spoofing — impersonating users or systems",
            "  • Tampering — unauthorized data modification",
            "  • Repudiation — denying actions without proof",
            "  • Information Disclosure — unauthorized data access",
            "  • Denial of Service — disrupting availability",
            "  • Elevation of Privilege — gaining higher permissions",
            "",
            "SECURE ARCHITECTURE PRINCIPLES:",
            "  • Defense in depth — multiple layers of protection",
            "  • Least privilege — minimal necessary permissions",
            "  • Fail securely — default to safe state on errors",
            "  • Separation of duties — divide critical operations",
            "  • Economy of mechanism — keep design simple",
            "",
            "ARCHITECTURE SECURITY REVIEW:",
            "  • Peer review of design documents with security lens",
            "  • Validate trust boundaries and data flows",
            "  • Check for single points of failure"
        ])
        q1 = ask("During architecture design, a team draws lines on their system diagram marking where the public internet meets their load balancer, where the application server talks to the database, and where user authentication happens. According to the module, why are these lines important?",
            ["They are just decorative", "They represent trust boundaries where data must be validated and security controls enforced",
             "They show network speed limits", "They mark where backups should occur"], 2,
            None, {1:["Slide 38: 'Trust Boundaries Matter' — these are functional security design elements."],3:["Trust boundaries are about security levels, not bandwidth."],4:["Backups are important but unrelated to trust boundary marking."]},
            "Slide 38: 'Trust Boundaries Matter.' Trust boundaries identify where trust assumptions change, privilege levels transition, and authentication boundaries exist. Data crossing these lines must be validated and protected.")
        self.ms(); self.sc(q1)

        q2 = ask("A team uses the STRIDE framework during threat modeling. They identify that an attacker could modify a request parameter to change another user's account settings. Which STRIDE category does this represent?",
            ["Spoofing", "Tampering",
             "Repudiation", "Information Disclosure"], 2,
            None, {1:["Spoofing = impersonation. The attacker is not pretending to be someone else; they are changing data."],3:["Repudiation = denying actions. No denial is described."],4:["Information Disclosure = unauthorized data access. The issue is data modification, not access."]},
            "Slide 39: 'STRIDE: Practical Threat Categories.' Tampering = 'Unauthorized data modification.' Changing another user's settings without authorization = tampering with data.")
        self.ms(); self.sc(q2)

        q3 = ask("An architecture review identifies that the entire application uses a single database account with full administrator privileges for all operations — reading user data, updating orders, and deleting logs. What secure architecture principle is being violated?",
            ["Economy of mechanism", "Least privilege",
             "Fail securely", "Defense in depth"], 2,
            None, {1:["Economy of mechanism means keeping design simple. One admin account is simple but insecure."],3:["Fail securely means defaulting to safe states on errors."],4:["Defense in depth uses multiple layers. The issue is excessive permissions, not missing layers."]},
            "Slide 40: 'Secure Architecture Principles' include least privilege. Slide 35: SSDLC architecture should enforce least privilege. Using one admin account for everything violates 'grant only minimal necessary permissions.'")
        self.ms(); self.sc(q3)

        q4 = ask("Which of the following is NOT one of the STRIDE threat categories?",
            ["Tampering", "Elevation of Privilege",
             "Social Engineering", "Information Disclosure"], 3,
            None, {1:["Tampering IS a STRIDE category."],2:["Elevation of Privilege IS a STRIDE category."],4:["Information Disclosure IS a STRIDE category."]},
            "Slide 39: STRIDE = Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. Social engineering is an attack method, not a STRIDE category.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l7(self):
        explain_concept("Secure Implementation & Developer Practices", [
            "SECURE CODING is more than writing bug-free code:",
            "  • Bug-free code can still have security flaws (business logic issues).",
            "  • Security requires intentional defensive coding patterns.",
            "  • Developers must understand attack patterns to prevent them.",
            "",
            "INPUT VALIDATION & DATA HANDLING:",
            "  • Never trust user input — validate on the server side.",
            "  • Use allowlists (permitted values) rather than blocklists (forbidden values).",
            "  • Sanitize data before using it in queries, commands, or rendering.",
            "  • Handle errors without revealing sensitive internal information.",
            "",
            "AUTHENTICATION & AUTHORIZATION ENFORCEMENT:",
            "  • Enforce authentication on every protected endpoint.",
            "  • Check authorization (what the user can do) after authentication (who they are).",
            "  • Use centralized access control, not scattered checks.",
            "  • Session management: strong IDs, expiration, invalidation on logout.",
            "",
            "SECRETS & SENSITIVE DATA HANDLING:",
            "  • Never hardcode passwords, API keys, or tokens in source code.",
            "  • Use secret management systems (vaults, environment variables).",
            "  • Encrypt sensitive data at rest and in transit.",
            "  • Minimize what data is collected and stored (data minimization).",
            "",
            "DEPENDENCY SECURITY & SUPPLY CHAIN RISK:",
            "  • Third-party libraries can introduce vulnerabilities (Log4Shell, SolarWinds).",
            "  • Maintain a software bill of materials (SBOM).",
            "  • Scan dependencies for known vulnerabilities.",
            "  • Pin versions and verify integrity of packages.",
            "",
            "SECURE CODE REVIEW & AUTOMATED CHECKS:",
            "  • Manual peer review catches logic flaws tools miss.",
            "  • Automated tools (SAST, SCA) catch known vulnerability patterns.",
            "  • Both manual and automated reviews are needed."
        ])
        q1 = ask("A developer writes code that handles file uploads. They check that the file extension is not '.exe' to prevent executable uploads. An attacker uploads a file named 'malicious.php.jpg' which bypasses the check and executes as PHP on the server. What validation approach should have been used instead?",
            ["Blocklist of forbidden extensions", "Allowlist of permitted extensions and server-side content validation",
             "Client-side JavaScript validation only", "Trust the filename from the user"], 2,
            None, {1:["Blocklists can be bypassed with tricks like double extensions."],3:["Client-side validation can be bypassed entirely by attackers."],4:["User-submitted filenames should never be trusted."]},
            "Slide 44: 'Input Validation & Data Handling.' Never trust user input. Use allowlists (permitted values) rather than blocklists (forbidden values). Server-side validation is required. The blocklist approach was bypassed.")
        self.ms(); self.sc(q1)

        q2 = ask("An application's source code contains a hardcoded database password that is the same across all environments. The code is pushed to a public GitHub repository. An attacker finds the password and accesses the production database. What principle was violated?",
            ["Defense in depth", "Secrets & sensitive data handling",
             "Fail securely", "Input validation"], 2,
            None, {1:["Defense in depth uses multiple layers. The issue is specifically secret exposure."],3:["Fail securely means safe defaults on errors, not secret management."],4:["Input validation is about user data, not developer secrets."]},
            "Slide 46: 'Secrets & Sensitive Data Handling.' Never hardcode passwords, API keys, or tokens. Use secret management systems. Hardcoded secrets in public repositories are a common and serious vulnerability.")
        self.ms(); self.sc(q2)

        q3 = ask("A web application checks if a user is logged in on the home page, but some API endpoints do not check authentication because 'they are only called by the frontend.' An attacker directly calls these endpoints and accesses admin functionality. What implementation flaw is this?",
            ["Weak encryption", "Missing authentication and authorization enforcement on every endpoint",
             "Slow database queries", "Poor user interface design"], 2,
            None, {1:["The issue is not encryption strength; it's missing access checks."],3:["Database speed is unrelated to missing authentication."],4:["UI design doesn't affect API endpoint security when called directly."]},
            "Slide 45: 'Authentication & Authorization Enforcement.' Enforce authentication on every protected endpoint. Check authorization after authentication. The frontend-only assumption is dangerous because attackers can call APIs directly.")
        self.ms(); self.sc(q3)

        q4 = ask("A team uses 47 third-party open-source libraries in their application. They never check which versions are used or whether any have known vulnerabilities. After a breach, they discover one library had a critical CVE published 6 months earlier. What practice was missing?",
            ["User acceptance testing", "Dependency security and supply chain risk management",
             "Performance benchmarking", "Code formatting"], 2,
            None, {1:["UAT tests functionality from a user perspective, not library vulnerabilities."],3:["Performance benchmarking measures speed, not security."],4:["Code formatting is about style, not vulnerability management."]},
            "Slide 47: 'Dependency Security & Supply Chain Risk.' Third-party libraries can introduce vulnerabilities. Teams should maintain SBOMs, scan dependencies, pin versions, and verify package integrity. Missing this = supply chain risk.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l8(self):
        explain_concept("Security Verification & Testing", [
            "SECURITY TESTING ≠ FUNCTIONAL TESTING:",
            "  • Functional testing asks: 'Does it do what it should?'",
            "  • Security testing asks: 'Can it be made to do what it should NOT?'",
            "  • A system can pass all functional tests and still be deeply insecure.",
            "",
            "SECURITY TESTING TECHNIQUES:",
            "  • SAST (Static Application Security Testing): analyzes source code for vulnerabilities without running the application.",
            "  • DAST (Dynamic Application Security Testing): tests running application from the outside (like an attacker).",
            "  • IAST (Interactive Application Security Testing): monitors application from inside while running tests.",
            "  • Fuzzing: sending random/malformed input to find crashes or unexpected behavior.",
            "  • Manual security testing: expert analysis of logic, workflows, and edge cases.",
            "",
            "MANUAL SECURITY TESTING STILL MATTERS:",
            "  • Automated tools find known patterns, not novel logic flaws.",
            "  • Business logic vulnerabilities (IDOR, race conditions) require human analysis.",
            "  • Penetration testing simulates real adversaries.",
            "",
            "PENETRATION TESTING & ADVERSARIAL VALIDATION:",
            "  • Ethical hackers attempt to break the system.",
            "  • Validates defenses against realistic attacks.",
            "  • Findings are prioritized by exploitability and impact.",
            "",
            "SECURITY TESTING IN CI/CD:",
            "  • Automated security tests run on every commit/build.",
            "  • Fail the build on critical vulnerabilities.",
            "  • Developers get immediate feedback.",
            "",
            "VERIFICATION COMPLETES THE FEEDBACK LOOP:",
            "  • Testing reveals whether security controls actually work.",
            "  • Results feed back into requirements and design.",
            "  • Without verification, security is just an assumption."
        ])
        q1 = ask("A QA team verifies that a login form accepts valid usernames and passwords, rejects empty fields, and displays appropriate error messages. They declare the feature 'fully tested.' From a security perspective, what is missing?",
            ["More functional test cases", "Security testing that asks whether the form can be abused — e.g., SQL injection, brute force, credential stuffing",
             "Better UI colors", "Faster page load times"], 2,
            None, {1:["The functional tests are complete. What's missing is security-focused testing."],3:["UI design is not a security testing concern."],4:["Performance is important but not the security gap."]},
            "Slide 50: 'Security Testing ≠ Functional Testing.' Functional testing asks 'Does it do what it should?' Security testing asks 'Can it be made to do what it should NOT?' The QA team only did functional validation.")
        self.ms(); self.sc(q1)

        q2 = ask("A security tool scans an application's source code without executing it, looking for patterns like hardcoded passwords, SQL query concatenation, and weak cryptography. What type of testing is this?",
            ["DAST (Dynamic Application Security Testing)", "SAST (Static Application Security Testing)",
             "Penetration testing", "Fuzzing"], 2,
            None, {1:["DAST tests running applications from the outside. This scans source code without execution."],3:["Penetration testing is manual adversarial testing of running systems."],4:["Fuzzing sends random input to running applications, not code pattern analysis."]},
            "Slide 51: 'Security Testing Techniques.' SAST = 'analyzes source code for vulnerabilities without running the application.' DAST = tests running applications from outside. The tool analyzing source code statically = SAST.")
        self.ms(); self.sc(q2)

        q3 = ask("An automated scanner reports zero vulnerabilities in an application. However, a penetration tester discovers that by changing a numeric ID in a URL parameter, they can view other users' private records. The application logic was correct but the authorization check was missing. Why did the scanner miss this?",
            ["The scanner was broken", "Automated tools find known patterns but miss novel logic flaws and business logic vulnerabilities",
             "The vulnerability did not exist", "The scanner only tests network ports"], 2,
            None, {1:["The scanner worked as designed — it just cannot detect logic flaws."],3:["The IDOR vulnerability definitely existed and was exploitable."],4:["Application security scanners test application logic, not just ports."]},
            "Slide 52: 'Manual Security Testing Still Matters.' Automated tools 'find known patterns, not novel logic flaws.' Business logic vulnerabilities like IDOR 'require human analysis.' The missing authorization check is a logical flaw, not a known code pattern.")
        self.ms(); self.sc(q3)

        q4 = ask("A company's CI/CD pipeline is configured to run automated security scans on every pull request. If critical vulnerabilities are found, the build fails and the developer is notified immediately. What benefit does this provide?",
            ["It delays releases indefinitely", "It creates a fast feedback loop so developers fix issues while the code is still fresh in their minds",
             "It removes the need for all manual testing", "It makes security the security team's sole responsibility"], 2,
            None, {1:["Automated gating prevents bad code from shipping, but doesn't inherently delay releases if issues are fixed quickly."],3:["Manual testing like pen testing is still needed."],4:["Slide 27: DevSecOps makes security everyone's responsibility, not just the security team."]},
            "Slide 54: 'Security Testing in CI/CD' and Slide 55: 'Verification Completes the Feedback Loop.' Fast feedback means developers fix issues early while context is fresh. 'Without verification, security is just an assumption.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l9(self):
        explain_concept("Secure Release, Operations & The Continuous Loop", [
            "SECURITY DOES NOT END AT RELEASE:",
            "  • Deployment opens the system to real adversaries.",
            "  • Production environments differ from development.",
            "  • New vulnerabilities are discovered after release.",
            "",
            "SECURE DEPLOYMENT & HARDENING:",
            "  • Remove debug features, test accounts, and default credentials.",
            "  • Apply principle of least privilege to production services.",
            "  • Use infrastructure-as-code for reproducible, auditable deployments.",
            "  • Enable TLS/HTTPS, secure headers, and WAF rules.",
            "",
            "MONITORING, LOGGING & DETECTION:",
            "  • Log security-relevant events (authentication, access, changes).",
            "  • Monitor for anomalies and attack patterns.",
            "  • Set up alerting for suspicious activity.",
            "  • Logs must be protected from tampering.",
            "",
            "VULNERABILITY & PATCH MANAGEMENT:",
            "  • Continuously scan for new vulnerabilities in production.",
            "  • Apply patches promptly for critical issues.",
            "  • Test patches before applying to production.",
            "  • Maintain an inventory of all components.",
            "",
            "INCIDENT RESPONSE & LESSONS LEARNED:",
            "  • Have a defined incident response plan.",
            "  • Detect, contain, eradicate, recover, and document.",
            "  • After resolution, conduct a post-mortem.",
            "  • Feed lessons learned back into requirements and design.",
            "",
            "SSDLC AS A CONTINUOUS SECURITY LOOP:",
            "  • Operations feeds back into planning.",
            "  • Incidents improve the next cycle.",
            "  • Security is never 'done' — it evolves with threats."
        ])
        q1 = ask("An application is deployed to production with debug mode enabled, test accounts with weak passwords still present, and default administrator credentials unchanged. What phase of SSDLC should have prevented this?",
            ["Requirements engineering", "Secure deployment and hardening",
             "Threat modeling", "User acceptance testing"], 2,
            None, {1:["Requirements define what the system should do. They don't directly control deployment settings."],3:["Threat modeling identifies risks but doesn't configure production."],4:["UAT validates functionality, not production hardening."]},
            "Slide 58: 'Secure Deployment & Hardening' includes removing debug features, test accounts, and default credentials. Applying least privilege to production services. These are deployment-phase security activities.")
        self.ms(); self.sc(q1)

        q2 = ask("After a security breach, a company discovers that their logs were incomplete, stored on the same compromised server, and showed no evidence of the attacker's actions because the attacker deleted them. What two operational practices were missing?",
            ["Better marketing and faster servers", "Proper monitoring/logging and log protection against tampering",
             "More developers and bigger databases", "User training and UI redesign"], 2,
            None, {1:["Marketing and server speed are irrelevant to log integrity."],3:["More developers and bigger databases don't fix logging issues."],4:["User training and UI design are not log security controls."]},
            "Slide 59: 'Monitoring, Logging & Detection' — log security-relevant events, monitor for anomalies, and 'Logs must be protected from tampering.' Storing logs on the compromised server and allowing deletion = missing log protection.")
        self.ms(); self.sc(q2)

        q3 = ask("A company patches a critical vulnerability within 24 hours of disclosure, but the patch breaks a key feature and causes a 4-hour outage. They had no testing environment to validate the patch first. What SSDLC practice was missing?",
            ["Agile planning", "Vulnerability and patch management with testing before production deployment",
             "User story writing", "Threat modeling"], 2,
            None, {1:["Agile planning is about work organization, not patch testing."],3:["User stories capture requirements but don't test patches."],4:["Threat modeling identifies risks but doesn't validate patches."]},
            "Slide 60: 'Vulnerability & Patch Management' includes 'Apply patches promptly' AND 'Test patches before applying to production.' The outage resulted from untested deployment.")
        self.ms(); self.sc(q3)

        q4 = ask("After resolving a security incident, a team documents what happened, how the attacker got in, what data was affected, and what controls failed. They then update their threat model and security requirements to prevent similar incidents. What concept does this represent?",
            ["Blame assignment", "Incident response with lessons learned feeding back into the SSDLC loop",
             "Ignoring the incident", "Legal prosecution only"], 2,
            None, {1:["The scenario describes learning, not blame."],3:["They are actively using the incident to improve."],4:["Legal action might happen, but the described activities are about process improvement."]},
            "Slide 61: 'Incident Response & Lessons Learned' — after resolution, conduct a post-mortem and 'Feed lessons learned back into requirements and design.' Slide 62: 'SSDLC as a Continuous Security Loop' — operations feeds back into planning.")
        self.ms(); self.sc(q4)

        q5 = ask("Which statement best captures the overall philosophy of Module 7: Secure Software Development Life Cycle?",
            ["Security should be tested once before release", "Security is a continuous, integrated process from requirements through operations, with feedback loops that never end",
             "Security is the sole responsibility of the security team", "Developers should not think about security"], 2,
            None, {1:["Slide 19: Security is not a separate phase. Slide 55: Verification is continuous."],3:["Slide 26-27: DevSecOps makes security a shared responsibility."],4:["Slide 43: Developers must understand attack patterns and code defensively."]},
            "Slide 17-18: SSDLC 'integrates security into software development activities.' Slide 62: 'SSDLC as a Continuous Security Loop.' Security is never done — it evolves with threats and feeds back into every phase.")
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
        print(f"Levels completed: {len(self.completed)} / 9")
        print("\nYou have mastered Module 7!")
        print("   • Why security as an afterthought fails (cost, business logic)")
        print("   • Secure by design vs secure by patch")
        print("   • Shift-left security: moving security to early phases")
        print("   • SSDLC continuous cycle: Plan → Build → Test → Deploy → Monitor → Loop")
        print("   • Agile & DevSecOps: shared responsibility, automated pipelines")
        print("   • Security requirements, abuse/misuse cases, acceptance criteria")
        print("   • Threat modeling, trust boundaries, STRIDE")
        print("   • Secure architecture: defense in depth, least privilege, fail securely")
        print("   • Secure coding: input validation, auth/authz, secrets, dependencies")
        print("   • Security verification: SAST, DAST, pen testing, CI/CD integration")
        print("   • Secure release: hardening, monitoring, patch management")
        print("   • Incident response & continuous improvement loop")
        print("\n🎓 Ready for Module 8?")

    def game_over(self):
        print("\n" + "="*60)
        print("   💀  GAME OVER  💀")
        print("="*60)
        print(f"Completed {len(self.completed)} of 9 levels.")
        print(f"Score: {self.score} / {self.max_score}")
        print("Review the concepts and try again.")

if __name__ == "__main__":
    Game().start()
