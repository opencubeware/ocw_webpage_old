import * as React from 'react';
import _ from 'lodash';

interface ITableGrid {
  times: number;
}

export class TableGrid extends React.Component<ITableGrid, {}> {
  public render() {
    const { times } = this.props;
    let rows = [];
    _.times(times, (i) => {
      rows.push(
        <tr key={i}>
          <td />
          <td />
          <td />
        </tr>
      );
    });

    return (
      <table className='border'>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}