import { Button } from '../components/button';
import { Footer } from '../components/footer';
import { ROUTES } from '../constants/routes';

export function Contact() {
  return (
    <div>
      <section>
        <h1>Contact Us</h1>
        <h2>Start saving time and money today</h2>
        <p>
          As the largest independent office equipment dealer in the Gulf Coast
          area of Louisiana and Mississippi, we specialize in third party
          printer, copier, fax, and multi-function device maintenance.
        </p>
        <div>
          <Button to={ROUTES.CONTACT}>Contact us</Button>
          <Button to={ROUTES.SOLUTIONS} useOutline>
            Learn about our solutions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
