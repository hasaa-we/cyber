#!/usr/bin/env python3
"""
Module 4: Identity, Authentication, and Access Control
Covers all slides from I3336-25-26-Module-4.pdf
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
        print("   🔐 MODULE 4: IDENTITY, AUTHENTICATION & ACCESS CONTROL 🔐")
        print("="*60)
        slow_print("You are a security architect designing identity systems.")
        slow_print("From passwords to Zero Trust, you must master every concept.")
        print("\n💀 3 lives | 🏆 8 levels | 📚 All slides (2-105) covered")
        input("\nPress ENTER to begin...")

        levels = [
            ("Core Identity Concepts", "2-18", self.l1),
            ("Password Weaknesses & Attacks", "19-32", self.l2),
            ("MFA & Strengthening Authentication", "33-43", self.l3),
            ("Access Control Fundamentals", "44-57", self.l4),
            ("Access Control Models", "58-74", self.l5),
            ("Identity as the New Perimeter", "75-84", self.l6),
            ("Identity Infrastructure & Standards", "85-94", self.l7),
            ("Attacks on Identity & Access + Final", "95-105", self.l8),
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
        explain_concept("Core Identity Concepts", [
            "IDENTITY = digital representation of an entity (human, service, device).",
            "IDENTITY vs ACCOUNT: Identity is the real-world entity. Account is how it's represented in a specific system. One identity can have multiple accounts.",
            "IDENTIFICATION = claiming an identity (e.g., entering username).",
            "AUTHENTICATION (AuthN) = verifying that claim (e.g., entering password). Answers: 'Who are you?'",
            "AUTHORIZATION (AuthZ) = determining what you're allowed to do. Answers: 'What can you do?'",
            "AAA Model: Authentication + Authorization + Accounting (records activity).",
            "SESSION = maintains authenticated state across requests (cookies, tokens).",
            "TRUST BOUNDARY = where trust assumptions change. Requires validation."
        ])
        q1 = ask("A user types their username into a login form. What security action is this?",
            ["Authentication", "Identification", "Authorization", "Accounting"], 2,
            None, {1:["Authentication verifies the claim. Typing a username is just claiming identity."],3:["Authorization decides permissions AFTER authentication."],4:["Accounting records activity, not the initial claim."]},
            "Slide 12: Identification is 'the act of claiming an identity.' Authentication verifies it.")
        self.ms(); self.sc(q1)

        q2 = ask("A student logs into a university system with valid credentials. The system then decides the student can view grades but cannot modify them. What is the second step called?",
            ["Authentication", "Identification", "Authorization", "Session management"], 3,
            None, {1:["Authentication was the login step. The system already knows who they are."],2:["Identification was entering the username."],4:["Session management maintains state, not permission decisions."]},
            "Slide 13: Authorization answers 'What are you allowed to do?' and happens AFTER authentication.")
        self.ms(); self.sc(q2)

        q3 = ask("In the AAA model, what does the third 'A' (Accounting) do?",
            ["Verifies user identity", "Determines allowed actions", "Records user activity for monitoring and auditing", "Encrypts user passwords"], 3,
            None, {1:["That's Authentication."],2:["That's Authorization."],4:["Encryption is not part of AAA."]},
            "Slide 15: Accounting 'records user activity for monitoring and auditing.'")
        self.ms(); self.sc(q3)

        q4 = ask("After a user successfully logs in, the system uses a cookie to remember they are authenticated across multiple page requests. What is this mechanism?",
            ["Trust boundary", "Session", "Access control matrix", "Identity provider"], 2,
            None, {1:["Trust boundaries are where assumptions change."],3:["Access control matrix defines permissions."],4:["Identity provider manages identities externally."]},
            "Slide 17: Sessions 'maintain the user's authenticated state across requests.'")
        self.ms(); self.sc(q4)

        q5 = ask("A single person has a university email account, a personal Gmail account, and a work Microsoft account. Each has different permissions. What concept explains this?",
            ["One identity cannot have multiple accounts", "Identity vs Account distinction",
             "Authentication is the same as authorization", "Sessions are permanent"], 2,
            None, {1:["Slide 11 explicitly says a single identity CAN have multiple accounts."],3:["They are different concepts."],4:["Sessions are temporary, not permanent."]},
            "Slide 11: 'Identity refers to the real-world entity. Account is how that identity is represented in a specific system.'")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l2(self):
        explain_concept("Password Weaknesses & Attacks", [
            "Passwords are widely used but fundamentally weak:",
            "  • Users choose predictable passwords (123456, password, qwerty).",
            "  • Many attack techniques: brute-force, dictionary, credential stuffing, phishing, keyloggers.",
            "BRUTE-FORCE = trying every possible combination. Very slow without constraints.",
            "DICTIONARY ATTACK = using lists of common passwords and leaked credentials. Much faster.",
            "CREDENTIAL STUFFING = using leaked credentials from one breach on other platforms. Automated.",
            "PASSWORD STORAGE: never store plaintext. Use HASHING (one-way) + SALTING (random data added before hashing).",
            "Key insight: Passwords alone cannot provide strong security guarantees."
        ])
        q1 = ask("An attacker uses a list of the 10,000 most common passwords to try logging into many accounts. What attack is this?",
            ["Brute-force attack", "Dictionary attack", "Credential stuffing attack", "Session hijacking"], 2,
            None, {1:["Brute-force tries ALL combinations, not just common ones."],3:["Credential stuffing uses leaked credentials from other breaches."],4:["Session hijacking steals active sessions, not passwords."]},
            "Slide 26: Dictionary attacks use 'lists of common passwords' and are 'much faster than brute force.'")
        self.ms(); self.sc(q1)

        q2 = ask("An attacker obtains a database of usernames and passwords from a breached shopping website and automatically tries them on banking websites. What attack is this?",
            ["Brute-force attack", "Dictionary attack", "Credential stuffing attack", "Phishing attack"], 3,
            None, {1:["Brute-force tries random combinations."],2:["Dictionary uses common password lists, not leaked credentials."],4:["Phishing tricks users into revealing passwords. This uses already-stolen data."]},
            "Slide 27: Credential stuffing uses 'credentials leaked from previous breaches' and 'automated tools try these on other platforms.'")
        self.ms(); self.sc(q2)

        q3 = ask("A system stores passwords as plain text in its database. An attacker breaches the database and immediately knows every user's password. What critical mistake did the system make?",
            ["Not using multi-factor authentication", "Storing passwords in plaintext instead of hashing",
             "Allowing too many login attempts", "Not having a firewall"], 2,
            None, {1:["MFA is good but doesn't fix plaintext storage."],3:["Rate limiting helps but doesn't fix storage."],4:["Firewalls filter traffic, not store passwords."]},
            "Slide 30: 'Systems must never store passwords in plaintext.' Secure systems use hashing.")
        self.ms(); self.sc(q3)

        q4 = ask("Even if two users have the same password, their stored hashes should look different. What technique ensures this?",
            ["Hashing alone", "Salting", "Encryption", "Compression"], 2,
            None, {1:["Hashing alone would produce the same hash for the same password."],3:["Encryption is reversible. Hashing is one-way."],4:["Compression reduces size, not a security mechanism."]},
            "Slide 31: Salting 'adds random data before hashing' so 'even if two users have the same password, their stored hashes will be different.'")
        self.ms(); self.sc(q4)

        q5 = ask("Malicious software records every keystroke a user types, including passwords, and sends them to an attacker. What is this called?",
            ["Ransomware", "Keylogger", "Worm", "Trojan"], 2,
            None, {1:["Ransomware encrypts files and demands payment."],3:["Worms self-propagate across networks."],4:["Trojan disguises itself as legitimate software."]},
            "Slide 29: 'Keyloggers recording keystrokes' are a form of password capture via malware.")
        self.ms(); self.sc(q5)

        q6 = ask("Which statement about passwords is TRUE?",
            ["Passwords alone provide strong security guarantees", "Even well-implemented systems can be compromised through user behavior",
             "Strong passwords are immune to keyloggers", "Plaintext password storage is acceptable with a strong firewall"], 2,
            None, {1:["Slide 32: 'Passwords alone cannot provide strong security guarantees.'"],3:["Keyloggers capture ANY password typed, strong or weak."],4:["Plaintext storage is NEVER acceptable."]},
            "Slide 32: 'Even well-implemented systems can be compromised' and 'passwords rely heavily on user behavior, which is often weak.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l3(self):
        explain_concept("MFA & Strengthening Authentication", [
            "MFA (Multi-Factor Authentication) = requires two or more INDEPENDENT proofs of identity.",
            "Even if one factor is compromised, others protect the account.",
            "Factors:",
            "  • Something you KNOW (password, PIN)",
            "  • Something you HAVE (phone, hardware token, smart card)",
            "  • Something you ARE (fingerprint, face recognition)",
            "OTP (One-Time Password) = temporary codes. SMS or app-generated.",
            "Hardware tokens and authenticator apps are more secure than SMS.",
            "BIOMETRIC: convenient but cannot be changed if compromised.",
            "Limitations: SMS interception, device compromise, phishing against MFA (fake login pages capturing OTP in real-time).",
            "PASSWORDLESS = eliminate passwords. Uses biometrics, secure devices, cryptographic auth (Passkeys, FIDO2)."
        ])
        q1 = ask("A user must enter their password AND a code sent to their phone to log in. What security mechanism is this?",
            ["Single sign-on", "Multi-factor authentication (MFA)", "Network segmentation", "Rate limiting"], 2,
            None, {1:["SSO lets users log in once for multiple services."],3:["Network segmentation divides network zones."],4:["Rate limiting restricts request frequency."]},
            "Slide 35: MFA 'requires users to provide two or more independent proofs of identity.'")
        self.ms(); self.sc(q1)

        q2 = ask("An authentication system requires a fingerprint scan AND a hardware security key. Which two factor categories are used?",
            ["Knowledge and possession", "Possession and inherence", "Inherence and knowledge", "Location and time"], 2,
            None, {1:["Knowledge = something you know (password). No password is used here."],3:["Knowledge is not used. Fingerprint is inherence, key is possession."],4:["Location and time are context factors, not the primary factor categories."]},
            "Slide 36: Fingerprint = 'something you ARE' (inherence). Hardware key = 'something you HAVE' (possession).")
        self.ms(); self.sc(q2)

        q3 = ask("A bank sends a one-time code via SMS for login verification. What is a key limitation of this approach?",
            ["SMS codes never expire", "SMS can be intercepted by attackers",
             "Users cannot receive SMS messages", "SMS is too expensive"], 2,
            None, {1:["SMS codes do expire (short validity)."],3:["Most users can receive SMS; this isn't the security limitation."],4:["Cost is not the security concern."]},
            "Slide 41: MFA limitations include 'SMS interception' and 'device compromise.'")
        self.ms(); self.sc(q3)

        q4 = ask("An attacker creates a fake login page that looks identical to a real banking site. When a user enters their password and OTP, the attacker forwards both to the real site instantly, gaining access. What does this demonstrate?",
            ["MFA is completely unbreakable", "MFA can be bypassed through phishing",
             "Hardware tokens are useless", "Biometrics are always better"], 2,
            None, {1:["Slide 41 explicitly says MFA 'does not eliminate risk.'"],3:["Hardware tokens are still more secure than SMS."],4:["Biometrics have their own limitations (cannot be changed if compromised)."]},
            "Slide 42: 'Attackers use fake login pages to capture credentials. User enters password and OTP → attacker forwards them instantly.'")
        self.ms(); self.sc(q4)

        q5 = ask("Which modern authentication approach aims to eliminate passwords entirely, using biometrics and secure devices with cryptographic authentication?",
            ["Multi-factor authentication", "Passwordless authentication (FIDO2/Passkeys)",
             "Single sign-on", "Risk-based authentication"], 2,
            None, {1:["MFA still uses passwords as one factor."],3:["SSO centralizes login but doesn't eliminate passwords."],4:["Risk-based adapts requirements based on context but doesn't eliminate passwords."]},
            "Slide 43: 'Toward Passwordless Authentication' uses 'biometrics, secure devices' and 'cryptographic authentication' with examples like Passkeys and FIDO2.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l4(self):
        explain_concept("Access Control Fundamentals", [
            "ACCESS CONTROL = regulating who can access what resources. Operates AFTER authentication.",
            "Without AC, any authenticated user could access everything.",
            "SUBJECT = entity performing action (user, process).",
            "RESOURCE (OBJECT) = target being accessed (file, database, API).",
            "ACTION = operation performed (read, write, delete).",
            "ACCESS CONTROL MATRIX = rows (subjects) × columns (resources) = allowed actions.",
            "LEAST PRIVILEGE = only permissions needed. Reduces risk from mistakes/compromise.",
            "NEED-TO-KNOW = access granted only if necessary for a task. Even within same role, access may vary.",
            "SEPARATION OF DUTIES = critical tasks divided among multiple users. Prevents single-user control.",
            "POLICY vs MECHANISM: Policy defines what SHOULD be allowed. Mechanism ENFORCES it.",
            "CENTRALIZED = one system manages access (easier consistency). DECENTRALIZED = multiple systems manage independently (more flexible, harder to control)."
        ])
        q1 = ask("In a university system, a student can view their own grades but not modify them, while an instructor can modify grades. What security concept governs these different permissions?",
            ["Authentication", "Access control", "Encryption", "Network segmentation"], 2,
            None, {1:["Authentication verifies identity. It doesn't decide who can modify what."],3:["Encryption protects data, not permissions."],4:["Segmentation divides networks, not user permissions."]},
            "Slide 45: Access control 'defines the rules that determine which users can access which data and what actions they are allowed to perform.'")
        self.ms(); self.sc(q1)

        q2 = ask("A developer is given full administrator access 'just in case' they might need it someday. They accidentally delete a critical database. Which principle was violated?",
            ["Need-to-know principle", "Principle of least privilege",
             "Separation of duties", "Centralized access control"], 2,
            None, {1:["Need-to-know is about whether access is necessary for a task. This is about giving TOO MUCH access."],3:["Separation of duties divides tasks among people. One person had all the access."],4:["Centralized vs decentralized is about who manages access, not how much is granted."]},
            "Slide 52: Least privilege means 'users should be given only the permissions they need' and 'no unnecessary or excessive access rights.'")
        self.ms(); self.sc(q2)

        q3 = ask("In a hospital, a nurse in the cardiology department can access cardiology patient records but not oncology records, even though both are nurses. What principle is this?",
            ["Least privilege", "Need-to-know principle", "Separation of duties", "Decentralized access control"], 2,
            None, {1:["Least privilege limits how much access. Need-to-know limits based on task relevance."],3:["Separation of duties divides tasks, not records by department."],4:["Decentralized is about management structure, not this specific rule."]},
            "Slide 53: Need-to-know 'access is granted only if it is necessary for a task' and 'even within the same role, access may vary.'")
        self.ms(); self.sc(q3)

        q4 = ask("A bank requires two employees to approve any transaction over $10,000 — one to initiate and one to authorize. No single employee can complete it alone. What principle is this?",
            ["Least privilege", "Need-to-know", "Separation of duties", "Role-based access control"], 3,
            None, {1:["Least privilege limits access amount, not task division."],2:["Need-to-know limits based on necessity, not task splitting."],4:["RBAC is a model. This is a principle that can be implemented within any model."]},
            "Slide 55: Separation of duties means 'critical tasks are divided among multiple users' and 'prevents a single user from having excessive control.'")
        self.ms(); self.sc(q4)

        q5 = ask("'Students cannot modify grades' is a security policy. The application code that actually prevents students from submitting grade changes is the:",
            ["Policy", "Mechanism", "Subject", "Resource"], 2,
            None, {1:["Policy defines what should be allowed."],3:["Subject is the entity performing the action (the student)."],4:["Resource is the target (the grade database)."]},
            "Slide 56: Policy 'defines what should be allowed.' Mechanism 'enforces the policy in the system' (e.g., application code or access rules).")
        self.ms(); self.sc(q5)

        q6 = ask("A large organization uses one central system to manage access permissions for all employees worldwide. What is this approach?",
            ["Decentralized access control", "Centralized access control",
             "Discretionary access control", "Attribute-based access control"], 2,
            None, {1:["Decentralized = multiple systems manage independently."],3:["DAC is a model where resource owners control access."],4:["ABAC uses attributes for decisions."]},
            "Slide 57: Centralized = 'one system manages access decisions' and is 'easier to enforce consistency.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l5(self):
        explain_concept("Access Control Models", [
            "DAC (Discretionary Access Control): Resource OWNER decides who can access. Common in personal systems (Windows, Linux). Flexible but users may grant excessive permissions.",
            "MAC (Mandatory Access Control): System ENFORCES decisions based on security labels/classifications. Users cannot override. Used in military/government. Strong but rigid.",
            "RBAC (Role-Based Access Control): Permissions assigned to ROLES, not individuals. Users inherit permissions through roles. Easy to manage at scale. Risk: role explosion.",
            "ABAC (Attribute-Based Access Control): Decisions based on ATTRIBUTES (user role, department, resource type, time, location). Highly flexible and context-aware. Complex to design.",
            "Comparison:",
            "  DAC: High flexibility, Low-Medium security, Personal systems.",
            "  MAC: Low flexibility, High security, Military/government.",
            "  RBAC: Medium flexibility, Medium-High security, Enterprises.",
            "  ABAC: Very high flexibility, High security, Cloud/modern systems."
        ])
        q1 = ask("In a system where the creator of a file decides who can read or edit it, and can share access with others freely, what access control model is this?",
            ["Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)",
             "Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)"], 2,
            None, {1:["MAC is system-enforced. Users cannot override."],3:["RBAC assigns permissions to roles, not resource owners."],4:["ABAC uses attributes, not owner discretion."]},
            "Slide 61: DAC 'access decisions are controlled by the resource owner' and 'the owner decides who can access resources.'")
        self.ms(); self.sc(q1)

        q2 = ask("A military system classifies documents as 'Secret' and 'Top Secret.' Users have clearance levels. A user with 'Secret' clearance CANNOT access 'Top Secret' documents, and no user can override this. What model?",
            ["DAC", "MAC", "RBAC", "ABAC"], 2,
            None, {1:["DAC lets owners override. Users cannot override in this scenario."],3:["RBAC uses roles, not security labels/clearances."],4:["ABAC uses multiple attributes, not just classification labels."]},
            "Slide 63: MAC 'access decisions enforced by the system' and 'based on security labels and classifications.' Users cannot override.")
        self.ms(); self.sc(q2)

        q3 = ask("A hospital assigns permissions to roles: 'Doctor' can view patient records, 'Nurse' can update vitals, 'Admin' can manage users. All doctors inherit the same permissions automatically. What model?",
            ["DAC", "MAC", "RBAC", "ABAC"], 3,
            None, {1:["DAC is owner-controlled, not role-based."],2:["MAC uses security labels, not roles."],4:["ABAC uses attributes, not just roles."]},
            "Slide 66: RBAC 'access is based on roles assigned to users' and 'permissions are assigned to roles, not individuals.'")
        self.ms(); self.sc(q3)

        q4 = ask("A system grants access only if: user is a manager AND it's during business hours AND they're on the corporate network. Decisions depend on multiple dynamic conditions. What model?",
            ["DAC", "MAC", "RBAC", "ABAC"], 4,
            None, {1:["DAC is owner-controlled."],2:["MAC uses fixed labels."],3:["RBAC uses roles alone, not time/location context."]},
            "Slide 69: ABAC decisions are 'based on attributes' including 'user attributes, resource attributes, environment attributes (time, location).' Policies evaluate multiple conditions dynamically.")
        self.ms(); self.sc(q4)

        q5 = ask("A major limitation of RBAC in large organizations is that as the organization grows, the number of specialized roles becomes unmanageable. What is this problem called?",
            ["Policy explosion", "Role explosion", "Attribute overflow", "Permission creep"], 2,
            None, {1:["Policy explosion is not the standard term."],3:["Attribute overflow is not a standard term."],4:["Permission creep is gradual accumulation, not the RBAC-specific issue."]},
            "Slide 68: RBAC limitation includes 'role explosion (too many roles).'")
        self.ms(); self.sc(q5)

        q6 = ask("Which model offers the highest flexibility and is most suitable for modern cloud systems, but is also the most complex to design and manage?",
            ["DAC", "MAC", "RBAC", "ABAC"], 4,
            None, {1:["DAC is flexible but low security, for personal systems."],2:["MAC is rigid, for high-security environments."],3:["RBAC is medium flexibility, for enterprises."]},
            "Slide 73 comparison table: ABAC has 'Very High' flexibility and 'High' security, with typical use in 'Cloud, modern systems.' Limitation: 'more complex to design and manage.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l6(self):
        explain_concept("Identity as the New Security Perimeter", [
            "TRADITIONAL MODEL (Perimeter-Based): Protect the internal network. Assume users inside are trusted. Firewalls + segmentation.",
            "PROBLEM: Users now access from home, mobile, cloud. Network boundary is no longer reliable.",
            "IDENTITY-CENTRIC SECURITY: Security decisions based on WHO the user is, not WHERE they are located.",
            "Every access request must be authenticated AND authorized.",
            "Access is evaluated CONTINUOUSLY, not just at login.",
            "",
            "ZERO TRUST: 'Never trust, always verify.' No implicit trust based on network location or device ownership. Every request validated.",
            "",
            "CONTINUOUS AUTHENTICATION: Verify identity DURING the session, not just at login. Detect anomalies → re-authenticate or terminate.",
            "RISK-BASED/ADAPTIVE: Authentication adapts based on context (location, device, time). New country → require additional verification."
        ])
        q1 = ask("In traditional security, organizations assumed that anyone inside the corporate network was trusted. What is the main problem with this model today?",
            ["Firewalls are too expensive", "Users now access from home, mobile, and cloud — the network boundary is no longer reliable",
             "Employees no longer need to access company systems", "VPNs are always secure"], 2,
            None, {1:["Cost is not the fundamental problem."],3:["Employees do need access, just from various locations."],4:["VPNs have limitations and can extend trust to compromised endpoints."]},
            "Slide 78: 'Users now access systems from home networks, mobile devices, public internet' and 'the concept of inside vs outside is no longer reliable.'")
        self.ms(); self.sc(q1)

        q2 = ask("A security model whose core principle is 'Never trust, always verify,' where no user or device is trusted simply because it's inside the network. What is this?",
            ["Perimeter-based security", "Zero Trust",
             "Role-based access control", "Discretionary access control"], 2,
            None, {1:["Perimeter-based assumes inside = trusted. Zero Trust does the opposite."],3:["RBAC is an access control model, not a security architecture philosophy."],4:["DAC is about who controls permissions, not trust assumptions."]},
            "Slide 80: Zero Trust core principle is 'Never trust, always verify' with 'no implicit trust based on network location or device ownership.'")
        self.ms(); self.sc(q2)

        q3 = ask("Instead of verifying a user's identity only once at login, a system continuously monitors their behavior and triggers re-authentication if anomalies are detected. What is this called?",
            ["Single sign-on", "Continuous authentication",
             "Risk-based authentication", "Identity federation"], 2,
            None, {1:["SSO lets users log in once for multiple services."],3:["Risk-based authentication adapts requirements based on context, but the question describes ongoing session verification."],4:["Federation allows shared identity across organizations."]},
            "Slide 83: Continuous authentication means 'continuously verify user identity during session' and may 'trigger re-authentication or session termination.'")
        self.ms(); self.sc(q3)

        q4 = ask("When a user logs in from a new country they've never visited before, the system requires additional verification steps beyond the normal password. What concept is this?",
            ["Multi-factor authentication", "Risk-based and adaptive authentication",
             "Identity federation", "Network segmentation"], 2,
            None, {1:["MFA is the mechanism, but the specific adaptation based on context is risk-based."],3:["Federation is about trusting identities across organizations."],4:["Segmentation divides networks, not login requirements."]},
            "Slide 82: Risk-based authentication 'adapts based on context' including 'user location, device used, time of access.' Example: 'Login from new country → require additional verification.'")
        self.ms(); self.sc(q4)

        q5 = ask("Which statement best describes 'Identity as the New Perimeter'?",
            ["Organizations should stop using passwords entirely", "Security decisions are based on who the user is, not where they are located",
             "Firewalls and network segmentation are no longer needed", "Only biometric authentication should be used"], 2,
            None, {1:["Identity-centric doesn't mean eliminating passwords entirely (though passwordless is a trend)."],3:["Network defenses are still needed; they just aren't sufficient alone."],4:["Identity-centric doesn't mandate only biometrics."]},
            "Slide 79: 'Security decisions are now based on: Who the user is. Not where they are located.' Identity becomes the primary trust anchor.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l7(self):
        explain_concept("Identity Infrastructure & Standards", [
            "IdP (Identity Provider) = system that manages user identities and authenticates users. Examples: Google, Microsoft, university login systems.",
            "SSO (Single Sign-On) = log in once, access multiple services. Centralizes authentication. Benefits: fewer passwords, less password reuse, centralized management, better usability. Risks: single point of failure, compromised main account = all services affected.",
            "IDENTITY FEDERATION = multiple systems trust a shared identity. Users authenticate with one organization and access another. Common in partnerships.",
            "STANDARDS:",
            "  • OAuth 2.0 = AUTHORIZATION standard (granting access to resources).",
            "  • OpenID Connect (OIDC) = AUTHENTICATION standard (verifying user identity).",
            "  • SAML = identity federation standard (widely used in enterprises).",
            "These enable SSO and secure communication between trusted systems."
        ])
        q1 = ask("A student logs into their university portal once, and that same login session automatically grants access to email, the learning platform, and library services without re-entering credentials. What is this?",
            ["Identity federation", "Single Sign-On (SSO)", "Multi-factor authentication", "Risk-based authentication"], 2,
            None, {1:["Federation is between different organizations. These are all university services."],3:["MFA requires multiple proofs of identity, not single login for multiple services."],4:["Risk-based adapts requirements based on context."]},
            "Slide 88: SSO 'allows users to log in once and access multiple services' and 'users do not need to authenticate separately for each application.'")
        self.ms(); self.sc(q1)

        q2 = ask("If a user's main SSO account (e.g., their Google account) is compromised, all connected services (email, cloud storage, calendar) are also at risk. What does this illustrate?",
            ["The benefits of SSO", "A single point of failure in SSO",
             "The need for identity federation", "The effectiveness of MFA"], 2,
            None, {1:["This is a RISK, not a benefit."],3:["Federation is about cross-organization trust, not this specific risk."],4:["MFA would help protect the account, but the question is about the inherent SSO risk."]},
            "Slide 91: SSO risks include 'if the main account is compromised, all connected services are affected' and 'creates a single point of failure.'")
        self.ms(); self.sc(q2)

        q3 = ask("A researcher at University A uses their university credentials to access a shared research database hosted by University B, because the two universities have a trust agreement. What concept is this?",
            ["Single Sign-On", "Identity Federation", "Multi-factor authentication", "Zero Trust"], 2,
            None, {1:["SSO is within one organization. This spans two organizations."],3:["MFA is about multiple verification factors, not cross-org access."],4:["Zero Trust means never trust implicitly. This is about established trust between organizations."]},
            "Slide 92: Identity Federation 'allows multiple systems to trust a shared identity' and 'users can authenticate with one organization and access another.'")
        self.ms(); self.sc(q3)

        q4 = ask("Which protocol is used for AUTHORIZATION (granting access to resources), not authentication?",
            ["OpenID Connect (OIDC)", "OAuth 2.0", "SAML", "FIDO2"], 2,
            None, {1:["OIDC is for authentication (verifying identity)."],3:["SAML is for identity federation."],4:["FIDO2 is for passwordless authentication."]},
            "Slide 94: 'OAuth 2.0 → authorization (granting access to resources).' 'OpenID Connect (OIDC) → authentication.'")
        self.ms(); self.sc(q4)

        q5 = ask("Which standard is widely used in enterprises for identity federation between organizations?",
            ["OAuth 2.0", "OpenID Connect", "SAML", "SSH"], 3,
            None, {1:["OAuth 2.0 is for authorization, not primarily federation."],2:["OIDC is for authentication."],4:["SSH is for secure remote access, not identity federation."]},
            "Slide 94: 'SAML (Security Assertion Markup Language) → identity federation (widely used in enterprises).'")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l8(self):
        explain_concept("Attacks on Identity & Access Control", [
            "BROKEN ACCESS CONTROL (OWASP Top 10): access restrictions not properly enforced. Users can perform actions beyond permissions.",
            "IDOR (Insecure Direct Object Reference): application exposes internal IDs (e.g., /profile?id=123). Attacker changes ID to access others' data.",
            "PRIVILEGE ESCALATION: gaining higher access rights.",
            "  • Vertical: user → admin.",
            "  • Horizontal: user → another user (same privilege level).",
            "SESSION HIJACKING: attacker takes control of a valid user session. Steals cookies or intercepts network traffic.",
            "TOKEN THEFT: modern systems use tokens. If stolen (insecure storage, URLs, logs), attacker can reuse them.",
            "WEAK AUTHORIZATION CHECKS: system checks authentication but NOT authorization properly. 'If authenticated, access is allowed' = dangerous assumption.",
            "ATTACK CHAINS: real attacks combine multiple weaknesses (phishing → credentials → IDOR → data theft).",
            "DEFENSE: strong auth (MFA), proper authorization checks, validate every request, least privilege, monitor behavior."
        ])
        q1 = ask("A user changes the URL from /profile?id=123 to /profile?id=124 and can view another user's private data because the system only checks if they're logged in, not if they own that profile. What vulnerability is this?",
            ["Brute-force attack", "Insecure Direct Object Reference (IDOR)",
             "Credential stuffing", "Privilege escalation"], 2,
            None, {1:["Brute-force tries many passwords."],3:["Credential stuffing uses leaked credentials."],4:["Privilege escalation gains higher rights. This is accessing data at the same level."]},
            "Slide 98: IDOR occurs when 'application exposes internal identifiers' and 'attacker changes ID to access another user's data' with 'no proper authorization check.'")
        self.ms(); self.sc(q1)

        q2 = ask("An attacker with a regular user account discovers a way to gain full administrator privileges on a system. What type of privilege escalation is this?",
            ["Horizontal escalation", "Vertical escalation",
             "Lateral movement", "Token theft"], 2,
            None, {1:["Horizontal = user → another user at same level."],3:["Lateral movement is moving between systems, not escalating privilege level."],4:["Token theft is stealing session tokens, not escalating privileges."]},
            "Slide 99: Vertical escalation = 'user → admin' (gaining higher access rights).")
        self.ms(); self.sc(q2)

        q3 = ask("An attacker steals a user's session cookie from an unsecured Wi-Fi network and uses it to access the user's account without knowing their password. What is this?",
            ["Phishing", "Session hijacking", "Credential stuffing", "Brute-force"], 2,
            None, {1:["Phishing tricks users into giving credentials."],3:["Credential stuffing uses leaked username/password pairs."],4:["Brute-force tries many password combinations."]},
            "Slide 100: Session hijacking = 'attacker takes control of a valid user session' and 'does not need to know the password.'")
        self.ms(); self.sc(q3)

        q4 = ask("A developer writes code that checks 'Is the user logged in?' but never checks 'Is this user allowed to access THIS specific record?' This leads to major data exposure. What is this?",
            ["Strong authorization", "Weak authorization checks",
             "Multi-factor authentication failure", "Network segmentation failure"], 2,
            None, {1:["The code has NO authorization check — the opposite of strong."],3:["MFA is about authentication, not authorization of specific resources."],4:["Network segmentation divides zones but doesn't fix missing authorization logic."]},
            "Slide 102: Weak authorization checks = 'system checks authentication but not authorization properly' and developers assume 'if authenticated, access is allowed.'")
        self.ms(); self.sc(q4)

        q5 = ask("An attacker sends a phishing email to steal credentials, logs in successfully, then uses an IDOR vulnerability to access other users' data. What does this demonstrate?",
            ["A single vulnerability caused the breach", "Real-world attacks often combine multiple weaknesses in chains",
             "MFA would have prevented everything", "Access control models don't matter"], 2,
            None, {1:["Multiple weaknesses were combined, not just one."],3:["MFA helps but doesn't prevent IDOR — that's an authorization flaw."],4:["The choice of access control model directly affects whether IDOR is possible."]},
            "Slide 103: 'Real-world attacks often combine multiple weaknesses' in chains, like 'phishing → steal credentials → login → bypass authentication → IDOR → access other users' data.'")
        self.ms(); self.sc(q5)

        q6 = ask("Which defensive measure directly prevents the IDOR vulnerability where users can access others' data by changing an ID in the URL?",
            ["Stronger password policies", "Proper authorization checks for every request",
             "Faster internet connection", "More firewalls"], 2,
            None, {1:["Strong passwords don't prevent authorization logic flaws."],3:["Internet speed has nothing to do with authorization."],4:["Firewalls filter traffic but don't check resource ownership."]},
            "Slide 104: 'Always enforce proper authorization checks' and 'validate every request.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

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
        print("\nYou have mastered Module 4!")
        print("   • Core identity concepts (identification, authN, authZ, AAA)")
        print("   • Password weaknesses & attacks (brute-force, dictionary, stuffing, keyloggers)")
        print("   • MFA, biometrics, OTP, passwordless (FIDO2/Passkeys)")
        print("   • Access control fundamentals (least privilege, need-to-know, separation of duties)")
        print("   • 4 access control models: DAC, MAC, RBAC, ABAC")
        print("   • Identity-centric security & Zero Trust")
        print("   • Identity infrastructure: IdP, SSO, Federation, OAuth/OIDC/SAML")
        print("   • Identity attacks: IDOR, privilege escalation, session hijacking, token theft")
        print("\n🎓 Ready for Module 5?")

    def game_over(self):
        print("\n" + "="*60)
        print("   💀  GAME OVER  💀")
        print("="*60)
        print(f"Completed {len(self.completed)} of 8 levels.")
        print(f"Score: {self.score} / {self.max_score}")
        print("Review the concepts and try again.")

if __name__ == "__main__":
    Game().start()
