const Display = ({ expression, result }) => (
    <div className="display">
      {expression || 0}
      <br />
      {result}
    </div>
  );
  
  export default Display;
  