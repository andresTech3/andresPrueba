import React from 'react'
import NewPost from '../components/NewPost'
import "../styles/post.scss"

//importando hooks
import useGetArticle from '../hook/useGetArticle';


function ContainerPost() {
  const API = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ad49fd8d42404aeab57751be4587f848";

  const posts = useGetArticle(API);
  

  return (
    <div className="article">
        <h2 className="article-title">Noticias mas reciente del mundo</h2>
        <hr className="hr-article" />
        <div className="containerPosts">
          {
            posts.map(noticia =>(
              <NewPost post = {noticia} key={noticia.url}/>
            ))
          }
        </div>
    </div>
  )
}

export default ContainerPost