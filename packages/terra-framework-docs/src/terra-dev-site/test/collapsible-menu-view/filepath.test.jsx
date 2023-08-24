import React from 'react';
import CollapsibleMenuView from 'terra-collapsible-menu-view';

class CollapsibleMenuViewDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CollapsibleMenuView
                style={{
                    flexDirection: "row-reverse"
                }}
            >
                <CollapsibleMenuView.Item
                    text="item"
                />
                <CollapsibleMenuView.Divider key="Divider1" />
                <CollapsibleMenuView.Item
                    text="item"
                />
                <CollapsibleMenuView.Divider key="Divider2" />
                <CollapsibleMenuView.Item
                    text="item"
                />
                <CollapsibleMenuView.Divider key="Divider3" />
                <CollapsibleMenuView.Item
                    text="item"
                />
                <CollapsibleMenuView.Divider key="Divider4" />
                <CollapsibleMenuView.Item
                    text="item"
                />
                <CollapsibleMenuView.Divider key="Divider5" />
                <CollapsibleMenuView.Item
                    text="item"
                />
                <CollapsibleMenuView.Divider key="Divider6" />
                <CollapsibleMenuView.Item
                    text="item"
                />
                <CollapsibleMenuView.Divider key="Divider7" />
                <CollapsibleMenuView.Item
                    text="item"
                />
            </CollapsibleMenuView>
        );
    }
}

export default CollapsibleMenuViewDemo;
