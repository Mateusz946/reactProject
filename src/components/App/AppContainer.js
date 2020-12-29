import {connect} from 'react-redux';
import App from './App';
//import {createAction_moveCard} from '../../redux/cardsRedux';

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});

/*const mapDispatchToProps = payload => ({
  moveCard: () =>
    dispatch(
      createAction_moveCard(payload)
    );
});
*/
export default connect(mapStateToProps)(App);