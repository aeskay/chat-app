import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm'

function App() {

  if(!localStorage.getItem('username')) {
    return <LoginForm/>
  }
  return (
    <div className="App">
      <ChatEngine
        height= "100vh"
        projectID = "92c49a61-ddbf-4539-8027-68e26e204a8e"
        userName = "aeskay"
        userSecret = "pass"
        renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/> }
        onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3')}
      />
    </div>
  );
}

export default App;
