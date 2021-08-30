import Post from './post/post'

function App() {
  return (
    // <div className="App">
    //   <header className="Appeader">
    //     <img src={logo} className="AppLogo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="AppLink"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Post up={10} down={3} comments={150}/>
  );
}

export default App;
