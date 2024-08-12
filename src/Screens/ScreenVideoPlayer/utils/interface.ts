export interface VideoPlayerProps {
    videoUri: string;
  }
  
  export interface ProgressState {
    currentTime: number;
    seekableDuration: number;
  }