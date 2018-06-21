import * as React from 'react';
import { connect } from 'react-redux';
import { Store } from '../../shared/reducers/store';
import { getSubscriptions } from '../series-view/series-view.reducer';

interface MyProps {
  unsubscribe: (series: string) => void;
  subscriptions: Series[];
}

class SubscriptionView extends React.Component<MyProps, any> {
  render() {
    const { subscriptions } = this.props;

    return (
      <div>
        <h1 className="title">Subscriptions</h1>
        <ul className="episode-list">
          {subscriptions.map(subscription => (
            <li key={subscription.name}>
              <span>{subscription.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: Store.All) => getSubscriptions(state)

const mapDispatchToProps = (dispatch: any) => ({
  unsubscribe: (series: string) => {
    dispatch({
      type: 'SERIES_UNSUBSCRIBE',
      payload: series,
    });
  },
});

export const Series = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscriptionView);
