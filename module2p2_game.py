#!/usr/bin/env python3
"""
Module 2 Part 2: Cyber Threat Landscape - Attacks, Malware & Threat Modeling
Covers all slides from I3336-25-26-Module-2-Part-2.pdf
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
        print("   ⚔️ MODULE 2 (PART 2): ATTACKS, MALWARE & THREAT MODELING ⚔️")
        print("="*60)
        slow_print("You are a security analyst investigating attack patterns.")
        slow_print("From phishing to ransomware, from attack chains to threat modeling,")
        slow_print("you must understand HOW attacks execute and HOW to model threats.")
        print("\n💀 3 lives | 🏆 8 levels | 📚 Slides 82-160")
        input("\nPress ENTER to begin...")

        levels = [
            ("Attacks & Phishing", "82-97", self.l1),
            ("Social Engineering, DoS & Physical Theft", "98-112", self.l2),
            ("Attack Phases & Cyber Kill Chain", "113-123", self.l3),
            ("Persistence & Long-Term Access", "124-130", self.l4),
            ("Malware Types & Behaviors", "131-147", self.l5),
            ("Threat Modeling Fundamentals", "148-157", self.l6),
            ("STRIDE, DFD & Threat Modeling Tools", "158-160", self.l7),
            ("Final Certification", "82-160", self.l8),
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
        explain_concept("Attacks & Phishing", [
            "ATTACK = deliberate execution of a threat. Involves a sequence of actions.",
            "Attacks are STRUCTURED, not random. Each stage enables the next.",
            "Early actions may appear harmless. Understanding structure improves detection.",
            "",
            "PHISHING = attempt to steal sensitive information by pretending to be a legitimate source.",
            "Common phishing examples:",
            "  • 'Your account has been compromised' → fake login page steals credentials",
            "  • 'You have won a prize' → preys on desire for freebies, asks for personal info",
            "  • 'Urgent action required' → creates pressure, fake verification page",
            "  • 'Fake invoice or payment request' → targets businesses, fake payment portal",
            "  • 'Fake job offer' → fake application form collects personal data",
            "  • 'Update your account information' → fake form for personal/credit card details",
            "  • 'Fake charity donation request' → exploits generosity, fake donation page",
            "  • 'Fake tech support' → claims computer is infected, asks for remote access"
        ])
        q1 = ask("An attacker sends an email claiming the victim's bank account has been compromised and instructs them to click a link to 'verify their identity.' The link leads to a fake login page that captures credentials. What type of attack is this?",
            ["Denial of Service", "Phishing attack",
             "Ransomware", "Physical theft"], 2,
            None, {1:["DoS makes systems unavailable, not steal credentials."],3:["Ransomware encrypts data; this attack steals login info."],4:["No physical device is stolen."]},
            "Slide 86-87: 'Your account has been compromised' phishing example. 'The email will contain a link to a fake login page, where the victim will be asked to enter their login credentials, which will then be stolen by the attacker.'")
        self.ms(); self.sc(q1)

        q2 = ask("A victim receives an email claiming they won a gift card and must click a link to claim it. The link leads to a fake website asking for credit card details to 'process the prize.' What psychological tactic is the attacker using?",
            ["Fear", "Greed/desire for freebies",
             "Curiosity", "Sympathy"], 2,
            None, {1:["Fear is used in 'account compromised' or 'urgent action' phishing."],3:["Curiosity might make someone click, but the prize angle targets desire for rewards."],4:["Sympathy is used in fake charity donation requests."]},
            "Slide 88-89: 'You have won a prize' phishing 'preys on the victim's desire for freebies or rewards.' The attacker exploits greed by offering something for free.")
        self.ms(); self.sc(q2)

        q3 = ask("An attacker sends an email posing as a charitable organization after a natural disaster, asking victims to donate via a link. The link leads to a fake donation page that collects credit card details. What type of phishing is this?",
            ["Fake tech support", "Fake charity donation request",
             "Fake job offer", "Fake invoice"], 2,
            None, {1:["Fake tech support claims the computer is infected."],3:["Fake job offers pose as recruiters."],4:["Fake invoices target businesses with payment requests."]},
            "Slide 92-93: 'Fake charity donation request' — 'The attacker poses as a charitable organization and asks the victim to make a donation.' Exploits sympathy and generosity during crises.")
        self.ms(); self.sc(q3)

        q4 = ask("Which statement about attacks is TRUE?",
            ["Attacks are random and unpredictable", "Attacks follow a logical progression where each stage enables the next",
             "Attacks never involve reconnaissance", "Early attack actions are always obviously malicious"], 2,
            None, {1:["Slide 84: 'Attacks follow logical progression. Each stage enables the next.'"],3:["Slide 84: 'Attacks often involve reconnaissance.'"],4:["Slide 84: 'Early actions may appear harmless.'"]},
            "Slide 84: 'Attacks follow logical progression' and 'Each stage enables the next.' 'Attackers adapt based on system response.' 'Early actions may appear harmless.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l2(self):
        explain_concept("Social Engineering, DoS & Physical Theft", [
            "SOCIAL ENGINEERING = psychological manipulation of people into performing actions or divulging confidential information.",
            "Can be crafted based on available public information (OSINT).",
            "",
            "DENIAL OF SERVICE (DoS): aims to make a system unavailable. Targets AVAILABILITY.",
            "Categories of DoS:",
            "  • Volumetric: exhaust network bandwidth",
            "  • Protocol: exhaust server or network state resources",
            "  • Application-layer: exhaust application logic capacity",
            "  • Distributed DoS (DDoS): uses multiple compromised systems",
            "  • Reflection and amplification: multiply traffic volume",
            "  • DoS may combine multiple techniques simultaneously",
            "",
            "PHYSICAL THEFT = temporarily or permanently stealing physical devices.",
            "",
            "REAL-WORLD ANALOGIES (Cybercrime Feels Familiar):",
            "Cyberattacks use the same goals as physical crime — just different methods:",
            "  • Same goal, different method: theft, deception, force all apply digitally.",
            "  • Thinking in real-world terms makes cyber threats easier to understand."
        ])
        q1 = ask("An attacker calls an employee pretending to be IT support and convinces them to reveal their password. No software vulnerability is exploited. What type of attack is this?",
            ["Malware attack", "Social engineering attack",
             "Denial of Service attack", "Physical theft"], 2,
            None, {1:["No malicious software is installed."],3:["DoS targets availability, not credential theft."],4:["No physical device is stolen."]},
            "Slide 99: 'Social Engineering Attacks: Psychological manipulation of people into performing actions or divulging confidential information.' 'Attack can be crafted based on available public information.'")
        self.ms(); self.sc(q1)

        q2 = ask("A botnet of 50,000 compromised devices simultaneously sends massive traffic to a company's web server, overwhelming its bandwidth and making the website unreachable for legitimate users. What type of attack is this?",
            ["Phishing attack", "Distributed Denial of Service (DDoS)",
             "Ransomware", "Spyware"], 2,
            None, {1:["Phishing steals credentials via deception, not overwhelm servers."],3:["Ransomware encrypts data; it doesn't typically flood networks with traffic."],4:["Spyware collects information silently, not disrupt availability."]},
            "Slide 100-101: DoS 'aims to make a system unavailable' and 'targets availability.' DDoS 'uses multiple compromised systems.' Volumetric attacks 'exhaust network bandwidth.'")
        self.ms(); self.sc(q2)

        q3 = ask("Which DoS attack category targets the application logic layer by exhausting the application's processing capacity rather than network bandwidth?",
            ["Volumetric attack", "Application-layer attack",
             "Protocol attack", "Reflection attack"], 2,
            None, {1:["Volumetric attacks exhaust network bandwidth, not application logic."],3:["Protocol attacks exhaust server or network state resources."],4:["Reflection attacks multiply traffic volume; they are a delivery mechanism, not a layer target."]},
            "Slide 101: 'Application-layer attacks exhaust application logic capacity.' This is distinct from volumetric (bandwidth) and protocol (state resources) attacks.")
        self.ms(); self.sc(q3)

        q4 = ask("A thief steals a laptop from a coffee shop to access the data stored on it. What category of attack does this represent?",
            ["Social engineering", "Physical theft attack",
             "Phishing", "Malware"], 2,
            None, {1:["No psychological manipulation was used."],3:["No deceptive email or message was involved."],4:["No software was used; it was a physical act."]},
            "Slide 102: 'Physical Theft Attacks: Temporarily or Permanently stealing physical devices.' The laptop theft is a physical security breach.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l3(self):
        explain_concept("Attack Phases & Cyber Kill Chain", [
            "Attacks unfold in stages like a break-in. Breaking one stage can stop progression.",
            "",
            "1. RECONNAISSANCE (Planning and Surveillance):",
            "  • Gather information about target system, network, or individuals.",
            "  • Examples: Scanning open ports, researching employees on social media, identifying software versions.",
            "  • PASSIVE reconnaissance: collects info without direct interaction (OSINT, DNS records, social media, leaked datasets). Stealthier and harder to detect.",
            "  • ACTIVE reconnaissance: sends traffic to target (port scanning, vulnerability scanning, enumeration). Reveals more but increases detection likelihood.",
            "",
            "2. PREPARATION (Tooling and Resource Gathering):",
            "  • Develop or acquire malware, phishing kits, or exploits.",
            "  • Set up infrastructure: fake websites, command-and-control servers.",
            "",
            "3. INITIAL INTRUSION (Entry):",
            "  • Gain initial access: phishing, exploiting vulnerability, stolen passwords.",
            "",
            "4. ESCALATION AND EXPLORATION (Movement and Discovery):",
            "  • Escalate privileges, move laterally, search for sensitive data.",
            "  • May disable security software or cover tracks.",
            "",
            "5. EXECUTION (Theft or Damage):",
            "  • Exfiltrate data, deploy ransomware, or disrupt services.",
            "  • May delete logs or files to hinder investigation.",
            "",
            "6. ESCAPE AND EVASION (Exit):",
            "  • Remove traces, delete logs, use anonymizing tools.",
            "  • Disconnect from compromised system.",
            "",
            "CYBER KILL CHAIN: structured framework for understanding attack stages.",
            "ATTACK AUTOMATION: reduces required skill, accelerates speed, enables mass compromise.",
            "ATTACK SCALABILITY: cloud infrastructure, shared software components amplify impact. Minor flaws affect millions."
        ])
        q1 = ask("A security analyst notices unusual port scanning activity against their company's public servers. No actual breach has occurred yet. Which attack phase is this?",
            ["Initial Intrusion", "Reconnaissance",
             "Execution", "Escape and Evasion"], 2,
            None, {1:["Initial intrusion involves actual access, not just information gathering."],3:["Execution involves data theft or damage, not preliminary scanning."],4:["Escape happens after the attack, not before it begins."]},
            "Slide 113-114: Reconnaissance = 'gathering information about the target system, network, or individuals.' 'Scanning for open ports' is reconnaissance. Slide 114: Active reconnaissance 'sends traffic to the target system.'")
        self.ms(); self.sc(q1)

        q2 = ask("An attacker researches a company's employees on LinkedIn to identify their roles and responsibilities. They collect this information without sending any traffic to the company's systems. What type of reconnaissance is this?",
            ["Active reconnaissance", "Passive reconnaissance",
             "Social engineering", "Physical reconnaissance"], 2,
            None, {1:["Active reconnaissance sends traffic to the target. No traffic was sent."],3:["Social engineering involves direct interaction/manipulation. This is information collection."],4:["No physical presence is involved; this is digital information gathering."]},
            "Slide 114: Passive reconnaissance 'collects information without direct interaction.' Examples include 'OSINT, DNS records, social media analysis, and leaked datasets.' 'Passive methods are stealthier and harder to detect.'")
        self.ms(); self.sc(q2)

        q3 = ask("After gaining initial access through a phishing email, an attacker creates additional admin accounts, installs remote access tools, and modifies registry settings to survive reboots. Which attack phase and concept does this primarily demonstrate?",
            ["Reconnaissance", "Persistence during Escalation and Exploration",
             "Initial Intrusion", "Execution"], 2,
            None, {1:["Reconnaissance happens before access is gained."],3:["Initial intrusion was the phishing email itself. The described actions happen AFTER initial access."],4:["Execution would be data exfiltration or ransomware deployment, not establishing continued access."]},
            "Slide 117-118: Escalation and Exploration = 'escalates privileges, moves laterally within the network.' Slide 124-125: Persistence = 'allows continued access after compromise' and 'survives system reboots.' Creating accounts and remote access tools = persistence mechanisms.")
        self.ms(); self.sc(q3)

        q4 = ask("A single vulnerability in a popular open-source library is discovered. Within days, automated tools are scanning the entire internet for vulnerable systems and exploiting them automatically. What concept does this demonstrate?",
            ["Attack stealth", "Attack automation and scalability",
             "Physical security breach", "Social engineering"], 2,
            None, {1:["The scenario describes mass scanning, not stealth."],3:["No physical devices are involved."],4:["No human manipulation is described."]},
            "Slide 122-123: Attack automation 'reduces required attacker skill,' 'enables mass compromise,' and 'increases attack frequency.' Attack scalability: 'Shared software components amplify impact' and 'Minor flaws affect millions of systems.' 'Modern attacks propagate rapidly.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l4(self):
        explain_concept("Persistence & Long-Term Access", [
            "PERSISTENCE = allows continued access after compromise.",
            "  • Survives system reboots.",
            "  • Resists basic remediation efforts.",
            "  • Enables long-term attacker control.",
            "  • Transforms intrusion into campaign.",
            "",
            "BACKDOORS: hidden mechanisms for re-entry. May bypass normal authentication. Often disguised as legitimate services.",
            "",
            "LONG-TERM ACCESS MECHANISMS:",
            "  • Credential harvesting — steal passwords/tokens for later use.",
            "  • Account creation — new hidden accounts.",
            "  • Token theft and reuse — steal session tokens.",
            "  • Service installation — malicious services that auto-start.",
            "  • Session hijacking — take over legitimate sessions.",
            "  • Scheduled task creation — recurring execution.",
            "",
            "STEALTH TECHNIQUES:",
            "  • Log manipulation — delete or alter logs.",
            "  • Code obfuscation — hide what malware does.",
            "  • Living-off-the-land — use legitimate tools (like PowerShell) for malicious purposes.",
            "  • Blending into normal activity — appearing as regular traffic/processes.",
            "  • Avoiding signature detection — changing appearance to evade antivirus.",
            "",
            "DWELL TIME = time between compromise and detection. Longer dwell time = more damage. Often measured in months.",
            "",
            "CUMULATIVE IMPACT: Initial compromise may seem minor. Persistence expands scope over time. Small access can escalate to systemic failure."
        ])
        q1 = ask("After compromising a server, an attacker modifies system logs to remove evidence of their intrusion and uses built-in Windows administration tools (like PowerShell) to maintain access instead of installing suspicious malware. What two concepts are demonstrated?",
            ["Encryption and decryption", "Log manipulation and living-off-the-land techniques",
             "Phishing and social engineering", "DDoS and volumetric attack"], 2,
            None, {1:["No encryption is mentioned in the scenario."],3:["Phishing and social engineering were used to gain access, not to maintain it stealthily."],4:["No denial of service is described."]},
            "Slide 128: Stealth techniques include 'log manipulation' and 'living-off-the-land techniques.' Living-off-the-land means using legitimate system tools for malicious purposes, making detection harder. Log manipulation removes evidence.")
        self.ms(); self.sc(q1)

        q2 = ask("An attacker installs a hidden service on a compromised server that automatically starts on boot and provides remote access even if the main vulnerability is patched. What is this hidden service called?",
            ["A firewall", "A backdoor",
             "An antivirus", "A proxy server"], 2,
            None, {1:["A firewall blocks unauthorized access, not provides it."],3:["Antivirus detects malware; it doesn't give attackers remote access."],4:["A proxy forwards traffic but isn't specifically a hidden re-entry mechanism."]},
            "Slide 126: Backdoors are 'hidden mechanisms for re-entry' that 'may bypass normal authentication,' are 'often disguised as legitimate services,' and 'provide repeated access.' Slide 125: Persistence 'survives system reboots.'")
        self.ms(); self.sc(q2)

        q3 = ask("A company discovers that an attacker had access to their network for 8 months before being detected. During this time, the attacker gradually escalated privileges and exfiltrated increasing amounts of data. What metric describes the 8-month period?",
            ["Attack surface", "Dwell time",
             "Threat path", "Attack chain"], 2,
            None, {1:["Attack surface is about entry points, not time."],3:["Threat path is the sequence of attack steps, not duration."],4:["Attack chain describes phases, not the time before detection."]},
            "Slide 129: 'Dwell time: Time between compromise and detection.' 'Longer dwell time increases damage.' 'Often measured in months.' 'Correlates with data exfiltration.' The 8-month period is dwell time.")
        self.ms(); self.sc(q3)

        q4 = ask("Which statement about cumulative impact of persistence is TRUE?",
            ["Initial compromise is always the most damaging stage", "Persistence allows small access to escalate to systemic failure over time",
             "Persistence has no effect on attack severity", "Detection speed does not affect the scale of damage"], 2,
            None, {1:["Slide 130: 'Initial compromise may seem minor.' Persistence makes it worse over time."],3:["Slide 130: 'Persistence expands scope over time' and 'increases potential damage.'"],4:["Slide 130: 'Detection speed determines scale.' Faster detection = less damage."]},
            "Slide 130: 'Initial compromise may seem minor.' 'Persistence expands scope over time.' 'Small access can escalate to systemic failure.' 'Combined impacts exceed isolated damage.' 'Time amplifies consequences.' 'Detection speed determines scale.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l5(self):
        explain_concept("Malware Types & Behaviors", [
            "MALWARE = malicious software that performs unauthorized actions. It's a tool, not the attack itself.",
            "Malware often appears AFTER access is gained. It amplifies attack capability.",
            "",
            "PURPOSES: Data exfiltration, surveillance, financial extortion, disruption of services, credential harvesting, botnet participation.",
            "",
            "BEHAVIORS: Self-propagation, stealth and obfuscation, command-and-control (C2) communication, privilege manipulation, file encryption/modification, system configuration changes.",
            "",
            "LIFECYCLE: Delivery → Execution → Persistence → Communication with attacker → Action on objectives → Cleanup or self-deletion.",
            "",
            "DELIVERY MECHANISMS: Phishing attachments, drive-by downloads, exploit kits, supply-chain compromise, removable media, malicious updates.",
            "",
            "TYPES:",
            "  • VIRUS: attaches to legitimate files, requires user interaction, spreads through file execution, alters host files.",
            "  • WORM: self-propagating, spreads WITHOUT user interaction, exploits network vulnerabilities, rapidly scalable, causes widespread disruption.",
            "  • TROJAN: disguised as legitimate software, relies on user trust, does NOT self-propagate, often installs backdoors, enables secondary payloads.",
            "  • RANSOMWARE: encrypts victim data, demands payment for recovery, often includes data exfiltration, targets enterprises and infrastructure.",
            "  • BACKDOOR MALWARE: provides remote access, bypasses authentication, enables long-term persistence, supports lateral movement.",
            "  • SPYWARE: collects sensitive information, monitors user activity, captures credentials, often stealthy. Examples: Pegasus (mobile surveillance), Graphite."
        ])
        q1 = ask("A piece of malware spreads automatically across a corporate network by exploiting a vulnerability in the file-sharing protocol, infecting hundreds of machines within hours without any user clicking on anything. What type of malware is this?",
            ["Virus", "Worm",
             "Trojan", "Spyware"], 2,
            None, {1:["Viruses require user interaction to spread."],3:["Trojans rely on user trust and do not self-propagate."],4:["Spyware monitors activity but doesn't typically self-propagate across networks."]},
            "Slide 139: Worm = 'self-propagating,' 'spreads without user interaction,' 'exploits network vulnerabilities,' 'rapidly scalable,' 'causes widespread disruption.'")
        self.ms(); self.sc(q1)

        q2 = ask("A user downloads what appears to be a free PDF editor from an unofficial website. After installation, the software works correctly but secretly opens a connection that allows remote attackers to control the computer. The malware does not spread to other computers. What type is this?",
            ["Worm", "Trojan",
             "Ransomware", "Virus"], 2,
            None, {1:["Worms self-propagate. This does not spread."],3:["Ransomware encrypts files and demands payment. No encryption is described."],4:["Viruses attach to legitimate files and require execution to spread."]},
            "Slide 140: Trojan = 'disguised as legitimate software,' 'relies on user trust,' 'does not self-propagate,' 'often installs backdoors,' 'enables secondary payloads.' The free PDF editor = disguise. Secret remote access = backdoor.")
        self.ms(); self.sc(q2)

        q3 = ask("A hospital's computer systems are suddenly locked, with a message demanding Bitcoin payment to restore access to patient records. The attackers also threaten to publish the stolen records publicly if payment is not made. What type of malware is this?",
            ["Spyware", "Ransomware",
             "Trojan", "Worm"], 2,
            None, {1:["Spyware monitors activity silently; it doesn't lock systems or demand payment."],3:["Trojans disguise themselves as legitimate software but don't typically encrypt data for ransom."],4:["Worms self-propagate but don't typically encrypt data and demand ransom."]},
            "Slide 141: Ransomware = 'encrypts victim data,' 'demands payment for recovery,' 'often includes data exfiltration,' 'may disrupt operations,' 'targets enterprises and infrastructure.' The hospital scenario is a classic ransomware attack.")
        self.ms(); self.sc(q3)

        q4 = ask("Pegasus spyware was used to monitor targeted individuals by exploiting mobile device vulnerabilities, operating covertly to collect communications and location data. What is the PRIMARY purpose of spyware?",
            ["Encrypting files for ransom", "Collecting sensitive information and monitoring user activity",
             "Self-propagating across networks", "Destroying system files"], 2,
            None, {1:["That's ransomware, not spyware."],3:["That's a worm's behavior."],4:["Destruction is associated with wipers or destructive malware, not spyware."]},
            "Slide 144: Spyware = 'collects sensitive information,' 'monitors user activity,' 'captures credentials,' 'often stealthy,' 'may transmit data externally,' 'frequently used in surveillance.' Pegasus (slide 145) is a spyware example.")
        self.ms(); self.sc(q4)

        q5 = ask("A user receives an email with an attached Word document. When they open it and enable macros, malicious code executes and infects the computer. The malware then attaches itself to other documents on the system. What type of malware is this?",
            ["Worm", "Virus",
             "Trojan", "Backdoor"], 2,
            None, {1:["Worms spread without user interaction via network vulnerabilities."],3:["Trojans disguise as legitimate software but don't typically attach to other files."],4:["Backdoors provide remote access but don't typically attach to documents."]},
            "Slide 138: Virus = 'attaches to legitimate files,' 'requires user interaction,' 'spreads through file execution,' 'alters host files.' Opening the Word document and enabling macros = user interaction. Attaching to other documents = virus behavior.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l6(self):
        explain_concept("Threat Modeling Fundamentals", [
            "THREAT MODELING = structured security reasoning. It identifies how systems can be attacked and anticipates realistic threat scenarios.",
            "Key functions:",
            "  • Makes assumptions explicit",
            "  • Links adversaries to assets",
            "  • Supports secure design decisions",
            "  • Is repeatable and scales with complexity",
            "",
            "TRUST BOUNDARIES in threat modeling:",
            "  • Identify where trust assumptions change",
            "  • Identify external vs internal domains",
            "  • Identify privilege level transitions",
            "  • Identify authentication boundaries",
            "  • Identify network segmentation points",
            "",
            "THREAT ENUMERATION:",
            "  1. Identify possible adversaries",
            "  2. Identify possible threat goals",
            "  3. Identify attack surfaces",
            "  4. Identify exploitable vulnerabilities",
            "  5. Identify feasible paths",
            "  6. Describe complete threat scenarios",
            "",
            "THREAT PRIORITIZATION:",
            "  • Evaluate likelihood qualitatively",
            "  • Evaluate potential impact",
            "  • Consider exploit availability",
            "  • Consider asset criticality",
            "  • Prioritize realistic attack paths",
            "  • Guide mitigation strategy",
            "",
            "STRUCTURED REASONING vs INTUITION:",
            "  • Security cannot rely on intuition alone",
            "  • Complex systems hide indirect paths",
            "  • Adversary perspective must be considered",
            "  • Structured reasoning scales with complexity"
        ])
        q1 = ask("A development team reviews their application design by systematically identifying what assets exist, who might attack them, how they could be reached, and what the impact would be. What security activity are they performing?",
            ["Penetration testing", "Threat modeling",
             "Code compilation", "Vulnerability scanning"], 2,
            None, {1:["Penetration testing exploits actual vulnerabilities in running systems. This is reviewing design before coding."],3:["Code compilation translates source code to executable; it's not a security analysis activity."],4:["Vulnerability scanning detects known vulnerabilities in deployed systems, not design-level reasoning."]},
            "Slide 148-149: Threat modeling = 'structured security reasoning' that 'identifies how systems can be attacked,' 'anticipates realistic threat scenarios,' and 'supports secure design decisions.' The described activity = systematic design review = threat modeling.")
        self.ms(); self.sc(q1)

        q2 = ask("During a threat modeling exercise, a team marks the boundary between the public internet and their internal network, noting that data crossing this line must be validated. They also mark where user authentication happens. What are they identifying?",
            ["Attack surfaces", "Trust boundaries",
             "Malware signatures", "Encryption keys"], 2,
            None, {1:["Attack surfaces are interaction points. The team is marking trust transitions, not just interaction points."],3:["Malware signatures are used in antivirus detection, not threat modeling."],4:["Encryption keys are technical controls, not architectural trust transitions."]},
            "Slide 151: Trust boundaries 'identify where trust assumptions change,' 'external vs internal domains,' 'privilege level transitions,' 'authentication boundaries,' and 'network segmentation points.' The boundaries between internet and internal network are classic trust boundaries.")
        self.ms(); self.sc(q2)

        q3 = ask("After enumerating threats, a team evaluates which threats are most likely to occur and which would cause the most damage if successful. They focus their mitigation budget on the top 5 threats. What step of threat modeling is this?",
            ["Threat enumeration", "Threat prioritization",
             "Threat execution", "Threat elimination"], 2,
            None, {1:["Enumeration is identifying threats. This step is about ranking them."],3:["Threat execution is not a threat modeling step; it's what attackers do."],4:["Threats cannot be completely eliminated — only mitigated."]},
            "Slide 153: Threat prioritization = 'evaluate likelihood qualitatively,' 'evaluate potential impact,' 'consider exploit availability,' 'consider asset criticality,' 'prioritize realistic attack paths,' and 'guide mitigation strategy.' Ranking by likelihood and impact = prioritization.")
        self.ms(); self.sc(q3)

        q4 = ask("A security architect argues that threat modeling is unnecessary because they have 'good security intuition' from years of experience. What is the flaw in this reasoning?",
            ["Intuition is always wrong", "Complex systems hide indirect paths, and security cannot rely on intuition alone",
             "Threat modeling is only for beginners", "Intuition is better than structured reasoning"], 2,
            None, {1:["Intuition isn't always wrong, but it's insufficient for complex systems."],3:["Threat modeling is used by experts and organizations at all levels."],4:["Slide 155 explicitly states structured reasoning is needed for complex systems."]},
            "Slide 155: 'Security cannot rely on intuition alone.' 'Complex systems hide indirect paths.' 'Assumptions must be documented.' 'Adversary perspective must be considered.' 'Structured reasoning scales with complexity.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l7(self):
        explain_concept("STRIDE, DFD & Threat Modeling Tools", [
            "STRIDE = threat classification framework. Six categories:",
            "  • SPOOFING: impersonating an entity.",
            "  • TAMPERING: unauthorized data modification.",
            "  • REPUDIATION: denying actions without proof.",
            "  • INFORMATION DISCLOSURE: unauthorized data access.",
            "  • DENIAL OF SERVICE: disrupting availability.",
            "  • ELEVATION OF PRIVILEGE: gaining higher permissions.",
            "",
            "DATA FLOW DIAGRAM (DFD) ELEMENTS in security context:",
            "  • External Entity: User or external system",
            "  • Process: Application or service performing computation",
            "  • Data Store: Database or file storage",
            "  • Data Flow: Movement of data between elements",
            "  • Trust Boundary: Change in trust level between components",
            "",
            "TOOLS:",
            "  • Microsoft Threat Modeling Tool (MTMT): Desktop tool based on DFDs. Automatically maps DFD elements to STRIDE threats. Generates threat lists per component.",
            "  • OWASP Threat Dragon: Open-source, web-based, lightweight. Supports STRIDE-based threat enumeration. Suitable for web and cloud architectures.",
            "",
            "STRENGTHS: Structured enumeration, documentation, repeatability. Makes trust boundaries explicit.",
            "LIMITATIONS: Depends on accurate system modeling. May generate generic or excessive threats. Tools assist but do NOT replace expert judgment."
        ])
        q1 = ask("An attacker guesses a user's password and logs in as that user. According to STRIDE, what category of threat is this?",
            ["Tampering", "Spoofing",
             "Repudiation", "Information Disclosure"], 2,
            None, {1:["Tampering = unauthorized data modification. No data was modified here."],3:["Repudiation = denying actions without proof. The issue is impersonation, not denial."],4:["Information Disclosure = unauthorized data access. The attack is about identity, not data access."]},
            "Slide 1421: Spoofing = 'Impersonating an entity.' Guessing a password and logging in as someone else = impersonating that user = spoofing.")
        self.ms(); self.sc(q1)

        q2 = ask("An attacker modifies a database record to change a student's grade from C to A without authorization. According to STRIDE, what category is this?",
            ["Spoofing", "Tampering",
             "Denial of Service", "Elevation of Privilege"], 2,
            None, {1:["Spoofing = impersonation. The attacker is not pretending to be someone else."],3:["DoS = disrupting availability. The system is still available."],4:["Elevation of privilege = gaining higher permissions. The attacker may already have access; the issue is data modification."]},
            "Slide 1421: Tampering = 'Unauthorized data modification.' Changing a grade without authorization = tampering with data.")
        self.ms(); self.sc(q2)

        q3 = ask("In a Data Flow Diagram used for threat modeling, what element represents a 'change in trust level between components' such as the boundary between a user's browser and the application server?",
            ["External Entity", "Process",
             "Data Store", "Trust Boundary"], 4,
            None, {1:["External Entity = user or external system."],2:["Process = application or service performing computation."],3:["Data Store = database or file storage."]},
            "Slide 1451-1503: Trust Boundary = 'Change in trust level between components.' The boundary between user browser (untrusted) and application server (trusted) is a trust boundary.")
        self.ms(); self.sc(q3)

        q4 = ask("A company uses an automated threat modeling tool that generates 200 potential threats for their system. Many of these threats are generic and not realistic for their specific architecture. What limitation of threat modeling tools does this illustrate?",
            ["Tools always miss real threats", "Tools may generate generic or excessive threats and depend on accurate modeling",
             "Tools replace expert judgment completely", "Tools cannot map DFD elements to STRIDE"], 2,
            None, {1:["The issue is too many generic threats, not missing threats."],3:["Slide 1561: 'Tools assist analysis but do not replace expert judgment.'"],4:["Tools like MTMT explicitly map DFD elements to STRIDE. This is a strength, not a limitation."]},
            "Slide 1561: Limitations include 'May generate generic or excessive threats' and 'Depends on accurate system modeling.' The scenario describes exactly this — many generic, unrealistic threats.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l8(self):
        explain_concept("Final Certification: All Module 2 Part 2 Concepts", [
            "Comprehensive review:",
            "  • Attack = deliberate execution of a threat. Structured, not random.",
            "  • Phishing = steal info by pretending to be legitimate. Types: account compromised, prize, urgent action, invoice, job offer, update info, charity, tech support.",
            "  • Social engineering = psychological manipulation.",
            "  • DoS = make system unavailable. Categories: volumetric, protocol, application-layer, DDoS, reflection/amplification.",
            "  • Physical theft = stealing devices.",
            "  • Attack phases: Reconnaissance (passive/active), Preparation, Initial Intrusion, Escalation/Exploration, Execution, Escape/Evasion.",
            "  • Attack automation reduces skill requirements. Scalability amplifies impact.",
            "  • Persistence = continued access after compromise. Backdoors, credential harvesting, account creation, stealth techniques.",
            "  • Dwell time = time between compromise and detection.",
            "  • Malware = malicious software, a tool not the attack itself.",
            "  • Virus (needs user interaction, attaches to files), Worm (self-propagating, no user interaction), Trojan (disguised as legitimate), Ransomware (encrypts, demands payment), Backdoor (remote access), Spyware (surveillance).",
            "  • Threat modeling = structured security reasoning. Trust boundaries, enumeration, prioritization.",
            "  • STRIDE: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.",
            "  • DFD elements: External Entity, Process, Data Store, Data Flow, Trust Boundary.",
            "  • Tools: MTMT, OWASP Threat Dragon. Strengths and limitations."
        ])
        q1 = ask("An attacker sends emails to a company's employees claiming to be from the IT department, asking them to click a link to update their account information. The link leads to a fake login page. At the same time, another attacker rents a botnet to flood the company's website with traffic, making it unavailable. What two attack types are being used simultaneously?",
            ["Ransomware and spyware", "Phishing and Denial of Service",
             "Worm and virus", "Social engineering and physical theft"], 2,
            None, {1:["No encryption or surveillance is described."],3:["Worms and viruses are malware types, not the attack methods described."],4:["Physical theft is not described."]},
            "Slide 86-97: Phishing emails asking to update account information = phishing attack. Slide 100-101: Flooding a website with traffic = DoS/DDoS attack. The scenario combines both.")
        self.ms(); self.sc(q1)

        q2 = ask("During a threat modeling session, a team identifies that an attacker could impersonate an admin user (Spoofing), modify order records (Tampering), and delete logs to hide evidence (Repudiation). What framework are they using to classify these threats?",
            ["OWASP Top 10", "STRIDE",
             "CVSS", "NIST CSF"], 2,
            None, {1:["OWASP Top 10 lists web application vulnerabilities, not threat categories."],3:["CVSS scores vulnerability severity, not classifies threat types."],4:["NIST CSF is a cybersecurity framework, not a threat classification system."]},
            "Slide 1421: STRIDE = 'Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.' The team is classifying threats using the STRIDE framework.")
        self.ms(); self.sc(q2)

        q3 = ask("A malware spreads across a network automatically by exploiting a file-sharing vulnerability, infecting machines without any user interaction. It encrypts files on each machine and displays a ransom demand. Which two malware types are combined in this attack?",
            ["Virus and Trojan", "Worm and Ransomware",
             "Spyware and Backdoor", "Trojan and Spyware"], 2,
            None, {1:["Viruses require user interaction. This spreads automatically."],3:["Spyware monitors activity; backdoor provides remote access. Neither is the primary behavior described."],4:["Trojans don't self-propagate. This malware spreads automatically."]},
            "Slide 139: Worm = 'self-propagating,' 'spreads without user interaction.' Slide 141: Ransomware = 'encrypts victim data,' 'demands payment for recovery.' The malware spreads like a worm and acts like ransomware.")
        self.ms(); self.sc(q3)

        q4 = ask("A security analyst researches a target company by reading their public blog posts, examining DNS records, and analyzing employee LinkedIn profiles — all without sending any traffic to the company's systems. Another analyst runs port scans and vulnerability scans against the company's servers. What two types of reconnaissance are being conducted?",
            ["Active and active reconnaissance", "Passive and active reconnaissance",
             "Internal and external reconnaissance", "Social and physical reconnaissance"], 2,
            None, {1:["The first analyst does NOT send traffic — that's not active."],3:["Internal vs external refers to attacker position, not reconnaissance method."],4:["Physical reconnaissance is not described."]},
            "Slide 114: Passive reconnaissance 'collects information without direct interaction' (OSINT, DNS records, social media). Active reconnaissance 'sends traffic to the target system' (port scanning, vulnerability scanning). The first analyst = passive. The second = active.")
        self.ms(); self.sc(q4)

        q5 = ask("An attacker gains access to a system, installs a hidden remote access service, creates a new hidden administrator account, and modifies system logs to remove evidence. After the main vulnerability is patched, the attacker can still access the system. What concept best describes this entire behavior?",
            ["Initial intrusion", "Persistence",
             "Reconnaissance", "Execution"], 2,
            None, {1:["Initial intrusion was the entry point. The described actions happen after entry to maintain access."],3:["Reconnaissance happens before the attack, not after compromise."],4:["Execution would be data theft or damage, not establishing continued access."]},
            "Slide 124-130: Persistence = 'allows continued access after compromise,' 'survives system reboots,' 'resists basic remediation efforts.' Hidden remote access, new accounts, and log modification are all persistence mechanisms. The attacker maintains access even after patching = persistence.")
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
        print("\nYou have mastered Module 2 Part 2!")
        print("   • Attacks: structured, not random")
        print("   • Phishing: 8 common types and tactics")
        print("   • Social engineering, DoS categories, physical theft")
        print("   • Attack phases: 6 stages from reconnaissance to escape")
        print("   • Passive vs active reconnaissance")
        print("   • Attack automation and scalability")
        print("   • Persistence: backdoors, stealth, dwell time")
        print("   • Malware types: virus, worm, trojan, ransomware, backdoor, spyware")
        print("   • Threat modeling: structured reasoning, trust boundaries, enumeration")
        print("   • STRIDE threat categories")
        print("   • DFD elements for security context")
        print("   • Tools: MTMT, OWASP Threat Dragon")
        print("\n🎓 YOU HAVE COMPLETED MODULE 2!")

    def game_over(self):
        print("\n" + "="*60)
        print("   💀  GAME OVER  💀")
        print("="*60)
        print(f"Completed {len(self.completed)} of 8 levels.")
        print(f"Score: {self.score} / {self.max_score}")
        print("Review the concepts and try again.")

if __name__ == "__main__":
    Game().start()
