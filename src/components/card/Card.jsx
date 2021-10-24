import styles from "./Card.module.scss"
import Avatar from "../avatar/Avatar"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MuiCard from "@mui/material/Card"
import { CardMedia, CardContent, CardHeader, Chip, Grid } from "@mui/material"
import millify from "millify"

function Card({name, likes=0, mediaUrl, user, price, currency}){
    return (
        <MuiCard className={styles.card}>
            <CardHeader
                avatar={
                    <Avatar size={30} url={user.avatarUrl} verified={user.verified} />
                }
            />
            <CardMedia className={styles.media} 
                component="img"
                image={mediaUrl}
            />
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