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
  }
  if (props.isLoading) {
    return (
      <CircularProgress sx={{ align: 'center', marginTop: "10px", }} color="secondary" />
    )
  }
  else {


    return (

      <>
        { data_present && <Variants data={data} />}
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
