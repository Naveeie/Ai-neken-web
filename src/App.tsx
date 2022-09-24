import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Frontpage from './components/login';
import Events from "./components/events";
import { recognition } from "../shared/voice_api";
import * as actions from '../src/redux/actions';
import CommandNavigate from './components/command-navigate';

const App = (props: any) => {
  const { updateCommand } = props;

  useEffect(() => {    
    recognition.onresult = (event: any) => {
      const command = event.results[0][0].transcript;
      console.log('------user command------>', command);
      if(command.includes('Jarvis')) {
        const splitData = command.split('Jarvis');
        const splitCommand = splitData[1] || 'Jarvis';
        updateCommand(splitCommand.trim());
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Frontpage />}></Route>
        <Route path='/events' element={<Events />}></Route>
      </Routes>
      <CommandNavigate />
    </Router>
  );
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  updateCommand: actions.updateCommand,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
