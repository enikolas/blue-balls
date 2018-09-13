import React from 'react';
import './RankingRow.css';

class RankingRow extends React.Component {
    render() {
      const posicao = this.props.posicao;
			const name = posicao.name.split(' ',1);
			const pontos = posicao.pontos;
			const acertos = posicao.acertos;
  
      return (
        <tr className="RankingRow">
          <td>{posicao.position}</td>
          <td>{name}</td>
					<td>{pontos}</td>
					<td>{acertos}</td>
        </tr>
      );
    }
  }

  export default RankingRow;