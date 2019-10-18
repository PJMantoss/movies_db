import React ,{Component} from 'react';
import {Link} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = {
    appBar: {
        position: 'relative',
    },
    flex: {
        flex: 1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}


export class SearchResult extends Component {
    
        state = {
            open:false,
            show:null
        }
        

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    componentDidMount(){
        const {id} = this.props.match.params;

        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then((response) => response.json())
        .then(json => this.setState({show:json, open:true}))
    }

    render() {
        const {show} = this.state;
        return (
            <div>
                {
                    show !== null && 
                        <Dialog 
                             fullscreen 
                             open={this.state.open} 
                             onClose={this.handleClose}
                             TransitionComponent={Transition} 
                        >
                    
                                <AppBar style={styles.appBar}>
                                    <Toolbar>
                                        <Link to={'/'}>
                                            <IconButton color="default" onClick={this.handleClose} aria-label="Close">
                                                <CloseIcon />
                                            </IconButton>
                                        </Link>
                                        <Typography variant="title" color="inherit" style={styles.flex}>
                                            {show.name}
                                        </Typography>
                                    </Toolbar>
                                </AppBar>

                                <div style={{
                                    flex: 1,
                                    display:'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <div>
                                        <ListItem button>
                                            {
                                                show.image != null &&
                                                <img alt="Show" src={show.image.medium}/>
                                            }
                                        </ListItem>
                                    </div>

                                    <div>
                                        <List>
                                            <ListItem button>
                                                <ListItemText primary="Premiered" secondary={show.premiered} />
                                            </ListItem>

                                            <Divider />

                                            <ListItem button>
                                                <ListItemText primary="Rating" secondary={show.rating.average} />
                                            </ListItem>

                                            <Divider />

                                            <ListItem button>
                                                <ListItemText primary="Episodes" secondary={show._embedded.episodes.length} />
                                            </ListItem>

                                            <Divider />

                                        </List>
                                    </div>

                                </div>
                        </Dialog>
                }
            </div>
        )
    }
}

export default SearchResult;
