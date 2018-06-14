export default class ReleaseParser {
  public static parseLine(line: string) {
    const match = line.match(
      /p\.k\[\d+\] = {b:"([^"]+)", n:(\d+), s:(\d+), f:"\[HorribleSubs] (.*) - (.*) \[(\d+)p]\.[a-z]{2,4}"};/,
    );

    if (match == null) {
      return null;
    }

    return {
      bot: match[1],
      pack: match[2],
      size: match[3],
      series: match[4],
      episode: match[5],
      resolution: match[6],
    };
  }
}
