import React, { useContext } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
const Dashboard = () => {
  
  const { isLoading } = useContext(GithubContext)
  
  
  return isLoading ? <img style = {{height:'250px', width:'250px', position:'absolute', top:'30vh', left:'40vw'}} src={loadingImage} alt="" ></img> :  (
    <main>
      <Navbar/>
      <Search />
      <Info/>
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
