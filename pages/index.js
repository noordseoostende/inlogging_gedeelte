import React from 'react';
import axios from 'axios';

function Index({ user, userFollowStats }) {
  useEffect(() => {
    document.title = `Welcome, ${user.name.split(" ")[0]}`;

    
  }, []);
  return (
    <div>
      Homepage
    </div>
  );
}

// Index.getInitialProps = async ctx => {
//     const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
//     const { name } = ctx.query;
//     console.log(name);

//     return {posts:res.data};};


  
  


export default Index;
