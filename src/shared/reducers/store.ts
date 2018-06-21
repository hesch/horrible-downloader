export namespace Store {
  export type Settings = { downloadLocation: string };
  export type Series = {
    current: string,
    list: {
      [key: string]: {
        subscribed: boolean;
        data: Series;
      }
    }
  }

  export type All = {
    settings: Settings;
    series: Series;
  };
}
