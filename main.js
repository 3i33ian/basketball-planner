const team = {
  _players:[
    {firstname: 'cina', lastname: 'somma', age:'30'},
    {firstname:'pier', lastname:'morra',age:'29'},
    {firstname:'joe', lastname:'danni', age:'30'}
  ],
  _games:[ 
    {oppontent: 'lazio', teamPoints: '33', opponentPoints:'30'},
    {oppontent: 'roma', teamPoints: '2', opponentPoints:'40'},
    {oppontent: 'tibet', teamPoints: '100', opponentPoints:'28'}
  ],
  get players(){
    return this._players
  },
  get games(){
    return this._games
  },
  addPlayer(newFirstName, newLastName, newAge){
  let player = {firstName: newFirstName, lastName: newLastName, age: newAge}
  this._players.push(player)
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints ){
  let game = {opponent:newOpponent, teamPoints:newTeamPoints, opponentPoints:newOpponentPoints}
  this._game.push(game)
  }

}
team.addPlayer('bugs','bunny','76')
team.game('titans', '100', '98')
console.log(team._players)
console.log(team._games)
