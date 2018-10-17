import React from 'react';
import axios from 'axios';

import ClubRankingTable from './ClubRankingTable';
import './ClubRanking.css';

class ClubRanking extends React.Component {
	constructor() {
		super();

		this.state = {
			ranking: []
		};
	}

	componentDidMount() {
		const { REACT_APP_API_TOKEN } = process.env;

		axios.get('https://api.football-data.org/v2/competitions/BSA/standings', {
			headers: {
				'X-Auth-Token': REACT_APP_API_TOKEN
			}
		}).then(response => response.data.standings[0].table).then(result => result.map(item => ({
			position: item.position,
			team: item.team.name,
			playedGames: item.playedGames,
			points: item.points,
			won: item.won,
			draw: item.draw,
			lost: item.lost,
			goalsFor: item.goalsFor,
			goalsAgainst: item.goalsAgainst,
			goalDifference: item.goalDifference
		}))).then(ranking => this.setState({ ranking }));
	}

	render() {
		const {
			ranking
		} = this.state;

		return (
			<div className="ClubRanking">
				<h1>Club ranking</h1>
				<ClubRankingTable clubrank={ranking} />
			</div>
		);
	}
}

export default ClubRanking;
