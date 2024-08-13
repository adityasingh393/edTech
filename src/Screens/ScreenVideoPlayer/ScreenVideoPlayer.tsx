import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, Button } from 'react-native';
import MediaPlayer from './Component/ComponentMediaPlayer';
import { downloadVideo } from '../utils/storage/storageFunctions';
import { DownloadButton } from '../../Assets/constants';
import styles from './StyleVideoPlayer';
import { VideoScreenProps } from '../../utils/interfaces/types';
import { downloadPdf } from '../utils/storage/pdfDownloadFucntion';

const VideoPlayer: React.FC<VideoScreenProps> = ({ navigation , route}) => {
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [isDownloading, setIsDownloading] = useState<boolean>(false);

    const handleFullScreenToggle = (fullScreen: boolean) => {
        setIsFullScreen(fullScreen);
    };
    const handleDownloadPdf = async () => {
        await downloadPdf(); 
    };

    const handleDownloadVideo = async () => {
        const videoUrl = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
        const contentId = "1"; 
        const title = "Big Buck Bunny";
        const thumbnailUrl = "posterImageURL";

        setIsDownloading(true);
        downloadVideo(contentId, videoUrl, title, thumbnailUrl, () => {
            setIsDownloading(false);
            Alert.alert("Success", "Video downloaded successfully.");
        }).catch(() => {
            setIsDownloading(false);
            Alert.alert("Error", "Failed to download video.");
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.mediaPlayerContainer}>
                <MediaPlayer 
                    videoUri="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                    onFullScreenToggle={handleFullScreenToggle}
                />
            </View>
            {!isFullScreen && (
                <View style={styles.detailsContainer}>
                    <View style={styles.downloadContainer}>
                        <TouchableOpacity style={styles.downloadButton} onPress={handleDownloadPdf}>
                            <Image source={DownloadButton} style={styles.downloadIcon} />
                            <Text style={styles.downloadText}>PDF</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.downloadButton} 
                            onPress={handleDownloadVideo}
                            disabled={isDownloading}
                        >
                            <Text style={styles.downloadText}>
                                {isDownloading ? "Downloading..." : "Download Video"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.descriptionTitle}>About Course</Text>
                    <Text style={styles.descriptionText}>
                        Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. 
                        When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore!
                        In the typical cartoon tradition, he prepares the nasty rodents a comical revenge.
                        Licensed under the Creative Commons Attribution license http://www.bigbuckbunny.org.
                    </Text>
                </View>
            )}
            {/* This button will navigate to the Downloads screen */}
            <Button title="Downloads" onPress={() => navigation.navigate('Downloads')} />


        </View>
    );
};

export default VideoPlayer;
