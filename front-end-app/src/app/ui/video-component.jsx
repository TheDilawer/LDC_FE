"use client";

import { useState } from 'react';
import Image from "next/image";

export async function getVideoSrc(videoId) {
    try {
        // Construct the YouTube embed URL with the provided video ID
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        return embedUrl;
    } catch (error) {
        console.error('Error fetching video source:', error);
        throw error;
    }
}

// Convert the Server Component into a Client Component
export default function VideoComponent() {
    const youtubeVideoId = 'LXb3EKWsInQ'; // Replace with your YouTube video ID
    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        setIsPlaying(true);
    };
    const imageStyle = {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
    return (
        <div className="video-container">
            {!isPlaying && (
                <div className="video-container-content" onClick={playVideo}>
                    {/* Custom cover image */}
                    <Image
                        src="/cover-image.png" // Photo Path
                        alt="Cover Image" // Custom Cover image
                        width={1042}
                        height={545}
                        objectFit="cover"
                    />
                    {/*  Custom play button */}
                    <Image
                        src="/custom-play-button.png" // Photo Path
                        alt="Play Button" // Play button image
                        width={126}
                        height={126}
                        style={imageStyle}
                    />

                </div>
            )}
            {isPlaying && (
                <div className="video-iframe">
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                        width="1042"
                        height="545"
                        title="YouTube video player"
                        allowFullScreen
                    />
                </div>
            )}
        </div>
    );
}
