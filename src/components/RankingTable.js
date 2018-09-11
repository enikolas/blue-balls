import React from 'react';
import RankingRow from './RankingRow';

class RankingTable extends React.Component {
    render() {
      const rows = [];
      
      this.props.posicoes.forEach((posicao) => {
        rows.push(
          <RankingRow
            posicao={posicao}
            key={posicao.name} />
        );
      });
  
      return (
        <table className="SimpleTable">
          <thead>
            <tr className="SimpleTableRow">
              <th>Posicao</th>
              <th>Participante</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export default RankingTable;
