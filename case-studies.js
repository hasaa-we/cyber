const caseStudiesData = [
  {
    id: 1,
    title: "Case Study 1: Financial Services Data Breach",
    subtitle: "Compromised Credentials & Lateral Movement",
    scenario: `A regional credit union operates a hybrid infrastructure integrating:
• Customer financial database with account balances and transaction history
• Web banking portal for customer access
• Internal admin dashboard for employee account management
• Email servers with customer communication logs

The infrastructure includes:
• VPN access for remote employees with username/password authentication
• Optional two-factor authentication (not enforced)
• Shared service accounts for system maintenance
• Network segmentation between customer and admin zones
• Encryption for data in transit`,
    incidents: [
      "An employee receives a convincing phishing email claiming to be from HR with a policy update link",
      "Employee's credentials are stolen; attacker logs in to VPN from multiple locations without triggering alerts",
      "Attacker discovers shared admin credentials in a forgotten Excel file on a network share",
      "Using shared account, attacker accesses internal admin dashboard and exports customer database",
      "Late-night data transfers occur - encryption blinds network monitoring from detecting the breach",
      "One week later: Customer data appears on dark web forums",
      "Investigation reveals no malware, no exploits, only legitimate credentials used"
    ],
    questions: [
      {
        question: "What was the primary high-value asset targeted in this breach?",
        options: [
          "The employee's VPN account",
          "Customer financial data and account information",
          "The admin dashboard interface",
          "The email server infrastructure"
        ],
        correct: 1,
        wrongExplanations: {
          0: "While the employee account was compromised, it was a means to an end.",
          2: "The dashboard was a tool; the actual target was the data it contained.",
          3: "Email was not the target of data theft."
        },
        hint: "What data would have the highest monetary/reputational value if leaked?",
        explanationBefore: "Consider what data would be most valuable to a financial attacker."
      },
      {
        question: "Which attack surface element was initially exploited?",
        options: [
          "The customer web portal login",
          "Network segmentation between zones",
          "Employee email and VPN authentication",
          "The encryption protocol used"
        ],
        correct: 2,
        wrongExplanations: {
          0: "This wasn't the entry point; the employee account was.",
          1: "Segmentation was bypassed, not directly exploited.",
          3: "Encryption doesn't prevent credential theft via phishing."
        },
        hint: "Where did the attack chain begin?",
        explanationBefore: "The initial compromise point is critical in understanding the attack chain."
      },
      {
        question: "The absence of failed login attempts in the logs suggests what?",
        options: [
          "The attacker never tried to access the system",
          "Network monitoring was completely disabled",
          "The attacker had legitimate credentials (phishing success or credential stuffing)",
          "The VPN server was malfunctioning"
        ],
        correct: 2,
        wrongExplanations: {
          0: "The attacker clearly accessed the system successfully.",
          1: "Monitoring was active; it just showed legitimate traffic.",
          3: "The VPN worked fine with valid credentials."
        },
        hint: "Why would legitimate access attempts never fail?",
        explanationBefore: "When accounts are accessed with valid credentials, login attempts succeed naturally."
      },
      {
        question: "Which trust assumption was most critically violated?",
        options: [
          "That the network encryption would prevent access",
          "That a valid VPN login means a legitimate employee is connecting",
          "That shared accounts reduce administrative workload",
          "That encryption hides the type of data being transferred"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Encryption doesn't prevent credential compromise.",
          2: "This wasn't an assumption, but a known practice.",
          3: "While true, it's not the critical trust violation."
        },
        hint: "What did the system trust about anyone presenting valid credentials?",
        explanationBefore: "Trust assumptions are what allow systems to function; they're also vulnerabilities when wrong."
      },
      {
        question: "The shared service account enabled the attacker to accomplish what?",
        options: [
          "Encrypt the data being transferred",
          "Escalate privileges and access the customer database without unique attribution",
          "Disable the VPN encryption",
          "Modify the network segmentation rules"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Encryption doesn't require admin accounts.",
          2: "Disabling encryption wasn't the goal.",
          3: "Segmentation rules wouldn't be modified; lateral movement was within the allowed path."
        },
        hint: "What does a shared admin account allow beyond a regular employee account?",
        explanationBefore: "Shared accounts break accountability and enable privilege escalation attacks."
      },
      {
        question: "Why would network segmentation have prevented or limited this breach?",
        options: [
          "It would block the initial phishing email",
          "It would have prevented the shared account from accessing the customer database",
          "It would have encrypted the data automatically",
          "It would have alerted the employee of the compromise"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Segmentation doesn't filter emails.",
          2: "Segmentation and encryption are separate controls.",
          3: "Segmentation provides technical barriers, not alerts."
        },
        hint: "What does segmentation prevent between network zones?",
        explanationBefore: "Network segmentation restricts lateral movement between different trust zones."
      },
      {
        question: "Describe the adversary model for this attack.",
        options: [
          "A disgruntled insider with privileged access",
          "An external attacker with stolen credentials and knowledge of internal systems",
          "A software vulnerability exploited remotely",
          "A malware infection in the network backbone"
        ],
        correct: 1,
        wrongExplanations: {
          0: "The attacker was external, not an insider.",
          2: "No software vulnerabilities were needed.",
          3: "Malware wasn't part of this attack."
        },
        hint: "Who performed the attack and what resources did they have?",
        explanationBefore: "Understanding the threat actor's profile helps predict and prevent similar attacks."
      },
      {
        question: "Which of the following violated the least privilege principle?",
        options: [
          "Employees having VPN access to work remotely",
          "Shared admin service accounts used for system maintenance",
          "Customers having access to their own account data",
          "Employees accessing email for communications"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Remote access is necessary for modern work.",
          2: "Customers need access to their own data.",
          3: "Email access is job-essential."
        },
        hint: "Which practice gives more access than is needed for any single user's job?",
        explanationBefore: "Least privilege means each account has only the access required for its function."
      },
      {
        question: "Open-ended: Reconstruct the complete attack chain from phishing to data theft.",
        options: [
          "Phishing → Employee clicks link → Password stolen → VPN login from outside → Lateral movement via shared account → Admin dashboard access → Customer database export → Encrypted transfer → Sale on dark web",
          "Phishing → Network intrusion → Firewall bypass → Database compromise → Data sale",
          "Email infection → Malware installation → Credential harvesting → Database theft",
          "Direct SQL injection → Database compromise → Data export"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Oversimplified; doesn't capture the credential theft and lateral movement steps.",
          2: "Malware wasn't involved in this attack.",
          3: "No SQL injection vulnerability was exploited."
        },
        hint: "Track each step: how did they get in, escalate, and exfiltrate?",
        explanationBefore: "Attack chains show how multiple vulnerabilities combine for impact."
      },
      {
        question: "Which of these trust assumptions should have been questioned by the credit union?",
        options: [
          "Valid credentials = legitimate employee",
          "Shared accounts are acceptable for convenience",
          "Encryption on data in transit prevents exfiltration",
          "Optional MFA means employees can choose security",
          "All of the above"
        ],
        correct: 4,
        wrongExplanations: {
          0: "This is one, but there are more.",
          1: "This is one, but there are more.",
          2: "This is one, but there are more.",
          3: "This is one, but there are more."
        },
        hint: "Think about what assumptions each control and practice makes.",
        explanationBefore: "Security is most effective when dangerous assumptions are explicitly identified and addressed."
      }
    ]
  },

  {
    id: 2,
    title: "Case Study 2: E-Commerce Platform Compromise",
    subtitle: "Payment Processing & PCI-DSS Violation",
    scenario: `An online retail company processes orders for 50,000 customers daily, including:
• Web storefront with shopping cart and checkout
• Payment processing via third-party gateway (cryptographically protected)
• Customer database with purchase history and shipping addresses
• Email notification system for order confirmations
• Admin backend for order management and refunds

Infrastructure includes:
• HTTPS/TLS encryption for customer connections
• PCI-DSS compliance certification
• Web Application Firewall (WAF) blocking known attack patterns
• Regular security audits and penetration testing
• Separated payment processing (tokenization used)`,
    incidents: [
      "Security researcher discovers a persistent XSS vulnerability in the product review section",
      "The WAF allows this because it's in a 'display' context, not a 'data input' context",
      "Attacker injects malicious JavaScript that steals session cookies from other customers",
      "Customer session cookies are harvested and used to access accounts without credentials",
      "Using stolen sessions, orders are placed and customer email is changed to attacker's",
      "Refunds are requested to attacker email addresses; payment tokens can be replayed for new orders",
      "Investigation reveals 2,000+ customers affected with $500,000 in fraudulent transactions"
    ],
    questions: [
      {
        question: "Why did the WAF not block the XSS vulnerability?",
        options: [
          "The WAF was misconfigured",
          "XSS in display contexts is not considered dangerous",
          "The WAF was not checking product review inputs properly",
          "XSS attack patterns are impossible to detect"
        ],
        correct: 2,
        wrongExplanations: {
          0: "It was configured correctly for its intended scope.",
          1: "All XSS is dangerous; context matters less than execution.",
          3: "They're detectable, but this one bypassed the patterns."
        },
        hint: "What context did the WAF not properly protect?",
        explanationBefore: "WAFs have blind spots; output encoding is as important as input validation."
      },
      {
        question: "How did the attacker escalate from stealing cookies to fraudulent transactions?",
        options: [
          "By cracking payment gateway encryption",
          "By using stolen session cookies to impersonate customers and change account details",
          "By directly modifying the database",
          "By exploiting a SQL injection vulnerability"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Encryption prevents this; cookies were the key.",
          2: "Session hijacking didn't require database access.",
          3: "No SQL injection was mentioned."
        },
        hint: "What authenticated access did the session cookie provide?",
        explanationBefore: "Session management is critical; stolen sessions = account compromise."
      },
      {
        question: "Why was the payment processing not directly compromised?",
        options: [
          "The attacker didn't attempt to steal payment card data",
          "Tokenization and separation meant payment tokens were handled securely",
          "PCI-DSS compliance prevented the attack",
          "HTTPS encryption protected the payment gateway"
        ],
        correct: 1,
        wrongExplanations: {
          0: "The attacker tried to use payment tokens.",
          2: "PCI-DSS didn't prevent the XSS attack on the web platform.",
          3: "HTTPS encrypts transmission but not tokens in transit."
        },
        hint: "What architectural decision limited the damage to fraudulent orders rather than direct card theft?",
        explanationBefore: "Tokenization is a defense: the web app never sees actual payment card data."
      },
      {
        question: "The attacker's ability to change customer email addresses was critical because:",
        options: [
          "It allowed phishing of other customers",
          "It prevented customers from receiving refund notifications, enabling fraud to continue undetected",
          "It locked customers out of their accounts",
          "It exposed the database to further attacks"
        ],
        correct: 1,
        wrongExplanations: {
          0: "While possible, this wasn't the immediate impact.",
          2: "Email change didn't lock anyone out.",
          3: "Changing email is not a database exposure."
        },
        hint: "What detection mechanism did changing the email bypass?",
        explanationBefore: "Altering notification channels is a classic tactic to hide fraudulent activity."
      },
      {
        question: "What assumption about web application security did this case violate?",
        options: [
          "That WAF protection is sufficient for XSS prevention",
          "That PCI-DSS certification means the platform is secure",
          "That regular penetration tests will find all vulnerabilities",
          "All of the above"
        ],
        correct: 3,
        wrongExplanations: {
          0: "This is one, but others apply too.",
          1: "This is one, but others apply too.",
          2: "This is one, but others apply too."
        },
        hint: "What false sense of security did each control provide?",
        explanationBefore: "No single control is perfect; defense in depth requires multiple overlapping protections."
      },
      {
        question: "How should output encoding have prevented this attack?",
        options: [
          "By encrypting the review text before displaying it",
          "By escaping HTML/JavaScript characters so malicious code becomes harmless text",
          "By validating review content against a whitelist",
          "By preventing customers from leaving reviews"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Encryption would still decode malicious content in the browser.",
          2: "Whitelisting is too restrictive for user reviews.",
          3: "Users need to review products."
        },
        hint: "What encoding converts `<script>` into displayable text instead of executable code?",
        explanationBefore: "XSS prevention requires both input validation AND output encoding."
      },
      {
        question: "Open-ended: Design a defense-in-depth approach to prevent this specific attack.",
        options: [
          "Input validation on review text + Output encoding on display + CSP headers + Session timeout + Email change notifications + IP-based anomaly detection",
          "Use only input validation to block malicious reviews",
          "Enable WAF and assume protection is complete",
          "Replace customer sessions with OAuth tokens"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Single layer of defense is insufficient.",
          2: "WAF alone is not enough.",
          3: "OAuth is helpful but doesn't address XSS itself."
        },
        hint: "Think about multiple layers: input, output, runtime, behavioral, and notification.",
        explanationBefore: "Defense in depth means redundancy: multiple controls catch what others miss."
      }
    ]
  },

  {
    id: 3,
    title: "Case Study 3: Cloud Infrastructure Misconfiguration",
    subtitle: "Public Data Exposure & Access Control",
    scenario: `A SaaS analytics company hosts customer data in cloud storage buckets, processing:
• Raw customer data uploaded by clients (CRM records, sales data, employee lists)
• Processed analytics reports with insights
• Machine learning model training data
• Backup snapshots of customer databases

Cloud setup includes:
• Cloud storage buckets for each customer
• Bucket-level access controls and encryption
• IAM roles for different teams (engineers, analysts, support)
• Automated backup scheduling
• CloudTrail logging for audit purposes`,
    incidents: [
      "A new DevOps engineer is onboarded with broad permissions to manage infrastructure",
      "During testing, they create a temporary bucket to experiment with backup configuration",
      "Due to default cloud settings, the bucket is created as publicly readable",
      "The engineer forgets to delete the test bucket and closes their ticket",
      "Over 6 months, this bucket accumulates backup snapshots due to automated processes",
      "An attacker discovers the bucket via web search (AWS S3 bucket naming is guessable)",
      "The attacker downloads 3 years of backup data from 50+ enterprise customers"
    ],
    questions: [
      {
        question: "What was the root cause of this exposure?",
        options: [
          "The cloud provider's encryption was broken",
          "The engineer intentionally leaked data",
          "Default security settings allowed public access without explicit restriction",
          "The firewall was misconfigured"
        ],
        correct: 2,
        wrongExplanations: {
          0: "Encryption was fine; the bucket itself was public.",
          1: "This was accidental, not intentional.",
          3: "Firewalls don't apply to cloud storage public access."
        },
        hint: "What assumption did the engineer make about default security settings?",
        explanationBefore: "Cloud defaults are often 'open' to simplify initial setup; they must be explicitly secured."
      },
      {
        question: "Why did CloudTrail logging not prevent this breach?",
        options: [
          "CloudTrail was disabled",
          "Logging records activity but does not prevent it; someone must act on the logs",
          "CloudTrail only works for API calls, not for actual data downloads",
          "The attacker disabled logging before downloading"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Logging was enabled.",
          2: "It logs all API calls, including data access.",
          3: "Attacker didn't have credentials to disable logging."
        },
        hint: "What's the difference between detective and preventive controls?",
        explanationBefore: "Logging is detective (finds problems after they occur); it needs preventive controls too."
      },
      {
        question: "What principle of least privilege was violated?",
        options: [
          "The new engineer had write permissions to create buckets",
          "The new engineer had read permissions on customer data",
          "The new engineer had delete permissions for their own resources",
          "All of the above"
        ],
        correct: 3,
        wrongExplanations: {
          0: "This is true, but not complete.",
          1: "This is true, but not complete.",
          2: "This is true, but not complete."
        },
        hint: "A new DevOps engineer should only have access to specific resources, not all infrastructure.",
        explanationBefore: "Least privilege means each role gets minimum necessary access, not blanket permissions."
      },
      {
        question: "Why were automated backups a problem in this scenario?",
        options: [
          "Backups themselves are insecure",
          "They continued feeding data into an unprotected bucket that was forgotten",
          "Encryption doesn't apply to backups",
          "Backups were stored unencrypted"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Backups are essential; the issue was access control.",
          2: "Encryption does apply; the bucket itself was public.",
          3: "Encryption was applied; the bucket permissions were the issue."
        },
        hint: "The bucket was forgotten, but processes continued. What kept adding data?",
        explanationBefore: "Automated processes running against misconfigured resources compound the problem."
      },
      {
        question: "What detection methods might have caught this earlier?",
        options: [
          "Monitoring for public buckets in cloud infrastructure scans",
          "Regular access control audits of all buckets and their permissions",
          "Alerts on unusual data access patterns",
          "All of the above"
        ],
        correct: 3,
        wrongExplanations: {
          0: "This would help, but other methods are also critical.",
          1: "This would help, but other methods are also critical.",
          2: "This would help, but other methods are also critical."
        },
        hint: "What types of continuous monitoring and auditing would detect misconfigurations?",
        explanationBefore: "Detection relies on multiple monitoring techniques working together."
      },
      {
        question: "Which access control model could have prevented this?",
        options: [
          "Using role-based access control (RBAC) with restricted roles",
          "Requiring explicit whitelist approval for public bucket creation",
          "Disabling bucket creation permissions for DevOps engineers",
          "Both A and B"
        ],
        correct: 3,
        wrongExplanations: {
          0: "This helps but may be too permissive.",
          1: "This would catch it but might be cumbersome.",
          2: "This would prevent it but is too restrictive."
        },
        hint: "How could both access control AND policy enforcement have helped?",
        explanationBefore: "Multiple layers: role definition AND policy enforcement AND audit checks."
      },
      {
        question: "Open-ended: Design a cloud governance framework to prevent similar incidents.",
        options: [
          "Disable all cloud storage buckets by default + IAM roles with bucket-level restrictions + automatic public bucket detection + regular access audits + enforce encryption + alert on new public buckets",
          "Use only private buckets and block all public access",
          "Disable employee access and use only administrator accounts",
          "Hire external security firm to manage all cloud resources"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Good but missing proactive controls.",
          2: "Impractical and removes development agility.",
          3: "External management doesn't solve architectural issues."
        },
        hint: "Think about preventive (blocking), detective (finding), and responsive controls.",
        explanationBefore: "Cloud governance combines roles, policies, automation, and human oversight."
      }
    ]
  },

  {
    id: 4,
    title: "Case Study 4: Ransomware Through Unpatched VPN",
    subtitle: "Vulnerability Exploitation & Encryption Attack",
    scenario: `A manufacturing company operates critical production systems with:
• Industrial control systems (ICS) managing assembly lines
• Network of Windows servers running manufacturing software
• VPN appliance for remote technician support (used globally)
• Email systems and document storage
• Backup servers with full system images

The infrastructure includes:
• Annual security patches applied
• Network segmentation between ICS and corporate networks
• Standard antivirus on workstations
• Encrypted offsite backup storage
• Network-based intrusion detection`,
    incidents: [
      "Vendor releases critical security patch for VPN appliance (CVE with active exploits in the wild)",
      "Manufacturing company's change management process delays patch until 'quarterly maintenance window'",
      "Attacker scans the internet for unpatched VPN appliances matching the vulnerable version",
      "Attacker exploits the vulnerability to gain access to the VPN gateway",
      "From VPN, attacker enumerates the network and discovers poor segmentation between ICS and corporate systems",
      "Attacker moves laterally across the network and reaches a file server containing backups",
      "Attacker deploys ransomware that encrypts the file server and spreads to connected workstations",
      "Manufacturing company discovers production is halted; backups are also encrypted",
      "Company cannot restore from backups; ransom demand is $2 million"
    ],
    questions: [
      {
        question: "What was the initial attack surface exploited?",
        options: [
          "A weak employee password on the VPN",
          "A known, unpatched vulnerability in the VPN appliance",
          "A misconfigured firewall allowing direct access",
          "Social engineering of IT staff"
        ],
        correct: 1,
        wrongExplanations: {
          0: "No credential-based attack was mentioned.",
          2: "The appliance was reachable; the issue was the patch.",
          3: "No social engineering occurred."
        },
        hint: "What made the VPN exploitable?",
        explanationBefore: "Unpatched systems are like unlocked doors; attackers don't need creativity."
      },
      {
        question: "Why did the 'quarterly maintenance window' delay create such risk?",
        options: [
          "Patches are never urgent",
          "The vulnerability was already being exploited in the wild; every day of delay exposed the company",
          "Waiting for quarterly updates is industry standard",
          "Critical vulnerabilities should wait for natural update cycles"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Critical patches ARE urgent.",
          2: "Best practice is immediate patching for critical vulns.",
          3: "Critical = patch immediately, not wait."
        },
        hint: "What does 'active exploits in the wild' mean?",
        explanationBefore: "Patch timing matters: critical vulnerabilities are exploited within days."
      },
      {
        question: "How did poor network segmentation enable the attack?",
        options: [
          "It prevented any network access at all",
          "It allowed the attacker to move laterally from corporate systems to ICS systems",
          "It encrypted the ICS communication",
          "It prevented backup creation"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Poor segmentation means too much access, not too little.",
          2: "Segmentation doesn't encrypt by itself.",
          3: "Segmentation and backup are separate concepts."
        },
        hint: "What did the attacker gain by moving between network zones?",
        explanationBefore: "Segmentation contains breaches; poor segmentation spreads damage."
      },
      {
        question: "Why were the encrypted backups also inaccessible?",
        options: [
          "The backups were stored in the same file server that got encrypted",
          "The encryption keys were exposed and ransomware re-encrypted the backups",
          "The backup system was infected with ransomware",
          "All backups require decryption keys that the attacker obtained"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Encryption keys for backup aren't the same as ransomware keys.",
          2: "Backups were encrypted by spreading ransomware.",
          3: "Backups have different encryption than ransomware."
        },
        hint: "Where were backups physically or logically located?",
        explanationBefore: "Backups must be isolated; storing them where ransomware can reach defeats their purpose."
      },
      {
        question: "The 3-2-1 backup rule states: 3 copies, 2 different media, 1 offsite. What did this company violate?",
        options: [
          "Having only one backup location (on same network)",
          "Not having different media types",
          "Not having offsite backups",
          "All of the above"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Same/different media wasn't the issue here.",
          2: "They had offsite encrypted backups according to scenario.",
          3: "Not all were violated; location/access was the issue."
        },
        hint: "Which part of 3-2-1 prevents network-wide ransomware from affecting all backups?",
        explanationBefore: "The '1 offsite' is critical: backups must be disconnected from the network."
      },
      {
        question: "What does 'immutable backup' mean in the context of ransomware defense?",
        options: [
          "Backups that cannot be read by anyone",
          "Backups that cannot be modified or deleted, even by administrators",
          "Backups that are automatically encrypted",
          "Backups that are stored forever"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Backups need to be restored, so they must be readable.",
          2: "Encryption protects against eavesdropping, not modification.",
          3: "Immutability is about write-once, not retention forever."
        },
        hint: "What property would prevent a backup from being encrypted by ransomware?",
        explanationBefore: "Immutable backups prevent even privileged users from altering them."
      },
      {
        question: "Open-ended: Design a patching and backup strategy that would have prevented this.",
        options: [
          "Critical patches applied within 24-48 hours + air-gapped offsite immutable backups + network segmentation with ICS isolation + backup verification testing + incident response plan",
          "Apply all patches immediately without testing",
          "Store backups in a separate cloud vendor not accessible from any network",
          "Use only manual backups triggered by IT staff"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Too reckless; testing is needed for non-critical systems.",
          2: "Overly restrictive; backups are useless if you can never restore.",
          3: "Manual backups are unreliable."
        },
        hint: "Think about patch timing, backup isolation, network architecture, and verification.",
        explanationBefore: "Ransomware defense combines prevention (patching, segmentation) and recovery (resilient backups)."
      }
    ]
  },

  {
    id: 5,
    title: "Case Study 5: Insider Threat & Privilege Abuse",
    subtitle: "Accountability & Audit Log Review",
    scenario: `A mid-sized law firm manages confidential client files, contracts, and litigation strategy documents:
• Case management system with role-based access control
• File servers with folders segregated by client and by attorney
• Email archiving system for regulatory compliance
• Billing and timesheet system
• Audit logging of file access and modifications

The infrastructure includes:
• Different roles: junior associate, senior associate, partner, paralegal
• Each role has documented access permissions
• Audit logs record who accessed what files and when
• Remote access through VPN available to all staff`,
    incidents: [
      "A senior associate gets passed over for promotion to partner",
      "The associate begins accessing files for high-value clients they're not assigned to",
      "They photograph confidential litigation strategy documents",
      "They use a personal email account to send documents to a competing law firm",
      "The competing firm uses the strategy information to outmaneuver the original client in negotiations",
      "6 months later: firm detects anomalous access patterns during routine audit log review",
      "Investigation reveals 200+ confidential documents leaked over 6 months",
      "Client sues for breach of privilege and confidentiality; regulatory penalties apply"
    ],
    questions: [
      {
        question: "Role-based access control (RBAC) was configured correctly. Why did it not prevent this breach?",
        options: [
          "RBAC was not enforced on the file servers",
          "RBAC controls what users CAN access, but cannot prevent AUTHORIZED users from misusing access",
          "RBAC was broken by the attacker",
          "RBAC only protects against unauthorized users"
        ],
        correct: 1,
        wrongExplanations: {
          0: "RBAC was properly enforced.",
          2: "RBAC was not broken; the insider exploited legitimate access.",
          3: "RBAC does protect; but insiders bypass it by using authorized credentials."
        },
        hint: "What's the difference between 'access control' and 'acceptable use'?",
        explanationBefore: "Access control says who CAN; monitoring and policy enforcement say who SHOULD."
      },
      {
        question: "What detective control COULD have caught this earlier?",
        options: [
          "Role-based access control",
          "Encryption of files at rest",
          "Regular audit log review with anomaly detection (unusual file access patterns)",
          "Automatic backup of all files"
        ],
        correct: 2,
        wrongExplanations: {
          0: "This is preventive, not detective.",
          1: "This protects confidentiality but doesn't detect unauthorized access.",
          3: "Backups don't detect inappropriate use."
        },
        hint: "What control would have revealed the pattern of accessing unauthorized files?",
        explanationBefore: "Detective controls find problems; they depend on humans to act on findings."
      },
      {
        question: "Why was sending documents through personal email a critical vulnerability?",
        options: [
          "Email is not secure",
          "It bypassed DLP (Data Loss Prevention) systems that only monitor corporate email",
          "Personal email doesn't support encryption",
          "Email attachments are untrackable"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Email can be secure; the issue is the channel.",
          2: "Personal email can support encryption.",
          3: "Email is traceable; it was just external to monitoring."
        },
        hint: "What systems might a law firm have to prevent data exfiltration through corporate channels?",
        explanationBefore: "DLP and monitoring typically only cover corporate systems; personal channels are gaps."
      },
      {
        question: "The 6-month detection delay was unacceptable. What should the firm have done?",
        options: [
          "Reviewed audit logs weekly or automatically alerted on unusual access patterns",
          "Prevented all remote file access",
          "Encrypted all files with keys inaccessible to employees",
          "Used fingerprinting on every document"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Remote access is necessary for law firm operations.",
          2: "Encrypted files must be usable by authorized employees.",
          3: "Fingerprinting doesn't prevent initial access."
        },
        hint: "How frequently should security-sensitive audit logs be reviewed?",
        explanationBefore: "Continuous or frequent log review catches problems while damage is minimal."
      },
      {
        question: "What additional control could have prevented exfiltration through personal email?",
        options: [
          "Blocking non-corporate email from receiving emails from corporate systems",
          "Endpoint DLP (Data Loss Prevention) that monitors all user devices and networks",
          "Prohibiting mobile devices and VPN access",
          "Requiring multi-factor authentication for file access"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Blocking email receipt doesn't prevent file uploads.",
          2: "Prohibiting access is impractical for a law firm.",
          3: "MFA adds security but doesn't prevent authorized users from copying files."
        },
        hint: "What monitors data movement even on personal devices?",
        explanationBefore: "Endpoint DLP sees document copying and exfiltration attempts before data leaves."
      },
      {
        question: "Why is this classified as an 'insider threat' rather than an external attack?",
        options: [
          "The attacker worked for the law firm",
          "The attack required legitimate credentials and system access",
          "The attacker knew internal systems and processes",
          "All of the above"
        ],
        correct: 3,
        wrongExplanations: {
          0: "This is true but incomplete.",
          1: "This is true but incomplete.",
          2: "This is true but incomplete."
        },
        hint: "What made this different from a traditional hacker break-in?",
        explanationBefore: "Insider threats use legitimate access for illegitimate purposes."
      },
      {
        question: "Open-ended: Design a comprehensive insider threat program.",
        options: [
          "Least privilege access + regular audit log review + anomaly detection + DLP on endpoints + security awareness training + background checks + pre-offense detection + incident response plan",
          "Monitor all employee activities constantly",
          "Restrict all access and require approval for everything",
          "Trust employees and assume no one will commit fraud"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Constant monitoring is both impractical and culturally damaging.",
          2: "Over-restriction prevents business operations.",
          3: "Trust is necessary but must be verified."
        },
        hint: "Think about prevention, detection, and response capabilities.",
        explanationBefore: "Insider threat programs balance security with trust and operational efficiency."
      }
    ]
  },

  {
    id: 6,
    title: "Case Study 6: Third-Party Software Vulnerability",
    subtitle: "Dependency Management & Software Supply Chain",
    scenario: `A healthcare billing software company integrates third-party libraries for common functions:
• Open-source PDF generation library for medical documentation
• Third-party logging framework for audit trails
• Image processing library for document scanning
• Authentication library for user credential management
• JSON parser for API communication

Development practices include:
• Dependency scanning during build process
• Regular security updates applied monthly
• Software bill of materials (SBOM) maintained
• All third-party libraries are pinned to specific versions`,
    incidents: [
      "A vulnerability is discovered in the PDF generation library (command injection in metadata parsing)",
      "The library maintainer releases a patch, but the healthcare company's monthly update cycle doesn't apply it immediately",
      "Attackers begin exploiting the vulnerability in the wild",
      "An attacker uploads a specially crafted PDF through the billing system's upload functionality",
      "The vulnerability allows the attacker to execute arbitrary commands on the server",
      "Attacker uses this access to exfiltrate patient billing records and insurance information",
      "The incident is detected when the company's intrusion detection system alerts on unusual process spawning from the application",
      "Forensic analysis reveals the attack exploited the known vulnerability for 10 days before detection"
    ],
    questions: [
      {
        question: "What is the primary risk of using third-party libraries?",
        options: [
          "Third-party libraries are always insecure",
          "Security responsibility is shared; you depend on the maintainer's diligence and response time",
          "Open-source code is always worse than proprietary",
          "Third-party libraries cannot be updated"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Third-party libraries are often well-maintained.",
          2: "Open-source and proprietary can both be secure or insecure.",
          3: "Libraries can and should be updated."
        },
        hint: "When a third-party library is vulnerable, who is responsible for fixing it?",
        explanationBefore: "Using third-party code means inheriting both its benefits and its vulnerabilities."
      },
      {
        question: "Why was the monthly update cycle too slow for this vulnerability?",
        options: [
          "Monthly updates are always insufficient",
          "A known vulnerability being actively exploited requires immediate patching, not waiting 30 days",
          "The vulnerability was in internal code, not third-party",
          "Patching always breaks functionality"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Monthly is fine for non-critical issues.",
          2: "The vulnerability was in the PDF library.",
          3: "Patches shouldn't break things if tested properly."
        },
        hint: "What's the difference between regular updates and emergency patches?",
        explanationBefore: "Critical vulnerabilities require out-of-cycle patching; regular schedules are too slow."
      },
      {
        question: "What is a 'Software Bill of Materials' (SBOM)?",
        options: [
          "A list of employees working on the software",
          "A complete inventory of all components, libraries, and their versions used in software",
          "A document describing software features",
          "A billing invoice for software development"
        ],
        correct: 1,
        wrongExplanations: {
          0: "SBOM is about components, not people.",
          2: "That's a feature list or spec document.",
          3: "That's a financial document."
        },
        hint: "What would let you quickly identify which of your systems use a vulnerable library?",
        explanationBefore: "SBOM is critical for supply chain security; it shows what you depend on."
      },
      {
        question: "The company 'pinned' library versions. How did this affect the vulnerability?",
        options: [
          "Pinning versions prevented the vulnerability",
          "Pinning ensured consistent behavior but meant the patch had to be explicitly updated, which didn't happen quickly",
          "Pinning made updates faster",
          "Pinning has no security impact"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Pinning doesn't prevent vulns; it controls when patches are applied.",
          2: "Pinning requires manual updates.",
          3: "Pinning has significant security implications."
        },
        hint: "What's the trade-off between pinning versions and automatic updates?",
        explanationBefore: "Pinning provides stability but requires proactive update management."
      },
      {
        question: "How should the company have prioritized this patch?",
        options: [
          "Wait for the next monthly update cycle",
          "Treat it as a critical emergency patch; apply within 24-48 hours with expedited testing",
          "Request the library maintainer to fix it faster",
          "Switch to a different library that's more secure"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Too slow for actively exploited vulnerabilities.",
          2: "You can't control maintainer response time.",
          3: "Switching has its own risks and delays."
        },
        hint: "What's the right response to a 'known vulnerability actively exploited in the wild'?",
        explanationBefore: "Critical vulnerabilities require emergency response, not scheduled updates."
      },
      {
        question: "What detection method finally caught this attack?",
        options: [
          "The dependency scanning tool detected the vulnerability",
          "Manual security audit",
          "Intrusion detection system (IDS) detected unusual process spawning from the application",
          "Customer complaints about missing data"
        ],
        correct: 2,
        wrongExplanations: {
          0: "Scanning didn't catch it before it was exploited.",
          1: "No audit was mentioned.",
          3: "IDS detected it before customers complained."
        },
        hint: "Which detective control actually alerted the company?",
        explanationBefore: "Multiple controls exist; which one(s) are actually triggered depends on the attack type."
      },
      {
        question: "Open-ended: Design a vulnerability management program for third-party dependencies.",
        options: [
          "Maintain SBOM + automated scanning with alerts + emergency patch process for critical vulns + regular updates for non-critical + supply chain risk assessment",
          "Never use third-party libraries",
          "Update all libraries immediately whenever updates exist",
          "Trust vendors to notify you of vulnerabilities"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Unrealistic; almost all software uses dependencies.",
          2: "Too reckless; breaks things; needs testing.",
          3: "Vendor notification is often too slow."
        },
        hint: "Think about inventory, monitoring, response process, and testing.",
        explanationBefore: "Dependency management requires systematic processes and prioritization."
      }
    ]
  },

  {
    id: 7,
    title: "Case Study 7: Weak Password Policy & Social Engineering",
    subtitle: "Authentication Weakness & Human Factors",
    scenario: `A government contractor managing classified project documents requires:
• Multi-level access controls based on security clearance
• Classified project shares accessible only to cleared employees
• Email system with archived communications
• Project management platform for task tracking
• Visitor badge system for physical access

Security measures include:
• 12-character minimum passwords
• Passwords must be changed every 90 days
• Passwords banned from previous 5 uses
• Hint question: "Favorite pet name"`,
    incidents: [
      "An attacker performs OSINT on project team members' social media profiles",
      "The attacker notices a common pattern: employees post pet names, children names, anniversary dates",
      "The attacker calls the help desk claiming to be a contractor who forgot their password",
      "Using social engineering, they get the attacker claims legitimate status and name-drops known employees",
      "Help desk issues a temporary password reset link via email",
      "The attacker receives the reset link (or intercepts it by compromising email forwarding)",
      "Attacker resets password and gains access to classified project documents",
      "Attacker downloads project plans and sells them to foreign intelligence service"
    ],
    questions: [
      {
        question: "Why did the strong password policy not prevent this breach?",
        options: [
          "Strong password policies are ineffective",
          "The password policy failed to prevent the help desk from issuing a reset without proper verification",
          "The attacker never needed the password; they used social engineering to reset it",
          "Passwords are always broken"
        ],
        correct: 2,
        wrongExplanations: {
          0: "Strong policies help, but other factors matter more.",
          1: "This is part of it, but the core issue is authentication bypass.",
          3: "Passwords are tools; misuse is the problem."
        },
        hint: "Did the attacker ever need to guess or crack the password?",
        explanationBefore: "Social engineering bypasses technical controls by exploiting human trust."
      },
      {
        question: "What was the critical weakness in the password reset process?",
        options: [
          "Using email to send reset links",
          "Insufficient verification of the person requesting the reset (social engineering worked)",
          "The reset link wasn't time-limited",
          "Multiple attempts were allowed"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Email can be secure if properly verified.",
          2: "Time-limits help but weren't the main issue.",
          3: "Attempt limits help but weren't the main issue."
        },
        hint: "What allowed the attacker to convince the help desk they were legitimate?",
        explanationBefore: "Help desk verification is as critical as any technical control."
      },
      {
        question: "Why was OSINT on social media valuable to the attacker?",
        options: [
          "It proved the attacker worked for the company",
          "It provided personal details (pet names, family info) that appear in security questions and weak passwords",
          "It allowed the attacker to hack social media accounts",
          "Social media has no relevance to security"
        ],
        correct: 1,
        wrongExplanations: {
          0: "OSINT proved nothing about employment.",
          2: "Social media accounts weren't hacked.",
          3: "OSINT from social media is a major reconnaissance technique."
        },
        hint: "What secret information did employees publicly share?",
        explanationBefore: "Security questions are only secure if their answers are actually secret."
      },
      {
        question: "The password policy required change every 90 days. How did this help or hurt?",
        options: [
          "Frequent changes improved security",
          "Frequent changes forced weaker passwords (Post-It notes, patterns) but didn't prevent credential stuffing from social engineering",
          "Frequent changes had no effect",
          "Frequent changes prevented social engineering attacks"
        ],
        correct: 1,
        wrongExplanations: {
          0: "Frequent changes often weaken security.",
          2: "Frequent changes have significant effects, mostly negative.",
          3: "Frequent changes don't prevent social engineering."
        },
        hint: "Why do people write down passwords when forced to change them often?",
        explanationBefore: "Security policies can backfire if they create worse practices."
      },
      {
        question: "Multi-factor authentication (MFA) would have prevented this. Why?",
        options: [
          "MFA prevents password resets",
          "MFA prevents social engineering attacks",
          "Even with a reset password, the attacker would need a second factor (phone, key, app) to access the account",
          "MFA prevents access to classified documents"
        ],
        correct: 2,
        wrongExplanations: {
          0: "MFA doesn't prevent resets; it adds a factor.",
          1: "MFA doesn't prevent social engineering attempts, but it prevents exploitation.",
          3: "MFA is authentication, not document access control."
        },
        hint: "If the attacker had a new password but no phone or second device, could they log in?",
        explanationBefore: "MFA requires control of an additional factor the attacker likely doesn't have."
      },
      {
        question: "What is 'reverse social engineering'?",
        options: [
          "Engineering the social aspects of help desk",
          "Attacker becomes the trusted source so target requests information from the attacker",
          "Social engineering that doesn't work",
          "Using psychology to break passwords"
        ],
        correct: 1,
        wrongExplanations: {
          0: "That's just social engineering on help desk.",
          2: "All social engineering attempts fail sometimes.",
          3: "That's just social engineering."
        },
        hint: "What if the attacker called and said 'I'm calling from IT to verify your security settings'?",
        explanationBefore: "Attackers can establish credibility and request information instead of stealing it."
      },
      {
        question: "Open-ended: Design a secure authentication and account recovery process.",
        options: [
          "Enforce MFA for all accounts + secure password reset (in-person verification or multi-step challenges) + awareness training on social engineering + monitored help desk + verification callbacks + time-limited reset links",
          "Make passwords harder to guess",
          "Eliminate help desk password resets entirely",
          "Require daily password changes"
        ],
        correct: 0,
        wrongExplanations: {
          1: "Harder passwords alone don't solve help desk social engineering.",
          2: "Users will forget passwords; recovery is needed but must be secure.",
          3: "Daily changes would force extremely poor practices."
        },
        hint: "Think about multiple factors, verification methods, and human-centric security.",
        explanationBefore: "Authentication and recovery must account for both technical and social weaknesses."
      }
    ]
  }
];
