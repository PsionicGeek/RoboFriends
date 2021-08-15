
import React,  {useState,useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";

function App (){
   
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count,setCount] = useState(0);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(users=> {setRobots(users)});
        console.log(count)
    },[count])

    const onSearchChange=(event)=>{
        setSearchfield(event.target.value);
    }
    
    const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if(!robots.length){
        return <h1>Loading</h1>
    }
    else{
    return(
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click here</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                     <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
            
        </div>
        
    );
        }
}


export default App;