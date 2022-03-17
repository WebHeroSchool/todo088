import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Octokit from '@Octokit/rest';
import Preloader from '../Preloader/Preloader';

const octokit = new Octokit();

class About extends React.Component{
  state = {
    isLoading:true,
    repoList: [],
    fetchReposSuccess: false,
        error: '',
  }
  ComponentDidMount() {
    octokit.repos.listForUser({
      usermane:this.state.username,
    }).then(({ data}) => {
      this.setState({
        repoList:data,
        isLoading: false,
        fetchReposSuccess: true,
      });
             } )
             .catch(err => {
                 this.setState({
                     error: err,
                     isLoading: false,
                     fetchReposSuccess: false,
                 });
             });

             octokit.users.getByUsername({
                 username: this.state.username,
             })
             .then((response) => {
                 this.setState({
                     avatarURL: response.data.avatar_url,
                     name: response.data.name,
      });
    });
  }
render(){
  const {isLoading, repoList}=this.state;
  return(
   <CardContent>
      <h3> {isLoading ? <CircularProgress/> :' About'} </h3>
      {!isLoading && <ol>
        {repoList.map(repo => (<li key={repo.id}>
          {repo.name}
          </li>))}
        </ol>}
    </CardContent>
    );
  }
}

export default About;
