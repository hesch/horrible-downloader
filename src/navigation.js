import React, {Component} from "react";
import Feed from "./feed";

export default class Navigation extends Component {

    navItems = [
        {title: 'Main', component: Feed},
        {title: 'Shows', component: Feed},
        {title: 'Subscriptions', component: Feed},
    ];

    state = {activeComponent: this.navItems[0].component};

    navigate(item) {
        console.log('navigate to: ', item);
        this.setState({activeComponent: item.component});
    }

    render() {
        return (
            <div className="columns">
                <nav className="column container is-1">
                <aside className="menu">
                    <p className="menu-label">
                        Navigation
                    </p>
                    <ul className="menu-list">
                        {
                            this.navItems.map(item => (
                                <li key={item.title} onClick={() => this.navigate(item)}>
                                    <a>
                                    {item.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </aside>
                </nav>
                <div className="column">
                    {React.createElement(this.state.activeComponent)}
                </div>
            </div>
        );
    }
}

