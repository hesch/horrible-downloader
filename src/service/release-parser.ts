import * as got from 'got';

export default class ReleaseParser {
  private static searchUrl = 'http://xdcc.horriblesubs.info/search.php';
  private static splitRegex = /[\r\n]+/;
  private static lineRegex = /p\.k\[\d+\] = {b:"([^"]+)", n:(\d+), s:(\d+), f:"\[HorribleSubs] (.*) - (.*) \[(\d+)p]\.[a-z]{2,4}"};/;

  public static search(query: string, bot?: string): Promise<Series[]> {
    const botPart = !!bot ? `&nick=${bot}` : '';
    const url = `${this.searchUrl}?t=${query}${botPart}`;

    return got(url)
      .then(response => response.body)
      .then(text => text.split(ReleaseParser.splitRegex))
      .then(lines => lines.map(ReleaseParser.parseLine))
      .then(releases => releases.filter(r => r !== null) as Episode[])
      .then(episodes => ReleaseParser.group(episodes))
      .then(series =>
        series.sort(({ name: nameA }, { name: name2 }) =>
          nameA.localeCompare(name2),
        ),
      );
  }

  private static group(episodes: Episode[]): Series[] {
    const grouped: Map<string, Episode[]> = new Map();

    episodes.forEach(episode => {
      if (grouped.has(episode.series)) {
        const seriesEpisodes = grouped.get(episode.series) as Episode[];
        seriesEpisodes.push(episode);
      } else {
        grouped.set(episode.series, [episode]);
      }
    });

    return Array.from(grouped.entries()).map(([name, episodes]) => ({
      name,
      episodes,
    }));
  }

  private static parseLine(line: string): Episode | null {
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
