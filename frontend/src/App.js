import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskListView from './components/TaskListView';
import TaskDetailView from './components/TaskDetailView';
import TaskForm from './components/TaskForm';
import Navigation from './components/Navigation';
import './styles/App.css';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={TaskListView} />
                        <Route path="/task/:id" component={TaskDetailView} />
                        <Route path="/create-task" component={TaskForm} />
                        <Route path="/edit-task/:id" component={TaskForm} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
