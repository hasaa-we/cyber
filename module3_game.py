#!/usr/bin/env python3
"""
Module 3: Cybersecurity Defense
Covers all slides from I3336-25-26-Module-3.pdf
Features:
- Slide coverage per level
- Pre-question explanations for hard concepts
- Example explanations after wrong answers
- All concepts covered
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
        print("   🛡️ MODULE 3: CYBERSECURITY DEFENSE QUEST 🛡️")
        print("="*60)
        slow_print("You are a network security architect. After understanding")
        slow_print("threats and attacks, you must now design defenses.")
        slow_print("Build the walls, set the guards, and secure the perimeter.")
        print("\n💀 3 lives | 🏆 8 levels | 📚 All slides covered")
        input("\nPress ENTER to begin...")

        levels = [
            ("Defense Fundamentals", "2-6", self.l1),
            ("Preventive: Firewalls", "7-11", self.l2),
            ("Preventive: NAC & Segmentation", "12-15", self.l3),
            ("Protective: Encryption & VPNs", "16-24", self.l4),
            ("Detective: IDS, IPS & Monitoring", "25-28", self.l5),
            ("Detective: SIEM", "29-32", self.l6),
            ("Resilience: DoS Mitigation", "33-35", self.l7),
            ("Final Certification", "2-35", self.l8),
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
        explain_concept("Defense Fundamentals", [
            "Defense shifts from attacker behavior to SYSTEM PROTECTION.",
            "Core objectives: Access Control, Isolation, Protection, Visibility, Detection, Resilience.",
            "4 categories of mechanisms: Preventive, Protective, Detective, Resilience & Availability.",
            "Defense focuses on RISK REDUCTION, not threat elimination.",
            "Mechanisms must be understood conceptually before deployment."
        ])
        q1 = ask("What is the primary shift when moving from threat analysis to defense?",
            ["From attacker behavior to system protection", "From system protection to attacker behavior",
             "From risk reduction to threat elimination", "From prevention to only detection"], 1,
            None, {2:["That's the opposite direction."],3:["Defense does NOT eliminate threats — it reduces risk."],4:["Defense includes prevention, detection, protection, AND resilience."]},
            "Slide 2: 'Defense shifts the perspective from attacker behavior to system protection.'")
        self.ms(); self.sc(q1)

        q2 = ask("Which of these is NOT one of the four categories of network defense mechanisms?",
            ["Preventive mechanisms", "Predictive mechanisms", "Detective mechanisms", "Protective mechanisms"], 2,
            None, {1:["Preventive IS a category (blocks/restricts)."],3:["Detective IS a category (observes/analyzes)."],4:["Protective IS a category (protects data in transit)."]},
            "Slide 6 lists four: Preventive, Protective, Detective, Resilience and Availability.")
        self.ms(); self.sc(q2)

        q3 = ask("What is the main purpose of preventive mechanisms?",
            ["Observe and analyze network behavior", "Block or restrict communication before or at the point of access",
             "Focus on maintaining availability during attacks", "Correlate events across multiple systems"], 2,
            None, {1:["That's detective mechanisms."],3:["That's resilience mechanisms."],4:["That's SIEM (detective/resilience)."]},
            "Slide 7: Preventive mechanisms 'block or restrict communication' and 'act before or at the point of access.'")
        self.ms(); self.sc(q3)

        q4 = ask("Network defense focuses on:",
            ["Threat elimination", "Risk reduction", "Complete attack prevention", "Removing all vulnerabilities"], 2,
            None, {1:["The slide says defense focuses on risk reduction, NOT threat elimination."],3:["No defense prevents ALL attacks."],4:["Removing all vulnerabilities is impossible."]},
            "Slide 2: 'Defense focuses on risk reduction, not threat elimination.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l2(self):
        explain_concept("Preventive Mechanisms: Firewalls", [
            "FIREWALL = first line of defense. Controls traffic based on rules.",
            "Enforces network boundaries between trusted/untrusted zones.",
            "Types:",
            "  1. Packet-filtering (1st gen): inspects headers (IP, port, protocol). Fast but blind to payload.",
            "  2. Stateful (2nd/3rd gen): tracks active connections. Allows known session traffic.",
            "  3. Next-Generation: adds application awareness, deep packet inspection, malware detection.",
            "Limitations: cannot detect attacks in allowed traffic, blind to encrypted payloads."
        ])
        q1 = ask("A firewall that inspects packet headers (IP, port, protocol) but cannot see inside the packet payload is called:",
            ["Stateful firewall", "Next-generation firewall", "Packet-filtering firewall", "Application firewall"], 3,
            None, {1:["Stateful firewalls track connections, not just headers."],2:["Next-gen firewalls do deep packet inspection and see payload."],4:["Not a standard type in the lecture."]},
            "Slide 9: Packet-filtering 'inspect packet headers' and is 'fast but blind to payload content.'")
        self.ms(); self.sc(q1)

        q2 = ask("A firewall tracks active connections and allows traffic only if it belongs to a known, established session. What type is this?",
            ["Packet-filtering firewall", "Next-generation firewall", "Stateful firewall", "Proxy firewall"], 3,
            None, {1:["Packet-filtering does not track connections — it only looks at headers."],2:["Next-gen adds application awareness and DPI, not just connection tracking."],4:["Proxy firewall is not listed in the lecture types."]},
            "Slide 10: Stateful firewalls 'track active connections' and 'allow traffic belonging to known sessions.'")
        self.ms(); self.sc(q2)

        q3 = ask("A next-generation firewall adds which capabilities beyond traditional firewalls?",
            ["Only faster packet processing", "Application awareness and deep packet inspection",
             "No limitations whatsoever", "Physical device blocking"], 2,
            None, {1:["Speed isn't the defining feature of next-gen."],3:["All firewalls have limitations. Next-gen still cannot see all encrypted content perfectly."],4:["Physical blocking is not a firewall capability."]},
            "Slide 11: Next-gen 'adds application awareness and deep packet inspection' and 'detects malware, blocks applications.'")
        self.ms(); self.sc(q3)

        q4 = ask("Which is a limitation of firewalls?",
            ["They are too expensive", "Cannot detect attacks in allowed traffic and are blind to encrypted payloads",
             "They block all internet traffic", "They require daily reboots"], 2,
            None, {1:["Cost is not mentioned as a limitation in the lecture."],3:["Firewalls selectively allow traffic based on rules, not block everything."],4:["Reboot requirements are not mentioned."]},
            "Slide 8: Limitations include 'cannot detect attacks in allowed traffic' and 'blind to encrypted payload content.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l3(self):
        explain_concept("Preventive: NAC & Segmentation", [
            "NAC (Network Access Control): controls which devices may join the network.",
            "Requires authentication BEFORE granting access.",
            "Distinguishes trusted vs untrusted endpoints.",
            "Reduces risk from rogue or unmanaged devices.",
            "",
            "Network Segmentation: divides network into isolated zones.",
            "Limits lateral movement after compromise.",
            "Reduces blast radius of attacks.",
            "Effectiveness depends on correct design."
        ])
        q1 = ask("Which mechanism controls which devices may join a network and requires authentication before granting access?",
            ["Firewall", "Network Access Control (NAC)", "Intrusion Detection System", "SIEM"], 2,
            None, {1:["Firewalls filter traffic but don't control which devices join the network."],3:["IDS detects suspicious activity, it doesn't authenticate devices before access."],4:["SIEM correlates events across systems, it doesn't control network admission."]},
            "Slide 12: NAC 'controls which devices may join the network' and 'requires authentication before granting access.'")
        self.ms(); self.sc(q1)

        q2 = ask("A company divides its network into separate zones so that if one zone is compromised, the attacker cannot easily move to other zones. What defense concept is this?",
            ["Firewall filtering", "Network Segmentation", "Data encryption", "Load balancing"], 2,
            None, {1:["Firewall filtering controls traffic but doesn't create isolated zones by itself."],3:["Encryption protects data, it doesn't isolate network zones."],4:["Load balancing distributes traffic, it doesn't limit lateral movement."]},
            "Slide 14: Segmentation 'divides the network into isolated zones' and 'limits lateral movement after compromise.'")
        self.ms(); self.sc(q2)

        q3 = ask("What does 'blast radius' mean in the context of network segmentation?",
            ["The physical size of the network", "The extent of damage if one zone is compromised",
             "The speed of network traffic", "The encryption strength"], 2,
            None, {1:["Blast radius is not physical size."],3:["Not related to traffic speed."],4:["Not related to encryption."]},
            "Slide 14: Segmentation 'reduces the blast radius of attacks' — meaning it limits how far damage can spread.")
        self.ms(); self.sc(q3)
        return q1 and q2 and q3

    def l4(self):
        explain_concept("Protective Mechanisms: Encryption & VPNs", [
            "PROTECTIVE mechanisms protect data and communications.",
            "They do NOT block traffic — they focus on confidentiality and integrity.",
            "Often transparent to users.",
            "",
            "ENCRYPTION protects data in transit from eavesdropping.",
            "Critical against interception and MITM (Man-in-the-Middle) attacks.",
            "",
            "VPN (Virtual Private Network) creates secure tunnels over untrusted networks.",
            "VPN Types:",
            "  • Site-to-Site: connects entire networks (branch ↔ HQ), uses IPsec, users unaware.",
            "  • Remote Access: connects individual users to private network, requires client software.",
            "  • Cloud Remote Access: cloud-hosted gateways, integrated with SSO/MFA.",
            "  • SSL VPN: uses TLS/SSL (HTTPS), browser-based, easier deploy, app-level access only.",
            "  • Multi-hop: routes through 2+ servers, layered encryption, higher latency.",
            "VPN Limitations: can extend trust to compromised endpoints, does not inspect internal traffic."
        ])
        q1 = ask("Which defense mechanism category focuses on confidentiality and integrity but does NOT block traffic?",
            ["Preventive", "Detective", "Protective", "Resilience"], 3,
            None, {1:["Preventive blocks or restricts communication."],2:["Detective observes and analyzes behavior."],4:["Resilience maintains availability."]},
            "Slide 15: Protective mechanisms 'protect data and communications,' 'do not block traffic,' and 'focus on confidentiality and integrity.'")
        self.ms(); self.sc(q1)

        q2 = ask("A company connects its branch office network to headquarters so employees at the branch can access internal servers transparently without knowing a VPN exists. What type of VPN is this?",
            ["Remote Access VPN", "Site-to-Site VPN", "SSL VPN", "Multi-hop VPN"], 2,
            None, {1:["Remote Access connects individual users, not entire networks."],3:["SSL VPN is browser-based and limited to app-level access."],4:["Multi-hop routes through multiple servers for anonymity."]},
            "Slide 19: Site-to-Site 'connects entire networks transparently' and 'users are unaware of the tunnel.'")
        self.ms(); self.sc(q2)

        q3 = ask("A traveling employee connects their laptop to the company network from a hotel using client software. What type of VPN is this?",
            ["Site-to-Site VPN", "Remote Access VPN", "SSL VPN", "Multi-hop VPN"], 2,
            None, {1:["Site-to-Site connects branch offices, not individual travelers."],3:["SSL VPN uses a browser, not necessarily client software."],4:["Multi-hop is for anonymity, not standard remote work."]},
            "Slide 20: Remote Access VPN 'connects individual users/devices to a private network' and 'requires client software.'")
        self.ms(); self.sc(q3)

        q4 = ask("An employee accesses company email through a web browser without installing any VPN software. The connection uses HTTPS. What type of VPN is this?",
            ["IPsec VPN", "Remote Access VPN", "SSL VPN", "Site-to-Site VPN"], 3,
            None, {1:["IPsec requires dedicated client/software configuration."],2:["Remote Access typically requires client software."],4:["Site-to-Site connects entire networks, not individual browser access."]},
            "Slide 22: SSL VPN 'uses TLS/SSL (HTTPS)' and is 'accessible via web browser' with 'no complex network configuration.'")
        self.ms(); self.sc(q4)

        q5 = ask("A user routes their traffic through two VPN servers in different countries to make it harder to trace their activity. What type is this?",
            ["Site-to-Site VPN", "Remote Access VPN", "SSL VPN", "Multi-hop VPN"], 4,
            None, {1:["Site-to-Site connects corporate networks."],2:["Remote Access connects one user to one network."],3:["SSL VPN is browser-based for simple access."]},
            "Slide 23: Multi-hop VPN 'routes traffic through two (or more) VPN servers sequentially' for 'layered encryption and anonymity.'")
        self.ms(); self.sc(q5)

        q6 = ask("Which is a limitation of VPNs?",
            ["They make internet connections faster", "They can extend trust to compromised endpoints and do not inspect internal traffic",
             "They prevent all types of cyber attacks", "They are only used for illegal activities"], 2,
            None, {1:["VPNs typically add latency, not speed."],3:["VPNs don't prevent all attacks — they secure the tunnel only."],4:["VPNs have legitimate business uses like remote work."]},
            "Slide 18: VPN limitations include 'can extend trust to compromised endpoints' and 'does not inspect internal traffic.'")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l5(self):
        explain_concept("Detective Mechanisms: IDS, IPS & Monitoring", [
            "DETECTIVE mechanisms observe and analyze network behavior.",
            "They identify suspicious or malicious activity.",
            "They typically operate AFTER access is granted.",
            "",
            "NETWORK MONITORING collects traffic, flow data, or metadata.",
            "Limitation: visibility alone does not equal detection.",
            "",
            "IDS (Intrusion Detection System): analyzes traffic for known/anomalous patterns.",
            "Methods: signature-based (known patterns) or behavior-based (anomalies).",
            "Generates alerts but does NOT automatically stop attacks.",
            "",
            "IPS (Intrusion Prevention System): actively BLOCKS detected malicious traffic.",
            "Combines detection with enforcement.",
            "Limitation: false positives may disrupt legitimate services."
        ])
        q1 = ask("A system collects all network traffic and flow data to provide visibility into what is happening on the network. However, it does not automatically detect threats. What is this?",
            ["IDS", "IPS", "Network Monitoring", "Firewall"], 3,
            None, {1:["IDS analyzes traffic and generates alerts."],2:["IPS actively blocks traffic."],4:["Firewalls filter traffic based on rules."]},
            "Slide 25: Network Monitoring 'collects traffic, flow data, or metadata' but 'visibility alone does not equal detection.'")
        self.ms(); self.sc(q1)

        q2 = ask("An Intrusion Detection System (IDS) analyzes traffic and generates alerts when it sees suspicious patterns. However, it does NOT:",
            ["Use signature-based detection", "Use behavior-based detection", "Automatically stop attacks", "Generate alerts"], 3,
            None, {1:["IDS DOES use signature-based methods."],2:["IDS DOES use behavior-based methods."],4:["IDS DOES generate alerts."]},
            "Slide 26: IDS 'does not automatically stop attacks' — it only detects and alerts.")
        self.ms(); self.sc(q2)

        q3 = ask("What is the key difference between IDS and IPS?",
            ["IDS detects threats; IPS actively blocks malicious traffic",
             "IDS is cheaper than IPS", "IDS uses signatures; IPS uses behavior analysis",
             "IDS is hardware; IPS is software"], 1,
            None, {2:["Cost is not the defining difference in the lecture."],3:["Both can use signatures and behavior analysis."],4:["Both can be hardware or software."]},
            "Slide 27: IPS 'actively block detected malicious traffic' and 'combine detection with enforcement.' IDS only alerts.")
        self.ms(); self.sc(q3)

        q4 = ask("An IPS blocks traffic that matches known attack signatures. What is its main limitation?",
            ["It cannot detect any threats", "False positives may disrupt legitimate services",
             "It only works on wired networks", "It encrypts all traffic"], 2,
            None, {1:["IPS detects AND blocks known threats."],3:["IPS works on both wired and wireless."],4:["IPS doesn't encrypt traffic — that's a protective mechanism."]},
            "Slide 27: IPS limitation is 'false positives may disrupt services.'")
        self.ms(); self.sc(q4)

        q5 = ask("A detective mechanism operates after access is granted to identify stealthy threats. This describes:",
            ["Preventive mechanism", "Detective mechanism", "Protective mechanism", "Resilience mechanism"], 2,
            None, {1:["Preventive acts BEFORE or AT the point of access."],3:["Protective secures data in transit, not behavior after access."],4:["Resilience maintains availability during attacks."]},
            "Slide 24: Detective mechanisms 'typically operate after access is granted' and are 'essential for detecting stealthy threats.'")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l6(self):
        explain_concept("Detective: SIEM", [
            "SIEM (Security Information and Event Management): aggregates, correlates, and analyzes security events across systems.",
            "Core functions:",
            "  • Log Collection: from network devices, servers, apps, auth systems.",
            "  • Normalization: converts logs into common format.",
            "  • Correlation: links events across multiple sources.",
            "  • Alerting: detects suspicious patterns.",
            "",
            "Strengths: centralized visibility, correlation of distributed events, supports forensic analysis.",
            "Limitations:",
            "  • Depends on log quality and coverage.",
            "  • Cannot detect what is not logged.",
            "  • High false positives/negatives.",
            "  • Limited visibility into encrypted traffic.",
            "  • Requires human analysis.",
            "",
            "Comparison:",
            "  • Firewall: controls traffic based on rules.",
            "  • IDS/IPS: detects or blocks known threats.",
            "  • SIEM: correlates events across systems (complements, not replaces others)."
        ])
        q1 = ask("A SIEM system collects logs from firewalls, servers, authentication systems, and applications, then converts them into a common format to find patterns across all systems. What SIEM function is 'converting logs into a common format'?",
            ["Log Collection", "Normalization", "Correlation", "Alerting"], 2,
            None, {1:["Collection = gathering logs from sources."],3:["Correlation = linking events across sources."],4:["Alerting = notifying when suspicious patterns are found."]},
            "Slide 29: Normalization is 'convert logs into a common format.'")
        self.ms(); self.sc(q1)

        q2 = ask("A SIEM links a failed login from a VPN, an unusual file access from a server, and a firewall alert from the same IP address into a single suspicious incident. What SIEM function is this?",
            ["Log Collection", "Normalization", "Correlation", "Alerting"], 3,
            None, {1:["Collection just gathers the logs."],2:["Normalization formats the logs."],4:["Alerting would notify after correlation finds the pattern."]},
            "Slide 29: Correlation is 'link events across multiple sources.'")
        self.ms(); self.sc(q2)

        q3 = ask("Which is a limitation of SIEM?",
            ["It replaces firewalls and IDS completely", "It cannot detect what is not logged and depends on log quality",
             "It automatically blocks all attacks", "It only works for small networks"], 2,
            None, {1:["Slide 31: SIEM 'complements — not replaces — other defenses.'"],3:["SIEM detects and alerts; it does not block."],4:["SIEM works for networks of all sizes."]},
            "Slide 30: Limitations include 'depends on log quality and coverage' and 'cannot detect what is not logged.'")
        self.ms(); self.sc(q3)

        q4 = ask("Which defense mechanism is described as 'correlates events across systems'?",
            ["Firewall", "IDS/IPS", "SIEM", "VPN"], 3,
            None, {1:["Firewall controls traffic based on rules."],2:["IDS/IPS detects or blocks known threats."],4:["VPN creates secure tunnels."]},
            "Slide 31: SIEM 'correlates events across systems.' Firewall controls, IDS/IPS detects/blocks.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l7(self):
        explain_concept("Resilience & Availability Mechanisms", [
            "RESILIENCE mechanisms focus on maintaining availability.",
            "They ASSUME attacks will occur.",
            "They reduce impact rather than prevent attacks.",
            "Critical for public-facing services.",
            "",
            "DoS/DDoS Mitigation:",
            "  • Protects services against traffic floods.",
            "  • Manages excessive or malicious traffic.",
            "  • Relies on scale, filtering, or distribution.",
            "  • Limitation: cannot fully prevent large-scale attacks.",
            "",
            "Rate Limiting & Traffic Shaping:",
            "  • Restrict abusive or excessive requests.",
            "  • Protect application and system resources.",
            "  • Effective against low-rate attacks.",
            "  • Simple but powerful.",
            "  • May impact legitimate users."
        ])
        q1 = ask("Which defense mechanism category assumes attacks will occur and focuses on reducing their impact rather than preventing them?",
            ["Preventive", "Detective", "Protective", "Resilience and Availability"], 4,
            None, {1:["Preventive tries to block before access."],2:["Detective observes after access."],3:["Protective secures data in transit."]},
            "Slide 32: Resilience mechanisms 'assume attacks will occur' and 'reduce impact rather than prevent attacks.'")
        self.ms(); self.sc(q1)

        q2 = ask("A university's online registration system is flooded with millions of fake requests during enrollment, making it unavailable for real students. Which defense mechanism is designed to handle this?",
            ["Network Segmentation", "DoS and DDoS Mitigation", "Network Access Control", "Encryption"], 2,
            None, {1:["Segmentation isolates zones but doesn't handle traffic floods."],3:["NAC controls device access, not traffic volume."],4:["Encryption protects data, not availability."]},
            "Slide 33: DoS/DDoS mitigation 'protects services against traffic floods' and 'manages excessive or malicious traffic.'")
        self.ms(); self.sc(q2)

        q3 = ask("An API starts rejecting requests from a single IP after it sends 100 requests per minute, while still allowing normal users. What mechanism is this?",
            ["Firewall", "Rate Limiting", "Network Segmentation", "VPN"], 2,
            None, {1:["Firewalls filter based on rules, not request frequency."],3:["Segmentation divides networks, not request rates."],4:["VPNs secure tunnels, not API request rates."]},
            "Slide 34: Rate limiting 'restricts abusive or excessive requests' and 'protects application and system resources.'")
        self.ms(); self.sc(q3)

        q4 = ask("Which is a limitation of DoS/DDoS mitigation?",
            ["It prevents all attacks completely", "It cannot fully prevent large-scale attacks",
             "It only works for small websites", "It encrypts all network traffic"], 2,
            None, {1:["The slide explicitly says it cannot fully prevent large-scale attacks."],3:["It works for platforms of all sizes."],4:["Encryption is a protective mechanism, not resilience."]},
            "Slide 33: Limitation is 'cannot fully prevent large-scale attacks.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l8(self):
        explain_concept("Final Review: All Module 3 Concepts", [
            "4 defense categories: Preventive (blocks), Protective (encrypts/secures), Detective (observes), Resilience (maintains availability).",
            "Firewalls: packet-filtering, stateful, next-gen. Limitations: allowed traffic, encrypted payloads.",
            "NAC: authenticates devices before network access.",
            "Segmentation: isolates zones, limits lateral movement.",
            "VPNs: Site-to-Site, Remote Access, Cloud, SSL, Multi-hop. Limitations: compromised endpoints, no internal inspection.",
            "IDS vs IPS: IDS detects and alerts; IPS detects and blocks.",
            "SIEM: aggregates, normalizes, correlates, alerts. Limitations: log dependency, false positives, encrypted traffic blind spots.",
            "Resilience: DoS mitigation, rate limiting. Limitations: can't fully prevent large attacks, may impact legitimate users."
        ])
        q1 = ask("A packet-filtering firewall is fast but cannot inspect the actual content of packets. A next-generation firewall can see applications and malware inside packets. What capability makes this possible?",
            ["Connection tracking", "Deep packet inspection", "Network segmentation", "Rate limiting"], 2,
            None, {1:["Connection tracking = stateful firewall feature."],3:["Segmentation divides networks."],4:["Rate limiting restricts request frequency."]},
            "Slide 11: Next-gen firewalls add 'deep packet inspection' and 'application awareness.'")
        self.ms(); self.sc(q1)

        q2 = ask("Complete the comparison: A firewall controls traffic based on rules, an IDS/IPS detects or blocks known threats, and a SIEM:",
            ["Encrypts all network traffic", "Correlates events across systems",
             "Replaces all other defenses", "Physically blocks devices from joining"], 2,
            None, {1:["Encryption is a protective mechanism."],3:["SIEM complements, not replaces, other defenses."],4:["NAC controls device admission, not SIEM."]},
            "Slide 31: SIEM 'correlates events across systems.'")
        self.ms(); self.sc(q2)

        q3 = ask("A company wants to ensure that if a workstation in the finance department is compromised, the attacker cannot easily reach engineering servers. Which two mechanisms work together best for this?",
            ["Firewall and VPN", "Network Segmentation and NAC",
             "IDS and SIEM", "Rate limiting and encryption"], 2,
            None, {1:["Firewalls filter traffic; VPNs secure remote access. Neither isolates departments."],3:["IDS and SIEM detect threats but don't isolate network zones."],4:["Rate limiting handles request volume; encryption protects data. Neither isolates departments."]},
            "Segmentation isolates departments. NAC ensures only trusted devices enter each segment.")
        self.ms(); self.sc(q3)

        q4 = ask("An organization can see all traffic passing through its network, but encrypted HTTPS traffic appears as unreadable data. Which defense mechanism is most affected by this encryption blind spot?",
            ["Firewall", "IDS/IPS", "SIEM", "All of the above"], 4,
            None,
            {1:["Firewalls can still filter by IP/port even with encrypted payloads."],2:["IDS/IPS can still detect some patterns in metadata, though payload is hidden."],3:["SIEM is affected, but the question asks about ALL mechanisms."]},
            "Slide 8 says firewalls are 'blind to encrypted payload content.' Slide 30 says SIEM has 'limited visibility into encrypted traffic.' IDS/IPS also struggle with encrypted payloads.")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

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
        print("\nYou have mastered Module 3: Cybersecurity Defense!")
        print("   • Defense categories: Preventive, Protective, Detective, Resilience")
        print("   • Firewalls: packet-filtering, stateful, next-gen")
        print("   • NAC & Network Segmentation")
        print("   • VPNs: Site-to-Site, Remote Access, Cloud, SSL, Multi-hop")
        print("   • IDS vs IPS")
        print("   • SIEM: log collection, normalization, correlation, alerting")
        print("   • Resilience: DoS/DDoS mitigation, rate limiting")
        print("\n🎓 Ready for Module 4?")

    def game_over(self):
        print("\n" + "="*60)
        print("   💀  GAME OVER  💀")
        print("="*60)
        print(f"Completed {len(self.completed)} of 8 levels.")
        print(f"Score: {self.score} / {self.max_score}")
        print("Review the concepts and try again.")

if __name__ == "__main__":
    Game().start()
