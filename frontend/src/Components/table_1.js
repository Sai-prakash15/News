import * as React from 'react';

import { connect } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Variants from './Visulaizations/textarea';


export function StickyHeadTable(props) {
  let  data_present;
  let { data } = props;
  
  if (data) {
    data_present = true;
  }
  
  else {
    data_present = false;
    data = [
      {
          "title": "October 23, 2022 Russia-Ukraine news",
          "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-10-23-22",
          "id": "8dRdFa5zZaIltSYeUD8X-Q",
          "score": 0.10698198527097702,
          "published_date": "2022-10-23",
          "author": "By Matt Meyer, Maureen Chowdhury and Mike Hayes, CNN; Matt Meyer; Maureen Chowdhury; Mike Hayes; CNN",
          "extract": null
      },
      {
          "title": "September 23, 2022 Russia-Ukraine news",
          "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-09-23-22/index.html",
          "id": "etqn8d78QF0j1tTSlUhVmA",
          "score": 0.10312396287918091,
          "published_date": "2022-09-23",
          "author": "By Amy Woodyatt, Christian Edwards, Hannah Strange, <a href=\"/profiles/aditi-sandal\">Aditi Sangal</a> and <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a>, CNN; Amy Woodyatt; Christian Edwards; Hannah Strange; Aditi Sangal; Adrienne Vogt; CNN",
          "extract": null
      },
      {
          "title": "October 16, 2022 Russia-Ukraine news",
          "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-10-16-22",
          "id": "LglvIQDP1dLNd0YMgFAXNA",
          "score": 0.10107919573783875,
          "published_date": "2022-10-16",
          "author": "By Matt Meyer, Maureen Chowdhury and Mike Hayes, CNN; Matt Meyer; Maureen Chowdhury; Mike Hayes; CNN",
          "extract": null
      },
      {
          "title": "Neuralink, Elon Musk's brain implant startup, set to begin human trials | CNN Business",
          "url": "https://www.cnn.com/2023/09/20/tech/musk-neuralink-human-trials/index.html",
          "id": "sO0MMAE_oe7ZT0M0XWmTtA",
          "score": 0.0963326245546341,
          "published_date": "2023-09-20",
          "author": "Jennifer Korn",
          "extract": null
      },
      {
          "title": "Alex Jones seeks new trial after Sandy Hook verdict of almost $1 billion | CNN",
          "url": "https://www.cnn.com/2022/10/23/us/alex-jones-seeks-new-trial/index.html",
          "id": "rJcCTFqBfFTa2vzDA9p5rg",
          "score": 0.0950155034661293,
          "published_date": "2022-10-23",
          "author": "Samantha Beech; Brian Vitagliano; Isa Kaufman Geballe",
          "extract": null
      },
      {
          "title": "Twitter confirms completion of Elon Musk's $44 billion acquisition deal | CNN Business",
          "url": "https://www.cnn.com/2022/10/28/tech/elon-musk-twitter-deal-close/index.html",
          "id": "cG2O-OKwK4nRGy2MDJ8zPQ",
          "score": 0.09414974600076675,
          "published_date": "2022-10-28",
          "author": "Clare Duffy; Donie O'Sullivan",
          "extract": null
      },
      {
          "title": "Alex Jones must pay full $49 million damages award, Texas judge rules | CNN Business",
          "url": "https://www.cnn.com/2022/11/23/business/alex-jones-texas-damages-award/index.html",
          "id": "jdNUb3CoSDviPLag3M9Wbg",
          "score": 0.0902840793132782,
          "published_date": "2022-11-23",
          "author": "Hanna Ziady; Sonia Moghe",
          "extract": null
      },
      {
          "title": "George Floyd is denied a posthumous pardon by Texas parole board after approval was recommended last year | CNN",
          "url": "https://www.cnn.com/2022/09/16/us/george-floyd-pardon-reversed-texas/index.html",
          "id": "1KuKHPMv24vCwIgq5kpQ3g",
          "score": 0.0895436555147171,
          "published_date": "2022-09-16",
          "author": "Josh Campbell; Aya Elamroussi",
          "extract": null
      },
      {
          "title": "Author Salman Rushdie has lost sight in one eye and hand is \"incapacitated\" following August stabbing attack, agent says | CNN",
          "url": "https://www.cnn.com/2022/10/23/world/salman-rushdie-attack-lost-sight/index.html",
          "id": "yBaz3iZZ47bK0YZXbStwFg",
          "score": 0.08946630358695984,
          "published_date": "2022-10-23",
          "author": "Samantha Beech",
          "extract": null
      },
      {
          "title": "Suspect accused of killing 3 University of Virginia football players is denied bond as new revelations emerge | CNN",
          "url": "https://www.cnn.com/2022/11/16/us/university-of-virginia-shooting-wednesday/index.html",
          "id": "uvVkyvf8sN5t_lDa7iJEPw",
          "score": 0.0893385037779808,
          "published_date": "2022-11-16",
          "author": "Joe Johns; Aileen Graef; Amir Vera; Holly Yan",
          "extract": null
      }
    ]
  }
  // containsObjectData = true;
  //   console.log(props.data);
  if (props.isLoading) {
    return (
      <CircularProgress sx={{ align: 'center', marginTop: "10px", }} color="secondary" />
    )
  }
  else {
    // const tree = `Alive = True; \n while Alive:
    //   try:
    //    hard();
    //   except Exception as in life:
    //    jumpOverIt();
    //    tryagain();`


    return (

      <>
      
        {/* <TypeWriter content={tree} speed={100}/> */}

        {/* {data?.chatgpt_gql && <Variants text={`GraphQL Query:\n ${data.chatgpt_gql}`} />} */}
        {/* {containsObjectData && data_present && <JsonObject text={data_}/>} */}
        {/* {!containsObjectData && data_present && <RowRadioButtonsGroup />} */}

        {  <Variants data={data} />}
        {/* {!containsObjectData && data_present && <Table_ rows={rows} columns={columns} />} */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.counter.data,
    isLoading: state.counter.isLoading,
    visualization: state.counter.visualization
  }
}

export default connect(mapStateToProps)(StickyHeadTable)
