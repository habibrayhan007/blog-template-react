import React, { useState } from 'react'
import { Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FolderIcon from '@mui/icons-material/Folder';

const CardList = () => {
    const details = [
        {
            "id": 1,
            "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/beautiful-1868656-1024x469-1.jpg",
            "category": "Hoverbic",
            "title": "The worlds most popular fashion blogger",
            "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
        },
        {
            "id": 2,
            "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/rg2.jpg",
            "category": "Fashion",
            "title": "Brand New Fashion Line for 2018",
            "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
        },
        {
            "id": 3,
            "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/gh2.jpg",
            "category": "Fashion",
            "title": "Budget Friendly Fashion Bloggers",
            "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
        },
        {
            "id": 4,
            "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/Become-a-Successful-Fashion-Designer.jpg",
            "category": "Fashion",
            "title": "How to Become a Successful Fashion Designer",
            "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
        },
        {
            "id": 5,
            "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/How-to-Be-a-Good-Friend.jpg",
            "category": "Lifestyle",
            "title": "How to Be a Good Friend on Social Media",
            "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
        },
        {
            "id": 6,
            "image": "https://blogdesigner-79e1.kxcdn.com/wp-content/uploads/2022/08/Tasty-Things-With-Chef-Charlie-1.jpg",
            "category": "Food Restaurant",
            "title": "Let’s Cook Some Tasty Things With Chef Charlie",
            "description": "Splendide consectetuer eum in, vis id nostrud labores. No nam esse omnes interpretaris, quaestio delicata at nec. Est nisl menandri ex, ut cum integre nostrum forensibus, eu tibique volutpat est. At duo summo viderer. Sed homero percipitur intellegebat at, an mel prima sonet patrioque. His malis omnium ut, fabulas intellegam no sed, sed ne mandamus complectitur. Integre labores definitiones an pri, duo in ullum delectus interesset. Ut esse iuvaret intellegam sit. Liber sadipscing vis no, sed ne iusto definitiones. Te sea nisl idque. Esse maiorum percipit per ut, tempor everti nam ei, te has zril regione nonumes. No assum atomorum concludaturque eum, iudico corrumpit interpretaris an sea. Tollit platonem pri ad. Nam quaeque abhorreant ei, vix in phaedrum atomorum. Eu quod discere adipisci vis. Quo tempor oblique scriptorem in. No odio habemus indoctum has, an pro dicta convenire temporibus, graece doctus nam ex. Ius quem essent ut, mel altera perpetua an. Solum mnesarchum concludaturque et cum, vitae dicam voluptatum has no."
        }
    ]
    const [seeDetails, setSeeDetails] = useState();

    function previousPage() {
        console.log("back button");
        setSeeDetails();
    }

    return (
        <div >
            {
                !seeDetails &&
                <div className='card-container'>
                    <div className="card-list">
                        {
                            details.map((card) => {
                                const { image, category, title, description } = card;

                                return (
                                    <Card onClick={() => setSeeDetails(card)} className='single-card' sx={{ maxWidth: 395 }}>
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={image}
                                        />
                                        <CardActions className='card-category'>
                                            <Button className='card-category-text' size="small">{category}</Button>
                                        </CardActions>
                                        <CardContent>
                                            <Typography className='card-title' align='left' gutterBottom variant="h5" component="div">
                                                {title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    display: '-webkit-box',
                                                    overflow: 'hidden',
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: 2,
                                                }}
                                                className='card-description' align='left' variant="body2" color="text.secondary">
                                                {description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button className='publisher pub-hover' startIcon={<PersonOutlineIcon />}>
                                                Habib Rayhan
                                            </Button>
                                            <Button className='published-time pub-hover' startIcon={<QueryBuilderIcon />}>
                                                16 May, 2023
                                            </Button>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            }

            {
                seeDetails &&
                <div className="card-details">
                    <div className='card-details-container' >
                        <Card className='single-card' sx={{ maxWidth: 800 }}>
                            <CardContent>
                                <Typography align='left' gutterBottom variant="h4" component="div">
                                    {seeDetails.title}
                                </Typography>
                            </CardContent>
                            <CardMedia
                                component="img"
                                height="500"
                                image={seeDetails.image}
                            />
                            <CardContent>
                                <Typography className='card-details-description' align='left' variant="body2" color="text.secondary">
                                    {seeDetails.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button className='category-btn' size="small" startIcon={<FolderIcon />}>
                                    Category: <span className='card-category-btn'>{seeDetails.category}</span>
                                </Button>
                            </CardActions>
                        </Card>
                        <Button onClick={previousPage} size="large" variant="contained">back</Button>
                    </div>
                </div>
            }
        </div>

    )
}

export default CardList;