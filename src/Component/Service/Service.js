import React, { useEffect, useState } from 'react';
import Event from './Event';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Service = () => {
    const [event,setEvent] = useState([])
    const classes = useStyles();

    useEffect(()=>{
        fetch('https://immense-river-88635.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setEvent(data))
    },[])

    return (
        <>
         <div className="container mt-5 mb-5">
            <h1 className="text-center mb-5">Our Services</h1>
            <div className="row">
                  {
                        event.length === 0 && <div className={classes.root}>
                        <CircularProgress />
                        
                      </div>
                    }

                {
                    event.map(party=><div className="col-md-3"><Event party={party}></Event> </div>)
                }
            </div>
         </div>   
        </>
    );
};

export default Service;