import mongoose from "mongoose";
import { PlayerSchema} from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema)

export const addNewPlayer= async (req, res) => {
    let newPlayer = new Player (req.body)

    try {
        const player = await newPlayer.save();
        res.json(player)
    }
    catch(err){
        res.send(err)
    }
}

export const getPlayers = async (req, res) => {
    try{
        const players= await Player.find({})
        res.json(players)
    }
    catch(err){
        res.send(err)
    }
}