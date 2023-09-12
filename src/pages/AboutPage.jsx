import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
    console.log('Hello from the About Page');
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>
                    This is a React App to leave feedback for a product or
                    service.
                </p>
                <p>
                    Credit to{' '}
                    <a href="https://github.com/bradtraversy">Brad Traversy</a>{' '}
                    for the design.
                </p>
                <p>
                    Implemented by{' '}
                    <a href="https://github.com/coolesthandluke">Luke Shea</a>{' '}
                    using React, Vite, and Netlify.
                </p>
                <p>Version: 1.0.0</p>
                <p>
                    <Link to="/">Back to Home</Link>
                </p>
            </div>
        </Card>
    );
}
export default AboutPage;
