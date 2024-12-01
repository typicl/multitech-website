import { ChangeEvent, useState } from 'react';
import { Footer } from '../components/footer';
import styles from './page.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';

type InputEvent = ChangeEvent<HTMLInputElement>;
const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

export function Contact() {
  const [name, setName] = useState('');
  function handleNameChange(e: InputEvent) {
    setName(e.target.value);
  }
  const [phone, setPhone] = useState('');
  function handlePhoneChange(e: InputEvent) {
    setPhone(e.target.value);
  }
  const [email, setEmail] = useState('');
  const [emailValidated, setEmailValidated] = useState(false);
  function handleEmailChange(e: InputEvent) {
    const email = e.target.value;
    setEmail(email);
    if (emailRegex.test(email)) {
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
  }
  const [message, setMessage] = useState('');
  function handleMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }
  const [captchaValidated, setCaptchaValidated] = useState(false);
  function handleCaptchaSuccess() {
    setCaptchaValidated(true);
  }
  function handleCaptchaExpired() {
    setCaptchaValidated(false);
  }
  return (
    <div>
      <main className={styles.page}>
        <section className={styles.section}>
          <h2>Contact Us</h2>
          <h3>Start saving time and money today</h3>
          <p>
            We work hand in hand with you to support your growth. As your
            technology partner, our reward comes from your success and your
            growth.
          </p>
        </section>
        <section className={styles.section}>
          <div className={styles.contactGroup}>
            <div>
              <h5>Send us a message</h5>
              <p>
                Send a message to our team and we'll get back ni touch within 2
                business days.
              </p>

              <form>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="First and last name"
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(123) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="email@domain.com"
                  />
                </div>
                <div>
                  <label htmlFor="message">Message (optional)</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Add your message here..."
                  />
                </div>
                <ReCAPTCHA
                  sitekey="6Lfpvo4qAAAAALsZfz7sBy6BPSXH-L3z11WjYLW7"
                  onChange={handleCaptchaSuccess}
                  onExpired={handleCaptchaExpired}
                />
                <div className={styles.buttonWrapper}>
                  <button
                    type="submit"
                    disabled={!captchaValidated || !emailValidated}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className={styles.details}>
              <div>
                <h5>Email</h5>
                <p>Send us an email at:</p>
                <a href="mailto:sales@multitechofficemachines.com">
                  sales@multitechofficemachines.com
                </a>
              </div>
              <div>
                <h5>Phone</h5>
                <p>Call us at:</p>
                <a href="tel:1-800-641-5291">1-800-641-5291</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
