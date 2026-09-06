const projects = [
  {
    id: 'lead-follow-up',
    number: '02',
    category: 'LEAD MANAGEMENT',
    title: 'New lead → next conversation',
    description:
      'A follow-up journey that captures an enquiry, assigns ownership, and checks for a response before sending another message.',
    tone: 'blue',
    trigger: 'Enquiry form submitted',
    steps: [
      'Create or update contact',
      'Assign owner + open opportunity',
      'Send acknowledgement',
      'Wait, then check reply or booking',
    ],
    left: 'Replied / booked → end nurture',
    right: 'No response → bounded follow-up',
    goal: 'Keep incoming enquiries organized and give the team a clear handoff.',
    conditions:
      'Before each message, check channel consent, opt-out status, reply status, and appointment status. Prevent duplicate active entries.',
    handoff:
      'Notify the assigned owner when a contact responds. End automated nurture when a booking is made.',
    checks: [
      'Submit a new contact and an existing contact.',
      'Reply before the next scheduled message.',
      'Book an appointment or opt out during the wait.',
    ],
  },
  {
    id: 'appointment-journey',
    number: '03',
    category: 'APPOINTMENT AUTOMATION',
    title: 'Booked → ready to attend',
    description:
      'A confirmation and reminder sequence that follows appointment status, with separate handling for changes and cancellations.',
    tone: 'violet',
    trigger: 'Appointment booked',
    steps: [
      'Send booking confirmation',
      'Wait until 24 hours before',
      'Recheck appointment status',
      'Send reminder when eligible',
    ],
    left: 'Rescheduled → use new time',
    right: 'Cancelled → stop reminders',
    goal: 'Give customers timely appointment information and keep outdated reminders from reaching them.',
    conditions:
      'Use the appointment time and contact timezone. For short-notice bookings, skip reminder windows that have already passed. Recheck status before each send.',
    handoff:
      'After the appointment, move the opportunity to the appropriate attended or no-show stage for team follow-up.',
    checks: [
      'Book more than 24 hours ahead and at short notice.',
      'Reschedule after the first confirmation.',
      'Cancel while the contact is waiting.',
    ],
  },
  {
    id: 'client-onboarding',
    number: '04',
    category: 'CLIENT OPERATIONS',
    title: 'New client → clear kickoff',
    description:
      'A structured welcome journey that requests intake details, creates an internal task, and keeps the kickoff process visible.',
    tone: 'green',
    trigger: 'Opportunity marked won',
    steps: [
      'Apply onboarding tag',
      'Send welcome + intake link',
      'Create owner kickoff task',
      'Wait, then check intake status',
    ],
    left: 'Completed → kickoff handoff',
    right: 'Outstanding → reminder + task',
    goal: 'Make the first steps after a sale clear to both the client and the delivery team.',
    conditions:
      'Use an onboarding-in-progress tag to prevent duplicate starts. Check whether the intake form has already been submitted before sending a reminder.',
    handoff:
      'Once intake is complete, notify the owner and move the opportunity into the ready-for-kickoff stage.',
    checks: [
      'Mark a test opportunity won twice.',
      'Complete intake before the reminder.',
      'Leave intake incomplete and verify the owner task.',
    ],
  },
];
export default function PortfolioProjects() {
  return (
    <section className="section portfolio-section" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE PORTFOLIO / 04 WORKFLOWS</p>
          <h2>
            Different journeys.
            <br />
            <em>Thoughtful automation.</em>
          </h2>
        </div>
        <p>
          Explore offer follow-up, lead management, appointment journeys, and
          client onboarding. Each project opens up the trigger, the decisions,
          and the next step.
        </p>
      </div>
      <div className="portfolio-grid">
        <article className="portfolio-card featured-card">
          <div className="card-map offer-map">
            <span className="map-kicker">01 / OFFER FOLLOW-UP</span>
            <div className="mini-node">Contact tag added</div>
            <span className="map-line" />
            <div className="mini-node">Whitening offer → wait for reply</div>
            <span className="map-line" />
            <div className="mini-branches">
              <span>Reply → intent check</span>
              <span>No reply → second attempt</span>
            </div>
          </div>
          <div className="portfolio-card-copy">
            <div className="card-meta">
              <span>GHL BUILD</span>
              <span>01</span>
            </div>
            <h3>One offer. A relevant next step.</h3>
            <p>
              A whitening-offer sequence with a one-hour reply window, a second
              attempt, and positive-intent routing.
            </p>
            <div className="project-tags">
              <span>SMS</span>
              <span>Wait conditions</span>
              <span>Reply routing</span>
            </div>
            <a className="project-open" href="#whitening-project">
              Explore the project <span>↗</span>
            </a>
          </div>
        </article>
        {projects.map((p) => (
          <article className={'portfolio-card ' + p.tone} id={p.id} key={p.id}>
            <div className="card-map">
              <span className="map-kicker">
                {p.number} / {p.category}
              </span>
              <div className="mini-node">{p.trigger}</div>
              <span className="map-line" />
              <div className="mini-node">{p.steps[0]}</div>
              <span className="map-line" />
              <div className="mini-branches">
                <span>{p.left}</span>
                <span>{p.right}</span>
              </div>
            </div>
            <div className="portfolio-card-copy">
              <div className="card-meta">
                <span>DEMO DESIGN</span>
                <span>{p.number}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                <span>GoHighLevel</span>
                <span>{p.category.toLowerCase()}</span>
              </div>
              <details className="project-details">
                <summary className="project-open">
                  Explore the workflow <span>＋</span>
                </summary>
                <div className="project-expanded">
                  <p className="demo-context">
                    Portfolio demo design · Not a deployed client project.
                  </p>
                  <h4>The objective</h4>
                  <p>{p.goal}</p>
                  <h4>Workflow sequence</h4>
                  <ol className="sequence">
                    <li>
                      <span>TRIGGER</span>
                      {p.trigger}
                    </li>
                    {p.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                  <div className="expanded-branches">
                    <p>{p.left}</p>
                    <p>{p.right}</p>
                  </div>
                  <h4>Conditions & exceptions</h4>
                  <p>{p.conditions}</p>
                  <h4>Team handoff</h4>
                  <p>{p.handoff}</p>
                  <h4>Validation plan</h4>
                  <ul>
                    {p.checks.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
