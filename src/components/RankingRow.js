import React from 'react';

class RankingRow extends React.Component {
    render() {
      const posicao = this.props.posicao;
      const name = posicao.name;
  
      return (
        <tr>
          <td>{posicao.position}</td>
          <td>{name}</td>
        </tr>
      );
    }
  }

  export default RankingRow;