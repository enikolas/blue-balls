import React from 'react';
import RankingTable from './RankingTable';

class SimpleRankingTable extends React.Component {
  render() {
    return (
      <div>
        <RankingTable posicoes={this.props.posicoes} />
      </div>
    );
  }
}
export default SimpleRankingTable;
