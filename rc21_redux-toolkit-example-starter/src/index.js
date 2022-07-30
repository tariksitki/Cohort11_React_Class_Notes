import App from './App';
    /// react 17;
// import ReactDOM from 'react-dom';

    // React 18;
import ReactDOM from 'react-dom/client';

    // React 17:
// ReactDOM.render(<App />, document.getElementById('root'));

    // React 18:

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

    /// Önemli:  eger package.json da react versiyonu 17 ise createRoot func i calismaz hata verir. 

    
