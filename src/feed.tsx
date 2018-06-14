import * as FeedParser from "feedparser";
import * as React from 'react';

export default class Feed extends React.Component {
  private data: Article[];

  constructor(props: {}) {
    super(props);
    this.data = [];
    this.fetchData();
  }

  public fetchData() {
    const parser = new FeedParser({});

    parser.on('data', (data: Article) => this.data.push(data));

    fetch('/feed')
      .then(res => res.text())
      .then(t => parser.write(t, undefined, () => this.forceUpdate()));
  }

  public render() {
    return (
      <ul id="feed">
        {this.data.map(article => <li key={article.guid}>{article.title}</li>)}
      </ul>
    );
  }
}
