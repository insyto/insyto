import Relay from 'react-relay';

export default class AddInsyteMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation {addInsyte}`;
  }

  getVariables() {
    return {
      title: this.props.title,
      description: this.props.description,
      type: this.props.type,
      url: this.props.url
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on AddInsytePayload {
        viewer { insytes }
        newInsyteEdge
      }
    `;
  }
  getConfigs() {
      return [{
        type: 'REQUIRED_CHILDREN',
        // Forces these fragments to be included in the query
        children: [Relay.QL`
          fragment on AddInsytePayload {
            newInsyteEdge {
              rails_id
            }
          }
        `],
      }];
    }
}
