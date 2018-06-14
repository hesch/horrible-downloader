export default class ReleaseParser {
  public static parse(article: Article): Release | null {
    // first group will eager match ' - ' as it can occur in series names
    const match = article.title.match(/^\[HorribleSubs] (.*) - (.*) \[(\d+)p]\.[a-z]{2,4}$/);

    if (match == null) {
      return null;
    }

    const episode = match[2];
    const series = match[1];
    const resolution = match[3];
    const guid = article.guid;
    const publication = article.pubDate;

    return {
      "episode": episode,
      "guid": article.guid,
      "publication": article.pubDate,
      "resolution": resolution,
      "series": series,
    };
  }
}
