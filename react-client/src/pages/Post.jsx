import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Post.css';
import Header from '../component/Header';
import Footer from '../component/Footer';

function Post() {
    const [posts, setPosts] = useState([
        // Sample data
        { id: 1, title: 'Taj Mahal', shortDescription: 'Culture is a societys customs, ideas, and social behaviors.Heritage is the aspecand intangible assets that are inherited from past generations.It includes values, traditions, customs, practices, places, objects, and artistic expressions.', detailedDescription: 'An immense mausoleum of white marble...', imageUrl: '/src/assets/Taj.jpg', uploadedBy: 'John Doe' },
        { id: 2, title: 'India Gate', shortDescription: 'War memorial ', detailedDescription: 'A triumphal arch commemorating...', imageUrl: '/src/assets/indiaget.jpg', uploadedBy: 'Jane Smith' },
        { id: 3, title: 'Varanasi', shortDescription: 'Spiritual capital of India', detailedDescription: 'The city of temples and ghats...', imageUrl: '/src/assets/varansi.jpg', uploadedBy: 'Alice Brown' },
        // Additional data for testing
        { id: 4, title: 'Red Fort', shortDescription: 'Historic fort', detailedDescription: 'A historic fort in the city of Delhi...', imageUrl: '/src/assets/redfort.jpg', uploadedBy: 'Bob White' },
        { id: 5, title: 'Qutub Minar', shortDescription: 'World Heritage Site', detailedDescription: 'A minaret and "victory tower" in Delhi...', imageUrl: '/src/assets/qutubminar.jpg', uploadedBy: 'Emily Clark' },
        // More sample data
    ]);

    useEffect(() => {
        AOS.init({
            offset: 150,
            duration: 1000,
        });
    }, []);

    return (
        <div>
            <Header />
            <section className="post-banner d-flex align-items-center justify-content-center text-center">
                <div className="textBx">
                    <h2>Posts</h2>
                    <h3>Discover stories and experiences</h3>
                </div>
            </section>
            <section className="post-section py-5">
                <div className="container-fluid">
                    <div className="row">
                        {posts.map((post) => (
                            <div key={post.id} className="col-md-4 col-sm-6 mb-4">
                                <div className="post-item" data-aos="fade-up">
                                    <img src={post.imageUrl} alt={post.title} className="img-fluid" />
                                    <div className="post-content">
                                        <h3>{post.title}</h3>
                                        <p>{post.shortDescription} 
                                            <Link to={`/posts/${post.title}`} state={{ post }} className="readmore-link">Read More</Link>
                                        </p>
                                        <p className="uploaded-by">Uploaded by: {post.uploadedBy}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Post;
