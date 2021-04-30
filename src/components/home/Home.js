import React, {
    useEffect,
    useState
} from 'react';
import Axios from 'axios';
import Snippet from './Snippet';

const Home = () => {
    const [snippets, setSnippets] = useState([]);
    useEffect(() => { getSnippets(); }, []);
    const getSnippets = async () => {
        const snippetsRes = await Axios.get('http://localhost:5000/snippet');
        setSnippets(snippetsRes.data);
    }
    const renderSnippets = () => {
        return snippets.map((snippet, index) => {
            return (
                <Snippet key={ index } snippet={ snippet }></Snippet>
            );
        });
    }
    return (<div className="home" >{ renderSnippets() } </div>
    );
}

export default Home;