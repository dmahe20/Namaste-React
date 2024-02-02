import React, { useState } from 'react';

function TableCheckbox() {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 35 },
  ]);

  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSingleSelect = (id) => {
    const selectedIndex = selectedIds.indexOf(id);
    let newSelectedIds = [];

    if (selectedIndex === -1) {
      newSelectedIds = [...selectedIds, id];
    } else if (selectedIndex === 0) {
      newSelectedIds = selectedIds.slice(1);
    } else if (selectedIndex === selectedIds.length - 1) {
      newSelectedIds = selectedIds.slice(0, -1);
    } else if (selectedIndex > 0) {
      newSelectedIds = selectedIds.slice(0, selectedIndex).concat(selectedIds.slice(selectedIndex + 1));
    }

    setSelectedIds(newSelectedIds);
    setSelectAll(newSelectedIds.length === data.length);
  };

  const handleSelectAll = () => {
    const newSelectedIds = selectAll ? [] : data.map((item) => item.id);
    setSelectedIds(newSelectedIds);
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedIds.includes(item.id)}
                  onChange={() => handleSingleSelect(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCheckbox;
