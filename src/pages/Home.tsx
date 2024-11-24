import cx from 'classnames';
import { Button } from '../components/button';
import { Footer } from '../components/footer';
import { TabsSection } from '../components/tabs-section';
import styles from './page.module.scss';
import { ROUTES } from '../constants/routes';

export function Home() {
  const tabs = [
    {
      label: 'Just Add Paper',
      description: 'Lorem ipsum',
    },
    {
      label: 'Cost Per Page',
      description: 'Dolor sit',
    },
    {
      label: 'Pay One Price',
      description: 'Amet',
    },
  ];

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            All of your office equipment management handled in one place &mdash;
            none of the hassle.
          </h2>
          <p className={styles.paragraph}>
            As the largest independent office equipment dealer in the Gulf Coast
            area of Louisiana and Mississippi, we specialize in third party
            printer, copier, fax, and multi-function device maintenance.
          </p>
          <div className={styles.buttonWrapper}>
            <Button to={ROUTES.CONTACT}>Contact us</Button>
            <Button to={ROUTES.SOLUTIONS} useOutline>
              Learn about our solutions
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Multi-print Solutions</h2>
        <h3>How we can help</h3>
        <p>
          By streamlining the flow of information through all of your business
          processes, our services can help increase overall productivity. Our
          mission is a simple one: Helping you make your office technology an
          asset for your business.
        </p>
        <TabsSection tabs={tabs} />
        <Button to={ROUTES.SOLUTIONS}>Learn more about our solutions</Button>
      </section>

      <section className={cx(styles.section, styles.outline)}>
        <div className={styles.center}>
          <h2>What our customers love:</h2>
          <h3>Heading callout for recycling</h3>
        </div>
        <div>
          <p>
            Brief description of offer and benefits. Why customers choose this
            option and what it does for them.
          </p>
        </div>
        <div className={styles.center}>
          <Button to={ROUTES.SOLUTIONS} useOutlineDark>
            See all of our services
          </Button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Quality assessments</h2>
        <h3>Increase your Productivity</h3>
        <p>
          Understanding how your business currently manages its print devices is
          the first step towards increased productivity. Our goal is to provide
          you and your employees with the right business tools allowing us to
          give your business maximum flexibility at the best possible price.
        </p>
      </section>

      <section className={cx(styles.section, styles.alt, styles.center)}>
        <h2>Our commitment</h2>
        <h3>Working with us</h3>
        <Button to={ROUTES.ABOUT} useOutlineDark>
          About our company
        </Button>
      </section>

      <section className={styles.section}>
        <div className={styles.center}>
          <h2>Printers and Multifunction devices</h2>
          <h3>Our machines and capabilities</h3>
        </div>
        <div className={styles.half}>
          <div>
            <h5>Multifunction Devices</h5>
            <p>
              Understanding how your business currently manages its print
              devices is the first step towards increased productivity. Our goal
              is to provide you and your employees with the right business tools
              allowing us to give your business maximum flexibility at the best
              possible price.
            </p>
          </div>
          <div>
            <h5>Desktop Printers</h5>
            <p>
              Understanding how your business currently manages its print
              devices is the first step towards increased productivity. Our goal
              is to provide you and your employees with the right business tools
              allowing us to give your business maximum flexibility at the best
              possible price.
            </p>
          </div>
        </div>
        <div className={styles.half}>
          <div>
            <h5>New &amp; Refurbished Devices</h5>
            <p>
              Understanding how your business currently manages its print
              devices is the first step towards increased productivity. Our goal
              is to provide you and your employees with the right business tools
              allowing us to give your business maximum flexibility at the best
              possible price.
            </p>
          </div>
          <div>
            <h5>Assessments &amp; Technology</h5>
            <p>
              Understanding how your business currently manages its print
              devices is the first step towards increased productivity. Our goal
              is to provide you and your employees with the right business tools
              allowing us to give your business maximum flexibility at the best
              possible price.
            </p>
          </div>
        </div>
        <div className={styles.center}>
          <Button to={ROUTES.CONTACT}>Contact us for an assessment</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
