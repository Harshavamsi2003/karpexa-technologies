import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import useReveal from '../hooks/useReveal';
import { brand } from '../data/content';
import '../styles/contact.css';

export default function Contact() {
  useReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); }; // wire to your email service

  return (
    <>
      <PageHeader
        kicker="Contact"
        title={<>Let’s <span className="em">connect</span></>}
        sub="Tell us what you’re trying to achieve. We’ll come back with a clear, practical next step — usually within one business day."
      />
      <section className="contact">
        <div className="container contact__wrap">
          <aside className="contact__info reveal">
            <div className="contact__block">
              <span className="contact__label">Email</span>
              <a className="contact__value" href={`mailto:${brand.email}`}>{brand.email}</a>
            </div>
            <div className="contact__block">
              <span className="contact__label">Phone</span>
              <a className="contact__value" href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
            </div>
            <div className="contact__block">
              <span className="contact__label">Office</span>
              <span className="contact__value">{brand.address}</span>
            </div>
          </aside>

          <div className="reveal">
            {sent ? (
              <div className="contact__success" role="status">
                <div className="contact__check" aria-hidden="true">✓</div>
                <h2>Message received</h2>
                <p>Thanks, {form.name || 'there'} — we’ve got your note and will be in touch shortly.</p>
                <button className="btn btn--ghost-light" onClick={() => { setSent(false); setForm({ name: '', email: '', company: '', message: '' }); }}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={submit} noValidate>
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" value={form.name} onChange={update} required autoComplete="name" />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="email">Work email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" value={form.company} onChange={update} autoComplete="organization" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">How can we help?</label>
                  <textarea id="message" name="message" rows="5" value={form.message} onChange={update} required />
                </div>
                <button type="submit" className="btn btn--primary contact__submit">Send message →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
