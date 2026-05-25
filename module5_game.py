#!/usr/bin/env python3
"""
Module 5: Operating System and System Security
Covers all slides from I3336-25-26-Module-5.pdf
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
        print("   🖥️ MODULE 5: OPERATING SYSTEM & SYSTEM SECURITY 🖥️")
        print("="*60)
        slow_print("You are a system administrator securing enterprise servers.")
        slow_print("Your mission: harden systems, manage patches, and prevent")
        slow_print("privilege escalation and misconfiguration attacks.")
        print("\n💀 3 lives | 🏆 8 levels | 📚 All slides (2-83) covered")
        input("\nPress ENTER to begin...")

        levels = [
            ("OS Security Fundamentals", "2-8", self.l1),
            ("Trust Models & Privilege Separation", "9-15", self.l2),
            ("Privilege Levels, PoLP & Escalation", "16-30", self.l3),
            ("System Hardening", "31-47", self.l4),
            ("Patch & Configuration Management", "48-64", self.l5),
            ("Misconfiguration as Attack Vector", "65-78", self.l6),
            ("Conclusion & Advanced Topics", "79-83", self.l7),
            ("Final Certification", "2-83", self.l8),
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
        explain_concept("OS Security Fundamentals", [
            "Operating systems are at the CORE of every computing system.",
            "All applications rely on the OS to enforce: Security, Isolation, Access control.",
            "A vulnerability at the system level can compromise ALL running applications.",
            "Most attacks succeed NOT due to complex exploits, but because systems are MISCONFIGURED and privileges are POORLY MANAGED.",
            "A secure application on an insecure system is STILL VULNERABLE.",
            "Typical attack path: Initial access → Execution with limited privileges → Privilege escalation → Full system compromise.",
            "Small misconfigurations can enable large attacks. OS security determines whether an attack stops early or escalates."
        ])
        q1 = ask("What is the core reason most attacks succeed according to the module?",
            ["Advanced zero-day exploits", "Systems are misconfigured and privileges are poorly managed",
             "Weak encryption algorithms", "Attackers have state-sponsored resources"], 2,
            None, {1:["Slide 4: 'Many assume security failures come from weak encryption or complex exploits.' But in reality, most succeed due to misconfiguration."],3:["Weak encryption is not highlighted as the main reason."],4:["State-sponsored resources are not the focus — simple misconfigurations are."]},
            "Slide 4: 'In reality, most attacks succeed because: systems are misconfigured, privileges are poorly managed.'")
        self.ms(); self.sc(q1)

        q2 = ask("A company deploys a perfectly coded web application on a server running with root privileges and default passwords. The application gets compromised. What is the key lesson?",
            ["The developers wrote bad code", "A secure application on an insecure system is still vulnerable",
             "The attackers used advanced techniques", "Encryption was too weak"], 2,
            None, {1:["The module explicitly states the application can be secure but the system around it may not be."],3:["The module says attackers exploit simple weaknesses, not necessarily advanced techniques."],4:["Weak encryption is not the issue described."]},
            "Slide 4: 'A secure application on an insecure system is still vulnerable.' Security must be enforced at the system level.")
        self.ms(); self.sc(q2)

        q3 = ask("Which describes the typical attack path through a system?",
            ["Immediate full system compromise via single exploit", "Initial access → execution with limited privileges → privilege escalation → full compromise",
             "Social engineering → encryption cracking → data exfiltration", "Physical theft → network scanning → malware deployment"], 2,
            None, {1:["Slide 5: Attackers 'rarely rely on a single flaw; they combine weaknesses.'"],3:["Encryption cracking is not part of the typical attack path described."],4:["Physical theft is not the typical digital attack path."]},
            "Slide 5: 'Most system compromises follow a similar pattern: Initial access → Execution within limited privileges → Privilege escalation → Full system compromise.'")
        self.ms(); self.sc(q3)

        q4 = ask("What determines whether an attack stops early or escalates to full compromise?",
            ["The complexity of the attacker's tools", "The operating system's security configuration",
             "The strength of the application's encryption", "The physical security of the data center"], 2,
            None, {1:["The module emphasizes simple misconfigurations, not tool complexity."],3:["Application encryption doesn't stop system-level privilege escalation."],4:["Physical security is not the focus of this module's attack path."]},
            "Slide 5: 'OS security determines whether an attack stops early or escalates.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l2(self):
        explain_concept("Trust Models & Privilege Separation", [
            "TRUST MODEL: defines which components are trusted and which must be restricted.",
            "TRUSTED COMPONENTS: OS kernel, core system services.",
            "UNTRUSTED COMPONENTS: user applications, external inputs.",
            "The OS enforces restrictions to prevent untrusted components from affecting critical parts.",
            "",
            "TRUSTED COMPUTING BASE (TCB): all components critical to system security.",
            "  • Includes: Kernel, Authentication mechanisms, Core system services.",
            "  • If any part of TCB is compromised, the entire system can no longer be trusted.",
            "  • Larger TCB = larger attack surface. TCB must be MINIMAL and WELL-AUDITED.",
            "",
            "USER SPACE vs KERNEL SPACE:",
            "  • Enforced by CPU hardware + OS design.",
            "  • Prevents user programs from directly manipulating critical resources.",
            "  • Limits impact of bugs and exploits.",
            "  • If bypassed, attacker gains kernel-level control (full system compromise)."
        ])
        q1 = ask("Which components are considered part of the Trusted Computing Base (TCB)?",
            ["User applications and web browsers", "Kernel, authentication mechanisms, and core system services",
             "External APIs and third-party libraries", "Social media plugins"], 2,
            None, {1:["User applications are UNTRUSTED components."],3:["External APIs are not part of the core TCB."],4:["Social media plugins are external, untrusted components."]},
            "Slide 13: TCB includes 'Kernel, Authentication mechanisms, Core system services.' If compromised, 'the entire system can no longer be trusted.'")
        self.ms(); self.sc(q1)

        q2 = ask("A system administrator installs many non-essential drivers and services into the kernel space to ensure maximum compatibility. From a security perspective, what is the problem?",
            ["It makes the system faster", "A larger TCB means a larger attack surface",
             "It improves user experience", "It reduces memory usage"], 2,
            None, {1:["More kernel components does not necessarily make the system faster."],3:["User experience is not the security concern here."],4:["More components typically use more memory, not less."]},
            "Slide 13: 'Larger TCB = larger attack surface' and 'Security design aims to reduce and protect the TCB.'")
        self.ms(); self.sc(q2)

        q3 = ask("A web browser crashes, but the rest of the operating system continues running normally. Which security mechanism makes this possible?",
            ["Firewall filtering", "User space vs kernel space separation",
             "Network segmentation", "Password hashing"], 2,
            None, {1:["Firewalls filter network traffic, not process crashes."],3:["Network segmentation divides networks, not process memory."],4:["Password hashing protects credentials, not system stability."]},
            "Slide 14: 'Prevents user programs from directly manipulating critical resources' and 'Limits impact of bugs and exploits.' Example: 'A browser crash does not crash the OS.'")
        self.ms(); self.sc(q3)

        q4 = ask("An attacker discovers a vulnerability that allows them to execute code inside the kernel space, bypassing all user-space restrictions. What level of control do they gain?",
            ["Limited to the current user's files", "Full kernel-level control over the entire system",
             "Only network traffic access", "Read-only access to system files"], 2,
            None, {1:["User-space restrictions no longer apply in kernel space."],3:["Kernel-level access is far more than just network traffic."],4:["Kernel compromise grants full read/write/execute control, not read-only."]},
            "Slide 14: 'If this boundary is bypassed, attacker gains kernel-level control' and 'This boundary is one of the strongest protections in modern OS.'")
        self.ms(); self.sc(q4)

        q5 = ask("The OS enforces restrictions to prevent untrusted components from affecting critical parts. What is an example of an UNTRUSTED component?",
            ["OS kernel", "User applications and external inputs",
             "Core system services", "Authentication mechanisms"], 2,
            None, {1:["The kernel is a TRUSTED component."],3:["Core system services are trusted."],4:["Authentication mechanisms are part of the TCB (trusted)."]},
            "Slide 12: Untrusted components include 'User applications, External inputs.' Trusted components include 'OS kernel, Core system services.'")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l3(self):
        explain_concept("Privilege Levels, Least Privilege & Escalation", [
            "PRIVILEGE LEVELS determine what a user or process is allowed to do.",
            "Linux: Root user (UID 0) has full system control. Regular users have limited permissions.",
            "Windows: Uses UAC (User Account Control) to manage elevation. Even administrators run with limited privileges by default.",
            "Commands: whoami (current user), id (UID/groups), sudo -l (check escalation rights).",
            "",
            "PRINCIPLE OF LEAST PRIVILEGE (PoLP): give ONLY the permissions necessary.",
            "Applies to: Users, Applications, Services.",
            "Key idea: 'Do not trust more than required.'",
            "",
            "PRIVILEGE ESCALATION: gaining higher privileges than allowed.",
            "  • Vertical: user → admin/root.",
            "  • Horizontal: user → another user (same privilege level).",
            "  • Small vulnerability + high privilege = full system compromise.",
            "",
            "PROCESS ISOLATION: each process runs in its own memory space. One compromised process does not infect all."
        ])
        q1 = ask("In Linux, which user ID (UID) represents the root account with full system control?",
            ["UID 1000", "UID 0", "UID 1", "UID 999"], 2,
            None, {1:["UID 1000 is typically the first regular user account."],3:["UID 1 is usually a system service account, not root."],4:["UID 999 is not the root account."]},
            "Slide 17: Root user has 'UID 0' and 'Full system control' including 'Read, Modify or Delete any file.'")
        self.ms(); self.sc(q1)

        q2 = ask("In Windows, even administrators run with limited privileges by default. What mechanism requires explicit approval before granting elevated privileges?",
            ["Windows Defender", "User Account Control (UAC)", "Active Directory", "Task Manager"], 2,
            None, {1:["Windows Defender is antivirus, not privilege management."],3:["Active Directory manages identities across networks, not local elevation prompts."],4:["Task Manager shows processes but doesn't control privilege elevation."]},
            "Slide 20: Windows 'uses User Account Control (UAC) to manage elevation' and 'Elevation requires explicit approval via UAC prompt.'")
        self.ms(); self.sc(q2)

        q3 = ask("A server process is configured to run with root privileges even though it only needs to read from a single directory. An attacker compromises this process. What principle was violated, and what is the likely result?",
            ["Separation of duties; limited data theft", "Principle of least privilege; full system compromise",
             "Need-to-know principle; horizontal escalation", "Defense in depth; temporary access"], 2,
            None, {1:["Separation of duties divides tasks among people. The issue here is excessive privileges."],3:["Need-to-know is about access necessity, not privilege level. Horizontal escalation moves between users at same level."],4:["Defense in depth uses multiple layers. The issue is a single layer having too much privilege."]},
            "Slide 24: PoLP means 'give only the permissions necessary to perform a task.' If violated, 'any compromise leads to full system control.' Slide 28: 'Privilege + Vulnerability = Impact' — high privilege means system-wide compromise.")
        self.ms(); self.sc(q3)

        q4 = ask("An attacker compromises a regular user account and then exploits a misconfigured sudo permission to gain root access. What type of privilege escalation is this?",
            ["Horizontal escalation", "Vertical escalation",
             "Lateral movement", "Session hijacking"], 2,
            None, {1:["Horizontal escalation = user → another user at same level."],3:["Lateral movement moves between systems, not privilege levels."],4:["Session hijacking steals an existing session, not escalates privileges."]},
            "Slide 27: Vertical escalation = 'user → admin/root' (gaining higher privileges).")
        self.ms(); self.sc(q4)

        q5 = ask("Which Linux command shows the current user's UID, group memberships, and privilege details?",
            ["whoami", "id", "sudo -l", "netstat"], 2,
            None, {1:["whoami shows only the current username, not groups or UID."],3:["sudo -l shows what sudo privileges the user has, not their current identity details."],4:["netstat shows network connections, not user identity."]},
            "Slide 18: 'Check detailed identity: id' which shows 'User ID (UID), Group memberships.'")
        self.ms(); self.sc(q5)

        q6 = ask("A vulnerability in a low-privilege user application can only modify files in that user's home directory. The same vulnerability in a root-owned system service could modify any file on the system. What principle does this illustrate?",
            ["Encryption strength", "Privilege + Vulnerability = Impact",
             "Network segmentation", "Social engineering"], 2,
            None, {1:["Encryption is not relevant to this scenario about privilege levels."],3:["Network segmentation divides networks, not process privileges."],4:["Social engineering manipulates humans, not system privileges."]},
            "Slide 28: 'A vulnerability alone is not always critical. Impact depends on privilege level of exploited process.' 'Low privilege → Limited damage. High privilege → System-wide compromise.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l4(self):
        explain_concept("System Hardening", [
            "SYSTEM HARDENING = securing a system by reducing vulnerabilities through configuration changes, service management, and access restrictions.",
            "Goal: Minimize exposure to threats. A hardened system is Minimal, Controlled, and Monitored.",
            "",
            "ATTACK SURFACE REDUCTION:",
            "  • Disable unnecessary services (FTP servers, remote access).",
            "  • Close unused ports. Only essential services should be exposed.",
            "  • Commands: ss -tuln, netstat -tuln (Linux), netstat -ano (Windows).",
            "",
            "SECURE CONFIGURATION:",
            "  • Avoid default configurations and default credentials (admin/admin, root/root).",
            "  • Enforce strong authentication.",
            "  • Apply security updates.",
            "  • Restrict user privileges.",
            "  • Enable logging and monitoring.",
            "",
            "DEFENSE IN DEPTH: multiple layers of protection (firewall + auth + logging). If one layer fails, others still protect.",
            "TRADE-OFF: Secure configurations often restrict functionality. Users may relax settings for convenience.",
            "",
            "HARDENING TOOLS: Ansible (automation), OpenSCAP and Lynis (auditing against benchmarks)."
        ])
        q1 = ask("What is the primary goal of system hardening?",
            ["To add more features and services", "To minimize the system's exposure to threats",
             "To make the system run faster", "To simplify user interfaces"], 2,
            None, {1:["Hardening removes unnecessary services, not adds them."],3:["Performance is not the primary goal of hardening."],4:["UI simplicity is unrelated to security hardening."]},
            "Slide 33: 'System hardening is the process of securing a system by reducing its vulnerabilities' and objective is to 'Minimize the system's exposure to threats.'")
        self.ms(); self.sc(q1)

        q2 = ask("A server has ports 21 (FTP), 22 (SSH), 80 (HTTP), and 3306 (MySQL) all open to the internet, but the company only uses HTTP for its public website. What hardening step is most urgent?",
            ["Upgrade the web server software", "Close unnecessary ports and disable unused services",
             "Change the company logo", "Add more RAM"], 2,
            None, {1:["Upgrading software is good but doesn't address the immediate exposure."],3:["The logo has no security relevance."],4:["More RAM is a performance improvement, not a security hardening step."]},
            "Slide 36: 'Open ports indicate services listening for connections' and 'Hardening involves closing unnecessary ports. Only essential services should be exposed.'")
        self.ms(); self.sc(q2)

        q3 = ask("A router is deployed with the default username 'admin' and password 'admin.' Within hours, an attacker logs in and reconfigures the network. What hardening failure occurred?",
            ["The firewall was too strong", "Default credentials were not changed",
             "The encryption was outdated", "The network was too slow"], 2,
            None, {1:["A strong firewall would help, not hinder. The issue was credentials."],3:["Encryption wasn't the problem — the default password was."],4:["Network speed is irrelevant to this credential-based attack."]},
            "Slide 39: 'Many systems ship with default usernames and passwords' like 'admin/admin' and 'Failure to change defaults leads to immediate compromise.' Hardening requires 'enforcing unique, strong credentials.'")
        self.ms(); self.sc(q3)

        q4 = ask("A company uses a firewall for network protection, strong authentication for user access, and detailed logging for monitoring. Even if the firewall fails, the other protections remain. What security concept is this?",
            ["Single sign-on", "Defense in depth",
             "Identity federation", "Zero-day prevention"], 2,
            None, {1:["SSO lets users log in once for multiple services."],3:["Identity federation is cross-organizational identity sharing."],4:["Zero-day prevention is not a specific concept — zero-days are unknown vulnerabilities."]},
            "Slide 41: 'Defense in depth' means 'multiple layers of protection are required' and 'If one layer fails, others still protect the system.'")
        self.ms(); self.sc(q4)

        q5 = ask("A developer sets a Linux file permission to 'chmod 777' on a critical system file so their script can access it easily. This means anyone can read, write, and execute the file. What is the security risk?",
            ["The file becomes encrypted", "Any user can modify critical files, leading to data tampering or privilege escalation",
             "The file is automatically deleted", "The system becomes faster"], 2,
            None, {1:["chmod 777 doesn't encrypt — it opens access to everyone."],3:["The file is not deleted."],4:["More access doesn't improve performance."]},
            "Slide 72: 'File permission: chmod 777 (read/write/execute for all). Any user can modify critical files' leading to 'Data tampering, Privilege escalation.'")
        self.ms(); self.sc(q5)

        q6 = ask("Which of these is a cross-platform tool that automates configuration enforcement, service management, and security policy deployment?",
            ["OpenSCAP", "Ansible", "Lynis", "nmap"], 2,
            None, {1:["OpenSCAP is an auditing tool that assesses against benchmarks, not primarily automation."],3:["Lynis is an auditing tool for security assessment."],4:["nmap is a network scanner, not a configuration automation tool."]},
            "Slide 46: 'Tools such as Ansible automate configuration enforcement, service management and security policy deployment.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l5(self):
        explain_concept("Patch & Configuration Management", [
            "PATCH MANAGEMENT = identifying, acquiring, and applying updates to fix vulnerabilities.",
            "VULNERABILITY LIFECYCLE:",
            "  1. Discovery: vulnerability is unknown (zero-day).",
            "  2. Disclosure: vendor/public becomes aware.",
            "  3. Patch: vendor releases fix.",
            "  4. Exploitation: attackers analyze patch and develop exploits.",
            "Systems that remain unpatched after disclosure become HIGHLY VULNERABLE.",
            "WannaCry (2017) exploited a known vulnerability with a patch available — systems not updated were compromised.",
            "",
            "CONFIGURATION MANAGEMENT ensures systems are consistently configured.",
            "CONFIGURATION DRIFT = systems deviate from intended configuration over time. Creates hidden vulnerabilities.",
            "",
            "AUTOMATION TOOLS: Ansible, Puppet, Microsoft Endpoint Configuration Manager.",
            "PATCHING DECISION: Immediate patching (reduces risk) vs. Delayed (ensures stability). Risk-based approach prioritizes critical vulnerabilities."
        ])
        q1 = ask("The WannaCry ransomware attack in 2017 spread rapidly and caused massive damage. The vulnerability it exploited had a security patch released by Microsoft two months earlier. What does this demonstrate?",
            ["The patch was ineffective", "Systems that are not updated become easy and predictable targets",
             "Ransomware only affects Linux systems", "Encryption cannot stop ransomware"], 2,
            None, {1:["The patch was effective — systems that applied it were not affected."],3:["WannaCry primarily affected Windows systems, not Linux."],4:["The issue was about patching, not encryption effectiveness."]},
            "Slide 53: WannaCry case study. Slide 54: 'The issue is often not lack of security solutions, but a failure to apply available fixes' and 'Systems are compromised due to known vulnerabilities.'")
        self.ms(); self.sc(q1)

        q2 = ask("After a vendor releases a security patch, attackers often analyze the patch to understand the flaw and quickly develop an exploit. What stage of the vulnerability lifecycle is this?",
            ["Discovery", "Disclosure", "Patch", "Exploitation"], 4,
            None, {1:["Discovery is when the vulnerability is first found/unknown."],2:["Disclosure is when it becomes publicly known."],3:["Patch is when the fix is released by the vendor."]},
            "Slide 51: In the vulnerability lifecycle, after the patch is released, 'Attackers analyze patches to understand the flaw' and 'Exploits are often developed shortly after patch release.'")
        self.ms(); self.sc(q2)

        q3 = ask("Over time, one server in a data center receives security patches while another identical server does not. They gradually have different configurations and vulnerabilities. What is this phenomenon called?",
            ["Role explosion", "Configuration drift",
             "Privilege escalation", "Session hijacking"], 2,
            None, {1:["Role explosion is an RBAC problem with too many roles."],3:["Privilege escalation is gaining higher access rights."],4:["Session hijacking is stealing user sessions."]},
            "Slide 58: 'Configuration drift occurs when systems deviate from intended configuration' and 'Example: One server patched, another not.' Drift 'creates hidden vulnerabilities.'")
        self.ms(); self.sc(q3)

        q4 = ask("A system administrator runs 'apt list --upgradable' on a Debian server and sees 47 packages with pending updates. What does this indicate about the system's security posture?",
            ["The system is fully secure", "Systems with many pending updates have higher risk exposure",
             "Updates are automatically applied", "The system has no vulnerabilities"], 2,
            None, {1:["Pending updates indicate unpatched vulnerabilities, not full security."],3:["apt list --upgradable only shows available updates; they are not automatically applied."],4:["Pending updates often include security fixes for known vulnerabilities."]},
            "Slide 55: 'Systems with many pending updates → Higher risk exposure.' The command 'apt list --upgradable' displays available package updates and indicates potential vulnerabilities.")
        self.ms(); self.sc(q4)

        q5 = ask("A company delays applying a critical security patch because they are worried it might break a legacy application. From an attacker's perspective, what does this delay create?",
            ["A more secure environment", "A low-effort opportunity for exploitation",
             "Better system stability", "Improved user experience"], 2,
            None, {1:["Delaying patches increases risk, not security."],3:["Stability is the company's concern, not the attacker's perspective."],4:["User experience is not the attacker's focus."]},
            "Slide 63: 'Unpatched systems are Low-effort opportunities' and 'Patch delays directly benefit attackers.'")
        self.ms(); self.sc(q5)

        q6 = ask("Which is a key trade-off when deciding when to apply security patches?",
            ["Security vs convenience", "Security vs availability",
             "Speed vs color", "Cost vs brand reputation"], 2,
            None, {1:["Convenience is a factor but the module explicitly frames it as security vs availability/stability."],3:["Color has no relevance."],4:["Brand reputation is not the primary technical trade-off."]},
            "Slide 62: The decision scenario shows the trade-off: 'Immediate patching: reduces security risk' vs 'Delayed patching: ensures system stability.' The core trade-off is 'Security vs availability.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l6(self):
        explain_concept("Misconfiguration as an Attack Vector", [
            "MISCONFIGURATION = incorrect or insecure system setup. It is a HUMAN or PROCESS error, not a software flaw.",
            "Often introduced during deployment or maintenance.",
            "Difficult to detect without proper auditing.",
            "",
            "Why misconfiguration is dangerous:",
            "  • Does not require complex exploits.",
            "  • Often provides direct access to sensitive resources.",
            "  • Easily discovered using automated scanning tools.",
            "  • Can bypass intended security mechanisms.",
            "",
            "Common types:",
            "  • Open/unnecessary ports.",
            "  • Weak or excessive permissions (chmod 777, 'Everyone' access).",
            "  • Default credentials left unchanged.",
            "  • Unprotected services (database without password).",
            "  • Disabled security mechanisms (firewall off, antivirus disabled).",
            "  • Improper access control settings.",
            "  • Exposed sensitive data or directories.",
            "",
            "Examples: Open cloud storage (S3 buckets), directory listing enabled, weak file permissions, exposed services, disabled security controls.",
            "",
            "Why it happens: Default configs not reviewed, time pressure, poor documentation, lack of security awareness, lack of audits, complexity, over-reliance on 'secure by default.'",
            "",
            "Key insight: Systems are often secure by design, but INSECURE in deployment."
        ])
        q1 = ask("An attacker finds a database server accessible on the internet with no password required. They connect directly and steal all data without using any exploit. What type of security issue is this?",
            ["Zero-day vulnerability", "Misconfiguration",
             "Advanced persistent threat", "Social engineering"], 2,
            None, {1:["A zero-day is an unknown software flaw. No exploit was used here — the database was simply unprotected by configuration."],3:["An APT is a long-term, sophisticated attack campaign. This was immediate and simple."],4:["Social engineering manipulates humans. No human was tricked."]},
            "Slide 67: 'Misconfiguration is not a software flaw; it is a human or process error.' Slide 73: 'Database accessible without password — attackers connect directly; no exploitation required.'")
        self.ms(); self.sc(q1)

        q2 = ask("A company believes their cloud service provider secures everything automatically, so they never review the access settings on their cloud storage buckets. The buckets are left publicly readable. What cognitive bias contributed to this?",
            ["Separation of duties", "Over-reliance on 'secure by default'",
             "Principle of least privilege", "Defense in depth"], 2,
            None, {1:["Separation of duties divides tasks among people. This is about assuming security without verification."],3:["Least privilege would mean restricting access, not leaving it open."],4:["Defense in depth uses multiple layers. This is the opposite — relying on a single assumption."]},
            "Slide 76: One cause of misconfiguration is 'Over-reliance on secure by default assumptions.' Slide 77: 'Systems are often: Secure by design, Insecure in deployment.'")
        self.ms(); self.sc(q2)

        q3 = ask("Which of the following is NOT listed as a common type of misconfiguration in the lecture?",
            ["Open or unnecessary ports", "Weak or excessive permissions",
             "Using quantum encryption", "Default credentials left unchanged"], 3,
            None, {1:["Open/unnecessary ports IS listed (slide 69)."],2:["Weak or excessive permissions IS listed (slide 69)."],4:["Default credentials left unchanged IS listed (slide 69)."]},
            "Slide 69 lists common types: Open or unnecessary ports, Weak or excessive permissions, Default credentials left unchanged, Unprotected services, Disabled security mechanisms, Improper access control settings, Exposed sensitive data or directories. Quantum encryption is not mentioned.")
        self.ms(); self.sc(q3)

        q4 = ask("A web server has directory listing enabled, allowing anyone to view all files in a directory by simply visiting a URL. An attacker finds backup files containing database passwords. What misconfiguration enabled this?",
            ["Strong firewall rules", "Directory listing enabled",
             "Multi-factor authentication", "Network segmentation"], 2,
            None, {1:["Strong firewall rules would prevent access, not enable it."],3:["MFA would add authentication, but the issue is that no auth was needed to browse directories."],4:["Segmentation divides networks, not directory visibility."]},
            "Slide 71: 'Directory Listing Enabled' is given as a misconfiguration example. It exposes files that should not be visible.")
        self.ms(); self.sc(q4)

        q5 = ask("A system administrator disables the firewall and turns off antivirus on a production server because they were causing performance issues. What type of misconfiguration is this?",
            ["Weak file permissions", "Disabled security controls",
             "Default credentials", "Open cloud storage"], 2,
            None, {1:["File permissions are about who can access files, not active security tools."],3:["Default credentials are unchanged factory passwords."],4:["Open cloud storage is about misconfigured cloud buckets."]},
            "Slide 74: 'Security features may be disabled for convenience' including 'Firewall turned off, Antivirus disabled.' This is a misconfiguration of 'Disabled security controls' (slide 69).")
        self.ms(); self.sc(q5)

        q6 = ask("Why is misconfiguration often easier to exploit than software vulnerabilities?",
            ["It requires nation-state resources", "It does not require complex exploits and often provides direct access",
             "It only affects Linux systems", "It cannot be detected by attackers"], 2,
            None, {1:["Slide 68: misconfiguration 'does not require complex exploits' and is easily discovered."],3:["Misconfiguration affects all systems — Linux, Windows, cloud, etc."],4:["Slide 68: misconfiguration is 'easily discovered using automated scanning tools.'"]},
            "Slide 68: Misconfiguration 'does not require complex exploits,' 'often provides direct access to sensitive resources,' and is 'easily discovered using automated scanning tools.' Slide 77: 'Misconfiguration is often easier to exploit than vulnerabilities.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l7(self):
        explain_concept("Conclusion & Advanced OS Security Topics", [
            "Key takeaways from Module 5:",
            "  • OS security is the foundation of all application security.",
            "  • Trust models, privilege separation, and the TCB must be protected.",
            "  • System hardening reduces attack surface before attacks occur.",
            "  • Patch management fixes known vulnerabilities — delayed patching benefits attackers.",
            "  • Misconfiguration is one of the most common and dangerous attack vectors.",
            "  • Security is a continuous process, not a one-time task.",
            "  • Most systems are not broken by design; they are misconfigured in deployment.",
            "  • Attackers don't need complex exploits — simple mistakes are often enough.",
            "  • A well-secured system assumes breaches can happen and limits their impact.",
            "",
            "Advanced topics beyond the basics:",
            "  • Kernel hardening.",
            "  • Memory protection techniques (preventing code injection).",
            "  • Sandboxing and isolation (browsers, containers).",
            "  • MAC (Mandatory Access Control) — fine-grained policies beyond user/group.",
            "  • Virtualization and container security.",
            "  • Secure boot mechanisms (ensuring system integrity from startup)."
        ])
        q1 = ask("Which statement best summarizes the module's conclusion about system security?",
            ["Software vulnerabilities are the only real threat", "Most systems are not broken by design; they are misconfigured in deployment",
             "Linux is always more secure than Windows", "Firewalls alone are sufficient for OS security"], 2,
            None, {1:["The module explicitly states misconfiguration is often more dangerous than software flaws."],3:["Slide 23: 'Security depends on correct configuration, not OS choice.'"],4:["The module emphasizes defense in depth — multiple layers, not just firewalls."]},
            "Slide 81: 'Most systems are not broken, they are misconfigured' and 'Security is not a product, It is a continuous process.'")
        self.ms(); self.sc(q1)

        q2 = ask("Which advanced OS security mechanism ensures system integrity by verifying that only trusted software runs from startup?",
            ["User Account Control", "Secure boot mechanisms",
             "Directory listing", "Configuration drift"], 2,
            None, {1:["UAC manages privilege elevation in Windows, not startup integrity."],3:["Directory listing is a web server feature, not an OS security mechanism."],4:["Configuration drift is a problem, not a security mechanism."]},
            "Slide 82: Advanced OS security topics include 'Secure boot mechanisms: Ensuring system integrity from startup.'")
        self.ms(); self.sc(q2)

        q3 = ask("The module mentions that security is not one mechanism but a combination of controls. Which of the following is NOT one of the elements that together define system security posture?",
            ["Trust and privilege models", "System hardening",
             "Marketing and branding", "Patch and configuration management"], 3,
            None, {1:["Trust and privilege models ARE listed in the conclusion (slide 79)."],2:["System hardening IS listed."],4:["Patch and configuration management IS listed."]},
            "Slide 79: 'These elements together define System security posture: Trust and privilege models, System hardening, Patch management, Misconfiguration risks.' Marketing is not a security control.")
        self.ms(); self.sc(q3)

        q4 = ask("A well-secured system assumes that breaches can happen. What is the primary goal in this mindset?",
            ["Prevent all attacks completely", "Limit the impact of attacks when they occur",
             "Hide all vulnerabilities from attackers", "Make the system invisible on the network"], 2,
            None, {1:["Slide 81: 'The goal of OS security is not only to prevent attacks, But to limit their impact.'"],3:["Hiding vulnerabilities is security through obscurity, not the module's approach."],4:["Being invisible is not possible or the goal."]},
            "Slide 81: 'A well-secured system assumes breaches can happen' and 'Your role is to design systems that fail safely.' The goal is to limit impact, not prevent everything.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l8(self):
        explain_concept("Final Certification: All Module 5 Concepts", [
            "Comprehensive review of all Module 5 content:",
            "  • OS enforces security, isolation, and access control for all applications.",
            "  • TCB must be minimal and well-audited. User space vs kernel space separation is critical.",
            "  • Linux: root (UID 0) vs regular users. Windows: UAC for elevation.",
            "  • PoLP: give only necessary permissions. Privilege escalation transforms small flaws into full compromise.",
            "  • System hardening: reduce attack surface, close unnecessary ports, change defaults, defense in depth.",
            "  • Patch management: vulnerability lifecycle (discovery → disclosure → patch → exploitation). Unpatched systems = easy targets.",
            "  • Configuration drift creates hidden vulnerabilities. Automation (Ansible, Puppet) improves consistency.",
            "  • Misconfiguration is a human/process error, not a software flaw. Often easier to exploit than vulnerabilities.",
            "  • Common misconfigs: default creds, open ports, weak permissions, disabled controls, exposed services.",
            "  • Advanced: kernel hardening, memory protection, sandboxing, MAC, secure boot."
        ])
        q1 = ask("An attacker analyzes a recently released security patch to understand the underlying flaw and then targets systems that have not yet applied it. Which phase of the vulnerability lifecycle does this represent?",
            ["Discovery", "Disclosure", "Patch", "Exploitation"], 4,
            None, {1:["Discovery is when the vulnerability is first found, before anyone knows about it."],2:["Disclosure is when it becomes public knowledge."],3:["Patch is when the vendor releases the fix."]},
            "Slide 51: After patch release, 'Attackers analyze patches to understand the flaw' and 'Exploits are often developed shortly after patch release.' This is the exploitation phase.")
        self.ms(); self.sc(q1)

        q2 = ask("Which two Windows and Linux mechanisms are conceptually similar in their purpose of managing privilege elevation?",
            ["Windows Defender and SELinux", "User Account Control (UAC) and sudo",
             "Task Manager and netstat", "Active Directory and nmap"], 2,
            None, {1:["Windows Defender is antivirus; SELinux is MAC enforcement."],3:["Task Manager shows processes; netstat shows network connections."],4:["Active Directory manages identities; nmap scans networks."]},
            "Slide 20: Windows uses UAC for elevation. Slide 17: Linux uses 'sudo' for 'temporary privilege elevation.' Both manage privilege elevation.")
        self.ms(); self.sc(q2)

        q3 = ask("A system administrator runs 'ss -tuln' on a Linux server and discovers several listening ports for services that are no longer needed. What hardening principle should they apply?",
            ["Enable all services for compatibility", "Reduce unnecessary services and close unused ports",
             "Increase the number of open ports", "Disable logging to save disk space"], 2,
            None, {1:["Enabling unnecessary services increases attack surface."],3:["More open ports = more attack opportunities."],4:["Logging is essential for detection; disabling it weakens security."]},
            "Slide 35: 'Disable or remove unused services' and 'Fewer services → Lower attack surface.' Slide 36: 'Hardening involves closing unnecessary ports. Only essential services should be exposed.'")
        self.ms(); self.sc(q3)

        q4 = ask("Complete the key formula from the module: A vulnerability's impact is determined by combining the vulnerability with:",
            ["The attacker's motivation", "The privilege level of the exploited process",
             "The system's encryption strength", "The user's password complexity"], 2,
            None, {1:["Motivation doesn't change technical impact."],3:["Encryption strength is separate from the privilege level of the compromised process."],4:["Password complexity is an authentication factor, not directly about process privilege."]},
            "Slide 28: 'Privilege + Vulnerability = Impact.' 'A vulnerability alone is not always critical. Impact depends on privilege level of exploited process.'")
        self.ms(); self.sc(q4)

        q5 = ask("A company's development team uses 'chmod 777' on shared directories for convenience during coding. After deployment to production, these permissions remain. An attacker with any low-privilege account can now modify critical system files. What is the root cause category of this breach?",
            ["Zero-day software vulnerability", "Misconfiguration (weak file permissions)",
             "Advanced persistent threat", "Social engineering"], 2,
            None, {1:["No zero-day exploit was used. The attacker simply exploited overly permissive file settings."],3:["An APT is a long-term sophisticated campaign. This was a simple configuration error."],4:["No human was manipulated. The system was misconfigured."]},
            "Slide 72: 'chmod 777 (read/write/execute for all)' is a misconfiguration. Slide 67: 'Misconfiguration is not a software flaw; it is a human or process error.' Slide 77: 'A secure system incorrectly configured is effectively insecure.'")
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
        print("\nYou have mastered Module 5!")
        print("   • OS security fundamentals and attack paths")
        print("   • Trust models, TCB, and user/kernel space separation")
        print("   • Privilege levels (Linux root/UID 0, Windows UAC)")
        print("   • Least privilege and privilege escalation")
        print("   • System hardening: attack surface, ports, defaults, defense in depth")
        print("   • Patch management and vulnerability lifecycle")
        print("   • Configuration management and configuration drift")
        print("   • Misconfiguration as an attack vector")
        print("   • Advanced OS security: kernel hardening, secure boot, sandboxing")
        print("\n🎓 Ready for Module 6?")

    def game_over(self):
        print("\n" + "="*60)
        print("   💀  GAME OVER  💀")
        print("="*60)
        print(f"Completed {len(self.completed)} of 8 levels.")
        print(f"Score: {self.score} / {self.max_score}")
        print("Review the concepts and try again.")

if __name__ == "__main__":
    Game().start()
