import React, { useEffect, useState } from 'react';
import { Api } from '../../Api';
import RepositoryNavArea from '../../Components/RepositoryComponents';
import RepositoryJavascript from '../../Components/RepositoryComponents/RepositoryJavascript';
import RepositoryTypescript from '../../Components/RepositoryComponents/RepositoryTypescript';

import * as C from './styles';

interface RepoProps {
  name: string;
  description: string;
  html_url: string;
  language:string;
}

const Repositories: React.FC = () => {

  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [filterRepo, setFilterRepo] = useState('');
  const [javascriptRepos, setJavascriptRepos] = useState(true);
  const [typescriptRepos, setTypesCriptRepos] = useState(false);


  const toggleReposTs = () => {
    setTypesCriptRepos(true);
    setJavascriptRepos(false);
  }
  const toggleReposJs = () => {
    setJavascriptRepos(true);
    setTypesCriptRepos(false);

  }
  

  const reposFilter = repos.filter(repo => repo.name.startsWith(filterRepo));

  useEffect(() => {
    (async () => {
      const { data } = await Api.get('/repos');
      setRepos(data);
    })()
  }, [])

  return (
      <C.Container id="repositories">
          <C.Title>
                <h1>Repositories</h1>
                <span></span>
            </C.Title>
            <C.InputArea>
                <input 
                  type="search" 
                  name="search" 
                  placeholder='Search a repository...' 
                  value={filterRepo}
                  onChange={e => setFilterRepo(e.target.value)}
                />
            </C.InputArea>
              <C.MenuArea>
                <RepositoryNavArea 
                  toggleReposTs={toggleReposTs} 
                  toggleReposJs={toggleReposJs} 
                  javascriptRepos={javascriptRepos} 
                  typescriptRepos={typescriptRepos}
                />
              </C.MenuArea>
          <C.Content >
            {reposFilter.map((item, index) => (
              
              <>
              {javascriptRepos === true ? 
              
                  <>
                    {item.language === 'JavaScript' ? 
                      <RepositoryJavascript
                        key={index}
                        title={item.name}
                        description={item.description}
                        link={item.html_url}
                        language={item.language}
                      />
                      : null}
                  </>


              : typescriptRepos === true ? 

                  <>
                    {item.language === 'TypeScript' ? 
                      <RepositoryTypescript
                      key={index}
                      title={item.name}
                      description={item.description}
                      link={item.html_url}
                      language={item.language}
                      />  
                    : null }
                  </>

                 : null}
              </>
            ))}
            
          </C.Content>
      </C.Container>
  );
}

export default Repositories;