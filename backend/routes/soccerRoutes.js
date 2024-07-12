import {addNewPlayer, getPlayers} from '../controllers/playerControllers';

const routes= (app) => {
    app.route('/players')
    .post(addNewPlayer)  //Post Endpoint
    .get(getPlayers)  //Get Endpoint
}

export default routes