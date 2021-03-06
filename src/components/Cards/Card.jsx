import React from 'react';
import styles from './Card.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

import {Card, CardContent, Typography, Grid} from '@material-ui/core';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) =>
{
    debugger;
    console.log(recovered);
    console.log(deaths);

    if(!confirmed){
        return 'Loading...';
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end = {confirmed.value}
                                duration = {2.5}
                                seperator = ","
                            />
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary" > Real Data</Typography>
                        <Typography variant="body2">Number of active cases of Covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered</Typography>
                        <Typography variant="h5"> <CountUp 
                                start={0}
                                end = {recovered.value}
                                duration = {2.5}
                                seperator = ","
                            /></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary" > Real Data</Typography>
                        <Typography variant="body2">Number of recoveries cases of Covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Deaths</Typography>
                        <Typography variant="h5"> <CountUp 
                                start={0}
                                end = {deaths.value}
                                duration = {2.5}
                                seperator = ","
                            /> </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography color="textSecondary" > Real Data</Typography>
                        <Typography variant="body2">Number of Deaths cases of Covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;