import styles from "./Card.module.scss"
import Avatar from "../avatar/Avatar"
import FavoriteIcon from '@mui/icons-material/Favorite';
import LiveIcon from '@mui/icons-material/FiberManualRecord';
import MuiCard from "@mui/material/Card"
import { CardMedia, CardContent, CardHeader, Chip, Grid, Badge } from "@mui/material"
import millify from "millify"
import Countdown from "react-countdown"
import { Fragment } from "react";

function Card({name, likes=0, mediaUrl, user, price, currency, timeLeft}){
    return (
        <MuiCard className={`${styles.card} ${timeLeft && styles.live}`}>
            <CardHeader
                avatar={
                    <Avatar size={30} url={user.avatarUrl} verified={user.verified} />
                }
            />
            <div style={{position: "relative"}}>
                <CardMedia className={styles.media} 
                    component="img"
                    image={mediaUrl}
                />
                {timeLeft && (
                <Fragment>
                    <Badge 
                        className={styles.badge}
                        badgeContent={"Live".toUpperCase()}
                    >
                        <LiveIcon />
                    </Badge>
                    <div className={styles.countdown}>
                        <Countdown date={Date.now() + timeLeft} />
                    </div>
                </Fragment>
                )}
                
            </div>
            <CardContent>
                <Grid container>
                    <Grid item xs={8}>
                        <p className={styles.title}>{name}</p>
                        <p className={styles.price}>~{price} {currency}</p>
                    </Grid>
                    <Grid item xs={4}>
                        <Chip className={styles.likes}
                            icon={<FavoriteIcon className={styles.heart}/>}
                            label={millify(likes)}
                            variant="outlined" 
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </MuiCard>
    )
}

export default Card;