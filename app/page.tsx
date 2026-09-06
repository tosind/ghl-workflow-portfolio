const projects = [
  {
    n: '01',
    title: 'From new lead to booked call.',
    type: 'LEAD FOLLOW-UP',
    desc: 'A clear path from an incoming enquiry to a conversation, with follow-up that stops when the lead responds.',
    steps: [
      'Form submitted',
      'Check contact & consent',
      'Send first response',
      'Wait for reply',
    ],
    yes: 'Reply → notify owner',
    no: 'No reply → follow up',
    detail:
      'Create or update the contact, assign an owner, and update the pipeline. Check reply, booking, and opt-out conditions before each follow-up.',
  },
  {
    n: '02',
    title: 'Keep the appointment moving.',
    type: 'APPOINTMENT REMINDERS',
    desc: 'Confirmation and reminders around the booking, with separate paths for cancellations and reschedules.',
    steps: [
      'Appointment booked',
      'Send confirmation',
      'Wait until reminder time',
      'Check booking status',
    ],
    yes: 'Confirmed → reminder',
    no: 'Cancelled → stop',
    detail:
      'Recheck appointment status before each reminder. Handle reschedules and cancellations, and update the opportunity after the appointment.',
  },
  {
    n: '03',
    title: 'Give older leads a next step.',
    type: 'LEAD REACTIVATION',
    desc: 'A controlled re-engagement sequence for eligible contacts, with replies routed back to a person.',
    steps: [
      'Eligible segment added',
      'Check consent & exclusions',
      'Send re-engagement message',
      'Check engagement',
    ],
    yes: 'Interested → handoff',
    no: 'No engagement → end',
    detail:
      'Exclude opted-out contacts and active opportunities. Keep the sequence bounded, stop on reply or opt-out, and create a task when someone wants to reconnect.',
  },
];
function Flow({
  p,
  compact = false,
}: {
  p: (typeof projects)[number];
  compact?: boolean;
}) {
  return (
    <div className={'flow ' + (compact ? 'compact' : '')}>
      <div className="flow-label">
        <i /> WORKFLOW MAP <span>CONCEPT</span>
      </div>
      {p.steps.map((s, i) => (
        <div className="row" key={s}>
          <div className="node">
            <b>{['↳', '✓', '↗', '◇'][i]}</b>
            <div>
              <small>{['TRIGGER', 'CONDITION', 'ACTION', 'DECISION'][i]}</small>
              <strong>{s}</strong>
            </div>
          </div>
          {i < 3 && <div className="connector" />}
        </div>
      ))}
      <div className="branches">
        <div>{p.yes}</div>
        <div>{p.no}</div>
      </div>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <header id="top">
        <a className="brand" href="#top">
          <b>↳</b> Workflow portfolio <small>DRAFT</small>
        </a>
        <nav>
          <a href="#work">Selected work</a>
          <a href="#approach">Approach</a>
          <a className="outline" href="#connect">
            Let’s connect ↗
          </a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div>
            <p className="eyebrow">
              <i /> GOHIGHLEVEL / CRM AUTOMATION
            </p>
            <h1>
              Less chasing.
              <br />
              More{' '}
              <em>
                moving
                <br />
                forward.
              </em>
            </h1>
            <p className="intro">
              Lead follow-up, appointment journeys, and thoughtful handoffs.
              Explore the logic behind workflows that keep the next step clear.
            </p>
            <div className="actions">
              <a className="button" href="#work">
                Explore the workflows ↘
              </a>
              <a href="#connect">For clients & hiring teams ↗</a>
            </div>
            <p className="note">
              Portfolio in progress · Illustrative concepts below
            </p>
          </div>
          <div className="hero-art">
            <div className="art-label">
              <span>THE NEXT STEP, CONNECTED.</span>
              <span>01 / 03</span>
            </div>
            <Flow p={projects[0]} compact />
            <div className="art-label caption">
              <span>From enquiry</span>
              <span>to a human conversation ↗</span>
            </div>
          </div>
        </section>
        <div className="strip">
          <strong>GOHIGHLEVEL</strong>
          <span>Workflow logic</span>
          <span>CRM pipelines</span>
          <span>Customer journeys</span>
          <span>Team handoffs</span>
        </div>
        <section className="section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORKFLOW CONCEPTS</p>
              <h2>Make the logic visible.</h2>
            </div>
            <p>
              Three example journeys. These are illustrative designs, not
              verified client projects or screenshots from a live GHL account.
            </p>
          </div>
          {projects.map((p) => (
            <article className="project" key={p.n}>
              <div>
                <p className="eyebrow">
                  <span>{p.n}</span> {p.type}
                </p>
                <h3>{p.title}</h3>
                <p className="description">{p.desc}</p>
                <div className="tags">
                  <span>GoHighLevel</span>
                  <span>Concept design</span>
                </div>
                <details>
                  <summary>
                    Explore the workflow <span>＋</span>
                  </summary>
                  <p>{p.detail}</p>
                  <p className="note">
                    Live demo and measured results have not been added.
                  </p>
                </details>
              </div>
              <Flow p={p} />
            </article>
          ))}
        </section>
        <section className="section approach" id="approach">
          <p className="eyebrow">THE APPROACH</p>
          <h2>
            A workflow needs
            <br />
            more than a trigger.
          </h2>
          <div className="principles">
            {[
              [
                '01',
                'Map the journey',
                'Define the entry point, the desired next step, and who takes over.',
              ],
              [
                '02',
                'Account for the exceptions',
                'Plan for replies, duplicate entries, cancellations, and opt-outs.',
              ],
              [
                '03',
                'Test the whole path',
                'Use test contacts to check timing, branches, messages, and handoffs.',
              ],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section connect" id="connect">
          <div>
            <p className="eyebrow">FOR CLIENTS & HIRING TEAMS</p>
            <h2>
              Let’s talk about
              <br />
              the next workflow.
            </h2>
          </div>
          <div>
            <p>
              For project enquiries or CRM automation opportunities, this
              section will contain the portfolio owner’s contact details and
              professional links.
            </p>
            <p className="pending">Contact details coming soon.</p>
            <p className="note">
              This draft is awaiting the owner’s name, real project examples,
              and contact information.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <span>↳ Workflow portfolio</span>
        <span>GoHighLevel automation · Portfolio draft</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
