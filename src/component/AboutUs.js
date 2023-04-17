import React from "react";

class AboutUs extends React.Component {
    constructor(props) {
          super(props);
          this.state = {
            showText: false,
          };
          this.toggleText = this.toggleText.bind(this);
        }
      
        toggleText() {
          this.setState((prevState) => ({
            showText: !prevState.showText,
          }));
        }
      
        render() {
          const { showText } = this.state;
      
          return (
            <div>
              <button onClick={this.toggleText}>*Click ME*</button>
              {showText && <p>Some text here</p>}
            </div>
          );
        }
      }
      
      export default AboutUs;