export interface DownloadedVideo {
    contentId: string;
    source: string;
    artistName: string;
    songName: string;
    downloadDate: Date;
    posterImage: string;
    isAudio: boolean;
  }  
  export interface DownloadProgress {
    contentId: string;
    source: string;
    artistName: string;
    songName: string;
    progressValue: string;
  }
  