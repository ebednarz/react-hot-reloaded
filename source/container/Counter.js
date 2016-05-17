import { connect } from 'react-redux';
import { increment } from '../action/counter';
import Counter from '../component/Counter';

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
