#!/usr/bin/env python3
"""
Module 2 Part 1: Cyber Threat Landscape
Covers all slides from I3336-25-26-Module-2-Part-1.pdf
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
        print("   🎯 MODULE 2 (PART 1): CYBER THREAT LANDSCAPE QUEST 🎯")
        print("="*60)
        slow_print("You are a threat intelligence analyst. Before defending systems,")
        slow_print("you must understand WHAT assets need protection, WHO the adversaries are,")
        slow_print("WHERE trust fails, and HOW attacks surface and exploit vulnerabilities.")
        print("\n💀 3 lives | 🏆 7 levels | 📚 Slides 2-81")
        input("\nPress ENTER to begin...")

        levels = [
            ("Assets & Their Value", "2-6", self.l1),
            ("Adversaries / Threat Actors", "7-24", self.l2),
            ("Trust, Assumptions & Least Privilege", "25-45", self.l3),
            ("Attack Surface", "46-58", self.l4),
            ("Vulnerabilities & Exploitations", "59-70", self.l5),
            ("Threats, Scenarios & Impact", "71-81", self.l6),
            ("Final Certification", "2-81", self.l7),
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
        explain_concept("Assets & Their Value", [
            "ASSET = anything that has value and requires protection.",
            "Assets give meaning to security objectives. Security mechanisms exist because assets exist.",
            "Common asset categories:",
            "  • Data assets: personal, financial, proprietary data",
            "  • Identity assets: credentials, authentication material",
            "  • Service assets: availability and continuity of operation",
            "  • Integrity assets: correctness of records and transactions",
            "  • Control assets: administrative or privileged access",
            "  • Trust and reputation",
            "Asset value is CONTEXT-DEPENDENT: the same asset has different value in different systems.",
            "Academic records differ from financial or medical records. Availability may matter more than confidentiality in some systems.",
            "Misidentified assets lead to MISPLACED security controls."
        ])
        q1 = ask("Which statement about assets is TRUE?",
            ["All assets have the same value across all systems", "Asset value is context-dependent and determines where protections should be strongest",
             "Assets only include digital files", "Attackers target systems randomly regardless of asset value"], 2,
            None, {1:["Slide 6: 'The same asset may have different value in different systems.'"],3:["Slide 4: Assets include data, identity, service, integrity, control, trust, reputation."],4:["Slide 5: 'Assets determine what attackers are interested in' and 'Attackers select targets based on asset value.'"]},
            "Slide 5-6: Asset value is context-dependent. Different systems protect different types of assets. Misidentified assets lead to misplaced security controls.")
        self.ms(); self.sc(q1)

        q2 = ask("A hospital prioritizes keeping patient records accurate and unaltered. A streaming service prioritizes keeping videos accessible 24/7. What concept does this illustrate?",
            ["All systems need the same security", "Asset value and security priorities depend on system purpose and context",
             "Hospitals don't need availability", "Streaming services don't need data integrity"], 2,
            None, {1:["Slide 6: 'Asset importance depends on system purpose. Security priorities follow asset context.'"],3:["Hospitals do need availability, but integrity of medical records is critical."],4:["Streaming services need integrity of their catalog data, just different priorities."]},
            "Slide 6: 'Availability may matter more than confidentiality in some systems. Integrity may be more critical than secrecy in others.' Asset importance depends on system purpose.")
        self.ms(); self.sc(q2)

        q3 = ask("Which of the following is NOT listed as a common asset category in the lecture?",
            ["Data assets", "Identity assets",
             "Marketing campaigns", "Control assets"], 3,
            None, {1:["Data assets ARE listed (slide 4)."],2:["Identity assets ARE listed (slide 4)."],4:["Control assets ARE listed (slide 4)."]},
            "Slide 4 lists: Data assets, Identity assets, Service assets, Integrity assets, Control assets, Trust and reputation. Marketing campaigns are not listed as an asset category.")
        self.ms(); self.sc(q3)
        return q1 and q2 and q3

    def l2(self):
        explain_concept("Adversaries / Threat Actors", [
            "ADVERSARY = an entity that intentionally causes harm. Cyber attacks are deliberate, not accidental.",
            "Adversaries act with goals, incentives, and constraints. Understanding adversaries explains attack patterns.",
            "",
            "By Position:",
            "  • External attackers with no legitimate access",
            "  • Authenticated but malicious users",
            "  • Insiders with privileged access",
            "  • Third-party or supply-chain adversaries",
            "  • Automated or opportunistic attackers",
            "",
            "By Motivation and Skills:",
            "  • SCRIPT KIDDIES: low skill, high volume. Rely on public tools. Target exposed/misconfigured systems. Generate attack noise.",
            "  • HACKTIVISTS: ideology-driven. Seek visibility, not persistence. Use defacement and DoS. Geopolitical conflicts trigger activity.",
            "  • DISGRUNTLED EMPLOYEES: possess legitimate access. Operate inside trust boundaries. Abuse access rather than exploit vulnerabilities. Hard to distinguish from normal users.",
            "  • FINANCIALLY MOTIVATED: extortion, fraud, data resale. Target high-availability orgs. Operate as organized groups.",
            "  • ESPIONAGE-ORIENTED: intelligence gathering. Long-term access. Avoid visible disruption. State-sponsored or strategic.",
            "  • STATE-SPONSORED: national/strategic interests. Target governments, critical infrastructure. Emphasize stealth, persistence. Detection takes months/years."
        ])
        q1 = ask("An attacker rents a botnet for $10/hour and uses publicly available scripts to scan the internet for IoT devices with default passwords. They have limited technical understanding. What adversary category is this?",
            ["State-sponsored adversary", "Script kiddie",
             "Espionage-oriented adversary", "Disgruntled employee"], 2,
            None, {1:["State-sponsored actors have advanced capabilities and strategic objectives."],3:["Espionage-oriented adversaries focus on stealth and intelligence gathering, not scanning with public tools."],4:["Disgruntled employees have legitimate insider access."]},
            "Slide 12: Script kiddies have 'limited technical understanding,' 'heavy reliance on public tools and scripts,' 'target exposed or misconfigured systems,' and 'generate large amounts of attack noise.' Mirai example (slide 13) demonstrates this.")
        self.ms(); self.sc(q1)

        q2 = ask("A group launches coordinated DDoS attacks against government websites every year during a specific geopolitical anniversary. They publicize their actions and seek media attention. Their goal is protest, not financial gain. What type of adversary?",
            ["Cybercriminal group", "Hacktivist",
             "State-sponsored actor", "Script kiddie"], 2,
            None, {1:["Cybercriminals seek financial gain, not protest."],3:["State-sponsored actors prioritize stealth and long-term access, not public visibility."],4:["Script kiddies lack ideology and focus on opportunistic attacks."]},
            "Slide 14: Hacktivists are 'motivated by political or social causes,' 'seek visibility rather than persistence,' 'use defacement or denial-of-service attacks,' and 'often publicize their actions.' OpIsrael/OpJerusalem example (slide 15).")
        self.ms(); self.sc(q2)

        q3 = ask("A former employee of a technology company uses retained access credentials to deliberately delete critical data after a workplace dispute. No malware or external exploit is used. What adversary type?",
            ["External attacker", "Disgruntled or non-satisfied employee (insider)",
             "Hacktivist", "Script kiddie"], 2,
            None, {1:["The attacker had retained insider access, not external."],3:["No political or social cause is mentioned."],4:["This required specific insider access, not public scripts."]},
            "Slide 16-17: Disgruntled employees 'possess legitimate system access,' 'operate inside trust boundaries,' 'abuse access rather than exploit vulnerabilities,' and are 'difficult to distinguish from normal users.'")
        self.ms(); self.sc(q3)

        q4 = ask("The SolarWinds compromise (2020) involved inserting a backdoor into trusted software updates, remaining undetected for months, and targeting a limited set of high-value victims. Which adversary category best fits this operation?",
            ["Script kiddie", "Financially motivated criminal",
             "State-sponsored or strategic adversary", "Hacktivist"], 3,
            None, {1:["Script kiddies use public tools and target exposed systems."],2:["Financial criminals seek quick monetary gain, not long-term stealth."],4:["Hacktivists seek visibility, not stealth and persistence."]},
            "Slide 19-20: State-sponsored adversaries 'emphasize stealth, persistence, and intelligence value,' 'often avoid immediate disruption or public visibility,' and 'capabilities exceed those of most other adversaries.' SolarWinds (slide 19) = long-term strategic espionage.")
        self.ms(); self.sc(q4)

        q5 = ask("Which statement about adversary categories is TRUE?",
            ["All adversaries have the same skills and motivations", "Different adversaries require different protections, and defensive priorities depend on expected adversaries",
             "Ignoring adversaries still leads to complete security analysis", "Only external attackers pose real threats"], 2,
            None, {1:["Slide 24: 'Adversaries differ in motivation, capability, and access.'"],3:["Slide 9: 'Ignoring adversaries leads to incomplete security analysis.'"],4:["Slide 16: Insiders with privileged access are significant threats."]},
            "Slide 9: 'Different adversaries require different protections.' 'Defensive priorities depend on expected adversaries.' 'Ignoring adversaries leads to incomplete security analysis.'")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l3(self):
        explain_concept("Trust, Assumptions & Least Privilege", [
            "TRUST defines which actions are allowed without verification. Systems rely on trust to function efficiently.",
            "Excessive trust increases security exposure. Insufficient trust reduces usability.",
            "",
            "EXPLICIT vs IMPLICIT TRUST:",
            "  • Explicit trust = deliberately defined and enforced.",
            "  • Implicit trust = emerges from design assumptions, rarely documented, harder to audit.",
            "  • Attackers actively search for implicit trust.",
            "",
            "AUTHENTICATION vs AUTHORIZATION:",
            "  • Authentication = verifies who a user is.",
            "  • Authorization = determines what a user may do.",
            "  • Authentication does NOT imply authorization.",
            "  • Many systems enforce authentication correctly but authorization logic is often incomplete.",
            "",
            "TRUST BOUNDARIES separate components with different trust levels. Data crossing a boundary must be validated.",
            "",
            "LEAST PRIVILEGE: grant only permissions strictly needed, limited in scope and duration. Reduces lateral movement and attack surface.",
            "",
            "TRANSITIVE TRUST: trust extended implicitly through another trusted entity (e.g., trusting software updates from a vendor). Attackers exploit trust chains rather than single systems. SolarWinds = transitive trust example.",
            "",
            "OVER-TRUST vs UNDER-TRUST: Over-trust increases exposure. Under-trust reduces efficiency. Balancing trust is a design decision."
        ])
        q1 = ask("A university portal checks that a user is authenticated (logged in) before processing grade requests, but does not verify whether the student ID in the request belongs to the logged-in user. The system assumes logged-in users only request their own records. What type of trust is the authentication check, and what type is the ownership assumption?",
            ["Both are explicit trust", "Authentication is explicit trust; ownership assumption is implicit trust",
             "Both are implicit trust", "Authentication is implicit trust; ownership is explicit trust"], 2,
            None, {1:["The ownership assumption is not deliberately enforced — it's an assumption."],3:["Authentication is deliberately checked and enforced."],4:["Reversed. Authentication is explicit; ownership assumption is implicit."]},
            "Slide 28-31: 'Explicit vs Implicit Trust' — explicit trust is 'deliberately defined and enforced.' Implicit trust 'emerges from design assumptions' and is 'rarely documented.' The case study shows authentication is explicit, while ownership of requested data is implicitly trusted.")
        self.ms(); self.sc(q1)

        q2 = ask("A web application uses a single database admin account for all backend services. All authenticated users share the same role. Authorization logic relies only on frontend checks. What principle is being violated?",
            ["Defense in depth", "Principle of least privilege",
             "Zero trust", "Multi-factor authentication"], 2,
            None, {1:["Defense in depth uses multiple layers. The core issue here is excessive permissions."],3:["Zero trust assumes no implicit trust. This is related but the specific violation is least privilege."],4:["MFA is about proving identity with multiple factors, not about permission scope."]},
            "Slide 36: Bad implementation of least privilege includes 'All authenticated users share the same role,' 'Backend services use a single database admin account,' and 'Authorization logic relies on frontend checks only.' Slide 35: Least privilege means 'granted only the permissions they strictly need.'")
        self.ms(); self.sc(q2)

        q3 = ask("In the WannaCry attack (2017), once a single Windows machine was compromised, the malware spread to other internal systems without additional authentication because the internal network was implicitly trusted. What concept does this illustrate?",
            ["Strong perimeter security", "Collapsed trust boundaries due to excessive implicit trust",
             "Effective network segmentation", "Proper least privilege implementation"], 2,
            None, {1:["The internal network was not well-protected once one machine fell."],3:["No segmentation was in place — that's why it spread."],4:["If least privilege was implemented, lateral movement would have been restricted."]},
            "Slide 33: WannaCry case study — 'The internal network was implicitly trusted, enabling the malware to spread laterally.' 'This implicit trust in internal network traffic effectively collapsed trust boundaries between machines.'")
        self.ms(); self.sc(q3)

        q4 = ask("A company automatically deploys digitally signed software updates from a trusted vendor. Attackers compromise the vendor's build system and inject malware into the update, which then gets installed in the company's internal network. What concept enabled this attack?",
            ["Zero-day vulnerability", "Transitive trust",
             "Social engineering", "Brute-force attack"], 2,
            None, {1:["A zero-day is an unknown vulnerability. This attack used trust in the vendor, not a software flaw."],3:["No human was manipulated into giving credentials."],4:["No password guessing was involved."]},
            "Slide 38-40: Transitive trust = 'trust is implicitly extended through another trusted entity.' 'Trust in one component leads to trust in connected components.' SolarWinds case: 'Customers implicitly trusted digitally signed software updates' and 'This transitive trust allowed attackers to move from a trusted software supplier into highly sensitive environments.'")
        self.ms(); self.sc(q4)

        q5 = ask("Over time, an employee who started with basic access gradually accumulates additional permissions through role changes, temporary assignments, and convenience grants. No one reviews these accumulated permissions. What is this phenomenon called?",
            ["Role explosion", "Permission creep",
             "Transitive trust", "Zero-day accumulation"], 2,
            None, {1:["Role explosion is an RBAC problem with too many roles. This is about gradual permission accumulation for one user."],3:["Transitive trust is about trust propagation through systems, not individual permission growth."],4:["Zero-days are unknown vulnerabilities, not permission accumulation."]},
            "Slide 37: 'Permission creep gradually increases access.' 'Roles and responsibilities evolve over time.' 'Privileges accumulate over time.' This is a challenge in applying least privilege.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l4(self):
        explain_concept("Attack Surface", [
            "ATTACK SURFACE = the set of points where a system can be interacted with. Every interface is a potential attack surface.",
            "Attackers cannot exploit what they cannot reach. Larger attack surfaces increase likelihood of exploitation.",
            "",
            "Common types:",
            "  • User-facing interfaces: web pages, forms",
            "  • Network-exposed services and open ports",
            "  • APIs and backend service endpoints",
            "  • File upload and download mechanisms",
            "  • Authentication and session management components",
            "  • Administrative or management interfaces",
            "  • Human interaction (social engineering)",
            "  • Configuration and management interfaces",
            "",
            "Examples:",
            "  • Equifax (2017): unpatched Apache Struts in public-facing web application = user-facing attack surface.",
            "  • Facebook (2018): 'View As' API flaw = API attack surface. Backend APIs can be high-impact even when not directly visible.",
            "  • Twitter (2020): phone-based phishing of employees = human attack surface. Bypassed technical safeguards entirely.",
            "  • Tesla (2018): exposed credentials in public code repo = configuration attack surface.",
            "  • Capital One (2019): misconfigured WAF allowing access to S3 = configuration/management attack surface."
        ])
        q1 = ask("An attacker discovers an unpatched vulnerability in a public-facing web application and steals millions of customer records. Equifax (2017) is cited as an example. What type of attack surface was exploited?",
            ["Network-exposed service", "User-facing interface",
             "Human interaction", "Administrative interface"], 2,
            None, {1:["Network-exposed services are backend ports/protocols. This was a public web app."],3:["No employee was tricked; it was a technical vulnerability in the web app."],4:["The admin interface was not the entry point."]},
            "Slide 49-50: Equifax example = 'unpatched Apache Struts in public-facing web application.' 'User-facing interfaces such as web pages and forms' are a common attack surface type.")
        self.ms(); self.sc(q1)

        q2 = ask("Attackers exploited a flaw in Facebook's 'View As' API feature to obtain access tokens for millions of accounts. The API was not directly visible to end users but exposed functionality in unintended ways. What type of attack surface?",
            ["User-facing web form", "API and backend attack surface",
             "File upload mechanism", "Network port scanning"], 2,
            None, {1:["The 'View As' API was a backend endpoint, not a direct user interface."],3:["No file upload was involved."],4:["No port scanning was the attack vector."]},
            "Slide 53-54: Facebook (2018) = 'attackers exploited a flaw in the View As API feature.' 'APIs expose system functionality programmatically' and 'Backend endpoints are less visible but highly sensitive.' This is an API/backend attack surface.")
        self.ms(); self.sc(q2)

        q3 = ask("In 2020, attackers gained access to Twitter's internal systems by calling employees on the phone and convincing them to disclose credentials. No technical vulnerability in the software was exploited. What type of attack surface?",
            ["Configuration error", "Human attack surface",
             "API vulnerability", "Network service"], 2,
            None, {1:["No misconfiguration was the cause — it was social engineering."],3:["No API flaw was exploited."],4:["No network service was the entry point."]},
            "Slide 55-56: Twitter (2020) = 'socially engineering employees through phone-based phishing attacks.' 'Human trust and interaction can form a primary attack surface, bypassing technical safeguards entirely.'")
        self.ms(); self.sc(q3)

        q4 = ask("Attackers found exposed cloud management credentials in a public code repository, granting access to administrative dashboards. In another case, a misconfigured web application firewall allowed remote queries to cloud storage without authorization. What category of attack surface?",
            ["User-facing interface", "API endpoint",
             "Configuration and management attack surface", "Human interaction"], 3,
            None, {1:["These were not public user interfaces."],2:["No API was the primary issue — it was misconfiguration and exposed credentials."],4:["No human social engineering was involved."]},
            "Slide 57-58: Tesla (2018) = 'exposed credentials in a public code repository.' Capital One (2019) = 'misconfigured web application firewall.' Both are examples of 'Configuration and Management Attack Surfaces.'")
        self.ms(); self.sc(q4)

        q5 = ask("Which statement about attack surfaces is TRUE?",
            ["Attack surfaces only exist in poorly implemented systems", "Attack surfaces exist even in correctly implemented systems, and every interface is a potential attack surface",
             "New features never create new attack surfaces", "Attack surfaces never change over time"], 2,
            None, {1:["Slide 47: 'Attack surfaces exist even in correctly implemented systems.'"],3:["Slide 48: 'New features often create new attack surfaces.'"],4:["Slide 48: 'Attack surfaces evolve over time.'"]},
            "Slide 47-48: 'Attack surfaces exist even in correctly implemented systems.' 'Every interface is a potential attack surface.' 'New features often create new attack surfaces.' 'Attack surfaces evolve over time.'")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l5(self):
        explain_concept("Vulnerabilities & Exploitations", [
            "VULNERABILITY = a weakness that can be exploited. Exists in code, configuration, or design. Passive until exploited.",
            "",
            "TECHNICAL VULNERABILITIES:",
            "  • Result from implementation or coding errors.",
            "  • Often violate memory or input-handling rules.",
            "  • Can allow Remote Code Execution (RCE) or data leakage.",
            "  • Often exploitable through crafted input.",
            "  • Usually fixed through patches or updates.",
            "  • Example: Log4Shell (2021) — RCE in Apache Log4j via crafted input.",
            "",
            "LOGICAL VULNERABILITIES:",
            "  • Arise from flawed system logic or assumptions.",
            "  • Occur even when software works as intended.",
            "  • Often involve access control or workflow errors.",
            "  • Hard to detect using automated scanners.",
            "  • Logs often show normal authenticated activity.",
            "  • Fixes require redesign rather than patching.",
            "  • Example: Facebook (2021) IDOR — authenticated but not authorized access.",
            "",
            "Comparison: Technical = easier to scan, often generic, from code errors. Logical = require human analysis, system-specific, from design decisions.",
            "",
            "VULNERABILITY CHAINING: Attacks combine multiple weaknesses. Minor vulnerabilities amplify each other. Security analysis must consider combinations.",
            "",
            "EXPLOIT = method to leverage a vulnerability. Not all vulnerabilities have usable exploits.",
            "ZERO-DAY = targets unknown vulnerability, no patch available. KNOWN EXPLOIT = targets documented vulnerability."
        ])
        q1 = ask("A widely used Java logging library (Log4j) allowed attackers to execute arbitrary code by sending specially crafted input that was logged by applications. This was a coding error in how input was handled. What type of vulnerability is this?",
            ["Logical vulnerability", "Technical vulnerability",
             "Configuration vulnerability", "Human vulnerability"], 2,
            None, {1:["Logical vulnerabilities arise from flawed system logic, not coding errors."],3:["Configuration vulnerabilities are about settings, not code implementation."],4:["Human vulnerabilities involve social engineering, not code flaws."]},
            "Slide 61-62: Technical vulnerabilities 'result from implementation or coding errors,' 'often violate memory or input-handling rules,' and 'can allow Remote Code Execution (RCE).' Log4Shell (2021) is explicitly given as a technical vulnerability example.")
        self.ms(); self.sc(q1)

        q2 = ask("A social media platform verifies that a user is authenticated but fails to verify whether a requested resource belongs to that user. By changing a numerical ID in a request, attackers access other users' data. The system works as coded — there is no coding error. What type of vulnerability?",
            ["Technical vulnerability", "Logical vulnerability",
             "Physical vulnerability", "Network vulnerability"], 2,
            None, {1:["Technical vulnerabilities stem from code errors. This is a design/logic flaw."],3:["Physical vulnerabilities involve hardware or physical access."],4:["Network vulnerabilities involve protocol or transmission flaws."]},
            "Slide 63-64: Logical vulnerabilities 'arise from flawed system logic or assumptions,' 'occur even when software works as intended,' and 'often involve access control or workflow errors.' Facebook (2021) IDOR is explicitly given as a logical vulnerability.")
        self.ms(); self.sc(q2)

        q3 = ask("An attacker gains initial access through a phishing email, then uses a known software vulnerability to move laterally, then exploits a missing authorization check to access sensitive data. The individual weaknesses alone would not be critical, but combined they lead to a major breach. What concept is this?",
            ["Single point of failure", "Vulnerability chaining",
             "Defense in depth", "Zero-day exploitation"], 2,
            None, {1:["This involves multiple weaknesses, not a single point."],3:["Defense in depth is a protective strategy, not an attack technique."],4:["The vulnerabilities described are known, not zero-day."]},
            "Slide 66-67: 'Vulnerability chaining' = 'Attacks often combine multiple weaknesses.' 'Minor vulnerabilities can amplify each other.' 'Logical flaws enable deeper exploitation.' 'Technical flaws bypass security controls.' 'Chaining increases attack reliability.'")
        self.ms(); self.sc(q3)

        q4 = ask("A vulnerability exists in a system but no known method currently exists to exploit it in practice. What is the difference between the vulnerability and an exploit?",
            ["They are the same thing", "Vulnerability is the weakness; exploit is the technique to use it. Not all vulnerabilities have usable exploits",
             "An exploit is weaker than a vulnerability", "A vulnerability cannot exist without an exploit"], 2,
            None, {1:["They are distinct concepts."],3:["An exploit operationalizes a weakness, making it more dangerous, not weaker."],4:["Slide 69: 'Vulnerability may exist without active exploit.'"]},
            "Slide 69-70: 'Vulnerability is a weakness. Exploit is the technique to use it.' 'Vulnerability may exist without active exploit.' 'Exploit requires feasibility conditions.'")
        self.ms(); self.sc(q4)

        q5 = ask("A security researcher discovers a flaw in a browser that the vendor was previously unaware of. No patch exists. An attacker quickly develops a working exploit and begins using it before the vendor can respond. What type of exploit is this?",
            ["Known exploit", "Zero-day exploit",
             "Logical exploit", "Technical exploit"], 2,
            None, {1:["Known exploits target documented vulnerabilities with patches available."],3:["Logical vs technical describes the vulnerability type, not the exploit's novelty."],4:["Technical vs logical describes the vulnerability category, not the timing."]},
            "Slide 70-71: Zero-day exploit 'targets unknown vulnerability' and 'vendor has no patch available.' Known exploit 'targets documented vulnerability.' This scenario describes an unknown flaw with no patch — a zero-day.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l6(self):
        explain_concept("Threats, Scenarios & Impact", [
            "THREAT = a potential cause of unwanted harm. Requires: adversary + objective + feasible path + accessible attack surface + exploitable vulnerability + reachable asset.",
            "A threat exists even before exploitation. Threats are contextual, not abstract.",
            "",
            "THREAT SCENARIO = concrete description of how harm may occur.",
            "  • Components: Adversary and objective, Exploited weakness, Affected asset, Potential consequences.",
            "  • Example: Okta/MOVEit (2023) — Cl0p ransomware group used SQL injection in MOVEit to exfiltrate data from hundreds of organizations.",
            "",
            "THREAT GOALS: Financial gain, Data theft, Disruption, Espionage, Influence operations, Reputation damage.",
            "",
            "THREAT PATH = sequence from entry point to target asset. May involve multiple vulnerabilities, exploit trust relationships, combine technical and logical weaknesses, include social engineering.",
            "",
            "THREAT IMPACT: Confidentiality loss, Integrity compromise, Availability disruption, Reputational harm, Legal consequences, Financial damage."
        ])
        q1 = ask("Complete the threat formula: A threat requires an ___ with motivation, a ___ aligned with attacker objectives, a ___ with an exploitable weakness, and a ___ asset.",
            ["adversary; goal; attack surface; reachable", "vulnerability; patch; network; encrypted",
             "firewall; password; user; hidden", "developer; feature; bug; internal"], 1,
            None, {2:["Patches and encryption are defensive, not threat components."],3:["Firewalls are defenses, not threat elements."],4:["Developers and features don't fit the threat model."]},
            "Slide 73-74: Threat = Adversary + Goal + Path to Asset. Components: 'An accessible attack surface,' 'An exploitable vulnerability,' 'A goal aligned with attacker objectives,' 'A reachable asset,' 'An adversary with motivation,' 'A realistic execution path.'")
        self.ms(); self.sc(q1)

        q2 = ask("In the 2023 MOVEit Transfer breach, the Cl0p ransomware group used a SQL injection flaw in the web-facing application to gain unauthorized access to databases storing sensitive files, then exfiltrated data from hundreds of organizations for extortion. What is this narrative an example of?",
            ["A vulnerability scan report", "A threat scenario",
             "A penetration test plan", "A compliance audit"], 2,
            None, {1:["A scan report lists vulnerabilities; this describes a specific attack narrative."],3:["A pen test plan describes what WILL be tested, not what already happened."],4:["A compliance audit checks regulatory adherence, not a specific attack chain."]},
            "Slide 75-78: 'Threat Scenario' = 'A concrete description of how harm may occur.' The MOVEit example breaks down into: Adversary (Cl0p) and objective (data exfiltration/extortion), Exploited weakness (SQL injection), Affected asset (sensitive data/PII), Potential consequences (confidentiality breach, extortion, regulatory penalties).")
        self.ms(); self.sc(q2)

        q3 = ask("Which of the following is NOT listed as a threat goal in the lecture?",
            ["Financial gain", "Data theft",
             "Increasing system performance", "Espionage"], 3,
            None, {1:["Financial gain IS listed (slide 79)."],2:["Data theft IS listed (slide 79)."],4:["Espionage IS listed (slide 79)."]},
            "Slide 79 lists threat goals: Financial gain, Data theft, Disruption, Espionage, Influence operations, Reputation damage. 'Increasing system performance' is not a threat goal.")
        self.ms(); self.sc(q3)

        q4 = ask("A threat path may involve multiple vulnerabilities, exploit trust relationships, combine technical and logical weaknesses, and include social engineering. What does the threat path primarily define?",
            ["The cost of the system", "The feasibility of the attack",
             "The programming language used", "The physical location of the attacker"], 2,
            None, {1:["System cost is not related to threat path definition."],3:["Programming language is implementation detail, not threat path definition."],4:["Physical location is not what the threat path defines."]},
            "Slide 80: 'Threat Path: Sequence from entry point to target asset.' 'Defines feasibility of attack.' The path determines whether the attack is realistically achievable.")
        self.ms(); self.sc(q4)

        q5 = ask("A ransomware attack encrypts a hospital's patient records (availability disruption), steals copies for extortion (confidentiality loss), and modifies appointment schedules (integrity compromise). The hospital faces regulatory fines and reputational damage. What concept describes these outcomes?",
            ["Threat surface", "Threat impact",
             "Attack vector", "Risk assessment"], 2,
            None, {1:["Threat surface is not a standard term; attack surface is about entry points."],3:["Attack vector is the method of entry, not the resulting harm."],4:["Risk assessment is the process of evaluating risk, not the outcomes themselves."]},
            "Slide 81: 'Threat Impact' includes: 'Confidentiality loss, Integrity compromise, Availability disruption, Reputational harm, Legal consequences, Financial damage.' All the described outcomes are threat impacts.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l7(self):
        explain_concept("Final Certification: All Module 2 Part 1 Concepts", [
            "Comprehensive review:",
            "  • Assets = anything of value. Categories: data, identity, service, integrity, control, trust/reputation. Value is context-dependent.",
            "  • Adversaries = intentional harm-causers. By position (external, insider, supply-chain) and motivation (script kiddies, hacktivists, insiders, financial, espionage, state-sponsored).",
            "  • Trust = defines allowed actions without verification. Explicit (deliberate) vs implicit (assumed). Authentication ≠ authorization.",
            "  • Trust boundaries = separate components with different trust levels. Data crossing must be validated.",
            "  • Least privilege = only strictly needed permissions. Reduces lateral movement and attack surface.",
            "  • Transitive trust = trust extended through another trusted entity. Dangerous because one compromise affects many systems.",
            "  • Attack surface = all interaction points. Types: user-facing, network, API, file upload, auth/session, admin, human, configuration.",
            "  • Vulnerabilities = weaknesses in code, config, or design. Technical (coding errors, patchable) vs logical (design flaws, require redesign).",
            "  • Vulnerability chaining = combining multiple weaknesses for greater impact.",
            "  • Exploit = technique to use a vulnerability. Zero-day (unknown, no patch) vs known (documented).",
            "  • Threat = potential harm. Requires: adversary + goal + path + attack surface + vulnerability + asset.",
            "  • Threat scenario = concrete narrative of harm. Threat goals, path, and impact define the full picture."
        ])
        q1 = ask("A software library has a coding error that allows remote code execution when specially crafted input is processed. Automated scanners can detect it, and a patch fixes it. A different application correctly verifies authentication but fails to check if users can access specific resources they request. Logs show normal activity. What two concepts describe these vulnerabilities?",
            ["Both are technical vulnerabilities", "Technical vulnerability and logical vulnerability",
             "Both are logical vulnerabilities", "Zero-day and known exploit"], 2,
            None, {1:["The second is a design flaw (access control), not a coding error."],3:["The first is a coding error, not a design logic flaw."],4:["These describe exploit timing, not vulnerability types."]},
            "Slide 65: Technical vulnerabilities 'stem from code errors,' are 'easier to scan,' and 'often generic.' Logical vulnerabilities 'stem from design decisions,' are 'system-specific,' and 'require human analysis.' The first scenario = technical. The second = logical (IDOR-style access control flaw).")
        self.ms(); self.sc(q1)

        q2 = ask("A company trusts a vendor's software updates because the vendor is reputable. The vendor's build system is compromised, and malicious code is inserted into a signed update. Customers install it automatically because they trust the vendor. What two key concepts does this illustrate?",
            ["Zero-day vulnerability and technical exploit", "Transitive trust and collapsed trust boundaries",
             "Social engineering and human attack surface", "Permission creep and least privilege"], 2,
            None, {1:["No unknown software vulnerability was used — it was trust abuse."],3:["No human was tricked into giving credentials."],4:["No individual permission accumulation is described."]},
            "Slide 38-42: Transitive trust = 'trust is implicitly extended through another trusted entity.' SolarWinds case: 'Customers implicitly trusted digitally signed software updates.' 'This transitive trust allowed attackers to move from a trusted software supplier into highly sensitive environments.' Trust boundaries collapsed because third-party trust was not validated.")
        self.ms(); self.sc(q2)

        q3 = ask("An attacker tricks an employee into revealing credentials over the phone, then uses those credentials to access internal systems. No software vulnerability was exploited. What type of attack surface is primarily involved?",
            ["API and backend attack surface", "Human attack surface",
             "Configuration attack surface", "Network-based attack surface"], 2,
            None, {1:["No API flaw was exploited."],3:["No misconfiguration was the cause."],4:["No network service was directly attacked."]},
            "Slide 55-56: 'Human Interaction as an Attack Surface.' Twitter (2020) example: 'socially engineering employees through phone-based phishing attacks.' 'Human trust and interaction can form a primary attack surface, bypassing technical safeguards entirely.'")
        self.ms(); self.sc(q3)

        q4 = ask("Which statement correctly captures the relationship between vulnerabilities, exploits, and patches?",
            ["Every vulnerability has an active exploit", "A patch removes the vulnerability, but exploit history remains. Not all vulnerabilities have usable exploits",
             "Exploits exist only after patches are released", "Zero-day exploits target known vulnerabilities with patches available"], 2,
            None, {1:["Slide 69: 'Not all vulnerabilities have usable exploits.'"],3:["Zero-day exploits exist BEFORE patches."],4:["Zero-day exploits target UNKNOWN vulnerabilities with NO patch available."]},
            "Slide 69-71: 'Vulnerability is a weakness. Exploit is the technique to use it.' 'Vulnerability may exist without active exploit.' 'Patch removes vulnerability, not exploit history.' Zero-day = unknown, no patch. Known exploit = documented vulnerability.")
        self.ms(); self.sc(q4)

        q5 = ask("A university system for course registration has a threat of phishing emails targeting student credentials. No phishing campaign is active today, but the threat level increases during registration periods. What does this demonstrate about threats?",
            ["Threats only exist during active attacks", "Threats are contextual and exist even before exploitation",
             "Threats are absolute and independent of timing", "All threats can be completely eliminated"], 2,
            None, {1:["Slide 73: 'A threat exists even before exploitation.'"],3:["Slide 73: 'A threat is contextual, not abstract.'"],4:["Slide 36 (from Module 1 reminder): 'Threats cannot be completely eliminated, only reduced or mitigated.'"]},
            "Slide 73: 'A threat is contextual, not abstract.' 'A threat exists even before exploitation.' The phishing threat exists even without an active campaign, and its level changes based on context (registration periods).")
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
        print(f"Levels completed: {len(self.completed)} / 7")
        print("\nYou have mastered Module 2 Part 1!")
        print("   • Assets: categories, context-dependent value")
        print("   • Adversaries: 6 categories by position and motivation")
        print("   • Trust: explicit vs implicit, authentication vs authorization")
        print("   • Trust boundaries, least privilege, transitive trust")
        print("   • Attack surface: 8 types with real-world examples")
        print("   • Vulnerabilities: technical vs logical, chaining")
        print("   • Exploits: zero-day vs known")
        print("   • Threats: formula, scenarios, goals, path, impact")
        print("\n🎓 Ready for Module 2 Part 2?")

    def game_over(self):
        print("\n" + "="*60)
        print("   💀  GAME OVER  💀")
        print("="*60)
        print(f"Completed {len(self.completed)} of 7 levels.")
        print(f"Score: {self.score} / {self.max_score}")
        print("Review the concepts and try again.")

if __name__ == "__main__":
    Game().start()
