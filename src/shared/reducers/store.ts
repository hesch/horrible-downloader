export namespace Store {
  export type Settings = { downloadLocation: string };

  export type SeriesData = {
    loadState: 'none' | 'fetching' | 'loaded';
    data: Series[];
  };

  export type SeriesConfig = {
    [key: string]: {
      subscribed: boolean;
      currentEpisode: string;
      quality: string;
    }
  }

  export type Downloads = {
    release: Release;
    bytesLoaded: number;
    destinationPath: string;
    status: string;
  }[];

  export type Notifications = Release[];

  export type SeriesView = {
    current: string;
  };

  export type All = {
    settings: Settings;
    seriesData: SeriesData;
    seriesConfig: SeriesConfig;
    downloads: Downloads;
    notifications: Notifications;
    seriesView: SeriesView;
  };
}
