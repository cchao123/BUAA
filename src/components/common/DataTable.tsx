import React from 'react';

interface Column {
  key: string;
  title: string;
  className?: string;
  render?: (value: any, record: any) => React.ReactNode;
}

interface DataTableProps {
  data: any[];
  columns: Column[];
  className?: string;
  dataVisibleRows?: string;
}

export default function DataTable({ 
  data, 
  columns, 
  className = "wfp-wrapper wfp-table--data mb4",
  dataVisibleRows
}: DataTableProps) {
  return (
    <table className={className} data-visible-rows={dataVisibleRows}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className={column.className}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={record.id || index}>
            {columns.map((column) => (
              <td key={column.key}>
                {column.render 
                  ? column.render(record[column.key], record)
                  : record[column.key]
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
