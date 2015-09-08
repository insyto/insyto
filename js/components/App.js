import 'babel/polyfill';
import Course from './Course';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Course/>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    course: () => Relay.QL`
      fragment on Course {
        name
        description
        lectures(first: 10) {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `,
  },
});
