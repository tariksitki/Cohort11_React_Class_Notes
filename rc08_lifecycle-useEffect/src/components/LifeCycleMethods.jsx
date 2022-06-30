//?==================================================================
//?                         LIFECYCLE METOTLARI
//?          https://reactjs.org/docs/react-component.html
//?==================================================================

//* Lifecycle metotlari componetnlerin DOM'da varoldugu sure boyunca
//* uzerinde islem yapmamizi imkan saglayan ozel React mototlaridir.
//* Ornegin bir component olsuturuldugunda, DOM'a basilsiginda,
//* guncellendiginde veya DOM'dan kaldirildiginda bir seyler yapmak icin
//* lifecycle metotlari kullanilabilir.
//* En bilindik lifecycle metodu render() metodudur

//* Bir component'in olsuturulmasi (constructor,
//* Bir componentin DOM agacina eklenmesinin sonrasi(componentDidMount)
//* Bir component'in DOM'a basilmasi (render)
//* (Optional)Bir componentin guncellenmesinin sonrasi (componentDidUpdate)
//* Bir component'in DOM agacindan kaldirilmasi sonrasi(componentWillUnmount)

// component in öldügü inspect den de görülebilir.


import React from 'react';


class LifeCycleMethods extends React.Component {
  // Birinci calisir
   constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // bizim yazdigimiz func larda binding gerekir. built in lerde gerek yok.
  // en son calisir
  componentDidMount() {
    console.log("Component did mount");
  }

    // her state degisikliginde render calisir, render in hemen sonrasinda ise bu calisir.
  componentDidUpdate() {
    console.log("Component did Update");
  }
  // bu component i kaldirabilmek icin bir üst component a gidilir.
  componentWillUnmount() {
    console.log("Component will Unmount");
  } 

  render() {
    // ikinci calisir.  sayimizi her artirdigimizda buton ile;  sadece render calisir. digerleri calismaz.
    console.log("rendered")
    return (
      <div className="container text-center mt-4">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT={this.state.count}</h3>
        <button className="btn btn-info" onClick={this.handleInc}>
          INC
        </button>
      </div>
    );
  }
}
export default LifeCycleMethods;
