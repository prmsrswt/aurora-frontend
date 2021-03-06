import gql from 'graphql-tag';

export default gql`
  mutation VerifyAccOrder($orderId: String!, $paymentId: String!, $signature: String!) {
    verifyAccOrder(orderId: $orderId, paymentId: $paymentId, signature: $signature) {
      code
      success
      message
      user {
        teams {
          id
          name
          members {
            name
            id
          }
          event {
            id
            name
            fee
            parentEvent
            maxSize
            isNameRequired
          }
          paymentStatus
          pendingInvitations {
            id
            name
          }
        }
      }
    }
  }
`;
