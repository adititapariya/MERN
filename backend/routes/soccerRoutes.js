import {addNewPlayer, getPlayers, getPlayerWithId} from '../controllers/playerControllers';

const routes= (app) => {
    app.route('/players')
    .post(addNewPlayer)  //Post Endpoint
    .get(getPlayers)  //Get Endpoint
    
    app.route('/player/:PlayerId')
    .get(getPlayerWithId) //Get Endpoint for specific player
}

export default routes