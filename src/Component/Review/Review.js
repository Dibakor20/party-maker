import React, { useEffect, useState } from 'react';
import ClientReview from './ClientReview';
import './Review.css'
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

 
const Review = () => {
    const[review,setReview] = useState([])
    const classes = useStyles();
    
    useEffect(()=>{
        fetch('https://immense-river-88635.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    return (
        <>
            <div id="review" className="container">
            <h5 class="text-center what mb-5">WHAT OUR CUSTOMERS ARE SAYING</h5>
                <div className="row">
                {
                        review.length === 0 && <div className={classes.root}>
                        <CircularProgress />
                        
                      </div>
                    }

                    {
                        review.map(client=><div className="col-md-4"><ClientReview client={client}></ClientReview></div>)
                    }
                </div>
            </div>
        </>
    );
};

export default Review;