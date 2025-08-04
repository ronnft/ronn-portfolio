import './App.css'

function App() {
  return (
    <>
    <Text display = "Welcome to my portfolio!"/>
    <Text display = "I'm Ronn!"/>
    </>
  );
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}
export default App
