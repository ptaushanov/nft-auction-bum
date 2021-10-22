import styles from "./Card.module.scss"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Avatar from "../avatar/Avatar"
import Chip from "@mui/material/Chip"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from "@mui/material/Grid"
import millify from "millify"

export default function({name, likes=0, mediaUrl, user, price, currency}){
    return (
        <Card className={styles.card} sx={{ maxWidth: 300 }}>
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
        </Card>
    )
}