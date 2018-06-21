export namespace Store {
  export type Settings = { downloadLocation: string };
  export type Series = {
    [key: string]: Series;
  };
  export type SeriesData = {
    [key: string]: {
      subscribed: boolean;
    };
  };
  export type SeriesView = {
    current: string;
  }

  export type All = {
    settings: Settings;
    series: Series;
    seriesView: SeriesView;
  };
}
