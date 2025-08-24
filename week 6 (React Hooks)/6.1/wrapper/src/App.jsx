function App() {
  return (
    <div>
      <CardWrapper>Hi There</CardWrapper>
    </div>
  );
}

function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid white ", padding: 20 }}>
      {children}
    </div>
  );
}
export default App;
