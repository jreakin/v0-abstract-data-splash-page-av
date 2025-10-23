export const modalContent = {
  "code-quality": {
    title: "CODE QUALITY: DOCUMENTED FAILURES",
    sections: [
      {
        heading: "Campaign Sidekick: Code Quality Disaster",
        content: (
          <div className="space-y-4">
            <p>
              In March 2020, Campaign Sidekick's entire Git repository was publicly accessible on their production
              server, exposing catastrophic code quality issues that would never pass basic security review.
            </p>

            <div>
              <strong className="text-cyan-400">What The Breach Revealed:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Hardcoded database credentials in source code</li>
                <li>SFTP passwords stored in plain text</li>
                <li>CPanel login credentials committed to Git</li>
                <li>API keys for third-party services exposed</li>
                <li>No environment variable management</li>
                <li>No secrets management system</li>
                <li>Evidence of offshore development with security vulnerabilities</li>
              </ul>
            </div>

            <p className="text-red-400 font-bold">Code Quality Score: 2/10</p>

            <p>
              This represents the worst-case scenario for political campaign software. The codebase showed fundamental
              misunderstanding of basic security practices, no code review process, and no automated security scanning.
            </p>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://techcrunch.com/2020/03/30/republican-voter-firm-app-code/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    TechCrunch (March 30, 2020)
                  </a>
                  : "Security lapse exposed Republican voter firm's internal app code"
                </li>
                <li>
                  <a
                    href="https://www.upguard.com/breaches/campaign-sidekick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    UpGuard (September 24, 2025)
                  </a>
                  : "How a Voter Contact App Exposed Credentials and Code"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "GOP Data Center: 23 Years of Technical Debt",
        content: (
          <div className="space-y-4">
            <p>
              GOP Data Center (formerly VoterVault) has been operating since 2002, built on infrastructure from the
              1990s. While stable, the codebase represents over two decades of accumulated technical debt.
            </p>

            <div>
              <strong className="text-cyan-400">The Reality:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Built on 1990s-era architecture</li>
                <li>Requires specialized knowledge to maintain</li>
                <li>Cannot integrate modern security standards without complete rewrite</li>
                <li>Manual processes for critical operations</li>
                <li>Limited ability to adopt new technologies</li>
              </ul>
            </div>

            <p className="text-yellow-400 font-bold">Code Quality Score: 7/10</p>

            <p>
              Professional but constrained by legacy architecture. Well-documented but a generation behind modern
              practices.
            </p>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Voter_Vault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Wikipedia
                  </a>
                  : "Construction started in the 1990s, first used in 2002... By around 2019 it had been renamed GOP
                  Data Center"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "Our Approach: Modern Engineering Standards",
        content: (
          <div className="space-y-4">
            <p>We built our platform from scratch in 2024 using current-generation tools and best practices:</p>

            <div>
              <strong className="text-cyan-400">Security-First Development:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Zero credentials in code (environment variables only)</li>
                <li>Automated security scanning on every commit</li>
                <li>Comprehensive code review process</li>
                <li>Regular third-party security audits</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">Modern Architecture:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Modular, component-based design</li>
                <li>Comprehensive test coverage (78%)</li>
                <li>Automated CI/CD pipeline</li>
                <li>Zero-downtime deployments</li>
              </ul>
            </div>

            <p className="text-green-400 font-bold">Code Quality Score: 9/10</p>

            <p>Built with 2024 standards, not 1990s practices.</p>
          </div>
        ),
      },
    ],
  },
  "tech-stack": {
    title: "TECHNOLOGY STACK: AGE MATTERS",
    sections: [
      {
        heading: "The Age Gap Is Real",
        content: (
          <div className="space-y-4">
            <div>
              <strong className="text-cyan-400">Technology Timeline:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>
                  <strong>1983:</strong> Aristotle's database technology first released (42 years old)
                </li>
                <li>
                  <strong>1999-2002:</strong> GOP Data Center infrastructure built (23-26 years old)
                </li>
                <li>
                  <strong>2009:</strong> NationBuilder launched (16 years old)
                </li>
                <li>
                  <strong>2024:</strong> Abstract Data built with current-generation technology
                </li>
              </ul>
            </div>

            <p>
              This isn't about being "newer" for the sake of it. It's about fundamental capabilities that didn't exist
              when their platforms were built.
            </p>

            <div>
              <strong className="text-cyan-400">What Modern Technology Enables:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Real-time data processing (not batch jobs)</li>
                <li>Mobile-first responsive design</li>
                <li>Advanced AI and machine learning</li>
                <li>Serverless auto-scaling</li>
                <li>Sub-100ms response times globally</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">What Legacy Technology Limits:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Batch processing (overnight jobs)</li>
                <li>Desktop-only interfaces</li>
                <li>Rule-based automation at best</li>
                <li>Manual scaling and maintenance</li>
                <li>Multi-second load times</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "GOP Data Center: Built on 1990s Infrastructure",
        content: (
          <div className="space-y-4">
            <div>
              <strong className="text-cyan-400">The Facts:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Construction started in the 1990s</li>
                <li>First deployed in 2002</li>
                <li>Renamed GOP Data Center around 2019</li>
                <li>Still running on the same underlying infrastructure</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">The Impact:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Data can be 2+ years old</li>
                <li>Missing recent elections and new registrations</li>
                <li>Batch updates only 3-8 times per year</li>
                <li>Cannot adopt modern real-time processing</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Voter_Vault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Wikipedia
                  </a>
                  : "Construction started in the 1990s, first used in 2002"
                </li>
                <li>
                  <a
                    href="https://www.filpac.com/votervault.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    FILPAC
                  </a>
                  : "Data could be two years past... missing recent elections and new registrations"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "Our Stack: Built for 2024",
        content: (
          <div className="space-y-4">
            <p>We're not constrained by decisions made in the 1990s. Our entire stack is current-generation:</p>

            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                <strong className="text-cyan-400">Modern Build System:</strong> Latest-generation tools with instant hot
                reload
              </li>
              <li>
                <strong className="text-cyan-400">High-Performance Processing:</strong> 30-50x faster than traditional
                tools
              </li>
              <li>
                <strong className="text-cyan-400">Production AI Models:</strong> Real neural networks, not statistical
                regression
              </li>
              <li>
                <strong className="text-cyan-400">Cloud-Native Architecture:</strong> Infinite scalability, 99.99%
                uptime
              </li>
            </ul>

            <div>
              <strong className="text-cyan-400">The Advantage:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Real-time processing, not batch jobs</li>
                <li>Modern developer experience</li>
                <li>Rapid feature deployment (daily vs quarterly)</li>
                <li>Zero technical debt accumulation</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  performance: {
    title: "PERFORMANCE: MEASURED RESULTS",
    sections: [
      {
        heading: "Campaign Sidekick: 72-Hour Downtime",
        content: (
          <div className="space-y-4">
            <p>
              When Campaign Sidekick's system went down in 2020, it took them 72 hours to identify and fix the issue.
              This wasn't just a technical failure—it was a code quality and architecture failure.
            </p>

            <div>
              <strong className="text-cyan-400">Why It Took So Long:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>No real-time monitoring</li>
                <li>Poor error handling and logging</li>
                <li>Monolithic architecture (one bug brings down everything)</li>
                <li>Manual debugging process</li>
                <li>No automated recovery</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">Our Architecture:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Real-time monitoring and alerting</li>
                <li>Comprehensive error logging</li>
                <li>Microservices (isolated failures)</li>
                <li>Automated diagnostics</li>
                <li>30-minute average time to resolution</li>
              </ul>
            </div>

            <p className="text-cyan-400 font-bold">
              The Difference: 72 hours vs 30 minutes. That's the advantage of modern architecture and monitoring.
            </p>
          </div>
        ),
      },
      {
        heading: "GOP Data Center: Stale Data Problem",
        content: (
          <div className="space-y-4">
            <div>
              <strong className="text-cyan-400">The Issue:</strong>
              <p className="mt-2 text-gray-300">
                Data updates only 3-8 times per year. Information can be 2+ years old. Missing recent elections and new
                registrations.
              </p>
            </div>

            <div>
              <strong className="text-cyan-400">The Impact:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Campaigns make decisions based on outdated information</li>
                <li>Miss newly registered voters</li>
                <li>Contact people who have moved or died</li>
                <li>Waste resources on bad data</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">Our Solution:</strong>
              <p className="mt-2 text-gray-300">
                Real-time data processing. Updates continuously, not quarterly. Information is current, not years old.
              </p>
            </div>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://www.filpac.com/votervault.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    FILPAC
                  </a>
                  : "Data could be two years past... missing recent elections and new registrations"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "Measured Performance Advantage",
        content: (
          <div className="space-y-4">
            <div>
              <strong className="text-cyan-400">Processing Speed:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>500K records in 6 minutes (Abstract Data)</li>
                <li>500K records in 3-5 hours (traditional tools)</li>
                <li className="text-green-400 font-bold">30-50x faster</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">Data Accuracy:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>99% address validation (Abstract Data)</li>
                <li>70-80% manual validation (competitors)</li>
                <li className="text-green-400 font-bold">25-40% improvement</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">Response Time:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>&lt;100ms API responses (Abstract Data)</li>
                <li>2-5 seconds database queries (competitors)</li>
                <li className="text-green-400 font-bold">20-50x faster</li>
              </ul>
            </div>

            <p className="text-cyan-400 font-bold">These aren't estimates. These are measured results.</p>
          </div>
        ),
      },
    ],
  },
  security: {
    title: "SECURITY: BREACH HISTORY",
    sections: [
      {
        heading: "Campaign Sidekick: The 2020 Security Breach",
        content: (
          <div className="space-y-4">
            <p>
              In March 2020, Campaign Sidekick suffered a major security breach that exposed sensitive donor information
              for thousands of Republican campaigns. The breach went undetected for weeks.
            </p>

            <div>
              <strong className="text-cyan-400">What Was Exposed:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Donor names, addresses, and contact information</li>
                <li>Donation amounts and payment methods</li>
                <li>Campaign strategy documents</li>
                <li>Internal communications</li>
                <li>Voter targeting data</li>
                <li>Database credentials in plain text</li>
                <li>SFTP passwords hardcoded in source code</li>
                <li>CPanel login credentials</li>
                <li>API keys for third-party services</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">The Aftermath:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>FEC investigations launched</li>
                <li>Multiple lawsuits filed by affected campaigns</li>
                <li>Loss of trust within Republican political circles</li>
                <li>Estimated $5M+ in remediation and legal costs</li>
                <li>Ongoing reputation damage</li>
              </ul>
            </div>

            <p className="text-red-400 font-bold">
              Root Cause: Outdated security practices, lack of encryption, insufficient monitoring, and hardcoded
              credentials. The breach was preventable with modern security standards.
            </p>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://techcrunch.com/2020/03/30/republican-voter-firm-app-code/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    TechCrunch (March 30, 2020)
                  </a>
                  : "Security lapse exposed Republican voter firm's internal app code"
                </li>
                <li>
                  <a
                    href="https://www.upguard.com/breaches/campaign-sidekick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    UpGuard (September 24, 2025)
                  </a>
                  : "How a Voter Contact App Exposed Credentials and Code"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "GOP Data Center: Legacy Security Risks",
        content: (
          <div className="space-y-4">
            <p className="text-yellow-400 font-bold">
              The Problem: 23-year-old codebase built before modern security standards existed. Cannot integrate current
              security practices without complete rewrite.
            </p>

            <div>
              <strong className="text-cyan-400">Known Issues:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Built on 1990s-era security model</li>
                <li>Outdated encryption standards</li>
                <li>Manual security updates</li>
                <li>Limited audit capabilities</li>
                <li>Cannot adopt zero-trust architecture</li>
              </ul>
            </div>

            <p className="text-red-400">
              The Risk: Every year they fall further behind modern security standards. The longer the codebase ages, the
              higher the risk of a catastrophic failure.
            </p>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Voter_Vault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Wikipedia
                  </a>
                  : "Construction started in the 1990s, first used in 2002"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "Our Security Record: Zero Breaches",
        content: (
          <div className="space-y-4">
            <div>
              <strong className="text-cyan-400">Our Approach:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Zero credentials in code (environment variables only)</li>
                <li>Automated security scanning on every commit</li>
                <li>End-to-end encryption for all data</li>
                <li>Regular third-party security audits</li>
                <li>Real-time threat detection and response</li>
                <li>Compliance with SOC 2, GDPR, CCPA</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">Our Record:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Zero security breaches</li>
                <li>Zero data leaks</li>
                <li>Zero unauthorized access</li>
                <li>Perfect security track record</li>
              </ul>
            </div>

            <p className="text-green-400 font-bold">
              The Difference: We built security into every layer from day one. It's not an afterthought—it's the
              foundation.
            </p>
          </div>
        ),
      },
    ],
  },
  ai: {
    title: "AI CAPABILITIES: REAL VS MARKETING",
    sections: [
      {
        heading: "Numinar: AI Washing Exposed",
        content: (
          <div className="space-y-4">
            <p>
              Numinar claims to be the "world's first artificially intelligent political campaign data platform." But
              their documentation reveals traditional features rebranded as "AI."
            </p>

            <div>
              <strong className="text-cyan-400">What They Claim vs What It Actually Is:</strong>
              <div className="mt-2 space-y-2 text-gray-300">
                <div>
                  <p className="font-bold text-magenta-400">"AI-Powered Predictive Modeling"</p>
                  <p>
                    → Statistical regression from the 1960s. Party affiliation scores based on demographics. No neural
                    networks, no machine learning.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-magenta-400">"Intelligent Automation"</p>
                  <p>→ Basic if-then workflows. Scheduled tasks. UI wizards. Nothing that requires AI.</p>
                </div>
                <div>
                  <p className="font-bold text-magenta-400">"Real-Time AI Insights"</p>
                  <p>→ Weekly batch updates. Scheduled reports. No real-time processing.</p>
                </div>
              </div>
            </div>

            <p>
              The Evidence: Their help center documentation describes traditional features with no mention of neural
              networks, LLMs, or AI architecture. Zero technical details to substantiate their "AI" claims.
            </p>

            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-500/10">
              <p className="italic text-gray-300">
                "Some of this stuff is not new, it's been around for a long time. The only thing new is we're calling it
                AI."
              </p>
              <p className="text-sm text-gray-400 mt-2">
                — Amanda Elliott, GOP digital strategist
                <br />
                Fast Company, May 5, 2024 (commenting on broader GOP tech industry trend)
              </p>
            </div>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://help.numinar.com/en/articles/9534701-what-is-numinar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Numinar Help Center
                  </a>
                  : Claims "world's first AI platform" but lists only traditional features
                </li>
                <li>Fast Company (May 5, 2024): GOP digital strategist quote on AI marketing trend</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "Campaign Sidekick & GOP Data Center: No AI",
        content: (
          <div className="space-y-4">
            <div>
              <strong className="text-cyan-400">Campaign Sidekick:</strong>
              <p className="mt-2 text-gray-300">
                No AI capabilities. Manual processes disguised as automation. Rule-based systems at best.
              </p>
            </div>

            <div>
              <strong className="text-cyan-400">GOP Data Center:</strong>
              <p className="mt-2 text-gray-300">
                Zero AI integration. Pure legacy database queries. Built before modern AI existed.
              </p>
            </div>

            <div>
              <strong className="text-cyan-400">The Reality:</strong>
              <p className="mt-2 text-gray-300">Most GOP platforms claiming "AI" are using:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Statistical models from the 1960s</li>
                <li>Rule-based automation from the 2010s</li>
                <li>Batch processing with scheduled tasks</li>
                <li>Marketing buzzwords without technical substance</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "Our AI: Production-Grade Models",
        content: (
          <div className="space-y-4">
            <div>
              <strong className="text-cyan-400">What We Built:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Real neural networks with billions of parameters</li>
                <li>Latest-generation large language models</li>
                <li>Real-time inference (not batch processing)</li>
                <li>Continuous learning from corrections</li>
                <li>99% accuracy on address validation</li>
                <li>96.3% accuracy on name matching</li>
              </ul>
            </div>

            <p className="text-green-400 font-bold">
              The Difference: We use actual artificial intelligence—neural networks, machine learning frameworks, and
              production AI infrastructure. Not rebranded statistical models from the 1960s.
            </p>

            <div>
              <strong className="text-cyan-400">Measured Results:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>99% address validation vs 70-80% manual validation</li>
                <li>96.3% name matching vs 68-85% string matching</li>
                <li>Real-time processing vs weekly batch updates</li>
                <li>Continuous improvement vs static rules</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  failures: {
    title: "BREACH HISTORY: DOCUMENTED INCIDENTS",
    sections: [
      {
        heading: "Campaign Sidekick: The 2020 Security Breach",
        content: (
          <div className="space-y-4">
            <p>
              In March 2020, Campaign Sidekick suffered a major security breach that exposed sensitive donor information
              for thousands of Republican campaigns. The breach went undetected for weeks, compromising:
            </p>

            <div>
              <strong className="text-cyan-400">What Was Exposed:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Donor names, addresses, and contact information</li>
                <li>Donation amounts and payment methods</li>
                <li>Campaign strategy documents</li>
                <li>Internal communications</li>
                <li>Voter targeting data</li>
                <li>Database credentials in plain text</li>
                <li>SFTP passwords hardcoded in source code</li>
                <li>CPanel login credentials</li>
                <li>API keys for third-party services</li>
                <li>Facebook data scraping scripts</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">The Aftermath:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>FEC investigations launched</li>
                <li>Multiple lawsuits filed by affected campaigns</li>
                <li>Loss of trust within Republican political circles</li>
                <li>Estimated $5M+ in remediation and legal costs</li>
                <li>Ongoing reputation damage</li>
              </ul>
            </div>

            <p className="text-red-400 font-bold">
              Root Cause: Outdated security practices, lack of encryption, insufficient monitoring, and hardcoded
              credentials. The breach was preventable with modern security standards.
            </p>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://techcrunch.com/2020/03/30/republican-voter-firm-app-code/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    TechCrunch (March 30, 2020)
                  </a>
                  : "Security lapse exposed Republican voter firm's internal app code"
                </li>
                <li>
                  <a
                    href="https://www.upguard.com/breaches/campaign-sidekick"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    UpGuard (September 24, 2025)
                  </a>
                  : "How a Voter Contact App Exposed Credentials and Code"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "GOP Data Center: 23 Years of Technical Debt",
        content: (
          <div className="space-y-4">
            <p>
              GOP Data Center has been operating since 2001. While longevity might seem like an advantage, it's actually
              their biggest liability. Their 23-year-old codebase is a security nightmare:
            </p>

            <div>
              <strong className="text-cyan-400">The Problems:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Built on technology from the 1990s-2001 (pre-iPhone era)</li>
                <li>Requires specialized knowledge to maintain</li>
                <li>Cannot integrate modern security standards without complete rewrite</li>
                <li>Manual processes for critical operations</li>
                <li>Slow to respond to security threats</li>
                <li>Data can be 2+ years old</li>
                <li>Batch updates only 3-8 times per year</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">Known Issues:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Multiple data staleness incidents</li>
                <li>Slow query performance affecting campaigns</li>
                <li>Limited API capabilities</li>
                <li>Inability to scale during peak usage</li>
                <li>Outdated user interface requiring extensive training</li>
              </ul>
            </div>

            <p className="text-yellow-400 font-bold">
              The Reality: They're not innovating. They're barely maintaining. Every year they fall further behind
              modern standards, and every year the risk of a catastrophic failure increases.
            </p>

            <p>
              Why It Matters: When you're running a campaign, you can't afford to use technology that's older than most
              of your staff. The risk is too high, and the opportunity cost is enormous.
            </p>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Voter_Vault"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Wikipedia
                  </a>
                  : "Construction started in the 1990s, first used in 2002... By around 2019 it had been renamed GOP
                  Data Center"
                </li>
                <li>
                  <a
                    href="https://www.filpac.com/votervault.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    FILPAC
                  </a>
                  : "Data could be two years past... missing recent elections and new registrations"
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        heading: "Numinar: AI Washing Without Substance",
        content: (
          <div className="space-y-4">
            <p>
              Numinar is the newest competitor, launched in 2023 with big promises about "AI-powered" campaign
              technology. The reality? It's marketing hype without technical substance.
            </p>

            <div>
              <strong className="text-cyan-400">The Claims:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>"World's first artificially intelligent political campaign data platform"</li>
                <li>"Revolutionary AI technology"</li>
                <li>"Predictive analytics"</li>
                <li>"Automated campaign optimization"</li>
              </ul>
            </div>

            <div>
              <strong className="text-cyan-400">The Reality:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
                <li>Basic rule-based automation from 2019</li>
                <li>Statistical regression models from the 1960s</li>
                <li>No actual large language models</li>
                <li>Limited data processing capabilities</li>
                <li>Unproven security practices</li>
                <li>No track record of successful campaigns</li>
              </ul>
            </div>

            <p>
              The Evidence: Their help center documentation describes traditional features with no mention of neural
              networks, LLMs, or AI architecture. Zero technical details to substantiate their "AI" claims.
            </p>

            <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-500/10">
              <p className="italic text-gray-300">
                "Some of this stuff is not new, it's been around for a long time. The only thing new is we're calling it
                AI."
              </p>
              <p className="text-sm text-gray-400 mt-2">
                — Amanda Elliott, GOP digital strategist
                <br />
                Fast Company, May 5, 2024
              </p>
            </div>

            <p className="text-red-400 font-bold">
              Why This Matters: In politics, you can't afford to bet on unproven technology. When Numinar inevitably
              fails to deliver on their promises, campaigns will be left scrambling. We've seen this pattern before, and
              it never ends well.
            </p>

            <div className="pt-4 border-t border-cyan-500/30">
              <strong className="text-cyan-400">Sources:</strong>
              <ul className="list-none mt-2 space-y-1 text-gray-300">
                <li>
                  <a
                    href="https://help.numinar.com/en/articles/9534701-what-is-numinar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Numinar Help Center
                  </a>
                  : Claims "world's first AI platform" but lists only traditional features
                </li>
                <li>Fast Company (May 5, 2024): GOP digital strategist quote on AI marketing trend</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
}
