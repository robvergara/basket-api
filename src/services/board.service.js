class boardService {
    constructor(){
        this.teams = [];

    }

    async find(query){
        const {championship} = query;
        const newChampionshipList = championship.sort((a,b)=> b.points - a.points);
    }
}

module.exports = boardService;