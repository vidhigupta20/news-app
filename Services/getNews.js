import axios from 'axios';
 export function getNews(category='General') {
     const API_Key='a9fe7d2bbf2f4f98a63de932502315fe';
     const API_Endpoint=`https://newsapi.org/v2/top-headlines?country=us&category=${category}`;

    return axios.get(`${API_Endpoint}&apikey=${API_Key}`)
        // .then((response)=>{
        //     console.log(response.data.articles)
        // })
        // .catch((err)=>{
        //     console.log(err);
        // })

    
 }
  