import Image from 'next/image';
const logic = [
  [
    '01',
    'Start with a tag',
    'A contact tag triggers the workflow and the “Free Whitening Offer” message.',
  ],
  [
    '02',
    'Give the contact time',
    'Wait until a reply arrives, or until the one-hour window ends.',
  ],
  [
    '03',
    'Choose the right branch',
    'Check whether the contact replied. A reply moves to an intent check; otherwise, send a second attempt.',
  ],
  [
    '04',
    'Respond to intent',
    'A positive/yes intent receives “Positive Reply – Next Steps.” The other branch receives a separate SMS.',
  ],
];
export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <header id="top">
        <a className="brand" href="#top">
          <b>↳</b> Workflow portfolio
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#logic">The logic</a>
          <a className="outline" href="#connect">
            Let’s connect ↗
          </a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <i /> GOHIGHLEVEL AUTOMATION
            </p>
            <h1>
              A better follow-up.
              <br />
              <em>
                Built into
                <br />
                the workflow.
              </em>
            </h1>
            <p className="intro">
              I build GoHighLevel workflows that turn a single message into a
              considered customer journey—with timing, reply checks, and a clear
              next step.
            </p>
            <div className="actions">
              <a className="button" href="#work">
                Explore my work <span>↘</span>
              </a>
              <span className="audience">
                For businesses.
                <br />
                For growing teams.
              </span>
            </div>
            <div className="hero-foot">
              <span>01 — FEATURED BUILD</span>
              <span>Offer follow-up & reply routing</span>
            </div>
          </div>
          <a
            className="hero-art"
            href="#work"
            aria-label="Explore the whitening offer workflow"
          >
            <div className="art-toolbar">
              <span>
                <i /> WORKFLOW / 001
              </span>
              <span>BUILT IN GHL ↗</span>
            </div>
            <div className="hero-canvas">
              <Image
                unoptimized
                src="/ghl-whitening-workflow.png"
                width="1050"
                height="1341"
                alt="Actual GoHighLevel workflow showing a whitening offer, reply checks, a second attempt, and intent-based SMS branches."
              />
            </div>
            <div className="art-bottom">
              <span>Whitening offer</span>
              <span className="pill">Reply-based routing</span>
            </div>
          </a>
        </section>
        <div className="strip">
          <strong>FROM TRIGGER TO NEXT STEP</strong>
          <span>Contact tags</span>
          <span>Timed waits</span>
          <span>Reply conditions</span>
          <span>Intent branches</span>
        </div>
        <section className="section featured" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2>
                One offer.
                <br />
                <em>More than one path.</em>
              </h2>
            </div>
            <p>
              A whitening-offer workflow built in GoHighLevel. The follow-up
              changes depending on whether someone responds and whether their
              reply is positive.
            </p>
          </div>
          <div className="case-grid">
            <div className="case-copy">
              <span className="project-label">OFFER FOLLOW-UP</span>
              <h3>
                Whitening offer
                <br />
                response workflow
              </h3>
              <p>
                The aim: give each contact a relevant next message, while
                keeping the initial follow-up sequence organized.
              </p>
              <dl>
                <div>
                  <dt>Platform</dt>
                  <dd>GoHighLevel</dd>
                </div>
                <div>
                  <dt>Entry point</dt>
                  <dd>Contact tag</dd>
                </div>
                <div>
                  <dt>First wait</dt>
                  <dd>Reply or 1 hour</dd>
                </div>
                <div>
                  <dt>Routing</dt>
                  <dd>Reply + positive intent</dd>
                </div>
              </dl>
              <a
                className="dark-button"
                href="/ghl-whitening-workflow.png"
                target="_blank"
                rel="noreferrer"
              >
                Open original screenshot ↗
              </a>
              <p className="evidence">
                Original workflow screenshot. Performance results and a live
                demo are not yet included.
              </p>
            </div>
            <figure className="full-workflow">
              <div className="figure-heading">
                <span>THE ACTUAL BUILD</span>
                <a
                  href="/ghl-whitening-workflow.png"
                  target="_blank"
                  rel="noreferrer"
                >
                  View full size ↗
                </a>
              </div>
              <a
                href="/ghl-whitening-workflow.png"
                target="_blank"
                rel="noreferrer"
                aria-label="Open full-resolution workflow screenshot"
              >
                <Image
                  unoptimized
                  src="/ghl-whitening-workflow.png"
                  width="1050"
                  height="1341"
                  loading="lazy"
                  alt="Full original workflow: contact tag, Free Whitening Offer, wait for reply or one hour, reply branch with positive-intent check, or second attempt followed by another intent check."
                />
              </a>
              <figcaption>
                Contact tag → offer → wait → reply check → intent-based
                messages.
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="section logic" id="logic">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BEHIND THE BUILD</p>
              <h2>
                The decisions
                <br />
                <em>make the difference.</em>
              </h2>
            </div>
            <p>
              A readable breakdown of the workflow shown above, from the first
              trigger to the final message.
            </p>
          </div>
          <div className="logic-grid">
            {logic.map(([n, title, body]) => (
              <article key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="route-summary">
            <span className="route-label">AT THE FIRST REPLY CHECK</span>
            <div>
              <span className="route-tag">REPLIED</span>
              <p>
                Check positive intent <b>→</b> Next steps or alternate SMS
              </p>
            </div>
            <div>
              <span className="route-tag secondary">NO REPLY</span>
              <p>
                Second attempt <b>→</b> Wait for reply <b>→</b> Check positive
                intent
              </p>
            </div>
          </div>
        </section>
        <section className="section connect" id="connect">
          <div>
            <p className="eyebrow">PROJECTS & OPPORTUNITIES</p>
            <h2>
              Good follow-up
              <br />
              starts with
              <br />
              <em>a conversation.</em>
            </h2>
          </div>
          <div className="connect-copy">
            <p>
              Looking for help with a GoHighLevel workflow, or adding CRM
              automation skills to your team?
            </p>
            <p className="pending">Contact details coming soon.</p>
            <span className="evidence">Portfolio in progress.</span>
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#top">
          ↳ Workflow portfolio
        </a>
        <span>GoHighLevel · Selected work</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
