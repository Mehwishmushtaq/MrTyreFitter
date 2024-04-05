import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import FeatureCard from './FeatureCard';

const features = [
    {
        title: 'Quality Support',
        description: 'Get premium support for flawless tyre fitting, ensuring safety and performance excellence.'
    },
    {
        title: 'All Car Makes',
        description: 'Expert tyre fitting services for all car models.',
    },
    {
        title: 'Variety Services',
        description: 'Ensure high-quality standards through rigorous testing processes.',
    },

];

const WhyChooseUs = () => {

    return (
        <div>
            <Container>
                <section className="guarantee-section mt-5 ">

                    <Row>
                        <Col className="text-center mb-4">
                            <h2 className='mt-3' style={{fontSize:'40px'}}>
                                <strong>
                                    <span style={{ color: '#18bd9d' }}>100%</span>
                                    <br />
                                    Satisfaction
                                    <br />
                                    Guarantee
                                </strong>

                            </h2>
                        </Col>
                        {features.map((feature, index) => (
                            <Col key={index} md="6" lg="3" className="mb-4">
                                <FeatureCard {...feature} />
                            </Col>
                        ))}
                    </Row>

                </section>
            </Container>
        </div>

    );
};

export default WhyChooseUs;
