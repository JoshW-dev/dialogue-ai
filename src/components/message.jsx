function Message({ text, isBot1 }) {
    return (
      <div style={{ textAlign: isBot1 ? 'left' : 'right' }}>
        <div style={{
          display: 'inline-block',
          margin: '10px',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: isBot1 ? '#d0d0d0' : '#007bff',
          color: isBot1 ? 'black' : 'white',
        }}>
          {text}
        </div>
      </div>
    );
  }
  export default Message;
