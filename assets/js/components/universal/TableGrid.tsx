import * as React from 'react';
import { times } from 'lodash';

interface ITableGrid {
  rows: number;
  columns: number;
}

export class TableGrid extends React.Component<ITableGrid, {}> {
  public render() {
    const { rows, columns } = this.props;
    let rowsArray = [];
    let columnsArray = [];

    times(columns, (i) => {
      columnsArray.push(
        <td key={i} />
      )
    });
    times(rows, (i) => {
      rowsArray.push(
        <tr key={i}>
          {columnsArray}
        </tr>
      );
    });

    return (
      <table className='border'>
        <tbody>
          {rowsArray}
        </tbody>
      </table>
    )
  }
}