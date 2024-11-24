import { Button } from '../components/button';
import { Footer } from '../components/footer';
import { ROUTES } from '../constants/routes';

export function Solutions() {
  return (
    <div>
      <section>
        <h1>Managed Print Solutions</h1>
        <h2>Increase your document output. Lower your total operating cost.</h2>
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
