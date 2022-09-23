// import './App.css';
// import { connect } from "react-redux"
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useEffect } from 'react';
import Home from './components/Home';
import FormAddNew from "./components/FormAddNew";
import TableUser from "./components/TableUser";
import Header from "./components/Header";


function App(props) {

  // const newCount = useSelector((state) => state.counter.count)
  // const newDesc = useSelector((state) => state.counter.desc)
  // const dispatch = useDispatch()

  // // event handler
  // const handleDecrease = () => {
  //   // dispatch actions
  //   // props.decreaseCounter()
  //   dispatch(decreaseCounter())
  // }

  // const handleIncrease = () => {
  //   // props.increaseCounter()
  //   dispatch(increaseCounter())

  // }

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:8080/users/all")
    const data = res && res.data ? res.data : []
    console.log(data)
  }

  useEffect(() => {
    fetchAllUser()
  }, [])


  return (

    // <div className="App">
    //   <h2>{/*props.desc*/}{newDesc}</h2>
    //   <div>Count: {/*props.count*/}{newCount}</div>
    //   <button onClick={() => handleDecrease()}>Decrease Count</button>
    //   <button onClick={() => handleIncrease()}>Increase Count</button>
    // </div>
    <>
      <Header />
      <FormAddNew />
      <TableUser />
    </>
  );
}

// // map state (redux store) + props react, param: state là mặc định
// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//     desc: state.counter.desc
//   }
// }

// // ket noi Dispatch voi Props cua react, param: dispatch là mặc định
// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// higher order component
// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;


