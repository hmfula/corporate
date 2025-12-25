import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'Janet  Miller',
    description: 'We used Pareto services to formalize,  digitize  and scale three family business.',
    designation: 'Operations Manager'
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'The Pareto Bricks program provided common building blocks, a scalable digitization platform and mentorshitp which most startups lack in Africa',
    designation: 'Accountant'
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'Pareto services allowed us to levarage the benefits of a common digital enablement infrastructure  that  has  enabled us to serve our customers better at scale with customized service offerings across all regions of  Africa',
    designation: 'CEO'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;