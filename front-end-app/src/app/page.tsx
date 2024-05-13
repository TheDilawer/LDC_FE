import Image from "next/image";
import './globals.css';
import './globalicons.css';
import { Suspense } from 'react'
import VideoComponent from './ui/video-component';
import ContactForm from '../components/contact-from';
import AnimatedBoxes from "@/app/ui/animated-box";

const HomePage = () => {
    return (
        <div className="container">
            {/* Full-width image with text overlay */}
            <div className="hero">
                <Image
                    src="/photo_main.jpg" // Photo Path
                    alt="Full Width Text" // Landing page image
                    width={1448}
                    height={747}
                    layout="responsive" // Important for maintaining aspect ratio
                    objectFit="cover"
                />
                <div className="text-overlay">
                    <h1>Lorem ipsum dolor sit amet, consec</h1>
                    <p>
                        Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique
                        erat in ligula consequat malesuada. Praesent posuere vestibulum
                        neque ac posuere.
                    </p>
                </div>
            </div>
            {/* About Us section */}
            <div className="about-us">
                <div className="about-us-content">
                    {/* Icon */}
                    <div className="icon-container">
                        <span className="material-symbols-outlined">diamond</span>
                    </div>
                    {/* Title */}
                    <h2>Aenean vulputate quis est et pulvinar.</h2>
                    {/* Paragraph */}
                    <p>
                        Maecenas dapibus turpis id purus mollis aliquam.
                        Sed facilisis nec ipsum nec rutrum.
                        Maecenas dapibus turpis id purus mollis aliquam.
                        Sed facilisis nec ipsum nec rutrum.
                        Maecenas dapibus turpis id purus mollis aliquam.
                        Sed facilisis nec ipsum nec
                    </p>
                    {/* Button */}
                    <button className="button about-us-button">About Us</button>
                </div>
            </div>
            {/* Embedded Video */}
            <div className="video-container">
                <Suspense fallback={<p>Loading video...</p>}>
                    <VideoComponent />
                </Suspense>
            </div>
            {/* Benefits with animation */}
            <div className="benefits">
                <div className="benefits-content">
                    <Image
                        src="/benefits-bg.jpg" // Photo Path
                        alt="Full Width Text" // Landing page image
                        width={1448}
                        height={747}
                        layout="responsive" // Important for maintaining aspect ratio
                        objectFit="cover"
                    />
                    <AnimatedBoxes />
                </div>
            </div>

            {/* Operations section */}
            <div className="operations">
                <div className="operations-content">
                    <div className="operations-left-side">
                        <Image
                            src="/photo_read_about_operations.png" // Photo Path
                            alt="Full Width Text" // Landing page image
                            width={522}
                            height={601}
                        />
                    </div>
                    <div className="operations-rightt-side">
                        <div className="operations-right-side-content">
                            <h1>Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula.</h1>
                            <h2>Proin pharetra lectus non felis vulputate, nec commodo quam mattis. Donec fermentum diam
                                eget
                                sem placerat vestibulum. Donec consectetur ut leo quis feugiat. </h2>
                            <p>Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in vestibulum eu, condimentum
                                sit
                                amet lacus. Fusce ex augue, facilisis ut ligula vitae, fringilla dictum sem. Donec tempus
                                blandit nulla vel auctor. Donec non vestibulum tellus, sit amet condimentum felis. Maecenas
                                scelerisque elit a lectus consequat tincidunt.</p>
                            <button className="button operations-button">Read about operations</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Questions section */}
            <div className="questions">
                <Image
                    src="/photo_questions.png" // Photo Path
                    alt="Full Width Text" // Landing page image
                    width={1448}
                    height={747}
                    layout="responsive" // Important for maintaining aspect ratio
                    objectFit="cover"
                />
                <div className="contact-form">
                    <div className="contact-form-content">
                        <p>Any questions?</p>
                        <h2>Let's talk today!</h2>
                        <ContactForm />
                     </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;