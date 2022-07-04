const uniquePath = (rows, columns) => {
  return rows === 1 || columns === 1 ? 1 : uniquePath(rows - 1, columns) + uniquePath(rows, columns - 1);
}

