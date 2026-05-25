#!/usr/bin/env python3
"""
Module 6: Web Security Fundamentals
Covers all slides from I3336-25-26-Module-6.pdf
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
        print("   🌐 MODULE 6: WEB SECURITY FUNDAMENTALS QUEST 🌐")
        print("="*60)
        slow_print("You are a web application security specialist.")
        slow_print("From HTTP basics to XSS, SQLi, and CSRF — you must")
        slow_print("master every web vulnerability and its defense.")
        print("\n💀 3 lives | 🏆 8 levels | 📚 All slides covered")
        input("\nPress ENTER to begin...")

        levels = [
            ("Web Security Introduction & Architecture", "2-20", self.l1),
            ("HTTP & Communication Fundamentals", "22-32", self.l2),
            ("Core Web Security Principles", "34-44", self.l3),
            ("Injection & XSS Attacks", "46-58", self.l4),
            ("Authentication, Session & Access Control Attacks", "59-66", self.l5),
            ("CSRF & Client-Side Trust Attacks", "67-74", self.l6),
            ("Defensive Techniques & Best Practices", "76-87", self.l7),
            ("Final Certification", "2-90", self.l8),
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
        explain_concept("Web Security Introduction & Architecture", [
            "Web applications are everywhere: banking, e-commerce, healthcare, government.",
            "Attacks are frequent and automated. Small vulnerabilities lead to large impact.",
            "Most breaches exploit simple logic flaws and misconfigurations, not advanced techniques.",
            "",
            "MODERN WEB ARCHITECTURE:",
            "  • Single-page applications (SPAs) shift logic to frontend.",
            "  • Backend exposes APIs instead of full pages.",
            "  • Microservices split logic across multiple services.",
            "  • Frontend communicates asynchronously with backend APIs.",
            "  • Increased complexity expands attack surface.",
            "",
            "TRUST BOUNDARIES:",
            "  • User input travels through multiple layers.",
            "  • Each transition point introduces validation challenges.",
            "  • All user inputs = potential attack vectors (forms, headers, cookies, APIs, file uploads, query parameters).",
            "",
            "ATTACKER MINDSET:",
            "  • Attackers intercept, modify, and replay requests.",
            "  • They do NOT use the UI as intended.",
            "  • Key assumption: 'Everything from the client can be modified.'",
            "  • Client-side validation improves usability, NOT security."
        ])
        q1 = ask("A developer believes their web application is secure because they added JavaScript validation that checks if a user entered a valid email address before submitting a form. What is wrong with this reasoning?",
            ["JavaScript validation is too slow", "Client-side validation improves usability but not security — attackers can bypass it",
             "Email validation is not needed", "Server-side validation is less accurate"], 2,
            None, {1:["Speed is not the issue."],3:["Email validation is important, but the location matters."],4:["Server-side validation is the ONLY validation that matters for security."]},
            "Slide 20: 'Client-side validation improves usability, not security.' Slide 35: 'All client input must be considered untrusted data.' Attackers fully control the client environment.")
        self.ms(); self.sc(q1)

        q2 = ask("A modern web application uses React on the frontend and communicates with multiple backend microservices via APIs. How does this architecture affect security compared to traditional server-rendered pages?",
            ["It reduces the attack surface", "Increased complexity expands the potential attack surface",
             "It eliminates the need for authentication", "It makes HTTPS unnecessary"], 2,
            None, {1:["More components = more attack surface, not less."],3:["Authentication is still critical, just implemented differently."],4:["HTTPS is always needed for API communications."]},
            "Slide 16: 'Increased complexity expands potential attack surface.' More components (frontend, APIs, microservices) = more trust boundaries to protect.")
        self.ms(); self.sc(q2)

        q3 = ask("An attacker uses a proxy tool (like Burp Suite) to intercept a web request, changes a price parameter from $100 to $1, and resubmits it to the server. The server accepts the modified price. What assumption did the developers make that enabled this?",
            ["They assumed HTTPS was enough", "They assumed the client would not modify the request",
             "They assumed users would not know the URL", "They assumed SQL injection was impossible"], 2,
            None, {1:["HTTPS protects in transit but doesn't prevent parameter tampering."],3:["URL hiding is security through obscurity, not real security."],4:["This is parameter tampering, not SQL injection."]},
            "Slide 8: 'Attackers fully control client environment and tools.' Slide 32: 'Core workflow: intercept, modify, replay requests.' The key developer mistake was trusting client-submitted data.")
        self.ms(); self.sc(q3)

        q4 = ask("In a web application, where should security and business rules be strictly enforced?",
            ["Only in the client-side JavaScript", "Only in the server-side code",
             "In both client and server equally", "In the database only"], 2,
            None, {1:["Client-side can be bypassed entirely."],3:["Client-side is for usability; server-side is for security. They are not equal."],4:["Database enforces storage rules but cannot validate business logic for all requests."]},
            "Slide 20: 'Server enforces security and business rules strictly.' 'Sensitive decisions must never rely on client input.' 'Server must verify all incoming data rigorously.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l2(self):
        explain_concept("HTTP & Communication Fundamentals", [
            "HTTP = stateless request-response protocol. No memory between requests.",
            "HTTP REQUEST: method (GET/POST/PUT/DELETE), path, headers, body. All fields can be manipulated by attacker.",
            "HTTP RESPONSE: status line, headers, body. Server controls response data.",
            "",
            "METHODS:",
            "  • GET: retrieve data (should not modify state).",
            "  • POST: submit data (changes server state).",
            "  • PUT/PATCH: update existing resources.",
            "  • DELETE: removes resources.",
            "Misuse of methods may introduce security risks.",
            "",
            "HEADERS carry authentication and session info. Cookies transmitted through headers. Custom headers may expose sensitive data. Manipulating headers can bypass security.",
            "",
            "STATE MANAGEMENT:",
            "  • Cookies: store session identifiers in browser.",
            "  • Server-side sessions: track auth state.",
            "  • Tokens: used in modern API authentication.",
            "  • Local storage: sometimes stores tokens (risky).",
            "",
            "COOKIE SECURITY ATTRIBUTES:",
            "  • Secure: only sent over HTTPS.",
            "  • HttpOnly: not accessible via JavaScript.",
            "  • Domain/Path: control scope.",
            "  • SameSite: mitigate CSRF risks.",
            "",
            "HTTPS uses TLS to encrypt communication. Protects against eavesdropping. BUT does NOT protect against application-level vulnerabilities (SQLi, XSS, etc.)."
        ])
        q1 = ask("HTTP is described as a 'stateless protocol.' What does this mean from a security perspective?",
            ["All requests are automatically encrypted", "Each request is processed independently without memory of previous interactions",
             "The server always remembers the user's previous actions", "Sessions are built into HTTP by default"], 2,
            None, {1:["Encryption requires HTTPS, not plain HTTP."],3:["The opposite — HTTP has NO built-in memory of previous interactions."],4:["Applications must implement their own session management. HTTP does not have built-in sessions."]},
            "Slide 28: 'Each request processed independently without memory.' 'No built-in session awareness between requests.' 'Applications must implement their own state management.'")
        self.ms(); self.sc(q1)

        q2 = ask("A web application sets a session cookie without the HttpOnly flag. An attacker injects JavaScript that successfully reads the cookie and sends it to their server. What does the HttpOnly flag prevent?",
            ["Prevents the cookie from being sent to the server", "Prevents JavaScript from accessing the cookie",
             "Prevents the cookie from expiring", "Prevents HTTPS connections"], 2,
            None, {1:["HttpOnly doesn't stop the cookie from being sent — it stops JavaScript from reading it."],3:["Cookie expiration is controlled by the Expires/Max-Age attribute, not HttpOnly."],4:["HTTPS is controlled by the Secure attribute, not HttpOnly."]},
            "Slide 30: 'Cookies... Accessible via JavaScript unless protected properly.' Attributes include 'Secure, httponly, domain, path.' HttpOnly prevents script-based cookie theft.")
        self.ms(); self.sc(q2)

        q3 = ask("A company deploys HTTPS on their website and believes this makes their application fully secure against all web attacks. What is the flaw in this reasoning?",
            ["HTTPS is unnecessary for web security", "HTTPS provides transport security but does not protect against application-level vulnerabilities",
             "HTTPS only works on mobile devices", "HTTPS prevents all types of XSS"], 2,
            None, {1:["HTTPS is necessary but not sufficient."],3:["HTTPS works on all devices with browser support."],4:["HTTPS does not prevent XSS — XSS is an application-level output encoding issue."]},
            "Slide 31: 'HTTPS... Protects against network eavesdropping and tampering' BUT 'Does not protect against application-level vulnerabilities' and 'Secure transport does not guarantee secure application.'")
        self.ms(); self.sc(q3)

        q4 = ask("An attacker intercepts an HTTP request and modifies the Authorization header containing a JWT token to impersonate another user. What does this demonstrate?",
            ["HTTPS is always broken", "HTTP headers can be manipulated to bypass security mechanisms",
             "Cookies are the only authentication method", "POST requests cannot be modified"], 2,
            None, {1:["HTTPS protects in transit. This attack manipulates headers at the application level, not transport."],3:["Tokens in headers are another authentication method besides cookies."],4:["All HTTP methods can have their headers and bodies modified."]},
            "Slide 26: 'Headers carry authentication and session information.' 'Manipulating headers can bypass security mechanisms.' All request fields can be manipulated by attackers.")
        self.ms(); self.sc(q4)

        q5 = ask("Which HTTP method is designed to retrieve data from a server without modifying server state, and misuse of which for state-changing operations can introduce security risks?",
            ["POST", "GET", "DELETE", "PUT"], 2,
            None, {1:["POST submits data and changes state."],3:["DELETE removes resources."],4:["PUT updates existing resources."]},
            "Slide 25: GET 'Requests retrieve data without modifying state.' Slide 25 also notes: 'Misuse of methods may introduce security risks.' Using GET for state changes can enable CSRF.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l3(self):
        explain_concept("Core Web Security Principles", [
            "1. NEVER TRUST USER INPUT: All client input is untrusted. Hidden fields provide no protection. Input validation must be server-side always.",
            "",
            "2. INPUT VALIDATION & OUTPUT ENCODING:",
            "  • Input validation protects the BACKEND.",
            "  • Output encoding protects the FRONTEND.",
            "  • Prefer strict allowlists over permissive validation.",
            "  • Encode output before rendering in browser to prevent malicious input from being interpreted as code.",
            "",
            "3. AUTHENTICATION vs AUTHORIZATION: Authentication verifies identity. Authorization determines access rights. Both must be implemented separately.",
            "",
            "4. LEAST PRIVILEGE: Users granted only minimal required permissions. Limits damage from compromised accounts.",
            "",
            "5. DEFENSE IN DEPTH: Multiple layers of security. No single mechanism provides full protection. Failure of one layer doesn't break the system.",
            "",
            "6. SECURE SESSION MANAGEMENT:",
            "  • Sessions must be unpredictable and securely generated.",
            "  • Session ID should not be guessable or reusable.",
            "  • Sessions must expire after inactivity or logout.",
            "  • Weak sessions enable hijacking and impersonation.",
            "",
            "7. FAIL SECURELY: Deny access by default. Errors must not expose sensitive internal information.",
            "",
            "8. ZERO TRUST MINDSET: Assume no component is trustworthy. Validate all inputs regardless of origin. Internal services should not blindly trust each other."
        ])
        q1 = ask("A developer implements client-side JavaScript that checks if a form field contains only numbers before submitting. They skip server-side validation because 'the JavaScript already checks it.' What principle is violated?",
            ["Defense in depth", "Never trust user input",
             "Least privilege", "Fail securely"], 2,
            None, {1:["Defense in depth uses multiple layers. The issue here is trusting one layer (client) exclusively."],3:["Least privilege is about permissions, not input validation."],4:["Fail securely is about default deny behavior, not validation location."]},
            "Slide 35: 'Never trust user input.' 'Users can modify requests before reaching server.' 'Hidden fields and parameters provide no protection.' 'Input validation must be enforced server-side always.'")
        self.ms(); self.sc(q1)

        q2 = ask("An application validates that user-submitted usernames contain only letters and numbers before processing them. It also encodes any special characters before displaying the username in the browser. What two security mechanisms are being used?",
            ["Encryption and decryption", "Input validation and output encoding",
             "Authentication and authorization", "Compression and decompression"], 2,
            None, {1:["No encryption is mentioned — the question is about checking and encoding content."],3:["Authentication and authorization are about identity and permissions, not data handling."],4:["Compression is not relevant to security in this context."]},
            "Slide 36: 'Input validation protects the backend.' 'Output encoding protects the frontend.' 'Validate all incoming data before processing.' 'Encode output before rendering in browser context.'")
        self.ms(); self.sc(q2)

        q3 = ask("A web application shows detailed database error messages including table names and SQL syntax when a query fails. An attacker uses these error messages to craft more precise attacks. What principle was violated?",
            ["Least privilege", "Fail securely",
             "Zero trust", "Defense in depth"], 2,
            None, {1:["Least privilege limits access. The issue is information exposure, not excessive permissions."],3:["Zero trust is about not trusting components. The issue is error handling."],4:["Defense in depth uses multiple layers. The issue is what happens when one layer fails (errors)."]},
            "Slide 42: 'Fail Securely' means 'Errors must not expose sensitive internal information' and 'Unexpected conditions handled safely without data leakage.' Showing SQL details helps attackers.")
        self.ms(); self.sc(q3)

        q4 = ask("A banking website uses HTTPS, requires strong passwords, implements server-side input validation, logs all transactions, and monitors for suspicious activity. If the password database is breached, the other protections still limit damage. What concept is this?",
            ["Single sign-on", "Defense in depth",
             "Identity federation", "Client-side validation"], 2,
            None, {1:["SSO lets users log in once for multiple services."],3:["Identity federation is cross-organizational trust."],4:["Client-side validation is not a security defense strategy."]},
            "Slide 39: 'Defense in depth' = 'Multiple layers of security controls applied simultaneously.' 'No single mechanism should provide full protection.' 'Failure of one layer does not break system.'")
        self.ms(); self.sc(q4)

        q5 = ask("A system administrator creates session IDs using simple incrementing numbers (session_1, session_2, session_3). An attacker guesses the next session ID and impersonates an active user. What session management principle was violated?",
            ["Sessions should be short", "Sessions must be unpredictable and securely generated",
             "Sessions should be stored in cookies", "Sessions should use localStorage"], 2,
            None, {1:["Short sessions help but the core issue is predictability."],3:["Storing in cookies is common practice but doesn't fix predictability."],4:["localStorage is less secure than cookies for session data."]},
            "Slide 41: 'Sessions must be unpredictable and securely generated.' 'Session ID should not be guessable or reusable.' Incrementing numbers are trivially guessable.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l4(self):
        explain_concept("Injection & XSS Attacks", [
            "INJECTION ATTACKS:",
            "  • Occurs when untrusted data is interpreted as code.",
            "  • Attacker input alters execution of backend commands.",
            "  • Affects databases (SQLi), OS commands, and interpreters.",
            "  • Caused by missing validation and unsafe input handling.",
            "  • SQL Injection: user input concatenated directly into SQL query strings. Database executes unintended operations.",
            "  • Not limited to SQL — affects APIs, JSON, templates. Same root cause: mixing untrusted data with code.",
            "",
            "XSS (Cross-Site Scripting):",
            "  • Allows execution of malicious scripts in the victim's browser.",
            "  • Occurs when application reflects untrusted input to users without proper encoding.",
            "  • Browser interprets attacker input as executable JavaScript.",
            "  • Types: Stored (persistent in DB), Reflected (in URL/response), DOM-based (client-side manipulation).",
            "  • Impact: Session hijacking, phishing, keylogging, defacement, credential theft, malware distribution."
        ])
        q1 = ask("An application's login form takes a username and directly inserts it into an SQL query: 'SELECT * FROM users WHERE name = \"' + username + '\"'. An attacker enters: admin' OR '1'='1. What attack is this, and what is the root cause?",
            ["Cross-site scripting; missing output encoding", "SQL injection; missing input validation and unsafe string concatenation",
             "CSRF; missing anti-CSRF tokens", "Session hijacking; weak session IDs"], 2,
            None, {1:["XSS is about JavaScript execution in browsers. This is about SQL queries."],3:["CSRF tricks users into unwanted actions. This directly manipulates a database query."],4:["Session hijacking steals sessions. This is about query manipulation."]},
            "Slide 49: 'Application builds SQL queries using user input. Input directly concatenated into database query strings.' Slide 48: 'Injection occurs when untrusted data interpreted as code.' The root cause is missing validation and string concatenation.")
        self.ms(); self.sc(q1)

        q2 = ask("An attacker submits a comment on a blog that contains JavaScript code. When other users view the comment, the script runs in their browsers and steals their session cookies. What type of XSS is this?",
            ["Reflected XSS", "Stored (persistent) XSS",
             "DOM-based XSS", "Self-XSS"], 2,
            None, {1:["Reflected XSS requires the victim to click a malicious link. The payload is not stored."],3:["DOM-based XSS manipulates the client-side DOM without server involvement."],4:["Self-XSS requires the victim to run code themselves in their own browser console."]},
            "Slide 55: XSS types include stored (persistent) where the payload is saved in the database/server. The blog comment is stored and displayed to all viewers.")
        self.ms(); self.sc(q2)

        q3 = ask("An attacker sends a victim a link: https://site.com/search?q=<script>stealCookies()</script>. When the victim clicks it, the search page reflects the query back in the response without encoding, and the script executes. What XSS type is this?",
            ["Stored XSS", "Reflected XSS",
             "DOM-based XSS", "Blind XSS"], 2,
            None, {1:["Stored XSS requires the payload to be saved on the server. This is in a URL parameter."],3:["DOM-based XSS happens purely in the browser DOM without server reflection. Here the server reflects the input."],4:["Blind XSS executes in a backend/admin panel the attacker cannot see."]},
            "Slide 55: Reflected XSS = payload in URL/response, requires victim to visit a link. The server reflects the input directly in the response without encoding.")
        self.ms(); self.sc(q3)

        q4 = ask("A developer argues that SQL injection is no longer a problem because modern applications use APIs and JSON instead of traditional SQL databases. Why is this argument incorrect?",
            ["SQL injection is the only type of injection", "Injection is not limited to SQL — it affects APIs, JSON, and templates with the same root cause",
             "APIs are always secure", "JSON cannot contain malicious data"], 2,
            None, {1:["The module explicitly says injection is NOT limited to SQL."],3:["APIs can be vulnerable to injection just like SQL databases."],4:["JSON can absolutely contain malicious data that gets interpreted as code."]},
            "Slide 53: 'Injection not limited to traditional SQL databases.' 'Modern applications use APIs, JSON, and templates.' 'Same root cause: mixing untrusted data with code.'")
        self.ms(); self.sc(q4)

        q5 = ask("Which of the following is a valid defense against SQL injection?",
            ["Only using GET requests for database queries", "Using parameterized queries (prepared statements) instead of string concatenation",
             "Relying on client-side validation", "Disabling HTTPS"], 2,
            None, {1:["GET vs POST doesn't prevent SQL injection."],3:["Client-side validation can be bypassed and does not protect the backend."],4:["HTTPS protects data in transit; disabling it would make things worse."]},
            "Slide 78: 'Use parameterized queries for database interactions.' 'Avoid building queries using string concatenation.' Parameterized queries separate code from data.")
        self.ms(); self.sc(q5)

        q6 = ask("An XSS attack allows an attacker to execute JavaScript in a victim's browser. Which of the following is NOT a typical impact of XSS?",
            ["Session hijacking via cookie theft", "Defacement of the website appearance",
             "Direct deletion of the server's database", "Keylogging of user keystrokes"], 3,
            None, {1:["XSS commonly steals session cookies for hijacking."],2:["XSS can modify the DOM to deface the page."],4:["XSS can log keystrokes by capturing keyboard events in the browser."]},
            "Slide 57: XSS impact includes 'Session hijacking, Phishing, Keylogging, Defacement, Credential theft, Malware distribution.' XSS runs in the browser — it cannot directly delete a server database. That requires SQL injection or other server-side attacks.")
        self.ms(); self.sc(q6)
        return q1 and q2 and q3 and q4 and q5 and q6

    def l5(self):
        explain_concept("Authentication, Session & Access Control Attacks", [
            "AUTHENTICATION & SESSION WEAKNESSES:",
            "  • Weak authentication allows account compromise.",
            "  • Poor session management enables impersonation.",
            "  • Credentials may be predictable or poorly protected.",
            "  • Session identifiers exposed through insecure mechanisms.",
            "",
            "ACCESS CONTROL VULNERABILITIES:",
            "  • Occur when authorization checks are missing or incorrect.",
            "  • Users access resources beyond their permissions.",
            "  • Server trusts client-provided identifiers (e.g., /profile?id=123).",
            "",
            "IDOR (Insecure Direct Object Reference):",
            "  • Application exposes internal identifiers in URLs/parameters.",
            "  • Attacker changes the ID to access another user's data.",
            "  • Server only checks authentication, not authorization/ownership."
        ])
        q1 = ask("An application uses URLs like /invoice?id=1001. A logged-in user changes the ID to 1002 and can view another customer's invoice. The server verifies the user is logged in but does not check if they own that invoice. What vulnerability is this?",
            ["SQL injection", "Insecure Direct Object Reference (IDOR)",
             "Cross-site scripting", "CSRF"], 2,
            None, {1:["SQL injection manipulates database queries. No query manipulation happened here."],3:["XSS executes JavaScript in browsers. No script was injected."],4:["CSRF tricks users into unwanted actions. The user intentionally changed a URL parameter."]},
            "Slide 65: IDOR = 'Application exposes internal identifiers.' 'Attacker changes ID to access another user's data.' 'Server trusts client-provided identifiers.'")
        self.ms(); self.sc(q1)

        q2 = ask("A banking application generates session IDs using sequential numbers. An attacker with a valid session guesses other active session IDs and successfully impersonates multiple customers. What is the primary weakness?",
            ["Weak password policy", "Predictable session identifiers",
             "Missing HTTPS", "Excessive password length"], 2,
            None, {1:["Password policy is unrelated to session ID generation."],3:["HTTPS protects in transit but doesn't fix predictable session IDs."],4:["Long passwords are good. The issue is session predictability."]},
            "Slide 41: 'Sessions must be unpredictable and securely generated.' 'Session ID should not be guessable or reusable.' Sequential numbers are trivially guessable.")
        self.ms(); self.sc(q2)

        q3 = ask("A user logs into a web application. The server creates a session and sends the session ID in a cookie. The user logs out, but the session ID remains valid on the server for 30 days. An attacker who stole the cookie can still use it. What principle was violated?",
            ["Least privilege", "Sessions must expire after logout or timeout",
             "Defense in depth", "Zero trust"], 2,
            None, {1:["Least privilege is about permissions, not session lifecycle."],3:["Defense in depth uses multiple layers. The issue is session management specifically."],4:["Zero trust is about not trusting components. The issue is session invalidation."]},
            "Slide 41: 'Sessions must expire after inactivity or logout.' 'Invalidate sessions properly on logout and timeout.' Slide 60: 'Invalidate sessions properly on logout and timeout.'")
        self.ms(); self.sc(q3)

        q4 = ask("An application checks if a user is logged in (authentication) before showing a page, but never checks if the logged-in user is actually allowed to see that specific record (authorization). What is this weakness called?",
            ["Strong authentication", "Missing authorization checks / broken access control",
             "Multi-factor authentication failure", "Session fixation"], 2,
            None, {1:["Authentication is working. The problem is the missing next step."],3:["MFA is about proving identity with multiple factors."],4:["Session fixation is when an attacker sets a known session ID for a victim."]},
            "Slide 64: 'Access Control Vulnerabilities: Occur when authorization checks are missing or incorrect.' 'Users access resources beyond their assigned permissions.' Slide 37: 'Authentication without authorization leads to privilege misuse.'")
        self.ms(); self.sc(q4)
        return q1 and q2 and q3 and q4

    def l6(self):
        explain_concept("CSRF & Client-Side Trust Attacks", [
            "CSRF (Cross-Site Request Forgery):",
            "  • Attacker tricks user into sending unintended requests.",
            "  • Exploits browser automatically including authentication credentials (cookies) with requests.",
            "  • Server cannot distinguish legitimate from forged requests.",
            "  • Relies on an active authenticated user session.",
            "  • Impact: Unauthorized actions (change password, transfer money) executed on behalf of the user.",
            "",
            "CLIENT-SIDE TRUST VULNERABILITIES:",
            "  • Application relies on client-side validation for security.",
            "  • Sensitive data stored in browser-accessible storage (localStorage).",
            "  • Business logic partially implemented in frontend code.",
            "  • Attackers modify client behavior and bypass restrictions.",
            "",
            "Example: An e-commerce site stores the item price in a hidden form field. An attacker changes the price to $0 using browser developer tools before submitting. The server accepts it because it trusts the client-submitted price."
        ])
        q1 = ask("A user is logged into their bank website. They visit a malicious site that contains an image tag: <img src='https://bank.com/transfer?to=attacker&amount=10000'>. The browser automatically includes the user's bank cookies, and the money is transferred. What attack is this?",
            ["SQL injection", "Cross-Site Request Forgery (CSRF)",
             "Cross-Site Scripting (XSS)", "Session hijacking"], 2,
            None, {1:["SQL injection manipulates database queries. No query was manipulated."],3:["XSS requires script execution. An <img> tag is not JavaScript execution."],4:["Session hijacking steals the session cookie. Here the cookie stays with the user but is sent along with an unintended request."]},
            "Slide 68: CSRF 'tricks user into sending unintended requests.' 'Exploits browser automatically including authentication credentials.' 'Server cannot distinguish legitimate from forged requests.'")
        self.ms(); self.sc(q1)

        q2 = ask("Which defense directly prevents CSRF attacks by requiring the server to validate that state-changing requests include a unique token known only to the legitimate application?",
            ["HTTPS encryption", "Anti-CSRF tokens",
             "Output encoding", "SQL parameterized queries"], 2,
            None, {1:["HTTPS protects data in transit but doesn't prevent forged requests from the same browser."],3:["Output encoding prevents XSS, not CSRF."],4:["Parameterized queries prevent SQL injection."]},
            "Slide 85: 'Use anti-CSRF tokens for state-changing requests.' The server verifies the token matches what it issued, distinguishing legitimate from forged requests.")
        self.ms(); self.sc(q2)

        q3 = ask("An e-commerce website stores product prices in hidden HTML form fields. A user opens browser developer tools, changes the price from $500 to $5, and submits the order. The server processes the order at the reduced price. What category of vulnerability is this?",
            ["SQL injection", "Client-side trust vulnerability",
             "Session hijacking", "Denial of service"], 2,
            None, {1:["No SQL query was manipulated."],3:["No session was stolen."],4:["The service is still available. The issue is trusting client-provided data."]},
            "Slide 72: 'Application relies on client-side validation for security.' 'Business logic partially implemented in frontend code.' 'Attackers modify client behavior and bypass restrictions.' The server should never trust prices from the client.")
        self.ms(); self.sc(q3)

        q4 = ask("A developer stores an authentication token in the browser's localStorage because it is convenient to access from JavaScript. What is the security risk?",
            ["localStorage is automatically encrypted by the browser", "localStorage is accessible by any JavaScript on the page, making it vulnerable to XSS theft",
             "localStorage is more secure than cookies", "localStorage prevents CSRF attacks"], 2,
            None, {1:["localStorage is NOT automatically encrypted."],3:["localStorage is LESS secure than HttpOnly cookies for tokens."],4:["localStorage doesn't prevent CSRF — it stores the token that enables it."]},
            "Slide 82: 'Avoid storing sensitive tokens in localStorage.' Slide 30: Cookies with HttpOnly are not accessible via JavaScript. localStorage IS accessible via JavaScript, so any XSS can steal tokens from it.")
        self.ms(); self.sc(q4)

        q5 = ask("Which cookie attribute helps mitigate CSRF by preventing the browser from sending cookies in cross-site requests?",
            ["HttpOnly", "Secure", "SameSite", "Path"], 3,
            None, {1:["HttpOnly prevents JavaScript access to cookies. It doesn't control cross-site sending."],2:["Secure ensures cookies are only sent over HTTPS."],4:["Path limits cookie scope to specific URL paths."]},
            "Slide 82: 'Set SameSite attribute to mitigate CSRF risks.' Slide 86: 'Use SameSite cookie attribute to restrict cross-site requests.' SameSite=Strict or Lax prevents cookies from being sent in cross-origin requests.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l7(self):
        explain_concept("Defensive Techniques & Best Practices", [
            "INJECTION DEFENSE:",
            "  • Use parameterized queries (prepared statements).",
            "  • Avoid string concatenation for queries.",
            "  • Validate and sanitize all user input strictly.",
            "  • Use ORM frameworks with safe query mechanisms.",
            "  • Limit database privileges to minimum required.",
            "",
            "XSS DEFENSE:",
            "  • Encode output before rendering user-controlled content.",
            "  • Use context-aware encoding (HTML, JavaScript, URL, CSS).",
            "  • Avoid inserting raw input into HTML or scripts.",
            "  • Implement Content Security Policy (CSP).",
            "",
            "AUTHENTICATION & SESSION DEFENSE:",
            "  • Strong password policies and MFA.",
            "  • Secure session identifiers with high entropy.",
            "  • Regenerate session IDs after authentication events.",
            "  • Invalidate sessions on logout and timeout.",
            "  • HttpOnly, Secure, SameSite cookie flags.",
            "",
            "ACCESS CONTROL DEFENSE:",
            "  • Enforce authorization checks on EVERY server request.",
            "  • Never rely on client-provided identifiers for access control.",
            "  • Validate ownership of resources before granting access.",
            "  • Deny access by default unless explicitly allowed.",
            "",
            "CSRF DEFENSE:",
            "  • Anti-CSRF tokens for state-changing requests.",
            "  • Validate Origin or Referer headers.",
            "  • SameSite cookie attribute.",
            "  • Re-authentication for sensitive operations.",
            "  • Avoid GET requests for critical actions.",
            "",
            "SECURITY HEADERS:",
            "  • CSP (Content Security Policy): restricts which resources can load/execute.",
            "  • HSTS (HTTP Strict Transport Security): forces HTTPS connections.",
            "  • X-Frame-Options: prevents clickjacking by blocking iframe embedding."
        ])
        q1 = ask("Which technique separates SQL code from user data, ensuring that user input is always treated as data and never as executable code?",
            ["Base64 encoding", "Parameterized queries (prepared statements)",
             "URL encoding", "MD5 hashing"], 2,
            None, {1:["Base64 is for data representation, not query safety."],3:["URL encoding is for safe transport in URLs, not database queries."],4:["MD5 is a hash function, not a query safety mechanism."]},
            "Slide 78: 'Use parameterized queries for database interactions.' 'Avoid building queries using string concatenation.' Parameterized queries treat user input strictly as data parameters.")
        self.ms(); self.sc(q1)

        q2 = ask("A developer wants to prevent an attacker from embedding their banking website inside a malicious iframe that tricks users into clicking unintended buttons. Which HTTP security header should they implement?",
            ["Content Security Policy (CSP)", "X-Frame-Options",
             "HTTP Strict Transport Security (HSTS)", "Access-Control-Allow-Origin"], 2,
            None, {1:["CSP restricts script/sources but doesn't specifically prevent iframe embedding."],3:["HSTS forces HTTPS, not iframe blocking."],4:["CORS header controls cross-origin access, not iframe embedding."]},
            "Slide 87: 'X-Frame-Options: HTTP response header that instructs the browser whether a webpage is allowed to be embedded inside a frame or iframe.' 'Prevents clickjacking attacks effectively.'")
        self.ms(); self.sc(q2)

        q3 = ask("Which Content Security Policy (CSP) directive tells the browser to only load and execute scripts from specific trusted sources, preventing inline script execution?",
            ["style-src", "script-src",
             "img-src", "connect-src"], 2,
            None, {1:["style-src controls CSS sources."],3:["img-src controls image sources."],4:["connect-src controls AJAX/WebSocket connections."]},
            "Slide 87: 'Content Security Policy (CSP): HTTP response header that tells the browser which resources are allowed to load and execute on a page.' 'Restricts script execution sources.' The script-src directive specifically controls JavaScript sources.")
        self.ms(); self.sc(q3)

        q4 = ask("A security team implements all the following: parameterized queries for databases, output encoding for XSS, anti-CSRF tokens, secure session management, and least privilege access control. What security philosophy does this represent?",
            ["Single point of protection", "Defense in depth",
             "Security through obscurity", "Zero-day prevention"], 2,
            None, {1:["The module explicitly rejects single-mechanism protection."],3:["Security through obscurity means hiding vulnerabilities. This is about multiple explicit defenses."],4:["Zero-day prevention is impossible — this is about layered protection against known issues."]},
            "Slide 39: 'Defense in depth: Multiple layers of security controls applied simultaneously.' 'No single mechanism should provide full protection.' Slide 76: 'Security must be applied at multiple application layers.'")
        self.ms(); self.sc(q4)

        q5 = ask("An application processes a state-changing action (like deleting an account) via a GET request: /delete-account. A victim clicks a malicious link that triggers this URL, and their account is deleted. Which two defensive measures would have prevented this?",
            ["Using POST for the action and adding anti-CSRF tokens", "Using GET and adding more JavaScript validation",
             "Using HTTP instead of HTTPS", "Disabling cookies entirely"], 1,
            None, {2:["GET should not be used for state-changing actions. Client-side validation is bypassable."],3:["HTTP is less secure than HTTPS."],4:["Disabling cookies breaks session-based authentication entirely."]},
            "Slide 86: 'Avoid using GET requests for critical actions.' Slide 85: 'Use anti-CSRF tokens for state-changing requests.' State-changing actions should use POST with CSRF tokens.")
        self.ms(); self.sc(q5)
        return q1 and q2 and q3 and q4 and q5

    def l8(self):
        explain_concept("Final Certification: All Module 6 Concepts", [
            "Comprehensive review:",
            "  • Web security depends on correct handling of trust.",
            "  • Client-side cannot be trusted under any conditions.",
            "  • Security must be enforced server-side consistently.",
            "  • HTTP is stateless — applications must implement session management.",
            "  • HTTPS protects transport but not application-level vulnerabilities.",
            "  • Never trust user input — validate server-side.",
            "  • Input validation protects backend; output encoding protects frontend.",
            "  • Injection: mixing untrusted data with code. Defense = parameterized queries.",
            "  • XSS: executing scripts in victim browser. Defense = output encoding + CSP.",
            "  • Authentication verifies identity; authorization determines access.",
            "  • Session management: unpredictable IDs, expiration, invalidation, HttpOnly/Secure/SameSite.",
            "  • Access control: validate ownership, deny by default, never trust client IDs.",
            "  • CSRF: forged requests with automatic cookie inclusion. Defense = anti-CSRF tokens + SameSite.",
            "  • Client-side trust: never implement security logic in frontend.",
            "  • Security headers: CSP, HSTS, X-Frame-Options.",
            "  • Security is a continuous process, not a one-time activity."
        ])
        q1 = ask("An application uses HTTPS, has a WAF, and validates user input. However, it still suffers from XSS because user-submitted comments are displayed in the browser without any encoding. Which defense was missing?",
            ["Stronger HTTPS cipher suites", "Output encoding before rendering user content in the browser",
             "A faster web server", "More firewall rules"], 2,
            None, {1:["HTTPS was already in place. The issue is application-level rendering."],3:["Server speed doesn't prevent XSS."],4:["WAF/firewall rules might catch some XSS but are not a replacement for proper output encoding."]},
            "Slide 79: 'Encode output before rendering user-controlled content.' Slide 36: 'Output encoding protects the frontend.' Without encoding, the browser interprets attacker input as executable code.")
        self.ms(); self.sc(q1)

        q2 = ask("Complete the core web security principle: Input validation protects the ___, and output encoding protects the ___.",
            ["frontend; backend", "backend; frontend",
             "database; network", "network; database"], 2,
            None, {1:["Reversed."],3:["The module specifically distinguishes backend vs frontend protection."],4:["Network and database are not the dichotomy used in the lecture."]},
            "Slide 36: 'Input validation protects the backend.' 'Output encoding protects the frontend.' Input validation prevents malicious data from reaching backend systems. Output encoding prevents malicious data from executing in the user's browser.")
        self.ms(); self.sc(q2)

        q3 = ask("A web application uses sequential numeric IDs for user profiles (/user/1, /user/2). It checks if the visitor is logged in but does not verify profile ownership. This is an example of:",
            ["SQL injection", "Insecure Direct Object Reference (IDOR) + missing authorization",
             "Cross-site scripting", "CSRF"], 2,
            None, {1:["No SQL query manipulation is described."],3:["No script injection is described."],4:["No forged request via victim's browser is described."]},
            "Slide 65: IDOR = 'Application exposes internal identifiers.' 'Server trusts client-provided identifiers.' Missing authorization check = 'Users access resources beyond their assigned permissions.'")
        self.ms(); self.sc(q3)

        q4 = ask("Which of the following HTTP cookie attributes should be used together to maximize session security? (Select the best combination)",
            ["HttpOnly + Secure + SameSite", "HttpOnly only",
             "Secure only", "Path only"], 1,
            None, {2:["HttpOnly alone doesn't protect against network sniffing or CSRF."],3:["Secure alone doesn't protect against JavaScript theft."],4:["Path alone has minimal security benefit."]},
            "Slide 82: 'Use HttpOnly flag to protect cookies from scripts.' 'Use Secure flag to restrict cookies to HTTPS.' 'Set SameSite attribute to mitigate CSRF risks.' All three together provide defense against XSS (HttpOnly), network sniffing (Secure), and CSRF (SameSite).")
        self.ms(); self.sc(q4)

        q5 = ask("A developer believes their application is secure because they cannot think of any way to attack it. What mindset should they adopt instead?",
            ["Assume attackers cannot find any bugs", "Think like an attacker during design and testing — intercept, modify, and replay requests",
             "Trust that open-source libraries are always secure", "Assume users will never try anything malicious"], 2,
            None, {1:["This is complacency, not a security mindset."],3:["Open-source libraries have vulnerabilities too."],4:["Users are not the only threat — automated scanners and attackers are."]},
            "Slide 89: 'Think like attacker during design and testing phases.' 'Intercept, modify, and replay requests to test behavior.' 'Security is continuous process, not one-time activity.'")
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
        print("\nYou have mastered Module 6!")
        print("   • Web architecture & trust boundaries")
        print("   • HTTP fundamentals, statelessness, cookies, HTTPS")
        print("   • Core principles: never trust input, validation, encoding, least privilege, defense in depth, fail securely, zero trust")
        print("   • Injection attacks (SQLi, command injection, template injection)")
        print("   • XSS types (stored, reflected, DOM-based) and defenses")
        print("   • Authentication, session management, and access control attacks")
        print("   • IDOR, session hijacking, weak auth")
        print("   • CSRF attacks and defenses (anti-CSRF tokens, SameSite)")
        print("   • Client-side trust vulnerabilities")
        print("   • Security headers: CSP, HSTS, X-Frame-Options")
        print("   • Defensive strategies for all major web vulnerabilities")
        print("\n🎓 YOU HAVE COMPLETED ALL 6 MODULES!")
        print("You are now a certified cybersecurity foundations master!")

    def game_over(self):
        print("\n" + "="*60)
        print("   💀  GAME OVER  💀")
        print("="*60)
        print(f"Completed {len(self.completed)} of 8 levels.")
        print(f"Score: {self.score} / {self.max_score}")
        print("Review the concepts and try again.")

if __name__ == "__main__":
    Game().start()
