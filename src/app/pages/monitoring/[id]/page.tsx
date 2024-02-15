// Import necessary dependencies and components
"use client"
import { Flex, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import HSL from 'hls.js'
import HslPlayer from "@/app/components/HslPlayer/HslPlayer";
import { liveMock } from "@/utils/LiveMock";

// Define the Page component
export default function Page({ params }: { params: { id: number } }) {
    const currentChannel = liveMock.find((channel: any) => channel.id == params.id);

    // Run the following code when the component mounts
    useEffect(() => {
        // Get the video element by its ID
        const video = document.getElementById('video') as HTMLVideoElement;
        // Create a new instance of HSL
        const hls = new HSL();

        // Load the video source using HSL
        hls.loadSource(currentChannel?.source ? currentChannel.source : "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u");
        // Attach the media to the video element
        hls.attachMedia(video);
        // Play the video when the manifest is parsed
        hls.on(HSL.Events.MANIFEST_PARSED, function () {
            video.play();
        });

        // Prevent the context menu from appearing on right-click
        const handleContextmenu = (e: Event) => {
            e.preventDefault();
        }
        document.addEventListener('contextmenu', handleContextmenu);

        // Clean up event listener when the component unmounts
        return function cleanup() {
            document.removeEventListener('contextmenu', handleContextmenu);
        }
    }, []);

    // Render the page content
    return (
        <Flex
            width={"full"}
            h={"100vh"}
            flexDirection={"column"}
        >
            <VStack
                w={"full"}
                h={"full"}
                justifyContent={"flex-start"}
                align={"left"}
                p={20}
                spacing={10}
                >
                <HslPlayer liveSrc={currentChannel?.source ? currentChannel.source : "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u"}/>
                <div className="font-bold">{currentChannel?.name ? currentChannel.name : "hmm"}</div>
            </VStack>
        </Flex>
    )
}
