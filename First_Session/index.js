const setTime = () => {
    //! Vanilla JS Element
    const jsElement = `
     <div>
        <h1>Javascript Element</h1>
        <input type="text" />
        <p>${new Date().toLocaleTimeString()}</p>
     </div>
  `;

  // container 1 console dan bak tüm divler degisir
  //  2 de ise sadece p yanip söner
  // yani react güzel kullanilirsa rendering i cok azaltir.
  
    document.querySelector('.container-1').innerHTML = jsElement;
  
    // //! React Element
    const reactElement = React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'React'),
      React.createElement(
        'div',
        null,
        React.createElement('input', { type: 'text' })
      ),
      React.createElement('p', null, new Date().toLocaleTimeString())
    );
    ReactDOM.render(reactElement, document.querySelector('.container-2'));
  };
  
  setInterval(setTime, 1000);