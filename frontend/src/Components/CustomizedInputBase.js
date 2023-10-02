import * as React from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import { backend_url } from '../constants';
import {
  apiCalled,
  setData
} from "../redux/reducers/Counter/counter.actions"
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';


// const propmts = ["What NFTs are trending in the last week?", "What is the address for the CryptoPunks collection?"]
// const prompt = propmts[Math.floor(Math.random()*propmts.length)]



export function CustomizedInputBase(props) {
  const [input, setInput] = React.useState('');
  const [channel, setChannel] = React.useState("www.cnn.com");


  const { enqueueSnackbar } = useSnackbar();
  const Search = async (event) => {
    let res;
    event.preventDefault();

    props.apiCalled(true)

    try{
      res = await axios.post(`${backend_url}/api/v1/search`, {
      input: input,
      channel: channel,
    })
    console.log(res.data)
    props.setData(res.data);

    props.apiCalled(false);

  }
    catch(error){
      console.log(error)
      props.setData("");
      // props.setData({"output":[{"decimals":9,"id":"0xcf0c122c6b73ff809c693db761e7baebe62b6a2e","name":"FLOKI","symbol":"FLOKI","transferCount":274254},{"decimals":18,"id":"0x320623b8e4ff03373931769a31fc52a4e78b5d70","name":"Reserve Rights","symbol":"RSR","transferCount":"121409"},{"decimals":18,"id":"0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc","name":"Hop","symbol":"HOP","transferCount":"78497"},{"decimals":18,"id":"0xa2cd3d43c775978a96bdbf12d733d5a1ed94fb18","name":"Chain","symbol":"XCN","transferCount":"70327"},{"decimals":9,"id":"0xa67e9f021b9d208f7e3365b2a155e3c55b27de71","name":"KleeKai","symbol":"KLEE","transferCount":"37061"}]});
      props.apiCalled(false)
      enqueueSnackbar(`Server error: ${error}!! `);
    }
  }

  const channels = [{"id": "www.cnn.com", "channel": "CNN"},{"id": "www.nytimes.com", "channel": "New York times"}];
  const ITEM_HEIGHT = 35;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },

  };

  const handleCategoryChange = (event) => {
    setChannel(event.target.value);
  };

  return (
    <Paper
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "80%", flexGrow: 0, marginTop: "74px" }}
    >
    <Box
      component="form"
      sx={{
         m: 1, width: '100%', display: 'flex'
      }}
      autoComplete="off"
      onSubmit={Search}
    >
      <FormControl  sx={{ width:"20%" }}>

      <InputLabel id="sub-graph-label">Select channel</InputLabel>
       <Select
          labelId="sub-graph-label"
          sx={{  height:"55px", marginRight:"5px"}}
          id="sub-graph"
          value={channel}
          label="Select channel"
          MenuProps={MenuProps}
          onChange={handleCategoryChange}
          required
          defaultValue={channel}
        >
          {channels.map((subgraph_) => (
            <MenuItem value={subgraph_.id}>
              {subgraph_.channel}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
      <TextField
        sx={{ width:"75%"}}
        id="outlined-controlled"
        label={"What do you want to know?"}
        value={input}
        onChange={(event) => {
            setInput(event.target.value);
        }}
        autoComplete="off"
        required
        onSubmit={Search}
      />

      <IconButton type="submit" sx={{ p: '10px', width:"5%", marginRight:"0px" }} aria-label="search">
        <SearchIcon type="submit" />
      </IconButton>

      </Box>
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    data: state.counter.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setData: (data) => dispatch(setData(data)),
    apiCalled: (data) => dispatch(apiCalled(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizedInputBase)
