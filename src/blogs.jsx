import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Newsletter from './components/Newsletter';

const blogPosts = [
  {
    id: 1,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'images/img-11.jpg',
  },
  {
    id: 2,
    title: 'Consectetur Adipisicing Elit',
    content: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imageUrl: 'images/img-11.jpg',
  },
  {
    id: 3,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'images/img-11.jpg',
  },
  {
    id: 4,
    title: 'Consectetur Adipisicing Elit',
    content: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    imageUrl: 'images/img-11.jpg',
  },
  {
    id: 5,
    title: 'Lorem Ipsum Dolor Sit Amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    imageUrl: 'images/img-11.jpg',
  },
];

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return (
    <div>
      {/* Banner Section */}
      <header className='headerStyle'>
        <h1 data-aos="fade-right">Blogs</h1>
        <h5 data-aos="fade-left"><Link to="/" className="linkStyle"><i class="fa-solid fa-house"></i> Home </Link> | Blogs</h5>
      </header>

      <div className='mt-4'>
        <Row className="text-center justify-content-center" data-aos="fade-right">
            <div className="col-md-11 col-lg-9 col-xl-7 mb-2">
                <div className="section-title">
                    <h2 className="sec-title">The Heading Goes Here</h2>
                </div>
            </div>
        </Row>
        <div className='w-75 mx-auto' data-aos="fade-left"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit fermentum justo. Vestibulum feugiat vehicula elit, at congue orci venenatis nec. Morbi hendrerit mauris vel arcu hendrerit, nec tristique purus auctor. Nullam euismod nunc nec dictum tempus. Integer malesuada felis vel justo aliquet, a tincidunt arcu vulputate. Quisque suscipit, ligula eu pharetra scelerisque, tortor ligula aliquam felis.</p></div>
     </div>
     
     <Container>
      <Row>
        <Col lg={6} className="image-container">
          <img src="images/img-11.jpg" alt="img" className="two-image" />
          <div className="text-container">
            <h4>Heading Goes Here</h4>
            <p>some kind of subheading</p>
            <Link to="/" className='btn btn-success'>Read More</Link>
          </div>
        </Col>

        <Col lg={6} className="image-container">
          <img src="images/img-11.jpg" alt="img" className="two-image" />
          <div className="text-container">
            <h4>Heading Goes Here</h4>
            <p>some kind of subheading</p>
            <Link to="/" className='btn btn-success'>Read More</Link>
          </div>
        </Col>
      
      </Row>
     </Container>

      {/* Main Content */}
      <Container className="py-5">
        {posts.map(post => (
          <Row key={post.id} className="mt-5">
            <Col lg={6} data-aos="fade-right" className='d-flex justify-content-center'>
              <img src={post.imageUrl} alt={post.title} className="img-fluid mb-3 rounded" />
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className='mt-5'>
                <h2 className='text-center'>{post.title}</h2>
                <p className='text-center'>{post.content.slice(0, 150)}...</p>
                <div className='d-flex justify-content-center'><Link to={`/blog/${post.id}`} className="btn btn-success">Read More</Link></div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
      <Newsletter/>
    </div>
  );
}


export default BlogPage;