// css file
import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import Translate from './component/Translate';

function App() {
  return (
    <>
      <div className='translateApp'>
        <div className="container">
          <div className='row'>
            <div className='col-md-8 mx-auto translate'>
                <Translate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
