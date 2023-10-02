import * as React from 'react';
import Paper from '@mui/material/Paper';
import '../../Styles.css'
function getDomainFromUrl(url) {
  const parsedUrl = new URL(url);
  return parsedUrl.hostname;
}
function formatDate(inputDate) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const parts = inputDate.split('-');
  const month = months[parseInt(parts[1], 10) - 1];
  const day = parseInt(parts[2], 10);
  const year = parseInt(parts[0], 10);

  return `${month} ${day}, ${year}`;
}
export default function Variants(props) {
  return (

    <Paper variant="outlined" sx={{display: 'flex', maxWidth: "80%", flexGrow: 0, marginTop: "10px", fontSize: "18px",
      fontFamily: 'system-ui', overflowY:"scroll", flexDirection:"column"}} >
        {props.data.map((result, index) => (
          <div key={index} className="result-item">
            <div style={{display:'flex', flexDirection: 'row'}}>
            <img width="24" height="24" src={`https://www.google.com/s2/favicons?sz=64&domain=https://${getDomainFromUrl(result.url).slice(4)}`}/>
            <a
              href={result.url}
              className="result-link"
              target="_blank"
              rel="noopener noreferrer"
              style={{paddingLeft: "10px"}}
            >
              <div className="result-title">{result.title}</div>
            </a>
            <div style={{marginLeft: 'auto'}}>{formatDate(result.published_date)}</div>
            </div>
            <div className="result-snippet" style={{paddingTop:"10px"}}>{result.summary}</div>
          </div>
        ))}
      {/* <TypeAnimation
            cursor={false}
            sequence={[
                props.text
            ]}
            speed={80}
            wrapper="pre"
            repeat={1}
      /> */}
    </Paper>
  );
}
