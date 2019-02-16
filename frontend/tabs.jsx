import React from 'react';

class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tabIndex: 0,
      array: [1,2,3]
    }
  }

    render() {
      return(
          <div className="tabs-widget widget-box">
            <h3> Shiba Tab Widget</h3>
            <ul className="flex">
                {this.props.myTabs.map(title => {
                  return (<li><h3>{title.title}</h3></li>)
                })
                }
          </ul>
          <article>
            {this.props.myTabs[this.tabIndex]}
        </article>
      </div>
      )
    }
}

export default Tabs;


