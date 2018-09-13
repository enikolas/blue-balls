import React from 'react';
import RankingRow from './RankingRow';
import './RankingTable.css';

class RankingTable extends React.Component {
    render() {
			const { posicoes } = this.props;
			let user = posicoes.filter(posicao => posicao.self === true);

			const rows = posicoes
				.slice(0,3)
				.concat(user)
				.map((posicao) => (

				<RankingRow
					posicao={posicao}
					key={posicao.name} />
			));

      return (
        <table className="RankingTable">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Participante</th>
							<th>Pontos</th>
							<th>Acertos</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export default RankingTable;
