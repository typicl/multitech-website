import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  function handleTabClick(index: number) {
    return function () {
      setActiveIndex(index);
    };
  }

  return (
    <div>
      <section>
        <h2>
          All of your office equipment management handled in one place &mdash;
          none of the hassle.
        </h2>
        <p>
          As the largest independent office equipment dealer in the Gulf Coast
          area of Louisiana and Mississippi, we specialize in third party
          printer, copier, fax, and multi-function device maintenance.
        </p>
        <div>
          <Link to="/contact">Contact us</Link>
          <Link to="/solutions">Learn about our solutions</Link>
        </div>
      </section>

      <section>
        <h3>Multi-print Solutions</h3>
        <h4>How we can help</h4>
        <p>
          By streamlining the flow of information through all of your business
          processes, our services can help increase overall productivity. Our
          mission is a simple one: Helping you make your office technology an
          asset for your business.
        </p>
        <div>
          {tabs.map((t, i) => (
            <button key={t.label} onClick={handleTabClick(i)}>
              {t.label}
            </button>
          ))}
          <p>{tabs[activeIndex].description}</p>
          <Link to="/solutions">Learn more about our solutions</Link>
        </div>
      </section>

      <section>
        <h3>What our customers love:</h3>
        <h4>Heading callout for recycling</h4>
        <p>
          Brief description of offer and benefits. Why customers choose this
          option and what it does for them.
        </p>
        <Link to="/solutions">See all of our services</Link>
      </section>

      <section>
        <h3>Quality assessments</h3>
        <h4>Increase your Productivity</h4>
        <p>
          Understanding how your business currently manages its print devices is
          the first step towards increased productivity. Our goal is to provide
          you and your employees with the right business tools allowing us to
          give your business maximum flexibility at the best possible price.
        </p>
      </section>

      <section>
        <h3>Our commitment</h3>
        <h4>Working with us</h4>
        <Link to="/about">About our company</Link>
      </section>
    </div>
  );
}
