import * as got from 'got';
import * as _ from 'lodash';

export default class ReleaseParser {
  private static searchUrl = 'http://xdcc.horriblesubs.info/search.php';
  private static splitRegex = /[\r\n]+/;
  private static lineRegex = /p\.k\[\d+\] = {b:"([^"]+)", n:(\d+), s:(\d+), f:"\[HorribleSubs] (.*) - (.*) \[(\d+)p]\.[a-z]{2,4}"};/;

  public static search(query: string, bot?: string): Promise<Release[]> {
    const botPart = !!bot ? `&nick=${bot}` : '';
    const url = `${this.searchUrl}?t=${query}${botPart}`;

    return got(url)
      .then(response => response.body)
      .then(text => text.split(ReleaseParser.splitRegex))
      .then(lines => lines.map(ReleaseParser.parseLine))
      .then(releases => releases.filter(r => r !== null) as Release[]);
  }

  public static groupBySeries(releases: Release[]): Series[] {
    return Object.entries(_.groupBy(releases, 'series')).map(
      ([name, releases]) => ({
        name,
        episodes: ReleaseParser.groupByEpisode(name, releases),
      }),
    );
  }

  private static groupByEpisode(
    series: string,
    releases: Release[],
  ): Episode[] {
    return Object.entries(_.groupBy(releases, 'episode')).map(
      ([episode, releases]) => ({ series, episode, releases }),
    );
  }

  private static parseLine(line: string): Release | null {
    const match = line.match(ReleaseParser.lineRegex);
    if (match == null) {
      return null;
    }

    return {
      bot: match[1],
      pack: parseInt(match[2], 10),
      size: parseInt(match[3], 10),
      series: match[4],
      episode: match[5],
      resolution: match[6],
    };
  }
}
