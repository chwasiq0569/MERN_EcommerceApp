import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/Layout/Layout';

const Home = () => {
    return ( <Layout>
        <Jumbotron style={{margin: '5rem', backgroundColor: '#fff'}} className="text-center">
            <h1>Welcome to Admin Dashboard</h1>
        </Jumbotron>
    </Layout> );
}
 
export default Home;