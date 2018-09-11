import React from 'react';
import './RankingRow.css';

class RankingRow extends React.Component {
    render() {
      const posicao = this.props.posicao;
      const name = posicao.name;
  
      return (
        <tr className="SimpleRow">
          <td>{posicao.position}</td>
          <td>{name}</td>
        </tr>
      );
    }
  }

  export default RankingRow;